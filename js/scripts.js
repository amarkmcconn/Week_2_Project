$(document).ready(function() {
  $("form#result").submit(function(event) {
    const animal = parseInt($("#animal").val());
    const color = parseInt($("#color").val())
    const food = parseInt($("#food").val())
    const gender = parseInt($("#gender").val())
    const element = parseInt($("#element").val())
    const output = $("#output");

    if (animal === color && color === food && food === gender && gender === element) {
      output.text("Ruby");
    } else if (animal === 2 && color === animal)
      output.text("C#")
    event.preventDefault();
  });
});