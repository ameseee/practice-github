var submitBtn = $('.submit-btn');

submitBtn.on("click", logName);

function logName(event) {
  event.preventDefault();
  var name = $('.name')
  console.log(name);
}
