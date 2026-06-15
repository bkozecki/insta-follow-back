import { useMemo, useState } from 'react'

import type { User } from '@/types/types'
import { Badge, SearchInput, UserListItem } from '@/UI'

import styles from './ResultsList.module.css'

type ResultsListProps = {
  title: string
  users: User[]
  emptyMessage?: string
}

export const ResultsList = ({
  title,
  users,
  emptyMessage = 'Brak użytkowników w tej kategorii',
}: ResultsListProps) => {
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () =>
      users.filter((user) =>
        user.username.toLowerCase().includes(query.toLowerCase())
      ),
    [users, query]
  )

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <Badge>{users.length}</Badge>
      </header>

      <SearchInput value={query} onChange={setQuery} />

      {filtered.length === 0 ? (
        <p className={styles.empty}>
          {query ? `Brak wyników dla "${query}"` : emptyMessage}
        </p>
      ) : (
        <ul className={styles.list}>
          {filtered.map((user) => (
            <UserListItem
              key={user.username}
              username={user.username}
              profileUrl={user.profileUrl}
            />
          ))}
        </ul>
      )}
    </section>
  )
}
