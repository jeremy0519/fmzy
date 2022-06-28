$(document).ready(function () {
    Parse.initialize("fmzy")
    Parse.serverURL = 'http://43.142.126.163:1337/parse'
    const classData = Parse.Object.extend("fmzy")
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
    log("1038")
    const alertPlaceholder = $('#liveAlertPlaceholder')
    function alertError(message) {
        if (document.getElementById("closebtn")) {
            $("#closebtn").trigger("click")
        }
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert fade show alert-danger alert-dismissible d-flex align-items-center" role="alert">`,
            `   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>`,
            `   <div>${message}</div>`,
            '   <button id="closebtn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')
        alertPlaceholder.append(wrapper)
    }
    function alertSuccess(message) {
        if (document.getElementById("closebtn")) {
            $("#closebtn").trigger("click")
        }
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert fade show alert-success alert-dismissible d-flex align-items-center" role="alert">`,
            `   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>`,
            `   <div>${message}</div>`,
            '   <button id="closebtn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')
        alertPlaceholder.append(wrapper)
    }

    async function tryLogin(usrnme, pswd) {
        log("前端校验成功")
        log("开始尝试登录")
        const query = new Parse.Query(classData)
        query.equalTo("username", usrnme)
        query.find().then((results) => {
            log("同名用户数" + results.length)
            if (results.length == 0) {
                alertError("未找到用户")
            } else {
                log("已找到用户，开始判断密码")
                const object = results[0]
                const correctpwd = object.get("password")
                if (correctpwd == pswd){
                    log("密码校验成功")
                    Cookies.set("objectId", object.id)
                    alertSuccess("登录成功，3秒后跳转首页")
                    log("cookie存入成功：" + object.id)
                    setTimeout(function () { window.location.href = "/" }, 3000)
                }else{
                    alertError("密码不正确")
                }
            }
        }, (error) => {
            alertError(error.message)
        })
    }

    $("#myForm").submit(function (event) {
        log("检测到submit行为")
        event.preventDefault()
        var accountName = $("#floatingInput").val()
        var passwd = $("#floatingPassword").val()
        log("输入的用户名：" + accountName)
        log("输入的密码：" + passwd)
        if (!accountName || accountName == "") {
            alertError("请输入用户名")
        } else if (!passwd || passwd == "") {
            alertError("请输入密码")
        } else {
            tryLogin(accountName, passwd)
        }
    })
})