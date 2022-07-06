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

    if (Cookies.get('objectId') != undefined) {
        log("准备更新导航栏（注意：此为异步请求，通俗来讲就是子线程，白话就是与主线程分离不同步，人话不知道怎么讲）")

        const objid = Cookies.get("objectId")
        const query = new Parse.Query(classData)
        query.get(objid).then((xxx) => {
            const yyy = xxx.get("username")
            log("查询到用户名：" + yyy)
            $("#navbarDarkDropdownMenuLink").text("您已登录：" + yyy)
            log("导航栏更新完毕")
        }, (error) => {
            alertError(error.message + "（你可以点击注销并重新登录）")
        })
        $("#logout").click(function () {
            log("开始清除cookie")
            Cookies.remove("objectId")
            alertSuccess("已注销，3秒后跳转登录页")
            setTimeout(function () { window.location.href = "/signin.html" }, 3000)
        })

        $("#enterHome").click(function () {
            window.location.href = "/home.html?" + Cookies.get("objectId")
        })
    }

})