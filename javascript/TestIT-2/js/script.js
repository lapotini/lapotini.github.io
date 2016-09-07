(function ($) {

    column();
    function column() {
        var contentHeight = $('#content').height();
        var sidebar = $('#aside');
        var sidebarHeight = sidebar.height();
        if (contentHeight != sidebarHeight) {
            sidebar.css({'height': contentHeight});
        }
    };

    $(window).resize(function () {
        column();
    });

})(jQuery);