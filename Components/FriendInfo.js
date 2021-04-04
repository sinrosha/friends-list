import React from "react"

function FriendInfo({friend}) {
    return (
        <div className="friend-info">
            <h2>{friend.name}</h2>
            <p>is your friend</p>
        </div>
    )
}

export default FriendInfo