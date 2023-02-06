import React, { FC } from 'react'

export interface TitleProps{
    children?: React.ReactNode
}
export const Title: FC<TitleProps> = ({children}) => {
  return (
    <div className='textContainer'>
      <p>{children}</p>
    </div>
  )
}

