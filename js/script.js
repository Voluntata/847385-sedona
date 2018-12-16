var searchForm = document.querySelector(".search");
var searchButton = document.querySelector(".btn-order");
var arrivalDate = searchForm.querySelector("[name=arrival]");

searchButton.addEventListener("click", function (evt) {
   evt.preventDefault()
});

searchButton.addEventListener("click", function() {
  searchForm.classList.toggle("search-show");
  arrivalDate.focus();
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    searchForm.classList.remove("search-show");
  }
});
