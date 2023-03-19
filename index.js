// code your solution here


function superbowlWin(record) {
    const wonGame = record.find(game => game.result === "W");
    return wonGame ? wonGame.year : undefined;
  }