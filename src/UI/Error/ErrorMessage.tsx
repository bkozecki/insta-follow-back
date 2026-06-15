import styles from './ErrorMessage.module.css'

type ErrorMessageProps = {
  message: string
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <p className={styles.error}>{message}</p>
)
