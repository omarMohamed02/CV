//Create PDf from HTML...
function CreatePDFfromHTML() {
  var HTML_Width = $("body").width();
  var HTML_Height = $("body").height();
  var top_left_margin = 15;
  var PDF_Width = HTML_Width + top_left_margin * 2;
  var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
  var canvas_image_width = HTML_Width;
  var canvas_image_height = HTML_Height;

  var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

  html2canvas($("body")[0]).then(function (canvas) {
    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
    pdf.addImage(
      imgData,
      "JPG",
      top_left_margin,
      top_left_margin,
      canvas_image_width,
      canvas_image_height
    );
    for (var i = 1; i <= totalPDFPages; i++) {
      pdf.addPage(PDF_Width, PDF_Height);
      pdf.addImage(
        imgData,
        "JPG",
        top_left_margin,
        -(PDF_Height * i) + top_left_margin * 4,
        canvas_image_width,
        canvas_image_height
      );
    }
    pdf.save("Your_PDF_Name.pdf");
  });
}

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

$("#downloadCV").on("click", function () {
  $("#downloadCV").hide();
  CreatePDFfromHTML();
  setTimeout(() => {
    $("#downloadCV").show();
  }, 500);
});

// function checkMode() {

// }

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

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
