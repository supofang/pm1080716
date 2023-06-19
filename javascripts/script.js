$(function () {
  var counter = 0, // 一開始要顯示的圖，0 的話就是顯示第一張
    slide = document.querySelector('.header'),
    items = slide.querySelectorAll('div.js-img'), // 抓取所有 img
    itemsCount = items.length, // 圖片總數 
    timer = 5000, // 4 秒換圖
    interval = window.setInterval(showNext, timer);  // 設定循環
  // 帶入目前要顯示第幾張圖 
  var showCurrent = function () {
    var itemToShow = Math.abs(counter % itemsCount); // 取餘數才能無限循環
    [].forEach.call(items, function (el) {
      el.classList.remove('show'); // 將所有 img 的 class="show" 移除
    });
    items[itemToShow].classList.add('show'); // 將要顯示的 img 加入 class="show"
  };
  function showNext() {
    counter++; // 將 counter+1 指定下一張圖
    showCurrent();
  }
  // function showPrev() {
  //   counter--; // 將 counter－1 指定上一張圖
  //   showCurrent();
  // }
  // 一開始秀出第一張圖，也可以在 HTML 的第一個 img 裡加上 class="show"
  items[0].classList.add('show');


  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $("canvas.snow").let_it_snow({
      windPower: 2,
      speed: 1,
      size: 8,
      count: 15,
      image: "images/petal.png",
      //  color: "#ea0618",
      // opacity: 0
    });

  } else {
    $("canvas.snow").let_it_snow({
      windPower: 2,
      speed: 1,
      size: 3,
      count: 10,
      image: "images/petal.png",
      //  color: "#ea0618",
      // opacity: 0
    });

  }
  $up();
  setInterval(function () {
    $up();
  }, 5000)
  function $up() {
    $('.drink div').removeClass('up').each(function (index) {
      $(this).delay(index * 200).animate({
        'background': 'transparent'
      }, 0, function () {
        $(this).addClass('up')
      })
    })
  }
})
