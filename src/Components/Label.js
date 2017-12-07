import  React, { Component } from 'react'

class Label extends Component {
    render() {
        return (
            <div className="label">
                <div className="label-content">
                    {this.props.label}
                </div>
            </div>
        )
    }
}

export default Label