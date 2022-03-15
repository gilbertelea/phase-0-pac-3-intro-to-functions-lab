function shout(string) {
  return string.toUpperCase(); 
}
function whisper(string){
    return string.toLowerCase();
}
function logShout (aWord) {
    console.log(aWord.toUpperCase( ));
  }

  function logWhisper (aWord) {
    console.log(aWord.toLowerCase( ));
  }

  function sayHiToHeadphonedRoommate(aWord) {
    let cantAnswer = "I can't hear you!";
    let yesAnswer = "YES INDEED!";
    let lovAnswer = "I would love to!";
    if (aWord.toLowerCase(aWord) === aWord) {
      return cantAnswer;
    }
    else if (aWord.toUpperCase(aWord) === aWord) {
      return yesAnswer;
    }
    else if ("Let's have dinner together!" === aWord) {
      return lovAnswer
    }
  }