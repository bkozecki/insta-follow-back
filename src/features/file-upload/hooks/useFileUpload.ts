import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { parseFollowers, parseFollowing } from '@/adapters/instagram/parser'
import type {
  RawInstagramFollowersFile,
  RawInstagramFollowingFile,
} from '@/adapters/instagram/types'
import type { FileType, UploadState, User } from '@/types/types'

type FilesData = {
  followers: User[] | null
  following: User[] | null
}

export const useFileUpload = () => {
  const { t } = useTranslation()
  const [filesData, setFilesData] = useState<FilesData>({
    followers: null,
    following: null,
  })
  const [loading, setLoading] = useState<FileType | null>(null)
  const [uploadError, setUploadError] = useState<Error | null>(null)

  const uploadState = useMemo((): UploadState => {
    if (uploadError) return { status: 'error', error: uploadError }
    if (filesData.followers && filesData.following) {
      return {
        status: 'ready',
        followers: filesData.followers,
        following: filesData.following,
      }
    }
    if (filesData.followers)
      return { status: 'partial', data: 'followers', users: filesData.followers }
    if (filesData.following)
      return { status: 'partial', data: 'following', users: filesData.following }
    if (loading) return { status: 'uploading', data: loading }
    return { status: 'idle' }
  }, [filesData, loading, uploadError])

  const handleFileSelect = (file: File, fileType: FileType) => {
    setLoading(fileType)
    setUploadError(null)

    const reader = new FileReader()

    reader.onload = (e) => {
      const content = e.target?.result

      if (typeof content !== 'string') {
        setLoading(null)
        setUploadError(new Error(t('error.readFailed')))
        return
      }

      try {
        const raw: unknown = JSON.parse(content)
        const users: User[] =
          fileType === 'followers'
            ? parseFollowers(raw as RawInstagramFollowersFile)
            : parseFollowing(raw as RawInstagramFollowingFile)

        setFilesData((prev) => ({ ...prev, [fileType]: users }))
        setLoading(null)
      } catch {
        setLoading(null)
        setUploadError(new Error(t('error.invalidJson')))
      }
    }

    reader.onerror = () => {
      setLoading(null)
      setUploadError(new Error(t('error.readError')))
    }

    reader.readAsText(file)
  }

  return { uploadState, handleFileSelect }
}
