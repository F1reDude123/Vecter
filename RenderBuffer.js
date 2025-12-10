import Polygon from "https://f1redude123.github.io/Vecter/Polygon.js";
import Vector2 from "https://f1redude123.github.io/Vecter/Vector2.js";
import Vector3 from "https://f1redude123.github.io/Vecter/Vector3.js";

export default class RenderBuffer {
  vertices=[];
  indices=[];
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
      var p1 = this.vertices[this.indices[i]];
      var p2 = this.vertices[this.indices[i+1]];
      var p3 = this.vertices[this.indices[i+2]]
      
      if (p1.z < -this.scene.fov+1) {
        p1.z = -this.scene.fov+1;
      }
      if (p2.z < -this.scene.fov+1) {
        p2.z = -this.scene.fov+1;
      }
      if (p3.z < -this.scene.fov+1) {
        p3.z = -this.scene.fov+1;
      }
      
      var poly = new Polygon(
        this.#project(p1),
        this.#project(p2),
        this.#project(p3)
      );
      
      var normal = new Vector3(0, 0, 0);
      
      var u = p2.sub(p1);
      var v = p3.sub(p1);
      
      normal.x = u.y*v.z - u.z*v.y;
      normal.y = u.z*v.x - u.x*v.z;
      normal.z = u.x*v.y - u.y*v.x;
      poly.normal = normal;
      
      data.push(poly);
    }
    return data;
  }
}
