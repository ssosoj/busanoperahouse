$(function () {

  /*메인비주얼*/
  var bsLeng = $(".bs-item").length; //슬라이드총갯수

  var bsCurrent = 0; //임의의 변수

  function autoSlide() {

    //슬라이드 자동으로 돌아가는 함수, 자동롤링할때만 fade 함수 사용, 그외 버튼으로 움직일시 대기열문제때문에 딜레이 걸리는거 안쓰고 바로표시되는 display:none과 block 으로 제어

    if (bsCurrent < bsLeng - 1) {
      //넥스트 버튼과 동일
      bsCurrent = bsCurrent + 1;
      var crtItem = $(".bs-item").eq(bsCurrent);
      // $(".banner_slide-wrap").css("background", $(".bs-item").eq(bsCurrent).attr("colorbg"));
      $(".bs-item").not(crtItem).css("z-index", "");

      $(".bs-item").not(crtItem).stop().animate({
        opacity: 0
      }, 400);
      $(".bs-item").eq(bsCurrent).css("z-index", "1");

      $(".bs-item").eq(bsCurrent).stop().animate({
        opacity: 1
      }, 400);
      $(".pager-bg a").removeClass("on");
      $(".pager-bg a").eq(bsCurrent).addClass("on");
    }

    else {
      bsCurrent = 0;
      var crtItem = $(".bs-item").eq(bsCurrent);
      // $(".banner_slide-wrap").css("background", $(".bs-item").eq(bsCurrent).attr("colorbg"));
      $(".bs-item").not(crtItem).css("z-index", "");

      $(".bs-item").not(crtItem).stop().animate({
        opacity: 0
      }

        , 400);
      $(".bs-item").eq(bsCurrent).css("z-index", "1");

      $(".bs-item").eq(bsCurrent).stop().animate({
        opacity: 1
      }

        , 400);
      $(".pager-bg a").removeClass("on");
      $(".pager-bg a").eq(bsCurrent).addClass("on");
    }
  }

  var autoS;
  clearInterval(autoS);
  autoS = setInterval(autoSlide, 8000); //슬라이드 자동함수를 8초마다 반복실행

  $(".pager-bg a").on('click', function (e) {
    //갤러리 인디게이터 클릭했을때
    e.preventDefault();
    var pbIdx = $(this).index(); //갤러리 인디게이터의 인덱스를 가져와서
    bsCurrent = pbIdx; //액티브 슬라이드를 결정하는 bsCurrent의 값을 클릭한 인디게이터의 값과 동일하게 맞춰줌
    var crtItem = $(".bs-item").eq(pbIdx);

    $(".bs-item").css({
      "opacity": "0", "z-index": ""
    }); //전체슬라이드를 안보이게 한다음

    $(".bs-item").eq(pbIdx).css({
      "opacity": "1", "z-index": "1"
    }); //클릭한 인디게이터와 동일순번의 슬라이드를 노출	

  });

  $(".pager-bg a").on('mouseenter', function (e) {
    //갤러리 인디게이터 마우스오버했을때 클래스 on 붙였다
    e.preventDefault();
    $(".pager-bg a").removeClass("on");
    $(this).addClass("on");
  });

  $(".pager-bg").on('mouseleave', function (e) {
    //갤러리 인디게이터 마우스오버했을때 클래스 on 뗐다
    e.preventDefault();
    $(".pager-bg a").removeClass("on");
    $(".pager-bg a").eq(bsCurrent).addClass("on");
  });


  // setTimeout(function () {
  //   //페이지 오픈시 0.5초뒤에 갤러리인디게이터에 붙어있던 on2클래스를 삭제하고 off2 클래스를 붙임 (on2클래스는 0.5초동안 갤러리인디게이터가 반정도 올라오는 css3애니메이션/off2는 다시 내려가는 css3애니메이션)
  //   $(".pf-bsslide-pager").removeClass("on2").addClass("off2");
  // }

  //   , 500);

  // var stope = 0; //임의선언



  // $(".pf-bsslide-pager").on('mouseenter', function () {

  //   // 갤러리인디게이터에 마우스오버하면 height 값이 커지면서 인디게이터가 위로 올라오는...
  //   if (stope == 0) {
  //     stope = 1; //stope를 1로 바꿔서 애니메이션 중복 동작을 못하게 막음
  //     $(".pf-bsslide-pager").removeClass("off2");
  //     $(".pf-bsslide-pager").removeClass("off");
  //     $(".pf-bsslide-pager").addClass("on");

  //     $(".pf-bsslide-pager").stop().animate({
  //       height: "160px"
  //     }

  //       , 500);
  //     clearInterval(autoS); // 마우스오버시 자동롤링멈춤
  //     stope = 0; //애니메이션 끝나면 0으로 돌려와서 다시 애니메이션 동작 가능하도록
  //   }
  // });

  // $(".pf-bsslide-pager").on('mouseleave', function () {

  //   //위의 마우스 오버와 반대 
  //   if (stope == 0) {
  //     stope = 1;
  //     $(".pf-bsslide-pager").removeClass("off2");
  //     $(".pf-bsslide-pager").removeClass("on");
  //     $(".pf-bsslide-pager").addClass("off");

  //     $(".pf-bsslide-pager").stop().animate({
  //       height: "18px"
  //     }

  //       , 500, function () {
  //         $(this).css("overflow", "visible"); //클래스 조절로 span 안의 숫자가 보여야 되는게 애니메이션 끝나면서 자동으로 overflow:hidden;이 붙어서 숫자가 안보여가지고 추가
  //       });
  //     clearInterval(autoS);
  //     autoS = setInterval(autoSlide, 4000);
  //     stope = 0;
  //   }
  // });


});