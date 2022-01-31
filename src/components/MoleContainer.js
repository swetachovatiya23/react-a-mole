import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
    let [displayMole, setdisplayMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setdisplayMole(false)
    }

    let displayMoles = displayMole ? <Mole setScore={props.setScore} toggle={setdisplayMole} handleClick={handleClick} /> : <EmptySlot toggle={setdisplayMole} />
    
    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMoles}
        </div>
    )
}

export default MoleContainer