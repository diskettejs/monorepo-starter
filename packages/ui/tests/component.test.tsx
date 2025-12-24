import { describe, expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { Component } from '../src/component.tsx'

describe('Component', () => {
  test('counter increments the count', async () => {
    const { getByRole, getByText } = await render(<Component count={1} />)

    await getByRole('button', { name: 'Increment' }).click()

    expect(await getByText('Count is 2')).toBeVisible()
  })
})
