$(document).ready(function () {
        var originalSize = $('body, .heading, .box h4, .uk-navbar-nav li a, .schemes h4, .ftr h3, .ftr h4, .link-list li a, .ftr p, .news,.links22 a,.lq-rrb-notification-box a').css('font-size');
		var count=0;
        // reset
        $('.resetMe').click(function () {
          $('body, .heading, .uk-navbar-nav li a, .box h4, .schemes h4, .ftr h3, .ftr h4, .link-list li a, .ftr p, .news,.links22 a,.lq-rrb-notification-box a').css('font-size', originalSize);
		  count=0;
        });

        // Increase Font Size
        $('.increase').click(function () {
          var currentSize = $('body, .heading, .box h4, .uk-navbar-nav li a, .schemes h4, .ftr h3, .ftr h4, .link-list li a, .ftr p, .news,.links22 a,.lq-rrb-notification-box a').css('font-size');
		  if(count<2){
			var currentSize = parseFloat(currentSize) * 1.2;
			$('body, .heading, .uk-navbar-nav li a, .schemes h4, .ftr h3, .ftr h4, .link-list li a, .ftr p, .news,.links22 a,.lq-rrb-notification-box a').css('font-size', currentSize);
			count++;
		  }
          return false;
        });


        // Decrease Font Size
        $('.decrease').click(function () {
          //var currentFontSize = $('body, .heading, .box h4, .uk-navbar-nav li a, .schemes h4, .ftr h3, .ftr h4, .link-list li a, .ftr p, .news,.links22 a,.lq-rrb-notification-box a').css('font-size');
          var currentSize = $('body, .heading, .uk-navbar-nav li a, .schemes h4, .ftr h3, .ftr h4, .link-list li a, .ftr p, .news,.links22 a,.lq-rrb-notification-box a').css('font-size');
		  if(count>-2){
			  var currentSize = parseFloat(currentSize) * 0.8 ;
			  $('body, .heading, .uk-navbar-nav li a, .schemes h4, .ftr h3, .ftr h4, .link-list li a, .ftr p, .news,.links22 a,.lq-rrb-notification-box').css('font-size', currentSize );
			  count--;
		  }
          return false;
        });
        



      });