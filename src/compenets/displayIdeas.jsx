import { useState } from 'react'

const DisplayIdea = (props) => {
    const crazyIdeas = props.ideas.map((idea, i) => <li key={i}>{idea}</li>)

    return (
        <div>
            <ul>
                { crazyIdeas }
            </ul>
        </div>
    )
}

export default DisplayIdea