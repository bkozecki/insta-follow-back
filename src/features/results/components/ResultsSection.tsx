import { useTranslation } from 'react-i18next'

import type { AnalysisResult } from '@/types/types'

import { ResultsList } from './Resultslist'
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
      />
      <ResultsList
        title={t('results.notFollowedBack')}
        users={results.notFollowingBack}
        emptyMessage={t('results.empty.notFollowedBack')}
      />
      <ResultsList
        title={t('results.mutual')}
        users={results.mutualFollow}
        emptyMessage={t('results.empty.mutual')}
      />
    </section>
  )
}
