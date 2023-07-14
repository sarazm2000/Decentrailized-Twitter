import React from "react";
import Post from "../components/Post";
import SearchBar from "../components/SearchBar";

const Timeline = () => {
    const data = [
        {
            "user": {
                "username": "SElahimanesh",
                "name": "Sina Elahimanesh"
            },
            "post": "Hey I'm here!",
            "detail": {
                "date": "1 jul",
                "time": "3:46 pm",
                "likes": "537695",
                "repeyk": "226",
                "comments": "295"
            }

        },
        {
            "user":
            {
                "username": "SaraZM",
                "name": "Sara Zahedi",
            },
            "post": "Hello guys! I'm looking for a job. Can you repeyk this post???",

            "detail": {
                "date": "1 jul",
                "time": "3:46 pm",
                "likes": "537695",
                "repeyk": "226",
                "comments": "295"

            }

        }

    ]
    return (
        <div className="timeline">
            <div className="search-bar-container"><SearchBar /></div>
            <div className="post-container">
                {data.map((post, index) => (
                    <Post username={post.user.username} name={post.user.name} post={post.post} detail={post.detail} />
                ))}

            </div>

        </div>
    )
}

export default Timeline;