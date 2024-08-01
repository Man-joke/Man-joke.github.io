var quizData = new Object();
quizData[1] =
{
	"hint-num":"1",
	"ans":"2",
	"title":"위치고정형 배치의 장점이 <span>아닌</span> 것은?",
	"txt1":"생산품의 이동을 최소화할 수 있다.",
	"txt2":"기계설비의 가동률이 좋아진다.",
	"txt3":"다양한 제품을 신축성 있게 제조할 수 있다.",
	"txt4":"크고 복잡한 제품 생산에 적합하다.",
	"ans_txt":"제품 위치가 고정되고 설비가 이동하므로 이용률이 낮아집니다."
}


quizData[2] =
{
	"hint-num":"1",
	"ans":"3",
	"title":"가치 생산에 직접 참여하는 내부 근로자는 어떤 고객 유형에 해당하는가?",
	"txt1":"최종 고객",
	"txt2":"외부 고객",
	"txt3":"내부 고객",
	"txt4":"중간 고객",
	"ans_txt":"가치 생산에 직접 참여하는 고객으로 내부 근로자를 내부 고객으로 분류할 수 있습니다."
}


quizData[3] =
{
	"hint-num":"1",
	"ans":"3",
	"title":"생산자원 4M1E에 해당하지 <span>않는</span> 것은?",
	"txt1":"Material",
	"txt2":"Machine",
	"txt3":"Manufacturing",
	"txt4":"Energy",
	"ans_txt":"4M1E는 Man, Machine, Material, Method, Environment 또는 Energy의 약어로 생산 현장의 생산 자원을 의미합니다."
}


function setQuiz()
{
	effectC = new soundEffect();

	setQuizUI();
	setQuizEvent();

	$("#quizUI-start-btn").off("click").on("click",function(){
		effectC.play("click");

		$("#quizUI").show();
	})
}

function setQuizUI()
{
	var isEx = false;
	var obj = ''
	obj +=	'<div id="quiz-page">';
	obj +=		'<button id="quizUI-start-btn"></button>';

	obj +=		'<div id="quizUI">';
	obj +=			'<div id="quiz-title"></div>';
	obj +=			'<div id="quiz-tab-box">';
	for (var i = 1; i<=3; i++)
	{
	obj +=				'<div id="tab'+i+'" class="quiz-tab"></div>';
	}
	obj +=			'</div>';
	obj +=		'</div>';
	obj +=	'</div>';
	$("#container").append(obj);

	obj = '';
	for (var i = 1; i<=Object.keys(quizData).length; i++)
	{
		obj +=	'<div class="quiz-box">';
		obj +=		'<div class="question-box">'
		obj +=			'<div class="quiz-num q'+i+'"></div>';
		obj +=			'<div class="quiz-txt"><p>'+quizData[i].title+'</p></div>';
		obj +=		'</div>';

		isEx = false;
		if(quizData[i].ex )
		{
			isEx = true;
			obj +=		'<div class="ex-box">';
			obj +=			'<p>'+quizData[i].ex+'</p>';
			obj +=		'</div>'
		}

		if(quizData[i].type == "ox" )
		{
				obj +=		'<div class="ox-box">';
				obj +=			'<div class="ox-btn-o"><p></p></div>';
				obj +=			'<div class="ox-btn-x"><p></p></div>';
				obj +=		'</div>';
		}
		else
		{
			obj +=		'<div class="btn-box ex-box-'+isEx+'">'
			for (var j = 1; j<=4; j++)
			{
			obj +=			'<div class="txt-btn"><p><span>'+j+'</span>'+quizData[i]["txt"+j]+'</p></div>';
			}
			obj +=		'</div>';
		}

		obj +=		'<div class="hint-pop">';
		obj +=			'<div class="hint-box">';
		obj +=				'<div class="hint-close-btn"></div>';
		obj +=				'<div class="hint-box-con">';
		for (var j = 1; j<=Number(quizData[i]["hint-num"]); j++)
		{
		obj +=					'<img src="./quiz/img/hint_'+i+'_'+j+'.png"/>';
		}

		//obj +=					'<img src="./quiz/img/hint_'+i+'.png"/>';
		obj +=				'</div>';
		obj +=			'</div>';
		obj +=		'</div>';

		obj +=		'<div class="feed-box">';
		obj +=			'<div class="feed-box-num">';
		if(quizData[i].type == "ox" )
		{
			obj +=				'<p><span>';
			obj +=				(Number(quizData[i]["ans"]) == 1 || Number(quizData[i]["ans"]) == "1" ) ? "O" : "X";
			obj +=				'</span></p>';
		}
		else
		{
			obj +=				'<p><span>'+quizData[i]["ans"]+'</span></p>';
		}
		obj +=			'</div>';
		obj +=			'<div class="feed-box-txt">';
		obj +=				'<div class="feed-box-txt-scroll">';
		obj +=					'<p><span></span>'+quizData[i]["ans_txt"]+'</p>';
		obj +=				'</div>';
		obj +=			'</div>';

		obj +=		'<div class="hint-btn"></div>';

		if( i == Object.keys(quizData).length )
		{
		obj +=		'<div class="feed-btn result-btn"></div>';
		}
		else
		{
		obj +=		'<div class="feed-btn next-btn"></div>';
		}

		obj +=	'</div>';
		obj +='</div>';
	}
	obj +=	'<div id="alert-img"></div>';

	obj +=	'<div id="result-box">';
	obj +=		'<div id="result-txt"><p>총 <span id="result-txt-total">3문제</span> 중 <span id="result-txt-ans">2</span><span class="cursmall">문제</span>를 맞히셨습니다. </p></div>';

	obj +=		'<div id="result-ox-1" class="result-ox"></div>';
	obj +=		'<div id="result-ox-2" class="result-ox"></div>';
	obj +=		'<div id="result-ox-3" class="result-ox"></div>';
	obj +=		'<div id="result-replay-btn"></div>';
	obj +=		'<div id="result-replay-all-btn"></div>';
	obj +=		'<div id="result-ans-view-btn"></div>';
	// obj +=		'<div id="summary-view-btn"></div>';
	obj +=	'</div>';

	$("#container #quizUI").append(obj);

	$("#container #quizUI .quiz-box .hint-box-con").mCustomScrollbar({
		scrollInertia : 1,
		theme:"dark"
	});

	$("#container #quizUI .quiz-box .feed-box-txt-scroll").mCustomScrollbar({
		scrollInertia : 1
	});
	/*$("#container #quizUI .quiz-box .hint-box-con").each(function(){
		if( $(this).find("img").length == 1 )
		{
			$(this).removeClass("img-center").addClass("img-center");
		}
	})*/
}

