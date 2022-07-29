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
        window.location.href = "#"
    }

    function alertSuccess(message) {
        alertPlaceholder.empty()
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert fade show alert-success alert-dismissible d-flex align-items-center" role="alert">`,
            `   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>`,
            `   <div>${message}</div>`,
            '   <button id="closebtn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')
        alertPlaceholder.append(wrapper)
        window.location.href = "#"
    }

    if (Cookies.get('objectId') != undefined) {
        const objid = Cookies.get("objectId")
        const query = new Parse.Query(classData)
        query.get(objid).then((xxx) => {
            const yyy = xxx.get("username")
            $("#navbarDarkDropdownMenuLink").text("Signed in as: " + yyy)
            xxx.save().then(() => {
                var date = new Date()
                xxx.set("lastLogin", date)
                return xxx.save()
            })
        }, (error) => {
            alertError(error.message + "（你可以点击注销并重新登录）")
        })
        // toast
        function deliverMessage(sender, content) {
            const toast = new bootstrap.Toast(document.getElementById('liveToast'))
            $("strong.me-auto").text(sender)
            $("div.toast-body").text(content)
            toast.show()
        }

        //BEGIN MESSAGE
        const senderList = new Array()
        senderList[1] = "？"
        senderList[2] = "异梦"
        senderList[3] = "冬哥"

        const messageList = new Array()
        messageList[0] = "主线上线啦！记得去看看~"
        messageList[1] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[2] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[3] = "感谢文案与创意入股成员Rage！"
        messageList[4] = "感谢技术参与与代码员麦克斯韦！"
        messageList[5] = "主线上线啦！记得去看看~"
        messageList[6] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[7] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[8] = "感谢文案与创意入股成员Rage！"
        messageList[9] = "感谢技术参与与代码员麦克斯韦！"
        messageList[10] = "主线上线啦！记得去看看~"
        messageList[11] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[12] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[13] = "感谢文案与创意入股成员Rage！"
        messageList[14] = "感谢技术参与与代码员麦克斯韦！"
        messageList[15] = "主线上线啦！记得去看看~"
        messageList[16] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[17] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[18] = "感谢文案与创意入股成员Rage！"
        messageList[19] = "感谢技术参与与代码员麦克斯韦！"
        messageList[20] = "主线上线啦！记得去看看~"
        messageList[21] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[22] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[23] = "感谢文案与创意入股成员Rage！"
        messageList[24] = "感谢技术参与与代码员麦克斯韦！"
        messageList[25] = "主线上线啦！记得去看看~"
        messageList[26] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[27] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[28] = "感谢文案与创意入股成员Rage！"
        messageList[29] = "感谢技术参与与代码员麦克斯韦！"
        messageList[30] = "主线上线啦！记得去看看~"
        messageList[31] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[32] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[33] = "感谢文案与创意入股成员Rage！"
        messageList[34] = "感谢技术参与与代码员麦克斯韦！"
        messageList[35] = "主线上线啦！记得去看看~"
        messageList[36] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[37] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[38] = "感谢文案与创意入股成员Rage！"
        messageList[39] = "感谢技术参与与代码员麦克斯韦！"
        messageList[40] = "主线上线啦！记得去看看~"
        messageList[41] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[42] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[43] = "感谢文案与创意入股成员Rage！"
        messageList[44] = "感谢技术参与与代码员麦克斯韦！"
        messageList[45] = "主线上线啦！记得去看看~"
        messageList[46] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[47] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[48] = "感谢文案与创意入股成员Rage！"
        messageList[49] = "感谢技术参与与代码员麦克斯韦！"
        messageList[50] = "主线上线啦！记得去看看~"
        messageList[51] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[52] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[53] = "感谢文案与创意入股成员Rage！"
        messageList[54] = "感谢技术参与与代码员麦克斯韦！"
        messageList[55] = "主线上线啦！记得去看看~"
        messageList[56] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[57] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[58] = "感谢文案与创意入股成员Rage！"
        messageList[59] = "感谢技术参与与代码员麦克斯韦！"
        messageList[60] = "主线上线啦！记得去看看~"
        messageList[61] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[62] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[63] = "感谢文案与创意入股成员Rage！"
        messageList[64] = "感谢技术参与与代码员麦克斯韦！"
        messageList[65] = "主线上线啦！记得去看看~"
        messageList[66] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[67] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[68] = "感谢文案与创意入股成员Rage！"
        messageList[69] = "感谢技术参与与代码员麦克斯韦！"
        messageList[70] = "主线上线啦！记得去看看~"
        messageList[71] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[72] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[73] = "感谢文案与创意入股成员Rage！"
        messageList[74] = "感谢技术参与与代码员麦克斯韦！"
        messageList[75] = "主线上线啦！记得去看看~"
        messageList[76] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[77] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[78] = "感谢文案与创意入股成员Rage！"
        messageList[79] = "感谢技术参与与代码员麦克斯韦！"
        messageList[80] = "主线上线啦！记得去看看~"
        messageList[81] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[82] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[83] = "感谢文案与创意入股成员Rage！"
        messageList[84] = "感谢技术参与与代码员麦克斯韦！"
        messageList[85] = "主线上线啦！记得去看看~"
        messageList[86] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[87] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[88] = "感谢文案与创意入股成员Rage！"
        messageList[89] = "感谢技术参与与代码员麦克斯韦！"
        messageList[90] = "守卫者灯塔那束光————那是无上的辉光。"
        messageList[91] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[92] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[93] = "感谢文案与创意入股成员Rage！"
        messageList[94] = "感谢技术参与与代码员麦克斯韦！"
        messageList[95] = "主线上线啦！记得去看看~"
        messageList[96] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[97] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[98] = "感谢文案与创意入股成员Rage！"
        messageList[99] = "感谢技术参与与代码员麦克斯韦！"
        messageList[100] = "主线上线啦！记得去看看~"
        messageList[101] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[102] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[103] = "感谢文案与创意入股成员Rage！"
        messageList[104] = "感谢技术参与与代码员麦克斯韦！"
        messageList[105] = "主线上线啦！记得去看看~"
        messageList[106] = "咕咕~浮梦之屿内部人员都是大鸽子~"
        messageList[107] = "感谢底层代码员72P和神秘人ARRAY！"
        messageList[108] = "感谢文案与创意入股成员Rage！"
        messageList[109] = "感谢技术参与与代码员麦克斯韦！"
        messageList[110] = "守卫者灯塔那束光————那是无上的辉光。"
        messageList[111] = "为什么要醒来？浮梦之屿，这片乐土，空气里都充斥着令人迷醉的气味……他们会被现实的规则束缚，但浮梦之屿不会……既然如此，为什么还要醒来？就当做了永远也无法醒来的美梦……"
        messageList[112] = "我写过如此多的人物，然而自己却是一片混沌；但是，只要我不倒下，我就不会停止书写。"
        messageList[113] = "浮梦之屿的执行者考核试题1：冬哥和小唐是哪个班的？"
        messageList[114] = "昂，偷偷和你讲个秘密，浮梦之屿官方使用的照片格式是jpg，文字是txt，logo是ico，要不要试试呢（笑"
        messageList[115] = "暑假作业做完了吗？：D"
        const selection1 = Math.floor(Math.random() * senderList.length) //随机数
        const selection2 = Math.floor(Math.random() * messageList.length) //随机数
        deliverMessage(senderList[selection1], messageList[selection2])
        //END MESSAGE

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