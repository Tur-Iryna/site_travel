
const deadline = $('.discount__clock').attr('data-time');
initializeClock('.discount__clock', deadline);


function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
};

function initializeClock(id, endtime) {
  const clock = document.querySelector('.discount__clock');
  const hoursSpan = clock.querySelector('.discount__hours');
  const daysSpan = clock.querySelector('.discount__days');
  const minutesSpan = clock.querySelector('.discount__minutes');
  const secondsSpan = clock.querySelector('.discount__seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
};








function myFunction() {
  document.getElementById("Dropdown").classList.toggle('show');

}

function myFunctionSecond() {
  document.getElementById("Dropdownsecond").classList.toggle('show');

}


window.onclick = function (event) {
  if (!event.target.matches('.search__dropbtn')) {

    var dropdowns = document.getElementsByClassName('.search__dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


$(function () {

  $('.header__top-menu__btn').on('click', function () {
    $('.header__top-menu__user').toggleClass('header__top-menu--active');
  });

  $('.header__bottom-menu__btn').on('click', function () {
    $('.header__bottom-menu__list').toggleClass('header__bottom-menu--active');
  });



  $('.slider__items').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2

        }

      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1

        }

      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          dots: false,
          autoplaySpeed: 3000
        }

      },
    ]
  });





  $(".header__bottom-menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });


  AOS.init();




});


