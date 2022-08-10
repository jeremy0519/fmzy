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

    const query = new Parse.Query(classData);
    query.get(Cookies.get("objectId")).then(
        (rage) => {
            // 查询需要的变量并保存
            window.local_CurrentTestLevel = rage.get("CurrentTestLevel");

            if (window.local_CurrentTestLevel == 0) {
                //那么显示第一关的form
                $("#title").text("执行者考核-Lv1");
                $("#LevelNow").text("当前等级Lv0");
                $("#formplaceholder").html(`
                <form id="form">        
                    <p class="mb-1 text-start text-primary">1.小唐和冬哥是哪个班的？</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question1Option1" name="Question1" value="1">
                        <label class="form-check-label" for="Question1Option1">9班</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question1Option2" name="Question1" value="2">
                        <label class="form-check-label" for="Question1Option2">3班</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question1Option3" name="Question1" value="3">
                        <label class="form-check-label" for="Question1Option3">6班</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question1Option4" name="Question1" value="4">
                        <label class="form-check-label" for="Question1Option4">4班</label>
                    </div>

                    <p class="mb-1 mt-2 text-start text-primary">2.如何对y=936x求导？</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question2Option1" name="Question2" value="1">
                        <label class="form-check-label" for="Question2Option1">936x</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question2Option2" name="Question2" value="2">
                        <label class="form-check-label" for="Question2Option2">936</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question2Option3" name="Question2" value="3">
                       <label class="form-check-label" for="Question2Option3">936x^2</label>
                    </div>
                    <button type="submit" class="btn btn-outline-info mt-2">提交</button>
                </form>
                `);
                //第一关form的html添加好了
                //现在监听提交事件
                $("#form").submit(function (event) {
                    event.preventDefault();
                    //先检查第一题选了没
                    var valueOfQuestion1 = $('input:radio[name="Question1"]:checked').val();
                    if (valueOfQuestion1 == null) {
                        alertError("请选择第一题的答案");
                    } else {
                        //继续检查第二题选了没
                        var valueOfQuestion2 = $('input:radio[name="Question2"]:checked').val();
                        if (valueOfQuestion2 == null) {
                            alertError("请选择第二题的答案");
                        } else {
                            //所有选项都选了
                            //判断答案是否正确
                            //valueofquestion1和valueofoption2理论上取值分别为1,2,3,4和1,2,3
                            if (valueOfQuestion1 == "4" && valueOfQuestion2 == "2") {
                                //答案正确
                                //准备保存进度
                                const jake = new Parse.Query(classData);
                                jake.get(Cookies.get("objectId")).then(
                                    (user) => {
                                        user.save().then(() => {
                                            user.set("CurrentTestLevel", 1);
                                            return user.save().then(() => {
                                                alertSuccess("答案正确，通关！3秒后刷新以进入下一关");
                                                setTimeout(() => {
                                                    window.location.href = "http://43.142.126.163/test.html";
                                                }, 3000);
                                            });
                                        });
                                    },
                                    (error) => {
                                        alertError(error.message + "（你可以点击注销并重新登录）");
                                    }
                                );
                            } else {
                                //答案错误
                                alertError("选的不对！！！3秒后为你刷新重试");
                                setTimeout(() => {
                                    window.location.href = "http://43.142.126.163/test.html";
                                }, 3000);
                            }
                        }
                    }
                });
            } else if (window.local_CurrentTestLevel == 1) {
                //那么显示第二关的form
                $("#title").text("执行者考核-Lv2");
                $("#LevelNow").text("当前等级Lv1");
                $("#formplaceholder").html(`
                <p>WIP</p>
                `);
                //WIP
            }
        },
        (error) => {
            alertError(error.message + "（你可以点击注销并重新登录）");
        }
    );
});

