import React from "react"

class Buttons extends React.Component{
    constructor(props){
        super();
        this.state={
            img: "basketball.jpg"
        }
    }
    displayImage=(url)=>{
        this.setState({
            img: url
        })
    }
    render(){
        return(
            <>
            <div className="center size">
                <button onClick={() => this.displayImage("basketball.jpg")}>Basketball</button>
                <button onClick={() => this.displayImage("cricket.jpg")}>Cricket</button>
                <button onClick={() => this.displayImage("laptop.jpg")}>Laptop</button>
                <button onClick={() => this.displayImage("phone.jpg")}>Phone</button>
                <button onClick={() => this.displayImage("pubg.jpeg")}>Pubg</button>
                <button onClick={() => this.displayImage("show-image.png")}>Show</button>
                <button onClick={() => this.displayImage("tiger.jpg")}>Tiger</button>
                </div>
                <div className="center">
                 <img src={require(`../assets/${this.state.img}`)} alt="game" />
                 </div>
                    
            </>
        )
    }
}

export default Buttons