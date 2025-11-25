import Vector3 from "https://f1redude123.github.io/Vecter/Vector3.js";
import Vector2 from "https://f1redude123.github.io/Vecter/Vector2.js";
import Polygon from "https://f1redude123.github.io/Vecter/Polygon.js";
import RenderBuffer from "https://f1redude123.github.io/Vecter/RenderBuffer.js";

export default class Scene {
  buffers = [];
  constructor(width = null, height = null, parentElement = document.body) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width || window.innerWidth;
    this.canvas.height = height || window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
    this.fov = 500;
    parentElement.appendChild(this.canvas);
  }
  createBuffer() {
    this.buffers.push(new RenderBuffer(this));
  }
  loadBuffer(slot, p, i) {
    this.buffers[slot].load(p, i);
  }
  getBuffer(slot) {
    return this.buffers[slot];
  }
  renderBuffer(slot) {
    this.#draw(this.buffers[slot].getBufferData());
  }
  #draw(data) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    data.forEach(e => {
      this.ctx.beginPath();
      this.ctx.moveTo(e.p1.x, e.p1.y);
      this.ctx.lineTo(e.p2.x, e.p2.y);
      this.ctx.lineTo(e.p3.x, e.p3.y);
      this.ctx.lineTo(e.p1.x, e.p1.y);
      this.ctx.closePath();
      this.ctx.fill();
    });
  }
}
