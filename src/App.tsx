import { useMemo } from 'react'

import { analyzeFollows } from '@/features/analysis/analyzeFollows'
import { useFileUpload } from '@/features/file-upload/hooks/useFileUpload'

import styles from './App.module.css'
import { AppHeader } from './components/AppHeader/AppHeader'
import { ResultsSection } from './components/ResultsSection/ResultsSection'
import { UploadSection } from './components/UploadSection/UploadSection'
import { ErrorMessage } from './UI/Error/ErrorMessage'

export const App = () => {
  const { uploadState, handleFileSelect } = useFileUpload()

  const results = useMemo(() => {
    if (uploadState.status !== 'ready') return null
    return analyzeFollows(uploadState.followers, uploadState.following)
  }, [uploadState])

  return (
    <main className={styles.main}>
      <AppHeader />
      <UploadSection
        uploadState={uploadState}
        onFileSelect={handleFileSelect}
      />
      {uploadState.status === 'error' && (
        <ErrorMessage message={uploadState.error.message} />
      )}
      {results && <ResultsSection results={results} />}
    </main>
  )
}
