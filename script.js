const gallery = document.querySelector('.gallery-container');

gallery.addEventListener('wheel', (event) => {
  event.preventDefault();
  gallery.scrollLeft += event.deltaY;
});

const thingsList = document.querySelector('.things-list ol');

thingsList.addEventListener('wheel', (event) => {
  event.preventDefault();
  thingsList.scrollLeft += event.deltaY;
});
