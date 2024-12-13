// JavaScript Document
$(document).ready(function () {


	window.abc = 99;
	window.SpaceAndAutorunSpeed = 500;
	window.abcd=99;
	$(".disableauto").hide();
	
	
		window.speedControl="*"+1;
        window.speedControl_1="*"+1;
	
		cssVariable=function(){
		
			
     var root = document.documentElement;
	 
	 
	 
	 
	 timeConvert=function(val){
	 var cssvar=val*1000;
	 cssvar = eval(cssvar+""+speedControl)
	// alert(cssvar)
	
	 cssvar=cssvar*0.001;  
	 cssvar=cssvar.toFixed(2);
	// alert(cssvar)
	return cssvar;
	}

		
		
		
	//alert(timeConvert(timeConvert(0.5)))
		
		
	root.style.setProperty('--anim-timeone',timeConvert(0.5)+"s");
	
	//vr=root.style.getPropertyValue('--anim-timeone');
    root.style.setProperty('--anim-timetwo', timeConvert(1)+"s");
    root.style.setProperty('--anim-timethree', timeConvert(2)+"s");
	root.style.setProperty('--anim-timefour', timeConvert(1.5)+"s");
		
					
		}

	
	
	
	cssVariable();

		
		       $(".hand14,.hand18").css("visibility","hidden");
		
		
		
		
		
				      Local1=function(){
							if( buttonSequence == 1 && spaceclick == 2){
							
								//$(".handA").css("visibility","hidden");
								//$(".delay4_2").css("visibility","visible");

								setTimeout(function(){
									$(".00000").fadeOut();
									$(".btn102").fadeIn();	
								},eval(500+""+speedControl))
								
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$("button,.autorun").css("pointer-events","auto");
								},eval(1000+""+speedControl));
								
								$("button,.autorun").css("pointer-events","none");
								SpaceAndAutorunSpeed = eval(1000+""+speedControl);
							
							}
							
							else if( buttonSequence == 1 && spaceclick == 3){
							
								//$(".handA").css("visibility","hidden");
								//$(".delay4_2").css("visibility","visible");

								setTimeout(function(){
									$(".btn102").fadeOut();
								},eval(500+""+speedControl))
								

								setTimeout(function(){
									$(".btn103").fadeIn();	
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$("button,.autorun").css("pointer-events","auto");
								},eval(1500+""+speedControl));
								
								$("button,.autorun").css("pointer-events","none");
								SpaceAndAutorunSpeed = eval(1500+""+speedControl);
							
							}
							
							else if( buttonSequence == 1 && spaceclick == 4){
							
								//$(".handA").css("visibility","hidden");
								//$(".delay4_2").css("visibility","visible");

								setTimeout(function(){
									$(".btn103").fadeOut();
								},eval(500+""+speedControl))

								setTimeout(function(){
									$(".btn104").fadeIn();	
								},eval(1000+""+speedControl))


								
								setTimeout(function(){
									$(".btn104").fadeOut();
									$(".btn105").fadeIn();	
								},eval(3000+""+speedControl))

								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$("button,.autorun").css("pointer-events","auto");
								},eval(3500+""+speedControl));
								
								$("button,.autorun").css("pointer-events","none");
								SpaceAndAutorunSpeed = eval(3500+""+speedControl);
							
							}
							
							/*else if( buttonSequence == 1 && spaceclick == 5){
							
								$(".hand").css("visibility","hidden");
								

								
								
								setTimeout(function(){
								$(".football_1").fadeIn();
								//$(".forth_bor1").show();				
								},eval(800+""+speedControl))
								
							
								
								setTimeout(function(){
								$(".Icecream_1").fadeIn();
								//$(".forth_bor1").show();				
								},eval(1800+""+speedControl))
								
								
								setTimeout(function(){
								$(".cube_1").fadeIn();
								//$(".forth_bor1").show();				
								},eval(2400+""+speedControl))
								
								
									setTimeout(function(){
								$(".text_1").fadeIn();
								//$(".forth_bor1").show();				
								},eval(2600+""+speedControl))
									
								setTimeout(function(){
								$(".text_2").fadeIn();
								//$(".forth_bor1").show();				
								},eval(2800+""+speedControl))
								
								
								setTimeout(function(){
								$(".text_3").fadeIn();
								//$(".forth_bor1").show();				
								},eval(3000+""+speedControl))
								
								
								
								
								setTimeout(function(){
								$(".hand2").css("visibility","visible");
								$("button,.autorun").css("pointer-events","auto");
								},eval(500+""+speedControl));
								$("button,.autorun").css("pointer-events","none");
								SpaceAndAutorunSpeed = eval(500+""+speedControl);
							
							}*/
							
						/*else if( buttonSequence == 4 && spaceclick == 2){
							
								$(".handA").css("visibility","hidden");
								
								setTimeout(function(){
								$(".q1").hide();
								$(".a1").show();
								//$(".forth_bor1").show();				
								},eval(500+""+speedControl))
								
								
								setTimeout(function(){
								$(".q2").hide();
								$(".a2").show();
								//$(".forth_bor1").show();				
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								$(".handA").css("visibility","visible");
								$("button,.autorun").css("pointer-events","auto");
								},eval(1500+""+speedControl));
								$("button,.autorun").css("pointer-events","none");
								SpaceAndAutorunSpeed = eval(1500+""+speedControl);
							
							}*/
							
							else if( buttonSequence == 4 && spaceclick == 2){
							
								//$(".handA").css("visibility","hidden");
								
								$(".delay4_2").css("visibility","visible");

								setTimeout(function(){
								$(".img4_9,.text4_2").fadeIn();	
								$(".img4_8").fadeOut();
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$("button,.autorun").css("pointer-events","auto");
								},eval(1500+""+speedControl));
								$("button,.autorun").css("pointer-events","none");
								SpaceAndAutorunSpeed = eval(1500+""+speedControl);
							
							}
							
							else if( buttonSequence == 4 && spaceclick == 3){
							
								//$(".handA").css("visibility","hidden");
								
								$(".delay4_3").css("visibility","visible");

								setTimeout(function(){
								$(".img4_10,.text4_3").fadeIn();	
								$(".img4_9").fadeOut();
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								$(".img4_11,.text4_4").fadeIn();	
								$(".img4_10").fadeOut();
								},eval(2000+""+speedControl))
								
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$("button,.autorun").css("pointer-events","auto");
								},eval(2500+""+speedControl));
								$("button,.autorun").css("pointer-events","none");
								SpaceAndAutorunSpeed = eval(2500+""+speedControl);
							
							}


							else if( buttonSequence ==4 && spaceclick == 4){
							
							 SpaceAndAutorunSpeed = eval(3500+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");
								 
							    
								
								setTimeout(function(){
								$(".img4_11,.text4_1,.text4_2,.text4_3,.text4_4").fadeOut();
								},eval(500+""+speedControl))
								
								
								setTimeout(function(){
								$(".img21_82S01,.img21_82S02,.img21_82S03,.img21_82S04,.img21_82S05,.img21_82S06").fadeIn();
								},eval(500+""+speedControl))
								
								
								setTimeout(function(){
								//$(".img21_71").fadeOut();
								//$(".img21_71").fadeIn();
								$(".img21_82S01").animate({top: "+=-1em"});
								$(".img21_82S02").animate({left: "+=.5em"});
								$(".img21_82S03").animate({top: "=-.5em"});
								//$(".img21_82S04").animate({right: "+=.5em"});
								$(".img21_82S04").animate({left: "+=-.5em"});
								$(".img21_82S05").animate({top: "+=-.5em"});
								$(".img21_82S06").animate({top: "+=.5em"});
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								//$(".img21_71").fadeOut();
								//$(".img21_71").fadeIn();
								$(".img21_82S01").animate({top: "-5%"});
								$(".img21_82S02").animate({left: "9%"});
								$(".img21_82S03").animate({top: "-5%"});
								$(".img21_82S04").animate({left: "9%"});
								$(".img21_82S05").animate({top: "-5%"});
								$(".img21_82S06").animate({top: "-5%"});
								},eval(3000+""+speedControl))
								
								
								setTimeout(function(){
								$(".img21_82S01,.img21_82S02,.img21_82S03,.img21_82S04,.img21_82S05,.img21_82S06").fadeOut();
								},eval(3500+""+speedControl))
								
								setTimeout(function(){
								$(".img4_11,.text4_1,.text4_2,.text4_3,.text4_4").fadeIn();
								},eval(3500+""+speedControl))
								
								
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(6000+""+speedControl));
								
							}	
							
							else if( buttonSequence ==4 && spaceclick == 5){
							
							 SpaceAndAutorunSpeed = eval(3500+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");
							 // $(".Content3_7").show();
							   // $(".div5").addClass("move1");
								 
							   
							   setTimeout(function(){
								$(".img4_11,.text4_1,.text4_2,.text4_3,.text4_4").fadeOut();
								$(".img21_82S07").fadeIn();
								},eval(500+""+speedControl))
								
								
							   
							   setTimeout(function(){
								$(".img21_82S07").fadeOut();
								$(".img4_11,.text4_1,.text4_2,.text4_3,.text4_4").fadeIn();
								},eval(3500+""+speedControl))
								
								
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(3500+""+speedControl));
								
							}	
							
							else if( buttonSequence ==4 && spaceclick == 6){
							
							 SpaceAndAutorunSpeed = eval(3500+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");
							  //$(".img21_100").show();
							   // $(".div5").addClass("move1");
								$(".Tbl36TD3").css("border-left","2px solid green");
										
										
								setTimeout(function(){
								$(".img4_11,.text4_1,.text4_2,.text4_3,.text4_4").fadeOut();
								$(".img21_82S08").fadeIn();
								},eval(500+""+speedControl))
								
								
							   
							   setTimeout(function(){
								$(".img21_82S08").fadeOut();
								$(".img4_11,.text4_1,.text4_2,.text4_3,.text4_4").fadeIn();
								},eval(3500+""+speedControl))/**/
							   
							   

								
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(3500+""+speedControl));
								
							}	
							
							else if( buttonSequence ==4 && spaceclick == 7){
							
							 SpaceAndAutorunSpeed = eval(3500+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");
							  //$(".img21_100").show();
							   // $(".div5").addClass("move1");
								//$(".Tbl36TD3").css("border-left","2px solid green");
										
										
								setTimeout(function(){
								$(".img4_11,.text4_1,.text4_2,.text4_3,.text4_4").fadeOut();
								$(".img21_82S09").fadeIn();
								},eval(500+""+speedControl))
								
								
							   
							   setTimeout(function(){
								$(".img21_82S09").fadeOut();
								$(".img4_11,.text4_1,.text4_2,.text4_3,.text4_4").fadeIn();
								},eval(3500+""+speedControl))
							   
							   
								
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(3500+""+speedControl));
								
							}
							
							else if( buttonSequence == 5 && spaceclick == 2){
							
								//$(".handA").css("visibility","hidden");
								
								$(".img2_3").fadeOut();
								$(".img2_4,.text2_3").fadeIn();
															
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$("button,.autorun").css("pointer-events","auto");
								},eval(500+""+speedControl));
								$("button,.autorun").css("pointer-events","none");
								SpaceAndAutorunSpeed = eval(500+""+speedControl);
							
							}
							
							/*else if( buttonSequence == 5 && spaceclick == 3){
							
								$(".handA").css("visibility","hidden");
								
								setTimeout(function(){
								$(".face").css("visibility","visible");
								},eval(500+""+speedControl))
								
								
								setTimeout(function(){
								$(".corners").css("visibility","visible");
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								$(".edges").css("visibility","visible");
								},eval(1500+""+speedControl))
								
								setTimeout(function(){
								$(".handA").css("visibility","visible");
								$("button,.autorun").css("pointer-events","auto");
								},eval(1500+""+speedControl));
								$("button,.autorun").css("pointer-events","none");
								SpaceAndAutorunSpeed = eval(1500+""+speedControl);
							
							}*/
							
						/*else if( buttonSequence == 5 && spaceclick == 4){
							
								$(".handA").css("visibility","hidden");
								
								setTimeout(function(){
								$(".stmnt,.bdr_lft1").css("visibility","visible");
								$(".tab4").show();
								},eval(500+""+speedControl))
								
								setTimeout(function(){
								$(".handA").css("visibility","visible");
								$("button,.autorun").css("pointer-events","auto");
								},eval(700+""+speedControl));
								$("button,.autorun").css("pointer-events","none");
								SpaceAndAutorunSpeed = eval(700+""+speedControl);
							}*/
							
						/*else if( buttonSequence == 5 && spaceclick == 5){
							
								$(".handA").css("visibility","hidden");
								
								setTimeout(function(){
								$(".ans1").css("visibility","visible");
								},eval(500+""+speedControl))
								
								setTimeout(function(){
								$(".ans2").css("visibility","visible");
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								$(".ans3").css("visibility","visible");
								},eval(1500+""+speedControl))
								
								setTimeout(function(){
								$(".ans4").css("visibility","visible");
								},eval(2000+""+speedControl))
								
								setTimeout(function(){
								$(".handA").css("visibility","visible");
								$("button,.autorun").css("pointer-events","auto");
								},eval(2200+""+speedControl));
								$("button,.autorun").css("pointer-events","none");
								SpaceAndAutorunSpeed = eval(2200+""+speedControl);
							}	*/
							
							else if( buttonSequence ==3 && spaceclick == 2){
							
							 SpaceAndAutorunSpeed = eval(10200+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");
								
								setTimeout(function(){
								$(".img21_1").fadeOut();
								$(".img21_2").fadeIn();
								},eval(1200+""+speedControl))
								
								
								setTimeout(function(){
								$(".img21_2").fadeOut();
								$(".img21_3").fadeIn();
								},eval(2400+""+speedControl))
								
																
								setTimeout(function(){
								$(".img21_3").fadeOut();
								$(".img21_4").fadeIn();
								},eval(3600+""+speedControl))
								
								setTimeout(function(){
								$(".img21_4").fadeOut();
								$(".img21_5").fadeIn();
								},eval(4800+""+speedControl))
								
								
								setTimeout(function(){
								$(".img21_5").fadeOut();
								$(".img21_6").fadeIn();
								},eval(6000+""+speedControl))
								
																
								setTimeout(function(){
								$(".img21_6").fadeOut();
								$(".img21_7").fadeIn();
								},eval(7200+""+speedControl))
								
								setTimeout(function(){
								$(".img21_7").fadeOut();
								$(".img21_1").fadeIn();
								},eval(8200+""+speedControl))
								
								
								
								 setTimeout(function(){
											   $(".autorun").css('pointer-events', 'auto');
											   // $(".hand4").css("visibility","visible");
												$("button").prop("disabled",false).css("cursor","pointer");
												},eval(9200+""+speedControl)); 
						   
						 					SpaceAndAutorunSpeed = eval(10200+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");
							}	
							
							else if( buttonSequence ==3 && spaceclick == 3){
							
							 SpaceAndAutorunSpeed = eval(6000+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");
							  $(".img21_70").show();
							    $(".div2").addClass("move1");
								 
							    setTimeout(function(){
								$(".img21_70").fadeOut();
								$(".img21_8").fadeIn();
								},eval(2000+""+speedControl))
								
								
								setTimeout(function(){
								$(".img21_8").fadeOut();
								$(".img21_9").fadeIn();
								},eval(3500+""+speedControl))
								
																
								setTimeout(function(){
								$(".arrow_1").css("visibility","visible");
								$(".text_4").fadeIn();
								},eval(4000+""+speedControl))
								
								
								setTimeout(function(){
								$(".img21_9").fadeOut();
								$(".img21_10").fadeIn();
								},eval(5000+""+speedControl))
								
								
								
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(6000+""+speedControl));
								
							}	
							else if( buttonSequence ==3 && spaceclick == 4){
							
							 SpaceAndAutorunSpeed = eval(5500+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");
							  $(".img21_100").show();
							    $(".div3").addClass("move2");
								 
							    setTimeout(function(){
								$(".img21_100").fadeOut();
								$(".img21_11").fadeIn();
								},eval(2000+""+speedControl))
								
								
								setTimeout(function(){
								$(".img21_11").fadeOut();
								$(".img21_12").fadeIn();
								},eval(3500+""+speedControl))
								
																
								setTimeout(function(){
								$(".arrow_2").css("visibility","visible");
								$(".text_5").fadeIn();
								},eval(4000+""+speedControl))
								
								
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(5000+""+speedControl));
								
							}	
							
							
						 else if( buttonSequence ==3 && spaceclick == 5){
							
							 SpaceAndAutorunSpeed = eval(2000+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");
							  $(".ludo_dice").fadeIn();
							   
							  		
								setTimeout(function(){
								$(".text_6").fadeIn();
								},eval(1000+""+speedControl))
								
								
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(2000+""+speedControl));
								
							}
							

							
							else if( buttonSequence ==3 && spaceclick == 6){
							
							 SpaceAndAutorunSpeed = eval(3500+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");
							  //$(".img21_100").show();
							   // $(".div5").addClass("move1");
							   
							    $(".contnt3_6,.contnt3_7,.contnt3_8,.contnt3_9").hide();
								$(".contnt3_6").fadeIn();
								 
							    setTimeout(function(){
								$(".img21_1").fadeOut();
								//$(".img21_10,.arrow_1,.text_4").fadeOut();
								//$(".img21_12,.arrow_2,.text_5").fadeOut();
								//$(".ludo_dice,.arrow_2,.text_6").fadeOut();
								$(".img21_72S01,.img21_72S02,.img21_72S03,.img21_72S04,.img21_72S05,.img21_72S06").fadeIn();
								
								},eval(500+""+speedControl))
								
								
								setTimeout(function(){
								//$(".img21_71").fadeOut();
								//$(".img21_71").fadeIn();
								$(".img21_72S01").animate({top: "+=-1em"});
								$(".img21_72S02").animate({left: "+=.5em"});
								$(".img21_72S03").animate({top: "=-.5em"});
								$(".img21_72S04").animate({right: "+=.5em"});
								$(".img21_72S05").animate({top: "+=-.5em"});
								$(".img21_72S06").animate({top: "+=.5em"});
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								//$(".img21_71").fadeOut();
								//$(".img21_71").fadeIn();
								$(".img21_72S01").animate({top: "0px"});
								$(".img21_72S02").animate({left: "0"});
								$(".img21_72S03").animate({top: "0px"});
								$(".img21_72S04").animate({right: "0"});
								$(".img21_72S05").animate({top: "0px"});
								$(".img21_72S06").animate({top: "0px"});
								},eval(3000+""+speedControl))
								
								
								setTimeout(function(){
								$(".img21_72S01,.img21_72S02,.img21_72S03,.img21_72S04,.img21_72S05,.img21_72S06").fadeOut();
								$(".img21_1").fadeIn();
								},eval(3500+""+speedControl))
								
								
									/*							
								setTimeout(function(){
								$(".arrow_2").css("visibility","visible");
								$(".text_5").fadeIn();
								},eval(4000+""+speedControl))
								*/
								
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(6000+""+speedControl));
								
							}	
							
							else if( buttonSequence ==3 && spaceclick == 7){
							
							 SpaceAndAutorunSpeed = eval(3500+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");
							 // $(".Content3_7").show();
							   // $(".div5").addClass("move1");
								 
							   
							    $(".contnt3_6,.contnt3_7,.contnt3_8,.contnt3_9").hide();
								$(".contnt3_7").fadeIn();
								 
							   
							   setTimeout(function(){
								$(".img21_1").fadeOut();
								$(".img21_72S07").fadeIn();
								},eval(500+""+speedControl))
								
								
							   
							   setTimeout(function(){
								$(".img21_72S07").fadeOut();
								$(".img21_1").fadeIn();
								},eval(3500+""+speedControl))
								
								
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(3500+""+speedControl));
								
							}	
							
							else if( buttonSequence ==3 && spaceclick == 8){
							
							 SpaceAndAutorunSpeed = eval(3500+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");
							  //$(".img21_100").show();
							   // $(".div5").addClass("move1");
										
							   
							    $(".contnt3_6,.contnt3_7,.contnt3_8,.contnt3_9").hide();
								$(".contnt3_8").fadeIn();
								 
										
								setTimeout(function(){
								$(".img21_1").fadeOut();
								$(".img21_72S08").fadeIn();
								},eval(500+""+speedControl))
								
								
							   
							   setTimeout(function(){
								$(".img21_72S08").fadeOut();
								$(".img21_1").fadeIn();
								},eval(3500+""+speedControl))/**/
							   
							   

								
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(3500+""+speedControl));
								
							}	
							
							else if( buttonSequence ==3 && spaceclick == 9){
							
							 SpaceAndAutorunSpeed = eval(3500+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");
							  //$(".img21_100").show();
							   // $(".div5").addClass("move1");
										
										
							   
							    $(".contnt3_6,.contnt3_7,.contnt3_8,.contnt3_9").hide();
								$(".contnt3_9").fadeIn();
								 
										
								setTimeout(function(){
								$(".img21_1").fadeOut();
								$(".img21_72S09").fadeIn();
								},eval(500+""+speedControl))
								
								
							   
							   setTimeout(function(){
								$(".img21_72S09").fadeOut();
								$(".img21_1").fadeIn();
								},eval(3500+""+speedControl))
							   
							   
								
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(3500+""+speedControl));
								
							}
							
							else if( buttonSequence ==3 && spaceclick == 10){
							
							 SpaceAndAutorunSpeed = eval(500+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");
							  //$(".img21_100").show();
							   // $(".div5").addClass("move1");
								$(".Tbl36TD3").css("border-left","2px solid green");
										
										
							    $(".contnt3_6,.contnt3_7,.contnt3_8,.contnt3_9").hide();
							    $(".contnt3_6,.contnt3_7,.contnt3_8,.contnt3_9").fadeIn();


								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(500+""+speedControl));
								
							}
							
							

							 
							 else if( buttonSequence ==17 && spaceclick == 2){
							
							 SpaceAndAutorunSpeed = eval(6000+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");
							  //$(".ludo_dice").fadeIn();
								$(".delay17_1").css("visibility","visible");
								$(".img5_1").fadeOut();					
								$(".img5_2").fadeIn();
							  		
								setTimeout(function(){
								$(".delay17_2").css("visibility","visible");
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								$(".img5_2").fadeOut();					
								$(".img5_3,.text5_1").fadeIn();
								},eval(1500+""+speedControl))
								
								setTimeout(function(){
								$(".delay17_3").css("visibility","visible");
								},eval(2500+""+speedControl))
								
								setTimeout(function(){
								$(".img5_3").fadeOut();					
								$(".img5_4,.text5_2").fadeIn();
								},eval(3000+""+speedControl))
								
								setTimeout(function(){
								$(".delay17_4").css("visibility","visible");
								},eval(4000+""+speedControl))
								
								setTimeout(function(){
								$(".img5_4").fadeOut();					
								$(".img5_5,.text5_3").fadeIn();
								},eval(4500+""+speedControl))
								
								setTimeout(function(){
								$(".img5_5").fadeOut();					
								$(".img5_6").fadeIn();
								},eval(5500+""+speedControl))
								
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(6000+""+speedControl));
								
							}
							
							else if( buttonSequence ==17 && spaceclick == 4){
							
							 SpaceAndAutorunSpeed = eval(4500+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");
							  //$(".ludo_dice").fadeIn();
								//$(".delay17_1").css("visibility","visible");
								//$(".img5_11").fadeOut();					
								$(".img5_11").fadeIn();
							  										
								setTimeout(function(){
								$(".img5_11").fadeOut();					
								$(".img5_12,.text5_11").fadeIn();
								},eval(1500+""+speedControl))
								
							
								setTimeout(function(){
								$(".img5_12").fadeOut();					
								$(".img5_13,.text5_12").fadeIn();
								},eval(2500+""+speedControl))
								

								setTimeout(function(){
								$(".img5_13").fadeOut();					
								$(".img5_14,.text5_13").fadeIn();
								},eval(3500+""+speedControl))
								
								setTimeout(function(){
								$(".img5_14").fadeOut();					
								$(".img5_15").fadeIn();
								},eval(4000+""+speedControl))
								
								setTimeout(function(){
								$(".hand18").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(4500+""+speedControl));
								
							}
														
							
							
							
							else if( buttonSequence ==15 && spaceclick == 2){
							
							 SpaceAndAutorunSpeed = eval(1000+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");					
								//$(".img5_11").fadeIn();
								
								
								setTimeout(function(){
								$(".imgmdd15_1").fadeOut();					
								$(".imgmdd15_2").fadeIn();								
								},eval(500+""+speedControl))
						
						
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(1000+""+speedControl));
								
							}
							
							else if( buttonSequence ==15 && spaceclick == 3){
							
							 SpaceAndAutorunSpeed = eval(1000+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");					
								//$(".img5_11").fadeIn();
								
								
								setTimeout(function(){
								$(".imgmdd15_2").fadeOut();					
								$(".imgmdd15_3").fadeIn();								
								},eval(500+""+speedControl))
						
						
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(1000+""+speedControl));
								
							}
							
														
							
							
														
							
							
							
							else if( buttonSequence ==16 && spaceclick == 2){
							
							 SpaceAndAutorunSpeed = eval(1000+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");					
								//$(".img5_11").fadeIn();
								
								
								setTimeout(function(){
								$(".imgmdd16_1").fadeOut();					
								$(".imgmdd16_2").fadeIn();								
								},eval(500+""+speedControl))
						
						
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(1000+""+speedControl));
								
							}
							
							else if( buttonSequence ==16 && spaceclick == 3){
							
							 SpaceAndAutorunSpeed = eval(1000+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");					
								//$(".img5_11").fadeIn();
								
								
								setTimeout(function(){
								$(".imgmdd16_2").fadeOut();					
								$(".imgmdd16_3").fadeIn();								
								},eval(500+""+speedControl))
						
						
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(1000+""+speedControl));
								
							}
							
														
							
							
							else if( buttonSequence ==11 && spaceclick == 2){
							
							 SpaceAndAutorunSpeed = eval(1500+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");					
								//$(".img5_11").fadeIn();
							  										
								$(".img11_1").fadeOut();					
								$(".img11_2").fadeIn();								
								
								setTimeout(function(){
								$(".delay11_1").css("visibility","visible");
								},eval(1000+""+speedControl))
						
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(1500+""+speedControl));
								
							}
							
							else if( buttonSequence ==11 && spaceclick == 3){
							
							 SpaceAndAutorunSpeed = eval(1500+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");					
								//$(".img5_11").fadeIn();
							  										
								//$(".img11_1").fadeOut();					
								//$(".img11_2").fadeIn();								
								
								setTimeout(function(){
								$(".delay11_2").css("visibility","visible");
								},eval(1000+""+speedControl))
						
								setTimeout(function(){
								$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(1500+""+speedControl));
								
							}
							
							else if( buttonSequence ==11 && spaceclick == 4){
							
							 SpaceAndAutorunSpeed = eval(500+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");					
								//$(".img5_11").fadeIn();
							  										
								//$(".img11_2").fadeOut();					
								$(".img11_3").fadeIn();								
														
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(500+""+speedControl));
								
							}
							
							else if( buttonSequence ==18 && spaceclick == 2){
							
							 SpaceAndAutorunSpeed = eval(1000+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");					
								//$(".img5_11").fadeIn();
							  										
								//$(".img11_2").fadeOut();					
								
								setTimeout(function(){
                                 $(".anim18_2_final").css("visibility","visible");
								},eval(500+""+speedControl))
								
								/*<!--setTimeout(function(){
								$(".anim18_2").hide();	
								$(".anim18_2_final").css("visibility","visible");
								},eval(1500+""+speedControl))-->*/
														
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(1000+""+speedControl));
								
							}
							
							else if( buttonSequence ==18 && spaceclick == 3){
							
							 SpaceAndAutorunSpeed = eval(1000+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");					
								//$(".img5_11").fadeIn();
							  										
								//$(".img11_2").fadeOut();					
								
								setTimeout(function(){
                                  $(".anim18_3_final").css("visibility","visible");
								},eval(500+""+speedControl))
								
								/*setTimeout(function(){
								$(".anim18_3").hide();	
								$(".anim18_3_final").css("visibility","visible");
								},eval(1500+""+speedControl))*/
														
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(1000+""+speedControl));
								
							}
							
							else if( buttonSequence ==18 && spaceclick == 4){
							
							 SpaceAndAutorunSpeed = eval(1000+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");					
								//$(".img5_11").fadeIn();
							  										
								//$(".img11_2").fadeOut();					
								
								setTimeout(function(){
                                  $(".anim18_4_final").css("visibility","visible");
								},eval(500+""+speedControl))
								
/*								setTimeout(function(){
								$(".anim18_4").hide();	
								$(".anim18_4_final").css("visibility","visible");
								},eval(1500+""+speedControl))*/
														
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(1000+""+speedControl));
								
							}
							
							else if( buttonSequence ==13 && spaceclick == 2){
							
							 SpaceAndAutorunSpeed = eval(3500+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");
							  
							   $(".img15_1").fadeIn();	
								
								setTimeout(function(){
								$(".img15_1").fadeOut();		
								$(".img15_2,.text15_1").fadeIn();	
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								$(".img15_2").fadeOut();		
								$(".img15_3").fadeIn();		
								},eval(2000+""+speedControl))
								
								setTimeout(function(){
								$(".img15_3").fadeOut();		
								$(".img15_4").fadeIn();		
								},eval(3000+""+speedControl))
														
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(3500+""+speedControl));
								
							}
							
							else if( buttonSequence ==13 && spaceclick == 3){
							
							 SpaceAndAutorunSpeed = eval(3000+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");					
								
								setTimeout(function(){
								$(".img16_1").fadeOut();					
								$(".img16_2").fadeIn();
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								$(".img16_2").fadeOut();					
								$(".img16_3").fadeIn();
								},eval(1500+""+speedControl))
								
								setTimeout(function(){
								$(".img16_3").fadeOut();					
								$(".img16_4").fadeIn();
								},eval(2000+""+speedControl))
								
								setTimeout(function(){
								$(".img16_4").fadeOut();					
								$(".img16_5,.text16_1").fadeIn();
								},eval(2500+""+speedControl))
														
								setTimeout(function(){
								//$(".handA").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(3000+""+speedControl));
								
							}
							
							else if( buttonSequence ==13 && spaceclick == 4){
							
							 SpaceAndAutorunSpeed = eval(1500+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");					
								
							  										
								$(".img16_5").fadeOut();					
								$(".img16_6").fadeIn();
								
								setTimeout(function(){
								$(".img16_6").fadeOut();					
								$(".img16_7,.text16_2").fadeIn();
								},eval(1000+""+speedControl))
						
								setTimeout(function(){
								
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(1500+""+speedControl));
								
							}
							
							else if( buttonSequence ==13 && spaceclick == 5){
							
							 SpaceAndAutorunSpeed = eval(2000+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");					
								//$(".img5_11").fadeIn();
							  										
								$(".img16_7").fadeOut();					
								$(".img16_8").fadeIn();
								
								
								
								setTimeout(function(){
								$(".img16_8").fadeOut();					
								$(".img16_9").fadeIn();
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								$(".img16_9").fadeOut();					
								$(".img16_10,.text16_3").fadeIn();
								},eval(1500+""+speedControl))
						
								setTimeout(function(){
								$(".hand14").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(2000+""+speedControl));
								
							}
							
							else if( buttonSequence ==9 && spaceclick == 2){
							
							 SpaceAndAutorunSpeed = eval(500+""+speedControl); 
							  $(".autorun").css('pointer-events', 'none')
							  $("button").prop("disabled",true).css("cursor","default");					
								//$(".img5_11").fadeIn();
							  										
								
								setTimeout(function(){
								$(".hand10").css("visibility","visible");
								$(".autorun").css('pointer-events', 'auto');
								$("button").prop("disabled",false).css("cursor","pointer");
								},eval(500+""+speedControl));
								
							}
							
							
					 else {
							SpaceAndAutorunSpeed = eval(500+""+speedControl);
							
						} 
						  }	
			     	  Local2=function(){}
			    	  Local3=function(){}
				      Local4=function(){}
				      Local5=function(){}
							  	  
						
						$(".poly_1").click(function(){ 
							/*$(".tab6_td6_2,.tab6_td6_3,.tab6_td6_4,.tab6_td6_5,.tab6_td6_6,.tab6_td6_7,.tab6_td6_8,.tab6_td6_9,.tab6_td6_10").hide();
							$(".tab6_td6_2").show();
							$(".tab6_td6_2_1,.tab6_td6_3_1,.tab6_td6_4_1,.tab6_td6_5_1,.tab6_td6_6_1,.tab6_td6_7_1,.tab6_td6_8_1,.tab6_td6_9_1").hide();
							$(".tab6_td6_1_1").show(); */
							
							$(".box1,.box1a").css({"color":"blue","background-color":"#afe","box-shadow":"2px 5px 5px grey"});
							$(".poly_1").css({"color":"red","background-color":"#FFD","box-shadow":"2px 5px 5px #a00"});
							$(".content2_2").css("visibility","visible");
							 
							});
					
                         $(".poly_2").click(function(){ 
							
							$(".tab6_td6_2,.tab6_td6_4,.tab6_td6_5,.tab6_td6_6,.tab6_td6_7,.tab6_td6_8,.tab6_td6_9,.tab6_td6_10").hide();
							
							 $(".tab6_td6_3").show();
							 $(".tab6_td6_1_1,.tab6_td6_3_1,.tab6_td6_4_1,.tab6_td6_5_1,.tab6_td6_6_1,.tab6_td6_7_1,.tab6_td6_8_1,.tab6_td6_9_1").hide();
							$(".tab6_td6_2_1").show();
							 
							 
							$(".box1,.box1a").css({"color":"blue","background-color":"#afe","box-shadow":"2px 5px 5px grey"});
							$(".poly_2").css({"color":"red","background-color":"#FFD","box-shadow":"2px 5px 5px #a00"});
							 $(".content2_2").css("visibility","visible");
							});
					  
					  $(".poly_3").click(function(){ 
							
							
							 $(".tab6_td6_1,.tab6_td6_2,.tab6_td6_3,.tab6_td6_5,.tab6_td6_6,.tab6_td6_7,.tab6_td6_8,.tab6_td6_9,.tab6_td6_10").hide();

							 $(".tab6_td6_4").show();
							 
							 $(".tab6_td6_1_1,.tab6_td6_2_1,.tab6_td6_4_1,.tab6_td6_5_1,.tab6_td6_6_1,.tab6_td6_7_1,.tab6_td6_8_1,.tab6_td6_9_1").hide();
							$(".tab6_td6_3_1").show();
							
							$(".box1,.box1a").css({"color":"blue","background-color":"#afe","box-shadow":"2px 5px 5px grey"});
							$(".poly_3").css({"color":"red","background-color":"#FFD","box-shadow":"2px 5px 5px #a00"});
							$(".content2_2").css("visibility","visible");
							});
					  
					  
					   $(".poly_4").click(function(){ 
							
							
							$(".tab6_td6_1,.tab6_td6_2,.tab6_td6_3,.tab6_td6_4,.tab6_td6_6,.tab6_td6_7,.tab6_td6_8,.tab6_td6_9,.tab6_td6_10").hide();
							$(".tab6_td6_5").show();
							
							$(".tab6_td6_1_1,.tab6_td6_2_1,.tab6_td6_3_1,.tab6_td6_5_1,.tab6_td6_6_1,.tab6_td6_7_1,.tab6_td6_8_1,.tab6_td6_9_1").hide();
							$(".tab6_td6_4_1").show();
							
							$(".box1,.box1a").css({"color":"blue","background-color":"#afe","box-shadow":"2px 5px 5px grey"});
							$(".poly_4").css({"color":"red","background-color":"#FFD","box-shadow":"2px 5px 5px #a00"});
							$(".content2_2").css("visibility","visible");
							});
					   
					    $(".poly_5").click(function(){ 
							
							
							$(".tab6_td6_1,.tab6_td6_2,.tab6_td6_3,.tab6_td6_4,.tab6_td6_5,.tab6_td6_7,.tab6_td6_8,.tab6_td6_9,.tab6_td6_10").hide();
							$(".tab6_td6_6").show();
							
							$(".tab6_td6_1_1,.tab6_td6_2_1,.tab6_td6_3_1,.tab6_td6_4_1,.tab6_td6_6_1,.tab6_td6_7_1,.tab6_td6_8_1,.tab6_td6_9_1").hide();
							$(".tab6_td6_5_1").show();
							
							$(".box1,.box1a").css({"color":"blue","background-color":"#afe","box-shadow":"2px 5px 5px grey"});
							$(".poly_5").css({"color":"red","background-color":"#FFD","box-shadow":"2px 5px 5px #a00"});
							$(".content2_2").css("visibility","visible");
							});
						
						 $(".poly_6").click(function(){ 
							
							
								$(".tab6_td6_6,.tab6_td6_2,.tab6_td6_3,.tab6_td6_4,.tab6_td6_5,.tab6_td6_7,.tab6_td6_8,.tab6_td6_9,.tab6_td6_10").hide();
								$(".tab6_td6_7").show();
								
								$(".tab6_td6_1_1,.tab6_td6_2_1,.tab6_td6_3_1,.tab6_td6_4_1,.tab6_td6_5_1,.tab6_td6_7_1,.tab6_td6_8_1,.tab6_td6_9_1").hide();
								$(".tab6_td6_6_1").show();
								
								$(".box1,.box1a").css({"color":"blue","background-color":"#afe","box-shadow":"2px 5px 5px grey"});
								$(".poly_6").css({"color":"red","background-color":"#FFD","box-shadow":"2px 5px 5px #a00"});
								$(".content2_2").css("visibility","visible");
								});
						 
						 $(".poly_7").click(function(){ 
							
							
								$(".tab6_td6_5,.tab6_td6_2,.tab6_td6_3,.tab6_td6_4,.tab6_td6_6,.tab6_td6_7,.tab6_td6_8,.tab6_td6_9,.tab6_td6_10").hide();
								$(".tab6_td6_8").show();
								
								$(".tab6_td6_1_1,.tab6_td6_2_1,.tab6_td6_3_1,.tab6_td6_4_1,.tab6_td6_6_1,.tab6_td6_5_1,.tab6_td6_8_1,.tab6_td6_9_1").hide();
								$(".tab6_td6_7_1").show();
								
								$(".box1,.box1a").css({"color":"blue","background-color":"#afe","box-shadow":"2px 5px 5px grey"});
								$(".poly_7").css({"color":"red","background-color":"#FFD","box-shadow":"2px 5px 5px #a00"});
								$(".content2_2").css("visibility","visible");
								});
						
						 $(".poly_8").click(function(){ 
							
								
								$(".tab6_td6_6,.tab6_td6_2,.tab6_td6_3,.tab6_td6_4,.tab6_td6_5,.tab6_td6_7,.tab6_td6_8,.tab6_td6_9,.tab6_td6_9,.tab6_td6_10").hide();
								$(".tab6_td6_9,.hand4").show();
								
								$(".tab6_td6_1_1,.tab6_td6_2_1,.tab6_td6_3_1,.tab6_td6_4_1,.tab6_td6_5_1,.tab6_td6_6_1,.tab6_td6_7_1,.tab6_td6_9_1").hide();
								$(".tab6_td6_8_1").show();
								
								$(".box1,.box1a").css({"color":"blue","background-color":"#afe","box-shadow":"2px 5px 5px grey"});
								$(".poly_8").css({"color":"red","background-color":"#FFD","box-shadow":"2px 5px 5px #a00"});
								$(".content2_2").css("visibility","visible");
								});
						 
						 $(".poly_9").click(function(){ 
							
								
								$(".tab6_td6_6,.tab6_td6_2,.tab6_td6_3,.tab6_td6_4,.tab6_td6_5,.tab6_td6_7,.tab6_td6_8,.tab6_td6_9,.tab6_td6_10").hide();
								$(".tab6_td6_10,.hand4").show();
								
								$(".tab6_td6_1_1,.tab6_td6_2_1,.tab6_td6_3_1,.tab6_td6_4_1,.tab6_td6_5_1,.tab6_td6_6_1,.tab6_td6_7_1,.tab6_td6_8_1").hide();
								$(".tab6_td6_9_1").show();
								
								$(".box1,.box1a").css({"color":"blue","background-color":"#afe","box-shadow":"2px 5px 5px grey"});
								$(".poly_9").css({"color":"red","background-color":"#FFD","box-shadow":"2px 5px 5px #a00"});
								$(".content2_2").css("visibility","visible");
								});
						  
						  
						  
						  
						  
						  	newLocalFunction = function(){
						  
					
				
					
					 if(buttonSequence == 1){
											
							$(".SpaceBarDiv").hide();
							$(".autorun").css('pointer-events','none');
							$("button").prop("disabled",true).css("cursor","default")
							$(".NewStepBtn").css('pointer-events','none');
	
								setTimeout(function(){
									$(".btn101").fadeIn();	
									$(".0000").fadeOut();
								},eval(500+""+speedControl))
								
								/*setTimeout(function(){
								$(".name1").css("visibility","visible");
								//$(".forth_bor1").show();				
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								$(".cube1").fadeIn();
								//$(".forth_bor1").show();				
								},eval(500+""+speedControl))
								
								setTimeout(function(){
								$(".name2").css("visibility","visible");
								//$(".forth_bor1").show();				
								},eval(2500+""+speedControl))
								
								setTimeout(function(){
								$(".cone1").fadeIn();
								//$(".forth_bor1").show();				
								},eval(2000+""+speedControl))
								
								setTimeout(function(){
								$(".name3").css("visibility","visible");
								//$(".forth_bor1").show();				
								},eval(3500+""+speedControl))
								
								setTimeout(function(){
								$(".cylinder1").fadeIn();
								//$(".forth_bor1").show();				
								},eval(3000+""+speedControl))
								
								setTimeout(function(){
								$(".name4").css("visibility","visible");
								//$(".forth_bor1").show();				
								},eval(4500+""+speedControl))
								
								setTimeout(function(){
								$(".pyramid1").fadeIn();
								//$(".forth_bor1").show();				
								},eval(4000+""+speedControl))*/
								
						extra305 = setTimeout(function(){
								$(".SpaceBarDiv").show();
								$(".autorun").css('pointer-events','auto');
								 $("button").prop("disabled",false).css("cursor","pointer");
								 $(".NewStepBtn").css('pointer-events','auto');
							},eval(500+""+speedControl));
						 }
						 
					if(buttonSequence == 3){
											
							$(".SpaceBarDiv").hide();
							$(".autorun").css('pointer-events','none');
							$("button").prop("disabled",true).css("cursor","default")
							$(".NewStepBtn").css('pointer-events','none');
	
								setTimeout(function(){
								$(".content6_1").css("visibility","visible");
								//$(".forth_bor1").show();				
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								$(".img21_1").fadeIn();
								//$(".forth_bor1").show();				
								},eval(1500+""+speedControl))
								
						extra305 = setTimeout(function(){
								$(".SpaceBarDiv").show();
								$(".autorun").css('pointer-events','auto');
								 $("button").prop("disabled",false).css("cursor","pointer");
								 $(".NewStepBtn").css('pointer-events','auto');
							},eval(2500+""+speedControl));
						 }
						 
					if(buttonSequence == 17){
											
							$(".SpaceBarDiv").hide();
							$(".autorun").css('pointer-events','none');
							$("button").prop("disabled",true).css("cursor","default")
							$(".NewStepBtn").css('pointer-events','none');
	
								setTimeout(function(){
								$(".img5_1").fadeIn();			
								},eval(500+""+speedControl))
								
						extra305 = setTimeout(function(){
								$(".SpaceBarDiv").show();
								$(".autorun").css('pointer-events','auto');
								 $("button").prop("disabled",false).css("cursor","pointer");
								 $(".NewStepBtn").css('pointer-events','auto');
							},eval(1000+""+speedControl));
						 }
						 
						 /*if(buttonSequence == 16){
											
							$(".SpaceBarDiv").hide();
							$(".autorun").css('pointer-events','none');
							$("button").prop("disabled",true).css("cursor","default")
							$(".NewStepBtn").css('pointer-events','none');
	
							setTimeout(function(){
								$(".img16_1").fadeOut();					
								$(".img16_2").fadeIn();
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								$(".img16_2").fadeOut();					
								$(".img16_3").fadeIn();
								},eval(1500+""+speedControl))
								
								setTimeout(function(){
								$(".img16_3").fadeOut();					
								$(".img16_4").fadeIn();
								},eval(2000+""+speedControl))
								
								setTimeout(function(){
								$(".img16_4").fadeOut();					
								$(".img16_5,.text16_1").fadeIn();
								},eval(2500+""+speedControl))
								
						extra305 = setTimeout(function(){
								$(".SpaceBarDiv").show();
								$(".autorun").css('pointer-events','auto');
								 $("button").prop("disabled",false).css("cursor","pointer");
								 $(".NewStepBtn").css('pointer-events','auto');
							},eval(3000+""+speedControl));
						 }*/
						 
						 if(buttonSequence == 5){
											
							$(".SpaceBarDiv").hide();
							$(".autorun").css('pointer-events','none');
							$("button").prop("disabled",true).css("cursor","default")
							$(".NewStepBtn").css('pointer-events','none');
							
							  $(".img2_1").fadeIn();	
	
								setTimeout(function(){
								$(".img2_1").fadeOut();		
								$(".img2_2").fadeIn();	
								$(".delay5_1").css("visibility","visible");
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								$(".img2_2").fadeOut();		
								$(".img2_3,.text2_1,.text2_2").fadeIn();		
								},eval(2000+""+speedControl))
								
								setTimeout(function(){		
								$(".delay5_2").css("visibility","visible");
								},eval(3000+""+speedControl))
								
						        extra305 = setTimeout(function(){
								$(".SpaceBarDiv").show();
								$(".autorun").css('pointer-events','auto');
								 $("button").prop("disabled",false).css("cursor","pointer");
								 $(".NewStepBtn").css('pointer-events','auto');
							},eval(3500+""+speedControl));
						 }
						 
						  if(buttonSequence == 6){
											
							$(".SpaceBarDiv").hide();
							$(".autorun").css('pointer-events','none');
							$("button").prop("disabled",true).css("cursor","default")
							$(".NewStepBtn").css('pointer-events','none');
							
							  $(".img6_1").fadeIn();	
	
								setTimeout(function(){
								$(".img6_1").fadeOut();		
								$(".img6_2,.text6_1").fadeIn();	
								$(".delay6_1").css("visibility","visible");
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								$(".img6_2").fadeOut();		
								$(".img6_3,.text6_2").fadeIn();		
								},eval(2000+""+speedControl))
								
								setTimeout(function(){
								$(".img6_3").fadeOut();		
								$(".img6_4,.text6_3").fadeIn();		
								},eval(3000+""+speedControl))

								setTimeout(function(){	
								$(".delay6_2").css("visibility","visible");
								},eval(4000+""+speedControl))
								
						        extra305 = setTimeout(function(){
								$(".SpaceBarDiv").hide();
								$(".autorun").css('pointer-events','auto');
								 $("button").prop("disabled",false).css("cursor","pointer");
								 $(".NewStepBtn").css('pointer-events','auto');
							    },eval(4500+""+speedControl));
						 }
						 
						  if(buttonSequence == 13){
											
							$(".SpaceBarDiv").hide();
							$(".autorun").css('pointer-events','none');
							$("button").prop("disabled",true).css("cursor","default")
							$(".NewStepBtn").css('pointer-events','none');
							  
							   $(".img14_1").fadeIn();	
							
								setTimeout(function(){
								$(".img14_1").fadeOut();		
								$(".img14_2").fadeIn();	
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								$(".img14_2").fadeOut();		
								$(".img14_3,.text2_1,.text2_2").fadeIn();		
								},eval(2000+""+speedControl))
								
						        extra305 = setTimeout(function(){
								$(".SpaceBarDiv").show();
								$(".autorun").css('pointer-events','auto');
								 $("button").prop("disabled",false).css("cursor","pointer");
								 $(".NewStepBtn").css('pointer-events','auto');
							},eval(2500+""+speedControl));
						 }
						 
						 /* if(buttonSequence == 15){
											
							$(".SpaceBarDiv").hide();
							$(".autorun").css('pointer-events','none');
							$("button").prop("disabled",true).css("cursor","default")
							$(".NewStepBtn").css('pointer-events','none');
								
								setTimeout(function(){
								$(".img15_1").fadeOut();		
								$(".img15_2,.text15_1").fadeIn();	
								},eval(1000+""+speedControl))
								
								setTimeout(function(){
								$(".img15_2").fadeOut();		
								$(".img15_3").fadeIn();		
								},eval(2000+""+speedControl))
								
								setTimeout(function(){
								$(".img15_3").fadeOut();		
								$(".img15_4").fadeIn();		
								},eval(3000+""+speedControl))
								
						        extra305 = setTimeout(function(){
								$(".SpaceBarDiv").hide();
								$(".autorun").css('pointer-events','auto');
								 $("button").prop("disabled",false).css("cursor","pointer");
								 $(".NewStepBtn").css('pointer-events','auto');
							},eval(3500+""+speedControl));
						 }*/
						 
						 if(buttonSequence == 11){
											
							$(".SpaceBarDiv").hide();
							$(".autorun").css('pointer-events','none');
							$("button").prop("disabled",true).css("cursor","default")
							$(".NewStepBtn").css('pointer-events','none');
	
								setTimeout(function(){
								$(".img11_1").fadeIn();			
								},eval(500+""+speedControl))
								
						extra305 = setTimeout(function(){
								$(".SpaceBarDiv").show();
								$(".autorun").css('pointer-events','auto');
								 $("button").prop("disabled",false).css("cursor","pointer");
								 $(".NewStepBtn").css('pointer-events','auto');
							},eval(1000+""+speedControl));
						 }
						 
						  if(buttonSequence == 12){
											
							$(".SpaceBarDiv").hide();
							$(".autorun").css('pointer-events','none');
							$("button").prop("disabled",true).css("cursor","default")
							$(".NewStepBtn").css('pointer-events','none');
	
								setTimeout(function(){
								$(".img12_1").fadeIn();			
								},eval(500+""+speedControl))
								
								setTimeout(function(){
								$(".delay12_1").css("visibility","visible");		
								},eval(1500+""+speedControl))
								
								setTimeout(function(){					
								$(".img12_2").fadeIn();
								$(".img12_1").fadeOut();
								},eval(1700+""+speedControl))
								
						        extra305 = setTimeout(function(){
								$(".hand13").show();
								$(".hand13").css("visibility","visible");
								$(".SpaceBarDiv").hide();
								$(".autorun").css('pointer-events','auto');
								 $("button").prop("disabled",false).css("cursor","pointer");
								 $(".NewStepBtn").css('pointer-events','auto');
							},eval(2000+""+speedControl));
						 }
						 
						   if(buttonSequence == 4){
											
							$(".SpaceBarDiv").hide();
							$(".autorun").css('pointer-events','none');
							$("button").prop("disabled",true).css("cursor","default")
							$(".NewStepBtn").css('pointer-events','none');
	
								setTimeout(function(){
								$(".delay4_1").css("visibility","visible");
								},eval(500+""+speedControl))
								
								setTimeout(function(){
								$(".img4_2").fadeIn();	
								$(".img4_1").fadeOut();
								},eval(1000+""+speedControl))
								
								setTimeout(function(){					
								$(".img4_3").fadeIn();	
								$(".img4_2").fadeOut();
								},eval(1500+""+speedControl))
								
								setTimeout(function(){					
								$(".img4_4").fadeIn();	
								$(".img4_3").fadeOut();
								},eval(2000+""+speedControl))
								
								setTimeout(function(){					
								$(".img4_5").fadeIn();	
								$(".img4_4").fadeOut();
								},eval(2500+""+speedControl))
								
								setTimeout(function(){					
								$(".img4_6").fadeIn();	
								$(".img4_5").fadeOut();
								},eval(3000+""+speedControl))
								
								setTimeout(function(){					
								$(".img4_7").fadeIn();	
								$(".img4_6").fadeOut();
								},eval(3500+""+speedControl))
								
								setTimeout(function(){					
								$(".img4_8,.text4_1").fadeIn();	
								$(".img4_7").fadeOut();
								},eval(4000+""+speedControl))
								
						        extra305 = setTimeout(function(){
								$(".SpaceBarDiv").show();
								$(".autorun").css('pointer-events','auto');
								 $("button").prop("disabled",false).css("cursor","pointer");
								 $(".NewStepBtn").css('pointer-events','auto');
							},eval(4500+""+speedControl));
						 }
			}
			
						  
						  
						   });