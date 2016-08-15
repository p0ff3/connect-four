const boardValues = new Array(7)
for (var i = 0; i < 7; i++) {
  boardValues[i] = new Array(7);
  for(var j = 0; j < 7; j++){
    boardValues[i][j] = 0
  }
}

const checkForWin = (x, y) => {
  return 0;
}
const initialState ={
  currentPlayer: 1,
  boardState: boardValues,
  hasAWinner: false
}

const GameState = (state = initialState, action) => {
  switch (action.type) {
    case 'COLUMN_PRESSED':
      if(state.currentPlayer === 1){
        nextPlayer = 2
      } else {
        nextPlayer = 1
      }
      //This loop goes from the bottom of a column to the top, checking for the first available slot to put a "mark"
      //If none available the state doesn't change.
      verticalPos = 6
      while(true){
        if(verticalPos === -1){
          //Oneliner for returning same state. Is probably a better solution. No time.
          return Object.assign({}, state, {state})
        }
        if(state.boardState[verticalPos][action.cords] === 0){
          checkForWin(verticalPos, action.cords);
          //I don't have enough knowledge but htis might be a memory-leak.
          tempBoard = state.boardState.slice(0);
          tempBoard[verticalPos][action.cords] = state.currentPlayer
          return Object.assign({}, state, {
            boardState: tempBoard,
            currentPlayer: nextPlayer,
            hasAWinner: false
          })
        }
        verticalPos -= 1;
      }

    default:
      return state
  }
}

module.exports = GameState;
