class Toast {
  constructor(content, props = { position: 'center-bottom', duration: 3000, type: '' }) {
    this.content = content;
    this.duration = props.duration;
    this.toast = document.createElement("div");
    this.toastContainer = document.querySelector(".toast-container");
    this.position = props.position;
    this.type = props.type;
  }
  init() {
    let pTag = document.createElement('span');
    let textNode = document.createTextNode(this.content);
    pTag.appendChild(textNode);
    this.toast.appendChild(pTag);
    this.toast.className = "toast";
    this.toast.classList.add('show');
    if (this.type != '') {
      this.toast.classList.add(`toast-${this.type}`);
    }
    this.initToastContainer();
    this.remove();
  }
  initToastContainer() {
    let container = document.querySelector('body');
    if (!this.toastContainer) {
      this.toastContainer = document.createElement("div");
      this.toastContainer.className = "toast-container"
      this.toastContainer.classList.add(this.position);
      container.appendChild(this.toastContainer);
    }
    this.toastContainer.appendChild(this.toast);
  }
  remove() {
    const toastContainer = document.querySelector('.toast-container');
    setTimeout(() => {
      this.toast.remove(); 
      const allToast = document.querySelectorAll('.toast-container .toast');
      console.log(allToast.length);
      if (!allToast.length) toastContainer.remove();
    }, this.duration);
  }
  removeAll() {
    const allToast = document.querySelectorAll('.toast-container .toast');
    const toastContainer = document.querySelector('.toast-container');
    for (let i = 0; i < allToast.length; i++) {
      allToast[i].remove()
    }
    toastContainer.remove();
  }
}

let toast = new Toast('123').init();

function addToast(content) {
  new Toast(content).init();
}

function removeAll() {
  new Toast().removeAll();
}