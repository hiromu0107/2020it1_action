var data =JSON.parse(sessionStorage.getItem('Save'));
const LS_KEY = "score";

let ran1 = document.getElementById('rn1');
let ran2 = document.getElementById('rn2');
let ran3 = document.getElementById('rn3');
let ran4 = document.getElementById('rn4');
let ran5 = document.getElementById('rn5');

function getRankArr() {
    let arr = getLS(LS_KEY);
    if (arr == null) {
      return [];
    } else {
      return arr;
    }
  }

function getLS(KEY) {
  let arr = JSON.parse(localStorage.getItem(KEY));
  return arr;
}

function setLS(arr) {
  let strArr = JSON.stringify(localStorage.setItem(LS_KEY, arr));
}

function updateRank(user, score) {
  let rankItems = getRankArr();
  let newItems = [];
  let newItem = { n: user, s: score };
  let isAdded = false;

  if (rankItems.length == 0) {
    newItems.push(newItem);
  } else {
    for (let i = 0; i < rankItems.length; i++) {
      if (rankItems[i].s <= score && !isAdded) {
        newItems.push(newItem);
        isAdded = true;
      }
      newItems.push(rankItems[i]);
    }
  }
  if(newItems.length > 6){
    newItems.splice( 5, newItems.length);
  }
  //　切り捨て
  setLS(newItems);
  newItems =[];
}
function onclickname(){
    //localStorage.removeItem("score");
    //updateRank(input.value, 1000);
    console.log(getLS("score"));
}

ran1.innerHTML = '<p><font size="10"><pre><b>１位</b>  ' + getLS("score")[0].n +"  "+ getLS("score")[0].s +  '</pre></font></p>';
ran2.innerHTML = '<p><font size="10"><pre><b>２位</b>  ' + getLS("score")[1].n +"  "+ getLS("score")[1].s +  '</pre></font></p>';
ran3.innerHTML = '<p><font size="10"><pre><b>３位</b>  ' + getLS("score")[2].n +"  "+ getLS("score")[2].s +  '</pre></font></p>';
ran4.innerHTML = '<p><font size="10"><pre><b>４位</b>  ' + getLS("score")[3].n +"  "+ getLS("score")[3].s +  '</pre></font></p>';
ran5.innerHTML = '<p><font size="10"><pre><b>５位</b>  ' + getLS("score")[4].n +"  "+ getLS("score")[4].s +  '</pre></font></p>';

$(function(){
  $('.ranking-btn-return').click(function () {
    history.back();
  });
});
