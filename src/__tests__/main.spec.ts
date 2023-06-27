import { describe, expect, test } from 'vitest'
import osub from '../index'

describe('osub', () => {
  test('should fetch sub servers', async () => {
    const s = await osub()
    expect(s?.length).toBe(6)
  }, 60 * 1000)
})
