$(document).ready(function(){
						   
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
						     					 
							 $(".hand1").show();
							 
							 $(".first_button").click(function(){
															   buttonSequence = 1;
															   ContentCount = 5;
															   $(".hand,.ContentContainer,.hdn").hide();
															   $(".tick1,.ContentFirstButton,.hand1,.middle1").show().css("display","inline-block");	
															   $(".cuboid1,.cube1,.cylinder1,.pyramid1,.cone1,.prism1").hide();
															   $(".name1,.name2,.name3,.name4,.name5,.name6").css("visibility","hidden");
															   $(".autorun").css("pointer-events","auto");
																 });
							 
							  $(".second_button").click(function(){
																  buttonSequence = 2;
																  ContentCount = 0;
															  $(".hand,.ContentContainer,.hand2,.handA").hide();
															  $(".tick2,.ContentSecondButton,.middle2").show().css("display","inline-block");	
															  $(".autorun").css("pointer-events","auto");
															  
										$(".tab6_td6_6_2,.content3_2").css("visibility","hidden");
										$(".tab6_td6_1,.tab6_td6_2,.tab6_td6_3,.tab6_td6_4,.tab6_td6_5,.tab6_td6_6,.tab6_td6_7,.tab6_td6_8,.tab6_td6_9,.tab6_td6_10").hide();
										$(".tab6_td6_1_1,.tab6_td6_2_1,.tab6_td6_3_1,.tab6_td6_4_1,.tab6_td6_5_1,.tab6_td6_6_1,.tab6_td6_7_1,.tab6_td6_8_1,.tab6_td6_9_1").hide();
													
													$(".box1").css({"color":"blue","background-color":"#afe","box-shadow":"2px 5px 5px grey"});
													$(".box2").css({"color":"red","background-color":"#FFD","box-shadow":"2px 5px 5px #a00"});
																 });
							  
							   $(".third_button").click(function(){
																  buttonSequence = 10;
																  ContentCount = 0;
															   $(".hand,.ContentContainer,.tickA,.handA").hide();
															   $(".tick10,.ContentThirdButton,.hand10").show().css("display","inline-block");
															   $(".autorun").css("pointer-events","auto");
															  // $(".third_button1,.third_button2").css('color','color:#000000;');
															    $(".third_button1,.third_button2").css({"color": "#000","box-shadow":"none"}); 
																 });
							   
							   $(".third_button1").click(function(){
																   buttonSequence = 11;
																   ContentCount = 5;
															   $(".hand,.ContentContainer,.hand11").hide();
															   $(".tick11,.ContentThirdButton,.middle3_1").show().css("display","inline-block");
															   $(".autorun").css("pointer-events","auto");
															  $(".third_button1").css({"color": "rgb(204, 0, 0)","box-shadow":"rgb(236, 7, 7) 0px 3px 15px, rgba(255, 255, 255, 0.3) 0px 1px 0px inset, rgba(255, 255, 255, 0.5) 0px 0px 3px inset"});

                          $(".third_button2").css({"color": "#000","box-shadow":"none"});

															//   $(".third_button1").css('color','color:#C00;');
															 //  $(".third_button2").css('color','color:#000000;');
															   
															  // $(".img11_1").show();
															   $(".img11_1,.img11_2,.img11_3").hide();
															   
													$(".delay11_1,.delay11_2,.delay11_3,.delay11_4").css("visibility","hidden");
																 });
							   
							   
							    $(".third_button2").click(function(){
																   buttonSequence = 12;
																   ContentCount = 10;
															   $(".hand,.ContentContainer,.tab4,.hand12").hide();
													           $(".tick12,.ContentThirdButton,.middle3_2").show().css("display","inline-block");
															   $(".autorun").css("pointer-events","auto");
															   $(".face,.corners,.edges,.stmnt,.ans1,.ans2,.ans3,.ans4,.bdr_lft1").css("visibility","hidden");
															 //  $(".third_button2").css('color','color:#C00;');
															  // $(".third_button1").css('color','color:#000000;');
															  
															   $(".third_button2").css({"color": "rgb(204, 0, 0)","box-shadow":"rgb(236, 7, 7) 0px 3px 15px, rgba(255, 255, 255, 0.3) 0px 1px 0px inset, rgba(255, 255, 255, 0.5) 0px 0px 3px inset"});

                          $(".third_button1").css({"color": "#000","box-shadow":"none"});

															   
															   $(".img12_1,.img12_2,.img12_3").hide();
															   
													$(".delay12_1,.delay12_2,.delay12_3,.delay12_4").css("visibility","hidden");
													
																 });
								
								 $(".fourth_button").click(function(){
																  buttonSequence = 13;
																  ContentCount = 5;
															   $(".hand,.ContentContainer,.tick4,.handA,.tickA").hide();
															   $(".tick13,.ContentFourthButton,.middle4").show().css("display","inline-block");
															   $(".autorun").css("pointer-events","auto");
															   $(".fourth_button1,.fourth_button2,.fourth_button3").css('color','color:#000000;');
															   
															   // $(".img14_1").show();
															    $(".img14_1,.img14_2,.img14_3").hide();
																
																//$(".img15_1").show();
															    $(".img15_1,.img15_2,.img15_3,.img15_4,.text15_1").hide();
																
															 	$(".img16_2,.img16_3,.img16_4,.img16_5,.img16_6,.img16_7,.img16_8,.img16_9,.img16_10").hide();
															    $(".text16_1,.text16_2,.text16_3").hide();
															   
																 });





							   $(".fifth_button").click(function(){
																  buttonSequence = 14;
																  ContentCount = 0;
															   $(".hand,.ContentContainer,.tickA,.handA").hide();
															   $(".tick14,.ContentFifthButton,.hand10").show().css("display","inline-block");
															   $(".autorun").css("pointer-events","auto");
															    $(".fifth_button1,.fifth_button2").css({"color": "#000","box-shadow":"none"}); 
																 });
							   
							   
							   $(".fifth_button1").click(function(){
																   buttonSequence = 15;
																   ContentCount = 3;
															   $(".hand,.ContentContainer,.hand15").hide();
															   $(".tick15,.ContentFifthButton,.middle15").show().css("display","inline-block");
															   $(".autorun").css("pointer-events","auto");
															  	$(".fifth_button1").css({"color": "rgb(204, 0, 0)","box-shadow":"rgb(236, 7, 7) 0px 3px 15px, rgba(255, 255, 255, 0.3) 0px 1px 0px inset, rgba(255, 255, 255, 0.5) 0px 0px 3px inset"});

                          										$(".fifth_button2").css({"color": "#000","box-shadow":"none"});
															   $(".imgmdd15").hide();
															   $(".imgmdd15_1").fadeIn();

																 });
							   
							   
							   
							    $(".fifth_button2").click(function(){
																   buttonSequence = 16;
																   ContentCount = 4;
															   $(".hand,.ContentContainer,.tab4,.hand16").hide();
													           $(".tick16,.ContentFifthButton,.middle16").show().css("display","inline-block");
															   $(".autorun").css("pointer-events","auto");
															   $(".fifth_button2").css({"color": "rgb(204, 0, 0)","box-shadow":"rgb(236, 7, 7) 0px 3px 15px, rgba(255, 255, 255, 0.3) 0px 1px 0px inset, rgba(255, 255, 255, 0.5) 0px 0px 3px inset"});

                          										$(".fifth_button1").css({"color": "#000","box-shadow":"none"});
															   $(".imgmdd16").hide();
															   $(".imgmdd16_1").fadeIn();
															   
																 });
								
								
								
							   /*$(".fourth_button1").click(function(){
																   buttonSequence = 14;
																   ContentCount = 2;
															   $(".hand,.ContentContainer,.hand14").hide();
															   $(".tick14,.ContentFourthButton,.middle4_1").show().css("display","inline-block");
															   $(".autorun").css("pointer-events","auto");
															   $(".fourth_button1").css('color','color:#C00;');
															   $(".fourth_button2,.fourth_button3").css('color','color:#000000;');
															   $(".a1,.a2").hide();
															   
															   $(".img14_1").show();
															   $(".img14_2,.img14_3").hide();
															   
																 });*/
							   
							    /*$(".fourth_button2").click(function(){
																   buttonSequence = 15;
																   ContentCount =5;
															   $(".hand,.ContentContainer,.tab4,.hand15").hide();
													           $(".tick15,.ContentFourthButton,.middle4_2").show().css("display","inline-block");
															   $(".autorun").css("pointer-events","auto");
															   $(".face,.corners,.edges,.stmnt,.ans1,.ans2,.ans3,.ans4,.bdr_lft1").css("visibility","hidden");
															   $(".fourth_button1").css('color','color:#C00;');
															   $(".fourth_button2,.fourth_button3").css('color','color:#000000;');
															   
															   $(".img15_1").show();
															   $(".img15_2,.img15_3,.img15_4,.text15_1").hide();
															   
																 });*/
								
								/*$(".fourth_button3").click(function(){
																   buttonSequence = 16;
																   ContentCount = 3;
															   $(".hand,.ContentContainer,.tab4,.hand16").hide();
													           $(".tick16,.ContentFourthButton,.middle4_3").show().css("display","inline-block");
															   $(".autorun").css("pointer-events","auto");
															   $(".face,.corners,.edges,.stmnt,.ans1,.ans2,.ans3,.ans4,.bdr_lft1").css("visibility","hidden");
															   $(".fourth_button3").css('color','color:#C00;');
															   $(".fourth_button1,.fourth_button2").css('color','color:#000000;');
															   
															  $(".img16_2,.img16_3,.img16_4,.img16_5,.img16_6,.img16_7,.img16_8,.img16_9,.img16_10").hide();
															  $(".text16_1,.text16_2,.text16_3").hide();
															   
																 });*/
								
								 /* $(".fifth_button").click(function(){
																			  
													$(".on_load").hide();  
                                                                  buttonSequence = 17;
																  ContentCount = 4;
															   $(".hand,.ContentContainer,.handA,.tickA,.middle").hide();
															   $(".ContentFifthButton,.tick14,.middle5").show().css("display","inline-block");
															   $(".autorun").css('pointer-events', 'auto');
															   $(".hide1,.tickC").css("visibility","hidden");
															   $(".hide2").hide();
															   $(".hd").hide();
															   $(".fifth_button1,.fifth_button2,.fifth_button3").css("color", "#000");
			                                                  $(".tickC").css("visibility","hidden");
															  
															  $(".img5_1,.img5_2,.img5_3,.img5_4,.img5_5,.img5_6").hide();
															  $(".text5_1,.text5_2,.text5_3").hide();
															  
															  $(".img5_11,.img5_12,.img5_13,.img5_14,.img5_15,.img5_16").hide();
															  $(".text5_11,.text5_12,.text5_13").hide();
															  
											$(".delay17_1,.delay17_2,.delay17_3,.delay17_4,.delay17_5,.delay17_6,.delay17_7,.delay17_8").css("visibility","hidden");
			
			                           });*/
								  
								  
								  
								  
								/*  $(".sixth_button").click(function(){
																   buttonSequence = 18;
																   ContentCount = 10;
																   $(".bg_blue").removeClass("blue");	
																    $(".d1,.d2,.d3,.d4,.d5,.d20").css("visibility","hidden");
																	$(".anim_x5_final,.anim_x6_final").css("opacity","0"); 
															   $(".hand,.ContentContainer,.middle").hide();
															   $(".tick6,.ContentSixthButton,.hand6,.middle6").show().css("display","inline-block");
															   $(".border21").css('border', '0.07em solid white');
															   $(".border21").css('background-color', '0.07em solid white');
															   
															   $(".dot11,.highlight1,.highlight2,.highlight3,.circle2").css("visibility","hidden");
$(".delay9_1,.delay9_2,.delay9_3,.delay9_4,.delay9_5,.delay9_6,.delay9_7,.delay9_8,.delay9_9,.delay9_10,.delay9_11,.delay9_12,.delay9_13,.delay9_14,.delay9_15,.delay9_16,.delay9_17,.delay9_18,.delay9_19,.delay9_20").css("visibility","hidden"); 
															   
															   clean();
																 });*/
								
								 $(".sixth_button").click(function(){
															   buttonSequence = 18;
															   ContentCount = 4;
															   $(".hand,.ContentContainer,.hdn").hide();
															   $(".tick18,.ContentSixthButton,.middle6").show().css("display","inline-block");	
															   $(".cuboid1,.cube1,.cylinder1,.pyramid1,.cone1,.prism1").hide();
															   $(".name1,.name2,.name3,.name4,.name5,.name6").css("visibility","hidden");
															   $(".autorun").css("pointer-events","auto");
															   
															    $(".anim18_2,.anim18_3,.anim18_4").hide();
																
																$(".anim18_2_final,.anim18_3_final,.anim18_4_final").css("visibility","hidden");
																
																 });
							 
							 
							 $(".poly_1").click(function(){
																   buttonSequence = 3;
																   ContentCount =10;
															   $(".hand,.ContentContainer,.hand4,.hand3,.hdn,.hd").hide();
													           $(".tick5,.ContentSecondButton,.middle2_1").show().css("display","inline-block");
															 //  $(".autorun").css("pointer-events","auto");
															   $(".div1").removeClass("move");
															  $(".div2").removeClass("move1");
															  $(".div3").removeClass("move2");
															  $(".div5").removeClass("move2");
															  $(".Tbl36TD3").css("border-left","2px solid #00800000");
															  $(".arrow_1,.arrow_2").css("visibility","hidden");
															  
															  
															   //$(".face,.corners,.edges,.stmnt,.ans1,.ans2,.ans3,.ans4,.bdr_lft1").css("visibility","hidden");
															    });
							  $(".poly_2").click(function(){
																   buttonSequence = 4;
																   ContentCount = 7;
															   $(".hand,.ContentContainer,.hand4,.hand3,.hdn,.hd").hide();
													           $(".tick5,.ContentSecondButton,.middle2_2").show().css("display","inline-block");
															 //  $(".autorun").css("pointer-events","auto");
															  $(".div1").removeClass("move");
															  $(".div2").removeClass("move1");
															  $(".div3").removeClass("move2");
															  
															  $(".delay4_1,.delay4_2,.delay4_3,.delay4_4,.delay4_5").css("visibility","hidden");
															   
															   $(".img4_2,.img4_3,.img4_4,.img4_5,.img4_6,.img4_7,.img4_8,.img4_9,.img4_10,.img4_11").hide();
															   $(".text4_1,.text4_2,.text4_3,.text4_4").hide();
															  
															   //$(".face,.corners,.edges,.stmnt,.ans1,.ans2,.ans3,.ans4,.bdr_lft1").css("visibility","hidden");
															    });
							 $(".poly_3").click(function(){
																   buttonSequence = 5;
																   ContentCount =2;
															   $(".hand,.ContentContainer,.hand4,.hand3,.hdn,.hd").hide();
													           $(".tick5,.ContentSecondButton,.middle2_3").show().css("display","inline-block");
															 //  $(".autorun").css("pointer-events","auto");
															   $(".div1").removeClass("move");
															  $(".div2").removeClass("move1");
															  $(".div3").removeClass("move2");
															   
															   $(".delay5_1,.delay5_2,.delay5_3,.delay5_4,.delay5_5").css("visibility","hidden");
															   
															   $(".img2_2,.img2_3,.img2_4").hide();
															   $(".text2_1,.text2_2,.text2_3").hide();
															  
															   //$(".face,.corners,.edges,.stmnt,.ans1,.ans2,.ans3,.ans4,.bdr_lft1").css("visibility","hidden");
															    });
							  $(".poly_4").click(function(){
																   buttonSequence = 6;
																   ContentCount = 2;
															   $(".hand,.ContentContainer,.hand4,.hand3,.hdn,.hd").hide();
													           $(".tick5,.ContentSecondButton,.middle2_4").show().css("display","inline-block");
															 //  $(".autorun").css("pointer-events","auto");
															   $(".div1").removeClass("move");
															  $(".div2").removeClass("move1");
															  $(".div3").removeClass("move2");
															  
															  $(".delay6_1,.delay6_2,.delay6_3,.delay6_4,.delay6_5").css("visibility","hidden");
															   
															   $(".img6_2,.img6_3,.img6_4").hide();
															   $(".text6_1,.text6_2,.text6_3").hide();
															  
															   //$(".face,.corners,.edges,.stmnt,.ans1,.ans2,.ans3,.ans4,.bdr_lft1").css("visibility","hidden");
															    });
							  $(".poly_5").click(function(){
																   buttonSequence = 7;
																   ContentCount =1;
															   $(".hand,.ContentContainer,.hand4,.hand3,.hdn,.hd").hide();
													           $(".tick5,.ContentSecondButton,.middle2_5").show().css("display","inline-block");
															 //  $(".autorun").css("pointer-events","auto");
															   $(".div1").removeClass("move");
															  $(".div2").removeClass("move1");
															  $(".div3").removeClass("move2");
															  
															   //$(".face,.corners,.edges,.stmnt,.ans1,.ans2,.ans3,.ans4,.bdr_lft1").css("visibility","hidden");
															    });
						     $(".poly_6").click(function(){
																   buttonSequence = 8;
																   ContentCount =1;
															   $(".hand,.ContentContainer,.hand4,.hand3,.hdn,.hd").hide();
													           $(".tick5,.ContentSecondButton,.middle2_6").show().css("display","inline-block");
															 //  $(".autorun").css("pointer-events","auto");
															   $(".div1").removeClass("move");
															  $(".div2").removeClass("move1");
															  $(".div3").removeClass("move2");
															  
															   //$(".face,.corners,.edges,.stmnt,.ans1,.ans2,.ans3,.ans4,.bdr_lft1").css("visibility","hidden");
															    });
						 $(".poly_7").click(function(){
																   buttonSequence = 9;
																   ContentCount =2;
															   $(".hand,.ContentContainer,.hdn,.hd").hide();
													           $(".tick5,.ContentSecondButton,.middle2_7").show().css("display","inline-block");
															 //$(".autorun").css("pointer-events","auto");
															   $(".div1").removeClass("move");
															  $(".div2").removeClass("move1");
															  $(".div3").removeClass("move2");
															  
															   //$(".face,.corners,.edges,.stmnt,.ans1,.ans2,.ans3,.ans4,.bdr_lft1").css("visibility","hidden");
															    });
												   });
						
