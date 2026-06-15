import styles from './SearchInput.module.css'

type SearchInputProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export const SearchInput = ({
  value,
  onChange,
  placeholder = 'Szukaj...',
}: SearchInputProps) => (
  <input
    className={styles.input}
    type="search"
    placeholder={placeholder}
    value={value}
    onChange={(e) => {
      onChange(e.target.value)
    }}
  />
)
