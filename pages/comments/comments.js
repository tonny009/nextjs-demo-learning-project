import React from 'react'

const Comments = ({ Comments }) => {
  console.log(Comments)
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">
        Server Side Rendering Example
      </h1>
      {Comments.map((comment) => (
        <h1 className="my-10 mx-5">Comment Body: {comment.body}</h1>
      ))}
    </div>
  )
}

export default Comments

// all comments data loading with ssr------
export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  const data = await res.json()
  return {
    props: { Comments: data },
  }
}
