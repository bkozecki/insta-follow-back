import { ResultsList } from '@/features/results/components/Resultslist'

import type { AnalysisResult } from '@/types/types'

import styles from './ResultsSection.module.css'

type ResultsSectionProps = {
  results: AnalysisResult
}

export const ResultsSection = ({ results }: ResultsSectionProps) => (
  <section className={styles.section}>
    <ResultsList
      title="Nie śledzą cię z powrotem"
      users={results.notFollowedBack}
      emptyMessage="Wszyscy których obserwujesz, obserwują cię z powrotem 🎉"
    />
    <ResultsList
      title="Nie śledzisz z powrotem"
      users={results.notFollowingBack}
      emptyMessage="Obserwujesz wszystkich którzy cię obserwują"
    />
    <ResultsList
      title="Wzajemne obserwowanie"
      users={results.mutualFollow}
      emptyMessage="Brak wzajemnych obserwujących"
    />
  </section>
)
