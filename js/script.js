$(document).ready(function(){
const vis = (function () {
  let stateKey,
    eventKey,
    keys = {
      hidden: "visibilitychange",
      webkitHidden: "webkitvisibilitychange",
      mozHidden: "mozvisibilitychange",
      msHidden: "msvisibilitychange"
    };
  for (stateKey in keys) {
    if (stateKey in document) {
      eventKey = keys[stateKey];
      break;
    }
  }
  return function (c) {
    if (c) document.addEventListener(eventKey, c);
    return !document[stateKey];
  }
})();
// tickerText(contents, keep, seconds, delay = 20, iterations = 0, ratio, secondsout, dev = false, pausetarget, stoptarget);
let $elements = $(".tt-holder .tt");
$(".ttt").tickerText($elements, 4, 2, 30, 1, 0.5, 2, false, "timerpause", "timerstop");

// clock

setInterval(() => {
  h=date.getHours();
  m=date.getMinutes();
  s=date.getSeconds();
  console.log(h+":"+m+":"+s);

  hrotation= 30*h + m/2;
  mrotation= 6*m;
  srotation= 6*s;
  console.log(hrotation+":"+mrotation+":"+srotation);

  $("#hour").css("transform", `rotate(${hrotation}deg)`);
  $("#minute").css("transform", `rotate(${mrotation}deg)`);
  $("#second").css("transform", `rotate(${srotation}deg)`);

}, 1000);

// form
$(document).ready( function () {
  $("input").airChars( {
   // options
  });
});

// chart
$('.demo').percentcircle({

animate : true,
diameter : 100,
guage: 2,
coverBg: '#fff',
bgColor: '#efefef',
fillColor: '#5c93c8',
percentSize: '15px',
percentWeight: 'normal'

});

// hover
$('.example').extm({
  zoomElement: false,
  imageSrc: $(this).attr('src'),
  squareOverlay: false,
  position: false,
  rightPad: 0,
  lazy: false,
  zoomLevel: 1,
  zoomSize: false,
  loadingText: false,
  loadingImage: false,
});

});
