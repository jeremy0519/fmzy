Parse.initialize("fmzy")
Parse.serverURL = 'https://43.142.126.163/parse'
const classData = Parse.Object.extend("fmzy")

function check() {
    const objid = Cookies.get("objectId")
    const query = new Parse.Query(classData)
    query.get(objid).then((xxx) => {
        const yyy = xxx.get("nextPage")
        if (yyy != "0-3"){
            window.location.href = "https://43.142.126.163"
        }
       
    }, (error) => {
    })
}

if (Cookies.get('objectId') == undefined) {
    window.location.href = 'https://43.142.126.163/signin.html'
} else {
    check()
}
