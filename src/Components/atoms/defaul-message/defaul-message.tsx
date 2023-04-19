import { FC, ReactNode } from 'react';
import './defaul-message.scss';
import warning from '../../../../public/warning.jpeg'

interface DefaulMessageProps {
  children: ReactNode;
}
export const DefaulMessage: FC<DefaulMessageProps> = ({ children }) => {
  return (
    <div className='defaulMessage'>
      <div>
        <img
          className='defaulMessage__icon'
          src={warning}
          alt='Warning icon'
        />
      </div>
      <div>
        <span className='defaultMessange__messange'>{children}</span>
      </div>
    </div>
  )
}