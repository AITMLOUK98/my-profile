(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
<<<<<<< HEAD
                scrollTop: $(this).offset().top - 30
=======
                scrollTop: $(this.hash).offset().top - 30
>>>>>>> d41e08b93fc260e71e7a1250408bb578a5faf5b4
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    

    // Typed Initiate
    if ($('.header h2').length == 1) {
        var typed_strings = $('.header .typed-text').text();
        var typed = new Typed('.header h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Porfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Review slider
    $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
<<<<<<< HEAD

    $(document).on('click', '.link-details', function (e) {
        e.preventDefault();
        const projectId = $(this).data('id');
    
        // Fetch project details from JSON
        $.getJSON('data/projects.json', function (projects) {
            const project = projects.find(p => p.id === projectId);
    
            if (project) {
                $('#projectModalLabel').text(project.title);
                $('#projectDescription').text(project.description);
    
                // Populate skills
                const skillsHtml = project.skills.map(skill => `
                    <div class="skill-name">
                        <p>${skill.name}</p><p>${skill.percentage}%</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: ${skill.percentage}%" aria-valuenow="${skill.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                `).join('');
                $('#projectSkills').html(skillsHtml);
    
                // Populate rating
                $('#projectRating').text(`Rating: ${project.rating} / 5`);
    
                // Show modal
                $('#projectModal').modal('show');
            }
        });
    });
=======
>>>>>>> d41e08b93fc260e71e7a1250408bb578a5faf5b4
})(jQuery);

