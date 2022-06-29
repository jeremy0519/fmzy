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
            log("当前j："+j)
            var ele = document.createElement("p")
            ele.id = "zx" + j
            ele.setAttribute("class","text-start text-break")
            $("#main").append(ele)
            log("元素创建完毕，id："+"zx" + j)
            const element = document.getElementById("zx" + j)
            log("接收到text：" + list[j])
            log("text长度：" + list[j].length)
            for (var i = 0; i <= list[j].length; i++) {
                log("当前i：" + i)
                log("当前substring：" + list[j].substr(0, i))
                element.innerHTML = list[j].substr(0, i)
                await sleep(1000)
                log("睡眠1秒结束")
            }
            await sleep(2000)
            log("睡眠2秒结束")
        }
    }
    var zhuxian = new Array()
    zhuxian[0] = "936"
    zhuxian[1] = "1038"
    zhuxian[2] = "133"
    zhuxian[3] = "2735"
    print(zhuxian)

})