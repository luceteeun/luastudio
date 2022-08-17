(($)=>{
    class Portfolio {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.section9();
            this.footer();
            this.goTopBox();
            this.quickBox();
            this.cubeBox();
        }
        header(){

        // 헤더 스크롤 이벤트 ======================================================================================

            let upDown = '';
            let newTop = $(window).scrollTop();
            let oldTop = newTop;
            
            $(window).scroll(function(){
                newTop = $(window).scrollTop();

                // console.log('뉴탑값',newTop);
                // console.log('이전탑값',oldTop);
                upDown = newTop - oldTop > 0 ? 'DOWN' : 'UP';
                if(upDown==='DOWN'){
                    $('#header').removeClass('show');
                    $('#header').addClass('hide');
                    $('.default-logo').fadeOut(300);
                    $('.white-logo').fadeOut(300);
                }
                if(upDown==='UP'){
                    $('#header').removeClass('hide');
                    $('#header').addClass('show');
                    $('.white-logo').fadeIn(300);

                }
                if(newTop===0){
                    $('#header').removeClass('show');
                    $('.default-logo').fadeIn(300);
                    $('.white-logo').fadeOut(300);
                }

                oldTop = newTop;
            });




        // 네비메뉴바 버튼 이벤트====================================================================================

            $('.main-btn').on({
                mouseenter: function(){
                    $('.sub').fadeOut(0);
                    $(this).next().fadeIn(200);

                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                },
                focusin: function(){
                    $('.sub').fadeOut(0);
                    $(this).next().fadeIn(200);

                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                }

            });

            $('.sub-btn').on({
                mouseenter: function(){
                    $('.sub-sub').fadeOut(0);
                    $(this).next().fadeIn(200);
                },
                focusin: function(){
                    $('.sub-sub').fadeOut(0);
                    $(this).next().fadeIn(200);
                }
            });

            $('#nav').on({
                mouseleave: function(){
                    $('.sub').fadeOut(200);
                    $('.main-btn').removeClass('on');
                }
            });

            $('.sub-sub').on({
                mouseleave: function(){
                    $(this).fadeOut(200);
                }
            });
            

        }
        section1(){

            let cnt = 0;
            let setId = 0;
            let setId2 = 0;

            // 마우스 드래그 이벤트
            let mouseStart = '';
            let mouseEnd = '';
            let result = ''; 
            let dragStart = '';
            let dragEnd = '';
            let mouseDown = false;

            let winW = $(window).width();
            let slideW = $(window).width()*0.8039936941671046;
            let slideLW = winW-slideW;


            function pausefn(){
                clearInterval(setId);
                clearInterval(setId2);       

                let count=0;
                setId2 = setInterval(function(){
                    count++;
                    if( count>=5 ){
                    clearInterval(setId);
                    clearInterval(setId2);
                    nextCount();
                    autoTimer();          
                  }
                }, 1000); 
            
            }

            function mainSlide(){
                $('.slide-wrap').stop().animate({left: -slideW*cnt}, 1000, 'swing', function(){
                    cnt>2?cnt=0:cnt;
                    cnt<0?cnt=2:cnt;
                    $('.slide-wrap').stop().animate({left: -slideW*cnt}, 0);
                });

            }
            function nextCount(){
                cnt++;
                mainSlide();
            }
            function prevCount(){
                cnt--;
                mainSlide();
            }
            function autoTimer(){
                setId = setInterval(nextCount, 4000);
            }
            autoTimer();


             // 마우스 스크롤 클릭 이벤트
             $('.mouse-scrollBtn').on({      
                click: function(){
                  $('html, body').stop().animate({scrollTop:937}, 600);                  
              }
            });

            // 마우스 드래그 이벤트
            $('#section1 .slide-view').on({

              mousedown: function(e){
                mouseStart = e.clientX;
      
                pausefn();
      
                dragStart = e.clientX - $('.slide-wrap').offset().left-slideW+slideLW;
                mouseDown = true;
              },
              mouseup: function(e){
                mouseEnd = e.clientX;
                result = mouseStart - mouseEnd > 0 ? 'NEXT' : 'PREV';

                 //절대값 추가 (마우스 클릭만 해도 슬라이드 넘어가는 오류 수정) ///////////////////////////////////////////////////////
                if(Math.abs(mouseStart - mouseEnd) > 10){
                
                 if(result==='NEXT'){
                     if( !$('#section1 .slide-wrap').is(':animated') ){
                       nextCount();
                       pausefn();
                     }
                   }
                   if(result==='PREV'){
                     if( !$('#section1 .slide-wrap').is(':animated') ){
                       prevCount();
                       pausefn();
                     }
                   }
                } 
                 mouseDown = false;
              },
              mousemove: function(e){
                if(!mouseDown) return;
                dragEnd = e.clientX;
                $('#section1 .slide-wrap').css({left: dragEnd - dragStart });
      
              },
              mouseleave: function(e){
                if(!mouseDown) return;
                mouseEnd = e.clientX;
                result = mouseStart - mouseEnd > 0 ? 'NEXT' : 'PREV';
                
                if(result==='NEXT'){
                  if( !$('#section1 .slide-wrap').is(':animated') ){
                  }
                  nextCount();
                }
                if(result==='PREV'){
                  if( !$('#section1 .slide-wrap').is(':animated') ){
                  }
                  prevCount();
                }
                mouseDown = false;
      
              }
      
            });


            // 좌우 화살표 클릭 이벤트
            $('.left-a').on({
                click: function(){
                    if( !$('.slide-wrap').is(':animated') ){
                        pausefn();
                        prevCount();
                    }
                }
            });

            $('.right-a').on({
                click: function(){
                    if( !$('.slide-wrap').is(':animated') ){
                        pausefn();
                        nextCount();
                    }
                }
            });

           

        }
        section2(){
            
            let winH = $(window).height();
            const sec2Top = $('#section2').offset().top - winH;
            let t = false;

            $(window).scroll(function(){

                if($(window).scrollTop() > sec2Top){
                    if(t===false){
                        t = true;
                        $('#section2').addClass('sec2Ani');
                    }
                }
                if($(window).scrollTop()===0){
                    t = false;
                    $('#section2').removeClass('sec2Ani');
                }

                
            });

        }
        section3(){

            let winH = $(window).height();
            const sec3Top = $('#section3').offset().top - winH;
            let t = false;

            $(window).scroll(function(){

                if($(window).scrollTop() > sec3Top){
                    if(t===false){
                        t = true;
                        $('#section3').addClass('sec3Ani');
                    }
                }
                if($(window).scrollTop()===0){
                    t = false;
                    $('#section3').removeClass('sec3Ani');
                }              
            });

        }
        section4(){
            
            let winH = $(window).height();
            const sec4Top = $('#section4').offset().top - winH;
            let t = false;

            $(window).scroll(function(){

                if($(window).scrollTop() > sec4Top){
                    if(t===false){
                        t = true;
                        $('#section4').addClass('sec4Ani');
                    }
                }
                if($(window).scrollTop()===0){
                    t = false;
                    $('#section4').removeClass('sec4Ani');
                }              
            });

        }
        section5(){

            let winH = $(window).height();
            const sec5Top = $('#section5').offset().top - winH;
            let t = false;

            $(window).scroll(function(){

                if($(window).scrollTop() > sec5Top){
                    if(t===false){
                        t = true;
                        $('#section5').addClass('sec5Ani');
                    }
                }
                if($(window).scrollTop()===0){
                    t = false;
                    $('#section5').removeClass('sec5Ani');
                }              
            });

        }
        section6(){

            //갤러리 섹션

            let winH = $(window).height();
            const sec6Top = $('#section6').offset().top - winH;
            const sec6Top2 = $('#section6').offset().top;
            const cubeTop = $('.cube').offset().top;
            let t = false;


            $(window).scroll(function(){

                // console.log('섹션6 탑에서 창높이 뺀 값',sec6Top); //2600
                // console.log('섹션6 탑',sec6Top2);  //2700
                // console.log('큐브모양 탑값',cubeTop);  //3754
                // console.log('큐브모양 위 여백값',cubeTop-sec6Top2);  //132
                // console.log($('#section7').offset().top);  //5564
                // console.log('현재스크롤탑값',$(window).scrollTop());  //2600

                if($(window).scrollTop() > sec6Top2  && $(window).scrollTop() < $('#section7').offset().top -800){
                    $('.cube').css({top: Math.abs(cubeTop-$(window).scrollTop()) });
                }


                if($(window).scrollTop() > sec6Top){
                    if(t===false){
                        t = true;
                        $('#section6').addClass('sec6Ani');
                        $('#cubeSection .container').addClass('on');

                    }
                }
                if($(window).scrollTop()===0){
                    t = false;
                    $('#section6').removeClass('sec6Ani');
                    $('#cubeSection .container').removeClass('on');
                }              
            });
    

            let idx = 0;

            let winW = $('.right-gallery').width();
            let cols = 2;
            let imgW = winW/cols;
            let imgH = imgW*1.02459;
            let n = $('.gallery-list').length;   //6
            let h = $('.gallery-list.hide').length;
            let rows = Math.ceil((n-h)/cols);



            $('.gallery-btn').each(function(index){
                $(this).on({
                    click: function(e){
                        e.preventDefault();
                        idx = index;
                        galleryMain();

                        $('.gallery-btn').removeClass('on');
                        $(this).addClass('on');

                        $('#section6').removeClass('sec6Ani');

                    }
                });
            });

            function galleryMain(){

                winW = $('.right-gallery').width();
                cols = 2;

                if(winW>=800){
                    cols = 2;
                }
                else {
                    cols = 1;
                }

                imgW = winW/cols;
                imgH = imgW*1.02459;

                $('.gallery-list').removeClass('zoomin');
                $('.gallery-list').stop().animate({width:imgW,height:imgH}).removeClass('hide');
                $('.gallery-btn i').addClass('all');
                

                if(idx===0){  // 6개

                    $('.gallery-btn i').addClass('all');

                    switch(cols){
                        case 2:
                            $('.gallery-list').eq(0).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                            $('.gallery-list').eq(1).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                            $('.gallery-list').eq(2).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                            $('.gallery-list').eq(3).show().stop().animate({left:imgW*1,top:imgH*1}, 300);
                            $('.gallery-list').eq(4).show().stop().animate({left:imgW*0,top:imgH*2}, 300);
                            $('.gallery-list').eq(5).show().stop().animate({left:imgW*1,top:imgH*2}, 300);
                        break;

                        default:
                            $('.gallery-list').eq(0).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                            $('.gallery-list').eq(1).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                            $('.gallery-list').eq(2).show().stop().animate({left:imgW*0,top:imgH*2}, 300);
                            $('.gallery-list').eq(3).show().stop().animate({left:imgW*0,top:imgH*3}, 300);
                            $('.gallery-list').eq(4).show().stop().animate({left:imgW*0,top:imgH*4}, 300);
                            $('.gallery-list').eq(5).show().stop().animate({left:imgW*0,top:imgH*5}, 300);
                    }

                }
                else if(idx===1){   //3개

                    $('.gallery-btn i').removeClass('all');

                    $('.gallery-list').eq(1).hide().addClass('hide');
                    $('.gallery-list').eq(3).hide().addClass('hide');
                    $('.gallery-list').eq(4).hide().addClass('hide');

                    switch(cols){
                        case 2 :
                            $('.gallery-list').eq(0).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                            $('.gallery-list').eq(2).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                            $('.gallery-list').eq(5).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                        break;    
                        default:
                            $('.gallery-list').eq(0).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                            $('.gallery-list').eq(2).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                            $('.gallery-list').eq(5).show().stop().animate({left:imgW*0,top:imgH*2}, 300);

                    }

                }
                else if(idx===2){

                    $('.gallery-btn i').removeClass('all');

                    $('.gallery-list').eq(0).hide().addClass('hide');
                    $('.gallery-list').eq(2).hide().addClass('hide');
                    $('.gallery-list').eq(4).hide().addClass('hide');
                    $('.gallery-list').eq(5).hide().addClass('hide');

                    switch(cols){
                        case 2 :
                            $('.gallery-list').eq(1).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                            $('.gallery-list').eq(3).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                        break;     
                        default:
                            $('.gallery-list').eq(1).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                            $('.gallery-list').eq(3).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                    }

                }
                else if(idx===3){

                    $('.gallery-btn i').removeClass('all');

                    $('.gallery-list').eq(0).hide().addClass('hide');
                    $('.gallery-list').eq(1).hide().addClass('hide');
                    $('.gallery-list').eq(2).hide().addClass('hide');


                    switch(cols){
                        case 2 :
                            $('.gallery-list').eq(3).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                            $('.gallery-list').eq(4).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                            $('.gallery-list').eq(5).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                        break;     
                        default:
                            $('.gallery-list').eq(3).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                            $('.gallery-list').eq(4).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                            $('.gallery-list').eq(5).show().stop().animate({left:imgW*0,top:imgH*2}, 300);
                    }

                }
                else if(idx===4){

                    $('.gallery-btn i').removeClass('all');

                    $('.gallery-list').eq(1).hide().addClass('hide');


                    switch(cols){
                        case 2 :
                            $('.gallery-list').eq(3).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                            $('.gallery-list').eq(0).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                            $('.gallery-list').eq(4).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                            $('.gallery-list').eq(5).show().stop().animate({left:imgW*1,top:imgH*1}, 300);
                            $('.gallery-list').eq(2).show().stop().animate({left:imgW*0,top:imgH*2}, 300);
                        break;     
                        default:
                            $('.gallery-list').eq(3).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                            $('.gallery-list').eq(0).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                            $('.gallery-list').eq(4).show().stop().animate({left:imgW*0,top:imgH*2}, 300);
                            $('.gallery-list').eq(5).show().stop().animate({left:imgW*0,top:imgH*3}, 300);
                            $('.gallery-list').eq(2).show().stop().animate({left:imgW*0,top:imgH*4}, 300);
                    }

                }


                h = $('.gallery-list.hide').length;
                rows = Math.ceil((n-h)/cols);

                $('.gallery-wrap').stop().animate({height:imgH*rows}, 200);

                $('.gallery-list').addClass('zoomin');

            }


            $('.gallery-list').each(function(index){
                $(this).on({
                    click: function(e){
                        e.preventDefault();

                        //이부분 추가하면 됨 이유는 이 부분에서 idx는 예전 인덱스 번호이고
                        //index가 새로 들어오는 인덱스인데 이전에 추가된 addClass를 remove해준 후 다음 클래스 add해야함
                        $('#cubeSection').removeClass('rotate'+idx);

                        idx = index;

                        
                        if(idx===0){
                            $('#cubeSection').addClass('rotate');
                        }
                        else if(idx===1){
                            $('#cubeSection').addClass('rotate1');
                        }
                        else if(idx===2){
                            $('#cubeSection').addClass('rotate2');
                        }
                        else if(idx===3){
                            $('#cubeSection').addClass('rotate3');
                        }
                        else if(idx===4){
                            $('#cubeSection').addClass('rotate4');
                        }
                        else if(idx===5){
                            $('#cubeSection').addClass('rotate5');
                        }


                    }
                });
                return;
            });


        }
        section7(){
            
            let winH = $(window).height();
            const sec7Top = $('#section7').offset().top - winH;
            let t = false;

            $(window).scroll(function(){

                if($(window).scrollTop() > sec7Top){
                    if(t===false){
                        t = true;
                        $('#section7').addClass('sec7Ani');
                    }
                }
                if($(window).scrollTop()===0){
                    t = false;
                    $('#section7').removeClass('sec7Ani');
                }              
            });

        }
        section8(){
            
            let winH = $(window).height();
            const sec8Top = $('#section8').offset().top - winH;
            let t = false;

            $(window).scroll(function(){

                if($(window).scrollTop() > sec8Top){
                    if(t===false){
                        t = true;
                        $('#section8').addClass('sec8Ani');
                    }
                }
                if($(window).scrollTop()===0){
                    t = false;
                    $('#section8').removeClass('sec8Ani');
                }              
            });

        }
        section9(){
            
            let winH = $(window).height();
            const sec9Top = $('#section9').offset().top - winH;
            let t = false;

            $(window).scroll(function(){

                if($(window).scrollTop() > sec9Top){
                    if(t===false){
                        t = true;
                        $('#section9').addClass('sec9Ani');
                    }
                }
                if($(window).scrollTop()===0){
                    t = false;
                    $('#section9').removeClass('sec9Ani');
                }              
            });

        }
        footer(){
            
        }

        goTopBox(){

            $('.goTop-btn').on({
                click: function(){
                    $('html, body').stop().animate({scrollTop:0}, 600);
                }
            });

            $(window).scroll(function(){

                if( $(window).scrollTop() > 400 ){
                    $('#goTopBox').fadeIn(300);
                }
                else{
                    $('#goTopBox').fadeOut(300);
                }
            });

        }

        quickBox(){

            let quickTop = ($(window).height() - $('#quickBox').height()) / 2 - 200;

            $(window).scroll(function(){
                $('#quickBox').stop().animate({top: quickTop + $(window).scrollTop()}, 100, 'easeInCubic');

                if($(window).scrollTop()===0){
                    $('#quickBox').stop().animate({top:120}, 100, 'easeInCubic');
                }
            });

        }

        cubeBox(){

            let cubeTop = $('#cubeSection').offset().top;
            console.log(cubeTop); //3758.109375   
            $(window).scroll(function(){

                if( $(window).scrollTop() > 3758.109375 ){
                    $('#cubeSection').stop().animate({top:cubeTop + $(window).scrollTop()}, 100, 'easeInCubic');
                }
            });


        }


        
    }
    const newPortfolio = new Portfolio();

    newPortfolio.init();

})(jQuery);