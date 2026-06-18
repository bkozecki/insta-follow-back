import { useTranslation } from 'react-i18next'

import { Dropzone } from '@/features/file-upload/components/Dropzone'

import type { FileType, UploadState } from '@/types/types'

import styles from './UploadSection.module.css'

type UploadSectionProps = {
  uploadState: UploadState
  onFileSelect: (file: File, fileType: FileType) => void
}

export const UploadSection = ({
  uploadState,
  onFileSelect,
}: UploadSectionProps) => {
  const { t } = useTranslation()

  return (
    <section id="upload" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{t('upload.instruction')}</span>
        <a
          href="https://www.instagram.com/download/request/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {t('upload.instructionLink')}
        </a>
      </div>
      <div className={styles.dropzones}>
        <Dropzone
          fileType="followers"
          uploadState={uploadState}
          onFileSelect={(file) => { onFileSelect(file, 'followers') }}
        />
        <Dropzone
          fileType="following"
          uploadState={uploadState}
          onFileSelect={(file) => { onFileSelect(file, 'following') }}
        />
      </div>
      {uploadState.status === 'error' && (
        <p className={styles.errorMsg}>{uploadState.error.message}</p>
      )}
    </section>
  )
}
