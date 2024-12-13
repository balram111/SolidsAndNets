// JavaScript Document
$(document).ready(function(){
						  
						  
			///////////////////////////*for container-left button middle*/ /////////////////////////////////
						
						   $(".first_button").click(function(){
									$(".middle1").css("margin-top",0+"px")					
								    $(".Content00").show();
									$(".cuboid1,.cube1,.cylinder1,.pyramid1,.cone1,.prism1").show();
									 var hk=$(".middle1").height();
									 var hk1=$(".container-right").height();
								
									 var mar = (hk1-hk)/2;
									 if(hk < hk1){
									 $(".middle1").css("margin-top",mar+"px")
									 }else
									 {
										 $(".middle1").css("margin-top",5+"px")
									 }
									 $(".Content00").hide();
									 $(".cuboid1,.cube1,.cylinder1,.pyramid1,.cone1,.prism1").hide();
							})
						   
						    $(".second_button").click(function(){
									$(".middle2").css("margin-top",0+"px")					
								    $(".Content00,.SecondButtonCon3 ").show();
									
									 var hk=$(".middle2").height();
									 var hk1=$(".container-right").height();
									 var hk2=$(".img3").height();
								
									 var mar = (hk1-hk(hk2))/2;
									 if(hk < hk1(hk2)){
									 $(".middle2").css("margin-top",mar+"px")
									 }else
									 {
										 $(".middle2").css("margin-top",5+"px")
									 }
									 $(".Content00,.SecondButtonCon3 ").hide();
									 
							})
						   							  
							   $(".third_button1").click(function(){
							   $(".middle3_1").css("margin-top",0+"px")					 
							   $(".Content00").show().css("inline-block");
								 var hk=$(".middle3_1").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".buttons1").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk2+hk) < hk1){
								 $(".middle3_1").css("margin-top",mar+"px")
								 }
								 else
								 { 
									 $(".middle3_1").css("margin-top",hk2+5+"px")
								 }
								 $(".Content00").hide();
								 
						})
							   
							    $(".third_button2").click(function(){
							   $(".middle3_2").css("margin-top",0+"px")					 
							   $(".Content00").show().css("inline-block");
								 var hk=$(".middle3_2").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".buttons1").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk2+hk) < hk1){
								 $(".middle3_2").css("margin-top",mar+"px")
								 }
								 else
								 { 
									 $(".middle3_2").css("margin-top",hk2+5+"px")
								 }
								 $(".Content00").hide();
								 
						})
							   
							  /* $(".third_button2").click(function(){
							   $(".middle3_2").css("margin-top",0+"px")					 
							   $(".Content00").show()
							     $(".check2").show();
								 var hk=$(".middle3_2").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".buttons1").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk2+hk) < hk1){
								 $(".middle3_2").css("margin-top",mar+"px")
								 }
								 else
								 { 
									 $(".middle3_2").css("margin-top",hk2+5+"px")
								 }
								$(".Content00").hide();
								 
						})*/	   
			
			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////					   
							   
		//////////////////////////////////////*for Sub-button middle	*/ /////////////////////////////////
							   							  
							 /* $(".fifth_button").click(function(){
									$(".middle5").css("margin-top",0+"px")					
								    $(".Content00").show();
									$(".cuboid1,.cube1,.cylinder1,.pyramid1,.cone1,.prism1").show();
									 var hk=$(".middle5").height();
									 var hk1=$(".container-right").height();
								
									 var mar = (hk1-hk)/2;
									 if(hk < hk1){
									 $(".middle5").css("margin-top",mar+"px")
									 }else
									 {
										 $(".middle5").css("margin-top",5+"px")
									 }
									 $(".Content00").hide();
									 $(".cuboid1,.cube1,.cylinder1,.pyramid1,.cone1,.prism1").hide();
							})*/
							  /*
							   $(".sixth_button").click(function(){
									$(".middle6").css("margin-top",0+"px")					
								    $(".Content00").show();
									$(".cuboid1,.cube1,.cylinder1,.pyramid1,.cone1,.prism1").show();
									 var hk=$(".middle6").height();
									 var hk1=$(".container-right").height();
								
									 var mar = (hk1-hk)/2;
									 if(hk < hk1){
									 $(".middle6").css("margin-top",mar+"px")
									 }else
									 {
										 $(".middle6").css("margin-top",5+"px")
									 }
									 $(".Content00").hide();
									 $(".cuboid1,.cube1,.cylinder1,.pyramid1,.cone1,.prism1").hide();
							})*/
							   
							    $(".sixth_button").click(function(){
								
								$(".middle6").css("margin-top",0+"px")
								 
								 $(".Content00").show().css("inline-block");
								 var hk=$(".middle6").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".content18_1_fix").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk+hk2) < hk1){
								 $(".middle6").css("margin-top",mar+"px")
								 }
								 else
								 {
									 $(".middle6").css("margin-top",hk2+5+"px")
								 }
								 $(".Content00").hide();
							})
							  
							  /*  
							  $(".sixth_button").click(function(){
									$(".middle6").css("margin-top",0+"px")					
								    $(".Content00").show();
									 var hk=$(".middle6").height();
									 var hk1=$(".container-right").height();
								
									 var mar = (hk1-hk)/2;
									 if(hk < hk1){
									 $(".middle6").css("margin-top",mar+"px")
									 }else
									 {
										 $(".middle6").css("margin-top",5+"px")
									 }
									 $(".Content00").hide();
							})  */
							   
							   
							$(".fifth_button1").click(function(){
								$(".middle15").css("margin-top",0+"px")					 
								$(".Content00").show();
							 
								 var hk=$(".middle15").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".buttons1").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk2+hk) < hk1){
								 	$(".middle15").css("margin-top",mar+"px")
								 } else { 
								 	$(".middle15").css("margin-top",hk2+5+"px")
								 }
						    });
							   
							   
							$(".fifth_button2").click(function(){
								$(".middle16").css("margin-top",0+"px")					 
								$(".Content00").show();
							 
								 var hk=$(".middle16").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".buttons1").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk2+hk) < hk1){
								 	$(".middle16").css("margin-top",mar+"px")
								 } else { 
								 	$(".middle16").css("margin-top",hk2+5+"px")
								 }
						    });
							
							
							
							   $(".poly_1").click(function(){
								
								$(".middle2_1").css("margin-top",0+"px")
								 
								 $(".Content00").show().css("inline-block");
								 var hk=$(".middle2_1").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".content12_1_fix").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk+hk2) < hk1){
								 $(".middle2_1").css("margin-top",mar+"px")
								 }
								 else
								 {
									 $(".middle2_1").css("margin-top",hk2+5+"px")
								 }
								 $(".Content00").hide();
							})
							   
							    $(".poly_2").click(function(){
								
								$(".middle2_2").css("margin-top",0+"px")
								 
								 $(".Content00").show().css("inline-block");
								 var hk=$(".middle2_2").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".content12_1_fix").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk+hk2) < hk1){
								 $(".middle2_2").css("margin-top",mar+"px")
								 }
								 else
								 {
									 $(".middle2_2").css("margin-top",hk2+5+"px")
								 }
								 $(".Content00").hide();
							})
								
								$(".poly_3").click(function(){
								
								$(".middle2_3").css("margin-top",0+"px")
								 
								 $(".Content00").show().css("inline-block");
								 var hk=$(".middle2_3").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".content12_1_fix").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk+hk2) < hk1){
								 $(".middle2_3").css("margin-top",mar+"px")
								 }
								 else
								 {
									 $(".middle2_3").css("margin-top",hk2+5+"px")
								 }
								 $(".Content00").hide();
							})
								
								$(".poly_4").click(function(){
								
								$(".middle2_4").css("margin-top",0+"px")
								 
								 $(".Content00").show().css("inline-block");
								 var hk=$(".middle2_4").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".content12_1_fix").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk+hk2) < hk1){
								 $(".middle2_4").css("margin-top",mar+"px")
								 }
								 else
								 {
									 $(".middle2_4").css("margin-top",hk2+5+"px")
								 }
								 $(".Content00").hide();
							})
								
								$(".poly_5").click(function(){
								
								$(".middle2_5").css("margin-top",0+"px")
								 
								 $(".Content00").show().css("inline-block");
								 var hk=$(".middle2_5").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".content12_1_fix").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk+hk2) < hk1){
								 $(".middle2_5").css("margin-top",mar+"px")
								 }
								 else
								 {
									 $(".middle2_5").css("margin-top",hk2+5+"px")
								 }
								 $(".Content00").hide();
							})
								
								$(".poly_6").click(function(){
								
								$(".middle2_6").css("margin-top",0+"px")
								 
								 $(".Content00").show().css("inline-block");
								 var hk=$(".middle2_6").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".content12_1_fix").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk+hk2) < hk1){
								 $(".middle2_6").css("margin-top",mar+"px")
								 }
								 else
								 {
									 $(".middle2_6").css("margin-top",hk2+5+"px")
								 }
								 $(".Content00").hide();
							})
								
								$(".poly_7").click(function(){
								
								$(".middle2_7").css("margin-top",0+"px")
								 
								 $(".Content00").show().css("inline-block");
								 var hk=$(".middle2_7").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".content12_1_fix").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk+hk2) < hk1){
								 $(".middle2_7").css("margin-top",mar+"px")
								 }
								 else
								 {
									 $(".middle2_7").css("margin-top",hk2+5+"px")
								 }
								 $(".Content00").hide();
							})
							   
						   
						    $(".fourth_button1").click(function(){
							   $(".middle4_1").css("margin-top",0+"px")					 
							   $(".Content00").show().css("inline-block");
								 var hk=$(".middle4_1").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".buttons1").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk2+hk) < hk1){
								 $(".middle4_1").css("margin-top",mar+"px")
								 }
								 else
								 { 
									 $(".middle4_1").css("margin-top",hk2+5+"px")
								 }
								 $(".Content00").hide();
								 
						})
							
							$(".fourth_button2").click(function(){
							   $(".middle4_2").css("margin-top",0+"px")					 
							   $(".Content00").show().css("inline-block");
								 var hk=$(".middle4_2").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".buttons1").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk2+hk) < hk1){
								 $(".middle4_2").css("margin-top",mar+"px")
								 }
								 else
								 { 
									 $(".middle4_2").css("margin-top",hk2+5+"px")
								 }
								 $(".Content00").hide();
								 
						})
							
							$(".fourth_button3").click(function(){
							   $(".middle4_3").css("margin-top",0+"px")					 
							   $(".Content00").show().css("inline-block");
								 var hk=$(".middle4_3").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".buttons1").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk2+hk) < hk1){
								 $(".middle4_3").css("margin-top",mar+"px")
								 }
								 else
								 { 
									 $(".middle4_3").css("margin-top",hk2+5+"px")
								 }
								 $(".Content00").hide();
								 
						})
				
					////////////////////////////////////////////////////////////////////////////////////////////////////////	 
						 
						 
					
							
  });