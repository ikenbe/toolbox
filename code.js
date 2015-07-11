function code(){
  //Replacing document.getElementById with $
  function $(x){
    if (typeof x == "string") return document.getElementById(x);
    return x;
  }

  function interface() {
    var container = $('container');
    container.innerHTML="<div id=\"placeHolder\">PlaceHolder</div>";
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

  interface();

  $('container').children[0].onclick = function(){loadJS('cool18.js');};

}
window.onload = function(){
  code();
};
