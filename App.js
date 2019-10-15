import React, {Component} from 'react'
import Board from './components/Board/Board.js';
import './App.css';
import boardStates from './components/boardStates.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spaces: boardStates,
            gameState: 0
        }
    }
    
    resetGame = () => {
        let s = this.state.spaces;
        let winNum = Math.floor(Math.random() * s.length);
        let lossNum = Math.floor(Math.random() * s.length);
        while(winNum === lossNum){
            lossNum = Math.floor(Math.random() * s.length);
        }
        for(let i = 0; i < s.length; i++){
            s[i].found = false;
            if(i === winNum){
                s[i].squareState = 1;
            }
            else if(i === lossNum){
                s[i].squareState = -1;
            }
            else{
                s[i].squareState = 0;
            }
        }
        this.setState({spaces: s});
        this.setState({gameState : 0})
    }
    
    changeGameState = (nuState) => {
        if(nuState === 0){
            return;
        }
        const { gameState } = this.state;
        if(gameState === 1 || gameState === -1){
            return;
        }
        this.setState({gameState : nuState})
    }
    
    componentDidMount(){
        this.resetGame();
    }
    
    render() {
        const { gameState } = this.state
        return (
          <div className="App">
            <h1>{gameState === 0 ? "Continue" : gameState === 1 ? "You Win!" : "You Lose....."} </h1>
            <button onClick = {this.resetGame}> Reset Game </button>
            <Board gameStatus = {gameState} changeGameState={this.changeGameState} spaces = {this.boardStates}/>
          </div>
          );
    }
}

export default App;



