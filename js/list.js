$(document).ready(function () {
    Parse.initialize("fmzy");
    Parse.serverURL = "http://43.142.126.163:1337/parse";
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
    async function count() {
        const query = new Parse.Query(classData);
        query.limit(1000);
        const results = await query.find();
        $("#count").text("有" + results.length + "位执行者连接到浮梦之屿总部。");
        for (var i = 0; i < results.length; i++) {
            var row = document.createElement("tr");
            var cell1 = document.createElement("th");
            cell1.setAttribute("scope", "row");
            cell1.innerHTML = i + 1;
            var cell2 = document.createElement("td");
            var img = document.createElement("img");
            img.setAttribute("width", "30");
            img.setAttribute("height", "30");
            img.setAttribute("src", "http://43.142.126.163/ico/ico" + results[i].get("touxiang") + ".ico");
            img.setAttribute("class", "rounded-circle img-fluid");
            cell2.append(img);
            var cell3 = document.createElement("td");
            cell3.innerHTML = results[i].get("username");
            var cell4 = document.createElement("td");
            var a = document.createElement("a");
            a.setAttribute("href", "http://43.142.126.163/home.html?" + results[i].id);
            a.setAttribute("class", "nav-link text-primary");
            a.setAttribute("target", "_blank");
            a.innerHTML = "查看信息录入表";
            cell4.append(a);
            row.append(cell1);
            row.append(cell2);
            row.append(cell3);
            row.append(cell4);
            $("tbody").append(row);
        }
    }
    count();
});
