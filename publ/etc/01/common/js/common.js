var effectC;
var con_w = 1280;
var con_h = 720;

$(window).load(function(){
	uiResizeEvent();
});
$(window).resize(function(e){
	uiResizeEvent();
});
$(window).on("orientationchange", function(){
	uiResizeEvent();
});
$(document).ready(function(){
	uiResizeEvent();
	setQuiz();
})

function soundEffect($id)
{
	var _this = this;
	var _isPause = false;
	var _url   = "./effect/";
	var _file  = "click";
	var _state = "";
	var _tag   = '<audio id="effect"><source type="audio/mpeg"></source></audio>';
	if( $id )
	{
		_tag   = '<audio id="'+$id+'"><source type="audio/mpeg"></source></audio>';
	}

	$("body").append(_tag);

	var audio = $('#effect')[0];
	if( $id )
	{
		audio = $("#" + $id )[0];
	}
	_this.audio = audio;

	_this.play = function(_name)
	{
		switch (_name)
		{
			case "click":
				_file = "click";
			break;
			case "no":
				_file = "no";
			break;
			case "ok":
				_file = "ok";
			break;
			case "again":
				_file = "again";
			break;
			default:
				_file = "click";
		}

		audio.pause();
		audio.src = _url + _file + ".mp3";
		audio.load();

		audio.addEventListener("loadedmetadata", function(){
			_state = "loadedMetadata";
		});

		audio.play();
	}
	_this.stop = function()
	{
		audio.pause();
	}
}


function uiResizeEvent()
{
	var wrapEle = $("#content_inner");
	var windowRatio = 1;
	var windowRatioWidth = $(window).width();
	var windowRatioHeight = $(window).height();
	var customH = con_h;

	if( windowRatioWidth >= con_w && windowRatioHeight >= customH)
	{
		windowRatio = 1;
	}
	else if( windowRatioWidth > windowRatioHeight )
	{
		windowRatio = windowRatioWidth / con_w;
		if( windowRatio > (windowRatioHeight / customH) ) windowRatio = (windowRatioHeight / customH);
	}
	else
	{
		windowRatio = (windowRatioHeight / customH);
		if( windowRatio > (windowRatioWidth / con_w) ) windowRatio = windowRatioWidth / con_w;;
	}

	var wrapTop = customH/2;
	var wrapLeft = con_w/2;

	wrapEle.css("-webkit-transform","scale(" + windowRatio + ")");
	wrapEle.css("-webkit-transform-origin","50% 50%");

	wrapEle.css("transform","scale(" + windowRatio + ")");
	wrapEle.css("transform-origin","50% 50%");
	wrapEle.css("top","50%");
	wrapEle.css("left","50%");
	wrapEle.css("margin-top", -wrapTop+ "px");
	wrapEle.css("margin-left", -wrapLeft+ "px");
}
