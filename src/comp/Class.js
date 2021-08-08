import React from  "react";

class Log extends React.Component{

    constructor(){
        super();
        this.state = {
            names : ""
        }

    }
  
    ons = (e)=>{
        this.setState({names : e.target.value})
     console.log(this.state.names)
    }
    render(){
        return(
            <><input onChange={this.ons} ></input>
        <h1>{this.props.name}</h1></>
        )
        
        
    }

}
export default Log;