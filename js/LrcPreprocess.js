'use strict';
export var lyricsDemo=`This is a simple lyrics (aka: .LRC format) editor
[00:00.00] You may want to click "Open File" to open a song
[00:02.10] And "Raw" to paste your lyrics
[00:08.54] Use "Add" and "Delete" to modify time tags
[00:15.16] When you're done, click "Raw" again to copy your lyrics
[00:22.13] Sometime I may make a "save" button,
[00:28.57] But not now
And, thanks for using
`;
export function LrcPre(lrc){
  var lrcArray=lrc.split("\n");
  return lrcArray.map((element,index,array)=>{
    let posOfBar=element.indexOf("]");
    let newEleArr;
    if (posOfBar!=-1) {
      newEleArr=[element.slice(1,posOfBar),element.slice(posOfBar+1)];
    }
    else {
      newEleArr=["",element];
    }
    return newEleArr;
  })}
export function LrcReset(lrcArray){
  return lrcArray.reduce((a,b)=>{
    if(b[0].length==0){
      return a.concat(b[1]).concat("\n");
    }
    else{
      return a.concat("[").concat(b[0]).concat("]").concat(b[1]).concat("\n");
    }
  },"").trim()
}
console.log(LrcReset(LrcPre(lyricsDemo)));//输出第一列为方括号内容，第二列为歌词
