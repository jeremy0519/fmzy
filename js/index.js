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
    log("数据库初始化完毕")
    log("2735")
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

    function updateWelcomeMessage() {
        log("开始更新首页用户名")
        const objid = Cookies.get("objectId")
        const query = new Parse.Query(classData)
        query.get(objid).then((xxx) => {
            const yyy = xxx.get("username")
            log("查询到用户名：" + yyy)
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<h2>`,
                `   Welcome, `,
                `   ${yyy}`,
                '</h2>'
            ].join('')
            $("#welcomeMessage").append(wrapper)
            log("已放入welcome位置")
        }, (error) => {
            alertError(error.message + "（你可以点击注销并重新登录）")
        })
    }

    updateWelcomeMessage()

    $("#continue").click(function () {
        log("检测到点击继续主线")
        const objid = Cookies.get("objectId")
        const query = new Parse.Query(classData)
        query.get(objid).then((xxx) => {
            const yyy = xxx.get("nextPage")
            window.location.href = "/zhuxian/" + yyy + ".html"
        }, (error) => {
            alertError(error.message + "（你可以点击注销并重新登录）")
        })
    })

    $("#startNew").click(function () {
        log("检测到点击开始新主线")
        const objid = Cookies.get("objectId")
        const query = new Parse.Query(classData)
        query.get(objid).then((xxx) => {
            xxx.save().then((yyy) => {
                log("正在设置为0-1")
                yyy.set("nextPage", "0-1")
                return yyy.save()
            })
        }, (error) => {
            alertError(error.message + "（你可以点击注销并重新登录）")
        })
        if (document.getElementById("close1")) {
            $("#close1").trigger("click")
        }
        alertSuccess("成功初始化进度！")
    })


})