import { useTranslation } from 'react-i18next'

import styles from './SearchInput.module.css'

type SearchInputProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export const SearchInput = ({
  value,
  onChange,
  placeholder,
}: SearchInputProps) => {
  const { t } = useTranslation()
  return (
    <input
      className={styles.input}
      type="search"
      placeholder={placeholder ?? t('results.search')}
      value={value}
      onChange={(e) => {
        onChange(e.target.value)
      }}
    />
  )
}
