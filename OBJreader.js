import Vector3 from "https://f1redude123.github.io/Vecter/Vector3.js";

export default class OBJreader {
  constructor() {}
  static readText(t) {
    var verts = [];
    var inds = [];
    text.split("\n").forEach(function(e) {
      switch (e[0]) {
        case "v":
          var points = e.substring(2, e.length).split(" ");
          verts.push(new Vector3(parseFloat(points[0]), parseFloat(points[1]), parseFloat(points[2])));
          break;
        case "f":
          var points = e.substring(2, e.length).split(" ");
          if (points.length == 3) {
            inds.push(new Vector3(parseFloat(points[0]), parseFloat(points[1]), parseFloat(points[2])));
          }
          else {
            inds.push(new Vector3(parseFloat(points[0]), parseFloat(points[1]), parseFloat(points[2])));
            inds.push(new Vector3(parseFloat(points[2]), parseFloat(points[3]), parseFloat(points[0])));
          }
      }
    });
    return {
      getVerts: function() { return verts; },
      getInds: function() { return inds; }
    };
  }
}
