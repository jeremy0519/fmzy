$(document).ready(function () {
Parse.initialize("fmzy")
Parse.serverURL = 'http://43.142.126.163:1337/parse'
const classData = Parse.Object.extend("fmzy")

function check() {
    const objid = Cookies.get("objectId")
    const query = new Parse.Query(classData)
    query.get(objid).then((xxx) => {
        const yyy = xxx.get("nextPage")
        if (yyy != "0-1-1"){
            window.location.href = "http://43.142.126.163"
        }
       
    }, (error) => {
    })
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

if (Cookies.get('objectId') == undefined) {
    window.location.href = 'http://43.142.126.163/signin.html'
} else {
    check()
}
})