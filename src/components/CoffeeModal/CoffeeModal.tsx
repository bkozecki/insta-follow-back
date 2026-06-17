import { useTranslation } from 'react-i18next'
import { Coffee, X } from 'lucide-react'

import styles from './CoffeeModal.module.css'

const BUY_ME_A_COFFEE_URL = 'https://www.buymeacoffee.com/bartoszk'

type CoffeeModalProps = {
  onClose: () => void
}

export const CoffeeModal = ({ onClose }: CoffeeModalProps) => {
  const { t } = useTranslation()

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          <X size={16} />
        </button>
        <div className={styles.icon}>
          <Coffee size={28} />
        </div>
        <p className={styles.text}>{t('footer.support')}</p>
        <a
          href={BUY_ME_A_COFFEE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.coffeeBtn}
          onClick={onClose}
        >
          <Coffee size={16} />
          {t('footer.buyMeCoffee')}
        </a>
        <button className={styles.dismissBtn} onClick={onClose}>
          {t('modal.dismiss')}
        </button>
      </div>
    </div>
  )
}
