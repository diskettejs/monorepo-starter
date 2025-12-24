import { useState } from 'react'

export function Component({ count }: { count: number }) {
  const [value, setValue] = useState(count)

  return (
    <button onClick={() => setValue((current) => current + 1)}>
      {value === 1 ? 'Increment' : `Count is ${value}`}
    </button>
  )
}
