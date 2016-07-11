// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var animSpeed = 1;
 var myTimeLine = new TimelineLite();
  
    myTimeLine.from(".jumbotron", animSpeed, {
    y:-50, 
    alpha:0.5,
    ease:Elastic.easeOut,
    scaleX: 1,
    scaleY:1
  });
  
  /*myTimeLine.from("nav", animSpeed, {
    x:-1500, 
    alpha:.5,
    ease:Elastic.easeOut
  });
  
  myTimeLine.from(".sectOne", animSpeed, {
    x:500,
    alpha:0, 
    ease:Bounce.easeOut,
    });
  
  myTimeLine.from(".sectTwo", animSpeed, {
    x:-50, 
    alpha:0, 
    ease:Elastic.easeOut
  });
  myTimeLine.from(".sectThree", 5, {y:-500, alpha:.5, ease:Elastic.easeOut});
  myTimeLine.from(".sectFour", 5, {y:500, alpha:.5, ease:Elastic.easeOut});
  
  //myTimeLine.reverse(0);
 // myTimeLine.timeScale(.5);
  /*myTimeLine.staggerTo("img", animSpeed, {
  x:-50,
  alpha:.5,
  ease:Bounce.easeOut}, .5);*/
  
  
  myTimeLine.staggerFrom("sectFive", animSpeed, {
  x:-50,
  alpha:.5,
  ease:Bounce.easeOut}, .12);
  

