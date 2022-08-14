import { FC, ReactNode } from "react"

interface Props {
    children: ReactNode;
  }

export const DarkLayout: FC<Props> = ({ children }) => {
   return (
    <div style={{
        backgroundColor: 'rgba(248, 248, 248, 0.8)',
        borderRadius: '5px',
        padding: '10px'  
    }}>
        <h3>Dark-Layout</h3>
        <div>
            { children }
        </div>
    </div>
  )
}
