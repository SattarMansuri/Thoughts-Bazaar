import React from 'react'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import './App.css'
import CreatePost from "./components/CreatePost"
import PostList from "./components/PostList"
import { useState } from "react"
import PostListProvider from "./store/post-list-store"
function App() {

const [selectedTab, setSelectedTab] = useState("Home")

return (
<>
<PostListProvider>
<div className="App-container">
<Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
<div className="content">
 <Header></Header>
 {selectedTab === 'Home'?(<PostList></PostList>):(<CreatePost></CreatePost>)}
 <Footer></Footer>
 </div>
 </div>
 </PostListProvider>
 </>
  )
}

export default App
