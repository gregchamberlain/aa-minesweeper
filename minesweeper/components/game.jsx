import React, { Component } from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';
import Modal from './modal';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      board: new Minesweeper.Board(15, 5),
    };
  }

  updateGame(tile, flagging) {
    if (flagging) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState({board: this.state.board});
  }

  restartGame() {
    this.setState({board: new Minesweeper.Board(15, 5)});
  }

  render() {

    let won = this.state.board.won();
    let lost = this.state.board.lost();

    return (
      <div className="game-wrapper">
        <h1>Minesweeper</h1>
        <Board board={this.state.board.grid} updateGame={this.updateGame.bind(this)}/>
        { won || lost ? <Modal won={won} restart={this.restartGame.bind(this)}/> : null }
      </div>
    );
  }
}

export default Game;
