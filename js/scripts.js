$(document).ready(function() {
  $("form#result").submit(function(event) {
    const animal = parseInt($("#animal").val());
    const color = parseInt($("#color").val());
    const food = parseInt($("#food").val());
    const gender = parseInt($("#gender").val());
    const element = parseInt($("#element").val());

    if (animal === 1 && color === 1 && food === 1 && gender === 1 && element === 1) {
      $("#ruby1").show();
      $("#csharp").hide();
      $("#jas1").hide();
      $("#go").hide();
      $("#python").hide();
    } else if (animal === 2 && color === 2 & element === 3) {
      $("#ruby1").hide();
      $("#csharp").show();
      $("#jas1").hide();
      $("#go").hide();
      $("#python").hide();
    } else if (animal === 3 && color === 3) {
      $("#ruby1").hide();
      $("#csharp").hide();
      $("#jas1").show();
      $("#go").hide();
      $("#python").hide();
    } else if (animal === 2 && color === 2 && food === 1 && element === 2)
      $("#jas1").hide();
      $("#ruby1").hide();
      $("#csharp").hide();
      $("#go").show();
      $("#python").hide();

    event.preventDefault();
  });
});