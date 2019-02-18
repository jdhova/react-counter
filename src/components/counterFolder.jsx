
import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1","tag2","tag3"]
    };

    render(){ 
             let classes = "badge m2 badge-";
             classes += this.state.count === 0? "warning" : "primary";   

        return (
            <React.Fragment>
                    <h1 className= {classes}>{this.newCount()}</h1>
                    <button className= "btn btn-secondary"> Increment</button>  
                <div> 
                    {this.state.tags.length === 0 && " Cart is empty!"}
               </div> 

                <div><ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
            </React.Fragment>
        );
    
    }
       
      
     newCount(){
        const {count} = this.state
        return count === 0 ? <h1>Zero</h1>: count;
    }
}
 
export default Counter;