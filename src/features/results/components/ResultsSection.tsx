import { useTranslation } from 'react-i18next'

import type { AnalysisResult } from '@/types/types'

import { ResultsList } from './ResultsList'
import styles from './ResultsSection.module.css'

type ResultsSectionProps = {
  results: AnalysisResult
}

export const ResultsSection = ({ results }: ResultsSectionProps) => {
  const { t } = useTranslation()
  return (
    <section className={styles.section}>
      <ResultsList
        title={t('results.notFollowingBack')}
        users={results.notFollowedBack}
        emptyMessage={t('results.empty.notFollowingBack')}
        exportFilename="folo-not-following-back"
      />
      <ResultsList
        title={t('results.notFollowedBack')}
        users={results.notFollowingBack}
        emptyMessage={t('results.empty.notFollowedBack')}
        exportFilename="folo-not-following-you-back"
      />
      <ResultsList
        title={t('results.mutual')}
        users={results.mutualFollow}
        emptyMessage={t('results.empty.mutual')}
        exportFilename="folo-mutual-followers"
      />
    </section>
  )
}
