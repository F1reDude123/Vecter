export default class Polygon {
  normal = new Vector3(0, 0, 0);
  constructor(p1, p2, p3) {
    [this.p1, this.p2, this.p3] = [p1, p2, p3];
  }
}
