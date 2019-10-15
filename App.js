import React, {Component} from 'react'
import Board from './components/Board/Board.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gameState: 0
        }
    }
    
    render() {
        const { gameState } = this.state
        return (
          
          <div className="App">
            
            <Board gameStatus={gameState}/>
          </div>
          );
    }
}

export default App;



