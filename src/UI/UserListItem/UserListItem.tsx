import { ExternalLink } from 'lucide-react'

import styles from './UserListItem.module.css'

type UserListItemProps = {
  username: string
  profileUrl: string
}

export const UserListItem = ({ username, profileUrl }: UserListItemProps) => (
  <li className={styles.item}>
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <span className={styles.username}>@{username}</span>
      <ExternalLink size={14} className={styles.icon} />
    </a>
  </li>
)
