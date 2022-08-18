$(document).ready(function () {
    Parse.initialize("fmzy")
    Parse.serverURL = "https://43.142.126.163/parse"
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
        唐摇摇头：“我对管住他们不抱希望。”`
        var zx=raw.trim().split(/\n/)
        step03(zx)
    }
    async function step03(list) {
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
                <label class="form-check-label text-danger" for="flexRadioDefault1">“十一二岁的叛逆期……罢了，服从规定吧。”</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label text-danger" for="flexRadioDefault2">“那个老师作死成分居多。”</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                <label class="form-check-label text-danger" for="flexRadioDefault3">（隐藏选项）“说不定我们也不需要管住他们。”</label>
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
                <label class="form-check-label text-danger" for="flexRadioDefault1">“十一二岁的叛逆期……罢了，服从规定吧。”</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label text-danger" for="flexRadioDefault2">“那个老师作死成分居多。”</label>
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
        setPercent(20)
        var raw=`“不是，我们是来做志愿者的……”唐皱眉，一把拉开綮冬，看了他一眼：“曾经没有人来当过志愿者吗？”
        綮冬老实了，不敢说话了。班级里的孩子们显然愣了片刻，忽然激动起来，全部涌到教室门前。綮冬是不喜欢和小孩子打交道，一看这阵仗头都要大了，赶紧摆摆手：“你们的意见汇总到一个人那里去。”显然，这么一句话出来，孩子们立刻安静了，面面相觑，过了一段时间，一名非常瘦弱的男孩站了出来：“班长……他今天请假了，不知道为什么。”
        “你是副班长？”唐问道。
        “不完全是，我们班只有他一个班长，”那名男孩提到班长时，眼睛显然一亮：“他是我们班最聪明的，就是他告诉我们：有组织有计划地进行反抗，才能为自己赢得一些自由的。”
        “男生？”綮冬皱起眉头，“他为什么请假？”
        “好像是他的偶像？还是什么，好像休眠了，他今天心情很不好。”一道怯弱的声音不知道从哪里传出来，“我记得他和我说过的，叫……绊爱？”
        綮冬：……？？？这，他无话可说了。怎么什么事情都赶在一天内发生。
        “大哥哥，你们姓什么啊？”那名非常瘦弱的男孩眼里闪烁着异样的光彩，是毫不掩饰的羡慕：“你们学校肯定有风扇吧，特别特别大的可以转的那种，挂在头上，特别凉快的那种。我记得我们班长说过的。”
        綮冬愣住，居然不知道如何回答他。他看着瘦弱男孩眼里的光芒，叹气道：“这个待会再说。我叫綮冬，他叫唐血鸿。你们班长呢？”
        说实话，綮冬一点也不想在福利院里呆着。他出来做志愿者一是为了混志愿者时间，二是为了拓展一点休息时间。奈何院长让他们接替护工的的工作。那他只能顺着院长的思路去走。
        院长让孩子们不要闹事就好，说明原来的护工其实也不怎么能管住他们。那么自己其实只要确保这些孩子不起来造反就好，其他的他可以说他无能为力了，而怎么让孩子不造反？找一下这些孩子的领导。
        班长，显然是班级主心骨的存在，而且这个班长……似乎也不简单。那这件事就更好办了。
        唐怎么能不明白冬的意思，他微微扬起嘴角。`
        var zx=raw.trim().split(/\n/)
        step08(zx)
        /*
        if (num == 1) {
            var zx = new Array()
            zx[0] = "“怎么可能啊，我功课做足的。”綮冬摇头，“小唐你在逗我吧。”"
            zx[1] =
                "“……我们先去地铁站再说吧。”唐有些无语，“怎么可能要半个小时。”"
            zx[2] = "“好，走着瞧。”綮冬纳闷，怎么可能只要10分钟？"
            if (window.local_Tanghaogan >= 9) {
                zx[3] =
                    "“这是什么曲子，听着很耳熟。”唐听到綮冬在吹口哨，“是一首很温柔的曲子啊。”"
                zx[4] =
                    "“《萱草花》，是几年前一个电影的插曲，电影名我是忘了。”綮冬轻轻答道，顺手摘下一片长青树叶，“是一名母亲送给女儿的。”"
                zx[5] = "遥遥的天之涯~萱草花开放~"
                zx[6] = "每一朵~可是我~牵挂的模样~"
                zx[7] = "让它开遍我等着你~回家的路上~"
                zx[8] = "好像我~从不曾~离开你的身旁~"
                zx[9] =
                    "他觉得这首曲子也很适合恋人……可是他没有说出来。唐也没有再说话，好像的确想起来了什么。"
            }
            step08(zx)
        }
        if (num == 2) {
            window.local_Tanghaogan = window.local_Tanghaogan + 1
            var zx = new Array()
            zx[0] = "“好像很有道理的样子……”綮冬沉默了。"
            zx[1] =
                "“冬，你沉思的样子很可爱欸。”小唐轻轻摸了摸他的头发，“很憨。”"
            zx[2] =
                "綮冬：……可爱和憨好像不是同一个东西吧？他倒也懒得指出来了，拉着唐的手，迈步走向地铁站。"
            if (window.local_Tanghaogan >= 9) {
                zx[3] =
                    "“这是什么曲子，听着很耳熟。”唐听到綮冬在吹口哨，“是一首很温柔的曲子啊。”"
                zx[4] =
                    "“《萱草花》，是几年前一个电影的插曲，电影名我是忘了。”綮冬轻轻答道，顺手摘下一片长青树叶，“是一名母亲送给女儿的。”"
                zx[5] = "遥遥的天之涯~萱草花开放~"
                zx[6] = "每一朵~可是我~牵挂的模样~"
                zx[7] = "让它开遍我等着你~回家的路上~"
                zx[8] = "好像我~从不曾~离开你的身旁~"
                zx[9] =
                    "他觉得这首曲子也很适合恋人……可是他没有说出来。唐也没有再说话，好像的确想起来了什么。"
            }
            step08(zx)
        }
        if (num == 3) {
            var zx = new Array()
            zx[0] =
                "“啊……好像是的欸，那里离这里也不是很远。”綮冬歪着头想了一会，“小唐好帅！”"
            zx[1] =
                "“……这又是什么鬼。”唐嘴角不自觉的上扬，“走吧，你说得对，如果晚了真的只能打地铺的。”"
            zx[2] =
                "“嗨啊，打地铺怕什么。”綮冬勾住唐的肩膀，“我之前在你家和你通宵玩王者的时候又不是没有打过地铺。”"
            zx[3] =
                "……你还有脸说，那次通宵让我第二天物理考试没考上前10。然而唐终究没说出这句话。仔细想想，这家伙在家里，也不是一点好处都没有……"
            zx[4] = "……至少让自己不是很寂寞了。唐笑了笑，轻轻摇了摇头。"
            if (window.local_Tanghaogan >= 9) {
                zx[3] =
                    "“这是什么曲子，听着很耳熟。”唐听到綮冬在吹口哨，“是一首很温柔的曲子啊。”"
                zx[4] =
                    "“《萱草花》，是几年前一个电影的插曲，电影名我是忘了。”綮冬轻轻答道，顺手摘下一片长青树叶，“是一名母亲送给女儿的。”"
                zx[5] = "遥遥的天之涯~萱草花开放~"
                zx[6] = "每一朵~可是我~牵挂的模样~"
                zx[7] = "让它开遍我等着你~回家的路上~"
                zx[8] = "好像我~从不曾~离开你的身旁~"
                zx[9] =
                    "他觉得这首曲子也很适合恋人……可是他没有说出来。唐也没有再说话，好像的确想起来了什么。"
            }
            window.local_Tanghaogan = window.local_Tanghaogan + 3
            step08(zx)
        }
        */
    }
    async function step08(list) {
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
        step09()
    }
    function step09() {
        const form = document.createElement("form")
        form.innerHTML = `
        <form>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label text-danger" for="flexRadioDefault1">果然，懒促动人智商进步。</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label text-danger" for="flexRadioDefault2">居然想一块去了……</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                <label class="form-check-label text-danger" for="flexRadioDefault3">不得不说，冬有时候还是挺聪明的。</label>
            </div>
            <button type="submit" class="btn btn-outline-info mt-2">Continue</button>
        </form>`
        form.id = "form"
        $("#formPlaceholder").append(form)
        window.location.href = "#form"
        step10()
    }
    function step10() {
        $("#form").submit(function (event) {
            event.preventDefault()
                if (
                    document.getElementById("flexRadioDefault1").checked == true
                ) {
                    step11(1)
                } else if (
                    document.getElementById("flexRadioDefault2").checked == true
                ) {
                    step11(2)
                } else if (
                    document.getElementById("flexRadioDefault3").checked == true
                ) {
                    step11(3)
                } else {
                    alertError("请选择一个选项")
                }
        })
    }
    function step11(num) {
        window.local_choices.push(num)
        $("#liveAlertPlaceholder").empty()
        $("#zhuxianArea").empty()
        $("#formPlaceholder").empty()
        setPercent(20)
        var raw=`“不是，我们是来做志愿者的……”唐皱眉，一把拉开綮冬，看了他一眼：“曾经没有人来当过志愿者吗？”
        綮冬老实了，不敢说话了。班级里的孩子们显然愣了片刻，忽然激动起来，全部涌到教室门前。綮冬是不喜欢和小孩子打交道，一看这阵仗头都要大了，赶紧摆摆手：“你们的意见汇总到一个人那里去。”显然，这么一句话出来，孩子们立刻安静了，面面相觑，过了一段时间，一名非常瘦弱的男孩站了出来：“班长……他今天请假了，不知道为什么。”
        “你是副班长？”唐问道。
        “不完全是，我们班只有他一个班长，”那名男孩提到班长时，眼睛显然一亮：“他是我们班最聪明的，就是他告诉我们：有组织有计划地进行反抗，才能为自己赢得一些自由的。”
        “男生？”綮冬皱起眉头，“他为什么请假？”
        “好像是他的偶像？还是什么，好像休眠了，他今天心情很不好。”一道怯弱的声音不知道从哪里传出来，“我记得他和我说过的，叫……绊爱？”
        綮冬：……？？？这，他无话可说了。怎么什么事情都赶在一天内发生。
        “大哥哥，你们姓什么啊？”那名非常瘦弱的男孩眼里闪烁着异样的光彩，是毫不掩饰的羡慕：“你们学校肯定有风扇吧，特别特别大的可以转的那种，挂在头上，特别凉快的那种。我记得我们班长说过的。”
        綮冬愣住，居然不知道如何回答他。他看着瘦弱男孩眼里的光芒，叹气道：“这个待会再说。我叫綮冬，他叫唐血鸿。你们班长呢？”
        说实话，綮冬一点也不想在福利院里呆着。他出来做志愿者一是为了混志愿者时间，二是为了拓展一点休息时间。奈何院长让他们接替护工的的工作。那他只能顺着院长的思路去走。
        院长让孩子们不要闹事就好，说明原来的护工其实也不怎么能管住他们。那么自己其实只要确保这些孩子不起来造反就好，其他的他可以说他无能为力了，而怎么让孩子不造反？找一下这些孩子的领导。
        班长，显然是班级主心骨的存在，而且这个班长……似乎也不简单。那这件事就更好办了。
        唐怎么能不明白冬的意思，他微微扬起嘴角。`
        var zx=raw.trim().split(/\n/)
        step12(zx)
        /*
        if (num == 1) {
            var zx = new Array()
            zx[0] = "“怎么可能啊，我功课做足的。”綮冬摇头，“小唐你在逗我吧。”"
            zx[1] =
                "“……我们先去地铁站再说吧。”唐有些无语，“怎么可能要半个小时。”"
            zx[2] = "“好，走着瞧。”綮冬纳闷，怎么可能只要10分钟？"
            if (window.local_Tanghaogan >= 9) {
                zx[3] =
                    "“这是什么曲子，听着很耳熟。”唐听到綮冬在吹口哨，“是一首很温柔的曲子啊。”"
                zx[4] =
                    "“《萱草花》，是几年前一个电影的插曲，电影名我是忘了。”綮冬轻轻答道，顺手摘下一片长青树叶，“是一名母亲送给女儿的。”"
                zx[5] = "遥遥的天之涯~萱草花开放~"
                zx[6] = "每一朵~可是我~牵挂的模样~"
                zx[7] = "让它开遍我等着你~回家的路上~"
                zx[8] = "好像我~从不曾~离开你的身旁~"
                zx[9] =
                    "他觉得这首曲子也很适合恋人……可是他没有说出来。唐也没有再说话，好像的确想起来了什么。"
            }
            step08(zx)
        }
        if (num == 2) {
            window.local_Tanghaogan = window.local_Tanghaogan + 1
            var zx = new Array()
            zx[0] = "“好像很有道理的样子……”綮冬沉默了。"
            zx[1] =
                "“冬，你沉思的样子很可爱欸。”小唐轻轻摸了摸他的头发，“很憨。”"
            zx[2] =
                "綮冬：……可爱和憨好像不是同一个东西吧？他倒也懒得指出来了，拉着唐的手，迈步走向地铁站。"
            if (window.local_Tanghaogan >= 9) {
                zx[3] =
                    "“这是什么曲子，听着很耳熟。”唐听到綮冬在吹口哨，“是一首很温柔的曲子啊。”"
                zx[4] =
                    "“《萱草花》，是几年前一个电影的插曲，电影名我是忘了。”綮冬轻轻答道，顺手摘下一片长青树叶，“是一名母亲送给女儿的。”"
                zx[5] = "遥遥的天之涯~萱草花开放~"
                zx[6] = "每一朵~可是我~牵挂的模样~"
                zx[7] = "让它开遍我等着你~回家的路上~"
                zx[8] = "好像我~从不曾~离开你的身旁~"
                zx[9] =
                    "他觉得这首曲子也很适合恋人……可是他没有说出来。唐也没有再说话，好像的确想起来了什么。"
            }
            step08(zx)
        }
        if (num == 3) {
            var zx = new Array()
            zx[0] =
                "“啊……好像是的欸，那里离这里也不是很远。”綮冬歪着头想了一会，“小唐好帅！”"
            zx[1] =
                "“……这又是什么鬼。”唐嘴角不自觉的上扬，“走吧，你说得对，如果晚了真的只能打地铺的。”"
            zx[2] =
                "“嗨啊，打地铺怕什么。”綮冬勾住唐的肩膀，“我之前在你家和你通宵玩王者的时候又不是没有打过地铺。”"
            zx[3] =
                "……你还有脸说，那次通宵让我第二天物理考试没考上前10。然而唐终究没说出这句话。仔细想想，这家伙在家里，也不是一点好处都没有……"
            zx[4] = "……至少让自己不是很寂寞了。唐笑了笑，轻轻摇了摇头。"
            if (window.local_Tanghaogan >= 9) {
                zx[3] =
                    "“这是什么曲子，听着很耳熟。”唐听到綮冬在吹口哨，“是一首很温柔的曲子啊。”"
                zx[4] =
                    "“《萱草花》，是几年前一个电影的插曲，电影名我是忘了。”綮冬轻轻答道，顺手摘下一片长青树叶，“是一名母亲送给女儿的。”"
                zx[5] = "遥遥的天之涯~萱草花开放~"
                zx[6] = "每一朵~可是我~牵挂的模样~"
                zx[7] = "让它开遍我等着你~回家的路上~"
                zx[8] = "好像我~从不曾~离开你的身旁~"
                zx[9] =
                    "他觉得这首曲子也很适合恋人……可是他没有说出来。唐也没有再说话，好像的确想起来了什么。"
            }
            window.local_Tanghaogan = window.local_Tanghaogan + 3
            step08(zx)
        }
        */
    }
    async function step11(list) {
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
            setPercent(60)
            var zx = new Array()
            zx[0] =
                "“我们到了。”唐抬头望，綮冬顺着他的视线望过去，“阳光福利院”几个镶金大字悬在头上。“真的才10分钟诶。”綮冬推开门。"
            zx[1] =
                "首先映入眼帘的是整齐的大理石地板，正对门挂着两面绣红锦旗：“诲人不倦。”“品德高尚，热心为民。”那两幅锦旗一尘不染。"
            zx[2] =
                "“这里卫生做的还不错啊，”綮冬眼睛一亮，“这里显然不是那种三无福利院。”"
            zx[3] =
                "话音刚落，他忽然感受到一个巨大的活物掉下来在他眼前乱抓，“艹！这是什么？”"
            zx[4] =
                "綮冬摸索着终于把那个生物的尾巴抓到，倒着拎起来，居然是只老鼠。"
            zx[5] =
                "綮冬立刻胃里一阵翻江倒海，把那只灰色的东西丢到地上。那老鼠很快也就钻到墙与地板缝隙中消失不见。"
            zx[6] =
                "“虽然我们这里只是二线城市，但是有老鼠未免也太可怕了一点。”唐环顾四周，“看来这个什么牌匾水分不小。”"
            step14(zx)
        })
    }
    async function step14(list) {
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
        step15()
    }
    function step15() {
        const form = document.createElement("form")
        form.innerHTML = `
        <form>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label text-danger" for="flexRadioDefault1">……我们要在这里过夜？</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label text-danger" for="flexRadioDefault2">我要回家……</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                <label class="form-check-label text-danger" for="flexRadioDefault3">我们要在这里帮他们打扫卫生吗？忽然不是很想来。</label>
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
        setPercent(80)
        if (num == 1) {
            var zx = new Array()
            window.local_Tanghaogan = window.local_Tanghaogan + 2
            zx[0] =
                "“我觉得是的，”唐拍拍綮冬的背，“安啦，他们要是敢亏待我们，我们告诉校方不就行了。”"
            zx[1] =
                "“嗨，我知道，只是我觉得苦了在这里的孩子。”綮冬皱起眉，“去签到吧，他们说在哪里签到来着？”"
            zx[2] =
                "上二楼，綮冬推开院长办公室的大门，才发现豁然开朗。地板都在阳光下面熠熠生辉，墙上更是一尘不染，这里有老鼠綮冬是不信的。"
            zx[3] =
                "办公室靠窗的位置坐了一个巨大的阴影，听见推门声，抬起头：“志愿者吗？快进来。”"
            zx[4] =
                "綮冬甚至不大敢踏进去，唯恐自己的鞋把这里地板弄脏了。直到唐推了他一把，他才踉跄进办公室。"
            zx[5] =
                "“你们是……綮冬和唐血鸿？”院长不知从哪里掏出来的一本崭新的本子，“签到完了，今天你们的任务是接替请假的护工，工时12h，包午餐，但是一个人30块。”"
            zx[6] = "“？”綮冬又受到了震撼，“一顿饭30？”"
            zx[7] =
                "“很便宜了好吗。”院长努力挤出一个笑容，但是带动满脸的肥肉反而更加吓人，“我怎么会讹你们呢。”"
            zx[8] = "綮冬：啊对对对。"
            zx[9] =
                "“还有一个问题，院长先生，你怎么知道我们的名字的？”唐从进来一直沉默不语，现在又想到了什么，开口说道。"
            zx[10] =
                "“因为只有你们两个啊。”院长合上志愿者本子，“该不会我认错了你们两个分别是谁吧？那对不起，我老眼昏花了。”"
            zx[11] = "綮冬：……他忽然感到大事不妙。"
            step18(zx)
        }
        if (num == 2) {
            window.local_Tanghaogan = window.local_Tanghaogan + 1
            var zx = new Array()
            zx[0] =
                "“实不相瞒，我有相同的愿望。”唐皱眉，“凑合做吧，反正只要一个晚上。”"
            zx[1] =
                "“苦了我的衣服啊……这里不会有地方洗衣服吧。”綮冬是很爱干净的，痛苦面具生动形象了起来。“先去签到吧。"
            zx[2] =
                "上二楼，綮冬推开院长办公室的大门，才发现豁然开朗。地板都在阳光下面熠熠生辉，墙上更是一尘不染，这里有老鼠綮冬是不信的。"
            zx[3] =
                "办公室靠窗的位置坐了一个巨大的阴影，听见推门声，抬起头：“志愿者吗？快进来。”"
            zx[4] =
                "綮冬甚至不大敢踏进去，唯恐自己的鞋把这里地板弄脏了。直到唐推了他一把，他才踉跄进办公室。"
            zx[5] =
                "“你们是……綮冬和唐血鸿？”院长不知从哪里掏出来的一本崭新的本子，“签到完了，今天你们的任务是接替请假的护工，工时12h，包午餐，但是一个人30块。”"
            zx[6] = "“？”綮冬又受到了震撼，“一顿饭30？”"
            zx[7] =
                "“很便宜了好吗。”院长努力挤出一个笑容，但是带动满脸的肥肉反而更加吓人，“我怎么会讹你们呢。”"
            zx[8] = "綮冬：啊对对对。"
            zx[9] =
                "“还有一个问题，院长先生，你怎么知道我们的名字的？”唐从进来一直沉默不语，现在又想到了什么，开口说道。"
            zx[10] =
                "“因为只有你们两个啊。”院长合上志愿者本子，“该不会我认错了你们两个分别是谁吧？那对不起，我老眼昏花了。”"
            zx[11] = "綮冬：……他忽然感到大事不妙。"
            step18(zx)
        }
        if (num == 3) {
            var zx = new Array()
            window.local_Tanghaogan = window.local_Tanghaogan + 2
            zx[0] =
                "“我们又不是苦工，他们想怎么使唤就怎么使唤吗。”唐撇撇嘴，“他们自己的烂摊子让我们收拾，搞笑吧。”"
            zx[1] =
                "“但愿吧。”綮冬开始张望，“在哪里签到来着？小唐你报名的时候问过没有。”"
            zx[2] =
                "上二楼，綮冬推开院长办公室的大门，才发现豁然开朗。地板都在阳光下面熠熠生辉，墙上更是一尘不染，这里有老鼠綮冬是不信的。"
            zx[3] =
                "办公室靠窗的位置坐了一个巨大的阴影，听见推门声，抬起头：“志愿者吗？快进来。”"
            zx[4] =
                "綮冬甚至不大敢踏进去，唯恐自己的鞋把这里地板弄脏了。直到唐推了他一把，他才踉跄进办公室。"
            zx[5] =
                "“你们是……綮冬和唐血鸿？”院长不知从哪里掏出来的一本崭新的本子，“签到完了，今天你们的任务是接替请假的护工，工时12h，包午餐，但是一个人30块。”"
            zx[6] = "“？”綮冬又受到了震撼，“一顿饭30？”"
            zx[7] =
                "“很便宜了好吗。”院长努力挤出一个笑容，但是带动满脸的肥肉反而更加吓人，“我怎么会讹你们呢。”"
            zx[8] = "綮冬：啊对对对。"
            zx[9] =
                "“还有一个问题，院长先生，你怎么知道我们的名字的？”唐从进来一直沉默不语，现在又想到了什么，开口说道。"
            zx[10] =
                "“因为只有你们两个啊。”院长合上志愿者本子，“该不会我认错了你们两个分别是谁吧？那对不起，我老眼昏花了。”"
            zx[11] = "綮冬：……他忽然感到大事不妙。"
            step18(zx)
        }
    }
    async function step18(list) {
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
            event.preventDefault()
            $("#liveAlertPlaceholder").empty()
            $("#zhuxianArea").empty()
            $("#formPlaceholder").empty()
            setPercent(100)
            if (window.local_progress < 3) {
                window.local_progress = 3
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
                        yyy.set("nextPage", "0-4")
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
        ele.innerHTML = "0-3 Mission Accomplished."
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
        buttton.innerHTML = "前往0-4"
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
            window.location.href = "https://43.142.126.163/zhuxian/0-4.html"
        })
    }
    step01()
})
