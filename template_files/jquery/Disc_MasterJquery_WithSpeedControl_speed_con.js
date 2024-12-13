$(document).ready(function(){
						  
						   window.autorunClicked = 0;
						   window.ContentCount = 0;
						   
						  
						   $(".autorun").css('opacity','.4');
						   $(".autorun").css('cursor','default');
						 
					$(".ButtonsForMasterQuery").click(function(){
															  
												    $(".hand").hide();
													autorunClicked=0;
													spaceclick=1	
											
										
										$(".ButtonsForMasterQuery").blur();
										/*$(".spacebar").focus();*/
										
										$(".Content00").hide();
										
										//$(".Content0" + buttonSequence).first().show();
										///alert(buttonSequence + "   aa");
										$(".Content" + buttonSequence+"_"+"1").show();
										
										
										
										if(ContentCount == 0 || ContentCount == 1 )
										{var newnum = Number(buttonSequence)+1
											$(".hand"+newnum).show().css('display', 'inline-block');
											$(".SpaceBarDiv").hide()
											$(".autorun").css('opacity','.4');
											$(".autorun").css('cursor','default');
											  $(".anim_layer").show();
											
										}
										else
										{
											$(".SpaceBarDiv").show().css({"display":"block"});
											$(".autorun").css('opacity','1');
											$(".autorun").css('cursor','pointer');
											
											  $(".anim_layer").hide();
											
											if(abcd==99)
											{
												newLocalFunction();	
											}
											
										}
										clearTimeout(timeout1) //
										
															  });
					
					$(".autorun").click(function(){
												 
												if(spaceclick<ContentCount)
												{
									autorunClicked++;
									 	
												 if(autorunClicked%2==1)
												 {
													
										autorunFunction();	
										$(".autorun").css('opacity','.4');
										$(".autorun").css('cursor','default');
												 }
												 else
												 {
													$(".SpaceBarDiv").show();
													  $(".anim_layer").hide();
													
													 clearTimeout(timeout1) 
													 $(".autorun").css('opacity','1');
													 $(".autorun").css('cursor','pointer');
													 
													 
												 }
												}
											 });
					
					$(".spacebar").click(function(){
										
												spacebarClickFunction();
												 
												  });
					
					
					
					spacebarClickFunction = function(){
						
						$(function () {
           $(".ContentContainer,.container-right").animate({
			scrollTop: 9999 }, 'slow');});
						$(".SpaceBarButton").show();
						
						
						            spaceclick++;
									if(abc==99)
		                               {
	                                   Local1();
									   Local2();
									   Local3();
									   Local4();
									   Local5();
		                                 }	
										
										$(".Content" + buttonSequence+"_"+spaceclick).show();
										
										if(spaceclick >= ContentCount)
										{  
										
											var newnum = Number(buttonSequence)+1
											$(".hand"+newnum).show().css('display', 'inline-block');
											
											
											$(".SpaceBarDiv").hide();
											  $(".anim_layer").show();
											
											
											$(".autorun").css('opacity','.4');
											$(".autorun").css('cursor','default');
											clearTimeout(timeout2)
										}
										else
										{
											$(".SpaceBarDiv").hide();
											  $(".anim_layer").show();
											
											window.timeout2=window.setTimeout(spaceBarShow,[SpaceAndAutorunSpeed]);	
											
										}
										
										
						
					}
						   
					autorunFunction=function(){
						
						$(function () {
           $(".ContentContainer,.container-right").animate({
			scrollTop: 9999 }, 'slow');});
		spaceclick++;
	
	    if(abc==99)
		{
	      
			Local1();
			Local2();
			Local3();
			Local4();
		    Local5();
		}
		
		$(".SpaceBarDiv").hide();
		  $(".anim_layer").show();
		if(spaceclick<ContentCount+1){
			
			
				
				
	
	$(".Content" + buttonSequence+"_"+spaceclick).show();
	window.timeout1=window.setTimeout(autorunFunction,[SpaceAndAutorunSpeed])
	
	}
	 
	if(spaceclick == ContentCount)
										{
											var newnum = Number(buttonSequence)+1
											$(".hand"+newnum).show().css('display', 'inline-block');
											
											
											
											$(".autorun").css('opacity','.4');
											$(".autorun").css('cursor','default');
										}
	
	};	  
	
	
	
	
	
	$(document).keypress(function(e){
								  
								
								  if(e.which==32 ){
									
									
									var s=$(".SpaceBarDiv").css("display");
									
												//alert(s);	
													
										if(spaceclick<ContentCount && s!="none"){
										  $(".anim_layer").hide();
									  spacebarClickFunction();
									  
													}else{
														  $(".anim_layer").show();
														
														}
 									  
											  }
											 
											  });
	
		if (String(navigator.userAgent).indexOf("Mobile") != -1) {
			if (window.innerHeight > window.innerWidth) {
				if ((screen.width == 768 && screen.height == 1024)||(screen.width == 1024 && screen.height == 1366)) {
					
					$(".OrientImage").css({"margin-top":25+"%"});
					
				}
				
				
			}
	}
	
	spaceBarShow=function(){
	
			$(".SpaceBarDiv").show()
			  $(".anim_layer").hide();
				
		}
			
			
			
			var check_btn = $(".button").height();	

		if(check_btn>0){
		var b_btn1 = $(".button").height();
      $(".header").css("height",b_btn1*1.7+"px");	
	  //alert(b_btn1)
		}else{
			
	  var b_btn2 = $(".header h2").height();	
	  $(".header").css("height",b_btn2*1.4+"px");
	  
	 
			
			//alert(b_btn2+"hjdsf")
		}
		
		var btn_count = $(".main_btn_div").length;
		if(btn_count == 2){
			var ln = 3.7;
			
		}
		else if(btn_count == 3){
			var ln = 3.6;
				
		}
		else if(btn_count == 4){
			var ln = 4.5;
					
		}
		else if(btn_count == 5){
			var ln = 5.2;
		
				 
		}
		else if(btn_count == 6){
			var ln = 6.2;
			
		
		}
		else if(btn_count == 7){
			var ln = 7.2;
		
			
		}
		
		
		if(width1 > 1801){
				var containerFluidHeight	= $(".container-fluid").height();
				 var headerHeight	= $(".header").height();
				 var footerHeight	= $(".footer").height();
				 var containerHeight = containerFluidHeight-(footerHeight+headerHeight+25)
				 $(".container").css({"height" : containerHeight+"px"});
				 
			}
			else if(width1 > 1501){
				var containerFluidHeight	= $(".container-fluid").height();
				 var headerHeight	= $(".header").height();
				 var footerHeight	= $(".footer").height();
				 var containerHeight = containerFluidHeight-(footerHeight+headerHeight+15)
				 $(".container").css({"height" : containerHeight+"px"});
				 
			}
			
			else{
				
				 var containerFluidHeight	= $(".container-fluid").height();
				 var headerHeight	= $(".header").height();
				 var footerHeight	= $(".footer").height();
				 var containerHeight = containerFluidHeight-(footerHeight+headerHeight+10)
				 $(".container").css({"height" : containerHeight+"px"});

			}
		
		
		
			
			
			 var con_left = $(".container-left").height();
			 $(".main_btn_div").css({"height" : con_left/ln+"px"});
		
			var btn = $(".main_btn_div").height();
			$(".hand").css("line-height",0+"px");
		
			$(".hand").css("margin-top",0+"px");
			
			$(".hand").css("top",btn/2+"px");
			
		
			
			
			forScrolling=function(){
			
				$(function () {
				$(".ContentContainer,.container-right").animate({
				scrollTop: 9999}, 'slow');});
			
			}
			
			
			$(".forScroll").click(function(){
				forScrolling();
			});
		                   
		
		
	});