import React, { Component } from 'react'
import Label from './Label'
import Value from './Value'

class Property extends Component {
    render(){
        
        return(
            <div>
                <Label label={this.props.label} /> 
                <Value value={this.props.value} />
            </div>
            )
    }   
}

export default Property