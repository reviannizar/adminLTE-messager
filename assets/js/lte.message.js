/**
/*!
 *  Message component bootstrap
 *  Copy Right (c)2016 
 *  author	: Abu Dzunnuraini
 *  email	: almprokdr@gmail.com
*/
(function($){
	$.msg={
		confirmation:function(t,msg,fn){
			var temp='<div id="message-dialog" class="modal modal-{tmpl}"><div class="modal-dialog message-dialog" style="max-width:350px"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><h3 class="modal-title">{head}</h3></div><div class="modal-content"><div class="modal-body" style="min-height:70px"><div class="message-icon message-{ico}">&nbsp</div>{msg}</div></div><div class="modal-footer"><button data-dismiss="modal" type="button" class="btn btn-outline" id="message-dialog-yes">Yes</button>&nbsp;<button data-dismiss="modal" type="button" class="btn btn-outline" id="message-dialog-no">Cancel</button></div></div></div>';
			var a={head:'Confirmation',tmpl:'info',ico:'info'};
			switch(t){
				case 'Error': a={head:'Error',tmpl:'danger',ico:'error'}; break;
				case 'Warning': a={head:'Warning',tmpl:'warning',ico:'warning'}; break;
			}
			$('body').append(temp.replace(/{head}/g,a.head).replace(/{tmpl}/g,a.tmpl).replace(/{ico}/g,a.ico).replace(/{msg}/g,msg));
			$('#message-dialog').modal({ backdrop: 'static', keyboard: false })
				.on('click', '#message-dialog-yes', fn)
				.on('hidden.bs.modal', function (e) { $('#message-dialog').remove(); });
			$.msg.resize();
		},
		resize:function(){
			var h=$(window).height();
			$('.message-dialog').css('margin',(h-200)/2+'px auto');
		}
	}
})(jQuery);
