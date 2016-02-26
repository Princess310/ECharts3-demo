(function(){

	brite.registerView("Popup",{

		create: function(data){
			var view = this;
			view.model = {};
			view.model.callback = data.callback;
			view.model.dialogGlass = data.dialogGlass;
			view.model.dialogGlass.css("display", "block");
			return render("Popup", {title:data.title, component: data.component});
		},
		postDisplay: function(data){
			var view = this;
			$("<div class='Popup-screen'/>").insertAfter(view.$el);
			displayComponent.call(view);
		},
		events: {
			"click; .save":function(e){
				e.stopPropagation();
				cancel.call(this);
			},
			"bdragstart; .popup-header":function(e){
				var view = this;
				view.$draging = view.$el;
				view.$draging.offset(view.$el.offset());
			},
			"bdragmove; .popup-header":function(e){
				var view = this;
				var oldOffset = view.$draging.offset();
				view.$el.offset({left: oldOffset.left + e.bextra.deltaX, top: oldOffset.top + e.bextra.deltaY});
			},
			"keyup; textarea":function(e){
				var view = this;
				if(e.which == 13){
					e.stopPropagation();
				}
			},
			"click":function(e){
				var view = this;
				var $target = $(e.target);
				if(view.$el){
					view.$el.insertAfter($(document).find(".Popup:last"));
				}
			}
		},
		close:function(){
			var view = this;
			close.call(view);
		},
		cancel:function(extraData){
			var view = this;
			cancel.call(view, extraData);
		},
		changeTitle:function(title){
			var view = this;
			view.$el.find(".modal-title").html(title);
		}
	});

	function close(){
		var view = this;
		view.model.dialogGlass.css("display", "none");
		if(view.$el){
			view.$el.bRemove();
		}
	}

	function cancel(extraData){
		var view = this;
		close.call(view);
	}

	function displayComponent(component,componentData){
		var view = this;
		var $container = view.$el.find(".popup-body");
		var $chart = view.$el.find("#myChart");
		$chart.css({
			width: "600px",
			height: "400px"
		});

		var targetWidth = view.$el.outerWidth();
		var targetHeight = view.$el.outerHeight();
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var left = (windowWidth - targetWidth)/2;
		var top = (windowHeight - targetHeight)/2;
		view.$el.offset({
			left: left,
			top: top
		});

		view.$el.on("btransitionend", function(){
			view.$el.removeClass("transitioning");
			view.$el.bTransition({
				transform: ""
			});
			view.$el.trigger("POPUP_SCALE_ANIMATION_END");
			view.$el.focus();
		});

		view.$el.css("transform","scale(0.01)");

		setTimeout(function(){
			view.$el.addClass("transitioning");
			view.$el.bTransition({
				transform: "scale(1)"
			});
		}, 10);

		var myChart = echarts.init(document.getElementById('myChart'));
		if(view.model.callback && $.isFunction(view.model.callback)){
			view.model.callback(myChart);
		}
	}

})();