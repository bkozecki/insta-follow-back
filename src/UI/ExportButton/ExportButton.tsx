import { useTranslation } from 'react-i18next'
import { Download } from 'lucide-react'

import styles from './ExportButton.module.css'

type ExportButtonProps = {
  onExportCSV: () => void
  onExportTXT: () => void
  disabled?: boolean
}

export const ExportButton = ({ onExportCSV, onExportTXT, disabled = false }: ExportButtonProps) => {
  const { t } = useTranslation()

  return (
    <div className={styles.group}>
      <button className={styles.btn} onClick={onExportCSV} disabled={disabled}>
        <Download size={12} />
        {t('export.csv')}
      </button>
      <button className={styles.btn} onClick={onExportTXT} disabled={disabled}>
        <Download size={12} />
        {t('export.txt')}
      </button>
    </div>
  )
}
