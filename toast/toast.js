class Toast {
  constructor(content, props = { position: 'right-bottom', duration: 3000, type: '' }) {
    this.content = content;
    this.duration = props.duration;
    this.toast = document.createElement("div");
    this.position = props.position;
    this.type = props.type;
  }
  init() {
    let container = document.querySelector('body');
    let pTag = document.createElement('span');
    let textNode = document.createTextNode(this.content);
    pTag.appendChild(textNode);
    this.toast.appendChild(pTag);
    this.toast.className = "toast";
    this.toast.classList.add('show');
    this.toast.classList.add(this.position);
    if(this.type != '') {
      this.toast.classList.add(`toast-${this.type}`);
    }
    container.appendChild(this.toast);
    this.remove();
  }
  remove() {
    setTimeout(() => { this.toast.remove() }, this.duration);
  }
  removeAll() {
    let allToast = document.querySelectorAll('.toast');
    for(let i =0;i<allToast.length;i++) {
      allToast[i].remove()
    }
  }
}

let toast = new Toast('123').init();

function addToast(content) {
  new Toast(content).init();
}

function removeAll() {
  new Toast().removeAll();
}