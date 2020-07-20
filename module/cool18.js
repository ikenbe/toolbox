(function cool18() {
    window.document.title = "Text Converter";
    var container = document.getElementById("container");
    container.innerHTML = "<div class=\"flex\"><textarea id=\"textA\" placeholder=\"Paste Your Text Here.\"></textarea><textarea id=\"textB\"></textarea></div><div class=\"flex\"><label><input type=\"radio\" id=\"checkbox01\" name=\"0\"><span>Cool18</span></label><label><input type=\"radio\" id=\"checkbox02\" name=\"0\" checked=\"checked\" value=\"\">Momoho</label><label><input type=\"checkbox\" id=\"checkbox03\">Git Style</label><label><input type=\"checkbox\" id=\"checkbox04\">去空格</label><input type=\"button\" value=\"Convert\" id=\"convert\"></div>";
    var textATemp = document.getElementById("textA"),
        textBTemp = document.getElementById("textB");

    function process() {
        if (document.getElementById('checkbox01').checked) {
            textBTemp.value = textATemp.value.replace(/\n*cool18.com\n/g, "==i==");
            textBTemp.value = textBTemp.value.replace(/\n/g, "");
            textBTemp.value = textBTemp.value.replace(/==i==/g, "\n");
        } else if (document.getElementById('checkbox02').checked) {
            textBTemp.value = textATemp.value.replace(/\n..\n/g, "==i==");//查找换行空格空格换行
            textBTemp.value = textBTemp.value.replace(/\n/g, "");
            textBTemp.value = textBTemp.value.replace(/==i==/g, "\n");
            textBTemp.value = textBTemp.value.replace(/　{4}/g, "　　");
            textBTemp.value = textBTemp.value.replace(/【/g, "\n【");
        }
        if (document.getElementById('checkbox03').checked) textBTemp.value = textBTemp.value.replace(/\n/g, "\n\n");
        if (document.getElementById('checkbox04').checked) {
            textBTemp.value = textBTemp.value.replace(/\n　　/g, "\n");
        }
    }
    document.getElementById('convert').onclick = function () {
        process();
    };
})()
