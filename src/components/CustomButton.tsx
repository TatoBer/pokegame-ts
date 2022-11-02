import { MouseEventHandler, PointerEventHandler } from "react"
import "./CustomButton.css"

interface Props {
    children: string
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function CustomButton({children, onClick}:Props) {
  return (
    
  <button onClick={onClick} className="your-button" >
  {children}
    </button>

  )
}
