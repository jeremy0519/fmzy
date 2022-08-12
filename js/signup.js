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
    async function checkExist(userName, passWord) {
        const query = new Parse.Query(classData);
        query.equalTo("username", userName);
        query.count().then(
            (results) => {
                if (results == 1) {
                    alertError("用户已存在");
                } else {
                    const user = new classData();
                    user.set("username", userName);
                    user.set("password", passWord);
                    user.set("Pagehakhaogan", 0);
                    user.set("Tanghaogan", 0);
                    user.set("Binxiahaogan", 0);
                    user.set("Duguqiuyehaogan", 0);
                    user.set("Lianhaogan", 0);
                    user.set("Yimenghaogan", 0);
                    user.set("Pagehakmax", 0);
                    user.set("Tangmax", 0);
                    user.set("Binxiamax", 0);
                    user.set("Dugumax", 0);
                    user.set("Lianmax", 0);
                    user.set("Yimengmax", 0);
                    user.set("nextPage", "0-1");
                    user.set("choices", []);
                    user.set("daoju", []);
                    user.set("dunwu", 0);
                    user.set("touxiang", 1);
                    user.set("signature", "木有");
                    user.set("progress", 0);
                    user.set("CurrentTestLevel", 0);
                    user.set("Testpractice", 0);
                    user.save().then(
                        (user) => {
                            alertSuccess("注册成功，3秒后跳转首页");
                            Cookies.set("objectId", user.id);
                            setTimeout(function () {
                                window.location.href = "/";
                            }, 3000);
                        },
                        (error) => {
                            alertError("保存失败：" + error.message);
                        }
                    );
                }
            },
            (error) => {
                alertError(error.message);
            }
        );
    }
    $("#myForm").submit(function (event) {
        event.preventDefault();
        var accountName = $("#floatingInput").val();
        var passwd = $("#floatingPassword").val();
        var passwdcm = $("#floatingPasswordConfirm").val();
        if (passwd != passwdcm) {
            alertError("两次密码不一致");
        } else if (!accountName || accountName == "") {
            alertError("请输入用户名");
        } else if (!passwd || passwd == "") {
            alertError("请输入密码");
        } else if (accountName != accountName.substring(0, 30)) {
            alertError("用户名过长");
        } else {
            checkExist(accountName, passwd);
        }
    });
});

