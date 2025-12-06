# Vecter
Vecter is an open-source, easy-to-use 3D graphics rendering pipeline.

It integrates easily into JavaScript and has several useful helper classes set up for your use.

## Basics
In order to render geometry, you must first initialize a `Scene`. This will act as the "canvas" for your geometry. The `Scene` constructor takes up to three arguments:

- Width
- Height
- Parent element(optional)
If the parent element is unspecified, it will default to the document body. Scene creation example:
```
var scene = new Scene(500, 300);
```
After creating the scene, you must use the `createBuffer()` function to create a render buffer. The render buffer will be responsible for drawing your geometry. Example:
```
scene.createBuffer();
```
In the Vecter buffering system, buffers are stored in an array, so when loading or rendering buffers, it's important to know the index of your render buffer.

Once the buffer has been initalized, vertices and indices must be defined. Vertices define the points the model will use, and indices define the order in which the vertices should be connected to create polygons. Vecter required vertices and indices to be stored in arrays. To define vertices, use the Vector3 class Vecter provides. Example:
```
import Vector3 from "https://f1redude123.github.io/Vecter/Vector3.js"; // Import the Vector3.js file

/* Basic triangle */
var vertices = [ // Create vertices
  new Vector3(-50, -50, 0),
  new Vector3(50, -50, 0),
  new Vector3(0, 50, 0)
];
var indices = [ // Create indices
  0, 1, 2
];
```
After the vertices and indices have been created, they need to be loaded into the render buffer using the `Scene.loadBuffer()` function. The function takes 3 arguments:

- Buffer index
- Vertices
- Indices
The syntax here is simple:
```
scene.loadBuffer(0 /* We've only created one buffer, so index is 0 */, vertices, indices);
```
Now that you've loaded in your vertices and indices, the buffer is ready to be rendered with `Scene.renderBuffer()`. The method takes one argument:

- Buffer index
Example:
```
scene.renderBuffer(0);
```
With this code, a simple triangle should be rendered to the screen.

Full example:
```
<script type="module"> // IMPORTANT: the script will not work if the type is not "module".
  import Scene from "https://f1redude123.github.io/Vecter/main.js"; // main.js is the file which contains the Scene class
  import Vector3 from "https://f1redude123.github.io/Vecter/Vector3.js";
  import RenderBuffer from "https://f1redude123.github.io/Vecter/RenderBuffer.js";
  
  var scene = new Scene(500, 300);
  
  scene.createBuffer();
  
  var vertices = [
    new Vector3(-50, -50, 0),
    new Vector3(50, -50, 0),
    new Vector3(0, 50, 0)
  ];
  var indices = [
    0, 1, 2
  ];
  
  scene.loadBuffer(0, vertices, indices);
  scene.renderBuffer(0);
</script>
```
## Reading OBJ files
With the `OBJreader` class, you can read OBJ files dynamically and render the resulting model data.
The `OBJreader` class uses the static method `readText()` to read files. It natively supports reading text, like so:
```
import OBJreader from "https://f1redude123.github.io/Vecter/OBJreader.js"; // Import the OBJreader class

var text = "(obj text here)";
var obj = OBJreader.readText(text); // Read the OBJ file
```
After reading the file, you can get the vertices and indices using the `getVerts()` and `getInds()` methods. Example:
```
var verts = obj.getVerts();
var inds = obj.getInds();
```
You can then plug these values into the `Scene.loadBuffer()` method.

Additionally, you can use the JS `fetch()` function to get an OBJ file from a URL. Example:
```
var verts;
var inds;
fetch("https://f1redude123.github.io/Vecter/OBJs/cube.obj" /* Cube OBJ file provided by Vecter */)
  .then(page => page.text())
  .then(text => { var obj = OBJreader.readText(text); verts = obj.getVerts(); inds = obj.getInds() });
```
This will fetch the example `cube.obj`, convert it to text format, and feed it into the `OBJreader`.

Full example:
```
<script type="module">
  import Scene from "https://f1redude123.github.io/Vecter/main.js";
  import Vector3 from "https://f1redude123.github.io/Vecter/main.js";
  import OBJreader from "https://f1redude123.github.io/Vecter/main.js";
  
  var scene = new Scene(500, 300);

  scene.createBuffer();

  var verts;
  var inds;
  fetch("https://f1redude123.github.io/Vecter/OBJs/cube.obj")
    .then(page => page.text())
    .then(text => { var obj = OBJreader.readText(text); verts = obj.getVerts(); inds = obj.getInds() });

  scene.loadBuffer(0, verts, inds);
  scene.renderBuffer(0);
</script>
```
