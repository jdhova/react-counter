
import React, { Component } from 'react';
import Counter from './counterFolder';


class Counters extends Component {
   

    render() { 
    
        return (
            <div>
                <button onClick ={this.props.onReset}  className="btn btn-primary btn-sm m-2"> Reset</button>
                {this.props.counters.map( counters => (
                <Counter key = {counters.id}  
                onDelete = {this.props.onDelete}
                onIncrement = {this.props.onIncrement}
                onDecrement = {this.props.onDecrement}
                counters = {counters}
               />
                ))}
                
            </div>
          );
    };
};
 
export default Counters ;