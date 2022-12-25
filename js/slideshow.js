var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Verifica se o indice está dentro do intervalo
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  //desabilita a visualização de todos os slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  //Deixa os pontos como desativados
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  //Habilita a imagem referente ao indice
  //Ativa o ponto referente ao indice
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}