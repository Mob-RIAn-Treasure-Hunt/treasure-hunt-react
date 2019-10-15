import React, {Component} from 'react'
import Square from '../Square/Square.js'
import boardStates from '../boardStates.js'

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spaces: boardStates
        }
    }
    
    handleClick = (id) => {
        const nuBoardSpaces = this.state.spaces;
        for(let i = 0; i < nuBoardSpaces.length; i++){
            if(id === i){
                const space = nuBoardSpaces[i];
                if(space.found){
                    return;
                }
                space.found = true;
                switch(space.squareState){
                    case -1:
                        break;
                    case 0:
                        break;
                    case 1:
                        break;
                }
            }
        }
        this.setState({spaces : nuBoardSpaces})
        
    }
    
    render() {
        const { spaces } = this.state
        return ( 
            
            <React.Fragment>
                <h1>Board</h1>
                {spaces.map(space => {
                    return <Square 
                                key={space.location}
                                spaceId={space.location} 
                                handleClick={this.handleClick}
                                found={space.found}
                                squareState={space.squareState}
                             />
                })}
            </React.Fragment>
        )
    }
}

export default Board