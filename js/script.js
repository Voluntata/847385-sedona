var searchForm = document.querySelector('.search');
var searchButton = document.querySelector('.btn-order');

searchButton.addEventListener('click', function (evt) {
   evt.preventDefault()
});

searchButton.onclick = function() {
    if (searchForm.style.display !== 'none') {
        searchForm.style.display = 'none';
    }
    else {
        searchForm.style.display = 'block';
    }
};

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    searchForm.style.display = 'none';
  }
});
