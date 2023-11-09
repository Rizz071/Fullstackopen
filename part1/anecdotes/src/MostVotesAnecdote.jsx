const MostVotesAnecdote = ({ anecdotes, voteObj }) => {
  //Sorting by values in object using "for in..."
  let maxValueKey = 0
  for (let key in voteObj) {
    if (voteObj[key] > voteObj[maxValueKey]) maxValueKey = key
  }

  return (
    <>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[maxValueKey]}</div>
      <div>has {voteObj[maxValueKey]} votes</div>
    </>
  )
}

export default MostVotesAnecdote
