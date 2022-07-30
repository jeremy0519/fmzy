$(document).ready(function () {
    Parse.initialize("fmzy")
    Parse.serverURL = "http://43.142.126.163:1337/parse"
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
        const objid = Cookies.get("objectId")
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
            "“小唐，你在家吗？”綮冬敲敲门，“要去做志愿者啦，不然时间不够了。”"
        zx[1] = "“来了啊。”綮冬听见小唐的脚步声，“你急什么。”"
        zx[2] =
            "“能不急吗，拜托，现在已经九点半了啊！”綮冬焦急地瞄了一眼腕表，“更何况我们还要在那里留几天，现在不早去占座位晚上你等着打地铺吧。”"
        zx[3] =
            "唐：……？没有时间观念的是你吧。“坐地铁过去顶多十分钟，你急个鬼啊。”"
        zx[4] = "綮冬一时间竟有些发愣。只要十分钟的吗？"
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
        const form = document.createElement("form")
        form.innerHTML = `
        <form>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label text-danger" for="flexRadioDefault1">怎么可能？小唐你在逗我吧。</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label text-danger" for="flexRadioDefault2">很有道理的样子……</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                <label class="form-check-label text-danger" for="flexRadioDefault3">（隐藏选项）啊……是我傻了，小唐好帅！</label>
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
                <label class="form-check-label text-danger" for="flexRadioDefault1">怎么可能？小唐你在逗我吧。</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label text-danger" for="flexRadioDefault2">很有道理的样子……</label>
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
            if (window.local_Tanghaogan >= 10) {
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
            } else {
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
            event.preventDefault()
            $("#liveAlertPlaceholder").empty()
            $("#zhuxianArea").empty()
            $("#formPlaceholder").empty()
            setPercent(40)
            var zx = new Array()
            zx[0] =
                "无话间，两人已经到了地铁站。买完票坐上地铁，綮冬看了眼表，还不到5分钟。"
            zx[1] =
                "“你还真说对了。”綮冬笑，“只有三站路，肯定能在十分钟内到。”闲来无事，他打开手机，点开粉色小电视。"
            zx[2] = "“有什么大事吗？”唐探过脑袋，“看着好像没什么大事情。”"
            zx[3] =
                "“诶？绊爱的重大发表？”綮冬忽然瞄到一则视频，一想，好像最近12月4日了，是绊爱十周年生辰了，便顺理成章点开了。"
            zx[4] =
                "但是显然这个视频并不是庆贺视频。綮冬看完后，整个人都不敢相信：“绊爱……Kizuna AI……要休眠了？”"
            zx[5] =
                "“我以为她还能继续两天的。”唐叹口气，“不过也没事，就一年，也算是谋求新的发展道路了吧。”"
            zx[6] =
                "“看评论区也都是希望她回来。”綮冬翻看着，“希望绊爱能荣归吧。”"
            zx[7] = "大早上来这么一条，两人的心情都有些沉重。"
            zx[8] =
                "到站，綮冬关了手机，叹口气：“绊爱这种大VTB一举一动果然引人关注，我已经看到好几个自诩绊爱老粉的开始瞎分析了。”"
            zx[9] =
                "“毕竟是千万粉的热度，谁都想蹭。”唐轻轻碰了碰綮冬的手臂：“到站了。”"
            zx[10] =
                "“哦，好的。”綮冬起身，跟着唐走出了地铁站。綮冬是一分钟不说话就闲不下来：“小唐，你知道沈老师现在怎么样了吗？”"
            zx[11] =
                "自从上周沈老师的事情之后，他们俩就没有谈过这件事了。校方公关也是厉害，首先声明沈老师并不存在黑社会背景之类，然后说校方联系医院，医院表示全力救治，但是精神层面可能具有一定的不可逆损伤，可能是陷害谋杀。"
            zx[12] =
                "言下之意就是谴责：”你他妈的市级领导不管管你自己，过来找我们茬？有病吧。“更狠的是，校方还请了知名报社记者，让这件事情直接扩大。"
            zx[13] =
                "最后，校方又表达了对失去这位老师的惋惜，又指桑骂槐地把公安说了一通，一拍桌子，新闻发布会正式散会，记者甚至没问几个问题。"
            zx[14] =
                "这一套连招下来綮冬都给整不会了，善于权谋的他见过，贴着别人脸输出的他真没见过。"
            zx[15] =
                "“没听过呢，”唐摇摇头，“校方大概封锁了消息来源，现在媒体也好像被禁言了。”"
            zx[16] = "“？我们学校这么有能耐的吗……”綮冬震惊.jpg。"
            zx[17] =
                "唐摇摇头：“我们学校肯定不是普通的高中。在学校里快死人了都没人管，而且后来发现，当时教学楼内除了上课的老师和学生，没有一个人。”"
            if (window.local_choices[1] == 1) {
                if (window.local_daoju[1] == 1) {
                    zx[18] =
                        "“那不就和我梦境里的不谋而合了？”綮冬又感到自己接触到了什么隐秘的秘密：“难道我的梦境和现实有什么隐秘的关联？”"
                    zx[19] =
                        "“仅凭这件事可能孤证不立，”唐的语气也严肃下来：“但是你想想校方的说辞，是肺部有管控物质。”"
                    zx[20] =
                        "“肺部？白烟？”綮冬忽然大悟：“你的噩梦，我的梦境里面都有烟雾！那么，有可能……”"
                    zx[21] =
                        "“我也不确定。”唐摇头，“但是如果是真的……我们可能就被卷到一件大事里面去了。”"
                    zx[22] =
                        "綮冬没有说话，仅仅是因为这个消息实在是惊世骇俗。他陷入思索。"
                    zx[23] =
                        "烟雾弹，肺部药物，梦境……看来回去，自己有必要和帕普齐斯好好谈谈。"
                    window.local_Tanghaogan = window.local_Tanghaogan + 1
                    window.local_dunwu = window.local_dunwu + 3
                    window.local_daoju.push(1)
                } else {
                    zx[18] =
                        "“没有人？”綮冬震撼，“那不是说这一切校方早就知道了吗？”同时他也忽然想到了：自己在那个梦里的办公室……好像也没人。"
                    zx[19] =
                        "“是的，而且还有一个值得关注的点，肺部有管控物质。”唐在空中比划着，“这说明什么？这说明，他很可能也和我一……就是，他可能吸了类似于烟雾弹的东西。”"
                    zx[20] =
                        "烟雾弹！！！綮冬自然想到了帕普齐斯的微信留言。但是他不想贩卖恐慌，于是便敷衍的接一句：“烟雾弹？真是吓人。”"
                    if (window.local_Tanghaogan >= 10) {
                        zx[21] = "唐血鸿皱皱眉：“你有事瞒着我。”"
                        zx[22] =
                            "“什……什么？怎么可能啊。”綮冬一惊，暗暗道小唐真的太机灵了，“我怎么敢瞒着我们的沉稳闷骚攻啊，你说是吧。”"
                        zx[23] =
                            "“你滚啊。”唐笑着踢了他一脚，眼里却闪过一抹探究的意味。"
                        window.local_Tanghaogan = window.local_Tanghaogan + 1
                    }
                    window.local_dunwu = window.local_dunwu + 1
                    window.local_daoju.push(1)
                }
            } else {
                if (window.local_daoju[1] == 1) {
                    zx[18] =
                        "“你仔细想一想，你梦境里有没有看到人？”唐碰了碰綮冬的肩膀，“按你的描述，没有吧。”"
                    zx[19] =
                        "“听你这么一说好像还真没有，”綮冬忽然想起来，唐的梦里好像也没看到人……？"
                    zx[20] =
                        "这和帕普齐斯有什么关系？而且他说的是灵魂烟雾弹……灵魂……"
                    zx[21] =
                        "去和帕普齐斯谈谈吧，他心里想着，这是唯一的突破口。"
                    window.local_dunwu = window.local_dunwu + 2
                    window.local_daoju.push(1)
                } else {
                    zx[18] =
                        "“没有人？这也太巧了吧。”綮冬皱眉，“我觉得不像巧合。”"
                    zx[19] =
                        "“校方的说辞乍一听义正言辞，实际上就是胡搅蛮缠，抛出一个谋杀的猜想和恶劣的态度，什么都给瞒下来了。”唐皱眉，“事情不简单。”"
                    zx[20] =
                        "“这也不是你我能管的了。”可是，这个管控化学物质，会不会和烟雾弹，和自己与唐的梦境里的物质有什么关联……？"
                    zx[21] =
                        "綮冬摇摇头，管他那么多干嘛，当一个普普通通的平凡者，有何不可。"
                    window.local_dunwu = window.local_dunwu - 6
                    window.local_daoju.push(0)
                }
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
            if (window.local_progress < 3) {
                window.local_progress = 3
            }
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
            // 上传
            const objid = Cookies.get("objectId")
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
            window.location.href = "http://43.142.126.163/zhuxian/0-4.html"
        })
    }
    step01()
})
