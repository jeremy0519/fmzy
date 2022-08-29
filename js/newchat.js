$(document).ready(function () {
    // 换用户名和主页
    Parse.initialize("fmzy");
    Parse.serverURL = "http://43.142.126.163/parse";
    const classData = Parse.Object.extend("fmzy");
    const objid = localStorage.getItem("objectId");
    const query = new Parse.Query(classData);
    query.get(objid).then(
        (xxx) => {
            Waline.init({
                el: '#vcomments',
                serverURL: 'http://43.142.126.163:8360',
              });
        },
        (error) => {
            alertError(error.message + "（你可以点击注销并重新登录）");
        }
    );

    
});
