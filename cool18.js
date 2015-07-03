function cool18(){
    document.title = "Text Converter";
    var container = document.getElementById("container");
    container.innerHTML = "<textarea rows=\"30\" cols=\"80\" id=\"textA\">Paste Your Text Here.</textarea><textarea rows=\"30\" cols=\"80\" id=\"textB\"></textarea><input type=\"button\" value=\"Convert\" id=\"convert\">"
    var textATemp = document.getElementById("textA"),
        textBTemp = document.getElementById("textB");
    function process(){
        textBTemp.value = textATemp.value.replace(/\n\n/g,"==i==");
        textBTemp.value = textBTemp.value.replace(/\n/g,"");
        textBTemp.value = textBTemp.value.replace(/==i==/g,"\n");
    };
    document.getElementById('convert').onclick = function(){process()};
};
cool18();
