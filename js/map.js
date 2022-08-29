$(document).ready(function () {
    Parse.initialize("fmzy");
    Parse.serverURL = "http://43.142.126.163/parse";
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
    const query = new Parse.Query(classData);
    query.get(localStorage.getItem("objectId")).then(
        (rage) => {
            // 查询需要的变量并保存
            //window.local_tansuo = rage.get("tansuo");
            window.local_tansuo = 5;
            //window.local_diaocha = rage.get("diaocha");
            window.local_diaocha = 5;
            //window.local_explored = rage.get("explored");
            window.local_explored = [2, 8, 5, 19];
            function bindClick() {
                $("#gezi0").click(function () {
                    handleClickEvent(0);
                });
                $("#gezi1").click(function () {
                    handleClickEvent(1);
                });
                $("#gezi2").click(function () {
                    handleClickEvent(2);
                });
                $("#gezi3").click(function () {
                    handleClickEvent(3);
                });
                $("#gezi4").click(function () {
                    handleClickEvent(4);
                });
                $("#gezi5").click(function () {
                    handleClickEvent(5);
                });
                $("#gezi6").click(function () {
                    handleClickEvent(6);
                });
                $("#gezi7").click(function () {
                    handleClickEvent(7);
                });
                $("#gezi8").click(function () {
                    handleClickEvent(8);
                });
                $("#gezi9").click(function () {
                    handleClickEvent(9);
                });
                $("#gezi10").click(function () {
                    handleClickEvent(10);
                });
                $("#gezi11").click(function () {
                    handleClickEvent(11);
                });
                $("#gezi12").click(function () {
                    handleClickEvent(12);
                });
                $("#gezi13").click(function () {
                    handleClickEvent(13);
                });
                $("#gezi14").click(function () {
                    handleClickEvent(14);
                });
                $("#gezi15").click(function () {
                    handleClickEvent(15);
                });
                $("#gezi16").click(function () {
                    handleClickEvent(16);
                });
                $("#gezi17").click(function () {
                    handleClickEvent(17);
                });
                $("#gezi18").click(function () {
                    handleClickEvent(18);
                });
                $("#gezi19").click(function () {
                    handleClickEvent(19);
                });
                $("#gezi20").click(function () {
                    handleClickEvent(20);
                });
                $("#gezi21").click(function () {
                    handleClickEvent(21);
                });
                $("#gezi22").click(function () {
                    handleClickEvent(22);
                });
                $("#gezi23").click(function () {
                    handleClickEvent(23);
                });
                $("#gezi24").click(function () {
                    handleClickEvent(24);
                });
            }
            function updateUI() {
                Array.from(new Array(25).keys())
                    .slice(0)
                    .forEach((element) => {
                        $("#gezi" + element).attr("src", "ico/candle.png");
                    });
                window.local_explored.forEach((ele) => {
                    $("#gezi" + ele).attr("src", "ico/flag.png");
                });
                $("#tansuo").text("剩余探索点数："+window.local_tansuo)
            }
            const modal = new bootstrap.Modal("#modal");
            bindClick();
            updateUI();

            gezi = new Array();
            gezi[0] = {
                xCoordinate: -2,
                yCoordinate: 2,
                type: "zhuxian",
                content: "936",
            };
            gezi[1] = {
                xCoordinate: -1,
                yCoordinate: 2,
                type: "zhuxian",
                content: "936",
            };
            gezi[2] = {
                xCoordinate: 0,
                yCoordinate: 2,
                type: "zhuxian",
                content: "936",
            };
            gezi[3] = {
                xCoordinate: 1,
                yCoordinate: 2,
                type: "zhuxian",
                content: "936",
            };
            gezi[4] = {
                xCoordinate: 2,
                yCoordinate: 2,
                type: "zhuxian",
                content: "936",
            };
            gezi[5] = {
                xCoordinate: -2,
                yCoordinate: 1,
                type: "zhuxian",
                content: "936",
            };
            gezi[6] = {
                xCoordinate: -1,
                yCoordinate: 1,
                type: "zhuxian",
                content: "936",
            };
            gezi[7] = {
                xCoordinate: 0,
                yCoordinate: 1,
                type: "zhuxian",
                content: "936",
            };
            gezi[8] = {
                xCoordinate: 1,
                yCoordinate: 1,
                type: "zhuxian",
                content: "936",
            };
            gezi[9] = {
                xCoordinate: 2,
                yCoordinate: 1,
                type: "zhuxian",
                content: "936",
            };
            gezi[10] = {
                xCoordinate: -2,
                yCoordinate: 0,
                type: "zhuxian",
                content: "936",
            };
            gezi[11] = {
                xCoordinate: -1,
                yCoordinate: 0,
                type: "zhuxian",
                content: "936",
            };
            gezi[12] = {
                xCoordinate: 0,
                yCoordinate: 0,
                type: "zhuxian",
                content: "936",
            };
            gezi[13] = {
                xCoordinate: 1,
                yCoordinate: 0,
                type: "zhuxian",
                content: "936",
            };
            gezi[14] = {
                xCoordinate: 2,
                yCoordinate: 0,
                type: "zhuxian",
                content: "936",
            };
            gezi[15] = {
                xCoordinate: -2,
                yCoordinate: -1,
                type: "zhuxian",
                content: "936",
            };
            gezi[16] = {
                xCoordinate: -1,
                yCoordinate: -1,
                type: "zhuxian",
                content: "936",
            };
            gezi[17] = {
                xCoordinate: 0,
                yCoordinate: -1,
                type: "zhuxian",
                content: "936",
            };
            gezi[18] = {
                xCoordinate: 1,
                yCoordinate: -1,
                type: "zhuxian",
                content: "936",
            };
            gezi[19] = {
                xCoordinate: 2,
                yCoordinate: -1,
                type: "zhuxian",
                content: "936",
            };
            gezi[20] = {
                xCoordinate: -2,
                yCoordinate: -2,
                type: "zhuxian",
                content: "936",
            };
            gezi[21] = {
                xCoordinate: -1,
                yCoordinate: -2,
                type: "zhuxian",
                content: "936",
            };
            gezi[22] = {
                xCoordinate: 0,
                yCoordinate: -2,
                type: "zhuxian",
                content: "936",
            };
            gezi[23] = {
                xCoordinate: 1,
                yCoordinate: -2,
                type: "zhuxian",
                content: "936",
            };
            gezi[24] = {
                xCoordinate: 2,
                yCoordinate: -2,
                type: "zhuxian",
                content: "936",
            };

            function handleClickEvent(num) {
                //对提示框预处理
                if (window.local_explored.includes(num)) {
                    //说明该格已探索
                    $("h5.modal-title").text("(" + gezi[num].xCoordinate + "," + gezi[num].yCoordinate + ") - 已探索");
                    if (gezi[num].type == "zhuxian") {
                        $("div.modal-body").html(`
                            该格为主线格：${gezi[num].content}
                        `);
                    }
                    $("#modal-confirm").attr("style","display:none;")
                } else {
                    //说明该格未探索
                    $("h5.modal-title").text("(" + gezi[num].xCoordinate + "," + gezi[num].yCoordinate + ") - 未探索");
                    $("#modal-confirm").attr("style","")
                    $("div.modal-body").html(`
                        是否消耗1探索点数前往该格？
                    `);
                    $("#modal-confirm").unbind("click")
                    $("#modal-confirm").click(function () {
                        window.local_explored.push(num);
                        window.local_tansuo-=1;
                        updateUI();
                        modal.hide();
                    })
                }
                modal.show();
            }
        },
        (error) => {
            alertError(error.message + "（你可以点击注销并重新登录）");
        }
    );
});
