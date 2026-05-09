import { parseFollowers, parseFollowing } from './parser'
import type {
  RawInstagramFollowersFile,
  RawInstagramFollowingFile,
} from './types'

describe('parseFollowers', () => {
  it('should parse raw followers file and return new array of user objects', () => {
    // arrange
    const rawFile: RawInstagramFollowersFile = [
      {
        string_list_data: [
          {
            href: 'https://instagram.com/julia.nowak',
            timestamp: 1774368411,
            value: 'julia.nowak',
          },
        ],
      },
      {
        string_list_data: [
          {
            href: 'https://instagram.com/john.smith',
            timestamp: 1774369999,
            value: 'john.smith',
          },
        ],
      },
    ]

    // act
    const result = parseFollowers(rawFile)

    // assert
    expect(result).toEqual([
      {
        username: 'julia.nowak',
        profileUrl: 'https://instagram.com/julia.nowak',
        timestamp: 1774368411,
      },
      {
        username: 'john.smith',
        profileUrl: 'https://instagram.com/john.smith',
        timestamp: 1774369999,
      },
    ])
  })

  it('should return empty array when raw followers file is empty', () => {
    // arrange
    const rawFile: RawInstagramFollowersFile = []

    // act
    const result = parseFollowers(rawFile)

    // assert
    expect(result).toEqual([])
  })

  it('should map username from value field and not from href', () => {
    // arrange
    const rawFile: RawInstagramFollowersFile = [
      {
        string_list_data: [
          {
            href: 'https://instagram.com/some-random-url',
            timestamp: 1774368411,
            value: 'real.username',
          },
        ],
      },
    ]

    // act
    const result = parseFollowers(rawFile)

    // assert
    expect(result[0]).toEqual({
      username: 'real.username',
      profileUrl: 'https://instagram.com/some-random-url',
      timestamp: 1774368411,
    })

    expect(result[0]?.username).not.toBe(
      'https://instagram.com/some-random-url'
    )
  })
})

describe('parseFollowing', () => {
  it('should parse raw following file and return new array of user objects', () => {
    // arrange
    const rawFile: RawInstagramFollowingFile = {
      relationships_following: [
        {
          title: 'julia.nowak',
          string_list_data: [
            {
              href: 'https://instagram.com/julia.nowak',
              timestamp: 1774368411,
            },
          ],
        },
        {
          title: 'john.smith',
          string_list_data: [
            {
              href: 'https://instagram.com/john.smith',
              timestamp: 1774369999,
            },
          ],
        },
      ],
    }

    // act
    const result = parseFollowing(rawFile)

    // assert
    expect(result).toEqual([
      {
        username: 'julia.nowak',
        profileUrl: 'https://instagram.com/julia.nowak',
        timestamp: 1774368411,
      },
      {
        username: 'john.smith',
        profileUrl: 'https://instagram.com/john.smith',
        timestamp: 1774369999,
      },
    ])
  })

  it('should return empty array when raw following file is empty', () => {
    // arrange
    const rawFile: RawInstagramFollowingFile = {
      relationships_following: [],
    }

    // act
    const result = parseFollowing(rawFile)

    // assert
    expect(result).toEqual([])
  })

  it('should map username from title field and not from string_list_data', () => {
    // arrange
    const rawFile: RawInstagramFollowingFile = {
      relationships_following: [
        {
          title: 'real.username',
          string_list_data: [
            {
              href: 'https://instagram.com/some-random-url',
              timestamp: 1774368411,
            },
          ],
        },
      ],
    }

    // act
    const result = parseFollowing(rawFile)

    // assert
    expect(result).toHaveLength(1)

    expect(result[0]).toEqual({
      username: 'real.username',
      profileUrl: 'https://instagram.com/some-random-url',
      timestamp: 1774368411,
    })

    expect(result[0]?.username).not.toBe(
      'https://instagram.com/some-random-url'
    )
  })
})
