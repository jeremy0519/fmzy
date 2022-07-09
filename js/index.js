$(document).ready(function () {
    Parse.initialize("fmzy")
    Parse.serverURL = 'http://43.142.126.163:1337/parse'
    const classData = Parse.Object.extend("fmzy")
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
        const objid = Cookies.get("objectId")
        const query = new Parse.Query(classData)
        query.get(objid).then((xxx) => {
            const yyy = xxx.get("username")
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<h2>`,
                `   Welcome, `,
                `   ${yyy}`,
                '</h2>'
            ].join('')
            $("#welcomeMessage").append(wrapper)
        }, (error) => {
            alertError(error.message + "（你可以点击注销并重新登录）")
        })
    }

    updateWelcomeMessage()

    $("#continue").click(function () {
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
        const objid = Cookies.get("objectId")
        const query = new Parse.Query(classData)
        query.get(objid).then((user) => {
            user.save().then((yyy) => {
                user.set("Pagehakhaogan", 0)
                user.set("Tanghaogan", 0)
                user.set("Binxiahaogan", 0)
                user.set("Duguqiuyehaogan", 0)
                user.set("Lianhaogan", 0)
                user.set("Yimenghaogan", 0)
                user.set("nextPage", "0-1")
                user.set("choices", [])
                user.set("daoju", [])
                return user.save()
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