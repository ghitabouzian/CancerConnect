//Connect page texting field
var textField = $('.submissionField');
var nameField = $('.nameField');
var submitButton = $('.submissionButton');
var taskList = $('.list');

submitButton.on("click", addTaskCard);
taskList.on("click", deleteCard);

function addTaskCard(event) {
  event.preventDefault();
  var usersName = nameField.val();
  var usersMsg = textField.val();

  taskList.append(`<div class="taskCard">
      <p>By: ${usersName}</p>
      <p>${usersMsg}</p>
      <button class="delete">Delete</button>
</div>`);
  $('.submissionField').val("");
  $('.nameField').val("");
}

function deleteCard() {

  if (event.target.className === "delete") {

    event.target.parentNode.remove();
  }
}

//end of Connect page code



// Homepage text Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

