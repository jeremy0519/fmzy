Parse.initialize("fmzy")
Parse.serverURL = 'https://43.142.126.163/parse'
const classData = Parse.Object.extend("fmzy")

function check() {
    const objid = localStorage.getItem("objectId")
    const query = new Parse.Query(classData)
    query.get(objid).then((xxx) => {
        const yyy = xxx.get("nextPage")
        if (yyy != "0-1"){
            window.location.href = "https://43.142.126.163"
        }
       
    }, (error) => {
    })
}

if (localStorage.getItem('objectId') == undefined) {
    window.location.href = 'https://43.142.126.163/signin.html'
} else {
    check()
}
