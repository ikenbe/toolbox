(function magnet() {
    window.document.title = "Magnet Link Parser";
    var container = document.getElementById("container");
    container.innerHTML = "<div><div><span>Paste Link Here </span><input type=\"url\" id=\"input-link\"></input></div></div>"
    var magnetArea = container.firstElementChild
    magnetArea.setAttribute("id", "magnetC")
    let updateDisplay = function (event) {
        if (!event) return
        var data = event.srcElement.value
        if (data.substring(0, 30).match('magnet:?')) {
            let arr = magnetParser(data)
            //console.log(arr)
            while (magnetArea.childElementCount > 1) {
                magnetArea.lastElementChild.remove()
            }
            for (let val of arr) {
                let xt = val.split('?xt=urn:btih:')[1]
                if (xt) {
                    magnetArea.appendChild(addLine('HASH', xt))
                    arr.filter(x => x.match(xt))
                }
            }
            for (let val of arr) {
                let dn = val.split('dn=')[1]
                if (dn) {
                    magnetArea.appendChild(addLine('Display Name', decodeURIComponent(dn)))
                    arr.filter(x => x.match(dn))
                }
            }
            for (let val of arr) {
                let tr = val.split('tr=')[1]
                if (tr) {
                    magnetArea.appendChild(addLine('Tracker', decodeURIComponent(tr)))
                }
            }
            magnetArea.appendChild(addButton('Generate New Link', parseLink))

        }
        //magnetParser(data)
    }
    document.getElementById("input-link").addEventListener('input', updateDisplay)
    function magnetParser(data) {
        data = data.split('&')
        return data
    }

    function addLine(text, val) {
        let line = document.createElement('div')
        let p1 = document.createElement('span')
        let p2 = document.createElement('input')
        p1.textContent = text
        p2.value = val
        line.appendChild(p1)
        line.appendChild(p2)
        return line
    }

    function addButton(val, func) {
        let wrap = document.createElement('div')
        let button = document.createElement('input')
        button.setAttribute('type', 'button')
        button.value = val
        button.addEventListener('click', func)
        wrap.appendChild(button)
        return wrap
    }

    function parseLink(ele) {
        let arr = ele.path[2].getElementsByTagName('input')
        let arr2 = []
        for (let i = 1; arr[i + 1]; i++) {
            arr2.push(arr[i].value)
        }
        arr2 = arr2.map(x => encodeURIComponent(x))
        let str = 'magnet:?xt=urn:btih:' + arr2[0] + '&dn=' + arr2[1]
        for (let j = 2; arr2[j]; j++) {
            str += ('&tr=' + arr2[j])
        }
        let oldlink = document.getElementById('newMagnet')
        if (oldlink) oldlink.remove()
        res = document.createElement('div')
        res.innerHTML = '<a>' + str + '</a>'
        res.firstElementChild.setAttribute('href',str)
        res.setAttribute('id', 'newMagnet')
        magnetArea.appendChild(res)
        return str
    }
})()

//magnet:?xt=urn:btih:9da098458777889201d562f7afd656ab12ca2586&dn=%2B%2B%2B%20%5BHD%5D%20URE-067%20Madonna%E5%B0%82%E5%B1%9E2%E5%91%A8%E5%B9%B4%E8%A8%98%E5%BF%B5%E4%BD%9C%E5%93%81%20%E4%BC%9D%E8%AA%AC%E3%81%AE%E4%BA%BA%E5%A6%BB%E7%BE%9E%E6%81%A5%E8%AA%BF%E6%95%99%E3%82%B3%E3%83%9F%E3%83%83%E3%82%AF%E3%81%8C%E5%86%8D%E3%81%B3%E5%AE%9F%E5%86%99%E5%8C%96%EF%BC%81%EF%BC%81%20%E4%B8%AD%E8%8F%AF%E3%81%AA%E3%82%8B%E3%81%A8%E5%8E%9F%E4%BD%9C%20%E7%BE%A9%E7%88%B6%20%EF%BD%9E%E8%A3%95%E7%BE%8E%E3%81%AE%E6%98%BC%E4%B8%8B%E3%81%8C%E3%82%8A%EF%BD%9E%20%E7%A5%9E%E5%AE%AE%E5%AF%BA%E3%83%8A%E3%82%AA&tr=http%3A%2F%2Fsukebei.tracker.wf%3A8888%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce