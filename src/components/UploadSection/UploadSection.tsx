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
}: UploadSectionProps) => (
  <section className={styles.section}>
    <Dropzone
      fileType="followers"
      uploadState={uploadState}
      onFileSelect={(file) => {
        onFileSelect(file, 'followers')
      }}
    />
    <Dropzone
      fileType="following"
      uploadState={uploadState}
      onFileSelect={(file) => {
        onFileSelect(file, 'following')
      }}
    />
  </section>
)
