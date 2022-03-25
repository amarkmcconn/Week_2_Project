$(document).ready(function() {
  $("form#result").submit(function(event) {
    const animal = parseInt($("#animal").val());
    const color = parseInt($("#color").val());
    const food = parseInt($("#food").val());
    const gender = parseInt($("#gender").val());
    const element = parseInt($("#element").val());

    if (animal === color && color === food && food === gender && gender === element) {
      $("#ruby1").show();
      $("#csharp").hide();
    } else if (animal === 2 && color === animal) {
      $("#csharp").show();
      $("#ruby1").hide();
    } else if (animal === 3 && color === animal)
      $("jas1").show();

    event.preventDefault();
  });
});