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
            "“那没人去问问沈老师去哪里了吗？”綮冬下意识看看腕表，“这差不多都快十点半了。”"
        zx[1] =
            "“不知道，你之前睡觉的时候去了两个人，到现在还没回来呢。”裴盯着前门，“等等吧。”"
        zx[2] = "綮冬叹了口气。"
        zx[3] =
            "又等了五分钟，沈老师还是没有来。綮冬是非常有精神，但是裴却开始昏昏欲睡起来。"
        zx[4] =
            "“冬，你继续守着吧。”裴趴了下来，“还有十多分钟就下课了，我就睡5分钟。”"
        zx[5] =
            "綮冬诧异地看了看他，随即笑道：“也是，你应该多补补觉。”他轻轻拍了拍裴的头：”快睡吧。”"
        zx[6] = "等裴熟睡了，綮冬才能有机会仔细思考自己的梦境。"
        zx[7] =
            "他也不知道为什么，或许是与生俱来，但是他从小便会做奇奇怪怪的梦。他或许根本没去过那里，但是那里一切都那么真实，真实到自己好像在那里生活过一年半载。"
        zx[8] = "然而这一点他更愿意相信是作为自己另一个能力的代价。"
        zx[9] =
            "胡思乱想着，綮冬忽然感觉到一阵难以言说的气息爆发开来，气息里是充盈的痛苦和恐惧。他面色大变，转头看向旁边座位的裴，果然发现他眉头皱紧，好像在经历渡劫一样痛苦。而班里其他人，却对此毫无反应。"
        zx[10] = "这家伙居然做噩梦了，綮冬皱眉。"
        zx[11] =
            "没错，綮冬认为更有用的能力就是能清楚的感知到周边人的噩梦。自他有记忆起，母亲便一直做噩梦，梦到生自己的那个夜晚，交融着恐惧和疼痛的梦境。"
        zx[12] =
            "而他，却清晰地发现——只要抱住母亲，他就能进入她的梦境——以自己的真身进入，抚慰她，将她从痛苦中挽救回来。"
        zx[13] =
            "然而，这项能力的严苛条件——必须要进行大面积身体接触——导致这项能力不可能广泛使用。"
        zx[14] =
            "他已经很久没有感受到如此强烈的噩梦波动了。他不知道过于强烈的噩梦会如何，但是他知道，至少会给人精神上的重创。"
        zx[15] = "他咬咬牙，双手环住裴的腰，闭上眼睛。"
        step03(zx)
    }

    async function step03(list) {
        for (var j = 0; j < list.length; j++) {
            var ele = document.createElement("p")
            ele.id = "zx" + j
            ele.setAttribute(
                "class",
                "mt-0 mb-0 text-primary text-break text-start"
            )
            $("#zhuxianArea").append(ele)
            window.location.href = "#zx" + j
            const element = document.getElementById("zx" + j)
            for (var i = 0; i <= list[j].length; i++) {
                element.innerHTML = list[j].substr(0, i)
                await sleep(10)
            }
            await sleep(2000)
        }
        step04()
    }
    function step04() {
        const form = document.createElement("form")
        form.innerHTML = `<form>
        <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
        </form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        window.location.href = "#form"
        step05()
    }
    function step05() {
        $("#form").submit(function (event) {
            event.preventDefault()
            setPercent(20)
            $("#liveAlertPlaceholder").empty()
            $("#zhuxianArea").empty()
            $("#formPlaceholder").empty()
            var zx = new Array()
            zx[0] =
                "綮冬睁开眼睛，赫然发现……这不正是教室门口的走廊吗？那个高二（4）班牌子还挂着。"
            zx[1] =
                "白雾弥漫，他只看见裴扶着墙大口喘着气。也辛亏他俩都不是很宅，不然在白雾里面真就没有活路。裴好像也看到他了，双眼迷茫，口中呢喃：“冬……是你吗？”"
            zx[2] = "怎么办……"
            step06(zx)
        })
    }
    async function step06(list) {
        for (var j = 0; j < list.length; j++) {
            var ele = document.createElement("p")
            ele.id = "zx" + j
            ele.setAttribute(
                "class",
                "mt-0 mb-0 text-danger text-break text-start"
            )
            $("#zhuxianArea").append(ele)
            window.location.href = "#zx" + j
            const element = document.getElementById("zx" + j)
            for (var i = 0; i <= list[j].length; i++) {
                element.innerHTML = list[j].substr(0, i)
                await sleep(10)
            }
            await sleep(2000)
        }
        step07()
    }
    function step07() {
        const form = document.createElement("form")
        form.innerHTML = `
        <form>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label text-danger" for="flexRadioDefault1">捂住他的口鼻</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label text-danger" for="flexRadioDefault2">“是我，我来帮你了。”</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                <label class="form-check-label text-danger" for="flexRadioDefault3">“你有没有感觉到不舒服？”</label>
            </div>
            <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
        </form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        window.location.href = "#form"
        step08()
    }
    function step08() {
        $("#form").submit(function (event) {
            event.preventDefault()
            if (document.getElementById("flexRadioDefault1").checked == true) {
                step09(1)
            } else if (
                document.getElementById("flexRadioDefault2").checked == true
            ) {
                step09(2)
            } else if (
                document.getElementById("flexRadioDefault3").checked == true
            ) {
                step09(3)
            } else {
                alertError("请选择一个选项")
            }
        })
    }
    function step09(num) {
        window.local_choices.push(num)
        setPercent(40)
        $("#liveAlertPlaceholder").empty()
        $("#zhuxianArea").empty()
        $("#formPlaceholder").empty()
        if (num == 1) {
            var zx = new Array()
            zx[0] =
                "梦境里綮冬也顾不得形象之类，用手捂住裴良谨的口鼻，在他耳边轻声道：“别瞎跑。”"
            if (window.local_Tanghaogan >= 5) {
                zx[1] =
                    "綮冬不知道为什么，只是裴的脸忽然热起来，热的好像要发烧一样。"
                window.local_daoju.push(1)
            } else {
                zx[1] = "一定可以逃出去的，綮冬想。"
                window.local_daoju.push(0)
            }
            window.local_Tanghaogan = window.local_Tanghaogan + 2
            step10(zx)
        }
        if (num == 2) {
            window.local_Tanghaogan = window.local_Tanghaogan + 1
            var zx = new Array()
            zx[0] =
                "“小裴，是我，我来帮你了。”綮冬几乎是贴着他的耳朵说的，“跟我走。”"
            zx[1] = "“嗯。”綮冬顺理成章把小裴背到背上，抬起头。"
            window.local_daoju.push(0)
            step10(zx)
        }
        if (num == 3) {
            var zx = new Array()
            zx[0] =
                "“小裴，你有没有感觉到头晕肺疼？”綮冬用手捧起小裴的脸，“你没问题吧。”"
            if (window.local_Tanghaogan >= 6) {
                zx[1] =
                    "綮冬不知道为什么，只是裴的脸忽然热起来，热的好像要发烧一样。“诶，小裴你的耳朵红了诶，好好玩。”綮冬忽然注意到裴的耳朵红的透亮，不过他决定先不管，“我们先走。”"
                window.local_daoju.push(1)
                window.local_Tanghaogan = window.local_Tanghaogan + 2
            } else {
                zx[1] = "“诶，你好像说不了话……算了，先走吧。”綮冬背起裴。"
                window.local_daoju.push(0)
            }
            window.local_Tanghaogan = window.local_Tanghaogan + 1
            step10(zx)
        }
    }
    async function step10(list) {
        for (var j = 0; j < list.length; j++) {
            var ele = document.createElement("p")
            ele.id = "zx" + j
            ele.setAttribute(
                "class",
                "mt-0 mb-0 text-danger text-break text-start"
            )
            $("#zhuxianArea").append(ele)
            window.location.href = "#zx" + j
            const element = document.getElementById("zx" + j)
            for (var i = 0; i <= list[j].length; i++) {
                element.innerHTML = list[j].substr(0, i)
                await sleep(10)
            }
            await sleep(2000)
        }
        step11()
    }
    function step11() {
        const form = document.createElement("form")
        form.innerHTML = `
        <form>
            <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
        </form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        window.location.href = "#form"
        step12()
    }
    function step12() {
        $("#form").submit(function (event) {
            event.preventDefault()
            setPercent(60)
            $("#liveAlertPlaceholder").empty()
            $("#zhuxianArea").empty()
            $("#formPlaceholder").empty()
            var zx = new Array()
            zx[0] =
                "綮冬背着裴良谨，思考着接下来去哪里。实在是由于时间紧迫，他决定带小裴去医务室。"
            zx[1] = "从班级到医务室需要跨越两个大层，綮冬一直紧紧抓着裴的手。"
            zx[2] =
                "不知道为什么，他在进入他人噩梦的时间基本处于净化状态，什么也感觉不到，但是却会保留他进入前的衣着，思想等等。"
            if (window.local_Tanghaogan >= 6) {
                zx[3] =
                    "他虽然感受不到毒气带来的负面效果，但是之前做梦的确有过这一感觉——这让他更为心疼小裴，在肩上承受如此剧痛却连冷气也不吸一口。"
            } else {
                zx[3] =
                    "他虽然感受不到毒气带来的负面效果，但是之前做梦的确有过这一感觉——也难为小裴这么走一路。"
            }
            zx[4] =
                "走进医务室綮冬就知道自己没有走错——这里没有白雾，虽然也没有人，但是至少可以休息一会。他把小裴放在椅子上，开始仔细检查他的全身。"
            zx[5] =
                "身体没问题，在医务室居然有缓慢的精神回复效果——正当綮冬探裴的鼻息时，裴良谨的眼睛悠悠睁开，喉咙里逸出几个虚弱的字：“这是哪里……”"
            if (window.local_daoju[1] == 1) {
                zx[6] =
                    "“这里是你的梦境。”綮冬犹豫了一下，还是把事情全盘托出，“我……进来了，发现你在做噩梦。”"
                if (window.local_daoju[2] == 1) {
                    zx[7] =
                        "裴良谨好像也记得了什么，只不过他一想到那亲密的动作……他的脸微微有些发红，赶紧甩了甩头，“你能进入我的梦？”"
                } else {
                    zx[7] =
                        "“你……能进入我的梦境？”裴很诧异，“我可没听说你有这么神的超能力。”"
                }
                zx[8] =
                    "“这个……不是保密工作嘛。”綮冬挠挠头，“反正我是可以进入其他人的噩梦，但是不常用。”"
                zx[9] =
                    "“嗯，我可以理解。”裴良谨陷入沉思，“所以，我为什么也会陷入同一个梦境之中？我觉得不是巧合。”"
                zx[10] =
                    "“难道是我的问题？”綮冬也学他单手抚摸着下巴，但是非常蹩脚，反而显得很憨。"
                zx[11] =
                    "“不排除这个可能，但是我有一个更大的猜想。”裴良谨忽然抬头盯着他的眼睛，“你想想，你之前在另一个梦境之中有没有想过去医务室？这么简单的事情，你不觉得忘了很可疑吗？”"
                zx[12] =
                    "綮冬一开始还没想到这个，但是细想之后，却脊背发凉：“的确没有，所以你的意思是，我是被心理暗示了？”"
                zx[13] =
                    "“不排除这个可能性。但是这个心理暗示者显然不希望我死，而是希望沈老师死。”裴忽然将双手搭在他的肩膀上：“所以，你差不多被动杀人了！”"
                zx[14] =
                    "！！！綮冬还来不及震惊，周围的空间忽然坍缩，他和裴眼前一暗。"
                window.local_Tanghaogan = window.local_Tanghaogan + 1
                window.local_dunwu = window.local_dunwu + 3
            } else {
                if (window.local_Tanghaogan >= 6) {
                    zx[6] =
                        "“这里……是医务室。”綮冬刚想告诉和上一个梦境一模一样，但是忽然想起来他没听过上一个梦境，气氛便骤然僵住。"
                    zx[7] =
                        "良久，裴缓缓开口：“呃，但是，綮冬，谢谢你、”说到最后一个字，他的脸颊竟有些发红，便微微扭过头去。"
                    zx[8] = "綮冬刚想说不必感谢，但是他忽然感到眼前一暗。"
                    window.local_Tanghaogan = window.local_Tanghaogan + 1
                    window.local_dunwu = window.local_dunwu + 1
                } else {
                    zx[6] =
                        "“这里是医务室。”綮冬道，“你之前在走廊里晕倒了，我把你带过来的。”"
                    zx[7] =
                        "“你……”裴刚想问他是不是真的，转心一想，也是，他好像不可能是真的。“谢谢你啊。”"
                    zx[8] =
                        "“不用谢啦，都是好兄弟。”綮冬话音刚落，眼前便骤然暗下去。"
                }
            }
            step13(zx)
        })
    }
    async function step13(list) {
        for (var j = 0; j < list.length; j++) {
            var ele = document.createElement("p")
            ele.id = "zx" + j
            ele.setAttribute(
                "class",
                "mt-0 mb-0 text-danger text-break text-start"
            )
            $("#zhuxianArea").append(ele)
            window.location.href = "#zx" + j
            const element = document.getElementById("zx" + j)
            for (var i = 0; i <= list[j].length; i++) {
                element.innerHTML = list[j].substr(0, i)
                await sleep(10)
            }
            await sleep(2000)
        }
        step14()
    }
    function step14() {
        const form = document.createElement("form")
        form.innerHTML = `
        <form>
            <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
        </form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        window.location.href = "#form"
        step15()
    }
    function step15() {
        $("#form").submit(function (event) {
            event.preventDefault()
            setPercent(80)
            $("#liveAlertPlaceholder").empty()
            $("#zhuxianArea").empty()
            $("#formPlaceholder").empty()
            var zx = new Array()
            zx[0] =
                "綮冬缓缓恢复了知觉，却听见后面的两个女生窃窃私语：“他们醒了诶！”“是啊，这算不算抱着睡了一会，嘿嘿嘿……”"
            zx[1] = "綮冬这才想起自己还抱着小裴：“你下来吧。”"
            if (window.local_Tanghaogan >= 7) {
                zx[2] =
                    "裴这才悠悠醒来，感受到綮冬抱在自己腰上的双手，简直想找个地缝钻下去。他匆匆下来，背对着綮冬。"
            } else {
                zx[2] =
                    "“你为什么抱着我……？”裴正欲问道，但是看綮冬不大想回答，他也知趣的闭了嘴，只是眼睛里光芒流转。"
            }
            zx[3] =
                "綮冬感觉到自己被后座的女生戳了戳，“诶，你们两个，要不要考虑写篇耽美啊？卖点我都想好了，沉稳闷骚攻x阳光沙雕受。”"
            zx[4] =
                "“？？？你们这未免有点离谱。”綮冬不满道，“而且，为什么我是受啊，这家伙不是更像受吗。”他偷偷瞄了一眼小裴。令他失望的是，裴好像没有任何表示。"
            zx[5] =
                "他们这种状态一直持续到放学。放学时两人照例一起走，但是在到校门口前，裴忽然开口：“今天那个……真的是你吗。”问完这个问题，他好像逃也似地离开了。"
            if (window.local_daoju[1]) {
                zx[6] =
                    "他问这个干嘛？綮冬有些疑惑，这家伙不是很确定自己吗，不然怎么可能说那么多话。不过，他说的话自己的确要好好想想……他闲来无事，拿出手机打开微信。"
            } else {
                zx[6] =
                    "他想说什么？綮冬忽然感到有些后怕。完蛋，自己没和小裴说那个梦，也忘了伪装的像一点了。他心情很烦，下意识拿出手机打开微信。"
            }
            zx[7] =
                "鬼使神差的，他打开了和帕普齐斯的对话，然而，接下来的话让他全身上下每一个毛孔透出害怕。"
            zx[8] =
                "“今天干得不错啊，不仅干掉了目标，还有效防止了对面报复，加分哦。但是今天可是花了我三颗灵魂烟雾弹哦，整整三颗啊，记得报销。”"
            window.local_Pagehakhaogan = window.local_Pagehakhaogan + 1
            step16(zx)
        })
    }

    async function step16(list) {
        for (var j = 0; j < list.length; j++) {
            var ele = document.createElement("p")
            ele.id = "zx" + j
            ele.setAttribute(
                "class",
                "mt-0 mb-0 text-primary text-break text-start"
            )
            $("#zhuxianArea").append(ele)
            window.location.href = "#zx" + j
            const element = document.getElementById("zx" + j)
            for (var i = 0; i <= list[j].length; i++) {
                element.innerHTML = list[j].substr(0, i)
                await sleep(10)
            }
            await sleep(2000)
        }
        step17()
    }
    function step17() {
        const form = document.createElement("form")
        form.innerHTML = `
        <form>
            <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
        </form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        window.location.href = "#form"
        step18()
    }
    function step18() {
        $("#form").submit(function (event) {
            event.preventDefault()
            $("#liveAlertPlaceholder").empty()
            $("#zhuxianArea").empty()
            $("#formPlaceholder").empty()
            setPercent(100)
            if (window.local_progress < 2) {
                window.local_progress = 2
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
                        yyy.set("nextPage", "0-3")
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
                            step19()
                        })
                    })
                },
                (error) => {
                    alertError(error.message + "（你可以点击注销并重新登录）")
                }
            )
        })
    }

    function step19() {
        // 展示最终页面
        const ele = document.createElement("h5")
        ele.setAttribute("class", "text-center")
        ele.innerHTML = "0-2 Mission Accomplished."
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
        buttton.innerHTML = "前往0-3"
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
            window.location.href = "http://43.142.126.163/zhuxian/0-3.html"
        })
    }
    step01()
})
