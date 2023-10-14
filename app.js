let wraper = document.querySelector('.wraper');
let item = document.querySelectorAll('.item');

let numbLine = +prompt('Enter number of lines');
console.log(`number of lines is ${numbLine}`);
wraper.style.gridTemplateRows = `repeat(${numbLine}, 1fr)`;

let numbColumn = +prompt('Enter number of columns');

console.log(`number of columns is ${numbColumn}`);
wraper.style.gridTemplateColumns = `repeat(${numbColumn}, 1fr)`;

let allNumb = numbColumn * numbLine;
console.log(allNumb);

for (i = 0; i < allNumb; i++) {
  document.getElementById('mosaic').innerHTML =
    document.getElementById('mosaic').innerHTML +
    '<div class="item">' +
    '</div>';
}

let items = document.querySelectorAll('.item');
console.log(items);

items.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    console.log(items);
  });
});

let colors = document.querySelectorAll('.color');
console.log(colors);

colors.forEach(itemColor => {
  itemColor.addEventListener('click', () => {
    removeActive();

    itemColor.classList.add('activecolor');

    items.forEach(itm => {
      if (itm.classList.contains('active')) {
        //let el = itemColor;
        let styles = window.getComputedStyle(itemColor);
        itm.style.background = styles.background;
      }
    });
  });
});
console.log(colors);

function removeActive() {
  colors.forEach(itemColor => {
    itemColor.classList.remove('activecolor');
  });
}
