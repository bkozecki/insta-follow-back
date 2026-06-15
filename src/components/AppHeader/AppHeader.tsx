import styles from './AppHeader.module.css'

export const AppHeader = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Insta Follow Back</h1>
    <p className={styles.subtitle}>
      Sprawdź kto nie odwzajemnia obserwowania na Instagramie
    </p>
  </header>
)
