import { useTranslation } from 'react-i18next'

import styles from './FAQ.module.css'

const FAQ_KEYS = ['one', 'two', 'three', 'four'] as const

export const FAQ = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <h2 className={styles.heading} id="faq-heading">
        {t('faq.title')}
      </h2>
      <div className={styles.list}>
        {FAQ_KEYS.map((key) => (
          <details key={key} className={styles.item}>
            <summary className={styles.question}>
              <span>{t(`faq.${key}.q`)}</span>
              <span className={styles.icon} aria-hidden="true" />
            </summary>
            <p className={styles.answer}>{t(`faq.${key}.a`)}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
