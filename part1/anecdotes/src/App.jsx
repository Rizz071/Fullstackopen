import { useState } from "react"

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ]

  const points = {}
  for (let i = 0; i <= 9; i++) {
    points[i] = 0
  }

  const [selected, setSelected] = useState(0)

  //Function to initialize state with predefined Object
  const initializePointsObject = () => {
    const obj = {}
    for (let i = 0; i <= 9; i++) {
      obj[i] = 0
    }
    return obj
  }
  const [voteObj, setVoteObj] = useState(initializePointsObject)

  const handleSelectAnecdote = () => {
    setSelected(Math.floor(Math.random() * 8))
  }

  const handleVoteButton = () => {
    // console.log("old voteObj:", voteObj)
    const newVoteObj = { ...voteObj }
    // console.log("new voteObj:", newVoteObj)
    // console.log("selected anec num: ", selected)
    // console.log("selected anec num votes: ", voteObj[selected])
    newVoteObj[selected] += 1
    // console.log("new anec num votes: ", newVoteObj[selected])
    setVoteObj(newVoteObj)
  }

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <div>has {voteObj[selected]} votes</div>
      <button onClick={handleVoteButton}>vote</button>
      <button onClick={handleSelectAnecdote}>next anecdote</button>
    </>
  )
}

export default App
