import React from "react"
import { AiOutlineClose } from "react-icons/ai";

class AddFriend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friend: "",
            friendAlreadyExists: false
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const {name, value} = e.target;
        this.setState({
            friendAlreadyExists: false,
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const isExistingFriend = this.props.friends.some(friend => friend.name.split(" ").join("").toLowerCase() === this.state.friend.split(" ").join("").toLowerCase() );
        isExistingFriend ? this.setState({ friendAlreadyExists: true}) : this.props.addFriend(this.state.friend);
        !isExistingFriend && this.setState({ friend: ""}) 
    }

    render() {
        return (
            <div className="add-friend">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input 
                            type="text" 
                            name="friend" 
                            value={this.state.friend} 
                            onChange={this.handleInput} 
                            placeholder="Enter your friend's name"
                        />
                    </label>
                </form>
               { this.state.friendAlreadyExists &&  
                    <div className="friend-already-exists">
                        <p><strong>{this.state.friend}</strong> already exists in the list</p>
                        <button className="close" onClick={() => this.setState({ friendAlreadyExists: false, friend: "" })}>
                            <AiOutlineClose />
                        </button>
                    </div> 
                }
            </div>
        )
    }
}

export default AddFriend;