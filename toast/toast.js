class Toast {
  constructor(content, time = 3000, position = 'right-top') {
    this.content = content;
    this.time = time;
    this.toast = document.createElement("div");
    this.position = position;
  }
  init() {
    let container = document.querySelector('body');
    let textNode = document.createTextNode(this.content);
    this.toast.className = "toast";
    this.toast.appendChild(textNode);
    this.toast.classList.add('show');
    this.toast.classList.add(this.position);
    container.appendChild(this.toast);
    this.remove();
  }
  remove() {
    setTimeout(() => { this.toast.classList.remove("show") }, this.time);
  }
}

let toast = new Toast('123').init();

function addToast(content) {
  new Toast(content).init();
}