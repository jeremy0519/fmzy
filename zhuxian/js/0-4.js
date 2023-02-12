$(document).ready(function () {
    Parse.initialize("fmzy")
    Parse.serverURL = "https://43.142.126.163/parse"
    const classData = Parse.Object.extend("fmzy")
    const alertPlaceholder = $("#liveAlertPlaceholder")
    function alertError(message) {
        alertPlaceholder.empty()
        const wrapper = document.createElement("div")
        wrapper.innerHTML = [
            `<div class="alert fade show alert-primary alert-dismissible d-flex align-items-center" role="alert">`,
            `   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="primary:"><use xlink:href="#exclamation-triangle-fill"/></svg>`,
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
        var raw=`过了办公室进入教室区，綮冬才真正大开眼界。课桌都是摇摇晃晃的，一脚踹下去估计都能散架。整个福利院就分成三个班级，綮冬顺路听了一下。
        “Do u think lis is imperper？”
        綮冬的评价是：非常标准的发音。
        “你们今天照顾一下三班的学生。”院长指着最后一个教室，“让他们不要闹事就好。他们现在大部分10岁左右，你们千万要有点耐心。”
        “我们要一直呆在他们身边吗？”綮冬皱眉。
        “不用，你们只要看着就行，他们自己会照料自己的。”院长眯起眼睛，“如果有人来领养，告诉他们一声就好，肯定有人会去的。”
        谈话间，三班教室门忽然打开，老师面带怒容匆匆走出，教室里面的孩子们爆发出一阵大笑。那名女老师四处张望，看到院长仿佛看到救星，满脸笑容地迎了上来：“院长大人，这些学生真的太恶劣了，这已经是他们这学期第六次把我赶出来了。”说着还撇撇嘴，好像真的非常委屈。
        “行，我知道了，这两天辛苦你了。”院长拍拍她的肩。“那院长大人，这个月的工资……”
        “我会酌情给你加的，去吧。”听到这句话，那个女教师才心满意足，扭头走了，全程甚至没有拿正眼看綮冬一眼。
        “？”綮冬略带迷惑地看着那名老师消失的背影，“这些学生……这么……洒脱不羁的吗，连老师都敢赶出来。”
        裴摇摇头：“我对管住他们不抱希望。”`
        var zx=raw.trim().split(/\n/)
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
        if (window.local_Tanghaogan >= 10) {
            step04()
        } else {
            step05()
        }
    }
    function step04() {
        //带隐藏选项
        const form = document.createElement("form")
        form.innerHTML = `
        <form>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label text-primary" for="flexRadioDefault1">“十一二岁的叛逆期……罢了，服从规定吧。”</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label text-primary" for="flexRadioDefault2">“那个老师作死成分居多。”</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                <label class="form-check-label text-primary" for="flexRadioDefault3">（隐藏选项）“说不定我们也不需要管住他们。”</label>
            </div>
            <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
        </form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        window.location.href = "#form"
        step06()
    }
    function step05() {
        const form = document.createElement("form")
        form.innerHTML = `
        <form>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label text-primary" for="flexRadioDefault1">“十一二岁的叛逆期……罢了，服从规定吧。”</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label text-primary" for="flexRadioDefault2">“那个老师作死成分居多。”</label>
            </div>
            <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
        </form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        window.location.href = "#form"
        step06()
    }
    function step06() {
        $("#form").submit(function (event) {
            event.preventDefault()
            if (window.local_Tanghaogan >= 10) {//带隐藏选项的逻辑
                if (
                    document.getElementById("flexRadioDefault1").checked == true
                ) {
                    step07(1)
                } else if (
                    document.getElementById("flexRadioDefault2").checked == true
                ) {
                    step07(2)
                } else if (
                    document.getElementById("flexRadioDefault3").checked == true
                ) {
                    step07(3)
                } else {
                    alertError("请选择一个选项")
                }
            } else {//不带隐藏选项的逻辑
                if (
                    document.getElementById("flexRadioDefault1").checked == true
                ) {
                    step07(1)
                } else if (
                    document.getElementById("flexRadioDefault2").checked == true
                ) {
                    step07(2)
                } else {
                    alertError("请选择一个选项")
                }
            }
        })
    }
    function step07(num) {
        window.local_choices.push(num)
        $("#liveAlertPlaceholder").empty()
        $("#zhuxianArea").empty()
        $("#formPlaceholder").empty()
        setPercent(16.7)
        if (num == 1) {
            var zx = new Array()
            window.local_Tanghaogan = window.local_Tanghaogan + 2
            zx[0] = "“你也知道的，孤儿嘛，一般内心阴暗是很正常的。”綮冬耸耸肩，“赶老师大概不算什么。”"
            zx[1] =
                "“可是他们连老师都敢赶出来，还有什么不敢赶出来的……”裴担忧地皱皱眉头，“这分明是刁难我们。”"
            zx[2] = "“既然都选好了，就不要说丧气话了啊。”企冬勾住他的肩，“既来之则安之。走吧，我们去看看他们。”"
            step08(zx)
        }
        if (num == 2) {
            window.local_Tanghaogan = window.local_Tanghaogan + 1
            var zx = new Array()
            zx[0] = "“这种趾高气昂的性格，”裴皱眉，“我觉得你说得对。”"
            zx[1] =
                "“那我们应该没什么问题吧？”企冬看向教室的方向，“我们又没惹他们。”"
            zx[2] =
                "“但愿。”裴叹气，“我也是眼瞎，选了这么个苦活。”"
            step08(zx)
        }
        if (num == 3) {
            var zx = new Array()
            zx[0] =
                "“我觉得可行。”裴点点头，“毕竟，这么好的时间……”我也不想和那群小孩子待在一起。"
            zx[1] =
                "“你想干嘛？如果你想偷懒我第一个向老师举报你啊。”企冬笑。"
            zx[2] =
                "裴刚刚积攒起来想要和企冬去逛逛的心情瞬间消失不见，恼怒地想踢他，结果最后还是克制住了：“你……算了，先去看他们吧。”"
            zx[3] =
                "他忽然发现自己怎么这么别扭，和好兄弟出去玩不是简单的很吗？怎么到自己这里又是要积攒勇气又是妥协。他深深吸口气，仿佛这样就能让自己更加有决心似的。"
            window.local_Tanghaogan = window.local_Tanghaogan + 4
            step08(zx)
        }
    }
    async function step08(list) {
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
        step09()
    }
    function step09() {
        const form = document.createElement("form")
        form.innerHTML = `<form>
        <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
        </form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        window.location.href = "#form"
        step10()
    }
    function step10() {
        $("#form").submit(function (event) {
            $("#liveAlertPlaceholder").empty()
            $("#zhuxianArea").empty()
            $("#formPlaceholder").empty()
            setPercent(33.3)
            var zx = new Array()
        zx[0] =
            "企冬推开门，皱了皱眉。教室里比他预想中的更脏，孩子们见有人推开门，齐刷刷看向他，吵闹的教室立刻寂静了。这让他感到心漏跳了一拍。这些家伙不会把他赶出去……吧？"
        zx[1] = "沉默良久，安静到企冬感觉瘆人后，一名靠近门的孩子鼓起勇气打破沉寂：“你是……谁？走错地方了吗，还是来领养我们？”"
        zx[2] =
            "綮冬：？我们有这么显老吗。而且我们两个是男的！！！！！"
        zx[3] =
            "“不是，我们是来做志愿者的……”裴皱眉，一把拉开綮冬，看了他一眼：“曾经没有人来当过志愿者吗？”"
        zx[4] = "綮冬老实了，不敢说话了。班级里的孩子们显然愣了片刻，忽然激动起来，全部涌到教室门前。綮冬是不喜欢和小孩子打交道，一看这阵仗头都要大了，赶紧摆摆手：“你们的意见汇总到一个人那里去。”显然，这么一句话出来，孩子们立刻安静了，面面相觑，过了一段时间，一名非常瘦弱的男孩站了出来：“班长……他今天请假了，不知道为什么。”"
        zx[5] = "“你是副班长？”裴问道。"
        zx[6] = "“不完全是，我们班只有他一个班长，”那名男孩提到班长时，眼睛显然一亮：“他是我们班最聪明的，就是他告诉我们：有组织有计划地进行反抗，才能为自己赢得一些自由的。”"
        zx[7] = "“男生？”綮冬皱起眉头，“他为什么请假？”"
        zx[8] = "“好像是他的偶像？还是什么，好像休眠了，他今天心情很不好。”一道怯弱的声音不知道从哪里传出来，“我记得他和我说过的，叫……绊爱？”"
        zx[9] = "綮冬：……？？？这，他无话可说了。怎么什么事情都赶在一天内发生。"
        zx[10] = "“大哥哥，你们姓什么啊？”那名非常瘦弱的男孩直直看着他们，嘴唇微微张开却又固执地抿上，欲言又止。"
        zx[11] = "“我叫裴良谨，他叫綮冬，都是高二学生。没事，你们什么问题都能问我们的，我们也不会干涉你们的生活。”裴良谨嘴角微微上扬，同时用胳膊肘顶了顶綮冬，示意发点言。"
        zx[12] = "“什么都能问吗？那么裴哥哥，你们学校有没有那种大大的那种大箱子，叫什么空什么的，据说里面每时每刻都有凉风吹出来是真的吗？”瘦弱的男生抬起头，眼里是闪闪发光的光芒，“班长和我们美术老师都说过，如果有那个大箱子，我们夏天就不怕热了。”"
        zx[13] = "綮冬一愣，下意识想要纠正那是空调，却什么也没说出来，只是叹口气，“这个日后再说，你们班长在哪里？”"
        zx[14] = "说实话，綮冬一点也不想在福利院里呆着。他出来做志愿者一是为了混志愿者时间，二是为了拓展一点休息时间。奈何院长让他们接替护工的的工作。那他只能开摆。不对，用科学的思想指导开摆。"
        zx[15] = "院长让孩子们不要闹事就好，说明原来的护工其实也不怎么能管住他们。那么自己其实只要确保这些孩子不起来造反就好，其他的他可以说他无能为力了，而怎么让孩子不造反？找一下这些孩子的领导。"
        zx[16] = "班长，显然是班级主心骨的存在，而且这个班长……似乎也不简单。那这件事就更好办了。"
        zx[17] = "裴怎么能不明白冬的意思，微微一笑。"
        if( window.local_Tanghaogan <= 7){
            zx[18] = "果然，懒促动人智商进步。"
        }else if( window.local_Tanghaogan <= 12){
            zx[18] = "居然想一块去了……"
        }else{
            zx[18] = "不得不说，冬有时候还是挺聪明的。"
        }
        step11(zx)
        })
    }
    async function step11(list) {
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
        step12()
    }
    function step12() {
        const form = document.createElement("form")
        form.innerHTML = `
        <form>
            <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
        </form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        window.location.href = "#form"
        step13()
    }
    function step13() {
        $("#form").submit(function (event) {
            event.preventDefault()
            $("#liveAlertPlaceholder").empty()
            $("#zhuxianArea").empty()
            $("#formPlaceholder").empty()
            setPercent(50)
            var raw=`“你们护工一般干什么？”在前往宿舍区的时候，綮冬问烁——就是男孩。既然院长让他们接替护工的工作，那么了解一下护工干什么那也是情理之中。
            嗯，我真的太聪明了。綮冬微微勾起嘴角。
            裴看到綮冬的表情：……这家伙开始自恋了。
            “护工？她什么事也不干，她是我们班最闲的人。”烁听到这句话眉毛轻轻一挑，笑了，“我们听班长的，仅此而已。”
            綮冬：……所以，我是给我自己加戏了？
            “那我们应该干什么？你们院长说让我们接替护工的位置。”綮冬还没发话，裴抢先发话了。
            “啊，接替护工工作……”烁双眼闪过一丝诧异，“……请我们班长出山？然后你们就可以想干什么干什么了。”
            綮冬：……
            裴良谨：……
            你们班长真的带病吗？怎么感觉病的不是很严重的样子。
            “诶呀，开玩笑的，”烁露出一个灿烂的笑容，“你们其实也没什么可以干的，所以让我们放任自流就好啦。”
            诡异的气氛中，三人到了宿舍区。烁身体微微发抖，后脚悄悄撤到綮冬二人身后：“你们敲门吧，”似是不放心，他又补一句，“不要说让他出来接管班级的是我啊。”
            綮冬：？
            他们为什么这么怕他们班长？这未免有点太夸张了。不过既然到门口了，那也没有退路了，綮冬深吸一口气，横下心，敲敲门：“有人在吗？”
            没有回应。`
            var zx=raw.trim().split(/\n/)
            step14(zx)
        })
    }
    async function step14(list) {
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
        step15()
    }
    function step15() {
        const form = document.createElement("form")
        form.innerHTML = `
        <form>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label text-primary" for="flexRadioDefault1">再次敲门</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label text-primary" for="flexRadioDefault2">回去吧</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                <label class="form-check-label text-primary" for="flexRadioDefault3">让烁开门</label>
            </div>
            <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
        </form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        window.location.href = "#form"
        step16()
    }
    function step16() {
        $("#form").submit(function (event) {
            event.preventDefault()
            if (document.getElementById("flexRadioDefault1").checked == true) {
                step17(1)
            } else if (
                document.getElementById("flexRadioDefault2").checked == true
            ) {
                step17(2)
            } else if (
                document.getElementById("flexRadioDefault3").checked == true
            ) {
                step17(3)
            } else {
                alertError("请选择一个选项")
            }
        })
    }
    function step17(num) {
        window.local_choices.push(num)
        $("#liveAlertPlaceholder").empty()
        $("#zhuxianArea").empty()
        $("#formPlaceholder").empty()
        setPercent(66.7)
        if (num == 1) {
            window.local_Lianhaogan = window.local_Lianhaogan - 1
            var raw=`“有人吗？”綮冬深吸一口气，又弯下手指，轻轻在门上点了点。正当他打算和烁询问班长究竟在不在的时候，门开了。
            开门的是一个极瘦弱的男生，双眼好像因为哭而微微有些发红，然而这掩盖不了他清秀的面庞和那一对明亮的眸。他的衣服上的补丁与缝针星罗，他的气质却沉稳如渊，明显是不属于小孩子的气息。男孩看这阵仗不禁皱了皱眉头：“烁，我不是说今天的事情你负责吗？这两位又是？”
            “哦，镰，这是綮冬，这是裴良谨，他们是来做志愿者的，我不知道怎么处理。”烁连忙道，眼睛却不敢看镰，躲躲闪闪。
            “志愿者？”镰皱着的眉头似乎舒展了一些，“你们进来说吧。烁，你去管班。让班里的人稍微乖一点，不要给两位志愿者惹麻烦。”
            “好。班长，我们今天又把那个该死的妖精赶走了！”烁仿佛在班长前面有很强的表现欲，“她估计又向院长打小报告了，班长你小心点啊。”
            “我没问题的啦，你们只要能稍微有点自由就行。”镰笑笑，把门敞开，“两位进来吧。”
            房间里收拾的挺整齐，不宽敞但是干净整洁，看得出房间主人是一个很爱干净的人。镰示意两人在床上坐下，自己也坐在椅子上：“两位志愿者好。”
            “你叫镰，对吧。”綮冬双手放在膝上，“你有什么问题想找我们吗？”
            “没有，当然没有，我们还是第一次遇见志愿者呢，手足无措都来不及。”镰的脸上显出微笑，“不知道两位为什么来我们福利院？”
            “我们是来做学校的志愿者时间任务的。”綮冬不动声色地说着，他倒是想看看这位班长想干什么，“你是？”
            “哦哦，学校志愿者时间的任务啊。”镰脸上的笑容更加深了几分，“是这样的，两位想必也知道了我们福利院的现况了吧，”他痛心疾首地摇摇头，“现在我们的状况属实不太好啊！我们的老师对我们都有偏见呢。”
            “哦？此话怎讲。”綮冬显然知道他要说关键点了，故意拖长声音，“我们是看见你班同学把老师赶出来了啊。”
            “这也是我们的无奈之举啊。”镰满脸的惋惜，“那位老师可能说了些比较敏感的话题吧。我们也是第一次干这种事呢，行动可能确实偏激了一点，下次我们一定会改正的。”
            满嘴跑火车……这是綮冬对他的第一印象。而且，你们还有下一次？
            “不说这个了，你也看到了，我们在福利院里确实饱受那些所谓的老师的白眼。他们从来不会对我们正眼相看，羞辱也罢辱骂也罢都是家常便饭了。”綮冬这次没有说话，因为他说的确实是实话。
            “所以我们一直在为自己的权利而作斗争。我们只需要一个良好的，没有白眼的学习环境，并不奢求其他的，我们也没有资格奢求其他的，毕竟谁让我们天生就次人一等呢。”镰自嘲地笑笑。綮冬都忍不住想要安慰他，结果被裴扯了扯衣角，这才作罢。
            “你们会认可我们的吧？”镰忽然抬起头，双眼包含希冀地看着綮冬，看得綮冬心里一阵后悔，自己居然在揣测这么可怜的小家伙，正欲答应，裴却抢先一步答道：“只要是在合理范围内的，我们当然不会去干涉，多一事不如少一事嘛。”
            “那当然是大好事，我们也不会干很出格的事情啦。”镰眼里一闪，眼睑垂下来，仍然笑着答道，“毕竟我们的目的都是一样的，对吧。”
            “我就暂且相信吧。”裴也牵牵嘴角，笑的很勉强，“好了，现在正事谈完了吧。你为什么不去班级里？旷课可不是好行为。”
            “这……好像不是我应当告知的。”镰的笑容收敛，“我下午就去班级里管着他们，现在请回吧。”
            “烁和我们说过了，是不是绊爱的问题？”綮冬这时候才敢插一句嘴进去。前面高手过招，他自己是坐着瑟瑟发抖啊，当然瑟瑟发抖也有水分就是了：“其实，绊爱本身也不是永久离开的就是啦，一年之后就会回来的，她自己也说了是升级系统……”
            “升级系统？呵，升级系统？？？”镰听了这话，忽然变得无比愤怒，“A8自己都承认了绊爱有中之人，还他妈升级系统，是不是有点太迟了？本身前年那什么狗屁分身綮划就已经够离谱了，当时直播势出来策划不想着去多吸收一点直播势交流方便、即问即答的特点，反倒想要弱化中之人的存在，搞了三个披了绊爱皮的家伙出来，然后结果取关潮直接把绊爱推的人气大不如前。现在新公司大概也不好过，打算釜底抽薪打回忆牌了。新公司那位boss，当时可是力挺绊爱的，现在倒好，也辞职了。这不是升级不升级系统的问题，是行业问题！难道中之人就是该被呼来唤去的物品？如果哪一天，真正的绊爱AI来了，那不是狗屁吗？我们看的难道是那皮套？”
            “可是皮套确实挺好看的。”綮冬小声嘟囔。
            “……”镰的目光仿佛要吃人，但是最终他冷静了下来，眼里闪过一丝颓然，“也对，可是……”镰好像想要说什么，最终却只是嘴唇张了张，并没有音节跳出，“算了，我自己一个人静一静吧。我会按时过去的。”
            綮冬还想说什么，但是裴却顺势站起身：“那我们告辞。”说着，裴拉着綮冬的手腕，退出房间，缓缓关上了门。
            “你干嘛？”綮冬吃惊，甩开了裴的手，“我手腕都要给你抓紫了。”
            “你还能更看不懂脸色一点吗？”裴转过身，“真的，同情心泛滥不是什么好事，特别是和陌生人同情心泛滥。触其他人的霉头，这更是罪加一等。”
            “我那又不是同情心，毕竟小孩子的伪装实在是太天衣无缝了。”綮冬叹气，“那你呢？你不是同情心泛滥吗？”
            “或许吧，但是他的状态显然很不对。”裴看向门，“他确实很愤怒，但是却好像在抑制着什么。既然我们是合作关系，那么如果我们现在走了，不仅不会触到他的霉头，还会给他一个台阶下，何乐不为。”`
            var zx=raw.trim().split(/\n/)
            step18(zx)
        }
        if (num == 2) {
            window.local_Lianhaogan = window.local_Lianhaogan - 2
            var raw=`“烁，你们班长是不是不愿意见人啊，要不我们等……”綮冬将手缩回来，话还没说完，门却吱呀一声，被从内拉开了。
            开门的是一个极瘦弱的男生，双眼好像因为哭而微微有些发红，然而这掩盖不了他清秀的面庞和那一对明亮的眸。他的衣服上的补丁与缝针星罗，他的气质却沉稳如渊，明显是不属于小孩子的气息。男孩看这阵仗不禁皱了皱眉头：“烁，我不是说今天的事情你负责吗？这两位又是？”
            “哦，镰，这是綮冬，这是裴良谨，他们是来做志愿者的，我不知道怎么处理。”烁连忙道，眼睛却不敢看镰，躲躲闪闪。
            “志愿者？”镰皱着的眉头似乎舒展了一些，“你们进来说吧。烁，你去管班。让班里的人稍微乖一点，不要给两位志愿者惹麻烦。”
            “好。班长，我们今天又把那个该死的妖精赶走了！”烁仿佛在班长前面有很强的表现欲，“她估计又向院长打小报告了，班长你小心点啊。”
            “我没问题的啦，你们只要能稍微有点自由就行。”镰笑笑，把门敞开，“两位进来吧。”
            房间里收拾的挺整齐，不宽敞但是干净整洁，看得出房间主人是一个很爱干净的人。镰示意两人在床上坐下，自己也坐在椅子上：“两位志愿者好。”
            “你叫镰，对吧。”綮冬双手放在膝上，“你有什么问题想找我们吗？”
            “没有，当然没有，我们还是第一次遇见志愿者呢，手足无措都来不及。”镰的脸上显出微笑，“不知道两位为什么来我们福利院？”
            “我们是来做学校的志愿者时间任务的。”綮冬不动声色地说着，他倒是想看看这位班长想干什么，“你是？”
            “哦哦，学校志愿者时间的任务啊。”镰脸上的笑容更加深了几分，“是这样的，两位想必也知道了我们福利院的现况了吧，”他痛心疾首地摇摇头，“现在我们的状况属实不太好啊！我们的老师对我们都有偏见呢。”
            “哦？此话怎讲。”綮冬显然知道他要说关键点了，故意拖长声音，“我们是看见你班同学把老师赶出来了啊。”
            “这也是我们的无奈之举啊。”镰满脸的惋惜，“那位老师可能说了些比较敏感的话题吧。我们也是第一次干这种事呢，行动可能确实偏激了一点，下次我们一定会改正的。”
            满嘴跑火车……这是綮冬对他的第一印象。而且，你们还有下一次？
            “不说这个了，你也看到了，我们在福利院里确实饱受那些所谓的老师的白眼。他们从来不会对我们正眼相看，羞辱也罢辱骂也罢都是家常便饭了。”綮冬这次没有说话，因为他说的确实是实话。
            “所以我们一直在为自己的权利而作斗争。我们只需要一个良好的，没有白眼的学习环境，并不奢求其他的，我们也没有资格奢求其他的，毕竟谁让我们天生就次人一等呢。”镰自嘲地笑笑。綮冬都忍不住想要安慰他，结果被裴扯了扯衣角，这才作罢。
            “你们会认可我们的吧？”镰忽然抬起头，双眼包含希冀地看着綮冬，看得綮冬心里一阵后悔，自己居然在揣测这么可怜的小家伙，正欲答应，裴却抢先一步答道：“只要是在合理范围内的，我们当然不会去干涉，多一事不如少一事嘛。”
            “那当然是大好事，我们也不会干很出格的事情啦。”镰眼里一闪，眼睑垂下来，仍然笑着答道，“毕竟我们的目的都是一样的，对吧。”
            “我就暂且相信吧。”裴也牵牵嘴角，笑的很勉强，“好了，现在正事谈完了吧。你为什么不去班级里？旷课可不是好行为。”
            “这……好像不是我应当告知的。”镰的笑容收敛，“我下午就去班级里管着他们，现在请回吧。”
            “烁和我们说过了，是不是绊爱的问题？”綮冬这时候才敢插一句嘴进去。前面高手过招，他自己是坐着瑟瑟发抖啊，当然瑟瑟发抖也有水分就是了：“其实，绊爱本身也不是永久离开的就是啦，一年之后就会回来的，她自己也说了是升级系统……”
            “升级系统？呵，升级系统？？？”镰听了这话，忽然变得无比愤怒，“A8自己都承认了绊爱有中之人，还他妈升级系统，是不是有点太迟了？本身前年那什么狗屁分身綮划就已经够离谱了，当时直播势出来策划不想着去多吸收一点直播势交流方便、即问即答的特点，反倒想要弱化中之人的存在，搞了三个披了绊爱皮的家伙出来，然后结果取关潮直接把绊爱推的人气大不如前。现在新公司大概也不好过，打算釜底抽薪打回忆牌了。新公司那位boss，当时可是力挺绊爱的，现在倒好，也辞职了。这不是升级不升级系统的问题，是行业问题！难道中之人就是该被呼来唤去的物品？如果哪一天，真正的绊爱AI来了，那不是狗屁吗？我们看的难道是那皮套？”
            “可是皮套确实挺好看的。”綮冬小声嘟囔。
            “……”镰的目光仿佛要吃人，但是最终他冷静了下来，眼里闪过一丝颓然，“也对，可是……”镰好像想要说什么，最终却只是嘴唇张了张，并没有音节跳出，“算了，我自己一个人静一静吧。我会按时过去的。”
            綮冬还想说什么，但是裴却顺势站起身：“那我们告辞。”说着，裴拉着綮冬的手腕，退出房间，缓缓关上了门。
            “你干嘛？”綮冬吃惊，甩开了裴的手，“我手腕都要给你抓紫了。”
            “你还能更看不懂脸色一点吗？”裴转过身，“真的，同情心泛滥不是什么好事，特别是和陌生人同情心泛滥。触其他人的霉头，这更是罪加一等。”
            “我那又不是同情心，毕竟小孩子的伪装实在是太天衣无缝了。”綮冬叹气，“那你呢？你不是同情心泛滥吗？”
            “或许吧，但是他的状态显然很不对。”裴看向门，“他确实很愤怒，但是却好像在抑制着什么。既然我们是合作关系，那么如果我们现在走了，不仅不会触到他的霉头，还会给他一个台阶下，何乐不为。”`
            var zx=raw.trim().split(/\n/)
            step18(zx)
        }
        if (num == 3) {
            var raw=`“烁，你们班长是不是不认生啊。”綮冬皱皱眉，轻轻向后退，做出拱手让的姿势。烁正纠结时，门却从内而拉开了。
            开门的是一个极瘦弱的男生，双眼好像因为哭而微微有些发红，然而这掩盖不了他清秀的面庞和那一对明亮的眸。他的衣服上的补丁与缝针星罗，他的气质却沉稳如渊，明显是不属于小孩子的气息。男孩看这阵仗不禁皱了皱眉头：“烁，我不是说今天的事情你负责吗？这两位又是？”
            “哦，镰，这是綮冬，这是裴良谨，他们是来做志愿者的，我不知道怎么处理。”烁连忙道，眼睛却不敢看镰，躲躲闪闪。
            “志愿者？”镰皱着的眉头似乎舒展了一些，“你们进来说吧。烁，你去管班。让班里的人稍微乖一点，不要给两位志愿者惹麻烦。”
            “好。班长，我们今天又把那个该死的妖精赶走了！”烁仿佛在班长前面有很强的表现欲，“她估计又向院长打小报告了，班长你小心点啊。”
            “我没问题的啦，你们只要能稍微有点自由就行。”镰笑笑，把门敞开，“两位进来吧。”
            房间里收拾的挺整齐，不宽敞但是干净整洁，看得出房间主人是一个很爱干净的人。镰示意两人在床上坐下，自己也坐在椅子上：“两位志愿者好。”
            “你叫镰，对吧。”綮冬双手放在膝上，“你有什么问题想找我们吗？”
            “没有，当然没有，我们还是第一次遇见志愿者呢，手足无措都来不及。”镰的脸上显出微笑，“不知道两位为什么来我们福利院？”
            “我们是来做学校的志愿者时间任务的。”綮冬不动声色地说着，他倒是想看看这位班长想干什么，“你是？”
            “哦哦，学校志愿者时间的任务啊。”镰脸上的笑容更加深了几分，“是这样的，两位想必也知道了我们福利院的现况了吧，”他痛心疾首地摇摇头，“现在我们的状况属实不太好啊！我们的老师对我们都有偏见呢。”
            “哦？此话怎讲。”綮冬显然知道他要说关键点了，故意拖长声音，“我们是看见你班同学把老师赶出来了啊。”
            “这也是我们的无奈之举啊。”镰满脸的惋惜，“那位老师可能说了些比较敏感的话题吧。我们也是第一次干这种事呢，行动可能确实偏激了一点，下次我们一定会改正的。”
            满嘴跑火车……这是綮冬对他的第一印象。而且，你们还有下一次？
            “不说这个了，你也看到了，我们在福利院里确实饱受那些所谓的老师的白眼。他们从来不会对我们正眼相看，羞辱也罢辱骂也罢都是家常便饭了。”綮冬这次没有说话，因为他说的确实是实话。
            “所以我们一直在为自己的权利而作斗争。我们只需要一个良好的，没有白眼的学习环境，并不奢求其他的，我们也没有资格奢求其他的，毕竟谁让我们天生就次人一等呢。”镰自嘲地笑笑。綮冬都忍不住想要安慰他，结果被裴扯了扯衣角，这才作罢。
            “你们会认可我们的吧？”镰忽然抬起头，双眼包含希冀地看着綮冬，看得綮冬心里一阵后悔，自己居然在揣测这么可怜的小家伙，正欲答应，裴却抢先一步答道：“只要是在合理范围内的，我们当然不会去干涉，多一事不如少一事嘛。”
            “那当然是大好事，我们也不会干很出格的事情啦。”镰眼里一闪，眼睑垂下来，仍然笑着答道，“毕竟我们的目的都是一样的，对吧。”
            “我就暂且相信吧。”裴也牵牵嘴角，笑的很勉强，“好了，现在正事谈完了吧。你为什么不去班级里？旷课可不是好行为。”
            “这……好像不是我应当告知的。”镰的笑容收敛，“我下午就去班级里管着他们，现在请回吧。”
            “烁和我们说过了，是不是绊爱的问题？”綮冬这时候才敢插一句嘴进去。前面高手过招，他自己是坐着瑟瑟发抖啊，当然瑟瑟发抖也有水分就是了：“其实，绊爱本身也不是永久离开的就是啦，一年之后就会回来的，她自己也说了是升级系统……”
            “升级系统？呵，升级系统？？？”镰听了这话，忽然变得无比愤怒，“A8自己都承认了绊爱有中之人，还他妈升级系统，是不是有点太迟了？本身前年那什么狗屁分身綮划就已经够离谱了，当时直播势出来策划不想着去多吸收一点直播势交流方便、即问即答的特点，反倒想要弱化中之人的存在，搞了三个披了绊爱皮的家伙出来，然后结果取关潮直接把绊爱推的人气大不如前。现在新公司大概也不好过，打算釜底抽薪打回忆牌了。新公司那位boss，当时可是力挺绊爱的，现在倒好，也辞职了。这不是升级不升级系统的问题，是行业问题！难道中之人就是该被呼来唤去的物品？如果哪一天，真正的绊爱AI来了，那不是狗屁吗？我们看的难道是那皮套？”
            “可是皮套确实挺好看的。”綮冬小声嘟囔。
            “……”镰的目光仿佛要吃人，但是最终他冷静了下来，眼里闪过一丝颓然，“也对，可是……”镰好像想要说什么，最终却只是嘴唇张了张，并没有音节跳出，“算了，我自己一个人静一静吧。我会按时过去的。”
            綮冬还想说什么，但是裴却顺势站起身：“那我们告辞。”说着，裴拉着綮冬的手腕，退出房间，缓缓关上了门。
            “你干嘛？”綮冬吃惊，甩开了裴的手，“我手腕都要给你抓紫了。”
            “你还能更看不懂脸色一点吗？”裴转过身，“真的，同情心泛滥不是什么好事，特别是和陌生人同情心泛滥。触其他人的霉头，这更是罪加一等。”
            “我那又不是同情心，毕竟小孩子的伪装实在是太天衣无缝了。”綮冬叹气，“那你呢？你不是同情心泛滥吗？”
            “或许吧，但是他的状态显然很不对。”裴看向门，“他确实很愤怒，但是却好像在抑制着什么。既然我们是合作关系，那么如果我们现在走了，不仅不会触到他的霉头，还会给他一个台阶下，何乐不为。”`
            var zx=raw.trim().split(/\n/)
            step18(zx)
        }
    }
    async function step18(list) {
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
        step19()
    }
    function step19() {
        const form = document.createElement("form")
        form.innerHTML = `<form>
        <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
        </form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        window.location.href = "#form"
        step20()
    }
    function step20() {
        $("#form").submit(function (event) {
            $("#liveAlertPlaceholder").empty()
            $("#zhuxianArea").empty()
            $("#formPlaceholder").empty()
            setPercent(83.3)
            var raw=`门内，镰坐着没动。他再次开口，言语里的愤怒已经收敛了许多：“镰参见师傅。”
            “镰小子，你今天干得不错。”苍老的声音从房内的各个角落传出，声音低沉，好似从九幽下传出，“还有，不用说师傅，我们是共生关系，不需要对我这么恭敬。”
            “不，这是弟子对师傅的小小敬意。”镰微微俯身，“师父为何说今天干的不错？”
            “那两个人里面一个没什么，另一位来头可就大了，那位可是梦的亲儿子。”那声音顿了顿，“那位是绝佳的载体。虽然和我不是很契合，但是改造一下能勉强够用的。”
            “梦的亲儿子？”镰皱起眉，“回师傅，弟子才学粗浅，不解师傅语义。”
            “你不需要了解，总之，记得让他长时间待在你身边，我就可以尝试借他的身体回魂。”声音开始变弱，言语开始模糊，“好了，这次就这么多。记住，事不可为勿要勉强。我的灵魂离消散还久着呢，但是让他后面的人盯上你你就危险了。”言毕，声音消逝，而镰也终于直起身。
            “这老东西，真急了，看来真没什么时间了。”镰再次呢喃，声音里的尊敬早已消失，“该死，为什么是这个时候。最近两边都不太平，感觉距离被送到那什么军校也不远了。老东西大概也快察觉到我了。烦人。”
            镰闭上眼睛，再次睁眼，眼里只剩戏谑：“只能这样了。看来这太平日子也快结束咯~”
            他在笑，明明两个人都心怀鬼胎，非要装成亲近的师傅和敬爱的徒弟，实在是太好笑了。
            “爱酱……”`
            var zx=raw.trim().split(/\n/)
            step21(zx)
        })
    }
    async function step21(list) {
        for (var j = 0; j < list.length; j++) {
            var ele = document.createElement("p")
            ele.id = "zx" + j
            ele.setAttribute(
                "class",
                "mt-0 mb-0 text-warning text-break text-start"
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
        step22()
    }
    function step22() {
        const form = document.createElement("form")
        form.innerHTML = `<form>
        <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
        </form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        window.location.href = "#form"
        step23()
    }
    function step23() {
        $("#form").submit(function (event) {
            $("#liveAlertPlaceholder").empty()
            $("#zhuxianArea").empty()
            $("#formPlaceholder").empty()
            var raw=`綮冬和裴良谨兜兜转转又回到了班级边，綮冬四处张望时，裴忽然叫住他：“我觉得这个班人有点太少了。”
            确实，綮冬进来时就觉得隐隐约约有点不对。虽然教室是坐满了，看着人是很多，但是仔细一数就发现一共座位也就二十几个。这放到三个年级里所有的孩子就很可疑了。“难不成，镰给搞班级分化和孤立？”綮冬忽然觉得灵光乍现！他觉得自己真是太聪明了。
            “呵呵。”裴冷笑两声，“没有意义，难道是练习宫斗？”
            “额……”綮冬尬笑，“确实。那我们去问问？”
            “再等等。”裴转头看向教室内，“十一点了，总得吃完饭再去问嘛。他们如果有什么秘密，至少也得送饭过去吧。我一直觉得他们像普通的学生，根本没有福利院的风格。”裴隐隐觉得，自己好像要触碰到一些阴暗的东西。
            或许是长期阅读侦探小说，他渴望知道秘密。
            下课铃很快敲响，綮冬几乎是冲向食堂，钱什么的都小case，他现在饿鬼附身，吃饭为大。然而，当他看到半蔫的青菜和漂浮着白色泡沫状的，不知道什么动物的体油的汤，他忽然又不想吃了。
            “你不应该对一个有老鼠窝的食堂的饭菜过于苛责。”裴把唯一一道荤菜——红烧肉叉进口中，咀嚼后不禁皱起眉头，“我收回刚刚的那一句话，猪肉一尝就是放了不知道多久，烧的也乏善可陈，只是把酱汁和烂肉炖在一起而已，猪膻味也没除。这位厨师大概也是庸才。”
            “好详细，你怎么知道的？看来你很熟悉红烧肉。”綮冬叹气，“哎，你们家那么有钱，是不是天天可以去饭馆吃红烧肉啊？”綮冬只知道裴家里非常有钱，但是从没到他家里去过。裴倒也没有透露过他家的地址，只是说他住的地方是出租屋。
            “大概是吧，这里红烧肉和我家厨师叔叔烧的差多了。”裴把肉咽下，喉结滚动，“肥而不腻，软而不烂，这是红烧肉的基本功。”
            “厨师……叔叔？”綮冬一愣，被富有之力戳到心上，“你们家究竟多有钱啊？”同时他心上忽然涌起一种奇怪的感受：他不告诉他家的地址，是不是怕我被打击啊……
            他恍然大悟，然后悲愤涌上心头。
            “好啦好啦，不谈这个了。”裴用筷子指了指綮冬碗里的饭，“你还没动筷呢，不要浪费。”
            綮冬也不嫌弃饭菜了，低头卖力扒饭，仿佛要把悲愤化为食欲。
            一顿午餐就在这样奇怪的氛围中度过了。綮冬结账时，忽然发现了烁鬼鬼祟祟地从侧门溜出去，手里捧着几个饭盒。那饭一看就是刚做好的，塑料盖上的水汽还没有散去。
            綮冬把手机收起来，拉了拉裴的手臂：“你看，那里，烁刚刚拿着几份盒饭跑了。”
            “跟上去。”裴挥了挥手，两人跟着从侧门离开。
            烁兜兜转转，最终居然又去到了宿舍。他拉开走廊尽头的一扇门，进去时却顿了一下，把门留开了一条缝。此等好机会綮冬怎能放过，拉了拉裴的手臂，探出头向房间里面看。
            狭小的房间挤着三张上下铺的床，从门缝中视角恰巧能看见一张床下铺上躺着一名男孩，看起来像是睡着了，只是他的脚以奇怪的姿态扭曲着，好像是曾有什么强大的外力让脚骨折过，綮冬看得脚后跟发凉。门视角不好，綮冬只能靠听；烁放下饭盒的轻柔的“嗒”声，不知道从哪里传来的吃笑声，以及低低的交谈声：
            “烁，真的不用这样……这些饭菜让大家补补身体多好，为什么要糟蹋在我们身上？”
            “……弘，我说过了，这不是糟蹋。我们需要补身体，你们难道不需要填饱肚子？”
            “…………”
            “烁，感谢你的好意，但是这些我们真的收不下。我们本身的缺陷注定了来领养我们的人极少，从而我们也不能给福利院造成绩效或者客观的收入。其他人或许不知道，但是我很明白。他们为什么要把我们放在走廊尽头的宿舍？他们为什么以照顾为由监视我们的行动？你当然知道，可是你一直不愿意承认。我们除了被用来卖惨还能干吗？我们到现在，连这份卑微的价值都已经被榨干了。我们这些人中，上一个被领养的是什么时候的事？”
            “……”
            “我们真的只是负担而已，我很清楚。”
            “妈的，弘，你要是再说你们是负担，我现在就把你打到你觉得自己不是负担！你们的缺陷是你们自己造成的吗？还说什么明白，为什么你什么都明白，唯独不明白我们都是人！我们有什么区别，他们有什么资格嘲笑你们？”
            “……”
            “你又是何必呢。”
            “弘，你们已经在如此境界，甚至院方不愿意把你们拿出来卖惨，你们为什么，为什么不反抗？你们即使不反抗，为什么当我们要反抗，你们反而和我们撇清关系？弘，我应当说什么？”
            “不是撇清关系，真的。我一直很崇尚镰的领导力与执行力，你们都有很强的正义感……”
            “然而你甚至不愿意加一句我们。”
            “……”
            “行了，你把饭收下。希望明天来的时候你能把空饭盒还给我，这就是证明。”
            “哎……”
            接下来还有一些细细碎碎的谈话，綮冬已经听不见了。他趴在门上的身影缓缓竖直，双眼充满落寞。
            “原来……如此。”`
            var zx=raw.trim().split(/\n/)
            step24(zx)
        })
    }
    async function step24(list) {
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
        step25()
    }
    function step25() {
        const form = document.createElement("form")
        form.innerHTML = `<form>
        <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
        </form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        window.location.href = "#form"
        step26()
    }
    function step26() {
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
                            step27()
                        })
                    })
                },
                (error) => {
                    alertError(error.message + "（你可以点击注销并重新登录）")
                }
            )
        })
    }
    function step27() {
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
            window.location.href = "0-5.html"
        })
    }
    step01()
})
