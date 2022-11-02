import { MouseEventHandler } from "react"
import "./CustomButton.css"

interface Props {
    children: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string
}

export default function CustomButton({children, onClick, className}:Props) {
  return (
    
  <button onClick={onClick} className={`your-button ${className ? className : ""}` } >
  {children}
    </button>

  )
}
