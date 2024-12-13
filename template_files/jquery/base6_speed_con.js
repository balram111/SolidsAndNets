$(document).ready(function(){
						 /* 
						  $(window).bind('resize', function() {
								 location.reload();
						 	 });
						  */
						  window.onresize=function(){
							window.location=window.location;  
						  }
	
							window.h = $(window).innerHeight();
							window.width1 = $(window).width();
							window.w_Set = $(window).innerWidth();
							window.h_Set = $(window).innerHeight();
							
	 
							
							///////////////// Font Size for mobile ///////////////////////
							  
							   var MainBtns_fnt=$(".MainBtns").css("font-size");  
							   var handMainBtn_fnt=$(".handMainBtn").css("font-size");  
							   var headerH2_fnt=$(".header h2").css("font-size");
							   var containerRight_fnt=$(".container-right").css("font-size");
							   var Copyright_fnt=$(".Copyright").css("font-size");  
							   var SpaceBarButton_fnt =$(".SpaceBarButton ").css("font-size");
							   
							   MainBtns_fnt=parseInt(MainBtns_fnt);
							   handMainBtn_fnt=parseInt(handMainBtn_fnt);
							   headerH2_fnt=parseInt(headerH2_fnt);
							   containerRight_fnt=parseInt(containerRight_fnt);
							   Copyright_fnt=parseInt(Copyright_fnt);
							   SpaceBarButton_fnt=parseInt(SpaceBarButton_fnt);
							   
							   
							   
								if (String(navigator.userAgent).indexOf("Mobile") != -1) {
									
									if(width1 < 575){
									
										$(".MainBtns").css("font-size",MainBtns_fnt-1+"px");
										$(".handMainBtn").css("font-size",handMainBtn_fnt-1+"px");
										$(".header h2").css("font-size",headerH2_fnt-1+"px");  
										$(".container-right").css("font-size",containerRight_fnt-1+"px");  
										$(".Copyright").css("font-size",Copyright_fnt-1+"px");  
										$(".SpaceBarButton").css("font-size",SpaceBarButton_fnt-1+"px");  
									
									}else{
										$(".MainBtns").css("font-size",MainBtns_fnt-2+"px"); 
										$(".handMainBtn").css("font-size",handMainBtn_fnt-2+"px");
										$(".header h2").css("font-size",headerH2_fnt-2+"px");  
										$(".container-right").css("font-size",containerRight_fnt-2+"px");  
										$(".Copyright").css("font-size",Copyright_fnt-2+"px");  
										$(".SpaceBarButton").css("font-size",SpaceBarButton_fnt-2+"px");  
								
									}
									
								}
						
						/////////////////////////////////////////////////////////////////////////////////////////
											   
											   
											   
											   
							  $(".SpaceBarButton").css({"display":"block","margin":"0 auto"}) 
								$(".SpaceBarDiv").css({"margin":"0 auto"}) 
						 
						   
						   
						  
						    $(".first_button").click(function(){
								$(".first_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".second_button,.third_button,.fourth_button,.fifth_button,.sixth_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								 
								$(".hand1,.hand3,.hand4,.hand5,.hand6").hide();
								
							});
						 
						    $(".second_button").click(function(){
															    
								$(".second_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".first_button,.third_button,.fourth_button,.fifth_button,.sixth_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								 
							});
							 $(".third_button").click(function(){
								$(".third_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".second_button,.first_button,.fourth_button,.fifth_button,.sixth_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
							 
							});
							  $(".fourth_button").click(function(){
								$(".fourth_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								$(".second_button,.third_button,.first_button,.fifth_button,.sixth_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								 
							});
							   $(".fifth_button").click(function(){
								$(".fifth_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".second_button,.third_button,.fourth_button,.first_button,.sixth_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								 
							});
							    $(".sixth_button").click(function(){
								$(".sixth_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".second_button,.third_button,.fourth_button,.fifth_button,.first_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								 
							});
						   
		
		
		
 if(String(navigator.userAgent).indexOf("Edge") != -1){
						 
 						  
	if((window.width1 >= 450 && window.width1 <= 574)){  
	
	$(".handMainBtn").css("font-size", 17+"px");
	
	}else if((window.width1 >= 575 && window.width1 <= 675)){  
	
	$(".handMainBtn").css("font-size", 17+"px");
	
	}else if((window.width1 >= 676 && window.width1 <= 775)){  
	
	$(".handMainBtn").css("font-size", 20+"px");
	
	}else if((window.width1 >= 776 && window.width1 <= 876)){  
	
	$(".handMainBtn").css("font-size", 20+"px");
	
	}else if((window.width1 >= 877 && window.width1 <= 980)){  
	
	$(".handMainBtn").css("font-size", 25+"px");
	
	}else if((window.width1 >= 981 && window.width1 <= 1100)){  
	
	$(".handMainBtn").css({"font-size" : 28+"px" , "margin-top" : -65+"px"});
	
	}else if((window.width1 >= 1101 && window.width1 <= 1300)){ 
	
	$(".handMainBtn").css({"font-size" : 28+"px" , "margin-top" : -65+"px"});
	
	}else if((window.width1 >= 1301 && window.width1 <= 1500)){  
	
	$(".handMainBtn").css({"font-size" : 28+"px" , "margin-top" : -60+"px"});
	
	}else if((window.width1 >= 1501 && window.width1 <= 1800)){  
	
	$(".handMainBtn").css({"font-size" : 40+"px" , "margin-top" : -95+"px"});
	
	}else if((window.width1 >= 1801 && window.width1 <= 2000)){ 
	
	$(".handMainBtn").css({"font-size" : 45+"px" , "margin-top" : -98+"px"});
	
	}else if((window.width1 >= 2000)){  
	
	$(".handMainBtn").css("font-size", 70+"px");
	
	}
}

  

					
 $(".print").click(function(){
							
	 window.print();

					})
         $(".ButtonsForMasterQuery").click(function(){
													  $(".middle").hide();	
											});   
		 
		 
		 
		 
		 
		 		window.speedControl="*"+1;						
							
	 $( ".slider" ).slider({value:10,min: 0,max: 20,step: 1,slide: function( event, ui ) {														   
		//orientation:"vertical",
		this_value = ui.value;	
		//$( ".d1" ).html(this_value);
		
		
		   if(this_value==10){
			 speed=1;
			speedControl="*"+speed;
				cssVariable();
				
				
			}else if(this_value>10){
		
		      if(this_value==11){
			      speed=1.1;
			    }else if(this_value==12){
					speed=1.3;
				}else if(this_value==13){
				   speed=1.5;
				}else if(this_value==14){
				   speed=1.7;
				}else if(this_value==15){
				   speed=1.9;
				}else if(this_value==16){
				   speed=2.1;
				}else if(this_value==17){
				   speed=2.3;
				}else if(this_value==18){
				   speed=2.5;
				}else if(this_value==19){
				   speed=2.7;
				}else if(this_value==20){
				    speed=2.9;
				}
			speedControl="/"+speed;
		
		//alert(speed)
		
		cssVariable();
		

		
		
		}else if(this_value<10){
			
			 if(this_value==9){
				  speed=1.1;
				}else if(this_value==8){
				 speed=1.3;
				}else if(this_value==7){
				 speed=1.5;
				}else if(this_value==6){
				 speed=1.7;
				}else if(this_value==5){
				 speed=1.9;
				}else if(this_value==4){
				 speed=2.1;
				}else if(this_value==3){
				  speed=2.3;
				}else if(this_value==2){
				  speed=2.5;
				}else if(this_value==1){
			     	speed=2.7;
				}else if(this_value==0){
			     	speed=2.9;
				}
				
			
			
			
			
			
			speedControl="*"+speed;
			
			
			
			cssVariable();
		
		
		
		
		}
		
		
		
		
		
		}
			
});

		 
		 
		 
		 
		 
		 
		 
		 
						   }); 

