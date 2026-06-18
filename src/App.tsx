import { useEffect, useMemo, useState } from 'react'

import { AppHeader } from '@/components/AppHeader/AppHeader'
import { CoffeeModal } from '@/components/CoffeeModal/CoffeeModal'
import { FAQ } from '@/components/FAQ/FAQ'
import { Footer } from '@/components/Footer/Footer'
import { HowItWorks } from '@/components/HowItWorks/HowItWorks'
import { Navbar } from '@/components/Navbar/Navbar'
import { UploadSection } from '@/components/UploadSection/UploadSection'

import { analyzeFollows } from '@/features/analysis/analyzeFollows'
import { useFileUpload } from '@/features/file-upload/hooks/useFileUpload'
import { ResultsPlaceholder } from '@/features/results/components/ResultsPlaceholder'
import { ResultsSection } from '@/features/results/components/ResultsSection'

import styles from './App.module.css'

export const App = () => {
  const { uploadState, handleFileSelect } = useFileUpload()
  const [resultsVisible, setResultsVisible] = useState(false)
  const [showCoffeeModal, setShowCoffeeModal] = useState(false)

  const results = useMemo(() => {
    if (uploadState.status !== 'ready') return null
    return analyzeFollows(uploadState.followers, uploadState.following)
  }, [uploadState])

  useEffect(() => {
    if (!resultsVisible || !results) return
    const timer = setTimeout(() => {
      setShowCoffeeModal(true)
    }, 4000)
    return () => { clearTimeout(timer) }
  }, [resultsVisible, results])

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <AppHeader />
        <HowItWorks />
        <UploadSection
          uploadState={uploadState}
          onFileSelect={handleFileSelect}
        />
{!resultsVisible && (
          <ResultsPlaceholder
            ready={uploadState.status === 'ready'}
            onAnalyze={() => { setResultsVisible(true) }}
          />
        )}
        {resultsVisible && results && <ResultsSection results={results} />}
        <FAQ />
      </main>
      <Footer />
      {showCoffeeModal && (
        <CoffeeModal onClose={() => { setShowCoffeeModal(false) }} />
      )}
    </>
  )
}
