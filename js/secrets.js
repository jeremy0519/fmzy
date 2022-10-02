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
            window.local_Pagehakmax = rage.get("Pagehakmax");
            window.local_Tangmax = rage.get("Tangmax");
            window.local_Binxiamax = rage.get("Binxiamax");
            window.local_Dugumax = rage.get("Dugumax");
            window.local_Lianmax = rage.get("Lianmax");
            window.local_Yimengmax = rage.get("Yimengmax");
            window.local_progress = rage.get("progress");
            window.local_CurrentTestLevel = rage.get("CurrentTestLevel");
            // 开始操作所有按钮啦
            // 先拿两个测试下
            // Begin-rage
            // 注意是rage！！！
            if (1) {
                //姑且假设这个按钮启用了
                $("#v-pills-Bika-tab").attr("data-bs-toggle", "pill"); //添加正常查看操作
                $("#v-pills-Bika-tab").attr("data-bs-target", "#v-pills-Bika"); //设置连接位置
                $("#v-pills-Bika").html(`
                <p class="mb-0">姓名：彬夏</p>
                <p class="mb-0">性别：女</p>
                <p class="mb-0">类别：类克隆人</p>
                <p class="mb-0">身高：178</p>
                <p class="mb-0">简介：由[#039]号的细胞复制而来，性格与#039号大同小异，更为理性。</p>
                `); //设置内容
            } else {
                $("#v-pills-Bika-tab").attr("class", "nav-link text-secondary"); //添加灰色即secondary
                $("#v-pills-Bika-tab").attr("data-bs-toggle", "tooltip"); //添加悬停效果
                $("#v-pills-Bika-tab").attr("data-bs-title", "未达成彬夏人设条件，达成条件：你这是被封号了？"); //设置悬停文字
                //激活tooltip（悬停时的文本）
                new bootstrap.Tooltip($("#v-pills-Bika-tab"));
            }
            // End-rage

            // Begin-jake
            // 注意是jake！！！
            if (0) {
                //姑且假设这个按钮禁用了
                $("#v-pills-Tang-tab").attr("data-bs-toggle", "pill"); //添加正常查看操作
                $("#v-pills-Tang-tab").attr("data-bs-target", "#v-pills-Tang"); //设置连接位置
                $("#v-pills-Tang").html(`
                <p class="mb-0">1038</p>
                <p class="mb-0">1535</p>
                `); //设置内容
            } else {
                $("#v-pills-Tang-tab").attr("class", "nav-link text-secondary"); //添加灰色
                $("#v-pills-Tang-tab").attr("data-bs-toggle", "tooltip"); //添加悬停效果
                $("#v-pills-Tang-tab").attr("data-bs-title", "未达成裴良谨人设条件，达成条件：裴好感达到1000000000"); //设置悬停文字
                //激活tooltip（悬停时的文本）
                new bootstrap.Tooltip($("#v-pills-Tang-tab"));
            }
            // End-jake
            
            if (window.local_progress>=3) {
                $("#v-pills-addicted-tab").attr("data-bs-toggle", "pill");
                $("#v-pills-addicted-tab").attr("data-bs-target", "#v-pills-addicted"); //设置连接位置
                $("#v-pills-addicted").html(`
                <p class="mb-0">青涩的葡萄酒</p>
                <p class="mb-0">饮下的后劲便如此之大？</p>
                <p class="mb-0">这便能让天空的太阳都黯然失色</p>
                <p class="mb-0">只余下褪尽彩衣的美好？</p>
                `); //设置内容
            } else {
                $("#v-pills-addicted-tab").attr("class", "nav-link text-secondary"); //添加灰色即secondary
                $("#v-pills-addicted-tab").attr("data-bs-toggle", "tooltip"); //添加悬停效果
                $("#v-pills-addicted-tab").attr("data-bs-title", "未达成Addicted条件。达成条件：曾完成过0-3"); //设置悬停文字
                //激活tooltip（悬停时的文本）
                new bootstrap.Tooltip($("#v-pills-addicted-tab"));
            }

            if (window.local_progress>=3) {
                $("#v-pills-blind-tab").attr("data-bs-toggle", "pill");
                $("#v-pills-blind-tab").attr("data-bs-target", "#v-pills-blind"); //设置连接位置
                $("#v-pills-blind").html(`
                <p class="mb-0">没有月光的夜晚</p>
                <p class="mb-0">即使在灯下伸手亦不见五指。</p>
                <p class="mb-0">一个美妙的梦却悄然而至</p>
                <p class="mb-0">梦里藏着我的双眼。</p>
                `); //设置内容
            } else {
                $("#v-pills-blind-tab").attr("class", "nav-link text-secondary"); //添加灰色即secondary
                $("#v-pills-blind-tab").attr("data-bs-toggle", "tooltip"); //添加悬停效果
                $("#v-pills-blind-tab").attr("data-bs-title", "未达成Blind条件。达成条件：曾完成过0-3"); //设置悬停文字
                //激活tooltip（悬停时的文本）
                new bootstrap.Tooltip($("#v-pills-blind-tab"));
            }

            if (window.local_progress>=4) {
                $("#v-pills-crush-tab").attr("data-bs-toggle", "pill");
                $("#v-pills-crush-tab").attr("data-bs-target", "#v-pills-crush"); //设置连接位置
                $("#v-pills-crush").html(`
                <p class="mb-0">将自己的愉悦偷偷种在文字中</p>
                <p class="mb-0">看文字车水马龙，吵闹喧嚣；</p>
                <p class="mb-0">等到夜深万籁俱寂之时</p>
                <p class="mb-0">再看那颗种子，枝繁叶茂。</p>
                `); //设置内容
            } else {
                $("#v-pills-crush-tab").attr("class", "nav-link text-secondary"); //添加灰色即secondary
                $("#v-pills-crush-tab").attr("data-bs-toggle", "tooltip"); //添加悬停效果
                $("#v-pills-crush-tab").attr("data-bs-title", "未达成Crush条件。达成条件：曾完成过0-4"); //设置悬停文字
                //激活tooltip（悬停时的文本）
                new bootstrap.Tooltip($("#v-pills-crush-tab"));
            }

            if (window.local_progress>=5) {
                $("#v-pills-dream-tab").attr("data-bs-toggle", "pill");
                $("#v-pills-dream-tab").attr("data-bs-target", "#v-pills-dream"); //设置连接位置
                $("#v-pills-dream").html(`
                <p class="mb-0">I keep moving towards the world</p>
                <p class="mb-0">Gateway to the world</p>
                <p class="mb-0">Hello, good morning</p>
                <p class="mb-0">I wanna be with you.</p>
                `); //设置内容
            } else {
                $("#v-pills-dream-tab").attr("class", "nav-link text-secondary"); //添加灰色即secondary
                $("#v-pills-dream-tab").attr("data-bs-toggle", "tooltip"); //添加悬停效果
                $("#v-pills-dream-tab").attr("data-bs-title", "未达成Dream条件。达成条件：曾完成过0-5"); //设置悬停文字
                //激活tooltip（悬停时的文本）
                new bootstrap.Tooltip($("#v-pills-dream-tab"));
            }

            if (window.local_progress>=5) {
                $("#v-pills-enthusiasm-tab").attr("data-bs-toggle", "pill");
                $("#v-pills-enthusiasm-tab").attr("data-bs-target", "#v-pills-enthusiasm"); //设置连接位置
                $("#v-pills-enthusiasm").html(`
                <p class="mb-0">一片人迹罕至的沙漠；</p>
                <p class="mb-0">一块几近枯竭的绿洲；</p>
                <p class="mb-0">一次淅淅沥沥的小雨；</p>
                <p class="mb-0">一束喷涌而出的渴望。</p>
                `); //设置内容
            } else {
                $("#v-pills-enthusiasm-tab").attr("class", "nav-link text-secondary"); //添加灰色即secondary
                $("#v-pills-enthusiasm-tab").attr("data-bs-toggle", "tooltip"); //添加悬停效果
                $("#v-pills-enthusiasm-tab").attr("data-bs-title", "未达成Enthusiasm条件。达成条件：曾完成过0-5"); //设置悬停文字
                //激活tooltip（悬停时的文本）
                new bootstrap.Tooltip($("#v-pills-enthusiasm-tab"));
            }

            if (window.local_progress>=3 && window.local_Lianmax>=4) {
                $("#v-pills-fragment-tab").attr("data-bs-toggle", "pill");
                $("#v-pills-fragment-tab").attr("data-bs-target", "#v-pills-fragment"); //设置连接位置
                $("#v-pills-fragment").html(`
                <p class="mb-0">一名没有感官的人</p>
                <p class="mb-0">感受不到朴素的情感；</p>
                <p class="mb-0">⁮他在府里浑浑噩噩</p>
                <p class="mb-0">每日探窗向天上的烈阳发呆。</p>
                <br />
                <p class="mb-0">再精湛的名医见了他也只能摇头</p>
                <p class="mb-0">再慈爱的父母见了他也只能叹息；</p>
                <p class="mb-0">滑稽的喜剧只能黯然退场</p>
                <p class="mb-0">催泪的悲剧也不能让他动摇分毫。</p>
                <br />
                <p class="mb-0">直到有一天，失手打碎一盏玻璃杯——</p>
                <p class="mb-0">酒液泼洒在地，碎玻璃深插手中。</p>
                <br />
                <p class="mb-0">第一次，他感受到了疼痛；</p>
                <p class="mb-0">第一次，他发现眼前的世界沾染了星星点点的色彩。</p>
                <br />
                <p class="mb-0">巨大的疼痛唤醒了他的情感</p>
                <p class="mb-0">难以言说的情绪充斥在他的心中；</p>
                <p class="mb-0">那或许是书中记载的快乐</p>
                <p class="mb-0">不，称其为满足更加恰当。</p>
                <br />
                <p class="mb-0">他陷在这虚无缥缈的满足中</p>
                <p class="mb-0">观赏以前未曾观赏的风景；</p>
                <p class="mb-0">然而这疼痛转瞬即逝</p>
                <p class="mb-0">自己的神经已然麻木于此。</p>
                <br />
                <p class="mb-0">这可不行。</p>
                <br />
                <p class="mb-0">他紧紧握住了手，</p>
                <p class="mb-0">让那片玻璃浸得更深。</p>
                <br />
                <p class="mb-0">他听见了脚步声和哭喊声</p>
                <p class="mb-0">大概是自己那爱哭的妹妹在呼叫；</p>
                <p class="mb-0">他低头看见地毯上的一摊殷红</p>
                <p class="mb-0">仿佛心跳也跟着漏了半拍。</p>
                <br />
                <p class="mb-0">残存的理智在心中呐喊</p>
                <p class="mb-0">父亲的低喊，母亲的惊叫，妹妹的哭泣在交融；</p>
                <p class="mb-0">为了诱惑他</p>
                <p class="mb-0">让他把这唯一的一片玻璃剥离开来。</p>
                <br />
                <p class="mb-0">他们想抢走他的那一片碎片。</p>
                <br />
                <p class="mb-0">他只有这一块碎片了</p>
                <p class="mb-0">连一切都不曾留下；</p>
                <p class="mb-0">可是连这一块碎片</p>
                <p class="mb-0">都要被无情地夺走？</p>
                <br />
                <p class="mb-0">他把玻璃握得更深</p>
                <p class="mb-0">仿佛这就是他的全部。</p>
                <br />
                <p class="mb-0">沐浴在未曾感受到的温暖阳光下</p>
                <p class="mb-0">看着以前未曾留意的温热血红；</p>
                <p class="mb-0">他的内心是愉悦的，是满足的</p>
                <p class="mb-0">——是骄傲的。</p>
                <br />
                <p class="mb-0">看啊，我感受到了什么？</p>
                <br />
                <p class="mb-0">残存的血液从手中流出</p>
                <p class="mb-0">残存的意念所剩无几；</p>
                <p class="mb-0">残存的呼声从天边传来</p>
                <p class="mb-0">残存的灵魂有了不残存的意志。</p>
                <br />
                <p class="mb-0">与其在黑白照片里锁住自己的一生</p>
                <p class="mb-0">为何不在彩色照片内度过短暂的一程？</p>
                <br />
                <p class="mb-0">浸没在溢出的满足</p>
                <p class="mb-0">他陷入永久的沉睡。</p>
                <br />
                <p class="mb-0">如飞蛾扑火般的相遇</p>
                <p class="mb-0">会在熊熊烈火中燃尽；</p>
                <p class="mb-0">在灰烬之前的耀眼光芒</p>
                <p class="mb-0">将射向无限的苍穹。</p>
                `); //设置内容
            } else {
                $("#v-pills-fragment-tab").attr("class", "nav-link text-secondary"); //添加灰色即secondary
                $("#v-pills-fragment-tab").attr("data-bs-toggle", "tooltip"); //添加悬停效果
                $("#v-pills-fragment-tab").attr("data-bs-title", "未达成Fragment条件。达成条件：曾完成过0-3,且镰的好感达到过4"); //设置悬停文字
                //激活tooltip（悬停时的文本）
                new bootstrap.Tooltip($("#v-pills-fragment-tab"));
            }

            if (window.local_progress>=4 && window.local_Lianmax>=7) {
                $("#v-pills-galaxy-tab").attr("data-bs-toggle", "pill");
                $("#v-pills-galaxy-tab").attr("data-bs-target", "#v-pills-galaxy"); //设置连接位置
                $("#v-pills-galaxy").html(`
                <p class="mb-0">银色的河流缓缓流淌</p>
                <p class="mb-0">世界花开花落。</p>
                <br />
                <p class="mb-0">在无尽的星空中</p>
                <p class="mb-0">有一颗小小的星星。</p>
                <p class="mb-0">闪烁着明亮的光芒</p>
                <p class="mb-0">追逐着流转的银河。</p>
                <br />
                <p class="mb-0">在那遥远的河对岸</p>
                <p class="mb-0">小星星看见另一颗小星星。</p>
                <p class="mb-0">她耀眼的光芒</p>
                <p class="mb-0">轻易地引起了星星的注意。</p>
                <br />
                <p class="mb-0">在这无穷到无趣的宇宙中</p>
                <p class="mb-0">两颗小星星交了朋友。</p>
                <p class="mb-0">他看着她的闪烁雀跃</p>
                <p class="mb-0">她望见他的雀跃而闪烁微笑。</p>
                <br />
                <p class="mb-0">伟大的宇宙每天都在运转</p>
                <p class="mb-0">星星的闪烁也不曾停息；</p>
                <p class="mb-0">他说，树开花了</p>
                <p class="mb-0">她道，雨淅淅沥沥。</p>
                <br />
                <p class="mb-0">直到有一天，一枚垂垂老矣的星球，化为极暗的深渊。</p>
                <br />
                <p class="mb-0">那深渊过于强大</p>
                <p class="mb-0">转瞬间一切便已经支离破碎。</p>
                <p class="mb-0">他听见身上的所谓人类在颤抖</p>
                <p class="mb-0">跪倒在地，拜见所谓的神灵，请求放他们一条生路。</p>
                <br />
                <p class="mb-0">他知道，自己很快也要消失在那深不可见的深渊里了</p>
                <p class="mb-0">可是在那之前，他还有一心事未了；</p>
                <p class="mb-0">她知道，那深渊会把周围的一切吞噬</p>
                <p class="mb-0">可是在那之前，她还想做最后一件事。</p>
                <br />
                <p class="mb-0">我想见见你。</p>
                <br />
                <p class="mb-0">他说，他想听听她星球上的滋润春雨；</p>
                <p class="mb-0">她说，她想看看他星球上的繁花满城。</p>
                <br />
                <p class="mb-0">那便是伟大的创世</p>
                <p class="mb-0">他的星球上下起了淅淅沥沥的暖雨。</p>
                <p class="mb-0">那便是伟大的创世</p>
                <p class="mb-0">她的星球一夜间繁花尽展。</p>
                <br />
                <p class="mb-0">从繁华走向消亡</p>
                <p class="mb-0">这便是凄凉的命运，</p>
                <p class="mb-0">然而在必定的消亡之前</p>
                <p class="mb-0">还有那不可熄灭的心火代代相传。</p>
                <br />
                <p class="mb-0">亿万光年外，两颗星星迸发出最闪耀的光芒</p>
                <p class="mb-0">————一同坠入深渊。</p>
                `); //设置内容
            } else {
                $("#v-pills-galaxy-tab").attr("class", "nav-link text-secondary"); //添加灰色即secondary
                $("#v-pills-galaxy-tab").attr("data-bs-toggle", "tooltip"); //添加悬停效果
                $("#v-pills-galaxy-tab").attr("data-bs-title", "未达成Galaxy条件。达成条件：曾完成过0-4,且镰的好感达到过7"); //设置悬停文字
                //激活tooltip（悬停时的文本）
                new bootstrap.Tooltip($("#v-pills-galaxy-tab"));
            }

            if (window.local_progress>=5 && window.local_Lianmax>=5) {
                $("#v-pills-hallucination-tab").attr("data-bs-toggle", "pill");
                $("#v-pills-hallucination-tab").attr("data-bs-target", "#v-pills-hallucination"); //设置连接位置
                $("#v-pills-hallucination").html(`
                <p class="mb-0">食腐的乌鸦之国在那遥远的天边。</p>
                <br />
                <p class="mb-0">它们是乌鸦——黑暗的羽衣，无神的双眼，每日无事便叫嚷着想要吃肉。</p>
                <br />
                <p class="mb-0">一旦有一块未剔尽肉的骨头被发现，沾染着黑暗的血与液，乌鸦们的双眼便会在短暂的时间内展现出不解，恍悟，贪婪，渴望等情绪。</p>
                <p class="mb-0">它们一窝蜂而上，只为争取一小块沾染鲜血的肉，哪里还有什么无神？</p>
                <br />
                <p class="mb-0">这里一年四季没有太阳，月亮也不甚明亮。没有什么政府，没有什么中心，只是一盘散沙。</p>
                <br />
                <p class="mb-0">这些乌鸦都长一个样——有些乌鸦则擅长打扮自己。</p>
                <p class="mb-0">在这里，道德是传单上无人问津的抛售品，规矩是子虚乌有的都市传说，法律是可以一拖再拖的闹钟。</p>
                <br />
                <p class="mb-0">乌鸦行为没有意义。它们或许会在某一时刻忽然发起战争，其口号大致也是什么常人理解不了的，并且极喜欢精神胜利，近乎痴迷。</p>
                <p class="mb-0">它们都有一个目的：吃肉。吃完肉，还没擦尽嘴边的血，便嚷嚷着要吃下一块。</p>
                <br />
                <p class="mb-0">天空盘旋着白鸽。这白鸽在乌鸦看来是不详的预兆，给以坚决的反对与冷嘲热讽。</p>
                <p class="mb-0">究其原因，是因为这些白鸽每日能吃一两肉！！！</p>
                <p class="mb-0">这可是大数目，这些乌鸦自然也想获得每日一两肉的施舍，便尽力去将这些白鸽拉下来，自己去当新的白鸽。</p>
                <br />
                <p class="mb-0">当一只乌鸦变成白鸽，它的羽毛首先会变化。</p>
                <p class="mb-0">这变化不是一蹴而就的，这乌鸦可能初期还保留着一部分黑色的羽毛，然而不久后就变成了纯白的，仿佛一尘不染、不容亵渎。</p>
                <p class="mb-0">它们的硬喙变短，双眼变得漆黑而闪过精明的光。不一会，它便扇扇翅膀，腾飞而起——白鸽不屑于与乌鸦同在一片大地上。</p>
                <br />
                <p class="mb-0">这里是食腐之国，从黑夜到白天，从上到下，无不透露出腐烂的气息。</p>
                <p class="mb-0">它们甚至自封圣地，让各地的鸟都来此朝拜。令人可悲的事，仍然有虔诚的信徒来此，再也没有回去。</p>
                <br />
                <p class="mb-0">啊啊，真是糊涂了，乌鸦为什么能说话？</p>
                `); //设置内容
            } else {
                $("#v-pills-hallucination-tab").attr("class", "nav-link text-secondary"); //添加灰色即secondary
                $("#v-pills-hallucination-tab").attr("data-bs-toggle", "tooltip"); //添加悬停效果
                $("#v-pills-hallucination-tab").attr("data-bs-title", "未达成Hallucination条件。达成条件：曾完成过0-5,且镰的好感达到过5"); //设置悬停文字
                //激活tooltip（悬停时的文本）
                new bootstrap.Tooltip($("#v-pills-hallucination-tab"));
            }
            
            if (window.local_CurrentTestLevel>=1) {
                $("#v-pills-isolated-tab").attr("data-bs-toggle", "pill");
                $("#v-pills-isolated-tab").attr("data-bs-target", "#v-pills-isolated"); //设置连接位置
                $("#v-pills-isolated").html(`
                <p class="mb-0">追逐傍晚的落日</p>
                <p class="mb-0">跨过记忆的河流</p>
                <p class="mb-0">荒芜的森林在此伫立。</p>
                <br />
                <p class="mb-0">清冷的太阳从东方升起</p>
                <p class="mb-0">活泼的浅绿在树间蔓延开来。</p>
                <p class="mb-0">昨夜偷偷攀上枝头的藤蔓</p>
                <p class="mb-0">也在阳光的照耀下有了生机。</p>
                <br />
                <p class="mb-0">森林的早晨是清静的。</p>
                <br />
                <p class="mb-0">日上竿头的时分</p>
                <p class="mb-0">即使是蝉鸣也会感到遥远而有距离；</p>
                <p class="mb-0">清澈的流水从指尖划过</p>
                <p class="mb-0">或许也带有令人安心的清凉。</p>
                <br />
                <p class="mb-0">森林的中午是恍惚的。</p>
                <br />
                <p class="mb-0">黄昏染红的半边天下</p>
                <p class="mb-0">满天星也分到了赤色的点滴。</p>
                <p class="mb-0">在家里寂寞一天的小熊</p>
                <p class="mb-0">看到巨硕的归家身影后也能感到满溢的安心。</p>
                <br />
                <p class="mb-0">森林的傍晚是幸福的。</p>
                <br />
                <p class="mb-0">月光悄悄照上树脚的小草</p>
                <p class="mb-0">风也胆小，只敢轻轻掠过叶尖。</p>
                <p class="mb-0">星光攀附在新芽上</p>
                <p class="mb-0">哼着嫩芽钟爱的摇篮曲。</p>
                <br />
                <p class="mb-0">森林的午夜是寂寞的。</p>
                <br />
                <p class="mb-0">一片完全脱离于喧嚣的社会的森林</p>
                <p class="mb-0">一切都会井然运行。</p>
                <br />
                <p class="mb-0">花为请柬</p>
                <p class="mb-0">风为信使</p>
                <p class="mb-0">恳请您来参加</p>
                <p class="mb-0">荒芜森林中的无声庆典。</p>
                `); //设置内容
            } else {
                $("#v-pills-isolated-tab").attr("class", "nav-link text-secondary"); //添加灰色即secondary
                $("#v-pills-isolated-tab").attr("data-bs-toggle", "tooltip"); //添加悬停效果
                $("#v-pills-isolated-tab").attr("data-bs-title", "未达成Isolated条件。达成条件：执行者考核通过Lv1"); //设置悬停文字
                //激活tooltip（悬停时的文本）
                new bootstrap.Tooltip($("#v-pills-isolated-tab"));
            }
            
            if (window.local_Tangmax>=10) {
                //姑且假设这个按钮启用了
                $("#v-pills-Crown1-tab").attr("data-bs-toggle", "pill"); //添加正常查看操作
                $("#v-pills-Crown1-tab").attr("data-bs-target", "#v-pills-Crown1"); //设置连接位置
                $("#v-pills-Crown1").html(`
                <p class="mb-0 ms-3 text-start">当两条路在我面前展开</p>
                <p class="mb-0 ms-3 text-start">我应该何去何从？</p>
                <p class="mb-0 ms-3 text-start">——题记</p>
                <br>
                <p class="mb-0 ms-3 text-start">我知道，我和他们是不同的。</p>
                <p class="mb-0 ms-3 text-start">我是我们家第三个孩子。我的父亲是商人，而我的母亲血脉里有稀薄的他国王室血脉。</p>
                <p class="mb-0 ms-3 text-start">————当然，呵，这王室血脉只是二代的。</p>
                <p class="mb-0 ms-3 text-start">我母亲不甘心。即使她在那一次被剥夺了王室身份，但是骨子里的傲气不会让她轻易融合到平民的生活中。</p>
                <p class="mb-0 ms-3 text-start">正好，我的父亲正想要一个去他国的契机，而一个落魄贵族————多好的跳板？于是便成就了这个婚姻。</p>
                <p class="mb-0 ms-3 text-start">我从小就被灌输贵族礼仪。我的母亲自然不会让我去寻常的幼儿园，她送我去了民办幼儿园，还请了家庭教师。</p>
                <p class="mb-0 ms-3 text-start">她希望我们培养出真正的贵族风范，从而多年后能回到家族让自己收到原属于自己认可。</p>
                <p class="mb-0 ms-3 text-start">认可？</p>
                <p class="mb-0 ms-3 text-start">老实说，或许我以前也确实受到了什么不当人的蛊惑：什么高人一等啊，学习外国文化啦，什么的。这也导致我在小学一直架子很高。</p>
                <p class="mb-0 ms-3 text-start">然而现在，我才隐约意识到，这所谓贵族，并不是什么在天堂中的人上世积德行善所导致。</p>
                <p class="mb-0 ms-3 text-start">社会就是由人搭建而成的金字塔，层层都有严明的上下级关系。每一层的人都拼了命保持自己的阶级，为子嗣铺平接下来的路，同时压榨下层的油水，维护自己所谓的优越感。</p>
                <p class="mb-0 ms-3 text-start">虽然金字塔亘古以来必须存在，但是上世纪刚刚让这金字塔松动，现在仿佛又要变得更紧了。</p>
                <p class="mb-0 ms-3 text-start">现在看来，我觉得自己还挺可笑的。</p>
                <p class="mb-0 ms-3 text-start">这优越感一直保持到那天，我要找一本关于历史的书籍，家里的图书馆也正好没有这书。我母亲便勉为其难陪我去了新华书店。</p>
                <p class="mb-0 ms-3 text-start">她自从进书店起，就开始嫌弃这里的环境差， 人多，嘈杂。</p>
                <p class="mb-0 ms-3 text-start">她拦住了一位年轻人，高傲的头颅微扬：“历史书籍书架在哪里？请带路。”</p>
                <p class="mb-0 ms-3 text-start">那年轻人先是微愣，紧接着忽然爆发出笑声，他笑的腰都直不起来了，真的，我以前一直觉得这样是很无礼的。</p>
                <p class="mb-0 ms-3 text-start">显然我的母亲对于这样的结果也是始料未及。她勉强忍住怒气，微笑着告诉了他自己的身份，末了还补了一句：“纯正的王室血统，为我带路应当是你的荣幸。”</p>
                <p class="mb-0 ms-3 text-start">她在本国时，恭维都要听的无趣了，哪受过这样的羞辱？</p>
                <p class="mb-0 ms-3 text-start">“就是那位被王室赶出来的公主？”那青年一听这话，反而笑得更厉害了，“夫人，我不是想取笑您，但是这里不是你们国家，你在我们国家，你就要学会平等。你们国家贵族待遇这里不适用。”</p>
                <p class="mb-0 ms-3 text-start">哎，现在看来，我就懂了为什么我母亲会被驱逐出来了。真正的贵族礼仪是应当在心里，在骨子里的，而不是流于表面的。</p>
                <p class="mb-0 ms-3 text-start">贵族应当与财主打好关系，从而获得支持，保持自己的地位，这点她还是懂的，但是这点应当适用于真正的贵族。落魄贵族最应当隐忍，这点她是不懂的，大约贵族学校上课时也没有教过。要不就是她上课不认真。</p>
                <p class="mb-0 ms-3 text-start">而且贵族身份真的有什么用吗？能嫁个好人家就是万幸了，还要时刻防止暗杀，太张扬真的会死的更快。</p>
                <p class="mb-0 ms-3 text-start">墨水不够了，少写点吧。</p>
                <p class="mb-0 ms-3 text-start">她气疯了，指着那名青年，嘴里嘟哝着什么，但是总是没找到骂人的脏话，——大概这也是什么贵族学校没教过的。</p>
                <p class="mb-0 ms-3 text-start">然而那名青年的同伴也拉了拉他，他便也没有再说下去。而我的母亲则是匆匆拉着我去找到书后就立刻回家了。</p>
                <p class="mb-0 ms-3 text-start">“今天的事，立刻忘掉，记住了吗？”她冷冷地对我说，双眼的瞳孔紧缩————这是极度愤怒的表现。</p>
                <p class="mb-0 ms-3 text-start">然而这幅原来让我很害怕的容貌也没有什么作用了——当质疑建立，那么一切威严和共识都会失去原来的作用。</p>
                <p class="mb-0 ms-3 text-start">我清楚地知道，这是不对的，但是我已经心生怀疑——她说的真的是对的吗？或者说，这只是她的一厢情愿？</p>
                <p class="mb-0 ms-3 text-start">事实上家里的图书馆也不是所有书都有的，因此我也不得不隔三差五往新华书店跑。第二次母亲是坚持不去了，让管家陪我去新华书店。</p>
                <p class="mb-0 ms-3 text-start">然而我又见到他了——这次见到他，他是在座椅上坐着看书。今天选的书有点多，管家吩咐说他去选书，让我在这里歇息。</p>
                <p class="mb-0 ms-3 text-start">出于好奇，我凑到他旁边，但是靠的又不是太近——远远望着他手中的书，识别着封面上的字——马……？我想要凑近一点看的时候，他忽然把书盖了起来。</p>
                <p class="mb-0 ms-3 text-start">“啊！”我不满出声，但我立刻意识到了错误————他注意到了我，向我这里投来目光。看到呆愣在那里的我，他皱着眉头，“你是……哦！你不是上上周来这里的……小朋友？”他小心翼翼地问。</p>
                <p class="mb-0 ms-3 text-start">“这次你怎么没和你妈一起来？”他抬头四处张望，“小朋友，你觉得你妈妈做得对吗？”</p>
                <p class="mb-0 ms-3 text-start">我点点头，又摇摇头；我不知道她对不对，或者说，我没有资格评判她对不对。</p>
                <p class="mb-0 ms-3 text-start">他好像懂了我的意思，笑了起来：“你倒精明。”于是他掏出之前合上的书，上面赫然写着《马克思，恩格斯著：资本论》：“小朋友，你认识马克思吗？”</p>
                <p class="mb-0 ms-3 text-start">我这次点点头。我之前看历史百科全书的时候确实看到过这个人，也知道马克思主义，但是我问母亲时，母亲总是称其为理想主义，我也不知道为什么。这种主义倘若实施，那必定是十分具有影响力和吸引力，但是在实现过程中的难度是难以想象的。</p>
                <p class="mb-0 ms-3 text-start">“他确实是一个伟大的人。当时工业革命，工厂制度确实提高了生产力，但是这样诞生了一大批底层的工人。他们受尽压迫……”他的精神明显兴奋起来，说话便滔滔不绝，“于是他们中便出现了先驱者，遵循着人类本性的指引，意图回复平等的世界秩序……”</p>
                <p class="mb-0 ms-3 text-start">他的言辞虽然工整，却能感受得到，他说这些话是十分自然的。他的内容是对我而言以前是无从触碰的。现在想来，他大概是觉得我是可以教导的，可以开导的。</p>
                <p class="mb-0 ms-3 text-start">于是这些概念便如流水向我脑里涌来了：无政府状态，自由主义，利己主义者，等等等等。我自然听不懂，但是他说到兴致上我也无从打断。</p>
                <p class="mb-0 ms-3 text-start">管家的脚步忽然响起，我才知道我已经过去了很久——我连忙后退两步，和他摆摆手，他却一把抓住我，把一本书塞到我的手里：“你要走吗？带着这本书，这本书很有意义。拿着！不要丢了！”</p>
                <p class="mb-0 ms-3 text-start">他的力气很大，我无从挣脱，然而我能感受到他没有恶意。我小心翼翼把它收到我的衣服内，然后从容走出那里，跑到管家身边，拉住他的手。</p>
                <p class="mb-0 ms-3 text-start">此刻，我的心仍然怦怦直跳。这是我第一次偷偷摸摸带东西回家，到现在那种紧张、担忧、兴奋，落在纸上仍然是活的。</p>
                <p class="mb-0 ms-3 text-start">《马克思与恩格斯选集》，这名字我还记忆犹新。我那天并没有读那本书，只是把它放在了枕头下。然而我的精神，却比熬夜偷偷读书更为兴奋。看那门前闪过的灯光，我以为书被发现了，连忙偷偷把它藏进我的睡衣里，等确认只是姐姐起来上厕所，我又仿佛大舒一口气，偷偷又把书放到枕头下。我一直没敢打开那本书。</p>
                <p class="mb-0 ms-3 text-start">迷迷糊糊睡着后，我做了一个梦。</p>
                <p class="mb-0 ms-3 text-start">我梦到我站在一条河边，那条河仿佛浅而窄，其中的水潺潺流淌；然而某些时刻，那水下偶尔闪过黑暗的涡流，强大到令人心惊。</p>
                <p class="mb-0 ms-3 text-start">只是看一眼，我仿佛就要被漩涡吸附；当我已经半只脚踏入旋涡中时，我陡然惊醒，看向窗外。依然是漆黑的夜。</p>
                <p class="mb-0 ms-3 text-start">今天就写这么多吧。</p>
                <p class="mb-0 ms-3 text-start">忽然好想晒太阳啊。不知道升日圣地，为什么总是阴雨绵绵，没有太阳呢？</p>
                `); //设置内容
            } else {
                $("#v-pills-Crown1-tab").attr("class", "nav-link text-secondary"); //添加灰色即secondary
                $("#v-pills-Crown1-tab").attr("data-bs-toggle", "tooltip"); //添加悬停效果
                $("#v-pills-Crown1-tab").attr("data-bs-title", "未达成“遇见”条件。达成条件：裴良谨好感最高达到过10."); //设置悬停文字
                //激活tooltip（悬停时的文本）
                new bootstrap.Tooltip($("#v-pills-Crown1-tab"));
            }

            if (window.local_Tangmax>=20) {
                //姑且假设这个按钮启用了
                $("#v-pills-Crown2-tab").attr("data-bs-toggle", "pill"); //添加正常查看操作
                $("#v-pills-Crown2-tab").attr("data-bs-target", "#v-pills-Crown2"); //设置连接位置
                $("#v-pills-Crown2").html(`
                <p class="mb-0">想看吗？</p>
                <p class="mb-0">没写完，你确定要看？</p>
                `); //设置内容
            } else {
                $("#v-pills-Crown2-tab").attr("class", "nav-link text-secondary"); //添加灰色即secondary
                $("#v-pills-Crown2-tab").attr("data-bs-toggle", "tooltip"); //添加悬停效果
                $("#v-pills-Crown2-tab").attr("data-bs-title", "未达成“宴会”条件。达成条件：裴良谨好感最高达到过20."); //设置悬停文字
                //激活tooltip（悬停时的文本）
                new bootstrap.Tooltip($("#v-pills-Crown2-tab"));
            }
        },
        (error) => {
           alertError(error.message + "（你可以点击注销并重新登录）");
        }
    );
});
