import { render, screen, within } from '@testing-library/react'

import { analyzeFollows } from '@/features/analysis/analyzeFollows'

import i18n from '@/i18n/config'
import type { User } from '@/types/types'

import { ResultsSection } from './ResultsSection'

const user = (username: string): User => ({
  username,
  profileUrl: `https://example.com/${username}`,
  timestamp: 0,
})

const listByTitle = (title: string) => {
  const heading = screen.getByRole('heading', { name: title })
  const container = heading.closest('section')
  if (!container) throw new Error(`No section for "${title}"`)
  return within(container)
}

describe('ResultsSection', () => {
  beforeAll(async () => {
    await i18n.changeLanguage('en')
  })

  it('pokazuje każdą grupę użytkowników pod właściwym nagłówkiem', () => {
    const followers = [user('fan'), user('friend')]
    const following = [user('celebrity'), user('friend')]

    render(<ResultsSection results={analyzeFollows(followers, following)} />)

    const dontFollowYouBack = listByTitle("Don't follow you back")
    expect(dontFollowYouBack.getByText('@celebrity')).toBeInTheDocument()
    expect(dontFollowYouBack.queryByText('@fan')).not.toBeInTheDocument()

    const youDontFollowBack = listByTitle("You don't follow back")
    expect(youDontFollowBack.getByText('@fan')).toBeInTheDocument()
    expect(youDontFollowBack.queryByText('@celebrity')).not.toBeInTheDocument()

    expect(
      listByTitle('Mutual followers').getByText('@friend')
    ).toBeInTheDocument()
  })
})
