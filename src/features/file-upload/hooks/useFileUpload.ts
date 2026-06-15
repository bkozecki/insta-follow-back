import { useState } from 'react'

import { parseFollowers, parseFollowing } from '@/adapters/instagram/parser'
import type {
  RawInstagramFollowersFile,
  RawInstagramFollowingFile,
} from '@/adapters/instagram/types'
import type { FileType, UploadState, User } from '@/types/types'

export const useFileUpload = () => {
  const [uploadState, setUploadState] = useState<UploadState>({
    status: 'idle',
  })

  const handleFileSelect = (file: File, fileType: FileType) => {
    setUploadState({ status: 'uploading', data: fileType })

    const reader = new FileReader()

    reader.onload = (e) => {
      const content = e.target?.result

      if (typeof content !== 'string') {
        setUploadState({
          status: 'error',
          error: new Error('Nie udało się odczytać pliku'),
        })
        return
      }

      try {
        const raw: unknown = JSON.parse(content)
        const users: User[] =
          fileType === 'followers'
            ? parseFollowers(raw as RawInstagramFollowersFile)
            : parseFollowing(raw as RawInstagramFollowingFile)

        setUploadState((prev) => {
          if (prev.status === 'partial') {
            return {
              status: 'ready',
              followers: fileType === 'followers' ? users : prev.users,
              following: fileType === 'following' ? users : prev.users,
            }
          }

          return {
            status: 'partial',
            data: fileType,
            users,
          }
        })
      } catch {
        setUploadState({
          status: 'error',
          error: new Error('Nieprawidłowy format pliku JSON'),
        })
      }
    }

    reader.onerror = () => {
      setUploadState({
        status: 'error',
        error: new Error('Błąd podczas odczytu pliku'),
      })
    }

    reader.readAsText(file)
  }

  return { uploadState, handleFileSelect }
}
