'use strict';
export var lyricsDemo=`[ti:You Are My Sunshine]
[ar:张靓颖]
[al:电影《何以笙箫默》主题曲]
[t_time:(01:43)]
aaaaa
[00:00.00] 张靓颖 - You Are My Sunshine
[00:02.10] You are my sunshine, my only sunshine
[00:08.54] You make me happy when skies are gray
[00:15.16] Youll never know dear, how much I love you
[00:22.13] Please dont take my sunshine away
[00:28.57] The other night, dear, as I lay sleeping
[00:35.19] I dreamed I held you in my arms
[00:41.89] When I awoken, dear, I was mistaken
[00:48.79] So I hung my head and cried
[00:55.20] You are my sunshine my only sunshine
[01:01.85] You make me happy when skies are gray
[01:08.59] Youll never know dear how much I love you
[01:15.52] Please dont take my sunshine away
[01:21.85] So Please dont take my sunshine away
[01:35.41] 歌词编辑：果果
[01:36.98] QQ:765708831
[01:39.88] 中文歌词库 www.cnLyric.com
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
console.log(LrcPre(lyricsDemo));//输出第一列为方括号内容，第二列为歌词
