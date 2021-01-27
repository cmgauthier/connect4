import React, { Component } from 'react';
import './App.css';



export default class App extends Component {
  state = {
    rows: 6,
    columns: 7,
    moves: [],
    playerTurn: 'red',
  };

  resetBoard = () => {
    this.setState({ moves: [] });
  }

  getPiece = (x, y) => {
    const list = this.state.moves.filter((item) => {
      return (item.x === x && item.y === y);
    });
    return list[0];
  }



  renderBoard() {
    const { rows, columns } = this.state;
    const rowViews = [];

    for (let row = 0; row < this.state.rows; row++) {
      const columnViews = [];
      for (let column = 0; column < this.state.columns; column++) {
        const piece = this.getPiece(column, row);
        columnViews.push(
          <div onClick={() => {this.addMove(column, row)}} style={{ backgroundColor: '#00a8ff', width: '8vw', height: '8vw', display: 'flex', padding: 5 , cursor: 'pointer' }}>
            <div style={{ borderRadius: '50%', backgroundColor: 'white', flex: 1, display: 'flex' }}>
              {piece ? <div style={{ flex: 1, borderRadius: '50%', border: '1px solid #333', backgroundColor: piece.player }}/> : undefined}
            </div>
          </div>
        );
      }
      rowViews.push(
        <div style={{ display: 'flex', flexDirection: 'row' }}>{columnViews}</div>
      );
    }
    return (
      <div style={{backgroundColor: 'red', display: 'flex', flexDirection: 'column' }}>
        {rowViews}
      </div>
    )
  }


  render() {
    const { style } = this.props;

    return (
      <div style={style ? Object.assign({}, styles.container, style) : styles.container}>
        <div>
          {this.renderBoard()}
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    height: '100%',
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};