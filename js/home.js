Parse.initialize("fmzy");
Parse.serverURL = "http://43.142.126.163:1337/parse";
const objid = location.href.substring(32);
const classData = Parse.Object.extend("fmzy");
const query = new Parse.Query(classData);
query.get(objid).then(
    () => {},
    () => {
        window.location.href = "/index.html";
    }
);
$(document).ready(function () {
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
    function loginmodal(text) {
        var d = new Date();
        var e = document.createElement("p");
        e.setAttribute("class", "mb-0 text-break text-start");
        e.innerHTML = d.toLocaleTimeString() + "：" + text;
        $(".modal-body").append(e);
    }
    function successinmodal(text) {
        var d = new Date();
        var e = document.createElement("div");
        e.innerHTML = [
            `<div class="mt-1 alert fade show alert-success d-flex align-items-center" role="alert">`,
            `   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>`,
            `   <div>${text}</div>`,
            "</div>",
        ].join("");
        $(".modal-body").append(e);
        $(".clearfix").remove();
    }
    function errorinmodal(text) {
        var d = new Date();
        var e = document.createElement("div");
        e.innerHTML = [
            `<div class="mt-1 alert fade show alert-danger alert-dismissible d-flex align-items-center" role="alert">`,
            `   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>`,
            `   <div>${text}</div>`,
            "</div>",
        ].join("");
        $(".modal-body").append(e);
        $(".clearfix").remove();
    }
    // get id
    window.objectId = location.href.substring(32);
    // fill in blanks
    const query = new Parse.Query(classData);
    query.get(window.objectId).then(
        (xxx) => {
            $("#touxiang").attr("src", "ico/ico" + xxx.get("touxiang") + ".ico");
            $("#username").text(xxx.get("username"));
            $("#progress").text("0-" + xxx.get("progress"));
            document.getElementById("signature").innerHTML = xxx.get("signature").replace("\n", "<br />");
            $("#register").text(xxx.createdAt.toLocaleDateString());
            if (xxx.get("lastLogin") != undefined) {
                $("#lastlogin").text(xxx.get("lastLogin").toLocaleDateString());
            } else {
                $("#lastlogin").text("从未登录");
            }
            $("#page").text("帕普齐斯好感：" + xxx.get("Pagehakhaogan"));
            $("#tang").text("唐血鸿好感：" + xxx.get("Tanghaogan"));
            $("#binxia").text("彬夏好感：" + xxx.get("Binxiahaogan"));
            $("#dugu").text("独孤秋夜好感：" + xxx.get("Duguqiuyehaogan"));
            $("#yimeng").text("异梦好感：" + xxx.get("Yimenghaogan"));
            $("#lian").text("镰好感：" + xxx.get("Lianhaogan"));
        },
        (error) => {
            alertError(error.message + "（你可以点击注销并重新登录）");
        }
    );
    // permission granted
    if (window.objectId == Cookies.get("objectId")) {
        //添加编辑表单
        var element = document.createElement("div");
        element.setAttribute("class", "text-start");
        element.innerHTML = `
        <hr>
        <form class="needs-validation was-validated" novalidate>
            <div class="mb-2">
                <label class="form-label" for="input1">编辑昵称</label>
                <input type="text" class="form-control" id="input1" required>
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Looks bad!</div>
            </div>
            <div class="mb-2">    
                <label class="form-label" for="input2">编辑密码</label>
                <input type="password" class="form-control" id="input2" required>
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Looks bad!</div>
            </div>
            <div class="mb-2"> 
                <label for="input3" class="form-label">编辑个性签名</label>
                <textarea class="form-control" id="input3" rows="3" required></textarea>
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Looks bad!</div>
            </div>
            <label class="form-label">编辑头像</label>
            <div></div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                <label class="form-check-label" for="inlineRadio1"><img width="30" height="30" class="rounded-circle" src="http://43.142.126.163/ico/ico1.ico"</img></label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                <label class="form-check-label" for="inlineRadio2"><img width="30" height="30" class="rounded-circle" src="http://43.142.126.163/ico/ico2.ico"</img></label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
                <label class="form-check-label" for="inlineRadio3"><img width="30" height="30" class="rounded-circle" src="http://43.142.126.163/ico/ico3.ico"</img></label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4">
                <label class="form-check-label" for="inlineRadio4"><img width="30" height="30" class="rounded-circle" src="http://43.142.126.163/ico/ico4.ico"</img></label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5">
                <label class="form-check-label" for="inlineRadio5"><img width="30" height="30" class="rounded-circle" src="http://43.142.126.163/ico/ico5.ico"</img></label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option6">
                <label class="form-check-label" for="inlineRadio6"><img width="30" height="30" class="rounded-circle" src="http://43.142.126.163/ico/ico6.ico"</img></label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7" value="option7">
                <label class="form-check-label" for="inlineRadio7"><img width="30" height="30" class="rounded-circle" src="http://43.142.126.163/ico/ico7.ico"</img></label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" value="option8">
                <label class="form-check-label" for="inlineRadio8"><img width="30" height="30" class="rounded-circle" src="http://43.142.126.163/ico/ico8.ico"</img></label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio9" value="option9">
                <label class="form-check-label" for="inlineRadio9"><img width="30" height="30" class="rounded-circle" src="http://43.142.126.163/ico/ico9.ico"</img></label>
            </div>
            <div style="display:block" class="mb-2"></div>
            <button style="display:block" data-bs-toggle="modal" data-bs-target="#modalToggle1" type="submit" class="btn btn-outline-success">提交</button>
        </form>
        `;
        $("div.container").append(element);
        // 填入已有内容
        const query = new Parse.Query(classData);
        query.get(window.objectId).then(
            (xxx) => {
                $("#inlineRadio" + xxx.get("touxiang")).prop("checked", true);
                $("#input1").val(xxx.get("username"));
                $("#input2").val(xxx.get("password"));
                $("#input3").val(xxx.get("signature"));
            },
            (error) => {
                alertError(error.message + "（你可以点击注销并重新登录）");
            }
        );
        // 校验
        const validateform = (() => {
            "use strict";
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll(".needs-validation");
            // Loop over them and prevent submission
            Array.from(forms).forEach((form) => {
                form.addEventListener(
                    "submit",
                    (event) => {
                        if (!form.checkValidity()) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    },
                    false
                );
            });
        })();
        // 添加危险
        var div = document.createElement("div");
        div.id = "danger";
        div.setAttribute("class", "text-start border-top border-danger mt-3");
        div.innerHTML = `
            <h5 class="text-danger mt-2">Danger zone!</h5>
            <div class="alert alert-danger" role="alert">删除用户后，账号下所有数据都将清空且不可恢复！！！</div>
            <button type="button" class="btn btn-danger ms-1 me-1" id="danger1">确定删除</button>
        `;
        $("div.container").append(div);
        $("#danger1").click(() => {
            $("#danger1").prop("disabled", true);
            var danger2 = document.createElement("button");
            danger2.setAttribute("type", "button");
            danger2.setAttribute("class", "btn btn-danger ms-1 me-1");
            danger2.id = "danger2";
            danger2.innerHTML = "第二个按钮";
            $("#danger").append(danger2);
            $("#danger2").click(() => {
                $("#danger2").prop("disabled", true);
                var danger3 = document.createElement("button");
                danger3.setAttribute("type", "button");
                danger3.setAttribute("class", "btn btn-danger ms-1 me-1");
                danger3.setAttribute("data-bs-toggle", "modal");
                danger3.setAttribute("data-bs-target", "#modalToggle1");
                danger3.id = "danger3";
                danger3.innerHTML = "最后一个按钮了";
                $("#danger").append(danger3);
                $("#danger3").click(() => {
                    const query = new Parse.Query(classData);
                    query.get(window.objectId).then(
                        (xxx) => {
                            xxx.destroy().then(
                                () => {
                                    Cookies.remove("objectId");
                                    successinmodal("已删除用户，3秒后跳转登录页");
                                    setTimeout(() => {
                                        window.location.href = "http://43.142.126.163/signin.html";
                                    }, 3000);
                                },
                                (error) => {
                                    errorinmodal(error.message + "（你可以刷新页面并重试）");
                                }
                            );
                        },
                        (error) => {
                            errorinmodal(error.message + "（你可以刷新页面并重试）");
                        }
                    );
                });
            });
        });
        // 表单提交
        $("form").submit((Event) => {
            Event.preventDefault();
            const query = new Parse.Query(classData);
            query.get(objid).then(
                (user) => {
                    user.save().then(() => {
                        user.set("username", $("#input1").val());
                        user.set("password", $("#input2").val());
                        user.set("signature", $("#input3").val());
                        if (document.getElementById("inlineRadio1").checked == true) {
                            user.set("touxiang", 1);
                        } else if (document.getElementById("inlineRadio2").checked == true) {
                            user.set("touxiang", 2);
                        } else if (document.getElementById("inlineRadio3").checked == true) {
                            user.set("touxiang", 3);
                        } else if (document.getElementById("inlineRadio4").checked == true) {
                            user.set("touxiang", 4);
                        } else if (document.getElementById("inlineRadio5").checked == true) {
                            user.set("touxiang", 5);
                        } else if (document.getElementById("inlineRadio6").checked == true) {
                            user.set("touxiang", 6);
                        } else if (document.getElementById("inlineRadio7").checked == true) {
                            user.set("touxiang", 7);
                        } else if (document.getElementById("inlineRadio8").checked == true) {
                            user.set("touxiang", 8);
                        } else if (document.getElementById("inlineRadio9").checked == true) {
                            user.set("touxiang", 9);
                        }
                        return user.save().then(() => {
                            successinmodal("已更新个人信息，3秒后刷新");
                            setTimeout(() => {
                                window.location.href = "http://43.142.126.163/home.html?" + window.objectId;
                            }, 3000);
                        });
                    });
                },
                (error) => {
                    errorinmodal(error.message + "（你可以刷新页面并重试）");
                }
            );
        });
    }
});
