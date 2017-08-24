$(window).load(function() {
    $('#slider').nivoSlider({
        effect: 'fade', // Выберите эффекты: 'fold,fade,sliceDown'
        slices: 15, // Для slice animations
        boxCols: 8, // Для box animations
        boxRows: 4, // Для box animations
        animSpeed: 500, // Скорость смены слайдов
        pauseTime: 3000, // Время показа одного слайда
        startSlide: 0, // Настройка запуска Slide (0 index)
        directionNav: true, // Использование навигации Вперед, Назад
        directionNavHide: false, // Показывать только при наведении мыши
        controlNav: false, // 1,2,3... навигация
        controlNavThumbs: false, // Использовать миниатюры для навигации
        controlNavThumbsFromRel: false, // Use image rel for thumbs
        controlNavThumbsSearch: '.jpg', // Replace this with...
        controlNavThumbsReplace: '_thumb.jpg', // ...this in thumb Image src
        keyboardNav: true, // Использовать стрелки Влево и Вправо
        pauseOnHover: true, // Остановка навигации при наведении
        manualAdvance: false, // Force manual transitions
        captionOpacity: 0.8, // Прозрачность описания
        prevText: 'Назад', // Назад directionNav текст
        nextText: 'Вперед', // Вперед directionNav текст
        beforeChange: function(){}, // Triggers before a slide transition
        afterChange: function(){}, // Triggers after a slide transition
        slideshowEnd: function(){}, // Triggers after all slides have been shown
        lastSlide: function(){}, // Triggers when last slide is shown
        afterLoad: function(){} // Triggers when slider has loaded
    });
});

