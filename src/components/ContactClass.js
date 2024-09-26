import React from "react"

class ContactClass extends React.Component {
  constructor(props) {
    super(props)
   
  }
  componentDidMount() {
    console.log(this.props.data+ "contact component did mount");
  }
  render() {
    console.log(this.props.data+ "contant component render");
    return (
      <>
        <h1>Contact</h1>
      </>
    );
  }
}

export default ContactClass
