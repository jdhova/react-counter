
import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counters.value,
        tags: ["tag1","tag2","tag3"]
    };

    handleIncrement = () => {
       this.setState({value: this.state.value + 1});

    };

    handleDecrement = () => {
        this.setState({value: this.state.value - 1});
 
     };

    render(){ 
        console.log('props', this.props)
        
        return (
            <React.Fragment>
                {this.props.children}   
                <h1
                    className= {this.getBadgeClasses()}>{this.newCount()}
                </h1>
                <button 
                    onClick={() => this.handleIncrement()} 
                    className= "btn btn-secondary m-3"> Increment
                </button>  
                <button 
                     onClick={() => this.handleDecrement()} 
                    className= "btn btn-warning m-3"> Decrement
                </button> 
                <button 
                     onClick={() => this.props.onDelete(this.props.counters.id)} 
                    className= "btn btn-danger m-3"> Delete
                </button> 
                <div> 
                    {this.state.tags.length === 0 && " Cart is empty!"}
               </div> 
               <div> 
                    {this.state.value <= 0 && "Out of Stock!"}
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
        let classes = "badge m-3 md badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

     newCount(){
        const {value} = this.state
        return value === 0 ? "Zero": value;
    }
}
 
export default Counter;