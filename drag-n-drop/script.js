const fillDOM = document.querySelector('.fill');
const emptyDOM = document.querySelectorAll('.empty');

// we want two events to start when dragging full div.
fillDOM.addEventListener('dragstart', dragStart)
fillDOM.addEventListener('dragend', dragEnd)

for (const empty of emptyDOM) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart(){
  // append the class
  this.className += ' hold';
  //sets the box that the picture is taken from to invisible with a little timer, giving us time to click it.
  setTimeout(() => this.className = ' invisible', 0);
}
// puts it to the same place, because that element still has fill class.
function dragEnd(){
  this.className= 'fill';
}

function dragOver(e){
  // it has default eventlistener that needs to be canceled.
  e.preventDefault()

}

function dragEnter(e){
  e.preventDefault()
  this.className += ' hovered'
}

function dragLeave(){
  this.className = 'empty'
}

function dragDrop(){
  // we want to make sure it has class empty, and has an element of fill before we drop on it.
  this.className = 'empty';
  this.append(fillDOM);
}