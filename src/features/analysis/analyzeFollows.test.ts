import { analyzeFollows } from '@/features/analysis/analyzeFollows'

import type { User } from '@/types/types'

const user = (username: string): User => ({
  username,
  profileUrl: `https://example.com/${username}`,
  timestamp: 0,
})

describe('analyzeFollows', () => {
  it('trafia do notFollowingBack gdy użytkownik jest w following, ale nie w followers', () => {
    const following = [user('alice')]
    const followers: User[] = []

    const result = analyzeFollows(followers, following)

    expect(result.notFollowingBack).toEqual([user('alice')])
    expect(result.notFollowedBack).toEqual([])
    expect(result.mutualFollow).toEqual([])
  })

  it('trafia do notFollowedBack gdy użytkownik jest w followers, ale nie w following', () => {
    const followers = [user('bob')]
    const following: User[] = []

    const result = analyzeFollows(followers, following)

    expect(result.notFollowedBack).toEqual([user('bob')])
    expect(result.notFollowingBack).toEqual([])
    expect(result.mutualFollow).toEqual([])
  })

  it('trafia do mutualFollow gdy użytkownik jest w obu listach', () => {
    const followers = [user('carol')]
    const following = [user('carol')]

    const result = analyzeFollows(followers, following)

    expect(result.mutualFollow).toEqual([user('carol')])
    expect(result.notFollowedBack).toEqual([])
    expect(result.notFollowingBack).toEqual([])
  })

  it('zwraca trzy puste tablice gdy obie listy są puste', () => {
    const result = analyzeFollows([], [])

    expect(result.notFollowingBack).toEqual([])
    expect(result.notFollowedBack).toEqual([])
    expect(result.mutualFollow).toEqual([])
  })

  it('poprawnie segreguje wielu użytkowników naraz', () => {
    const followers = [user('mutual'), user('they-follow-me')]
    const following = [user('mutual'), user('i-follow-them')]

    const result = analyzeFollows(followers, following)

    expect(result.mutualFollow).toEqual([user('mutual')])
    expect(result.notFollowedBack).toEqual([user('they-follow-me')])
    expect(result.notFollowingBack).toEqual([user('i-follow-them')])
  })
})
