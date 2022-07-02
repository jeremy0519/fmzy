$(document).ready(function () {
    function log(text) {
        var d = new Date()
        const element = document.createElement('p')
        element.innerHTML = [
            `<p class="text-start text-break">`,
            `${d}`,
            `: `,
            `${text}`,
            `</p>`].join("")
        $("#logArea").append(element)
    }
    log("开始记录log")
    log("133")
    new Valine({
        el: '#vcomments',
        appId: 'gDlxWvuMYBkDVYVS4mwEYv9Y-9Nh9j0Va',
        appKey: 'r34nQnYth9ssYEJuXLzTl1DC',
        placeholder: "说点什么吧，说完之后就不能撤回了哦！",
        avatar: "retro",
        serverURLs: "https://gdlxwvum.lc-cn-e1-shared.com"
    })
    log("评论系统初始化完毕")
})