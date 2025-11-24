import Ray from "https://f1redude123.github.io/Vecter/Ray.js";

export default class LightRay extends Ray {
  constructor(p, v, l) {
    super(p, v);
    this.l = l;
  }
  static tick() {
    this.l--;
    if (this.l) super.tick();
  }
}
