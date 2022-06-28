$(document).ready(function () {
Parse.initialize("fmzy")
Parse.serverURL = 'http://43.142.126.163:1337/parse'
const classData = Parse.Object.extend("fmzy")

function check() {
    log("开始更新用户名")
        
}

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
log("936936")

if (Cookies.get('objectId') == undefined) {
    window.location.href = 'http://43.142.126.163/signin.html'
} else {
    check()
}
})