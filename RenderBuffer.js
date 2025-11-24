import Polygon from "https://f1redude123.github.io/Vecter/Polygon.js";
import Vector2 from "https://f1redude123.github.io/Vecter/Vector2.js";

export default class RenderBuffer {
  vertices=[];
  indices=[];
  #properties={
    xRot: 0,
    yRot: 0,
    zRot: 0
  };
  getBufferProperties={
    rotate: (v) => {
      [this.#properties.xRot, this.#properties.yRot, this.#properties.zRot]=[v.x, v.y, v.z];
    },
    rotateX: (x) => {
      this.#properties.xRot=x;
    },
    rotateY: (y) => {
      this.#properties.yRot=y;
    },
    rotateZ: (z) => {
      this.#properties.zRot=z;
    }
  }
  constructor(s) {
    this.scene=s;
  }
  load(v, i) {
    this.vertices=v;
    this.indices=i;
  }  
  #project(x) {
    return new Vector2(this.scene.canvas.width/2+x.x*this.scene.fov/(x.z+this.scene.fov), this.scene.canvas.height/2-x.y*this.scene.fov/(x.z+this.scene.fov));
  }
  getBufferData() {
    var data=[];
    for (var i=0;i<this.indices.length;i+=3) {
      data.push(new Polygon(
        this.#project(this.vertices[this.indices[i]].rotateX(this.#properties.xRot).rotateY(this.#properties.yRot).rotateZ(this.#properties.zRot)),
        this.#project(this.vertices[this.indices[i+1]].rotateX(this.#properties.xRot).rotateY(this.#properties.yRot).rotateZ(this.#properties.zRot)),
        this.#project(this.vertices[this.indices[i+2]].rotateX(this.#properties.xRot).rotateY(this.#properties.yRot).rotateZ(this.#properties.zRot))
      ));
    }
    return data;
  }
}
