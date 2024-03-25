import './Posts.css';

const Post = ({post}) => {
    console.log(post);
    const {id, title, body} = post;
    return (
        <div className='post'>
                <h3>Title: {title}</h3>
                <p>{body}</p>
        </div>
    );
};

export default Post;