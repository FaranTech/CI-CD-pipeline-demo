import { describe, it, expect } from 'vitest'

function add(a, b) {
  return a + b
}

describe('sample math test', () => {
  it('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5)
  })
})
