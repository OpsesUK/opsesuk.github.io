(function( $ ) {
	var divi_module_list = [
		'.et-pb-icon',
		'.et_pb_shop',
		'.et_overlay',
		'.et_pb_custom_button_icon',
		'.et_pb_more_button',
		'.et_pb_dmb_breadcrumbs li',
		'.et_pb_dmb_breadcrumbs a'
	];
	function b3_display_fb_icon_list_free() {
		var b3_icon_list = $('.et-fb-font-icon-list').children();
		for( var i = 0; i < b3_icon_list.length; i++ ) {
			var symbol_icon = b3_icon_list[i];
			if( $(symbol_icon).not('.b3_divi_icons_list') || $(symbol_icon).hasClass('active') ) {
				var symbol_data = $(symbol_icon).data('icon');
				if (symbol_data.indexOf('icon_quotations_alt2') > -1){
					 symbol_data = symbol_data.split("~|");
				}else{
					symbol_data = symbol_data.split("|");
				}
				$(symbol_icon).attr({"data-icon": symbol_data[2], "title": symbol_data[1],"data-iconfamily": symbol_data[0],"data-iconname": symbol_data[1]});
				$(symbol_icon).addClass( 'b3_divi_icons_list b3_divi_' + symbol_data[0] + '_icon_fd ');
			}
		}
	}
	function b3_display_icons_free() {
		divi_module_list = divi_module_list.toString();
		var b3_icon_modules = $( divi_module_list ).not('.et_pb_scroll_top');
		if( ! $(b3_icon_modules).length ) { return false; }
		for( i = 0; i < b3_icon_modules.length; i++ ) {
			var module = b3_icon_modules[i];
			var icon_parts = '';
			if ( $(module).data('icon') !== undefined ) {
				var symbol_data = $(module).attr( 'data-icon');
				if (symbol_data.indexOf('icon_quotations_alt2') > -1){
					 symbol_data = symbol_data.split("~|");
				}else{
					symbol_data = symbol_data.split("|");
				}
				if( symbol_data.length >= 2 ) {
					$(module).attr( 'data-icon', symbol_data[2] );
					$(module).removeClass('b3_divi_et_icon_fd b3_divi_b3lineicon_icon_fd');
					$(module).addClass( 'b3_divi_' + symbol_data[0] + '_icon_fd ');
					if ( $(module).hasClass('et_pb_shop') && !$(module).hasClass('et_overlay') ){
						 var symbol_data_icon = symbol_data[2];
						 var symbol_selector = $(module).find('.et_overlay');
						  setTimeout(function(){  
								symbol_selector.attr( 'data-icon', symbol_data_icon );
						  }, 50); 											
					}
				}
			} else {
				var symbol_data = $(module).html();
				if (symbol_data.indexOf('icon_quotations_alt2') > -1){
					 symbol_data = symbol_data.split("~|");
				}else{
					symbol_data = symbol_data.split("|");
				}
				if( symbol_data.length >= 2  ) {
					$(module).html( symbol_data[2] );
					$(module).removeClass('b3_divi_et_icon_fd b3_divi_b3lineicon_icon_fd');
					$(module).addClass( 'b3_divi_' + symbol_data[0] + '_icon_fd ');
				}
			}
		}
	}
	function b3_display_fb_icon_list_click_free(){
		var b3_icon_list = $('.et-fb-font-icon-list').children();
		for( var i = 0; i < b3_icon_list.length; i++ ) {
			var symbol_icon = b3_icon_list[i];
			if( $(symbol_icon).not('.b3_divi_icons_list') || $(symbol_icon).hasClass('active') ) {
				var symbol_data = $(symbol_icon).data('icon');
				if (symbol_data.indexOf('icon_quotations_alt2') > -1){
					 symbol_data = symbol_data.split("~|");
				}else{
					symbol_data = symbol_data.split("|");
				}
				$(symbol_icon).attr({"data-icon": symbol_data[2], "title": symbol_data[1],"data-iconfamily": symbol_data[0],"data-iconname": symbol_data[1]});
				$(symbol_icon).addClass( 'b3_divi_icons_list b3_divi_' + symbol_data[0] + '_icon_fd ');
			}
		}
	}
	function b3_display_icons_click_free() {
		divi_module_list = divi_module_list.toString();
		var b3_icon_modules = $( divi_module_list ).not('.et_pb_scroll_top');
		if( ! $(b3_icon_modules).length ) { return false; }
		for( i = 0; i < b3_icon_modules.length; i++ ) {
			var module = b3_icon_modules[i];
			var icon_parts = '';
				if ( $(module).data('icon') !== undefined ) {
					var symbol_data = $(module).attr( 'data-icon');
					if (symbol_data.indexOf('icon_quotations_alt2') > -1){
						 symbol_data = symbol_data.split("~|");
					}else{
						symbol_data = symbol_data.split("|");
					}
					if( symbol_data.length >= 2 ) {
						$(module).attr( 'data-icon', symbol_data[2] );
						$(module).removeClass('b3_divi_et_icon_fd b3_divi_b3lineicon_icon_fd');
						$(module).addClass( 'b3_divi_' + symbol_data[0] + '_icon_fd ');
					}
				} else {
					var symbol_data = $(module).html();
					if (symbol_data.indexOf('icon_quotations_alt2') > -1){
						 symbol_data = symbol_data.split("~|");
					}else{
						symbol_data = symbol_data.split("|");
					}
					if( symbol_data.length >= 2  ) {
						$(module).html( symbol_data[2] );
						$(module).removeClass('b3_divi_et_icon_fd b3_divi_b3lineicon_icon_fd');
						$(module).addClass( 'b3_divi_' + symbol_data[0] + '_icon_fd ');
					}
				}
		}
		$('.et-pb-icon,.et_pb_shop,.et_overlay,.et_pb_custom_button_icon,.et_pb_more_button').removeClass("hide_icon");
		$('.et-pb-icon,.et_pb_shop,.et_overlay,.et_pb_custom_button_icon,.et_pb_more_button').addClass("show_icon");
	}
	function is_et_fb() {
    	if( $( '#et-fb-app' ).length ) {return true;}
    	return false;
	}
	$(function(){
		b3_display_icons_free();
		if( is_et_fb() ) {	
			var targetNode = document.getElementById( 'et-fb-app' );
			var config = { childList: true, attributes: true, subtree: true };
			var callback = function( mutationsList ) {
				mutationsList.forEach(function (thisMutation) {
					if ( thisMutation.type == 'childList' ) {
						var target = thisMutation.target;
						if ( $(target).attr('id') === 'et-fb-app' || $(target).attr('id') === 'et_fb_root' || $(target).hasClass('et_pb_section') || $(target).hasClass('et_pb_row') || $(target).hasClass('et_pb_column') ) { b3_display_icons_free(); }
					
						if ( thisMutation.addedNodes.length > 0 ) {
							if( $(target).attr('data-name') === 'image' || $(target).hasClass('et-fb-form__toggle') || $(target).attr('data-name') === 'button' || $(target).attr('data-name') === 'overlay' || $(target).attr('data-name') === 'button_one' || $(target).attr('data-name') === 'button_two') {
								b3_display_fb_icon_list_free();
							}
						}
					}
				});
			};
			var observer = new MutationObserver(callback);
			observer.observe(targetNode, config);
		}
		
	var fbBody = $('body.et-fb');
	if (fbBody.length) {
		var MO = window.MutationObserver ? window.MutationObserver : window.WebkitMutationObserver;
		if (MO) {
			(new MO(function(events) {
				b3_display_fb_icon_list_free();
				$.each(events, function(i, event) {
					if (event.target && (event.type != 'characterData' || event.target.parentElement)) {
						var $element = $(event.type == 'characterData' ? event.target.parentElement : event.target);
						
						if ($element.hasClass('et-pb-icon') && $element.closest('.et_pb_main_blurb_image').length
							&& $element.closest('.et_pb_module.et_pb_blurb')) {
								var iconContent = $element.html();
								if (iconContent.indexOf('|') != -1) {
											symbol_data = iconContent.split("|");
											 $element.html( symbol_data[2] );
											 $element.removeClass('b3_divi_et_icon_fd b3_divi_b3lineicon_icon_fd');
											 $element.addClass( 'b3_divi_' + symbol_data[0] + '_icon_fd ');
								}
										
						} else if (event.addedNodes && event.addedNodes.length) {
							$.each(event.addedNodes, function(i, node) {
								$(node).find('.et-pb-icon').each(function() {
									var $iconChild = $(this);
									if ($iconChild.closest('.et_pb_module.et_pb_blurb .et_pb_main_blurb_image').length) {
										var iconContent = $iconChild.html();
										if (iconContent.indexOf('|') != -1) {
											symbol_data = iconContent.split("|");
											 $iconChild.html( symbol_data[2] );
											 $iconChild.removeClass('b3_divi_et_icon_fd b3_divi_b3lineicon_icon_fd');
											 $iconChild.addClass( 'b3_divi_' + symbol_data[0] + '_icon_fd ');
										}
									}
								});
							});
						}
					}
				});
			})).observe(fbBody[0], {characterData: true, childList: true, subtree: true});
		}
	}
		
	});
	$( document.body ).on('click','.et-fb-font-icon-list li', function(event){
		$('.et-pb-icon,.et_pb_shop,.et_overlay,.et_pb_custom_button_icon,.et_pb_more_button').removeClass("show_icon");
		$('.et-pb-icon,.et_pb_shop,.et_overlay,.et_pb_custom_button_icon,.et_pb_more_button').addClass("hide_icon");
		setTimeout(function(){
			b3_display_fb_icon_list_click_free();			
			b3_display_icons_click_free();
		}, 50);
	});
	$( document ).on( 'click', 'div.et-core-control-toggle', function() {
		divi_module_list = divi_module_list.toString();
		var b3_icon_modules = $( divi_module_list ).not('.et_pb_scroll_top');
		if( ! $(b3_icon_modules).length ) { return false; }
		for( i = 0; i < b3_icon_modules.length; i++ ) {
				var module = b3_icon_modules[i];
				var className = $(module).attr('class');
		}				
		setTimeout(function(){  
				var use_icon_val = $('#et-fb-use_icon').val(); 
				if ( use_icon_val == 'on' ){
					if ( $('.et-fb-font-icon-list li.active').length > 0 ){
						var iconfamily_fb = $('.et-fb-font-icon-list li.active').data('iconfamily');
						var icon_fb = $('.et-fb-font-icon-list li.active').data('icon');
						if (icon_fb.indexOf('icon_quotations_alt2') > -1){
							 symbol_data = icon_fb.split("~|");
						}else{
							symbol_data = icon_fb.split("|");
						}
						var icon_filter = '';
						if( iconfamily_fb === 'et') { 
							icon_filter = "b3_et b3_all";
						 }else if( iconfamily_fb === 'b3lineicon') {
							icon_filter = "b3_line b3_all"; 
						 }else{}
						 $('.et_fb_editing_enabled').find('.et-pb-icon').html( symbol_data[2] );
						 $('.et_fb_editing_enabled').find('.et-pb-icon').addClass( 'b3_divi_' + iconfamily_fb + '_icon_fd '+icon_filter  );
					}
				}		
				var use_circle_val = $('#et-fb-use_circle').val(); 
				if ( use_circle_val == 'on' ){
					$(module).addClass(className);
				}
				if ( use_circle_val == 'off' ){
					$(module).addClass(className);	
					$(module).removeClass('et-pb-icon-circle et-pb-icon-circle-border');
				}
				var use_circle_border_val = $('#et-fb-use_circle_border').val(); 
				if ( use_circle_border_val == 'on' ){
					$(module).addClass('et-pb-icon-circle-border');
				}
				if ( use_circle_border_val == 'off' ){
					$(module).removeClass('et-pb-icon-circle-border');
				}
		 }, 50);
	});	
	$( document ).on( 'click', '.et-fb-settings-option-select .select-option-item', function() {
			var cur_animation = $(this).data("value");
			if ( cur_animation == 'off' || cur_animation == 'right' || cur_animation == 'left' || cur_animation == 'top' || cur_animation == 'bottom' )
			{
				divi_module_list = divi_module_list.toString();
				var b3_icon_modules = $( divi_module_list ).not('.et_pb_scroll_top');
				if( ! $(b3_icon_modules).length ) { return false; }
				for( i = 0; i < b3_icon_modules.length; i++ ) {
						var module = b3_icon_modules[i];
						$(module).removeClass('et_pb_animation_off et_pb_animation_right et_pb_animation_left et_pb_animation_top et_pb_animation_bottom');
						$(module).addClass("et_pb_animation_"+cur_animation);
						var className = $(module).attr('class');
				}		
				setTimeout(function(){  
					$(module).addClass(className);
				 }, 50);
			}
	});		
})( jQuery );