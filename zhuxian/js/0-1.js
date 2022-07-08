$(document).ready(function () {
    Parse.initialize("fmzy")
    Parse.serverURL = 'http://43.142.126.163:1337/parse'
    const classData = Parse.Object.extend("fmzy")
    function log(text) {
        var d = new Date()
        const element = document.createElement('p')
        element.innerHTML = [
            `<p class="text-start text-break">`,
            `${d}`,
            `: `,
            `${text}`,
            `</p>`].join("")
        $("#logArea").append(element)
    }
    log("数据库初始化完毕")
    log("936936")
    const alertPlaceholder = $('#liveAlertPlaceholder')
    function alertError(message) {
        if (document.getElementById("closebtn")) {
            $("#closebtn").trigger("click")
        }
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert fade show alert-danger alert-dismissible d-flex align-items-center" role="alert">`,
            `   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>`,
            `   <div>${message}</div>`,
            '   <button id="closebtn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')
        alertPlaceholder.append(wrapper)
    }
    function alertSuccess(message) {
        if (document.getElementById("closebtn")) {
            $("#closebtn").trigger("click")
        }
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert fade show alert-success alert-dismissible d-flex align-items-center" role="alert">`,
            `   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>`,
            `   <div>${message}</div>`,
            '   <button id="closebtn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')
        alertPlaceholder.append(wrapper)
    }
    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time))
    }
    function logAll() {
        log("pagehak好感：" + window.local_Pagehakhaogan)
        log("tang好感：" + window.local_Tanghaogan)
        log("binxia好感：" + window.local_Binxiahaogan)
        log("独孤秋夜好感：" + window.local_Duguqiuyehaogan)
        log("镰好感：" + window.local_Lianhaogan)
        log("选项：" + window.local_choices)
        log("造句：" + window.local_zaoju)
        log("顿悟：" + window.local_dunwu)
    }
    // 01: 从数据库获取好感什么的
    // 02：准备输出第一部分
    // 03：输出第一部分
    // 04: 输出表单
    // 05：设置按钮行为
    // 06: 转场

    async function step01() {
        log("开始第一步：从数据库获取好感什么的")
        const objid = Cookies.get("objectId")
        const query = new Parse.Query(classData)
        query.get(objid).then((xxx) => {
            window.local_Pagehakhaogan = xxx.get("Pagehakhaogan")
            window.local_Tanghaogan = xxx.get("Tanghaogan")
            window.local_Binxiahaogan = xxx.get("Binxiahaogan")
            window.local_Duguqiuyehaogan = xxx.get("Duguqiuyehaogan")
            window.local_Lianhaogan = xxx.get("Lianhaogan")
            window.local_choices = xxx.get("choices")
            window.local_zaoju = new Array()
            window.local_dunwu = 0
            log("获取成功")
            step02()
        }, (error) => {
            alertError(error.message + "（你可以点击注销并重新登录）")
        })
    }

    async function step02() {
        logAll()
        var zx = new Array()
        zx[0] = "太阳也上升了";
        zx[1] = "——题记";
        zx[2] = "&nbsp;";
        zx[3] = "下节课应该是一节数学课，綮冬如是想到。他用笔戳了戳旁边的唐血鸿：“喂，小唐，现在几点了？”";
        zx[4] = "“十点呢，刚刚下课。”唐看了看表，“你就继续睡觉去吧，下节数学课，你记得看着一点老师。”";
        zx[5] = "“哦，谢谢啊。”綮冬刚刚睡醒，显然不太想继续睡觉，便开始岔起话题，“阿唐啊，我刚刚做了一个超级离谱的梦。”";
        zx[6] = "“什么梦？”唐放下手中的数学题，饶有兴致地看向綮冬，“该不会又是什么其他星系的故事吧，你可别忽悠我。”";
        zx[7] = "“嗨呀，不是什么其他的。”綮冬单手拖住脑袋，“我梦见啊，我和帕普齐斯正在秘密策划一件事情，好像是要向教学楼内投放毒气弹？";
        zx[8] = "喂，你别笑啊，那个梦还有模有样的，我还和他在微信上互发消息计划细节呢。";
        zx[9] = "他负责投掷，我负责引诱，然后我们就可以顺利把我们敬爱的沈老师给骗到烟雾里去然后迷晕了。”";
        zx[10] = "说着，他还比划了一下，好像还真的极迫真。";
        zx[11] = "“你就别瞎想了，还迷晕沈老师，亏你真的想的出来的。”唐摇摇头，“你就做你那千秋大梦去吧。”";
        zx[12] = "“切，别不信，如果真的成了那我就不用听数学课了。多好。”綮冬切一声，忽然又把脑袋凑过去，";
        zx[13] = "“话说啊，小唐，你真的喜欢数学课吗？和我说实话哦。”";
        zx[14] = "“当然了，数学课对我大有所益啊，怎么可能不喜欢。”唐显然一头雾水，不知道企冬要说什么。";
        zx[15] = "那么，……";
        log("前往第三步")
        step03(zx)
    }

    async function step03(list) {
        for (var j = 0; j < list.length; j++) {
            var ele = document.createElement("p")
            ele.id = "zx" + j
            ele.setAttribute("class", "mt-0 mb-0 text-primary text-break")
            $("#zhuxianArea").append(ele)
            const element = document.getElementById("zx" + j)
            for (var i = 0; i <= list[j].length; i++) {
                element.innerHTML = list[j].substr(0, i)
                await sleep(10)
            }
            await sleep(2000)
        }
        log("前往第四步")
        step04()
    }

    function step04() {
        const form = document.createElement("form")
        form.innerHTML = `<form>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label text-primary" for="flexRadioDefault1">
            你能不能帮我抄抄数学笔记？
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
        <label class="form-check-label text-primary" for="flexRadioDefault2">
            我可爱的，优秀的好学生小唐，您能不能下课后笔记给我看一眼？ </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
        <label class="form-check-label text-primary" for="flexRadioDefault3">
            我们是兄弟吧？那帮我抄数学笔记也没什么问题吧。
    </div>
    <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
</form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        log("前往第五步")
        step05()
    }

    function step05() {
        $("#form").submit(function (event) {
            event.preventDefault()
            if (document.getElementById("flexRadioDefault1").checked == true) {
                step06(1)
            }
            else if (document.getElementById("flexRadioDefault2").checked == true) {
                step06(2)
            }
            else if (document.getElementById("flexRadioDefault3").checked == true) {
                step06(3)
            }
            else {
                alertError("请选择一个选项")
            }
        })
    }
    async function step06(num) {
        log("检测到输入：" + num)
        window.local_choices.push(num)
        $("#liveAlertPlaceholder").empty()
        $("#zhuxianArea").empty()
        $("#formPlaceholder").empty()
        if (num == 1) {
            window.local_Tanghaogan = window.local_Tanghaogan + 2
            window.local_zaoju.push(1)
            var zx = new Array()
            zx[0] = "“不可能，我已经被你坑了好多次了，要是我再信你我就是小狗。”唐无语道。"
            zx[1] = "“哎呀，求求你了，你就帮帮我吧，明天给你带零食不行吗。”綮冬几乎是央求的语气。"
            zx[2] = "“真的？不许反悔啊。”唐无视綮冬割肉般的神情，终于看似勉强答应了下来。"
            zx[3] = "“诶，小唐，我和你打个赌。”綮冬忽然来了兴致，"
            zx[4] = "“这次沈老师肯定不会讲完课，中途肯定会去上一次厕所，然后就再也回不来了，你信吗？”"
            zx[5] = "他也不知道为什么会打这个赌，更像是从脑中乍然一现，然后就回不去了。"
            zx[6] = "“啧，你还真的睡觉睡糊涂了。”唐翻个白眼，“我赌不会，稳赢好吧。”"
            zx[7] = "“那你输定了。”綮冬也不知道为什么会说出这句话，但是他不知为何，忽然感觉信心满满。“我先睡了哈，上课叫我。”";
            zx[8] = "綮冬将头埋在双臂间，不一会便传出均匀的呼吸声。"
            zx[9] = "唐无奈地摇摇头：“这家伙，一倒头就睡。”"
            step07(zx)
        }
        if (num == 2) {
            window.local_Tanghaogan = window.local_Tanghaogan + 3
            window.local_zaoju.push(1)
            var zx = new Array()
            zx[0] = "“……”唐很想一脚踹死这个家伙，但是理智告诉他不行，最终只憋出来一句话：“下不为例。”";
            zx[1] = "“耶！小唐最好了！”綮冬快乐的要跳起来。"
            zx[2] = "“这家伙。”唐叹口气。"
            zx[3] = "“诶，小唐，我和你打个赌。”綮冬忽然来了兴致，"
            zx[4] = "“这次沈老师肯定不会讲完课，中途肯定会去上一次厕所，然后就再也回不来了，你信吗？”"
            zx[5] = "他也不知道为什么会打这个赌，更像是从脑中乍然一现，然后就回不去了。"
            zx[6] = "“啧，你还真的睡觉睡糊涂了。”唐翻个白眼，“我赌不会，稳赢好吧。”"
            zx[7] = "“那你输定了。”綮冬也不知道为什么会说出这句话，但是他不知为何，忽然感觉信心满满。“我先睡了哈，上课叫我。”";
            zx[8] = "綮冬将头埋在双臂间，不一会便传出均匀的呼吸声。"
            zx[9] = "唐无奈地摇摇头：“这家伙，一倒头就睡。”"
            step07(zx)
        }
        if (num == 3) {
            var zx = new Array()
            zx[0] = "“？”唐头上打出一个大大的问号，“不是你要抄笔记吗？”";
            zx[1] = "“嘁，没意思。”綮冬趴在桌上，“不抄算了。”";
            zx[2] = "唐；……是你要找我抄笔记吧？怎么看起来我好想帮你抄笔记是我的荣幸似的……";
            zx[3] = "“诶，小唐，我和你打个赌。”綮冬忽然来了兴致，"
            zx[4] = "“这次沈老师肯定不会讲完课，中途肯定会去上一次厕所，然后就再也回不来了，你信吗？”"
            zx[5] = "他也不知道为什么会打这个赌，更像是从脑中乍然一现，然后就回不去了。"
            zx[6] = "“啧，你还真的睡觉睡糊涂了。”唐翻个白眼，“我赌不会，稳赢好吧。”"
            zx[7] = "“那你输定了。”綮冬也不知道为什么会说出这句话，但是他不知为何，忽然感觉信心满满。“我先睡了哈，上课叫我。”";
            zx[8] = "綮冬将头埋在双臂间，不一会便传出均匀的呼吸声。"
            zx[9] = "唐无奈地摇摇头：“这家伙，一倒头就睡。”"
            step07(zx)
        }
    }
    async function step07(list) {
        logAll()
        log("进入第七步")
        for (var j = 0; j < list.length; j++) {
            var ele = document.createElement("p")
            ele.id = "zx" + j
            ele.setAttribute("class", "mt-0 mb-0 text-primary text-break")
            $("#zhuxianArea").append(ele)
            const element = document.getElementById("zx" + j)
            for (var i = 0; i <= list[j].length; i++) {
                element.innerHTML = list[j].substr(0, i)
                await sleep(10)
            }
            await sleep(2000)
        }
        log("第七步完成")
        step08()
    }
    function step08() {
        const form = document.createElement("form")
        form.innerHTML = `<form>
        <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
        </form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        log("前往第9步")
        step09()
    }
    function step09() {
        $("#form").submit(function (event) {
            event.preventDefault()
            $("#liveAlertPlaceholder").empty()
            $("#zhuxianArea").empty()
            $("#formPlaceholder").empty()
            var zx = new Array()
            zx[0] = "……";
            zx[1] = "綮冬分不清这是哪里——也分不清自己是谁。他感觉周围一切都模模糊糊的，自己好像站在讲台上，几个字从他嘴里蹦出来——好像是自己要去上厕所。";
            zx[2] = "他踉跄走出教室门，头好像还撞到了教室的门栏——自己什么时候这么高了？";
            zx[3] = "他感觉自己脑里一片混乱，直到站在走廊上，他才忽然清醒了，然后顿感不对。";
            zx[4] = "走廊不知为何全部是白烟，整个走廊好像在云霄顶，飘渺烟云。但是綮冬知道这不是仙气。";
            zx[5] = "他感到肺部灼烧般的疼，头脑偏侧晕眩，一抬腿，绵软到自己都吓了一跳——我这是怎么了？";
            zx[6] = "去哪里？綮冬迷茫了。";
            step10(zx)
        })
    }
    async function step10(list) {
        for (var j = 0; j < list.length; j++) {
            var ele = document.createElement("p")
            ele.id = "zx" + j
            ele.setAttribute("class", "mt-0 mb-0 text-danger text-break")
            $("#zhuxianArea").append(ele)
            const element = document.getElementById("zx" + j)
            for (var i = 0; i <= list[j].length; i++) {
                element.innerHTML = list[j].substr(0, i)
                await sleep(10)
            }
            await sleep(2000)
        }
        log("前往第11步")
        step11()
    }
    function step11() {
        const form = document.createElement("form")
        form.innerHTML = `<form>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label text-danger" for="flexRadioDefault1">
            办公室
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
        <label class="form-check-label text-danger" for="flexRadioDefault2">
            厕所 </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
        <label class="form-check-label text-danger" for="flexRadioDefault3">
            逃离这个鬼地方
    </div>
    <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
</form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        log("前往第12步")
        step12()
    }
    function step12() {
        $("#form").submit(function (event) {
            event.preventDefault()
            if (document.getElementById("flexRadioDefault1").checked == true) {
                step13(1)
            }
            else if (document.getElementById("flexRadioDefault2").checked == true) {
                step13(2)
            }
            else if (document.getElementById("flexRadioDefault3").checked == true) {
                step13(3)
            }
            else {
                alertError("请选择一个选项")
            }
        })
    }
    async function step13(num) {
        log("检测到输入：" + num)
        window.local_choices.push(num)
        $("#liveAlertPlaceholder").empty()
        $("#zhuxianArea").empty()
        $("#formPlaceholder").empty()
        if (num == 1) {
            window.local_Pagehakhaogan = window.local_Pagehakhaogan + 1
            window.local_dunwu = window.local_dunwu + 1
            var zx = new Array()
            zx[0] = "办公室！对！綮冬几乎是毫不犹豫的跑向办公室。";
            zx[1] = "快了！拐个弯就到了！綮冬感觉脑子里昏昏沉沉，他用尽最后一点力气，扑开办公室的门。";
            zx[2] = "为什么……没有人？綮冬终于支撑不住，倒了下去。";
            step14(zx)
        }
        if (num == 2) {
            window.local_Pagehakhaogan = window.local_Pagehakhaogan + 2
            var zx = new Array()
            zx[0] = "上厕所！对了，他记起来自己好像说要上厕所……";
            zx[1] = "仿佛处于某种心理暗示，綮冬愈加坚定自己要去厕所的决心。";
            zx[2] = "他终究没有踏进那一步，一阵恍惚，他眼前暗下去。";
            step14(zx)
        }
        if (num == 3) {
            window.local_Pagehakhaogan = window.local_Pagehakhaogan - 2
            window.local_dunwu = window.local_dunwu + 3
            var zx = new Array()
            zx[0] = "逃离这个鬼地方！綮冬决定了，谁要在这种到处是毒雾的地方走路啊。";
            zx[1] = "“浮梦之屿执行者#039号綮冬进行异常操作，指引员#1643帕普齐斯强行更改中……”";
            zx[2] = "綮冬只知道自己立刻晕过去了，恍惚间他好像听见什么……浮梦之屿？";
            step14(zx)
        }
    }
    async function step14(list) {
        logAll()
        log("进入第14步")
        for (var j = 0; j < list.length; j++) {
            var ele = document.createElement("p")
            ele.id = "zx" + j
            ele.setAttribute("class", "mt-0 mb-0 text-danger text-break")
            $("#zhuxianArea").append(ele)
            const element = document.getElementById("zx" + j)
            for (var i = 0; i <= list[j].length; i++) {
                element.innerHTML = list[j].substr(0, i)
                await sleep(10)
            }
            await sleep(2000)
        }
        log("第14步完成")
        step15()
    }
    function step15() {
        const form = document.createElement("form")
        form.innerHTML = `<form>
        <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
        </form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        log("前往第16步")

    }
    step01()
})