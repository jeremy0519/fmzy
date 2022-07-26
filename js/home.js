$(document).ready(function () {
    Parse.initialize("fmzy")
    Parse.serverURL = 'http://43.142.126.163:1337/parse'
    const classData = Parse.Object.extend("fmzy")
    const alertPlaceholder = $('#liveAlertPlaceholder')
    function alertError(message) {
        alertPlaceholder.empty()
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert fade show alert-danger alert-dismissible d-flex align-items-center" role="alert">`,
            `   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>`,
            `   <div>${message}</div>`,
            '   <button id="closebtn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')
        alertPlaceholder.append(wrapper)
        window.location.href = "#"
    }
    function alertSuccess(message) {
        alertPlaceholder.empty()
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert fade show alert-success alert-dismissible d-flex align-items-center" role="alert">`,
            `   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>`,
            `   <div>${message}</div>`,
            '   <button id="closebtn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')
        alertPlaceholder.append(wrapper)
        window.location.href = "#"
    }
    // get id
    window.objectId = location.href.substring(32)
    if (window.objectId == Cookies.get("objectId")) {
        window.editable = true
    } else {
        window.editable = false
    }
    // fill in blanks
    const query = new Parse.Query(classData)
    query.get(window.objectId).then((xxx) => {
        $("#touxiang").attr("src", "ico/ico" + xxx.get("touxiang") + ".ico")
        $("#username").text(xxx.get("username"))
        $("#progress").text("0-" + xxx.get("progress"))
        $("#signature").text(xxx.get("signature"))
        $("#register").text(xxx.createdAt.toLocaleDateString())
        $("#page").text("帕普齐斯好感：" + xxx.get("Pagehakhaogan"))
        $("#tang").text("唐血鸿好感：" + xxx.get("Tanghaogan"))
        $("#binxia").text("彬夏好感：" + xxx.get("Binxiahaogan"))
        $("#dugu").text("独孤秋夜好感：" + xxx.get("Duguqiuyehaogan"))
        $("#yimeng").text("异梦好感：" + xxx.get("Yimenghaogan"))
        $("#lian").text("镰好感：" + xxx.get("Lianhaogan"))
    }, (error) => {
        alertError(error.message + "（你可以点击注销并重新登录）")
    })
})