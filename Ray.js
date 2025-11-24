import DynamicBase from "https://f1redude123.github.io/PlayGround/DynamicBase.js";
import Vector3 from "https://f1redude123.github.io/PlayGround/Vector3.js";

export default class Ray extends DynamicBase {
  constructor(v, p) {
    super();
    this.v = v;
    this.p = p;
  }
  static tick() {
    this.p = this.p.add(this.v);
    super.tick();
  }
}
