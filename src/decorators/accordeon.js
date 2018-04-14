import React, { Component } from 'react'

export default (OriginalComponent) => class Accordeon extends Component {
    state = {
        openedId: null
    }

    render() {
        return (
            <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} openedId={this.state.openedId}  />
        )
    }

    toggleOpen = openedId => () => {
        if (openedId === this.state.openedId)
            this.setState({
                openedId: null 
            })
        else
            this.setState({
                openedId 
            })
    }   
}