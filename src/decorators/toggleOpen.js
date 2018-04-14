import React, {Component} from 'react'
 
export default (OriginalComponent) => class ToggleOpen extends Component {
    state = {
        isOpened: false
    }

    render () {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} />
    }

    toggleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

} 