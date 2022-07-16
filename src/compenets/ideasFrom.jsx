import React, { useState } from "react";

const IdeasForm = (props) => {
  const [input, setInput]=useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    props.addIdeas(input)
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=> setInput(e.target.value)} />
        <button type="submit">Send in  your Idea!</button>
      </form>
    </div>
  )
}

export default IdeasForm
