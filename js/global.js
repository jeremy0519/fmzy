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

    if (Cookies.get('objectId') != undefined) {
        const objid = Cookies.get("objectId")
        const query = new Parse.Query(classData)
        query.get(objid).then((xxx) => {
            const yyy = xxx.get("username")
            $("#navbarDarkDropdownMenuLink").text("您已登录：" + yyy)
        }, (error) => {
            alertError(error.message + "（你可以点击注销并重新登录）")
        })

        // toast
        const messageList = new Array()
        messageList[0] = "rage生日快乐！"
        messageList[1] = "rage生快！"
        messageList[2] = "祝阿睿生日快乐！"
        messageList[3] = "祝阿睿生快！"
        messageList[4] = "936！"
        const selection = Math.floor(Math.random()*5) //随机数，取值0,1,2,3,4
        const toast = new bootstrap.Toast(document.getElementById('liveToast'))
        $("div.toast-body").text(messageList[selection]) //设置文本
        toast.show()

        $("#logout").click(function () {
            Cookies.remove("objectId")
            alertSuccess("已注销，3秒后跳转登录页")
            setTimeout(function () { window.location.href = "/signin.html" }, 3000)
        })
        $("#enterHome").click(function () {
            window.location.href = "/home.html?" + Cookies.get("objectId")
        })
    }

})