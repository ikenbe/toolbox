function code(){
  //Replacing document.getElementById with $
  function $(x){
    if (typeof x == "string") return document.getElementById(x);
    return x;
  }

  function interface() {
    var container = $('container');
    container.innerHTML="<div id=\"placeHolder\">Welcome! This is Ken\'s toolbox. Useful or not, this is fun!</div>";
  }

  // Load JS files on demand with loadJS
  function loadJS(obj, callback) {
      var arr = obj,
          timeout,
          str = typeof obj === 'string';

      function add() {
          var script = document.createElement("script");
          header = document.getElementsByTagName("head")[0];
          script.src = str ? obj : arr[0];
          script.type = "text/javascript";
          if (str) {
              if (script.readyState) {
                  script.onreadystatechange = function() {
                      if (script.readyState === 'loaded' || script.readyState === 'complete') {
                          script.onreadystatechange = null;
                          callback && callback();
                      }
                  };
              } else {
                  script.onload = function() {
                      callback && callback();
                  };
              }
          } else {
              if (arr.length >= 1) {
                  if (script.readyState) {
                      script.onreadystatechange = function() {
                          if (script.readyState === 'loaded' || script.readyState === 'complete') {
                              script.onreadystatechange = null;
                              arr.shift();
                              timeout = setTimeout(add, 1);
                          }
                      };
                  } else {
                      script.onload = function() {
                          arr.shift();
                          timeout = setTimeout(add, 1);
                      };
                  }
              } else {
                  clearTimeout(timeout);
                  callback && callback();
              }
          }
          header.appendChild(script);
      }
      add();
  }
<<<<<<< HEAD

  interface();

  $('container').children[0].onclick = function(){loadJS('./module/cool18.js');};
  $('button_cool18').onclick = function(){loadJS('./module/cool18.js');};
=======
  
  loadJS('b.js',console.log("b.js loaded"));
>>>>>>> refs/remotes/origin/master

}
window.onload = function(){
  code();
};
