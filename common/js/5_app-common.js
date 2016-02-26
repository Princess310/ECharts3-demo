var app = app || {};

// --------- AJAX Wrapper --------- //
// Very simple AJAX wrapper that allow us to simply normalize request/response, and eventually put some hooks such as
// performance and error reporting. 
(function(){
	app.doGet = function(path, data){
		return ajax(false,path,data);
	};

	app.doPost = function(path, data){
		return ajax(true,path,data);
	};

	function ajax(isPost, path, data){
		var dfd = $.Deferred();
		var method = (isPost)?"POST":"GET";
		var jqXHR = $.ajax({
			url: path, 
			type: method,
			dataType: "json",
			data: data
		});

		jqXHR.done(function(response){
			// TODO: need test reponse.result
			if (response.success){
				dfd.resolve(response.result);
			}else{
				dfd.reject(response.result);
			}
		});

		jqXHR.fail(function(jqx, textStatus, error){
			dfd.reject(error);
			// TODO: need to normalize error
		});

		return dfd.promise();
	}
})();
// --------- /AJAX Wrapper --------- //

//---------------- dialog move---------------//
(function($) {
	app.moveDialog = function($box, deltaX, deltaY) {
		var offset = $box.offset();
		var $screen = $("body");
		var targetOffset = {
			left: offset.left + deltaX,
			top: offset.top + deltaY
		};
		if(targetOffset.left < 0){
			targetOffset.left = 0;
		}
		if(targetOffset.top < 0){
			targetOffset.top = 0;
		}
		if(targetOffset.left + $box.width() > $screen.width()){
			targetOffset.left = $screen.width() - $box.width();
		}
		if(targetOffset.top + $box.height() > $screen.height()){
			targetOffset.top = $screen.height() - $box.height();
		}
		$box.offset(targetOffset);
	}
})(jQuery);
//---------------- /dialog move---------------//

//---------------- file upload ---------------//
(function($){
	app.ajaxPost = function(url, data, fileElement){
		var dfd = $.Deferred();
		var formData = new FormData();
		formData.append("props", JSON.stringify(data));
		formData.append("file", fileElement);
		var xhr = getXMLHttpRequest();
		xhr.open('POST', url, true);
		xhr.onload = function(e){
			var adGroup = eval("(" + this.response + " )").success;
			dfd.resolve(adGroup);
		}
		xhr.send(formData);

		return dfd.promise();
	}

	function getXMLHttpRequest(){
		var XMLHttp = null;
		if(window.XMLHttpRequest){
			XMLHttp = new XMLHttpRequest();
		}else if(window.ActiveXObject){
			XMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		return XMLHttp;
	}
})(jQuery);
//---------------- /file upload ---------------//