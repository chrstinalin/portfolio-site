import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import { INFO } from "@/data/user";
const cards = INFO.home.photo

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})

const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r: number, s: number) => `rotateX(10deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck() {
  const [gone] = useState(() => new Set())
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  }))
  const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
    
    api.start(i => {
      if (index !== i) return 
      
      const x = active ? mx : 0 
      const rot = mx / 100 
      const scale = active ? 1.1 : 1
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: 500 },
      }
    })
  })

  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div key={i} style={{position: "absolute", willChange: "transform", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "none", x, y }}>
          <animated.div
            {...bind(i)}
            className={"rounded-lg"} 
            style={{
              width: '20em',
              height: '20em',
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
              backgroundSize: "30em",
              boxShadow: 'none',
            }}
          />
        </animated.div>
      ))}
    </>
  )
}

export const InteractableImage = () => {
  return (
    <div style={{ width: "20em", height: "20em"}}>
      <Deck />
    </div>
  )
}
