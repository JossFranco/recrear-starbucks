import React, { FC } from 'react'

export interface TitleProps{
    children?: React.ReactNode
}
export const Title: FC<TitleProps> = ({children}) => {
  return (
    <div className='titleContainer'>
      <h1 className='title'>{children}</h1>
    </div>
  )
}

