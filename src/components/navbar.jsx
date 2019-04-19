
import React, { Component } from 'react';

class Navbar extends Component {
   
    render() { 
        return (
            <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Shopping Cart Total Products:{this.props.totalCounters}</span>  
            </nav>
          );
    }
}
 
export default Navbar ;

