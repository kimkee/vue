const ui = {
    init: function () {
        console.log("ui.init();");
        // this.gnb.init();
        this.update();
    },
    update: function () {
        this.gnb.using("close");
    },
    viewport: {
        height: () => parseInt(window.visualViewport ? visualViewport.height : window.innerHeight),
        width: () => parseInt(window.visualViewport ? visualViewport.width : window.innerWidth),
        docHeight: () => parseInt(document.documentElement.scrollHeight || document.body.clientHeight),
        scrollTop: () => parseInt(document.documentElement.scrollTop)
    },
    test: {
        using: function (target) {
            console.log(target.tagName);
            target.classList.toggle('d');
        }
    },
    gnb: { // GNB 
        using: function (opt) {
            const gnbScreen = document.querySelector(".gnb-screen");
            if (opt === "open") {
                console.log(opt);
                document.querySelector("body").classList.add("is-gnb");
                if (gnbScreen) document.querySelector(".gnb-screen").style.display = "block";
                ui.lock.using(true);
            }
            if (opt === "close") {
                console.log(opt);
                document.querySelector("body").classList.remove("is-gnb");
                if (gnbScreen) document.querySelector(".gnb-screen").style.display = "none";
                ui.lock.using(false);
            }
        }
    },
    scrollTo: (selector, position, duration, callback) => {
        // ui.scrollTo(boxElement, 100, 200, () => {
        //     console.log(".box 도착");
        // });
        const element = document.querySelector(selector);
        if (!element) return;
        console.log(element);
        const startingYOffset = element.scrollTop || document.documentElement.scrollTop;
        const targetYOffset = position;
        const startTime = performance.now();

        const animateScroll = (timestamp) => {
            const currentTime = timestamp - startTime;
            const progress = Math.min(currentTime / duration, 1);
            const easeInOutCubic = progress < 0.5 ? 4 * progress * progress * progress : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;
            const yOffset = startingYOffset + (targetYOffset - startingYOffset) * easeInOutCubic;

            if (element === document.body) {
                window.scrollTo(0, yOffset);
            } else {
                element.scrollTop = yOffset;
            }

            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            } else {
                if (typeof callback === 'function') {
                    callback();
                }
            }
        };

        requestAnimationFrame(animateScroll);
    },
    timeForm: function (date, opt) {
        const start = new Date(date);
        const end = new Date(); // 현재 날짜
        const diff = (end - start) / 1000; // 경과 시간
        const times = [
            { name: '년', milliSeconds: 60 * 60 * 24 * 365, icon: '<i class="fa-regular fa-calendar-days"></i>' },
            { name: '개월', milliSeconds: 60 * 60 * 24 * 30, icon: '<i class="fa-regular fa-calendar-days"></i>' },
            { name: '일', milliSeconds: 60 * 60 * 24, icon: '<i class="fa-regular fa-calendar-days"></i>' },
            { name: '시간', milliSeconds: 60 * 60, icon: '<i class="fa-regular fa-clock"></i>' },
            { name: '분', milliSeconds: 60, icon: '<i class="fa-regular fa-clock"></i>' },
        ];
        // 년 단위부터 알맞는 단위 찾기
        for (const value of times) {
            const betweenTime = Math.floor(diff / value.milliSeconds);
            // 큰 단위는 0보다 작은 소수 단위 나옴
            if (betweenTime > 0) {
                if (opt == true) {
                    return `${betweenTime}${value.name} 전`;
                } else {
                    return `${value.icon} <b>${betweenTime}${value.name} 전</b>`;
                }
            }
        }
        // 모든 단위가 맞지 않을 시
        return "방금 전";
    },
    dateForm: (date, opt)=> {
        opt = opt === undefined ? opt = 'medium' : null;
        return new Intl.DateTimeFormat('ko-KR', { dateStyle: opt, timeStyle: opt }).format(date);
    },
    timeVer: function (params) {
        const d = new Date();
        let opt = Object.assign({
            YY: d.getFullYear(),
            MM: d.getMonth() + 1,
            DD: d.getDate(),
            HH: d.getHours(),
            MN: d.getMinutes(),
            SC: d.getSeconds(),
        }, params);

        return opt.YY + "" + opt.MM + "" + opt.DD + "" + opt.HH + "" + opt.MN + "" + opt.SC;
    },
    /*
    randomStr: (length = 6) => { // 댓글마다 유니크한 아이디 정하기
        return Math.random().toString(16).substr(2, length);
    }, 
    */
    randomStr: (length = 6 ) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomIndex);
        }
        return randomString;
    },
    rex: {
        pattern: {
            'email': /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g,
            'url': /(?:(?:(https?|ftp|telnet):\/\/|[\s\t\r\n\[\]\`\<\>\"\'])((?:[\w$\-_\.+!*\'\(\),]|%[0-9a-f][0-9a-f])*\:(?:[\w$\-_\.+!*\'\(\),;\?&=]|%[0-9a-f][0-9a-f])+\@)?(?:((?:(?:[a-z0-9\-가-힣]+\.)+[a-z0-9\-]{2,})|(?:[\d]{1,3}\.){3}[\d]{1,3})|localhost)(?:\:([0-9]+))?((?:\/(?:[\w$\-_\.+!*\'\(\),;:@&=ㄱ-ㅎㅏ-ㅣ가-힣]|%[0-9a-f][0-9a-f])+)*)(?:\/([^\s\/\?\.:<>|#]*(?:\.[^\s\/\?:<>|#]+)*))?(\/?[\?;](?:[a-z0-9\-]+(?:=[^\s:&<>]*)?\&)*[a-z0-9\-]+(?:=[^\s:&<>]*)?)?(#[\w\-]+)?)/gmi,
            'hash': /#([0-9a-zA-Z가-힣]*)/g
        },
        replace: {
            'email': function (_email) { return '<a href="mailto:' + _email + '">' + _email + '</a>' },
            'url': function (_url) { return '<a href="' + _url + '" target="_blank">' + _url + '</a>' },
            'hash': function (_hash) { return '<a class="ui-hash" href="javascript:;">' + _hash + '</a>' }
        },
    },
    textHtml: (text, opt) => {
        // console.log(text,opt);
        if (opt == 'incode') { return text.replace(/\u0020/g, '&nbsp;').replace(/\n/g, '<br>'); }
        if (opt == 'decode') { return text.replace(/<br>/ig, '\n').replace(/&nbsp;/g, '\u0020'); }
    },
    loading: { // 로딩중..
        show: function () {
            if (!document.querySelectorAll("body>.ui-loading-dot").length) {
                // var els = '<div class="ui-loading"><em></em></div>';
                var els =
                    `<div class="ui-loading-dot">
                    <div class="bx"><em><i></i></em></div>
                </div>`;
                document.querySelector("body").insertAdjacentHTML("afterbegin", els);
                document.querySelector("body").classList.add("is-loading");
            }
        },
        hide: function () {
            document.querySelectorAll(".ui-loading-dot").forEach(el => el.remove());
            document.querySelector("body").classList.remove("is-loading");
        }
    },
    alert: function (msg, params) { // 커스텀 알럿

        let opt = Object.assign({
            msg: msg,
            tit: "",
            cls: "",
            ycb: "",
            ybt: "확인"
        }, params);

        if (document.querySelectorAll(".ui-alert").length) return;

        ui.lock.using(true);
        // console.log(opt.tit);

        var lyAlert =
            `<article class="ui-alert ${opt.cls}" tabindex="0">
            <div class="pbd">
                <div class="phd"><span class="ptit">${opt.tit}</span></div>
                <div class="pct"><div class="msg">${opt.msg}</div></div>
                <div class="pbt">
                    <button type="button" class="btn btn-confirm">${opt.ybt}</button>
                </div>
                <!-- <button type="button" class="btn-close"><i class="fa-regular fa-xmark"></i></button> -->
            </div>
        </article>`;
        const body = document.querySelector("body");
        body.insertAdjacentHTML("beforeend", lyAlert);

        const uiAlert = document.querySelector(".ui-alert");
        body.classList.add("is-alert");
        setTimeout(() => uiAlert.classList.add("open"));
        opt.tit && uiAlert.querySelector(".pbd>.phd").classList.add("is-tit");

        uiAlert.focus();
        uiAlert.querySelector(".btn-confirm").addEventListener("click", () => window.setTimeout(opt.ycb));

        uiAlert.querySelectorAll(".btn-confirm, .btn-close").forEach((btn) => { btn.addEventListener("click", alertClose); })
        // $(".ui-alert").find(".btn-close , .btn-confirm").on("click",alertClose);

        function alertClose() {
            uiAlert.remove();
            body.classList.remove("is-alert");
            if (document.querySelectorAll(".pop-layer").length < 1) {
                ui.lock.using(false);
            }
        }
    },
    confirm: function (msg, params) { // 커스텀 컨펌

        let opt = Object.assign({
            msg: msg,
            tit: "",
            cls: "",
            ycb: "",
            ybt: "확인",
            ncb: "",
            nbt: "취소"
        }, params);

        if (document.querySelectorAll(".ui-confrim").length) return;

        ui.lock.using(true);

        let lyConfirm =
        `<article class="ui-confrim ${opt.cls}" tabindex="0">
            <div class="pbd">
                <div class="phd"><span class="ptit">${opt.tit}</span></div>
                <div class="pct"><div class="msg">${opt.msg}</div></div>
                <div class="pbt">
                    <button type="button" class="btn btn-cancel">${opt.nbt}</button>
                    <button type="button" class="btn btn-confirm">${opt.ybt}</button>
                </div>
                <!-- <button type="button" class="btn-close"><i class="fa-regular fa-xmark"></i></button> -->
            </div>
        </article>`;
        const body = document.querySelector("body");
        body.insertAdjacentHTML("beforeend", lyConfirm);

        const uiConfirm = document.querySelector(".ui-confrim");
        body.classList.add("is-confrim");
        setTimeout(() => uiConfirm.classList.add("open"));
        opt.tit && uiConfirm.querySelector(".pbd>.phd").classList.add("is-tit");
        uiConfirm.focus();
        uiConfirm.querySelector(".btn-confirm").addEventListener("click", () => window.setTimeout(opt.ycb));
        uiConfirm.querySelector(".btn-cancel").addEventListener("click", () => window.setTimeout(opt.ncb));

        uiConfirm.querySelectorAll(".btn-confirm, .btn-close , .btn-cancel").forEach((btn) => { btn.addEventListener("click", confirmClose); })

        function confirmClose() {
            uiConfirm.remove();
            body.classList.remove("is-confrim");
            if (document.querySelectorAll(".pop-layer").length < 1) {
                ui.lock.using(false);
            }
        }
    },
    lock: { // 스크롤 막기,풀기
        sct: 0,
        stat: false,
        els: ".pop-layer  , .ui-confrim , .ui-alert",
        set: function () {
            if (document.querySelectorAll(this.els).length <= 0) {
                this.using(false);
            }
        },
        using: function (opt) {
            const body = document.querySelectorAll("body , html");
            const html = document.querySelector("html");
            if (opt === true && this.stat === false) {
                this.stat = true;
                ui.lock.sct = window.scrollY;
                body.forEach(body => body.classList.add("is-lock", "is-lock-end"));
                html.style.top = -ui.lock.sct + "px";
                // $(this.els).bind("touchmove scroll", function(e){ e.preventDefault(); });
            }
            if (opt === false && document.querySelectorAll(this.els).length <= 0 && html.classList.contains("is-lock")) {
                this.stat = false;
                body.forEach(body => body.classList.remove("is-lock"));
                html.style.top = "";
                window.scrollTo(0, ui.lock.sct)
                // $(this.els).unbind("touchmove scroll");
                setTimeout(() => {
                    body.forEach(body => body.classList.remove("is-lock-end"));
                }, 50);
            }
        }
    },
};
window.ui = ui;
export default ui;