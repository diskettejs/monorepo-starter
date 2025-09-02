import { describe, expect, test } from 'vitest'
import { add } from '../src/index.ts'

describe('index', () => {
  test('add', () => {
    expect(add(10, 10)).toEqual(20)
  })
})
