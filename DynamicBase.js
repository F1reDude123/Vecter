export default class DynamicBase {
  constructor() {
    this.tick();
  }
  static tick() {
    requestAnimationFrame(() => this.tick());
  }
}
