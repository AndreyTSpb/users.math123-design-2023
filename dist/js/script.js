document.addEventListener('DOMContentLoaded', function(){

    /**
     * Фиксация меню
     */
     $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
          $("#menu-header").addClass("header-fix");
        } else {
          $("#menu-header").removeClass("header-fix");
        }
    });
    /**
     * Слайдер для главной
     */
    $('.slider-background').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    });
    /**
     * Слайдер для видео
     */
     $('.video-wrap').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1
  });

    //Слайдер для достижений
    $('.our-progress-wraper').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
    });

    //Слайдер для достижений
    $('.our-progress-mini-wrapper').slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 787,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    
    //Слайдер для анонсов на второстипенных страницах
    $('#page-anonse-old').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          }
        },
        {
          breakpoint: 787,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 567,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 321,
          settings: {
            centerPadding: '20px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    //Слайдер для анонсов на второстипенных страницах
    $('#page-anonse').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          }
        },
        {
          breakpoint: 787,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 567,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 321,
          settings: {
            centerPadding: '20px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.our-teacher-wraper').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: false,
        dotsClass: 'slick-dots', // название класса для точек
        arrows: true,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 787,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerPadding: '20px',
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 321,
            settings: {
              centerPadding: '20px',
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

    $('.comments-wrapper').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 787,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 321,
              settings: {
                centerPadding: '20px',
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

   
    /**
     * переключение вкладок в карточке группы при покупке
     */
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.card-group-block-group').eq(i).toggleClass('card-group-block-group-active');
                $('.card-group-block-next-screen').eq(i).toggleClass('card-group-block-next-screen-active');
            });
        });
    }
    toggleSlide('.card-group-block-button-more');
    toggleSlide('.card-group-block-button-back');

    /**
     * Раскрытие меню при нажатии на гамбургер
     */
    let hamburger = document.querySelector('.header-center-menu-btn');
    if(hamburger !== null){
        /**
         * Навешиваем слушателя на гамбургер
         */
        hamburger.addEventListener('click', ()=>{
            let menu = document.querySelector('.main-wrap');
            console.log(menu);
            if(menu !== null){
                /**
                 * Провверям вдруг не убрался клас плавного сокрытия меню
                 * если он есть то убираем его
                 */
                if(menu.classList.contains('main-wrap-hide')){
                    menu.classList.remove('main-wrap-hide');
                }
                /**
                 * делаем блок видимым,
                 * добавляем ему плавное появление через css анимацию
                 * и скрываем гамбургер пока открыто меню
                 */
                menu.style.display = 'block';
                //hamburger.style.display = 'none';
                menu.classList.add('main-wrap-show');

                let close = menu.querySelector('.close');
                if(close !== null){
                    close.addEventListener('click', ()=>{
                        /**
                         * убираем класс плавного появления меню
                         * и добавляем класс для плавного сокрытия меню
                         */
                        menu.classList.remove('main-wrap-show');
                        menu.classList.add('main-wrap-hide');
                        //hamburger.style.display = "flex";
                        /**
                         * задержка 1 секунда, чтобы успел скрыться блок с меню
                         * потом добавляем невидимость
                         * и убираем класс для плавного скрытия 
                         */
                        setTimeout(function(){
                            menu.style.display = 'none';
                            menu.classList.remove('main-wrap-hide');
                        }, 500);
                    });
                }
            }
        });
    }

}, false);