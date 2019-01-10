var searchForm = document.querySelector(".search");
var searchButton = document.querySelector(".btn-order");
var arrivalDate = searchForm.querySelector("[name=arrival]");
var departureDate = searchForm.querySelector("[name=departure]");
var adultsNumber = searchForm.querySelector("[name=adults]");
var childsNumber = searchForm.querySelector("[name=childs]");

var isStorageSupport = true;
var storage = "";

if ("script") {
  searchForm.classList.add("search-none")};

try {
  storage = localStorage.getItem("adultsNumber");
} catch (err) {
  isStorageSupport = false;
};

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

searchForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !adultsNumber.value || !childsNumder.value){
  alert("Укажите даты заезда-выезда и количество человек");
   evt.preventDefault();
 }

 localStorage.setItem("arrivalDate", arrivalDate.value);
 localStorage.setItem("departureDate", departureDate.value);
 localStorage.setItem("adultsNumber", adultsNumber.value);
 localStorage.setItem("childsNumber", childsNumber.value);
 });
