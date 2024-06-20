import React,{ useRef, useContext} from "react"
import { PostList } from "../store/post-list-store"


const CreatePost = () => {

  const { addPost } = useContext(PostList)

  const userIdElement = useRef()
  const postTitleElement = useRef()
  const postBodyElement= useRef()
  const reactionsElement = useRef()
  const tagsElement = useRef()

  const handleSubmit = (event) =>{
    event.preventDefault()
    const userId = userIdElement.current.value
    const postTitle = postTitleElement.current.value
    const postBody = postBodyElement.current.value
    const reactions = reactionsElement.current.value
    const tags = tagsElement.current.value.split(" ")

    userIdElement.current.value = ""
    postTitleElement.current.value = ""
    postBodyElement.current.value = ""
    reactionsElement.current.value = ""
    tagsElement.current.value = ""
    
    addPost(userId, postTitle, postBody, reactions,tags)
  }

  return (
    <form className="create-post" onSubmit={handleSubmit}>
       <div className="mb-3">
    <label htmlfor="userId" className="form-label">User ID</label>
    <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="example user@9"/>
  </div>

  <div className="mb-3">
    <label htmlfor="title" className="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="How are you feeling today"/>
  </div>

  <div className="mb-3">
    <label htmlfor="body" className="form-label">Post Content</label>
    <textarea rows ="4" ref={postBodyElement} className="form-control" id="title" placeholder="Tell us more about it"/> 
  </div>

  <div className="mb-3">
    <label htmlfor="reactions" className="form-label">Number of reactions </label>
    <input type="text" ref={reactionsElement} className="form-control" id="reaction" placeholder="People reacted to this post"/>
  </div>

  <div className="mb-3">
    <label htmlfor="tags" className="form-label">Number of reactions </label>
    <input type="text" ref={tagsElement} className="form-control" id="tag" placeholder="Please enter tags using space"/>
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</form>

  )
}

export default CreatePost