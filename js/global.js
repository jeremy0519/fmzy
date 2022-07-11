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
        messageList[0] = "主线上线啦！记得去看看~"
        messageList[1] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[2] = "感谢底层代码员72P！"
        messageList[3] = "感谢文案与创意入股成员Rage！"
        messageList[4] = "感谢技术参与与代码员麦克斯韦！"
        const selection = Math.floor(Math.random()*5) //随机数，取值0,1,2,3,4
        const toast = new bootstrap.Toast(document.getElementById('liveToast'))
        $("div.toast-body").text(messageList[selection]) //设置文本
        toast.show()
        //呜哇，谢谢小唐呜呜呜
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