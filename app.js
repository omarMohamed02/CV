$(window).on("load", function () {
  let mode = localStorage.getItem("mode");
  $(".loader").hide();
  if (!mode) {
    localStorage.setItem("mode", "light");
  } else {
    if (mode == "dark") {
      $("body").addClass("dark-mode");
      $("#mode").attr("src", "light.svg");

      $("#light").hide();
      $("#dark").show();
    } else {
      $("body").removeClass("dark-mode");
      $("#mode").attr("src", "moon.svg");
      $("#dark").hide();
      $("#light").show();
    }
  }
});

$(".mode").on("click", function () {
  let mode = localStorage.getItem("mode");

  if (mode == "dark") {
    // Light mode
    $("body").removeClass("dark-mode");
    localStorage.setItem("mode", "light");
    $("#mode").attr("src", "light.svg");
    $("#dark").hide();
    $("#light").show();
  } else {
    // Dark mode
    $("body").addClass("dark-mode");
    localStorage.setItem("mode", "dark");
    $("#light").hide();
    $("#dark").show();
  }
});

// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });
