import React from "react"

import { AiOutlineStar, AiFillStar, AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import  { RiDeleteBin6Line } from "react-icons/ri";

class FriendActions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }

        this.toggleConfirmMsg = this.toggleConfirmMsg.bind(this);
    }

    toggleConfirmMsg(friend) {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    render() {
        const {friend, favouriteFriend, removeFriend} = this.props;
        return (
            <div className="actions">
                <button className="favorite" onClick={() => favouriteFriend(friend.name)}>
                    {friend.isFavourite ? <AiFillStar/ > : <AiOutlineStar/ > }
                </button>
                <button className="delete" onClick={() => this.toggleConfirmMsg(friend.name)}>
                    <RiDeleteBin6Line />
                </button>
                { this.state.showModal ? (
                    <div className="confirm-delete">
                        <p>Are you sure you want to remove <strong>{friend.name}</strong> from your friend list ?</p>
                        <div>
                            <button onClick={this.toggleConfirmMsg}>
                                <AiOutlineClose />
                            </button>
                            <button onClick={() => this.props.removeFriend(friend.name)}>
                                <AiOutlineCheck />
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}

export default FriendActions;