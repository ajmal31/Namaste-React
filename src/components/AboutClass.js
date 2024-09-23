import React from "react"
import ContactClass from "./ContactClass";

class AboutClass extends React.Component{

    constructor(props){
        super(props)

        this.state={
            count:0
        }
        console.log(props.data+ " constructor");
        
    }

    componentDidMount(){
        console.log(this.props.data+ " component did mount")
    }

    render(){
        console.log(this.props.data + " componenet render");
        
        return (
            <>
            <h1>About</h1>
            <h2>{this.state.count}</h2>
            <button onClick={()=>{

                this.setState({
                    count:this.state.count+1
                })
                
            }} >Click</button>
            <ContactClass data={this.props.data}/>
            </>
        )
    }
}

export default AboutClass