import type { ComponentProps } from 'react'

export interface ButtonProps extends ComponentProps<'button'> {}

export function Button({}: ButtonProps) {
  return <button>Hello</button>
}
