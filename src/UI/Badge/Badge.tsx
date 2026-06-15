import styles from './Badge.module.css'

type BadgeVariant = 'default' | 'success' | 'warning' | 'info'

type BadgeProps = {
  children: React.ReactNode
  variant?: BadgeVariant
}

const variantClass: Record<BadgeVariant, string> = {
  default: styles.default ?? '',
  success: styles.success ?? '',
  warning: styles.warning ?? '',
  info: styles.info ?? '',
}

export const Badge = ({ children, variant = 'default' }: BadgeProps) => (
  <span className={[styles.badge, variantClass[variant]].join(' ')}>
    {children}
  </span>
)
