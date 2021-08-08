import React from "react";

class Hug extends React.Component{
    constructor(){
        super()
        this.state = {
            uname : "",
            email : ""
        }

        
    }

    j1 = (e)=>{
        let a = e.target.value;
        let b = e.target.name;

        this.setState({
            [b] : a
        })


    }

    sub= (e)=>{
        e.preventDefault();
        console.log(this.state);
        
    }

    render(){
        return(
            <>
            <form onSubmit={this.sub}>
                <input name="uname" onChange={this.j1}/>
                <input name="email" onChange={this.j1}/>
                <button type="submit">submit</button>

            </form>
            
            </>
        )
    }
}

export default Hug