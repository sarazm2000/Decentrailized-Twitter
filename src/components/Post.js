import React from "react";


const Post = (props) => {
    return (
        <div className="post">
            <p className="name">{props.name}</p>
            <p className="username">@{props.username}</p>
            <div className="content">
                <p className="text">{props.post}</p>
                {props.image ? <img className="image">{props.image}</img> : <></>}
            </div>
            <div className="post-footer">
                <div className="likes">
                    <span>
                        {props.detail.likes}
                    </span> likes</div>
                <div className="repeyk">
                    <span>{props.detail.repeyk}</span> rePeyk</div>
                <div className="comments"><span>{props.detail.comments}</span> comments</div>
            </div>
            <div className="post-date">
                <div className="time">{props.detail.time}</div>
                <b>|</b>
                <div className="date">{props.detail.date}</div>
            </div>
        </div>
    )
}

export default Post;