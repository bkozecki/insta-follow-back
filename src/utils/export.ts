import type { User } from '@/types/types'

function escapeCSVValue(value: string): string {
  return `"${value.replace(/"/g, '""')}"`
}

export function generateCSV(users: User[], title: string): string {
  const header = 'username,profileUrl,followedAt'
  const rows = users.map((user) =>
    [
      escapeCSVValue(user.username),
      escapeCSVValue(user.profileUrl),
      escapeCSVValue(new Date(user.timestamp * 1000).toISOString()),
    ].join(',')
  )
  return [title, header, ...rows].join('\n')
}

export function generateTXT(users: User[]): string {
  return users.map((user) => user.username).join('\n')
}

export function downloadFile(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
