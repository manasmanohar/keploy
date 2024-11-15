import { cn } from '@/lib/utils'
import { motion, MotionProps, Variants } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade'

interface AnimatedEntranceProps {
  children: React.ReactNode
  delay?: number
  direction?: Direction
  className?: string
  viewport?: MotionProps['viewport']
}

const variants: Record<Direction, Variants> = {
  up: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
}

export function AnimatedEntrance({
  children,
  delay = 0,
  direction = 'up',
  className,
  viewport = {
    once: true,
    amount: 0,
    margin: '50px 0px',
  },
}: AnimatedEntranceProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants[direction]}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        delay: delay * 0.1,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
