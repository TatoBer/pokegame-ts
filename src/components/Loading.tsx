import "./Loading.css"
import { TbPokeball } from 'react-icons/tb';

interface Props {
    charged: Boolean
}

export default function Loading({charged}:Props) {
  return (
    <div className={`loading ${charged && "off"}`}>
        <TbPokeball />
    </div>
  )
}
