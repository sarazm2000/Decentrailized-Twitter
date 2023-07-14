import React from "react";


const Post = (username, name, post) => {
    return (
        <div className="post-container">
            <p className="name">{name}</p>
            <p className="username">{username}</p>
            <div className="content">
                <p className="text">{post.text}</p>
                {post.image ? <div className="image">{post.image}</div> : <></>}
            </div>
            <div className="post-footer">
                <div className="like">510034 likes</div>
                <div className="repeyk">51 rePeyk</div>
                <div className="comment">5100 comments</div>
            </div>
            <div className="post-date">
                <div className="time">3:45 PM</div>
                <div className="date">May 4th</div>
            </div>
        </div>
    )
}

export default Post;