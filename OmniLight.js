import LightRay from "https://f1redude123.github.io/Vecter/LightRay.js";

export default class OmniLight {
  constructor(p) {
    var rays = [];
    for (var x = -1; x <= 1; x += 0.1) {
      for (var y = -1; y <= 1; y += 0.1) {
        for (var z = -1; z <= 1; z += 0.1) {
          rays.push(new LightRay(new Vector3(x, y, z), p));
        }
      }
    }
    return rays;
  }
}