var intervalId;
function setQuizEvent()
{

	var isView = false;
	var replayMode = false;
	var alertImg = $("#alert-img");
	var resultBox = $("#result-box");

	var box = $(".quiz-box");
	var tab = $("#quiz-tab-box .quiz-tab");
	var userArr = new Array();
	var replayQuiz = new Array();
	var ansNum = 0;

	var replayBtn = $("#result-replay-btn");
	var replayAllBtn = $("#result-replay-all-btn");
	var viewBtn = $("#result-ans-view-btn");
	var summaryBtn = $("#summary-view-btn");

	replayBtn.hide();
	replayAllBtn.hide();
	viewBtn.hide();
	summaryBtn.hide();

	box.hide().eq(0).show();
	tab.removeClass("view").removeClass("o").removeClass("x").removeClass("on").eq(0).addClass("on");
	tab.off("click");
	resultBox.hide();
	clearInterval(intervalId);
	alertImg.stop();
	alertImg.hide();
	alertImg.removeClass("again");

	replayBtn.off("click").on("click",function(){
		replayMode = true;
		isView = false;
		effectC.play("click");
		resultBox.hide();
		var num = 0;
		var temp = false;
		for(var i = 0; i<replayQuiz.length; i++)
		{
			if(replayQuiz[i] == true )
			{
				tab.eq(i).removeClass("o").removeClass("x");
				if(temp == false)
				{
					temp = true;
					num = i;
				}
			}
		}

		box.hide().eq(num).show();
		tab.off("click").removeClass("view").removeClass("on").eq(num).addClass("on");
		resultBox.hide();
		replayBtn.hide();
		replayAllBtn.hide();
		viewBtn.hide();
		summaryBtn.hide();

		startQuizEvent();
	});

	replayAllBtn.off("click").on("click",function(){
		effectC.play("click");
		setQuizEvent();
	})
	viewBtn.off("click").on("click",function(){
		replayMode = false;
		effectC.play("click");
		isView = true;

		box.hide().eq(0).show();
		tab.removeClass("view").addClass("view").removeClass("on").eq(0).addClass("on");
		$(".feed-btn").removeClass("result-btn").removeClass("next-btn").addClass("result-btn");
		resultBox.hide();
		quizTabEvent();
	})
	function quizTabEvent()
	{
		tab.off("click").on("click",function(){
			effectC.play("click");

			var index = tab.index( $(this) );

			box.hide().eq(index).show();
			tab.removeClass("view").addClass("view").removeClass("on").eq(index).addClass("on");
		})
	}
	function startQuizEvent()
	{
		box.each(function(i){
			var index = Number(i);
			var quizBox = $(this);
			var quizNum = Number(index)+1;
			var quizNumBox = quizBox.find(".quiz-num");
			var feedBox = quizBox.find(".feed-box");
			var feedBtn = feedBox.find(".feed-btn");
			var hintBtn = feedBox.find(".hint-btn");
			var ans = Number(quizData[quizNum].ans) - 1;
			var chance = 2;
			var hintBox = quizBox.find(".hint-pop");
			/*default*/
			var quizType = "";
			var btn = quizBox.find(".btn-box > div > p");

			if( (replayMode && replayQuiz[index] == true) || replayMode == false )
			{
				feedBtn.removeClass("result-btn").removeClass("next-btn");
				if( quizNum == "3" || quizNum == 3 ) feedBtn.addClass("result-btn");
				else feedBtn.addClass("next-btn");

				if( quizData[quizNum].type == "ox" )
				{
					quizType = "ox";
					var btn = quizBox.find(".ox-box > div > p");

					chance = 1
				}

				btn.parent().removeClass("on").removeClass("click").removeClass("ans");
				hintBox.hide();
				feedBox.hide();
				quizBox.removeClass("ok").removeClass("no");
				quizNumBox.removeClass("o").removeClass("x");

				btn.off("click").on("click",btnClickEvent);
				btn.off("mouseenter").on("mouseenter",btnEnterEvent);
				btn.off("mouseleave").on("mouseleave",btnLeaveEvent);
			}

			function btnClickEvent()
			{
				effectC.play("click");

				btn.parent().removeClass("on").removeClass("click");
				$(this).parent().addClass("on").addClass("click");

				if( isAns() )
				{
					effectC.play("ok");
					lastSet(true);
				}
				else
				{
					--chance;
					if(chance==0)
					{
						effectC.play("no");
						lastSet(false);
					}
					else
					{
						effectC.play("again");
						alertEvent("again",function(){
							btn.parent().removeClass("on").removeClass("click");
							btn.off("click").on("click",btnClickEvent);
							btn.off("mouseenter").on("mouseenter",btnEnterEvent);
							btn.off("mouseleave").on("mouseleave",btnLeaveEvent);
						});
					}
				}
			}
			function btnEnterEvent()
			{
				if( !$(this).parent().hasClass("on") )
				{
					$(this).parent().addClass("on");
				}
			}
			function btnLeaveEvent()
			{
				if( !$(this).parent().hasClass("click") )
				{
					$(this).parent().removeClass("on");
				}
			}
			function isAll()
			{
				var bool = true;
				btn.each(function(i){
					if( $(this).parent().hasClass("click") ) bool = false;
				})
				return bool;
			}
			function isAns()
			{
				var userNum;
				btn.each(function(i){
					if( $(this).parent().hasClass("click") ) userNum = i;
				})
				return (userNum == ans);
			}
			function lastSet($bool)
			{
				btn.off("click mouseenter mouseleave").removeClass("ans").eq( ans ).parent().removeClass("on").addClass("ans");
				userArr[quizNum] = $bool;
				quizNumBox.removeClass("o").removeClass("x");
				tab.eq(index).removeClass("o").removeClass("x");

				if($bool)
				{
					replayQuiz[index] = false;
					++ansNum;
					quizNumBox.addClass("o");
					tab.eq(index).addClass("o");
					quizBox.removeClass("ok").removeClass("no").addClass("ok");
					resultBox.find("#result-ox-"+quizNum).removeClass("o").removeClass("x").addClass("o");
				}
				else
				{
					replayQuiz[index] = true;
					quizNumBox.addClass("x");
					tab.eq(index).addClass("x");
					quizBox.removeClass("ok").removeClass("no").addClass("no");
					resultBox.find("#result-ox-"+quizNum).removeClass("o").removeClass("x").addClass("x");
				}
				if(replayMode)
				{
					var num = 0;
					for(var i = (index+1); i<replayQuiz.length; i++)
					{
						if(replayQuiz[i] == true )
						{
							++num;
						}
					}
					if( num == 0) feedBtn.removeClass("result-btn").removeClass("next-btn").addClass("result-btn");
				}

				feedBox.show();
				hintBtn.off("click").on("click",function(){
					effectC.play("click");
					hintBox.show();

					hintBox.find(".hint-close-btn").off("click").on("click",function(){
						effectC.play("click");
						hintBox.hide();
					})
				})
				feedBtn.off("click").on("click",function(){
					effectC.play("click");
					if( $(this).hasClass("result-btn") )
					{
						resultBox.find("#result-txt #result-txt-ans").text(ansNum);
						viewBtn.show();
						summaryBtn.show();
						if(ansNum==3) replayAllBtn.show();
						else replayBtn.show();

						resultBox.show();
					}
					else
					{
						if(replayMode)
						{
							var num = 0;
							var temp = false;
							for(var i = (index+1); i<replayQuiz.length; i++)
							{
								if(replayQuiz[i] == true && temp == false )
								{
									temp = true;
									num = i;
								}
							}
							box.hide().eq( num ).show();
							tab.removeClass("on").eq(num).addClass("on");
						}
						else
						{
							box.hide().eq( quizNum ).show();
							tab.removeClass("on").eq(quizNum).addClass("on");
						}
					}
				})
			}


		})
	}
	startQuizEvent();

	function alertEvent($str, $func)
	{
		clearInterval(intervalId);
		alertImg.stop();
		alertImg.hide();
		alertImg.removeClass("again");
		alertImg.addClass($str);
		alertImg.fadeIn(function(){
			clearInterval(intervalId);

			intervalId = setInterval(function(){
				clearInterval(intervalId);
				alertImg.fadeOut(function(){
					if( typeof $func === "function")
					{
						$func();
					}
				});
			},2000);
		});
	}
}
