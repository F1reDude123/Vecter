import Vector3 from "https://f1redude123.github.io/Vecter/Vector3.js";

export default class OBJreader {
  constructor() {}
  static readText(t) {
    var verts = [];
    var inds = [];
    t.split("\n").forEach(function(e) {
      switch (e[0]) {
        case "v":
          var points = e.substring(2, e.length).split(" ");
          verts.push(new Vector3(parseFloat(points[0]), parseFloat(points[1]), parseFloat(points[2])));
          break;
        case "f":
          var points = e.substring(2, e.length).split(" ");
          if (points.length == 3) {
            inds.push(parseInt(points[0])-1);
            inds.push(parseInt(points[1])-1);
            inds.push(parseInt(points[2])-1);
          }
          else {
            inds.push(parseInt(points[0])-1);
            inds.push(parseInt(points[1])-1);
            inds.push(parseInt(points[2])-1);
            inds.push(parseInt(points[2])-1);
            inds.push(parseInt(points[3])-1);
            inds.push(parseInt(points[0])-1);
          }
      }
    });
    return {
      getVerts: function() { return verts; },
      getInds: function() { return inds; }
    };
  }
  static async readURL(u) {
    var url = fetch(u).then(r => r.text()).then(t => {
      var verts = [];
      var inds = [];
      t.split("\n").forEach(function(e) {
        switch (e[0]) {
          case "v":
            var points = e.substring(2, e.length).split(" ");
            verts.push(new Vector3(parseFloat(points[0]), parseFloat(points[1]), parseFloat(points[2])));
            break;
          case "f":
            var points = e.substring(2, e.length).split(" ");
            if (points.length == 3) {
              inds.push(parseInt(points[0])-1);
              inds.push(parseInt(points[1])-1);
              inds.push(parseInt(points[2])-1);
            }
            else {
              inds.push(parseInt(points[0])-1);
              inds.push(parseInt(points[1])-1);
              inds.push(parseInt(points[2])-1);
              inds.push(parseInt(points[2])-1);
              inds.push(parseInt(points[3])-1);
              inds.push(parseInt(points[0])-1);
            }
        }
      });
      return {
        getVerts: function() { return verts; },
        getInds: function() { return inds; }
      };
    });
  }
}
