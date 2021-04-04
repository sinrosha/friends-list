import React from "react"
import Pagination from "./Pagination"
import FriendInfo  from "./FriendInfo"
import FriendActions from "./FriendActions"


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
                    <FriendInfo friend={friend}/>
                    <FriendActions friend={friend} favouriteFriend={favouriteFriend} removeFriend={removeFriend}/>
                </div>
            )) : null}
            <Pagination 
                friendsToShow={friendsToShow} 
                handleNavigation={handleNavigation} 
                currentPage={currentPage} 
                startWindow={startWindow} 
                endWindow={endWindow} 
            />
        </div>
    )
}

export default FriendList;