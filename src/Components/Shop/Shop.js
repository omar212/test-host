import React, { Component } from 'react';
import Construction from '../Construction/Construction'


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="main-layout">
                <Construction />
            </div>
         );
    }
}
 
export default Shop;