import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import CreatePost from "./components/CreatePost"
import PostList from './components/PostList';


function App() {

  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // document.title= user ? user +"'s Feed" : "Please Login";
    document.title = user ? `${user}'s feed` : `Please Login`;
  }, [user]);



  if (!user) {
    return (
      <>
      <Login setUser={setUser}></Login>
      <footer>
        Copyright &copy;
      </footer>
      </>
    )
  }
  return (
    <>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} posts={posts} setPosts={setPosts} />
      <PostList posts={posts}/>
      <footer>
        Copyright &copy;
      </footer>





      
      {/* {
        posts.map((post, i) => (
          <React.Fragment key={i}>
            {
              post.image &&
              <img

                src={URL.createObjectURL(post.image)}
                style={{ height: 100, width: 200, objectFit: 'cover' }}
              />
            }
            <p>{post.content}</p>
          </React.Fragment>
        ))
      } */}

    </>
  )
}

export default App;
