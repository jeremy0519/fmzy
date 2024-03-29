$(document).ready(function () {
    Parse.initialize("fmzy");
    Parse.serverURL = "https://43.142.126.163/parse";
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

    function alertInfo(message) {
        alertPlaceholder.empty();
        const wrapper = document.createElement("div");
        wrapper.innerHTML = [
            `<div class="alert fade show alert-info alert-dismissible d-flex align-items-center" role="alert">`,
            `   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img"><use xlink:href="#info-fill"/></svg>`,
            `   <div class="d-inline">${message}</div>`,
            '   <button id="closebtn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            "</div>",
        ].join("");
        alertPlaceholder.append(wrapper);
        window.location.href = "#";
    }
    if (localStorage.getItem("objectId") != undefined) {
        function qiandao() {
            const objid = localStorage.getItem("objectId");
            const query = new Parse.Query(classData);
            query.get(objid).then(
                (xxx) => {
                    xxx.save().then(() => {
                        var date = new Date();
                        var yyy = xxx.get("qiandao");
                        yyy.push(date)
                        xxx.set("qiandao", yyy);
                        return xxx.save().then(()=>{
                            $("div.alert-info").remove()
                            alertSuccess("签到成功！")
                        });
                    });
                },
                (error) => {
                    alertError(error.message + "（你可以点击注销并重新登录）");
                }
            );
        }
        const objid = localStorage.getItem("objectId");
        const query = new Parse.Query(classData);
        query.get(objid).then(
            (xxx) => {
                const yyy = xxx.get("username");
                var temp = xxx.get("qiandao").length - 1;
                var userLastQiandao = xxx.get("qiandao")[temp];
                if (!userLastQiandao) {
                    //从来没有签到过
                    alertInfo(`执行者大人，您从来没有<b id="qd" style="cursor:pointer">签到</b>过呢`)
                    $("#qd").click(()=>{qiandao()})
                }
                //那么看看今天签了没
                else if (!isToday(userLastQiandao)) {
                        alertInfo(`您今天还没有<b id="qd" style="cursor:pointer">签到</b>呢`)
                        $("#qd").click(()=>{qiandao()})
                    }
                
                $("#navbarDarkDropdownMenuLink").text("Signed in as: " + yyy);
                var ll = xxx.get("lastLogin").toLocaleDateString();
                xxx.save().then(() => {
                    var date = new Date();
                    if (date.toLocaleDateString() != ll) {
                        xxx.set("Testpractice", xxx.get("Testpractice") + 1);
                    }
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
        /**
         * 
         * @param {Date} date
         */
        function isToday(date) {
            var rage = new Date()
            if (date.toLocaleDateString() == rage.toLocaleDateString()) {
                return 1
            } else {
                return 0
            }
        }
        //BEGIN MESSAGE
        const senderList = new Array();
        senderList[1] = "？";
        senderList[2] = "异梦";
        senderList[3] = "冬哥";

        const messageList = new Array();
        messageList[0] = "主线上线啦！记得去看看~"; //ok
        messageList[1] = "执行者考核#1通天的巴别塔已经开启！"; //ok
        messageList[2] = "感谢底层代码员72P和神秘人Array！"; //ok
        messageList[3] = "感谢文案与创意入股成员Rage！"; //ok
        messageList[4] = "感谢技术参与与代码员麦克斯韦！"; //ok
        messageList[5] = "守卫者灯塔那束光————那是无上的辉光。"; //ok
        messageList[6] = //ok
            "为什么要醒来？浮梦之屿，这片乐土，空气里都充斥着令人迷醉的气味……他们会被现实的规则束缚，但浮梦之屿不会……既然如此，为什么还要醒来？就当做了永远也无法醒来的美梦……";
        messageList[7] = "我写过如此多的人物，然而自己却是一片混沌；但是，只要我不倒下，我就不会停止书写。"; //ok
        messageList[8] = "浮梦之屿的执行者考核试题1：冬哥和小裴是哪个班的？"; //ok
        messageList[9] = "昂，偷偷和你讲个秘密，浮梦之屿官方使用的照片格式是jpg，文字是txt，logo是ico，要不要试试呢（笑"; //ok
        messageList[10] = "作业做完了吗？：D"; //ok
        const selection1 = Math.floor(Math.random() * senderList.length); //随机数
        const selection2 = Math.floor(Math.random() * 116); //[0,115]
        if (selection2 <= 109) {
            var yushu = selection2 % 5;
            deliverMessage(senderList[selection1], messageList[yushu]);
        } else {
            //[110,115]
            var cha = selection2 - 105; //[5,10]
            deliverMessage(senderList[selection1], messageList[cha]);
        }
        //END MESSAGE

        $("#logout").click(function () {
            localStorage.removeItem("objectId");
            alertSuccess("已注销，3秒后跳转登录页");
            setTimeout(function () {
                window.location.href = "/signin.html";
            }, 3000);
        });
        $("#enterHome").click(function () {
            window.location.href = "/home.html?" + localStorage.getItem("objectId");
        });
    }
});
