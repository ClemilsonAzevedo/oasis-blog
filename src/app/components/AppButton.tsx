import { type VariantProps, cva } from 'class-variance-authority'
import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center md:text-xl font-bold py-5 whitespace-nowrap rounded-lg hover:brightness-75 transition ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
  {
    variants: {
      variant: {
        default: 'bg-blogYellow text-blogWhite',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

interface AppButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  variant?: 'default'
  children: React.ReactNode
}

const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>(
  ({ className, variant, children, ...props }, ref) => {
    const Comp = 'button'
    return (
      <Comp
        type="button"
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)
AppButton.displayName = 'AppButton'

export { AppButton }
