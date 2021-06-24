import {useEffect, useState} from "react";
import {CommentIcon, HeartIcon, OpenIcon} from "../../assets/icons"
import './Blog.css'

const Blog = () => {
  const [posts, setPost] = useState([])
  const callApi = () => {
    fetch(`https://dev.to/api/articles?username=daianaszwimer`)
      .then((result) => {
        return result.json();
      }).then((jsonResult) => {
        setPost(jsonResult)
    })
  }

  useEffect(() => {
    callApi()
  }, [])

  return (
    <main className='container'>
      {posts.map(post => (
        <div className="item" key={post.id}>
          <h2 className="heading"><strong>{post.title}</strong></h2>
          {post.cover_image ?
            <img src={post.cover_image} alt={post.title}/> :
            <div className="description"><h3>{post.description}</h3></div>
          }
          <div className="icons">
            <div className='post-icon'>
              <HeartIcon/>
              <p><strong>{post.positive_reactions_count}</strong></p>
            </div>
            <div className='post-icon'>
              <CommentIcon/>
              <p><strong>{post.comments_count}</strong></p>
            </div>
            <div className='post-icon'>
              <a href={post.canonical_url} target='_blank' rel="noreferrer" className="open">
                <OpenIcon/>
              </a>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}

export default Blog