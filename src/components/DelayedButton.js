import React, { Component } from 'react';

export default class DelayedButton extends Component {

    handleClick = (event) => {
        event.persist()
        setTimeout( () => {this.props.onDelayedClick(event)}, this.props.timeout)
    }

    render() {
        return (
            <div>
          <button type="button" onClick={this.handleClick} />
            </div>
        )
    }
    
}
