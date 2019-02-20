
import React, { Component } from 'react';
import Counter from './counterFolder'


class Counters extends Component {
    state = { 
        counters : [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
     }

     handleDelete = countersid => {
        console.log('delete',countersid)
        const counters = this.state.counters.filter( c => c.id !== countersid)
        this.setState({counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters})
    };

    render() { 
    
        return (
            <div>
                <button className="btn btn-primary btn-sm m-2"> Reset</button>
                {this.state.counters.map( counters => (
                <Counter key = {counters.id}  
                onDelete = {this.handleDelete} 
                onReset = {this.handleReset} 
                counters = {counters}
               />
                ))}
                
            </div>
          );
    }
}
 
export default Counters ;