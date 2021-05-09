import Cards from './components/Cards'
import Popup from './components/Popup'
import load from './assets/load.gif'
import {useState, useEffect} from 'react'

function App() {
  const [posts, setPosts] = useState (false)
  const [popupPost, setPopupPost] = useState(false)
  useEffect (()=> {
    const url = "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    fetch (url)
    .then (resp => resp.json())
    .then (data => setPosts(data)
      )
    .catch(err => console.log(err))
  }, [])

  
  const handlepopup = (post) => {
    document.body.style.overflowY = post ? ("hidden"):("scroll");
    setPopupPost(post)
  }

  return (
    <div className="App">

      <div className="container">

        <div className="card-container">

        {posts ? (
          posts.map((post)=> {
            return <Cards post={post} handlepopup={handlepopup} key={post.id}/>
          })
        ) : (
          <div className="loading">
            <img src={load} alt="" />
          </div>
        )}

        </div>

      </div>
      {popupPost ? (
        <Popup post={popupPost} handlepopup={handlepopup}/>
      ) : (
        null
      )}
    </div>
  );
}

export default App;
