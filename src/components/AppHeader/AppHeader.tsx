import { useTranslation } from 'react-i18next'
import { ArrowDown } from 'lucide-react'

import { HeroIllustration } from '@/components/HeroIllustration/HeroIllustration'

import styles from './AppHeader.module.css'

export const AppHeader = () => {
  const { t } = useTranslation()

  const scrollToUpload = () => {
    document.getElementById('upload')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.badge}>Instagram · JSON Export</div>
        <h1 className={styles.title}>
          {t('hero.title')} <span className={styles.brand}>Folo.</span>
        </h1>
        <p className={styles.subtitle}>{t('hero.subtitle')}</p>
        <button className={styles.cta} onClick={scrollToUpload}>
          {t('hero.cta')}
          <ArrowDown size={16} />
        </button>
      </div>
      <HeroIllustration />
    </header>
  )
}
