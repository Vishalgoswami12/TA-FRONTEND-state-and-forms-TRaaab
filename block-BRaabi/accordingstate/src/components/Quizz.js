import React from "react";

import {data} from "../data/data"
console.log(data);

class Quizz extends React.Component {

    constructor ( props ) {
        super();
        this.state = {
            name: "CLOSED",
            index: NaN,
        }
    }

    render() {
        return (
            <>
                <div className="container-box">
                    <h1>{this.state.name} STATE</h1>
                    { data.map((ele,i)=><>
                    <div key={i} className={ this.state.index === i ? "answer": "question" }>
                        <h3>{ele.Q}</h3>
                        <button onClick={()=>{
                            this.setState({ index : this.state.index === i ? null : i,
                                name: this.state.index === i ? "CLOSED" : "OPENED"
                            })
                            }
                        }
                        >
                            <i>{ this.state.index === i ? "👍 ": "👎 " } </i></button>
                    </div>
                        <div className={ this.state.index === i ? "ansBox" : "" } >
                            { this.state.index === i ? <p>{ele.A}</p> : "" }
                        </div>

                    </>) }
                </div>
            </>
        )
    }
}

export default Quizz;