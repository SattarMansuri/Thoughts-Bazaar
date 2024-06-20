import { createContext, useReducer } from "react";
import React from "react"

export const PostList = createContext({ postList: [],
  addPost: () =>{},
deletePost: () =>{}}
)

const postListReducer = (currPostList, action)=>{
  let newPostList = currPostList
  if (action.type === "DELETE_POST"){
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
  } else if(action.type === "ADD_POST"){
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList;
}
const PostListProvider = ({children}) =>{
const[postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

const addPost = (userId, postTitle, postBody, reactions, tags) =>{
dispatchPostList({
  type: "ADD_POST",
  payload: {
    id: Date.now(),
    title: postTitle,
    body: postBody,
    reactions: reactions,
    userId: userId,
    tags: tags
  }
})
}

const deletePost = (postId) =>{
  dispatchPostList({
    type: "DELETE_POST",
    payload: {
      postId,
    }
  })
}

return <PostList.Provider value={{postList, addPost, deletePost}}>
{children}
</PostList.Provider>
}
const DEFAULT_POST_LIST = [{
  id: '1',
  title: 'Platypus are unusual',
  body: "The platypus (Ornithorhynchus anatinus) is a mammal native to Australia with a duck-billed, beaver-tailed, otter-footed, egg-laying body. It's one of the most unusual animals in the world, with a rubbery duck bill, webbed feet, fur, and splayed legs that resemble a reptile skeleton.",
  reactions: 25,
  userId: 'user1',
  tags: ['Platypus', 'Weird']
},
{
  id: '2',
  title: 'Amazon river',
  body: "The Amazon River is the world's largest river by discharge volume of water and the largest river in South America. It's at least 4,000 miles (6,400 km) long, which is slightly shorter than the Nile River. The Amazon River's drainage basin is the largest in the world, covering about 35.5% of South America and ranging over an area of 7 million square kilometers",
  reactions: 39,
  userId: 'user1',
  tags: ['river', 'amazonriver']
}]
export default PostListProvider