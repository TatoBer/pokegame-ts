import { useState } from "react"

const usePokeScroll = ()=>{
    const [positionScroll, setPositionScroll] = useState<number>(0)
    const nextNumber = (n:number)=>{
        if (positionScroll === n-1) {
            setPositionScroll(0)
        } else {
            setPositionScroll(positionScroll + 1)
        }
    }

    const prevNumber = (n:number)=>{
        if (positionScroll === 0) {
            setPositionScroll(n-1)
        } else {
            setPositionScroll(positionScroll - 1)
        }
    }

    return {positionScroll, prevNumber, nextNumber}
}

export {usePokeScroll}