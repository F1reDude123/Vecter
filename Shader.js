export default class Shader {
  constructor(f) {
    this.f = new Function("ShaderProperties", f + "\n return props;");
  }
}
