$(document).ready(function () {
    Parse.initialize("fmzy")
    Parse.serverURL = 'http://43.142.126.163:1337/parse'
    const classData = Parse.Object.extend("fmzy")
    const alertPlaceholder = $('#liveAlertPlaceholder')
    function alertError(message) {
        alertPlaceholder.empty()
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert fade show alert-danger alert-dismissible d-flex align-items-center" role="alert">`,
            `   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>`,
            `   <div>${message}</div>`,
            '   <button id="closebtn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')
        alertPlaceholder.append(wrapper)
        window.location.href="#"
    }

    async function tryLogin(usrnme, pswd) {
        const query = new Parse.Query(classData)
        query.equalTo("username", usrnme)
        query.find().then((results) => {
            if (results.length == 0) {
                alertError("未找到用户")
            } else {
                const object = results[0]
                const correctpwd = object.get("password")
                if (correctpwd == pswd){
                    Cookies.set("objectId", object.id)
                    window.location.href = "/"
                }else{
                    alertError("密码不正确")
                }
            }
        }, (error) => {
            alertError(error.message)
        })
    }

    $("#myForm").submit(function (event) {
        event.preventDefault()
        var accountName = $("#floatingInput").val()
        var passwd = $("#floatingPassword").val()
        if (!accountName || accountName == "") {
            alertError("请输入用户名")
        } else if (!passwd || passwd == "") {
            alertError("请输入密码")
        } else {
            tryLogin(accountName, passwd)
        }
    })
})