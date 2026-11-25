import { useId, useState } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './FAQ.module.css'

const FAQ_KEYS = ['one', 'two', 'three', 'four'] as const

type FAQItemProps = {
  question: string
  answer: string
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const id = useId()
  const buttonId = `${id}-question`
  const panelId = `${id}-answer`

  return (
    <div className={[styles.item, isOpen ? styles.open : ''].join(' ')}>
      <h3 className={styles.questionHeading}>
        <button
          type="button"
          id={buttonId}
          className={styles.question}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => {
            setIsOpen((prev) => !prev)
          }}
        >
          <span>{question}</span>
          <span className={styles.icon} aria-hidden="true" />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={styles.panel}
        inert={!isOpen}
      >
        <div className={styles.panelInner}>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export const FAQ = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <h2 className={styles.heading} id="faq-heading">
        {t('faq.title')}
      </h2>
      <div className={styles.list}>
        {FAQ_KEYS.map((key) => (
          <FAQItem
            key={key}
            question={t(`faq.${key}.q`)}
            answer={t(`faq.${key}.a`)}
          />
        ))}
      </div>
    </section>
  )
}
