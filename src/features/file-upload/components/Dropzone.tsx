import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CheckCircle, Upload } from 'lucide-react'

import type { FileType, UploadState } from '@/types/types'

import styles from './Dropzone.module.css'

type DropzoneProps = {
  fileType: FileType
  uploadState: UploadState
  onFileSelect: (file: File) => void
}

const LABELS: Record<FileType, string> = {
  followers: 'followers.json',
  following: 'following.json',
}

export const Dropzone = ({
  fileType,
  uploadState,
  onFileSelect,
}: DropzoneProps) => {
  const { t } = useTranslation()
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (file: File | undefined) => {
    if (!file) return
    if (!file.name.endsWith('.json')) return
    onFileSelect(file)
  }

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    handleFile(e.dataTransfer.files[0])
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFile(e.target.files?.[0])
  }

  const isSuccess =
    uploadState.status === 'ready' ||
    (uploadState.status === 'partial' && uploadState.data === fileType)

  return (
    <div
      className={[
        styles.dropzone,
        isDragging ? styles.dragging : '',
        isSuccess ? styles.success : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={() => inputRef.current?.click()}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
      aria-label={t('upload.ariaLabel', { filename: LABELS[fileType] })}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".json"
        className={styles.input}
        onChange={handleInputChange}
      />

      {isSuccess ? <CheckCircle size={24} /> : <Upload size={24} />}
      <span className={styles.label}>{LABELS[fileType]}</span>
      <span className={styles.hint}>
        {isSuccess ? t('upload.success') : t(`upload.${fileType}.hint`)}
      </span>
    </div>
  )
}
