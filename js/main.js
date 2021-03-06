let currentActive = 0;

$(".right-arrow").on("click", () => moveRight());
$(".left-arrow").on("click", () => moveLeft());

function activate(idx) {
  $(".slide").each(function () {
    $(this).removeClass("active");
  });
  $("body").css(
    "background-image",
    "url(" + `css/img/${currentActive + 1}.jpg` + ")"
  );
  $(".slide").each(function (index) {
    if (index == idx) {
      $(this).addClass("active");
    }
  });
}

function moveRight() {
  if (currentActive == $(".slide").length - 1) {
    currentActive = 0;
  } else {
    currentActive++;
  }
  activate(currentActive);
}
function moveLeft() {
  if (currentActive <= 0) {
    currentActive = $(".slide").length - 1;
  } else {
    currentActive--;
  }
  activate(currentActive);
}
