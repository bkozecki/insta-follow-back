import { useTranslation } from 'react-i18next'
import { BarChart2 } from 'lucide-react'

import styles from './ResultsPlaceholder.module.css'

type ResultsPlaceholderProps = {
  ready: boolean
  onAnalyze: () => void
}

export const ResultsPlaceholder = ({ ready, onAnalyze }: ResultsPlaceholderProps) => {
  const { t } = useTranslation()

  if (ready) {
    return (
      <div className={styles.readyBar}>
        <button className={styles.analyzeBtn} onClick={onAnalyze}>
          {t('upload.analyze')}
        </button>
      </div>
    )
  }

  return (
    <div className={styles.emptyBar}>
      <BarChart2 size={18} className={styles.emptyIcon} />
      <span>{t('upload.placeholder')}</span>
    </div>
  )
}
