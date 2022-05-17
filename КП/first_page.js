function initialize() {
    /* First_buttom */
    $(document).ready(function() {
        $(".buttom").click(() => {
            $(".buttom").hide(500);
            $(".buttom_return").show(500);
            $(".second_container_add").show(300);
        });
    });
    $(document).ready(function() {
        $(".buttom_return").click(() => {
            $(".buttom_return").hide();
            $(".buttom").show(500);
            $(".second_container_add").hide(300);
        });
    });
    /* Second_buttom */
    $(document).ready(function() {
        $(".buttom_read").click(() => {
            $(".buttom_read").hide(500);
            $(".buttom_read_return").show(500);
            $(".third_container_add").show(300);
        });
    });
    $(document).ready(function() {
        $(".buttom_read_return").click(() => {
            $(".buttom_read_return").hide(500);
            $(".buttom_read").show(500);
            $(".third_container_add").hide(300);
        });
    });

    $(document).ready(function() {
        $("#future").click(() => {
            alert("Никаких:)")
        });
        $("#future1").click(() => {
            alert("Никаких:)")
        });
    });

    $(document).ready(function() {
        $("#des").click(() => {
            $(".tex").show();
            $(".act").hide();
            $(".video").hide();
        });
        $("#actors").click(() => {
            $(".tex").hide();
            $(".act").show();
            $(".video").hide();
        });
        $("#trailer").click(() => {
            $(".tex").hide();
            $(".act").hide();
            $(".video").show();
        });
    });

    $(document).ready(function() {
        $('.menu-burger__header').click(function() {
            $('.menu-burger__header').toggleClass('open-menu');
            $('.header__nav').toggleClass('open-menu');
        });
    });
}
$(initialize);