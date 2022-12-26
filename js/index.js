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

    function updateWelcomeMessage() {
        const objid = localStorage.getItem("objectId");
        const query = new Parse.Query(classData);
        query.get(objid).then(
            (xxx) => {
                const yyy = xxx.get("username");
                const wrapper = document.createElement("div");
                wrapper.innerHTML = [`<h2>`, `   Welcome, `, `   ${yyy}`, "</h2>"].join("");
                $("#welcomeMessage").append(wrapper);
            },
            (error) => {
                console.log(error)
                alertError(error.message + "（你可以点击注销并重新登录）");
            }
        );
    }

    updateWelcomeMessage();

    // check whether add button
    const objid = localStorage.getItem("objectId");
    const query = new Parse.Query(classData);
    query.get(objid).then(
        (xxx) => {
            if (xxx.get("progress") >= 3) {
                //add button
                document.getElementsByClassName("modal-footer")[0].innerHTML = `
                <button type="button" id="startNew" class="btn btn-secondary">开始新存档</button>
                <button type="button" id="continue" class="btn btn-primary">继续</button>
                <button type="button" id="mixin" class="btn btn-warning">密辛</button>`;
                $("#mixin").click(function () {
                    const objid = localStorage.getItem("objectId");
                    const query = new Parse.Query(classData);
                    query.get(objid).then(
                        (xxx) => {
                            const progress = xxx.get("progress");
                           if (progress) {}
                            window.location.href = "secrets.html";
                        },
                        (error) => {
                            console.log(error)
                            alertError(error.message + "（你可以点击注销并重新登录）");
                        }
                    );
                });
                $("#continue").click(function () {
                    const objid = localStorage.getItem("objectId");
                    const query = new Parse.Query(classData);
                    query.get(objid).then(
                        (xxx) => {
                            const yyy = xxx.get("nextPage");
                            window.location.href = "/zhuxian/" + yyy + ".html";
                        },
                        (error) => {
                            console.log(error)
                            alertError(error.message + "（你可以点击注销并重新登录）");
                        }
                    );
                });
            
                $("#startNew").click(function () {
                    const objid = localStorage.getItem("objectId");
                    const query = new Parse.Query(classData);
                    query.get(objid).then(
                        (user) => {
                            user.save().then(() => {
                                user.set("Pagehakhaogan", 0);
                                user.set("Tanghaogan", 0);
                                user.set("Binxiahaogan", 0);
                                user.set("Duguqiuyehaogan", 0);
                                user.set("Lianhaogan", 0);
                                user.set("Yimenghaogan", 0);
                                user.set("nextPage", "0-1");
                                user.set("choices", []);
                                user.set("daoju", []);
                                user.set("dunwu", 0);
                                return user.save().then(() => {
                                    if (document.getElementById("close1")) {
                                        $("#close1").trigger("click");
                                    }
                                    alertSuccess("成功初始化进度！");
                                });
                            });
                        },
                        (error) => {
                            console.log(error)
                            alertError(error.message + "（你可以点击注销并重新登录）");
                        }
                    );
                });
            }
        },
        (error) => {
            console.log(error)
            alertError(error.message + "（你可以点击注销并重新登录）");
        }
    );

    $("#continue").click(function () {
        const objid = localStorage.getItem("objectId");
        const query = new Parse.Query(classData);
        query.get(objid).then(
            (xxx) => {
                const yyy = xxx.get("nextPage");
                window.location.href = "/zhuxian/" + yyy + ".html";
            },
            (error) => {
                console.log(error)
                alertError(error.message + "（你可以点击注销并重新登录）");
            }
        );
    });

    $("#startNew").click(function () {
        const objid = localStorage.getItem("objectId");
        const query = new Parse.Query(classData);
        query.get(objid).then(
            (user) => {
                user.save().then(() => {
                    user.set("Pagehakhaogan", 0);
                    user.set("Tanghaogan", 0);
                    user.set("Binxiahaogan", 0);
                    user.set("Duguqiuyehaogan", 0);
                    user.set("Lianhaogan", 0);
                    user.set("Yimenghaogan", 0);
                    user.set("nextPage", "0-1");
                    user.set("choices", []);
                    user.set("daoju", []);
                    user.set("dunwu", 0);
                    return user.save().then(() => {
                        if (document.getElementById("close1")) {
                            $("#close1").trigger("click");
                        }
                        alertSuccess("成功初始化进度！");
                    });
                });
            },
            (error) => {
                console.log(error)
                alertError(error.message + "（你可以点击注销并重新登录）");
            }
        );
    });
})
