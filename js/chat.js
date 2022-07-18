$(document).ready(function () {
    // 换用户名和主页
    Parse.initialize("fmzy")
    Parse.serverURL = 'http://43.142.126.163:1337/parse'
    const classData = Parse.Object.extend("fmzy")
    const objid = Cookies.get("objectId")
    const query = new Parse.Query(classData)
    query.get(objid).then((xxx) => {
        const yyy = xxx.get("username")
        lock(yyy, Cookies.get("objectId"))
    }, (error) => {
        alertError(error.message + "（你可以点击注销并重新登录）")
    })
    function lock(a, b) {
        localStorage.removeItem("_v_Cache_Meta")
        var data = { "nick": a, "link": "http://43.142.126.163/home.html?" + b, "mail": "" }
        data = JSON.stringify(data)
        localStorage.setItem("_v_Cache_Meta", data)
        new Valine({
            el: '#vcomments',
            appId: 'gDlxWvuMYBkDVYVS4mwEYv9Y-9Nh9j0Va',
            appKey: 'r34nQnYth9ssYEJuXLzTl1DC',
            placeholder: "说点什么吧，说完之后就不能撤回了哦！",
            avatar: "retro",
            serverURLs: "https://gdlxwvum.lc-cn-e1-shared.com"
        })
        $("div.vheader.item3").remove()
        $("div.vpower.txt-right").remove()
    }


})