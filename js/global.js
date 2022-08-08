$(document).ready(function () {
    Parse.initialize("fmzy");
    Parse.serverURL = "http://43.142.126.163:1337/parse";
    const classData = Parse.Object.extend("fmzy");
    const alertPlaceholder = $("#liveAlertPlaceholder");
    function alertError(message) {
        alertPlaceholder.empty();
        const wrapper = document.createElement("div");
        wrapper.innerHTML = [
            `<div class="alert fade show alert-danger alert-dismissible d-flex align-items-center" role="alert">`,
            `   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>`,
            `   <div>${message}</div>`,
            '   <button id="closebtn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            "</div>",
        ].join("");
        alertPlaceholder.append(wrapper);
        window.location.href = "#";
    }

    function alertSuccess(message) {
        alertPlaceholder.empty();
        const wrapper = document.createElement("div");
        wrapper.innerHTML = [
            `<div class="alert fade show alert-success alert-dismissible d-flex align-items-center" role="alert">`,
            `   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>`,
            `   <div>${message}</div>`,
            '   <button id="closebtn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            "</div>",
        ].join("");
        alertPlaceholder.append(wrapper);
        window.location.href = "#";
    }

    if (Cookies.get("objectId") != undefined) {
        const objid = Cookies.get("objectId");
        const query = new Parse.Query(classData);
        query.get(objid).then(
            (xxx) => {
                const yyy = xxx.get("username");
                $("#navbarDarkDropdownMenuLink").text("Signed in as: " + yyy);
                xxx.save().then(() => {
                    var date = new Date();
                    xxx.set("lastLogin", date);
                    return xxx.save();
                });
            },
            (error) => {
                alertError(error.message + "（你可以点击注销并重新登录）");
            }
        );
        // toast
        function deliverMessage(sender, content) {
            const toast = new bootstrap.Toast(document.getElementById("liveToast"));
            $("strong.me-auto").text(sender);
            $("div.toast-body").text(content);
            toast.show();
        }

        //BEGIN MESSAGE
        const senderList = new Array();
        senderList[1] = "？";
        senderList[2] = "异梦";
        senderList[3] = "冬哥";

        const messageList = new Array();
        messageList[0] = "主线上线啦！记得去看看~"; //ok
        messageList[1] = "咕咕~浮梦之屿内部人员都是大鸽子~"; //ok
        messageList[2] = "感谢底层代码员72P和神秘人Array！"; //ok
        messageList[3] = "感谢文案与创意入股成员Rage！"; //ok
        messageList[4] = "感谢技术参与与代码员麦克斯韦！"; //ok
        messageList[5] = //ok
            "守卫者灯塔那束光————那是无上的辉光。";
        messageList[6] = //ok
            "为什么要醒来？浮梦之屿，这片乐土，空气里都充斥着令人迷醉的气味……他们会被现实的规则束缚，但浮梦之屿不会……既然如此，为什么还要醒来？就当做了永远也无法醒来的美梦……";
        messageList[7] = //ok
            "我写过如此多的人物，然而自己却是一片混沌；但是，只要我不倒下，我就不会停止书写。";
        messageList[8] = //ok
            "浮梦之屿的执行者考核试题1：冬哥和小唐是哪个班的？";
        messageList[9] = //ok
            "昂，偷偷和你讲个秘密，浮梦之屿官方使用的照片格式是jpg，文字是txt，logo是ico，要不要试试呢（笑";
        messageList[10] = //ok
            "暑假作业做完了吗？：D";
        const selection1 = Math.floor(Math.random() * senderList.length); //随机数
        const selection2 = Math.floor(Math.random() * 116); //[0,115]
        if (selection2 <= 109){
            var yushu = selection2 % 5;
            deliverMessage(senderList[selection1], messageList[yushu]);
        }else{ //[110,115]
            var cha = selection2 - 105; //[5,10]
            deliverMessage(senderList[selection1], messageList[cha]);
        }
        //END MESSAGE

        $("#logout").click(function () {
            Cookies.remove("objectId");
            alertSuccess("已注销，3秒后跳转登录页");
            setTimeout(function () {
                window.location.href = "/signin.html";
            }, 3000);
        });
        $("#enterHome").click(function () {
            window.location.href = "/home.html?" + Cookies.get("objectId");
        });
    }
});
