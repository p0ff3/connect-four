const boardValues = new Array(7)
for (var i = 0; i < 7; i++) {
  boardValues[i] = new Array(7);
  for(var j = 0; j < 7; j++){
    boardValues[i][j] = 0
  }
}
/*I would give a small drawing of this algo.
Start counting downwards until I reach an odd cell or four cells in a row with same value(found winner)

With the following we have to consider we can find cells both ways (left-right)
Then do the same from left to right
Then do the same from top-left to bottom-right
Then do the same from top-right to bottom-left

Then try to figure out a better way because this code will be ugly.
Orientation is backwards, should've fixed it earlier but didn't. My bad. On TODO-list.

*/
const checkForWin = (tempBoard, xInput, yInput) => {
  currentPlayer = tempBoard[xInput][yInput];   //Player should be 1 or 2.

  y = yInput
  inARow = 1
  currentVal = tempBoard[xInput][y]
  //Start counting cells downwards. If outOfBounds, break the loop.
  while((y < 6) && tempBoard[xInput][y+1] === currentPlayer){
    y++
    inARow++
  }
  if(inARow > 3){
    return true;
  }

  //Now left-to-right
  x = xInput;
  inARow = 1;
  while((x > 0) && (tempBoard[x-1][yInput] === currentPlayer)){
      x--
  }
  //Now we're to the far left. So let's count to the right.
  while((x < 6) && (tempBoard[x+1][yInput] === currentPlayer)){
      x++
      inARow++
  }
  if(inARow > 3){
    return true;
  }

  //Now top-left to bottom-right
  x = xInput;
  y = yInput;
  inARow = 1;
  while((x > 0) && (y > 0) && (tempBoard[x-1][y-1] === currentPlayer)){
      x--
      y--
  }
  while((x < 6) && (y < 6) && (tempBoard[x+1][y+1] === currentPlayer)){
      x++
      y++
      inARow++
  }
  if(inARow > 3){
    return true;
  }

  //Now top-right to bottom-left
  x = xInput;
  y = yInput;
  inARow = 1;
  while((x < 6) && (y > 0) && (tempBoard[x+1][y-1] === currentPlayer)){
      x++
      y--
  }
  while((x > 0) && (y < 6) && (tempBoard[x-1][y+1] === currentPlayer)){
      x--
      y++
      inARow++
  }
  if(inARow > 3){
    return true;
  }
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
        if(state.boardState[action.cords][verticalPos] === 0){
          //I don't have enough knowledge but this might be a memory-leak. I think not because state.boardState won't be referenced after this method.
          //I don't know javacsript garbage-collector. Maybe use "let".
          tempBoard = state.boardState.slice(0);
          tempBoard[action.cords][verticalPos] = state.currentPlayer
          if(checkForWin(tempBoard, action.cords, verticalPos)){
            if(state.currentPlayer === 1){
              alert('Kryss vann')
            } else {
              alert('Cirkel vann')
            }
            tempBoard = boardValues;
          }
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
