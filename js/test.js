$(document).ready(function () {
    Parse.initialize("fmzy");
    Parse.serverURL = "http://43.142.126.163/parse";
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
    function alertSuccessInForm(message) {
        $("#form").empty();
        const wrapper = document.createElement("div");
        wrapper.innerHTML = [
            `<div class="alert fade show alert-success alert-dismissible d-flex align-items-center" role="alert">`,
            `   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>`,
            `   <div>${message}</div>`,
            '   <button id="closebtn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            "</div>",
        ].join("");
        $("#form").append(wrapper);
    }
    function alertErrorInForm(message) {
        $("#form").empty();
        const wrapper = document.createElement("div");
        wrapper.innerHTML = [
            `<div class="alert fade show alert-danger alert-dismissible d-flex align-items-center" role="alert">`,
            `   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>`,
            `   <div>${message}</div>`,
            '   <button id="closebtn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            "</div>",
        ].join("");
        $("#form").append(wrapper);
    }
    const query = new Parse.Query(classData);
    query.get(localStorage.getItem("objectId")).then((rage) => {
        // 查询需要的变量并保存
        window.local_CurrentTestLevel = rage.get("CurrentTestLevel");
        window.local_Testpractice = rage.get("Testpractice");
        $("#practiceNum").text("当前门票数：" + window.local_Testpractice);
        if (window.local_CurrentTestLevel == 0) {
            $("#title").text("执行者考核#1：通天的巴别塔-Lv1");
            $("#LevelNow").text("当前等级Lv0,该层推荐进度：0-3满配好感");
            $("#startchallenge").click(function () {
                if (window.local_Testpractice != 0) {
                    //那么显示第一关的form
                    //Question编号固定
                    //先const定义常量题目和正确答案
                    const xuanzeti = {
                        html: [
                            `

                    <p class="mb-1 mt-2 text-start text-primary">小唐和冬哥是哪个班的？</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question1Option1" name="Question1" value="1">
                        <label class="form-check-label" for="Question1Option1">9班</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question1Option2" name="Question1" value="2">
                        <label class="form-check-label" for="Question1Option2">5班</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question1Option3" name="Question1" value="3">
                        <label class="form-check-label" for="Question1Option3">6班</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question1Option4" name="Question1" value="4">
                        <label class="form-check-label" for="Question1Option4">4班</label>
                    </div>`,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">彬夏的生日是什么时候？</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question2Option1" name="Question2" value="1">
                        <label class="form-check-label" for="Question2Option1">7.13</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question2Option2" name="Question2" value="2">
                        <label class="form-check-label" for="Question2Option2">1.27</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question2Option3" name="Question2" value="3">
                        <label class="form-check-label" for="Question2Option3">10.24</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question2Option4" name="Question2" value="4">
                        <label class="form-check-label" for="Question2Option4">8.11</label>
                    </div>`,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">綮冬和唐血鸿的数学老师姓是什么</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question3Option1" name="Question3" value="1">
                        <label class="form-check-label" for="Question3Option1">李</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question3Option2" name="Question3" value="2">
                        <label class="form-check-label" for="Question3Option2">沈</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question3Option3" name="Question3" value="3">
                       <label class="form-check-label" for="Question3Option3">王</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question3Option4" name="Question3" value="4">
                       <label class="form-check-label" for="Question3Option4">都不是</label>
                    </div>`,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">孤儿院门口挂的锦旗包括以下哪一个？</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question4Option1" name="Question4" value="1">
                        <label class="form-check-label" for="Question4Option1">鞠躬尽瘁，死而后已</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question4Option2" name="Question4" value="2">
                        <label class="form-check-label" for="Question4Option2">赠人玫瑰，手留余香</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question4Option3" name="Question4" value="3">
                       <label class="form-check-label" for="Question4Option3">诲人不倦</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question4Option4" name="Question4" value="4">
                       <label class="form-check-label" for="Question4Option4">都不是</label>
                    </div>`,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">在0-2中，当綮冬从唐血鸿梦境中脱离时，后排女生所说的两人卖点是什么？</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question5Option1" name="Question5" value="1">
                        <label class="form-check-label" for="Question5Option1">沉稳闷骚攻x阳光沙雕受</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question5Option2" name="Question5" value="2">
                        <label class="form-check-label" for="Question5Option2">阳光沙雕攻x沉稳闷骚受</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question5Option3" name="Question5" value="3">
                       <label class="form-check-label" for="Question5Option3">沉稳高冷攻x阳光开朗受</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question5Option4" name="Question5" value="4">
                       <label class="form-check-label" for="Question5Option4">显然都不是，我冬哥肯定是攻！！1</label>
                    </div>`,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">主线0-1与0-2开放时间？</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question6Option1" name="Question6" value="1">
                        <label class="form-check-label" for="Question6Option1">7.17</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question6Option2" name="Question6" value="2">
                        <label class="form-check-label" for="Question6Option2">8.19</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question6Option3" name="Question6" value="3">
                       <label class="form-check-label" for="Question6Option3">8.11</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question6Option4" name="Question6" value="4">
                       <label class="form-check-label" for="Question6Option4">7.11</label>
                    </div>`,
                            `
                    <p class="mb-1 mt-2 text-start text-primary">系统权限调用是什么功能？</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question7Option1" name="Question7" value="1">
                        <label class="form-check-label" for="Question7Option1">个人主页</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question7Option2" name="Question7" value="2">
                        <label class="form-check-label" for="Question7Option2">剧情回溯</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question7Option3" name="Question7" value="3">
                        <label class="form-check-label" for="Question7Option3">执行者考核</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question7Option4" name="Question7" value="4">
                       <label class="form-check-label" for="Question7Option4">以上都不是</label>
                    </div>`,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">浮梦之屿目前未上线以下哪项功能？</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question8Option1" name="Question8" value="1">
                        <label class="form-check-label" for="Question8Option1">密辛</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question8Option2" name="Question8" value="2">
                        <label class="form-check-label" for="Question8Option2">守卫者灯塔</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question8Option3" name="Question8" value="3">
                       <label class="form-check-label" for="Question8Option3">信息录入表</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question8Option4" name="Question8" value="4">
                       <label class="form-check-label" for="Question8Option4">均没有上线</label>
                    </div>`,
                        ],
                        correct: [4, 4, 2, 3, 1, 4, 4, 3],
                    };

                    const tiankongti = {
                        html: [
                            `
                    <p class="mb-1 mt-2 text-start text-primary">收留镰的孤儿院名字是？（5个字）</p>
                    <input type="text" class="form-control" id="Question9">
                    `,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">唐密辛《褪色的王冠·遇见》中，他偷偷带回家的书叫？（9个字，无书名号）</p>
                    <input type="text" class="form-control" id="Question10">
                    `,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">镰的日记中，I开头的诗名字叫？（首字母大写）</p>
                    <input type="text" class="form-control" id="Question11">
                    `,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">浮梦之屿官方邮箱是？（格式：_______@____.____）</p>
                    <input type="text" class="form-control" id="Question12">
                    `,
                        ],
                        correct: ["阳光福利院", "马克思与恩格斯选集", "Isolated", "Fmzy_Official@163.com"],
                    };
                    //扣门票
                    window.local_Testpractice -= 1;
                    const mrz = new Parse.Query(classData);
                    mrz.get(localStorage.getItem("objectId")).then(
                        (user) => {
                            user.save().then(() => {
                                user.set("Testpractice", window.local_Testpractice);
                                return user.save().then(() => {
                                    alertSuccess("已扣除一张门票");
                                    $("#practiceNum").text("当前门票数：" + window.local_Testpractice);
                                });
                            });
                        },
                        (error) => {
                            alertError(error.message + "（你可以点击注销并重新登录）");
                        }
                    );
                    //抽数
                    //避免重复
                    //想不出来算法555
                    var list = new Array(0, 1, 2, 3, 4, 5, 6, 7);
                    const xuanzeselection1 = list[Math.floor(Math.random() * 8)]; //[0,7]
                    var index = list.indexOf(xuanzeselection1);
                    list.splice(index, 1);
                    const xuanzeselection2 = list[Math.floor(Math.random() * 7)];
                    var index = list.indexOf(xuanzeselection2);
                    list.splice(index, 1);
                    const xuanzeselection3 = list[Math.floor(Math.random() * 6)];
                    var index = list.indexOf(xuanzeselection3);
                    list.splice(index, 1);
                    const xuanzeselection4 = list[Math.floor(Math.random() * 5)];
                    var list = new Array(0, 1, 2, 3);
                    const tiankongselection1 = list[Math.floor(Math.random() * 4)]; //[0,3]
                    var index = list.indexOf(tiankongselection1);
                    list.splice(index, 1);
                    const tiankongselection2 = list[Math.floor(Math.random() * 3)];
                    //放入html
                    $("#formplaceholder").html(`
                <form id="form">        
                    ${xuanzeti.html[xuanzeselection1]}
                    ${xuanzeti.html[xuanzeselection2]}
                    ${xuanzeti.html[xuanzeselection3]}
                    ${xuanzeti.html[xuanzeselection4]}
                    ${tiankongti.html[tiankongselection1]}
                    ${tiankongti.html[tiankongselection2]}
                    <button type="submit" class="btn btn-outline-info mt-2">提交</button>
                    <p class="text-muted">请再次检查，如若错误或留空将会扣除一张门票！！1</p>
                </form>
                `);
                    //第一关form的html添加好了
                    //现在监听提交事件
                    $("#form").submit(function (event) {
                        event.preventDefault();
                        var temp = xuanzeselection1 + 1; //转换编号
                        var valueOfDisplayedQuestion1 = $("input:radio[name=Question" + temp + "]:checked").val();
                        var temp = xuanzeselection2 + 1; //转换编号
                        var valueOfDisplayedQuestion2 = $("input:radio[name=Question" + temp + "]:checked").val();
                        var temp = xuanzeselection3 + 1; //转换编号
                        var valueOfDisplayedQuestion3 = $("input:radio[name=Question" + temp + "]:checked").val();
                        var temp = xuanzeselection4 + 1; //转换编号
                        var valueOfDisplayedQuestion4 = $("input:radio[name=Question" + temp + "]:checked").val();
                        var temp = tiankongselection1 + 9; //转换编号
                        var valueOfDisplayedQuestion5 = $("#Question" + temp).val();
                        var temp = tiankongselection2 + 9; //转换编号
                        var valueOfDisplayedQuestion6 = $("#Question" + temp).val();

                        //判断答案是否正确
                        if (
                            valueOfDisplayedQuestion1 == xuanzeti.correct[xuanzeselection1] &&
                            valueOfDisplayedQuestion2 == xuanzeti.correct[xuanzeselection2] &&
                            valueOfDisplayedQuestion3 == xuanzeti.correct[xuanzeselection3] &&
                            valueOfDisplayedQuestion4 == xuanzeti.correct[xuanzeselection4] &&
                            valueOfDisplayedQuestion5 == tiankongti.correct[tiankongselection1] &&
                            valueOfDisplayedQuestion6 == tiankongti.correct[tiankongselection2]
                        ) {
                            //答案正确
                            //准备保存进度
                            const jake = new Parse.Query(classData);
                            jake.get(localStorage.getItem("objectId")).then(
                                (user) => {
                                    user.save().then(() => {
                                        user.set("CurrentTestLevel", 1);
                                        return user.save().then(() => {
                                            alertSuccessInForm("答案全部正确，通关！3秒后刷新以进入下一层");
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
                            alertErrorInForm("非常抱歉，该层巴别塔未通关成功。3秒后为你刷新重试");
                            setTimeout(() => {
                                window.location.href = "http://43.142.126.163/test.html";
                            }, 3000);
                        }
                    });
                } else {
                    $("#formplaceholder").html(`
                <p>门票已用完，请继续主线以获取门票或等待第二天自动发放。</p>
                `);
                }
            });
        } else if (window.local_CurrentTestLevel == 1) {
            //那么显示第二关的form
            $("#title").text("执行者考核#1：通天的巴别塔-Lv2");
            $("#LevelNow").text("当前等级Lv1，推荐进度：0-3满配好感");
            $("#formplaceholder").html(`
                 <p>WIP</p>
                 `);
            /*
            $("#startchallenge").click(function () {
                if (window.local_Testpractice != 0) {
                    //Question编号固定
                    //先const定义常量题目和正确答案
                    const xuanzeti = {
                        html: [
                            `

                    <p class="mb-1 mt-2 text-start text-primary">小唐和冬哥是哪个班的？</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question1Option1" name="Question1" value="1">
                        <label class="form-check-label" for="Question1Option1">9班</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question1Option2" name="Question1" value="2">
                        <label class="form-check-label" for="Question1Option2">5班</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question1Option3" name="Question1" value="3">
                        <label class="form-check-label" for="Question1Option3">6班</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question1Option4" name="Question1" value="4">
                        <label class="form-check-label" for="Question1Option4">4班</label>
                    </div>`,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">彬夏的生日是什么时候？</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question2Option1" name="Question2" value="1">
                        <label class="form-check-label" for="Question2Option1">7.13</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question2Option2" name="Question2" value="2">
                        <label class="form-check-label" for="Question2Option2">1.27</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question2Option3" name="Question2" value="3">
                        <label class="form-check-label" for="Question2Option3">10.24</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question2Option4" name="Question2" value="4">
                        <label class="form-check-label" for="Question2Option4">8.11</label>
                    </div>`,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">綮冬和唐血鸿的数学老师姓是什么</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question3Option1" name="Question3" value="1">
                        <label class="form-check-label" for="Question3Option1">李</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question3Option2" name="Question3" value="2">
                        <label class="form-check-label" for="Question3Option2">沈</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question3Option3" name="Question3" value="3">
                       <label class="form-check-label" for="Question3Option3">王</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question3Option4" name="Question3" value="4">
                       <label class="form-check-label" for="Question3Option4">都不是</label>
                    </div>`,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">孤儿院门口挂的锦旗包括以下哪一个？</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question4Option1" name="Question4" value="1">
                        <label class="form-check-label" for="Question4Option1">鞠躬尽瘁，死而后已</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question4Option2" name="Question4" value="2">
                        <label class="form-check-label" for="Question4Option2">赠人玫瑰，手留余香</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question4Option3" name="Question4" value="3">
                       <label class="form-check-label" for="Question4Option3">诲人不倦</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question4Option4" name="Question4" value="4">
                       <label class="form-check-label" for="Question4Option4">都不是</label>
                    </div>`,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">在0-2中，当綮冬从唐血鸿梦境中脱离时，后排女生所说的两人卖点是什么？</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question5Option1" name="Question5" value="1">
                        <label class="form-check-label" for="Question5Option1">沉稳闷骚攻x阳光沙雕受</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question5Option2" name="Question5" value="2">
                        <label class="form-check-label" for="Question5Option2">阳光沙雕攻x沉稳闷骚受</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question5Option3" name="Question5" value="3">
                       <label class="form-check-label" for="Question5Option3">沉稳高冷攻x阳光开朗受</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question5Option4" name="Question5" value="4">
                       <label class="form-check-label" for="Question5Option4">显然都不是，我冬哥肯定是攻！！1</label>
                    </div>`,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">帕普齐斯在浮梦之屿的编号是？</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question6Option1" name="Question6" value="1">
                        <label class="form-check-label" for="Question6Option1">#1772</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question6Option2" name="Question6" value="2">
                        <label class="form-check-label" for="Question6Option2">#039</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question6Option3" name="Question6" value="3">
                       <label class="form-check-label" for="Question6Option3">#1987</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question6Option4" name="Question6" value="4">
                       <label class="form-check-label" for="Question6Option4">#1643</label>
                    </div>`,
                            `
                    <p class="mb-1 mt-2 text-start text-primary">系统权限调用是什么功能？</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question7Option1" name="Question7" value="1">
                        <label class="form-check-label" for="Question7Option1">个人主页</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question7Option2" name="Question7" value="2">
                        <label class="form-check-label" for="Question7Option2">剧情回溯</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question7Option3" name="Question7" value="3">
                        <label class="form-check-label" for="Question7Option3">执行者考核</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question7Option4" name="Question7" value="4">
                       <label class="form-check-label" for="Question7Option4">以上都不是</label>
                    </div>`,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">綮冬在浮梦之屿的编号是？</p>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question8Option1" name="Question8" value="1">
                        <label class="form-check-label" for="Question8Option1">#103</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question8Option2" name="Question8" value="2">
                        <label class="form-check-label" for="Question8Option2">#1643</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question8Option3" name="Question8" value="3">
                       <label class="form-check-label" for="Question8Option3">#039</label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" id="Question8Option4" name="Question8" value="4">
                       <label class="form-check-label" for="Question8Option4">都不是</label>
                    </div>`,
                        ],
                        correct: [4, 4, 2, 3, 1, 4, 4, 3],
                    };

                    const tiankongti = {
                        html: [
                            `
                    <p class="mb-1 mt-2 text-start text-primary">收留镰的孤儿院名字是？（5个字）</p>
                    <input type="text" class="form-control" id="Question9">
                    `,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">唐密辛《褪色的王冠·遇见》中，他偷偷带回家的书叫？（9个字，无书名号）</p>
                    <input type="text" class="form-control" id="Question10">
                    `,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">镰的日记中，I开头的诗名字叫？（首字母大写）</p>
                    <input type="text" class="form-control" id="Question11">
                    `,
                            `

                    <p class="mb-1 mt-2 text-start text-primary">浮梦之屿官方邮箱是？（格式：_______@____.____）</p>
                    <input type="text" class="form-control" id="Question12">
                    `,
                        ],
                        correct: ["阳光福利院", "马克思与恩格斯选集", "Isolated", "Fmzy_Official@163.com"],
                    };
                    //扣门票
                    window.local_Testpractice -= 1;
                    const mrz = new Parse.Query(classData);
                    mrz.get(localStorage.getItem("objectId")).then(
                        (user) => {
                            user.save().then(() => {
                                user.set("Testpractice", window.local_Testpractice);
                                return user.save().then(() => {
                                    alertSuccess("已扣除一张门票");
                                    $("#practiceNum").text("当前门票数：" + window.local_Testpractice);
                                });
                            });
                        },
                        (error) => {
                            alertError(error.message + "（你可以点击注销并重新登录）");
                        }
                    );
                    //抽数
                    //避免重复
                    //想不出来算法555
                    var list = new Array(0, 1, 2, 3, 4, 5, 6, 7);
                    const xuanzeselection1 = list[Math.floor(Math.random() * 8)]; //[0,7]
                    var index = list.indexOf(xuanzeselection1);
                    list.splice(index, 1);
                    const xuanzeselection2 = list[Math.floor(Math.random() * 7)];
                    var index = list.indexOf(xuanzeselection2);
                    list.splice(index, 1);
                    const xuanzeselection3 = list[Math.floor(Math.random() * 6)];
                    var index = list.indexOf(xuanzeselection3);
                    list.splice(index, 1);
                    const xuanzeselection4 = list[Math.floor(Math.random() * 5)];
                    var list = new Array(0, 1, 2, 3);
                    const tiankongselection1 = list[Math.floor(Math.random() * 4)]; //[0,3]
                    var index = list.indexOf(tiankongselection1);
                    list.splice(index, 1);
                    const tiankongselection2 = list[Math.floor(Math.random() * 3)];
                    //放入html
                    $("#formplaceholder").html(`
                <form id="form">        
                    ${xuanzeti.html[xuanzeselection1]}
                    ${xuanzeti.html[xuanzeselection2]}
                    ${xuanzeti.html[xuanzeselection3]}
                    ${xuanzeti.html[xuanzeselection4]}
                    ${tiankongti.html[tiankongselection1]}
                    ${tiankongti.html[tiankongselection2]}
                    <button type="submit" class="btn btn-outline-info mt-2">提交</button>
                    <p class="text-muted">请再次检查，如若错误或留空将会扣除一张门票！！1</p>
                </form>
                `);
                    //第二关form的html添加好了
                    //现在监听提交事件
                    $("#form").submit(function (event) {
                        event.preventDefault();
                        var temp = xuanzeselection1 + 1; //转换编号
                        var valueOfDisplayedQuestion1 = $("input:radio[name=Question" + temp + "]:checked").val();
                        var temp = xuanzeselection2 + 1; //转换编号
                        var valueOfDisplayedQuestion2 = $("input:radio[name=Question" + temp + "]:checked").val();
                        var temp = xuanzeselection3 + 1; //转换编号
                        var valueOfDisplayedQuestion3 = $("input:radio[name=Question" + temp + "]:checked").val();
                        var temp = xuanzeselection4 + 1; //转换编号
                        var valueOfDisplayedQuestion4 = $("input:radio[name=Question" + temp + "]:checked").val();
                        var temp = tiankongselection1 + 9; //转换编号
                        var valueOfDisplayedQuestion5 = $("#Question" + temp).val();
                        var temp = tiankongselection2 + 9; //转换编号
                        var valueOfDisplayedQuestion6 = $("#Question" + temp).val();

                        //判断答案是否正确
                        if (
                            valueOfDisplayedQuestion1 == xuanzeti.correct[xuanzeselection1] &&
                            valueOfDisplayedQuestion2 == xuanzeti.correct[xuanzeselection2] &&
                            valueOfDisplayedQuestion3 == xuanzeti.correct[xuanzeselection3] &&
                            valueOfDisplayedQuestion4 == xuanzeti.correct[xuanzeselection4] &&
                            valueOfDisplayedQuestion5 == tiankongti.correct[tiankongselection1] &&
                            valueOfDisplayedQuestion6 == tiankongti.correct[tiankongselection2]
                        ) {
                            //答案正确
                            //准备保存进度
                            const jake = new Parse.Query(classData);
                            jake.get(localStorage.getItem("objectId")).then(
                                (user) => {
                                    user.save().then(() => {
                                        user.set("CurrentTestLevel", 2);
                                        return user.save().then(() => {
                                            alertSuccessInForm("答案全部正确，通关！3秒后刷新以进入下一层");
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
                            alertErrorInForm("非常抱歉，该层巴别塔未通关成功。3秒后为你刷新重试");
                            setTimeout(() => {
                                window.location.href = "http://43.142.126.163/test.html";
                            }, 3000);
                        }
                    });
                } else {
                    $("#formplaceholder").html(`
                <p>门票已用完，请继续主线以获取门票或等待第二天自动发放。</p>
                `);
                }
            });
            */
        } else if (window.local_CurrentTestLevel == 2) {
            //那么显示第三关的form
            $("#title").text("执行者考核#1：通天的巴别塔-Lv3");
            $("#LevelNow").text("当前等级Lv2，推荐进度：0-3满配好感");
            $("#formplaceholder").html(`
                <p>WIP</p>
                `);
            //WIP
        }
        (error) => {
            alertError(error.message + "（你可以点击注销并重新登录）");
        };
    });
});
