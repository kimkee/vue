const ui = {
    init:function(){
        console.log("ui.init();");
        this.gnb.init();
        
    },
    viewport:{
        height:    ()=> parseInt( window.visualViewport ? visualViewport.height : window.innerHeight ),
        width: 	   ()=> parseInt( window.visualViewport ? visualViewport.width : window.innerWidth ),
        docHeight: ()=> parseInt( document.documentElement.scrollHeight || document.body.clientHeight ),
        scrollTop: ()=> parseInt( document.documentElement.scrollTop )
    },
    test:{
        using:function(target){
            console.log(target.tagName);
            target.classList.toggle('d');
            
        }
    },
    gnb: { // GNB 
        init: function() {
            const _this = this;
            const isGnb = document.querySelector("body").classList.contains("is-gnb")
            document.querySelector("#btn-gnb")?.addEventListener("click", function(){
                if (isGnb) {
                    // _this.using("close");
                } else {
                    _this.using("open");
                }
            });
            document.querySelector("nav.gnb .bt.close")?.addEventListener("click", function(){
                ui.gnb.using("close");			
            });
            document.querySelectorAll(".gnb-screen, nav.gnb .bt ")?.forEach( bt => {
                bt.addEventListener("click", function(){
                    ui.gnb.using("close");			
                });
            });
            //ui.gnb.using("open");
/* 			var _this = this;
            $(document).on("click", ".btn-gnb", function() {
                if ($("body").hasClass("is-gnb")) {
                    _this.using("close");
                } else {
                    _this.using("open");
                }
            });
            $(document).on("click", ".gnb-screen , nav.gnb .bt.close", function() {
                _this.using("close");
            }); */
        },
        using: function(opt) {
            const gnbScreen = document.querySelector(".gnb-screen");
            if (opt === "open") {
                console.log(opt);
                document.querySelector("body").classList.add("is-gnb");
                if(gnbScreen )document.querySelector(".gnb-screen").style.display = "block";

                // ui.lock.using(true);
                // $("nav.gnb").after('<div class="gnb-screen" tabindex="-1"></div>');
                // $("nav.gnb").show().animate({"left": 0}, 300,function(){
                    // $("nav.gnb .bts .bt.close").attr("tabindex","-1").focus();
                // });
                // $("body").addClass("is-gnb");
                // $(".gnb-screen").show();
            }
            if (opt === "close") {
                console.log(opt);
                document.querySelector("body").classList.remove("is-gnb");
                if(gnbScreen )document.querySelector(".gnb-screen").style.display = "none";
                // $("nav.gnb").animate({"left": "-100%"}, 300,function(){
                // 	$("body").removeClass("is-gnb");
                // 	$(".gnb-screen").hide().remove();
                // 	$("nav.gnb").hide();
                // 	$(".btn-gnb").attr("tabindex","0").focus();
                // });
                // ui.lock.using(false);
            }
            // const isGnb = document.querySelector("body").classList.contains("is-gnb")
            // document.querySelector("nav.gnb").addEventListener('transitionend', (e) =>{
            // 	console.log(e.propertyName , isGnb);
            // 	if (isGnb) {
            // 		document.querySelector(".gnb-screen").style.display = "block";
            // 	}else{
            // 		document.querySelector(".gnb-screen").style.display = "hide";
            // 	}
            // });
        }
    },
    time: function(date) {
        const start = new Date(date);
        const end = new Date(); // 현재 날짜
        
        const diff = (end - start) / 1000; // 경과 시간
        
        const times = [
            { name: '년', milliSeconds: 60 * 60 * 24 * 365, icon: '<i class="fa-solid fa-calendar-days"></i>' },
            { name: '개월', milliSeconds: 60 * 60 * 24 * 30, icon: '<i class="fa-solid fa-calendar-days"></i>' },
            { name: '일', milliSeconds: 60 * 60 * 24, icon: '<i class="fa-solid fa-calendar-days"></i>' },
            { name: '시간', milliSeconds: 60 * 60, icon: '<i class="fa-solid fa-clock"></i>' },
            { name: '분', milliSeconds: 60 , icon: '<i class="fa-solid fa-clock"></i>'},
        ];
        
        // 년 단위부터 알맞는 단위 찾기
        for (const value of times) {
            const betweenTime = Math.floor(diff / value.milliSeconds);
                
            // 큰 단위는 0보다 작은 소수 단위 나옴
            if (betweenTime > 0) {
                return `${value.icon} <b>${betweenTime}${value.name} 전</b>`;
            }
        }
        
        // 모든 단위가 맞지 않을 시
        return "방금 전";
    }
};
