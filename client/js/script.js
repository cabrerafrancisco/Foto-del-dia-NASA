const btnMostrar = document.getElementById("btnMostrar");
const urlFoto = document.getElementById("image");
const titulo = document.getElementById("title");
const date = document.getElementById("date");
const inpDate = document.getElementById("inpDate");
const explanation = document.getElementById("explanation");

btnMostrar.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function () {
    const response = JSON.parse(xhr.responseText);

    urlFoto.src = response.url;
    titulo.textContent = response.title;
    date.textContent = response.date;
    explanation.textContent = response.explanation;
  });
  xhr.open(
    "GET",
    `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${inpDate.value}`
  );
  xhr.send();
});
