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
            `<div class="alert ms-5 me-5 fade show alert-danger alert-dismissible d-flex align-items-center" role="alert">`,
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
            `<div class="alert ms-5 me-5 fade show alert-success alert-dismissible d-flex align-items-center" role="alert">`,
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

    async function print(list) {
        for (var j = 0; j < list.length; j++) {
            log("当前j：" + j)
            var ele = document.createElement("p")
            ele.id = "zx" + j
            ele.setAttribute("class", "mt-0 mb-0 text-break")
            $("#main").append(ele)
            log("元素创建完毕，id：" + "zx" + j)
            const element = document.getElementById("zx" + j)
            log("接收到text：" + list[j])
            log("text长度：" + list[j].length)
            for (var i = 0; i <= list[j].length; i++) {
                log("当前i：" + i)
                element.innerHTML = list[j].substr(0, i)
                await sleep(10)
                log("睡眠10毫秒结束")
            }
            await sleep(2000)
            log("睡眠2秒结束")
        }
        goon()
        
    }
    var zx = new Array()
    zx[0] = "太阳也上升了";
    zx[1] = "——题记";
    zx[2] = "&nbsp;";
    zx[3] = "下节课应该是一节数学课，企冬如是想到。他用笔戳了戳旁边的唐血鸿：“喂，小唐，现在几点了？”";
    zx[4] = "“十点呢，刚刚下课。”唐看了看表，“你就继续睡觉去吧，下节数学课，你记得看着一点老师。”";
    zx[5] = "“哦，谢谢啊。”企冬刚刚睡醒，显然不太想继续睡觉，便开始岔起话题，“阿唐啊，我刚刚做了一个超级离谱的梦。”";
    zx[6] = "“什么梦？”唐放下手中的数学题，饶有兴致地看向企冬，“该不会又是什么其他星系的故事吧，你可别忽悠我。”";
    zx[7] = "“嗨呀，不是什么其他的。”企冬单手拖住脑袋，“我梦见啊，我和帕普齐斯正在秘密策划一件事情，好像是要向教学楼内投放毒气弹？";
    zx[8] = "喂，你别笑啊，那个梦还有模有样的，我还和他在微信上互发消息计划细节呢。";
    zx[9] = "他负责投掷，我负责引诱，然后我们就可以顺利把我们敬爱的沈老师给骗到烟雾里去然后迷晕了。”";
    zx[10] = "说着，他还比划了一下，好像还真的极迫真。";
    zx[11] = "“你就别瞎想了，还迷晕沈老师，亏你真的想的出来的。”唐摇摇头，“你就做你那千秋大梦去吧。”";
    zx[12] = "“切，别不信，如果真的成了那我就不用听数学课了。多好。”企冬切一声，忽然又把脑袋凑过去，";
    zx[13] = "“话说啊，小唐，你真的喜欢数学课吗？和我说实话哦。”";
    zx[14] = "“当然了，数学课对我大有所益啊，怎么可能不喜欢。”唐显然一头雾水，不知道企冬要说什么。";
    zx[15] = "那么，……";
    print(zx)

    function goon(){
        const form = document.createElement("form")
        form.innerHTML = `<form>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
            你能不能帮我抄抄数学笔记？
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
        <label class="form-check-label" for="flexRadioDefault2">
            我可爱的，优秀的好学生小唐，您能不能下课后笔记给我看一眼？ </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
        <label class="form-check-label" for="flexRadioDefault3">
            我们是兄弟吧？那帮我抄数学笔记也没什么问题吧。
    </div>
    <button type="submit" class="btn btn-primary">Continue</button>
</form>`
        $("#form").append(form)
    }
})