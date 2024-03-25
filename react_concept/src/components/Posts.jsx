import { useEffect, useState } from "react";
import Post from "./Post";

import './Posts.css'

const Posts = () => {
    const [posts , setPosts] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setPosts(data))
    }, [])
    return (
        <div className="post-container">
            {
                posts.map(post=><Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;