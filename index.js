import React from "react"
import ReactDOM from "react-dom"

import Header from "./Components/Header"
import AddFriend from "./Components/AddFriend"
import FriendList from "./Components/FriendList"

import "./assets/css/reset.css"
import "./assets/css/style.css"

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: [],
            showFavorites: false,
            searchTerm: "",
            currentPage: 1
        }

        this.addFriend = this.addFriend.bind(this);
        this.favouriteFriend = this.favouriteFriend.bind(this);
        this.toggleFavourites = this.toggleFavourites.bind(this);
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
        this.handleNavigation = this.handleNavigation.bind(this);
        this.removeFriend = this.removeFriend.bind(this);
    }

    componentDidMount() {
        this.setState({
            friends: JSON.parse(localStorage.getItem("friends")) ? JSON.parse(localStorage.getItem("friends")) : [],
            showFavorites: localStorage.getItem("showFavorites") ? JSON.parse(localStorage.getItem("showFavorites")) : false,
            searchTerm: localStorage.getItem("searchTerm") ? localStorage.getItem("searchTerm") :  ""
        })
    }

    addFriend(friendToBeAdded) {
        const newFriend = { name: friendToBeAdded, isFavourite: false}
        this.setState(prevState => ( { friends: prevState.friends.concat(newFriend) } ), () => localStorage.setItem("friends", JSON.stringify(this.state.friends)));
    }

    favouriteFriend(existingFriend) {
        const friends = this.state.friends.map( friend => {
           const updatedFriend =  friend.name === existingFriend ? { ...friend, isFavourite: !friend.isFavourite} : {...friend};
           return updatedFriend;
        });
        this.setState({ friends }, () => localStorage.setItem("friends", JSON.stringify(this.state.friends)));
    }

    toggleFavourites() {
        this.setState({ showFavorites: !this.state.showFavorites, currentPage: 1}, () => localStorage.setItem("showFavorites", this.state.showFavorites))
    }

    updateSearchTerm(searchTerm) {
        this.setState({ searchTerm, currentPage: 1 }, () => localStorage.setItem("searchTerm", this.state.searchTerm))
    }

    handleNavigation(action) {
        if(action === "prev") {
          this.setState({ currentPage: this.state.currentPage - 1 })
        } else if(action === "next") {
          this.setState({ currentPage: this.state.currentPage + 1 });
        }
    }

    removeFriend(friendtoRemove) {
        const newFriendList = this.state.friends.filter(friend => friendtoRemove !== friend.name);
        this.setState({ friends: newFriendList}, () => localStorage.setItem("friends", JSON.stringify(this.state.friends)));
    }

    render() {
        const {friends, showFavorites, searchTerm, currentPage} = this.state;
        return (
            <article className="app">
                <Header 
                    toggleFavourites={this.toggleFavourites} 
                    showFavorites={showFavorites} 
                    updateSearchTerm={this.updateSearchTerm} 
                    searchTerm={searchTerm}
                />
                <AddFriend  friends={friends} addFriend={this.addFriend} />
                <FriendList 
                    friends={friends} 
                    favouriteFriend={this.favouriteFriend} 
                    showFavorites={showFavorites} 
                    searchTerm={searchTerm} 
                    currentPage={currentPage} 
                    handleNavigation={this.handleNavigation}
                    removeFriend={this.removeFriend}
                />
            </article>
        )
    }
}

ReactDOM.render( <App/>,  document.getElementById("root"));
