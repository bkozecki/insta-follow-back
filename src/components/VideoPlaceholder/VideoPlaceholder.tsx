import { useTranslation } from 'react-i18next'
import { Play } from 'lucide-react'

import styles from './VideoPlaceholder.module.css'

export const VideoPlaceholder = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.placeholder}>
      <div className={styles.playBtn}>
        <Play size={24} fill="currentColor" />
      </div>
      <span className={styles.label}>{t('steps.one.videoLabel')}</span>
    </div>
  )
}
