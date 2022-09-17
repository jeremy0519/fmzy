$(document).ready(function () {
    Parse.initialize("fmzy")
    Parse.serverURL = "http://43.142.126.163/parse"
    const classData = Parse.Object.extend("fmzy")
    const alertPlaceholder = $("#liveAlertPlaceholder")
    function alertError(message) {
        alertPlaceholder.empty()
        const wrapper = document.createElement("div")
        wrapper.innerHTML = [
            `<div class="alert fade show alert-danger alert-dismissible d-flex align-items-center" role="alert">`,
            `   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>`,
            `   <div>${message}</div>`,
            '   <button id="closebtn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            "</div>",
        ].join("")
        alertPlaceholder.append(wrapper)
        window.location.href = "#"
    }
    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time))
    }
    function setPercent(pct) {
        $("div.progress-bar").attr("aria-valuenow", pct)
        $("div.progress-bar").attr("style", "width: " + pct + "%")
    }
    setPercent(0)
    async function step01() {
        const objid = localStorage.getItem("objectId")
        const query = new Parse.Query(classData)
        query.get(objid).then(
            (xxx) => {
                window.local_Pagehakhaogan = xxx.get("Pagehakhaogan")
                window.local_Tanghaogan = xxx.get("Tanghaogan")
                window.local_Binxiahaogan = xxx.get("Binxiahaogan")
                window.local_Duguqiuyehaogan = xxx.get("Duguqiuyehaogan")
                window.local_Lianhaogan = xxx.get("Lianhaogan")
                window.local_Yimenghaogan = xxx.get("Yimenghaogan")
                window.local_Pagehakmax = xxx.get("Pagehakmax")
                window.local_Tangmax = xxx.get("Tangmax")
                window.local_Binxiamax = xxx.get("Binxiamax")
                window.local_Dugumax = xxx.get("Dugumax")
                window.local_Lianmax = xxx.get("Lianmax")
                window.local_Yimengmax = xxx.get("Yimengmax")
                window.local_choices = xxx.get("choices")
                window.local_daoju = xxx.get("daoju")
                window.local_dunwu = xxx.get("dunwu")
                window.local_progress = xxx.get("progress")
                window.local_Testpractice = xxx.get("Testpractice")
                step02()
            },
            (error) => {
                alertError(error.message + "（你可以点击注销并重新登录）")
            }
        )
    }
    function step02() {
        var zx = new Array()
        zx[0] =
            "过了办公室进入教室区，綮冬才真正大开眼界。课桌都是摇摇晃晃的，一脚踹下去估计都能散架。整个福利院就分成三个班级，綮冬顺路听了一下。"
        zx[1] = "“Do u think lis is imperper？”"
        zx[2] =
            "“綮冬的评价是：非常标准的发音。"
        zx[3] =
            "“你们今天照顾一下三班的学生。”院长指着最后一个教室，“让他们不要闹事就好。他们现在大部分10岁左右，你们千万要有点耐心。”"
        zx[4] = "“我们要一直呆在他们身边吗？”綮冬皱眉。"
        zx[5] = "“不用，你们只要看着就行，他们自己会照料自己的。”院长眯起眼睛，“如果有人来领养，告诉他们一声就好，肯定有人会去的。”"
        zx[6] = "谈话间，三班教室门忽然打开，老师面带怒容匆匆走出，教室里面的孩子们爆发出一阵大笑。那名女老师四处张望，看到院长仿佛看到救星，满脸笑容地迎了上来：“院长大人，这些学生真的太恶劣了，这已经是他们这学期第六次把我赶出来了。”说着还撇撇嘴，好像真的非常委屈。"
        zx[7] = "“行，我知道了，这两天辛苦你了。”院长拍拍她的肩。“那院长大人，这个月的工资……”"
        zx[8] = "“我会酌情给你加的，去吧。”听到这句话，那个女教师才心满意足，扭头走了，全程甚至没有拿正眼看綮冬一眼。"
        step03(zx)
    }
    function step20() {
        $("#form").submit(function (event) {
            event.preventDefault()
            $("#liveAlertPlaceholder").empty()
            $("#zhuxianArea").empty()
            $("#formPlaceholder").empty()
            setPercent(100)
            if (window.local_progress < 4) {
                window.local_progress = 4
                window.local_Testpractice = window.local_Testpractice + 1
            }
            // 上传
            const objid = localStorage.getItem("objectId")
            const query = new Parse.Query(classData)
            query.get(objid).then(
                (xxx) => {
                    xxx.save().then((yyy) => {
                        yyy.set("Pagehakhaogan", window.local_Pagehakhaogan)
                        yyy.set("Tanghaogan", window.local_Tanghaogan)
                        yyy.set("Binxiahaogan", window.local_Binxiahaogan)
                        yyy.set("Duguqiuyehaogan", window.local_Duguqiuyehaogan)
                        yyy.set("Lianhaogan", window.local_Lianhaogan)
                        yyy.set("Yimenghaogan", window.local_Yimenghaogan)
                        yyy.set("nextPage", "0-5")
                        yyy.set("choices", window.local_choices)
                        yyy.set("daoju", window.local_daoju)
                        yyy.set("dunwu", window.local_dunwu)
                        yyy.set("progress", window.local_progress)
                        yyy.set("Testpractice", window.local_Testpractice)
                        if (window.local_Tanghaogan >= window.local_Tangmax) {
                            yyy.set("Tangmax", window.local_Tanghaogan)
                        }
                        if (
                            window.local_Binxiahaogan >= window.local_Binxiamax
                        ) {
                            yyy.set("Binxiamax", window.local_Binxiahaogan)
                        }
                        if (
                            window.local_Pagehakhaogan >=
                            window.local_Pagehakmax
                        ) {
                            yyy.set("Pagehakmax", window.local_Pagehakhaogan)
                        }
                        if (window.local_Lianhaogan >= window.local_Lianmax) {
                            yyy.set("Lianmax", window.local_Lianhaogan)
                        }
                        if (
                            window.local_Duguqiuyehaogan >= window.local_Dugumax
                        ) {
                            yyy.set("Dugumax", window.local_Duguqiuyehaogan)
                        }
                        if (
                            window.local_Yimenghaogan >= window.local_Yimengmax
                        ) {
                            yyy.set("Yimengmax", window.local_Yimenghaogan)
                        }
                        return yyy.save().then(function () {
                            step21()
                        })
                    })
                },
                (error) => {
                    alertError(error.message + "（你可以点击注销并重新登录）")
                }
            )
        })
    }

    function step21() {
        // 展示最终页面
        const ele = document.createElement("h5")
        ele.setAttribute("class", "text-center")
        ele.innerHTML = "0-4 Mission Accomplished."
        $("#zhuxianArea").append(ele)
        /*
        const butttton = document.createElement("btn")
        butttton.id = "queryhaogan"
        butttton.setAttribute("class", "btn btn-outline-info")
        butttton.innerHTML = "查询好感"
        $("#zhuxianArea").append(butttton)
        */
        const buttton = document.createElement("btn")
        buttton.id = "redirect"
        buttton.setAttribute("class", "btn btn-outline-info")
        buttton.innerHTML = "前往0-5"
        $("#zhuxianArea").append(buttton)
        /*
        $("#queryhaogan").click(function () {
            alert(
                "pagehak好感：" + window.local_Pagehakhaogan +
                " tang好感：" + window.local_Tanghaogan +
                " binxia好感：" + window.local_Binxiahaogan +
                " 独孤秋夜好感：" + window.local_Duguqiuyehaogan +
                " 镰好感：" + window.local_Lianhaogan +
                " yimeng好感：" + window.local_Yimenghaogan +
                " 选项：" + window.local_choices +
                " 道具：" + window.local_daoju)
        })
        */
        $("#redirect").click(function () {
            window.location.href = "http://43.142.126.163/zhuxian/0-4.html"
        })
    }
    step01()
})
