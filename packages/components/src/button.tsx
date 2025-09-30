import type { ComponentProps } from 'react'

export interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>
}
