import React, { Component } from "react";




class ChatRoom extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      messages: [
        { id: 0, text: "text1" },
        { id: 1, text: "text2" },
        { id: 2, text: "text3" },
      ],
    };
  }
  updateMessage(e) {
    this.setState({ message: e.target.value });
  }

  componentDidMount(){
    window.firebase.database().ref("messages/").on("value", snap=>{
        const currentmessages= snap.val();
        if (currentmessages !== null) {
            this.setState({
                messages : currentmessages
            });
        }
    });

  }



  handleSubmit(e) {
    e.preventDefault();
    const list = this.state.messages;
    const newMessage = {
      id: this.state.message.length,
      text: this.state.message,
    };
    // list.push(newMessage);
    // this.setState({ messages: list });
    
    window.firebase.database().ref(`messages/${newMessage.id}`)
    
      .set(newMessage)
   
    this.setState({ message:''})
  }
  render() {
    const { messages } = this.state;
    const messageList = messages.map((message) => {
      return <li key={message.id}>{message.text} </li>;
    });

    return (
      <>
        <ul>{messageList}</ul>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            //   value={this.state.message}
            onChange={this.updateMessage.bind.this}
          ></input>
          <button>Send</button>
        </form>
      </>
    );
  }
}
export default ChatRoom;
