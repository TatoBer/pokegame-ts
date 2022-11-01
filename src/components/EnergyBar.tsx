import "./EnergyBar.css"
import { BsFillLightningChargeFill } from 'react-icons/bs';

interface Props {
    energy: number
}

export default function EnergyBar({energy}:Props) {
  return (
    <span className="energy-bar">
        <h5>({energy}%)</h5>
        <div>
            <div style={{width:energy || 0}}></div>
        </div>
        <BsFillLightningChargeFill />
    </span>
  )
}
