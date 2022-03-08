$(function () {
  var totalCount = "0" + $(".totalElement").length;
  var currentCount = "0";

  if (currentCount == 0) {
    currentCount = "01";
  }

  var owl = $(".slide-one-item");
  var OwlRefresh = $(".slide-one-item").owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 0,
    margin: 0,
    smartSpeed: 1500,
    autoplay: false,
    dots: false,
    nav: true,
    navText: [
      '<span class="icon-keyboard_arrow_left cust-left-btn"> ' +
        currentCount +
        ' |  <i class="fa-solid fa-caret-left left-arrow"></i>',
      '<span class="icon-keyboard_arrow_right cust-right-btn"> ' +
        totalCount +
        '  <i class="fa-solid fa-caret-right right-arrow"></i>',
    ],
  });

  $(".thumnail-holder").each(function (slide_index) {
    $(this).click(function (e) {
      owl.trigger("to.owl.carousel", [slide_index, 1500]);
      e.preventDefault();
    });
  });

  owl.on("changed.owl.carousel", function (event) {
    $(".thumnail-holder").removeClass("active");
    currentCount = event.item.index;
    $(".cust-left-btn").html(
      "0" +
        Number(currentCount - 1) +
        ' |  <i class="fa-solid fa-caret-left left-arrow"></i>'
    );
    console.log(currentCount);
    // console.log(event.item.count + "///" + event.item.index);
    $(".thumnail-holder")
      .eq(event.item.index - 2)
      .addClass("active");
  });
});
