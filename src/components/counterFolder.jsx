
import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1","tag2","tag3"]
    };

    handleIncrement = () => {
       this.setState({count: this.state.count + 1})

    };

    render(){ 
        
        return (
            <React.Fragment>
                <h1 
                    className= {this.getBadgeClasses()}>{this.newCount()}
                </h1>
                <button 
                    onClick={() => this.handleIncrement()} 
                    className= "btn  btn-secondary"> Increment
                </button>  
                <div> 
                    {this.state.tags.length === 0 && " Cart is empty!"}
               </div> 

                <div>
                    <ul> 
                        {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                    </ul>
                </div>
            </React.Fragment>
        );
    
    }
       
      
    getBadgeClasses() {
        let classes = "badge m2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

     newCount(){
        const {count} = this.state
        return count === 0 ? "Zero": count;
    }
}
 
export default Counter;