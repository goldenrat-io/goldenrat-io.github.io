
Spry.Utils.addLoadListener(function() {
	
	
		$("#facebook").mouseenter(function () {
   	     $("img[src='social/facebookgrey.png']").attr("src","social/facebookhov.png")
         })
		 $("#facebook").mouseleave(function () {
   	     $("img[src='social/facebookhov.png']").attr("src","social/facebookgrey.png")
         });
		 
		$("#twitter").mouseenter(function () {
   	     $("img[src='social/twittegreylight.png']").attr("src","social/twitterhov.png")
         })
		 $("#twitter").mouseleave(function () {
   	     $("img[src='social/twitterhov.png']").attr("src","social/twittegreylight.png")
         });
		 
		$("#instagram").mouseenter(function () {
   	     $("img[src='social/instagramgreylight.png']").attr("src","social/instagramhovt.png")
         })
		 $("#instagram").mouseleave(function () {
   	     $("img[src='social/instagramhovt.png']").attr("src","social/instagramgreylight.png")
         }); 
		 
		$("#tumblr").mouseenter(function () {
   	     $("img[src='social/tumblrgreylight.png']").attr("src","social/tumblrhov.png")
         })
		 $("#tumblr").mouseleave(function () {
   	     $("img[src='social/tumblrhov.png']").attr("src","social/tumblrgreylight.png")
         }); 
		 
		 
		 
		 
		$("#facebook").click(function(){
         window.open("https://www.facebook.com/pages/Peggy-Noland/66321197736?ref=nf");    
		});
		
		$("#twitter").click(function(){
         window.open("https://twitter.com/peggynoland");    
		});
		
		$("#tumblr").click(function(){
         window.open("http://myhaironthings.tumblr.com/");    
		});
		
		$("#instagram").click(function(){
         window.open("http://instagram.com/peggynoland");    
		});
 
 		$("#search_btn").click(function(){
         window.open("http://peggynoland.bigcartel.com/");    
		});
 
 

  
        $('#toprow a').shuffle();
   
	


  
        $('#bands a').shuffle();
   
	


  
        $('#film a').shuffle();
   
	


  
        $('#projects a').shuffle();
   
	


  
        $('#installation a').shuffle();
   
	


  
        $('#press_books a').shuffle();
   
	


  
        $('#press_magazines a').shuffle();
   
	


  
        $('#online_press a').shuffle();
   
	


	$('.lightbox').justifiedGallery({
		'usedSuffix' : 'lt100',
		'justifyLastRow':true,
		'lightbox' : true,		
		'fixedHeight':true,  
		'captions':true, 
		'margins':10
	});



	$('.nolightbox').justifiedGallery({
		'usedSuffix' : 'lt100',
		'justifyLastRow':true,
		'lightbox' : false,		
		'fixedHeight':true,  
		'captions':true, 
		'margins':10
	});



$(function() {                       
  $("#allbutton").click(function() { 
    $(this).addClass("allclicked"); { 
    $(this).removeClass("navigation"); {
	$('#projectsbutton, #filmbutton, #bandsbutton, #installationbutton, #pressbutton, #contactbutton, #blogbutton, #aboutbutton, #mailbutton').removeClass('bandsclicked filmclicked installationclicked pressclicked projectsclicked contactclicked blogclicked aboutclicked mailclicked'); { 
	$('#projectsbutton, #bandsbutton, #allbutton, #installationbutton, #filmbutton, #contactbutton, #blogbutton, #aboutbutton, #mailbutton, #pressbutton').addClass('navigation');}}}});});



$(function() {                       
  $("#bandsbutton").click(function() { 
    $(this).addClass("bandsclicked"); { 
    $(this).removeClass("navigation"); { 
	$('#projectsbutton, #filmbutton, #allbutton, #installationbutton, #pressbutton, #contactbutton, #blogbutton, #aboutbutton, #mailbutton').removeClass('allclicked filmclicked installationclicked pressclicked projectsclicked contactclicked blogclicked aboutclicked mailclicked'); { 
	$('#projectsbutton, #bandsbutton, #allbutton, #installationbutton, #filmbutton, #contactbutton, #blogbutton, #aboutbutton, #mailbutton, #pressbutton').addClass('navigation');}}}});});



$(function() {                       
  $('#filmbutton').click(function() { 
    $(this).addClass("filmclicked"); { 
    $(this).removeClass("navigation"); {
	$('#projectsbutton, #bandsbutton, #allbutton, #installationbutton, #pressbutton, #contactbutton, #blogbutton, #aboutbutton, #mailbutton').removeClass('bandsclicked allclicked installationclicked pressclicked projectsclicked allclicked contactclicked blogclicked aboutclicked mailclicked'); { 
	$('#projectsbutton, #bandsbutton, #allbutton, #installationbutton, #filmbutton, #contactbutton, #blogbutton, #aboutbutton, #mailbutton, #pressbutton').addClass('navigation');}}}});});



$(function() {                       
  $('#projectsbutton').click(function() { 
    $(this).addClass('projectsclicked'); { 
    $(this).removeClass('navigation'); { 
	$('#filmbutton, #bandsbutton, #allbutton, #installationbutton, #pressbutton, #contactbutton, #blogbutton, #aboutbutton, #mailbutton').removeClass('bandsclicked filmclicked installationclicked pressclicked allclicked contactclicked blogclicked aboutclicked mailclicked'); { 
	$('#projectsbutton, #bandsbutton, #allbutton, #installationbutton, #filmbutton, #contactbutton, #blogbutton, #aboutbutton, #mailbutton, #pressbutton').addClass('navigation');}}}});});



$(function() {                       
  $('#installationbutton').click(function() { 
    $(this).addClass("installationclicked"); { 
    $(this).removeClass("navigation"); {
	$('#projectsbutton, #bandsbutton, #allbutton, #filmbutton, #pressbutton, #contactbutton, #blogbutton, #aboutbutton, #mailbutton').removeClass('bandsclicked filmclicked allclicked pressclicked projectsclicked contactclicked blogclicked aboutclicked mailclicked'); { 
	$('#projectsbutton, #bandsbutton, #allbutton, #installationbutton, #filmbutton, #contactbutton, #blogbutton, #aboutbutton, #mailbutton, #pressbutton').addClass('navigation');}}}});});



$(function() {                       
  $("#pressbutton").click(function() { 
    $(this).addClass("pressclicked"); { 
    $(this).removeClass("navigation"); { 
	$('#projectsbutton, #bandsbutton, #allbutton, #installationbutton, #filmbutton, #contactbutton, #blogbutton, #aboutbutton, #mailbutton').removeClass('bandsclicked allclicked installationclicked projectsclicked allclicked filmclicked contactclicked blogclicked aboutclicked mailclicked'); { 
	$('#projectsbutton, #bandsbutton, #allbutton, #installationbutton, #filmbutton, #contactbutton, #blogbutton, #aboutbutton, #mailbutton').addClass('navigation');}}}});});



$(function() {                       
  $("#blogbutton").click(function() { 
    $(this).addClass("blogclicked"); { 
    $(this).removeClass("navigation"); { 
	$('#pressbutton, #projectsbutton, #bandsbutton, #allbutton, #installationbutton, #filmbutton, #contactbutton, #aboutbutton, #mailbutton').removeClass('bandsclicked allclicked installationclicked projectsclicked allclicked filmclicked contactclicked aboutclicked mailclicked pressclicked'); { 
	$('#pressbutton, #projectsbutton, #bandsbutton, #allbutton, #installationbutton, #filmbutton, #contactbutton, #aboutbutton, #mailbutton').addClass('navigation');}}}});});



$(function() {                       
  $("#mailbutton").click(function() { 
    $(this).addClass("mailclicked"); { 
    $(this).removeClass("navigation"); { 
	$('#pressbutton, #projectsbutton, #bandsbutton, #allbutton, #installationbutton, #filmbutton, #contactbutton, #aboutbutton, #blogbutton').removeClass('bandsclicked allclicked installationclicked projectsclicked allclicked filmclicked contactclicked aboutclicked blogclicked pressclicked'); { 
	$('#pressbutton, #projectsbutton, #bandsbutton, #allbutton, #installationbutton, #filmbutton, #contactbutton, #aboutbutton, #blogbutton').addClass('navigation');}}}});});



$(function() {                       
  $("#aboutbutton").click(function() { 
    $(this).addClass("aboutclicked"); { 
    $(this).removeClass("navigation"); { 
	$('#pressbutton, #projectsbutton, #bandsbutton, #allbutton, #installationbutton, #filmbutton, #contactbutton, #mailbutton, #blogbutton').removeClass('bandsclicked allclicked installationclicked projectsclicked allclicked filmclicked contactclicked mailclicked blogclicked pressclicked'); { 
	$('#pressbutton, #projectsbutton, #bandsbutton, #allbutton, #installationbutton, #filmbutton, #contactbutton, #mailbutton, #blogbutton, #contactbutton').addClass('navigation');}}}});});



$(function() {                       
  $("#contactbutton").click(function() { 
    $(this).addClass("contactclicked"); { 
    $(this).removeClass("navigation"); { 
	$('#pressbutton, #projectsbutton, #bandsbutton, #aboutbutton, #allbutton, #installationbutton, #filmbutton, #contactbutton, #mailbutton, #blogbutton').removeClass('bandsclicked allclicked installationclicked projectsclicked allclicked filmclicked aboutclicked mailclicked blogclicked pressclicked'); { 
	$('#pressbutton, #projectsbutton, #bandsbutton, #allbutton, #installationbutton, #filmbutton, #aboutbutton, #mailbutton, #blogbutton').addClass('navigation');}}}});});






});
