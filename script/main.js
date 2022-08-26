$(function(){
  /** 2가지 유형 
   * 1. 현재 하위(this) 뎁스만 보임
   * 2. 전체 하위 뎁스 표시
  */
  $('#gnb .depth1 > li').hover(
    // mouseover
    function(){
      $(this)
        .children('.depth2')
        .addClass('on');
    },
    // mouseout
    function(){
      $(this)
      .children('.depth2')
      .removeClass('on');
    }
  );

  // slider
  let num = 0;  // 이미지 번호(전역변수)

  function changeSlider(img_num) {
    // 공식 = 높이값(세로기준) * 이미지 번호
    let img_height = 300 * img_num;

    $('.slider .sliders').css({
      transform: `translateY(${-img_height}px)`
    })
  }

  // 자동재생
  setInterval(function(){
    num++;
    if(num > 2) { num = 0; }
    changeSlider(num);
  }, 3000);


  // 공지사항/갤러리 tab 버튼
  $('.tab_buttons .notice-btn').click(function(){
    // 탭 초기화
    $('.tab_contents').removeClass('on');
    // 표시
    $('#notice').addClass('on');
  })

  $('.tab_buttons .gallery-btn').click(function(){
    $('.tab_contents').removeClass('on');
    $('#gallery').addClass('on');
  })

  $('#notice a').click(function(){
    $('.madal').addClass('on')
  })

  $('.modal .close-btn').click(function(){
    $('.modal').removeClass('on');
  })

}); // $