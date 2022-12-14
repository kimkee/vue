
const ui = {
	init:function(){
		console.log("ui.init();");
		this.gnb.init();
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
	userinfo : {
		stat:'',
		email:'',
		uid:''
	}
}
