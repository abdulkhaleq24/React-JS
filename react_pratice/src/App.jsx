import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);

    useEffect(()=>{
      fetch("http://127.0.0.1:8000/api/users/")
      .then(res=>res.json())
      .then(data => setPosts(data))
    },[])

  return (
    <div>
      <h1>Hello, {posts.length}</h1>
      <div>
        {posts.map(post=><div>
          <h1>{post.id}</h1>
        </div>)}
      </div>
    </div>
  );
};

export default App;
