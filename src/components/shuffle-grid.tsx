'use client'
import {motion} from 'framer-motion'
import {type ReactNode, useEffect, useRef, useState, useCallback, memo} from 'react'
import squareData from '@/data/squares'

export const ShuffleGridContainer = ({children}: {children: ReactNode}) => {
  return <div className="grid grid-cols-4 gap-2">{children}</div>
}

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

const generateSquares = () => {
  return shuffle(squareData).map(sq => (
    <motion.div
      key={sq.id}
      layout
      transition={{duration: 1.5, type: 'spring'}}
      className="relative aspect-square size-full"
    >
      <img
        src={sq.src}
        alt={`Image ${sq.id}`}
        className="absolute inset-0 size-full rounded-sm object-cover"
      />
    </motion.div>
  ))
}

const ShuffleGrid = memo(() => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [squares, setSquares] = useState(generateSquares())

  const shuffleSquares = useCallback(() => {
    setSquares(generateSquares())

    timeoutRef.current = setTimeout(shuffleSquares, 3000)
  }, [])

  useEffect(() => {
    shuffleSquares()

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [shuffleSquares])

  return <ShuffleGridContainer>{squares.slice(1, 13).map(sq => sq)}</ShuffleGridContainer>
})

ShuffleGrid.displayName = 'ShuffleGrid'
export default ShuffleGrid
