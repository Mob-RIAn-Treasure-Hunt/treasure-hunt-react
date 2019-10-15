import React, {Component} from 'react'

class Square extends Component {
    render() {
        const {spaceId, handleClick, found, squareState} = this.props
        return (   
            <React.Fragment>
            <div onClick={() =>handleClick(spaceId)}>
                <h2 >{spaceId}</h2>
                <h3>Found: {found ? "found" : "not found"}</h3>
                <h3>Square State: {squareState}</h3>
            </div>
            </React.Fragment>
        )
    }
}

export default Square