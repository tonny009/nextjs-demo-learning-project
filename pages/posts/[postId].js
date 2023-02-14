import { useRouter } from 'next/router'
import React from 'react'

const PostDetails = ({ post }) => {
  // router use kora hoise back e home page or onno kono page e back korte----
  const router = useRouter()
  const handleBack = () => {
    router.push('/posts')
  }
  return (
    <div className="card mx-10 my-10 bg-primary text-primary-content">
      <div className="card-body">
        <p>Post ID : {post?.id}</p>
        <h2 className="card-title">Title : {post?.title}</h2>
        <p>Details: {post?.body}</p>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleBack()
          }}
        >
          Back to Post
        </button>
      </div>
    </div>
  )
}

// getStaticProps catch objects from getStaticPaths() as context-------
export const getStaticProps = async (context) => {
  const { params } = context
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
  )
  const data = await res.json()

  return {
    props: { post: data },
  }
}

// ei code gulo die just data gulor id ta dhorchi jeta getStaticProps e pathacche ------------
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  const paths = posts.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    }
  })

  return {
    paths,
    fallback: false,
    // [fallback false dewar karon : joto data ache tar besi like 101 id er data jeta nai, dekhte chaile jeno 404 show kore]
  }
}

export default PostDetails
