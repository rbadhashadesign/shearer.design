const cube = $("#cube");

/*--------------------
  Cube Follower Logic
--------------------*/
// 1. GLOBAL Mouse Movement
$(document).on("mousemove", function (e) {
    cube.css({
        transform: `translate(${e.pageX}px, ${e.pageY}px) translate(-50%, -50%)`
    });
});

// 2. Hover Enter
$(".hover-area").on("mouseenter", function () {
    let projectTitle = $(this).data("label");
    cube.text(projectTitle);
    cube.addClass("active");
});

// 3. Hover Leave
$(".hover-area").on("mouseleave", function () {
    cube.removeClass("active");
    setTimeout(() => {
        if (!cube.hasClass("active")) cube.text(""); 
    }, 300);
});

