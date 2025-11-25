# Vecter
Vecter is an open-source, easy-to-use 3D graphics rendering pipeline.

It integrates easily into JavaScript and has several useful helper classes set up for your use.

Example:
```
<script type="module"> // IMPORTANT: the script will not work if the type is not "module".
import Scene from "https://f1redude123.github.io/Vecter/main.js"; // Import the necessary Vecter files
import Vector3 from "https://f1redude123.github.io/Vecter/Vector3.js";
import RenderBuffer from "https://f1redude123.github.io/Vecter/RenderBuffer.js";
import DynamicBase from "https://f1redude123.github.io/Vecter/DynamicBase.js";

var scene = new Scene(500, 300); // Create the scene

scene.createBuffer(); // Create a render buffer(buffer 0)

class GameRenderer extends DynamicBase { // Create a custom class that extends DynamicBase, a class provided for frame-by-frame action, to render the game every frame
  constructor() { // super() is not necessary here, but it's good practice
  	super();
  }
  static tick() { // Override the tick() method of DynamicBase, which runs every frame. IMPORTANT: must be static.
  	var verts = [ // Define vertices
      new Vector3(-100, 100, -100),
      new Vector3(100, 100, -100),
      new Vector3(100, 100, 100),
      new Vector3(-100, 100, 100),
      
      new Vector3(-100, -100, -100),
      new Vector3(100, -100, -100),
      new Vector3(100, -100, 100),
      new Vector3(-100, -100, 100)
    ];
    var inds = [ // Define indices
      0, 1, 2,
      2, 3, 0,
      
      4, 5, 6,
      6, 7, 4,
      
      2, 1, 5,
      5, 6, 2,
      
      3, 0, 4,
      4, 7, 3,
      
      3, 2, 6,
      6, 7, 3,
      
      0, 1, 5,
      5, 4, 0
    ];
    
    scene.loadBuffer(0, verts, inds); // Load vertices and indices into buffer 0
    scene.renderBuffer(0); // Render buffer 0
    
  	super.tick(); // IMPORTANT: without super.tick(), the renderer will only render one frame.
  }
}

GameRenderer.tick(); // Start the loop!
</script>
```

This is a simple Vecter script that creates a basic cube. You can modify the geometry by changing the vertex and index tables. You can also utilize the Vector3.add() method to change the position of the cube based on a variable.
