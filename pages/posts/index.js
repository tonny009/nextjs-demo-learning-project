import Post from '@/Components/posts/Post'
import React from 'react'

const Posts = (props) => {
  const posts = props.posts
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        The number of post:{posts.length}{' '}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  )
}

export default Posts
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  console.log(data)
  return {
    props: { posts: data },
  }
}
