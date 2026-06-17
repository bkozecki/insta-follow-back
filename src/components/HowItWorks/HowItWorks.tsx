import { useTranslation } from 'react-i18next'
import { Download, Search, ShieldCheck, Upload } from 'lucide-react'

import { VideoPlaceholder } from '../VideoPlaceholder/VideoPlaceholder'
import styles from './HowItWorks.module.css'

const STEPS = [
  { Icon: Download, stepKey: 'one', hasVideo: true },
  { Icon: Upload, stepKey: 'two', hasVideo: false },
  { Icon: Search, stepKey: 'three', hasVideo: false },
] as const

export const HowItWorks = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>{t('steps.title')}</h2>
        <div className={styles.privacyBadge}>
          <ShieldCheck size={14} />
          {t('privacy.badge')}
        </div>
      </div>

      <ol className={styles.steps}>
        <span className={styles.verticalLine} aria-hidden="true" />
        {STEPS.map(({ Icon, stepKey, hasVideo }, index) => (
          <li key={stepKey} className={styles.step}>
            <div className={styles.stepIconDesktop} aria-hidden="true">
              <Icon size={24} />
            </div>

            <div className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.stepIconMobile} aria-hidden="true">
                  <Icon size={20} />
                </div>

                <div className={styles.stepContent}>
                  <div className={styles.stepMeta}>
                    <span className={styles.stepNumber}>{index + 1}</span>
                    <h3 className={styles.stepTitle}>
                      {t(`steps.${stepKey}.title`)}
                    </h3>
                  </div>
                  <p className={styles.stepDesc}>
                    {t(`steps.${stepKey}.description`)}
                  </p>
                  {hasVideo && (
                    <div className={styles.videoWrap}>
                      <VideoPlaceholder />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
