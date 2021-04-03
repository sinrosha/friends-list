import React from "react"
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import  { RiDeleteBin6Line } from "react-icons/ri";
import  {FaArrowLeft, FaArrowRight} from "react-icons/fa"


function FriendList({friends, favouriteFriend, showFavorites, searchTerm, currentPage, handleNavigation, removeFriend}) {

    const startWindow = currentPage * 4 - 4;
    const endWindow = currentPage * 4; 

    let friendsToShow = showFavorites ? friends.filter(friend =>  friend.isFavourite === true) : friends;
    friendsToShow = searchTerm ? friendsToShow.filter(friend =>  friend.name.split(" ").join("").toLowerCase().includes(searchTerm.split(" ").join("").toLowerCase())): friendsToShow;
    return (
        <div className="friend-list">
            {friendsToShow.length === 0 && showFavorites ? <p className="no-fav">You don't have favourite friends</p> : null }
            {friendsToShow.length === 0 && searchTerm.length > 0 ? <p className="no-search">You don't have friends with {searchTerm} as name.</p> : null }
            {friendsToShow.length ? friendsToShow.slice(startWindow, endWindow).map(friend => (
                <div className="friend" key={friend.name.split(" ").join("").toLowerCase()}>
                    <div className="friend-info">
                        <h2>{friend.name}</h2>
                        <p>is your friend</p>
                    </div>
                    <div className="actions">
                        <button className="favorite" onClick={() => favouriteFriend(friend.name)}>
                            {friend.isFavourite ? <AiFillStar/ > : <AiOutlineStar/ > }
                        </button>
                        <button className="delete" onClick={() => removeFriend(friend.name)}>
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </div>
            )) : null}
            {friendsToShow.length > 4 ? (
                <div className="pagination">
                    <div className="prev" style={currentPage === 1 ? {visibility: "hidden"} : {visibility: "visible"}} onClick={() => handleNavigation("prev")}>
                        <FaArrowLeft />
                    </div>
                    <p>Showing {startWindow} - {friendsToShow.length < endWindow ? friendsToShow.length : endWindow }</p>
                    <div className="next" style={friendsToShow.length < endWindow ? {visibility: "hidden"} : {visibility: "visible"}} onClick={() => handleNavigation("next")}>
                        <FaArrowRight />
                    </div>
                </div>
            ) : null }
            
        </div>
    )
}

export default FriendList;