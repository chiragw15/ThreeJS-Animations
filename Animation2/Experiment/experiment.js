/*Made by: Chirag Wadhera, IIT Patna*/

var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;        
var mySceneBRY;        
var mySceneW;          
var mySceneH;          
var myCenterX;         
var myCenterY;  
var current = 1;
var stopset = 1;
/*----------------------  Initial Stuff Start------------------*/

var helpContent;
function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Three Dimensional Shapes help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows 5 basic 3D objects and 6 extra bonus 3D objects.</p>";
    helpContent = helpContent + "<p>Basic 3D shapes</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Cube</li>";
    helpContent = helpContent + "<li>Cuboid</li>";
    helpContent = helpContent + "<li>Cylinder</li>";
    helpContent = helpContent + "<li>Cone</li>";
    helpContent = helpContent + "<li>Sphere</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Bonus 3D shapes</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Prism</li>";
    helpContent = helpContent + "<li>Torus</li>";
    helpContent = helpContent + "<li>Icosahedron</li>";
    helpContent = helpContent + "<li>Tetrahedron</li>";
    helpContent = helpContent + "<li>Octahedron</li>";
    helpContent = helpContent + "<li>Dodecahedron</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>Click on start button to start the animation</p>";
    helpContent = helpContent + "<p>Check the checkbox corresponding to the 3D shape.</p>";
    helpContent = helpContent + "<p>Select 360 view to view from all angles.</p>";
    helpContent = helpContent + "<p>Select Edges to view edges.</p>";
    helpContent = helpContent + "<p>Select Vertices to view vertices</p>";
    helpContent = helpContent + "<p>Select Faces to view faces</p>";
    helpContent = helpContent + "<p>Click on pause button to pause the animation</p>";
    helpContent = helpContent + "<p>Click on Reset button to reset animation</p>";
    helpContent = helpContent + "<p>Click on start button and then drag to view a 360 degree view and scroll to zoom</p>";
    helpContent = helpContent + "<p>In the Bonus Section, just move the mouse pointer over the figure to rotate it.</p>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo() {
    infoContent =  "";
    infoContent = infoContent + "<h2>Three Dimensional Shapes concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows 5 different basic 3D objects and 6 extra 3D shapes.</p>";
    
    infoContent = infoContent + "<h3>Cube:</h3>";
    infoContent = infoContent + "<p>Vertices: 8";
    infoContent = infoContent + "</br>Edges&nbsp;&nbsp;&nbsp;: 12";
    infoContent = infoContent + "</br>Faces&nbsp;&nbsp;&nbsp;: 6</p>";

    infoContent = infoContent + "<h3>Cuboid:</h3>";
    infoContent = infoContent + "<p>Vertices: 8";
    infoContent = infoContent + "</br>Edges&nbsp;&nbsp;&nbsp;: 12";
    infoContent = infoContent + "</br>Faces&nbsp;&nbsp;&nbsp;: 6</p>";
    
    infoContent = infoContent + "<h3>Cylinder:</h3>";
    infoContent = infoContent + "<p>Vertices: 0";
    infoContent = infoContent + "</br>Edges&nbsp;&nbsp;&nbsp;: 1";
    infoContent = infoContent + "</br>Faces&nbsp;&nbsp;&nbsp;: 3</p>";

    infoContent = infoContent + "<h3>Cone:</h3>";
    infoContent = infoContent + "<p>Vertices: 1";
    infoContent = infoContent + "</br>Edges&nbsp;&nbsp;&nbsp;: 1";
    infoContent = infoContent + "</br>Faces&nbsp;&nbsp;&nbsp;: 2</p>";
    
    infoContent = infoContent + "<h3>Sphere:</h3>";
    infoContent = infoContent + "<p>Vertices: 0";
    infoContent = infoContent + "</br>Edges&nbsp;&nbsp;&nbsp;: 0";
    infoContent = infoContent + "</br>Faces&nbsp;&nbsp;&nbsp;: 0</p>";

    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene() {
    mySceneTLX = -12.0;
    mySceneTLY = 12.0;
    mySceneBRX = 12.0;
    mySceneBRY = -12.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;

    PIEscene.background = new THREE.Color( 0xFCEDB2 );
    var lights = [];
    lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

    lights[ 0 ].position.set( 0, 200, 0 );
    lights[ 1 ].position.set( 100, 200, 100 );
    lights[ 2 ].position.set( - 100, - 200, - 100 );

    PIEaddElement( lights[ 0 ] );
    PIEaddElement( lights[ 1 ] );
    PIEaddElement( lights[ 2 ] );
}

var controls;
function startOrbitalControls() {
    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
}

/*----------------------  Initial Stuff Ends ------------------*/



/*-----------------------  Cube Start  -----------------------*/

var cube;
var line;
var cubeMaterial;
var angCube = 0;
var circleVertex = new Array(24);
var squareGeometry = new Array(6);
var squareMesh = new Array(6);
var button, button2, button3, button4;
cubeMaterial = new THREE.MeshBasicMaterial({color: 0x156289, side: THREE.DoubleSide, shading: THREE.FlatShading});
cube = new THREE.Mesh( new THREE.CubeGeometry( 6, 6, 6 ),  cubeMaterial);
var edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry( 6, 6, 6 ) );
line = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );

var unboxsquare = 0; 
var parent = new Array(6);

function addCube(){
    addButtonCube();
    addCubeShape();
}

function removeCube(){
    removeCubeShape();
    //removeButtonCube();
    removeCubeBySquare();
    removeVerticesCube();
}

function addButtonCube(){
    /*button = PIEaddButton("test");
    button.style.position = 'absolute';
    button.style.top = window.innerWidth*1/20 + "px";
    button.style.right = window.innerHeight*12/10 + "px";
    button.style.width = 7 + "%";
    button.style.height = 5 + "%";
    button.style.value = "abc";
    button.style.background = '#d3d3d3';
    button.style.color = '#000';
    button.innerHTML = "360 view";
    button.addEventListener("click",rotateCube);
    //document.body.appendChild( button );

    button2 = document.createElement( 'button' );
    button2.style.position = 'absolute';
    button2.style.top = window.innerWidth*1/20 + "px";
    button2.style.right = window.innerHeight*10/10 + "px";
    button2.style.width = 7 + "%";
    button2.style.height = 5 + "%";
    button2.style.value = "abc";
    button2.style.background = '#d3d3d3';
    button2.style.color = '#000';
    button2.innerHTML = "Edges";
    button2.addEventListener("click", addEdgesCube);
    document.body.appendChild( button2 );

    button3 = document.createElement( 'button' );
    button3.style.position = 'absolute';
    button3.style.top = window.innerWidth*1/20 + "px";
    button3.style.right = window.innerHeight*8/10 + "px";
    button3.style.width = 7 + "%";
    button3.style.height = 5 + "%";
    button3.style.value = "abc";
    button3.style.background = '#d3d3d3';
    button3.style.color = '#000';
    button3.innerHTML = "Vertices";
    button3.addEventListener("click", addVerticesCube);
    document.body.appendChild( button3 );

    button4 = document.createElement( 'button' );
    button4.style.position = 'absolute';
    button4.style.top = window.innerWidth*1/20 + "px";
    button4.style.right = window.innerHeight*6/10 + "px";
    button4.style.width = 7 + "%";
    button4.style.height = 5 + "%";
    button4.style.value = "abc";
    button4.style.background = '#d3d3d3';
    button4.style.color = '#000';
    button4.innerHTML = "Faces";
    button4.addEventListener("click",addFacesCube);
    document.body.appendChild( button4 );*/

    if(current == 5){
        PIEchangeInputCommand("360 view","360 view", rotateCube);
        PIEchangeDisplayCommand("360 view","360 view", rotateCube);
        PIEchangeInputCommand("No Vertices","Vertices", addVerticesCube);
        PIEchangeDisplayCommand("No Vertices","Vertices", addVerticesCube);
        PIEchangeInputCommand("No Edges","Edges", addEdgesCube);
        PIEchangeDisplayCommand("No Edges","Edges", addEdgesCube);
        PIEchangeInputCommand("No Faces","Faces", addFacesCube);
        PIEchangeDisplayCommand("No Faces","Faces", addFacesCube);
    } else if(current == 6){
        PIEchangeInputCommand("-","360 view", rotateCube);
        PIEchangeDisplayCommand("-","360 view", rotateCube);
        PIEchangeInputCommand("-","Edges", addEdgesCube);
        PIEchangeDisplayCommand("-","Edges", addEdgesCube);
        PIEchangeInputCommand("-","Vertices", addVerticesCube);
        PIEchangeDisplayCommand("-","Vertices", addVerticesCube);
        PIEchangeInputCommand("-","Faces", addFacesCube);
        PIEchangeDisplayCommand("-","Faces", addFacesCube);
    } else { 
        if(current == 3){
            PIEchangeInputCommand("No Vertices","Vertices", addVerticesCube);
            PIEchangeDisplayCommand("No Vertices","Vertices", addVerticesCube);
        } else {
            PIEchangeInputCommand("Vertices","Vertices", addVerticesCube);
            PIEchangeDisplayCommand("Vertices","Vertices", addVerticesCube);
        }
        PIEchangeInputCommand("360 view","360 view", rotateCube);
        PIEchangeDisplayCommand("360 view","360 view", rotateCube);
        PIEchangeInputCommand("Edges","Edges", addEdgesCube);
        PIEchangeDisplayCommand("Edges","Edges", addEdgesCube);
        PIEchangeInputCommand("Faces","Faces", addFacesCube);
        PIEchangeDisplayCommand("Faces","Faces", addFacesCube);
    }
    current = 1;
}

function removeButtonCube(){
    /*button.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";*/
}

function addCubeBySquare(){
    var squareMaterial = new THREE.MeshBasicMaterial({ 
            color:0x156289, 
            side:THREE.DoubleSide 
        }); 

    for(var i=0; i<6; i++){
        squareGeometry[i] = THREE.SceneUtils.createMultiMaterialObject( new THREE.PlaneGeometry( 6, 6, 4, 4 ), [squareMaterial] );
    }

    parent[0] = new THREE.Object3D();
    squareGeometry[0].applyMatrix( new THREE.Matrix4().makeTranslation( -3, 0, 0 ) );
    parent[0].add(squareGeometry[0]);
    parent[0].rotation.y = Math.PI / 2;
    parent[0].position.x = 3.1;
    PIEaddElement(parent[0]);

    parent[1] = new THREE.Object3D();
    squareGeometry[1].applyMatrix( new THREE.Matrix4().makeTranslation( -3, 0, 0 ) );
    parent[1].add(squareGeometry[1]);
    parent[1].rotation.y = Math.PI / 2;
    parent[1].position.x = -3.1;
    PIEaddElement(parent[1]);

    parent[3] = new THREE.Object3D();
    squareGeometry[3].applyMatrix( new THREE.Matrix4().makeTranslation( 0, 3, 0 ) );
    parent[3].add(squareGeometry[3]);
    parent[3].rotation.x = Math.PI / 2;
    parent[3].position.y = 3.1;
    PIEaddElement(parent[3]);

    parent[2] = new THREE.Object3D();
    squareGeometry[2].applyMatrix( new THREE.Matrix4().makeTranslation( 0, 3, 0 ) );
    parent[2].add(squareGeometry[2]);
    parent[2].rotation.x = Math.PI / 2;
    parent[2].position.y = -3.1;
    PIEaddElement(parent[2]);

    parent[4] = new THREE.Object3D();
    squareGeometry[4].applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, 0 ) );
    parent[4].add(squareGeometry[4]);
    PIEaddElement(parent[4]);

    parent[5] = new THREE.Object3D();
    squareGeometry[5].applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, 0 ) );
    parent[5].add(squareGeometry[5]);
    parent[5].position.z = 3;
    PIEaddElement(parent[5]);

    unboxsquare = 1; 
    count = 0;
    count2 = 0;
}

function removeCubeBySquare(){
    for( var i =0 ;i< 6;i++){
        PIEscene.remove(parent[i]);
    } 
    unboxsquare = 0;
    count =0;
    count2=0; 
}

function addCubeShape(){
    removeCubeShape();
    removeVerticesCube();
    removeCubeBySquare();
    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x156289, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube = new THREE.Mesh( new THREE.CubeGeometry( 6, 6, 6 ),  cubeMaterial);
    cube.rotation.y += Math.PI / 4;
    cube.rotation.x += Math.PI / 6; 
    PIEaddElement( cube );

    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry( 6, 6, 6 ) );
    line = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    line.rotation.y += Math.PI / 4;
    line.rotation.x += Math.PI / 6;
    PIEaddElement( line );
}

function removeCubeShape(){
    PIEscene.remove(line);
    PIEscene.remove(cube);
    angCube = 0;
}

function addEdgesCube(){stopset = 0;
    removeVerticesCube();
    removeCubeBySquare();
    removeCubeShape();
    PIEaddElement(line);
    angCube = 0.005;
    line.material.opacity = 1;
    line.material.color = new THREE.Color(0x156289);
    PIEstartAnimation();
}

function addFacesCube(){stopset = 0;
    PIErender();
    removeCubeShape();
    removeCubeBySquare();
    removeVerticesCube();
    addCubeBySquare();
    PIEstartAnimation();
}

var verticeoffsetcube =0;
function addVerticesCube(){stopset = 0;
    var coords = [3,3,3 , 3,3,-3 , 3,-3,3 , 3,-3,-3 , -3,3,3 , -3,3,-3 , -3,-3,3 , -3,-3,-3];
    
    removeVerticesCube();
    removeCubeShape();
    removeCubeBySquare();
    addCubeShape();

    cube.updateMatrixWorld();

    for(var i=0; i<24;i+=3){
        var vector = cube.geometry.vertices[i/3].clone();
        vector.applyMatrix4( cube.matrixWorld );
        var geometry = new THREE.SphereGeometry( 0.2, 32, 32 );
        var material = new THREE.MeshBasicMaterial( {color: 0x156289 , transparent: true, opacity: 0} );
        circleVertex[i/3] = new THREE.Mesh( geometry, material );
        circleVertex[i/3].position.x = vector.x;
        circleVertex[i/3].position.y = vector.y;
        circleVertex[i/3].position.z = vector.z;
        PIEaddElement( circleVertex[i/3] );
    }
    cubeMaterial.transparent = true;
    cubeMaterial.opacity = 0.2;
    line.material.transparent = true;
    line.material.opacity = 0.2;
    verticeoffsetcube = 1;
    l = 0;
    PIEstartAnimation();
    //PIEstopAnimation();
}

function removeVerticesCube(){
    for(var i=0; i<8;i++){
        PIEscene.remove(circleVertex[i]);
    }
    verticeoffsetcube = 0;
    l = 0;
}

function rotateCube(){ stopset = 1;
    PIErender();
    removeCubeShape();
    addCubeShape();
    removeCubeBySquare();
    removeVerticesCube();
    angCube = 0.005;
    PIEstartAnimation();
}

/* -------------------------------  Cube Ends ----------------------*/



/*-----------------------  Cuboid Start  -----------------------*/

var cuboid;
var line2;
var cuboidMaterial;
var angCuboid = 0;
var circleVertex2 = new Array(24);
var rectangleGeometry = new Array(6);
var rectangleMesh = new Array(6);
var cuboidButton, cuboidButton2, cuboidButton3, cuboidButton4;
cuboidMaterial = new THREE.MeshBasicMaterial({color: 0x156289, side: THREE.DoubleSide, shading: THREE.FlatShading});
cuboid = new THREE.Mesh( new THREE.CubeGeometry( 10, 6, 6 ),  cuboidMaterial);
var edges = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry( 10, 6, 6 ) );
line2 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );

var unboxrectangle = 0; 
var parent2 = new Array(6);

function addCuboid(){
    removeCuboid();
    addButtonCuboid();
    addCuboidShape();
}

function removeCuboid(){
    removeCuboidShape();
    //removeButtonCuboid();
    removeCuboidByrectangle();
    removeVerticesCuboid();
}

function addButtonCuboid(){
    /*cuboidButton = document.createElement( 'button' );
    cuboidButton.style.position = 'absolute';
    cuboidButton.style.top = window.innerWidth*1/20 + "px";
    cuboidButton.style.right = window.innerHeight*12/10 + "px";
    cuboidButton.style.width = 7 + "%";
    cuboidButton.style.height = 5 + "%";
    cuboidButton.style.value = "abc";
    cuboidButton.style.background = '#d3d3d3';
    cuboidButton.style.color = '#000';
    cuboidButton.innerHTML = "360 view";
    cuboidButton.addEventListener("click",rotateCuboid);
    document.body.appendChild( cuboidButton );

    cuboidButton2 = document.createElement( 'button' );
    cuboidButton2.style.position = 'absolute';
    cuboidButton2.style.top = window.innerWidth*1/20 + "px";
    cuboidButton2.style.right = window.innerHeight*10/10 + "px";
    cuboidButton2.style.width = 7 + "%";
    cuboidButton2.style.height = 5 + "%";
    cuboidButton2.style.value = "abc";
    cuboidButton2.style.background = '#d3d3d3';
    cuboidButton2.style.color = '#000';
    cuboidButton2.innerHTML = "Edges";
    cuboidButton2.addEventListener("click", addEdgesCuboid);
    document.body.appendChild( cuboidButton2 );

    cuboidButton3 = document.createElement( 'button' );
    cuboidButton3.style.position = 'absolute';
    cuboidButton3.style.top = window.innerWidth*1/20 + "px";
    cuboidButton3.style.right = window.innerHeight*8/10 + "px";
    cuboidButton3.style.width = 7 + "%";
    cuboidButton3.style.height = 5 + "%";
    cuboidButton3.style.value = "abc";
    cuboidButton3.style.background = '#d3d3d3';
    cuboidButton3.style.color = '#000';
    cuboidButton3.innerHTML = "Vertices";
    cuboidButton3.addEventListener("click", addVerticesCuboid);
    document.body.appendChild( cuboidButton3 );

    cuboidButton4 = document.createElement( 'button' );
    cuboidButton4.style.position = 'absolute';
    cuboidButton4.style.top = window.innerWidth*1/20 + "px";
    cuboidButton4.style.right = window.innerHeight*6/10 + "px";
    cuboidButton4.style.width = 7 + "%";
    cuboidButton4.style.height = 5 + "%";
    cuboidButton4.style.value = "abc";
    cuboidButton4.style.background = '#d3d3d3';
    cuboidButton4.style.color = '#000';
    cuboidButton4.innerHTML = "Faces";
    cuboidButton4.addEventListener("click",addFacesCuboid);
    document.body.appendChild( cuboidButton4 );*/

    if(current == 5){
        PIEchangeInputCommand("360 view","360 view", rotateCuboid);
        PIEchangeDisplayCommand("360 view","360 view", rotateCuboid);
        PIEchangeInputCommand("No Vertices","Vertices", addVerticesCuboid);
        PIEchangeDisplayCommand("No Vertices","Vertices", addVerticesCuboid);
        PIEchangeInputCommand("No Edges","Edges", addEdgesCuboid);
        PIEchangeDisplayCommand("No Edges","Edges", addEdgesCuboid);
        PIEchangeInputCommand("No Faces","Faces", addFacesCuboid);
        PIEchangeDisplayCommand("No Faces","Faces", addFacesCuboid);
    } else if(current == 6){
        PIEchangeInputCommand("-","360 view", rotateCuboid);
        PIEchangeDisplayCommand("-","360 view", rotateCuboid);
        PIEchangeInputCommand("-","Edges", addEdgesCuboid);
        PIEchangeDisplayCommand("-","Edges", addEdgesCuboid);
        PIEchangeInputCommand("-","Vertices", addVerticesCuboid);
        PIEchangeDisplayCommand("-","Vertices", addVerticesCuboid);
        PIEchangeInputCommand("-","Faces", addFacesCuboid);
        PIEchangeDisplayCommand("-","Faces", addFacesCuboid);
    } else { 
        if(current == 3){
            PIEchangeInputCommand("No Vertices","Vertices", addVerticesCuboid);
            PIEchangeDisplayCommand("No Vertices","Vertices", addVerticesCuboid);
        } else {
            PIEchangeInputCommand("Vertices","Vertices", addVerticesCuboid);
            PIEchangeDisplayCommand("Vertices","Vertices", addVerticesCuboid);
        }
        PIEchangeInputCommand("360 view","360 view", rotateCuboid);
        PIEchangeDisplayCommand("360 view","360 view", rotateCuboid);
        PIEchangeInputCommand("Edges","Edges", addEdgesCuboid);
        PIEchangeDisplayCommand("Edges","Edges", addEdgesCuboid);
        PIEchangeInputCommand("Faces","Faces", addFacesCuboid);
        PIEchangeDisplayCommand("Faces","Faces", addFacesCuboid);
    }
    current = 2;
}

function removeButtonCuboid(){
   /* cuboidButton.style.display = "none";
    cuboidButton2.style.display = "none";
    cuboidButton3.style.display = "none";
    cuboidButton4.style.display = "none";*/
}

function addCuboidByrectangle(){
    var rectangleMaterial = new THREE.MeshBasicMaterial({ 
            color:0x156289, 
            side:THREE.DoubleSide 
        }); 

    for(var i=0; i<6; i++){
        rectangleGeometry[i] = THREE.SceneUtils.createMultiMaterialObject( new THREE.PlaneGeometry( 8, 5, 4, 4 ), [rectangleMaterial] );
    }

    parent2[0] = new THREE.Object3D();
    rectangleGeometry[0].applyMatrix( new THREE.Matrix4().makeTranslation( -4, 0, 0 ) );
    parent2[0].add(rectangleGeometry[0]);
    parent2[0].rotation.y = Math.PI / 2;
    parent2[0].position.x = 4.1;
    PIEaddElement(parent2[0]);

    parent2[1] = new THREE.Object3D();
    rectangleGeometry[1].applyMatrix( new THREE.Matrix4().makeTranslation( -4, 0, 0 ) );
    parent2[1].add(rectangleGeometry[1]);
    parent2[1].rotation.y = Math.PI / 2;
    parent2[1].position.x = -4.1;
    PIEaddElement(parent2[1]);

    parent2[3] = new THREE.Object3D();
    rectangleGeometry[3].applyMatrix( new THREE.Matrix4().makeTranslation( 0, 2.5, 0 ) );
    parent2[3].add(rectangleGeometry[3]);
    parent2[3].rotation.x = Math.PI / 2;
    parent2[3].position.y = 2.6;
    PIEaddElement(parent2[3]);

    parent2[2] = new THREE.Object3D();
    rectangleGeometry[2].applyMatrix( new THREE.Matrix4().makeTranslation( 0, 2.5, 0 ) );
    parent2[2].add(rectangleGeometry[2]);
    parent2[2].rotation.x = Math.PI / 2;
    parent2[2].position.y = -2.6;
    PIEaddElement(parent2[2]);

    parent2[4] = new THREE.Object3D();
    rectangleGeometry[4].applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, 0 ) );
    parent2[4].add(rectangleGeometry[4]);
    PIEaddElement(parent2[4]);

    parent2[5] = new THREE.Object3D();
    rectangleGeometry[5].applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, 0 ) );
    parent2[5].add(rectangleGeometry[5]);
    parent2[5].position.z = 2.5;
    PIEaddElement(parent2[5]);

    unboxrectangle = 1; 
    count3 = 0;
    count4 = 0;
}

function removeCuboidByrectangle(){
    for( var i =0 ;i< 6;i++){
        PIEscene.remove(parent2[i]);
    } 
    unboxrectangle = 0;
    count3 =0;
    count4=0; 
}

function addCuboidShape(){
    removeCuboidShape();
    cuboidMaterial = new THREE.MeshBasicMaterial({color: 0x156289, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cuboid = new THREE.Mesh( new THREE.CubeGeometry( 10, 6, 6 ),  cuboidMaterial);
    cuboid.rotation.y += Math.PI / 4;
    cuboid.rotation.x += Math.PI / 6; 
    PIEaddElement( cuboid );
    
    edges = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry( 10, 6, 6 ) );
    line2 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    line2.rotation.y += Math.PI / 4;
    line2.rotation.x += Math.PI / 6;
    PIEaddElement( line2 );
}

function removeCuboidShape(){
    PIEscene.remove(line2);
    PIEscene.remove(cuboid);
    angCuboid = 0;
}

function addEdgesCuboid(){stopset = 0;
    removeVerticesCuboid();
    removeCuboidByrectangle();
    removeCuboidShape();
    PIEaddElement(line2);
    angCuboid = 0.005;
    line2.material.opacity = 1;
    line2.material.color = new THREE.Color(0x156289);
    PIEstartAnimation();
}

function addFacesCuboid(){stopset = 0;
    removeCuboidShape();
    removeCuboidByrectangle();
    removeVerticesCuboid();
    addCuboidByrectangle();
    PIEstartAnimation();
}

var verticeoffsetcuboid = 0;
function addVerticesCuboid(){stopset = 0;
    var coords = [5,3,3 , 5,3,-3 , 5,-3,3 , 5,-3,-3 , -5,3,3 , -5,3,-3 , -5,-3,3 , -5,-3,-3];
    
    removeVerticesCuboid();
    removeCuboidShape();
    removeCuboidByrectangle();
    addCuboidShape();

    cuboid.updateMatrixWorld();

    for(var i=0; i<24;i+=3){
        var vector = cuboid.geometry.vertices[i/3].clone();
        vector.applyMatrix4( cuboid.matrixWorld );
        var geometry = new THREE.SphereGeometry( 0.2, 32, 32 );
        var material = new THREE.MeshBasicMaterial( {color: 0x156289, transparent: true, opacity: 0} );
        circleVertex2[i/3] = new THREE.Mesh( geometry, material );
        circleVertex2[i/3].position.x = vector.x;
        circleVertex2[i/3].position.y = vector.y;
        circleVertex2[i/3].position.z = vector.z;
        PIEaddElement( circleVertex2[i/3] );
    }
    cuboidMaterial.transparent = true;
    cuboidMaterial.opacity = 0.2;
    line2.material.transparent = true;
    line2.material.opacity = 0.2;
    verticeoffsetcuboid = 1;
    l = 0;
    PIEstartAnimation();
    //PIEstopAnimation();
}

function removeVerticesCuboid(){
    for(var i=0; i<8;i++){
        PIEscene.remove(circleVertex2[i]);
    }
    verticeoffsetcuboid = 0;
    l =0;
}

function rotateCuboid(){stopset = 1;
    PIErender();
    removeCuboidShape();
    addCuboidShape();
    removeCuboidByrectangle();
    removeVerticesCuboid();
    angCuboid = 0.005;
    PIEstartAnimation();
}

/* -------------------------------  Cuboid Ends ----------------------*/


/* ------------------------------- Cylinder Starts ----------------------*/

var cylinderButton, cylinderButton2, cylinderButton3, cylinderButton4;
var angCylinder = 0;
var cylinder;
var cirlce;
var circle2;

function addCylinder(){
    addButtonCylinder();
    addCylinderShape();
}

function removeCylinder(){
    removeCylinderShape();
    //removeButtonCylinder();
    removeCylinderByrectangle();
    angCylinder = 0;
}

function addButtonCylinder(){
    /*cylinderButton = document.createElement( 'button' );
    cylinderButton.style.position = 'absolute';
    cylinderButton.style.top = window.innerWidth*1/20 + "px";
    cylinderButton.style.right = window.innerHeight*12/10 + "px";
    cylinderButton.style.width = 7 + "%";
    cylinderButton.style.height = 5 + "%";
    cylinderButton.style.value = "abc";
    cylinderButton.style.background = '#d3d3d3';
    cylinderButton.style.color = '#000';
    cylinderButton.innerHTML = "360 view";
    cylinderButton.addEventListener("click",rotateCylinder);
    document.body.appendChild( cylinderButton );

    cylinderButton2 = document.createElement( 'button' );
    cylinderButton2.style.position = 'absolute';
    cylinderButton2.style.top = window.innerWidth*1/20 + "px";
    cylinderButton2.style.right = window.innerHeight*10/10 + "px";
    cylinderButton2.style.width = 7 + "%";
    cylinderButton2.style.height = 5 + "%";
    cylinderButton2.style.value = "abc";
    cylinderButton2.style.background = '#d3d3d3';
    cylinderButton2.style.color = '#000';
    cylinderButton2.innerHTML = "Edges";
    cylinderButton2.addEventListener("click", addEdgesCylinder);
    document.body.appendChild( cylinderButton2 );

    cylinderButton3 = document.createElement( 'button' );
    cylinderButton3.style.position = 'absolute';
    cylinderButton3.style.top = window.innerWidth*1/20 + "px";
    cylinderButton3.style.right = window.innerHeight*8/10 + "px";
    cylinderButton3.style.width = 8 + "%";
    cylinderButton3.style.height = 5 + "%";
    cylinderButton3.style.value = "abc";
    cylinderButton3.style.background = '#d3d3d3';
    cylinderButton3.style.color = '#000';
    cylinderButton3.innerHTML = "No Vertices";
    cylinderButton3.style.opacity = "0.6";
    cylinderButton3.style.cursor = "not-allowed";
    document.body.appendChild( cylinderButton3 );

    cylinderButton4 = document.createElement( 'button' );
    cylinderButton4.style.position = 'absolute';
    cylinderButton4.style.top = window.innerWidth*1/20 + "px";
    cylinderButton4.style.right = window.innerHeight*6/10 + "px";
    cylinderButton4.style.width = 7 + "%";
    cylinderButton4.style.height = 5 + "%";
    cylinderButton4.style.value = "abc";
    cylinderButton4.style.background = '#d3d3d3';
    cylinderButton4.style.color = '#000';
    cylinderButton4.innerHTML = "Faces";
    cylinderButton4.addEventListener("click",addFacesCylinder);
    document.body.appendChild( cylinderButton4 );
*/
    if(current == 5){
        PIEchangeInputCommand("360 view","360 view", rotateCylinder);
        PIEchangeDisplayCommand("360 view","360 view", rotateCylinder);
        PIEchangeInputCommand("No Vertices","No Vertices", test);
        PIEchangeDisplayCommand("No Vertices","No Vertices", test);
        PIEchangeInputCommand("No Edges","Edges", addEdgesCylinder);
        PIEchangeDisplayCommand("No Edges","Edges", addEdgesCylinder);
        PIEchangeInputCommand("No Faces","Faces", addFacesCylinder);
        PIEchangeDisplayCommand("No Faces","Faces", addFacesCylinder);
    } else if(current == 6){
        PIEchangeInputCommand("-","360 view", rotateCylinder);
        PIEchangeDisplayCommand("-","360 view", rotateCylinder);
        PIEchangeInputCommand("-","Edges", addEdgesCylinder);
        PIEchangeDisplayCommand("-","Edges", addEdgesCylinder);
        PIEchangeInputCommand("-","No Vertices", test);
        PIEchangeDisplayCommand("-","No Vertices", test);
        PIEchangeInputCommand("-","Faces", addFacesCylinder);
        PIEchangeDisplayCommand("-","Faces", addFacesCylinder);
    } else { 
        if(current == 3){
            PIEchangeInputCommand("No Vertices","No Vertices", test);
            PIEchangeDisplayCommand("No Vertices","No Vertices", test);
        } else {
            PIEchangeInputCommand("Vertices","No Vertices", test);
            PIEchangeDisplayCommand("Vertices","No Vertices", test);
        }
        PIEchangeInputCommand("360 view","360 view", rotateCylinder);
        PIEchangeDisplayCommand("360 view","360 view", rotateCylinder);
        PIEchangeInputCommand("Edges","Edges", addEdgesCylinder);
        PIEchangeDisplayCommand("Edges","Edges", addEdgesCylinder);
        PIEchangeInputCommand("Faces","Faces", addFacesCylinder);
        PIEchangeDisplayCommand("Faces","Faces", addFacesCylinder);
    }
    current = 3;
}

function test(){

}
function removeButtonCylinder(){
        /*cylinderButton.style.display = "none";
        cylinderButton2.style.display = "none";
        cylinderButton3.style.display = "none";
        cylinderButton4.style.display = "none";*/ 
}

var cylinit = 0;
function addCylinderShape(){
    removeCylinderShape();
    removeCylinderByrectangle();
    var geometry = new THREE.CylinderGeometry( 3, 3, 8, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0x156289} );
    cylinder = new THREE.Mesh( geometry, material );
    PIEaddElement(cylinder); 

    var geometry4 = new THREE.RingGeometry(3, 3, 32);
    var material4 = new THREE.MeshBasicMaterial({color:0x000000});
    material4.wireframe = true; 
    circle = new THREE.Mesh( geometry4, material4 );
    circle.position.set(0, -4, 0); 
    circle.rotation.x += -Math.PI/2; 
    cylinder.add(circle); 

    var geometry5 = new THREE.RingGeometry(3, 3, 33);
    var material5 = new THREE.MeshBasicMaterial({color:0x000000, linewidth: 5});
    material5.wireframe = true; 
    circle2 = new THREE.Mesh( geometry5, material5 );
    circle2.position.set(0, 4, 0); 
    circle2.rotation.x += -Math.PI/2; 
    cylinder.add(circle2);

    cylinder.rotation.x = Math.PI / 6;  

    cylinit = 1;
}

function removeCylinderShape(){
    if(cylinit == 1){
        PIEscene.remove(cylinder);
        PIEscene.remove(circle);
        PIEscene.remove(circle2);
    }
}

function addEdgesCylinder(){stopset = 0;
    removeCylinderByrectangle();
    removeCylinderShape();
    addCylinderShape();
    cylinder.material.transparent = true;
    cylinder.material.opacity = 0.1;
    circle.material.color = new THREE.Color(0x156289);
    circle2.material.color = new THREE.Color(0x156289);
    angCylinder = 0.005;
    PIEstartAnimation();
}

var cylinder3, cylinder2, cylinder4, cylrec, cylrectangleMaterial, unboxcyl = 0;
var parent3 = new Array(2);
function addCylinderByrectangle() {

    cylrectangleMaterial = new THREE.MeshBasicMaterial({ 
            color:0x156289, 
            side:THREE.DoubleSide,
            transparent: true, 
            opacity: 0
    }); 
    cylrec = THREE.SceneUtils.createMultiMaterialObject( new THREE.PlaneGeometry( 16, 8, 4, 4 ), [cylrectangleMaterial] );
    PIEaddElement(cylrec);

    var geometry = new THREE.CylinderGeometry( 3, 3, 8, 32 );
    var cylmaterial = new THREE.MeshBasicMaterial( {color: 0x156289, opacity: 1} );
    cylinder4 = new THREE.Mesh( geometry, cylmaterial );
    PIEaddElement(cylinder4);

    var geometry = new THREE.CylinderGeometry( 3, 3, 0.1, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0x156289} );
    cylinder2 = new THREE.Mesh( geometry, material );
    parent3[0] = new THREE.Object3D();
    cylinder2.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, -3 ) );
    parent3[0].add(cylinder2);
    parent3[0].position.y = 4.1;
    PIEaddElement(parent3[0]);

    var geometry = new THREE.CylinderGeometry( 3, 3, 0.1, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0x156289} );
    cylinder3 = new THREE.Mesh( geometry, material );
    parent3[1] = new THREE.Object3D();
    cylinder3.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, 3 ) );
    parent3[1].add(cylinder3);
    parent3[1].position.y = -4.1;
    PIEaddElement(parent3[1]);
   
    unboxcyl = 1;
    count5= 0;
}

function removeCylinderByrectangle() {
    PIEscene.remove(parent3[1]);
    PIEscene.remove(parent3[0]);
    PIEscene.remove(cylinder4);
    PIEscene.remove(cylrec);
    unboxcyl = 0;
    count5 = 0;
}

function addFacesCylinder(){stopset = 0;
    PIErender();
    removeCylinderShape();
    removeCylinderByrectangle();
    addCylinderByrectangle();
    PIEstartAnimation();
}

function rotateCylinder(){stopset = 1;
    PIErender();
    addCylinderShape();
    angCylinder = 0.005;
    PIEstartAnimation();
}

/* ------------------------------- Cylinder Ends ----------------------*/


/* ------------------------------- Cone Starts ----------------------*/


var coneButton, coneButton2, coneButton3, coneButton4;
var cone; 
var circle9;
var coneSphere;
var angCone = 0;
function addCone(){
    addButtonCone();
    addConeShape();
}

function removeCone(){
    removeConeShape();
    //removeButtonCone();
    removeVerticesCone();
    removeConeByrectangle();
    angCone = 0;
}

function addButtonCone(){
   /* coneButton = document.createElement( 'button' );
    coneButton.style.position = 'absolute';
    coneButton.style.top = window.innerWidth*1/20 + "px";
    coneButton.style.right = window.innerHeight*12/10 + "px";
    coneButton.style.width = 7 + "%";
    coneButton.style.height = 5 + "%";
    coneButton.style.value = "abc";
    coneButton.style.background = '#d3d3d3';
    coneButton.style.color = '#000';
    coneButton.innerHTML = "360 view";
    coneButton.addEventListener("click",rotateCone);
    document.body.appendChild( coneButton );

    coneButton2 = document.createElement( 'button' );
    coneButton2.style.position = 'absolute';
    coneButton2.style.top = window.innerWidth*1/20 + "px";
    coneButton2.style.right = window.innerHeight*10/10 + "px";
    coneButton2.style.width = 7 + "%";
    coneButton2.style.height = 5 + "%";
    coneButton2.style.value = "abc";
    coneButton2.style.background = '#d3d3d3';
    coneButton2.style.color = '#000';
    coneButton2.innerHTML = "Edges";
    coneButton2.addEventListener("click", addEdgesCone);
    document.body.appendChild( coneButton2 );

    coneButton3 = document.createElement( 'button' );
    coneButton3.style.position = 'absolute';
    coneButton3.style.top = window.innerWidth*1/20 + "px";
    coneButton3.style.right = window.innerHeight*8/10 + "px";
    coneButton3.style.width = 7 + "%";
    coneButton3.style.height = 5 + "%";
    coneButton3.style.value = "abc";
    coneButton3.style.background = '#d3d3d3';
    coneButton3.style.color = '#000';
    coneButton3.innerHTML = "Vertices";
    coneButton3.addEventListener("click", addVerticesCone);
    document.body.appendChild( coneButton3 );

    coneButton4 = document.createElement( 'button' );
    coneButton4.style.position = 'absolute';
    coneButton4.style.top = window.innerWidth*1/20 + "px";
    coneButton4.style.right = window.innerHeight*6/10 + "px";
    coneButton4.style.width = 7 + "%";
    coneButton4.style.height = 5 + "%";
    coneButton4.style.value = "abc";
    coneButton4.style.background = '#d3d3d3';
    coneButton4.style.color = '#000';
    coneButton4.innerHTML = "Faces";
    coneButton4.addEventListener("click",addFacesCone);
    document.body.appendChild( coneButton4 );*/

    if(current == 5){
        PIEchangeInputCommand("360 view","360 view", rotateCone);
        PIEchangeDisplayCommand("360 view","360 view", rotateCone);
        PIEchangeInputCommand("No Vertices","Vertices", addVerticesCone);
        PIEchangeDisplayCommand("No Vertices","Vertices", addVerticesCone);
        PIEchangeInputCommand("No Edges","Edges", addEdgesCone);
        PIEchangeDisplayCommand("No Edges","Edges", addEdgesCone);
        PIEchangeInputCommand("No Faces","Faces", addFacesCone);
        PIEchangeDisplayCommand("No Faces","Faces", addFacesCone);
    } else if(current == 6){
        PIEchangeInputCommand("-","360 view", rotateCone);
        PIEchangeDisplayCommand("-","360 view", rotateCone);
        PIEchangeInputCommand("-","Edges", addEdgesCone);
        PIEchangeDisplayCommand("-","Edges", addEdgesCone);
        PIEchangeInputCommand("-","Vertices", addVerticesCone);
        PIEchangeDisplayCommand("-","Vertices", addVerticesCone);
        PIEchangeInputCommand("-","Faces", addFacesCone);
        PIEchangeDisplayCommand("-","Faces", addFacesCone);
    } else { 
        if(current == 3){
            PIEchangeInputCommand("No Vertices","Vertices", addVerticesCone);
            PIEchangeDisplayCommand("No Vertices","Vertices", addVerticesCone);
        } else {
            PIEchangeInputCommand("Vertices","Vertices", addVerticesCone);
            PIEchangeDisplayCommand("Vertices","Vertices", addVerticesCone);
        }
        PIEchangeInputCommand("360 view","360 view", rotateCone);
        PIEchangeDisplayCommand("360 view","360 view", rotateCone);
        PIEchangeInputCommand("Edges","Edges", addEdgesCone);
        PIEchangeDisplayCommand("Edges","Edges", addEdgesCone);
        PIEchangeInputCommand("Faces","Faces", addFacesCone);
        PIEchangeDisplayCommand("Faces","Faces", addFacesCone);
    }
    current = 4;

}

function removeButtonCone(){
    /*coneButton.style.display = "none";
    coneButton2.style.display = "none";
    coneButton3.style.display = "none";
    coneButton4.style.display = "none";*/
}

var coneinit =0;
function addConeShape(){
    removeConeShape();
    removeConeByrectangle();
    
    var geometry = new THREE.ConeGeometry( 4, 8, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0x156289});
    cone = new THREE.Mesh( geometry, material );
    PIEaddElement(cone);

    var geometry2 = new THREE.RingGeometry(4, 4, 32);
    var material2 = new THREE.MeshBasicMaterial({color:0x000000});
    material2.wireframe = true; 
    circle9 = new THREE.Mesh( geometry2, material2 );
    circle9.position.set(0, -4, 0); 
    circle9.rotation.x += -Math.PI/2; 
    PIEaddElement(circle9);  
 
    cone.rotation.x = -Math.PI /12;
    cone.add( circle9 ); 
    coneinit = 1;
}

function removeConeShape(){
    if(coneinit == 1){
        PIEscene.remove(cone);
    }
}

function addEdgesCone(){stopset = 0;
    removeVerticesCone();
    removeConeByrectangle();
    addConeShape();
    cone.material.transparent = true;
    cone.material.opacity = 0.1;
    circle9.material.color = new THREE.Color(0x156289);
    angCone = 0.005;
    PIEstartAnimation();
}

var parent4, cylinder6, fullcone2, circle5 , unboxcone = 0, circle5mat;

function addConeByrectangle(){
    var L = Math.sqrt(4*4 + 8 * 8); 
    var x = 2*Math.PI * 3 / L;

    var geometry = new THREE.CylinderGeometry( 4, 4, 0.1, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0x156289} );
    cylinder6 = new THREE.Mesh( geometry, material );
    parent4 = new THREE.Object3D();
    cylinder6.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, 4 ) );
    parent4.add(cylinder6);
    parent4.position.y = -2.1;
    PIEaddElement(parent4);

    var geometry = new THREE.CircleGeometry(L/1.2, 32, 1.19*Math.PI, (8*Math.PI)/13);
    circle5mat = new THREE.MeshBasicMaterial({color:0x156289, side:THREE.DoubleSide, transparent: true, opacity: 0});
    circle5 = new THREE.Mesh( geometry, circle5mat );
    circle5.position.y = 5.4;
    PIEaddElement(circle5);

    var geometry = new THREE.ConeGeometry( 4, 8, 32 );
    var materialcone = new THREE.MeshBasicMaterial( {color: 0x156289, opacity: 1});
    fullcone2 = new THREE.Mesh( geometry, materialcone );
    fullcone2.position.y = 2; 
    PIEaddElement(fullcone2);

    unboxcone = 1;
    count6=0;
}

function removeConeByrectangle(){
    PIEscene.remove(parent4);
    PIEscene.remove(circle5);
    PIEscene.remove(fullcone2);
    unboxcone = 0;
    count6=0;
}

function addFacesCone(){stopset = 0;
    PIErender();
    removeConeShape();
    removeVerticesCone();
    removeConeByrectangle();
    addConeByrectangle();
    PIEstartAnimation();
}

function addVerticesCone(){stopset = 0;
    removeVerticesCone();
    removeConeShape();
    removeConeByrectangle();
    addConeShape();
    angCone = 0;
    var geometry5 = new THREE.SphereGeometry(0.2,32,32);
    var material5 = new THREE.MeshBasicMaterial( {color: 0x156289} );
    coneSphere = new THREE.Mesh( geometry5, material5 );
    coneSphere.position.set(0, 4, -1); 
    PIEaddElement(coneSphere);
    cone.material.transparent = true;
    cone.material.opacity = 0.1;
    circle9.material.transparent = true;
    circle9.material.opacity = 0.2;
    PIEstartAnimation();
}

function removeVerticesCone(){
    PIEscene.remove(coneSphere);
}

function rotateCone(){stopset = 1;
    PIErender();
    addConeShape();
    removeConeByrectangle();
    removeVerticesCone();
    angCone = 0.005;
    PIEstartAnimation();
}

/* ------------------------------- Cone Ends ----------------------*/


/* ------------------------------- Sphere Starts ----------------------*/

var sphereButton, sphereButton2, sphereButton3, sphereButton4;
var sphere;
var angSphere = 0;
var sphereline;

function addSphere(){
    addButtonSphere();
    addSphereShape();
}

function removeSphere(){
    removeSphereShape();
    //removeButtonSphere();
    angSphere = 0;
}

function addButtonSphere(){
    /*sphereButton = document.createElement( 'button' );
    sphereButton.style.position = 'absolute';
    sphereButton.style.top = window.innerWidth*1/20 + "px";
    sphereButton.style.right = window.innerHeight*12/10 + "px";
    sphereButton.style.width = 8 + "%";
    sphereButton.style.height = 5 + "%";
    sphereButton.style.value = "abc";
    sphereButton.style.background = '#d3d3d3';
    sphereButton.style.color = '#000';
    sphereButton.innerHTML = "360 view";
    sphereButton.addEventListener("click",rotateSphere);
    document.body.appendChild( sphereButton );

    sphereButton2 = document.createElement( 'button' );
    sphereButton2.style.position = 'absolute';
    sphereButton2.style.top = window.innerWidth*1/20 + "px";
    sphereButton2.style.right = window.innerHeight*10/10 + "px";
    sphereButton2.style.width = 8 + "%";
    sphereButton2.style.height = 5 + "%";
    sphereButton2.style.value = "abc";
    sphereButton2.style.background = '#d3d3d3';
    sphereButton2.style.color = '#000';
    sphereButton2.innerHTML = "No Edges";
    sphereButton2.style.opacity = "0.6";
    sphereButton2.style.cursor = "not-allowed";
    document.body.appendChild( sphereButton2 );

    sphereButton3 = document.createElement( 'button' );
    sphereButton3.style.position = 'absolute';
    sphereButton3.style.top = window.innerWidth*1/20 + "px";
    sphereButton3.style.right = window.innerHeight*8/10 + "px";
    sphereButton3.style.width = 8 + "%";
    sphereButton3.style.height = 5 + "%";
    sphereButton3.style.value = "abc";
    sphereButton3.style.background = '#d3d3d3';
    sphereButton3.style.color = '#000';
    sphereButton3.innerHTML = "No Vertices";
    sphereButton3.style.opacity = "0.6";
    sphereButton3.style.cursor = "not-allowed";
    document.body.appendChild( sphereButton3 );

    sphereButton4 = document.createElement( 'button' );
    sphereButton4.style.position = 'absolute';
    sphereButton4.style.top = window.innerWidth*1/20 + "px";
    sphereButton4.style.right = window.innerHeight*6/10 + "px";
    sphereButton4.style.width = 8 + "%";
    sphereButton4.style.height = 5 + "%";
    sphereButton4.style.value = "abc";
    sphereButton4.style.background = '#d3d3d3';
    sphereButton4.style.color = '#000';
    sphereButton4.innerHTML = "No Faces";
    sphereButton4.style.opacity = "0.6";
    sphereButton4.style.cursor = "not-allowed";
    document.body.appendChild( sphereButton4 );*/

        if(current == 5){
        PIEchangeInputCommand("360 view","360 view", rotateSphere);
        PIEchangeDisplayCommand("360 view","360 view", rotateSphere);
        PIEchangeInputCommand("No Vertices","No Vertices", test);
        PIEchangeDisplayCommand("No Vertices","No Vertices", test);
        PIEchangeInputCommand("No Edges","No Edges", test);
        PIEchangeDisplayCommand("No Edges","No Edges", test);
        PIEchangeInputCommand("No Faces","No Faces", test);
        PIEchangeDisplayCommand("No Faces","No Faces", test);
    } else if(current == 6){
        PIEchangeInputCommand("-","360 view", rotateSphere);
        PIEchangeDisplayCommand("-","360 view", rotateSphere);
        PIEchangeInputCommand("-","No Edges", test);
        PIEchangeDisplayCommand("-","No Edges", test);
        PIEchangeInputCommand("-","No Vertices", test);
        PIEchangeDisplayCommand("-","No Vertices", test);
        PIEchangeInputCommand("-","No Faces", test);
        PIEchangeDisplayCommand("-","No Faces", test);
    } else { 
        if(current == 3){
            PIEchangeInputCommand("No Vertices","No Vertices", test);
            PIEchangeDisplayCommand("No Vertices","No Vertices", test);
        } else {
            PIEchangeInputCommand("Vertices","No Vertices", test);
            PIEchangeDisplayCommand("Vertices","No Vertices", test);
        }
        PIEchangeInputCommand("360 view","360 view", rotateSphere);
        PIEchangeDisplayCommand("360 view","360 view", rotateSphere);
        PIEchangeInputCommand("Edges","No Edges", test);
        PIEchangeDisplayCommand("Edges","No Edges", test);
        PIEchangeInputCommand("Faces","No Faces", test);
        PIEchangeDisplayCommand("Faces","No Faces", test);
    }
    current = 5;
}

function removeButtonSphere(){
    sphereButton.style.display = "none";
    sphereButton2.style.display = "none";
    sphereButton3.style.display = "none";
    sphereButton4.style.display = "none";
}

var sphereinit =0;
function addSphereShape(){
    removeSphereShape();
    
    var geometry = new THREE.SphereGeometry( 4, 32, 32);
    var material = new THREE.MeshBasicMaterial( {color: 0x156289, transparent : true, opacity : 0.5} );
    sphere = new THREE.Mesh( geometry, material );

    var edges = new THREE.EdgesGeometry( geometry );
    sphereline = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    PIEaddElement(sphereline);  
 
    PIEaddElement( sphere );

    sphereinit = 1;
}

function removeSphereShape(){
    if(sphereinit == 1){
        PIEscene.remove(sphere);
        PIEscene.remove(sphereline);
    }
}

function rotateSphere(){stopset = 1;
    PIErender();
    //removeSphereShape();
    //addSphereShape();
    angSphere = 0.005;
    PIEstartAnimation();
}

/* ------------------------------- Sphere Ends ----------------------*/


/* ------------------------------- Bonus Starts ----------------------*/

var pyramid;
var pyline;
var knot = new Array(5);
var bonusLine = new Array(5);
var bonusInfo = new Array(6);

function addPrism(){
    var ang = 2*Math.PI/3; 
    var ang2 = 0.3; 

    var pyramidGeometry = new THREE.CylinderGeometry(3, 3, 5, 3, 3); 
    var material = new THREE.MeshBasicMaterial({color : 0x156289, transparent : true, opacity : 0.6}); 
    pyramid = new THREE.Mesh(pyramidGeometry, material); 
    pyramid.rotation.y += ang; 
    pyramid.rotation.x += ang2; 

    var edges = new THREE.EdgesGeometry( pyramidGeometry );
    pyline = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    pyline.rotation.y += ang; 
    pyline.rotation.x += ang2; 

    pyramid.position.x = -15;
    pyramid.position.y = 5;

    pyline.position.x = -15;
    pyline.position.y = 5;

    PIEaddElement(pyline);  
    PIEaddElement( pyramid );
}

function addTorus(){
    var ang = Math.PI/2 + 0.3; 
    var geometry = new THREE.TorusGeometry(3,1, 16, 100);
    var material = new THREE.MeshBasicMaterial({color : 0x156289, transparent : true, opacity : 0.6}); 
    knot[0] = new THREE.Mesh(geometry, material);
    knot[0].rotation.x += ang; 
    
    var edges = new THREE.EdgesGeometry( geometry );
    bonusLine[0] = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );    
    bonusLine[0].rotation.x += ang; 

    knot[0].position.x = -2.5;
    knot[0].position.y = 5;

    bonusLine[0].position.x = -2.5;
    bonusLine[0].position.y = 5;

    PIEaddElement(knot[0]); PIEaddElement(bonusLine[0]); 
}

function addIcosahedron(){
    var ang = Math.PI/2 + 0.8; 
    var geometry = new THREE.IcosahedronGeometry(3,0);
    var material = new THREE.MeshBasicMaterial({color : 0x156289, transparent : true, opacity : 0.6}); 
    knot[1] = new THREE.Mesh(geometry, material);
    knot[1].rotation.x += ang; 
    
    var edges = new THREE.EdgesGeometry( geometry );
    bonusLine[1] = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );    
    bonusLine[1].rotation.x += ang; 


    knot[1].position.x = 10;
    knot[1].position.y = 5;

    bonusLine[1].position.x = 10;
    bonusLine[1].position.y = 5;

    PIEaddElement(knot[1]); PIEaddElement(bonusLine[1]); 
} 

function addTetrahedron(){
    var ang = 0; 
    var geometry = new THREE.TetrahedronGeometry(3,0);
    var material = new THREE.MeshBasicMaterial({color : 0x156289, transparent : true, opacity : 0.6}); 
    knot[2] = new THREE.Mesh(geometry, material);
    knot[2].rotation.x += ang; 
    knot[2].rotation.y += ang; 
    
    var edges = new THREE.EdgesGeometry( geometry );
    bonusLine[2] = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );    
    bonusLine[2].rotation.x += ang; 


    knot[2].position.x = -15;
    knot[2].position.y = -4;

    bonusLine[2].position.x = -15;
    bonusLine[2].position.y = -4;

    PIEaddElement(knot[2]); PIEaddElement(bonusLine[2]); 
} 

function addOctahedron(){
    var ang = 0; 
    var geometry = new THREE.OctahedronGeometry(3,0);
    var material = new THREE.MeshBasicMaterial({color : 0x156289, transparent : true, opacity : 0.6}); 
    knot[3] = new THREE.Mesh(geometry, material);
    knot[3].rotation.x += ang; 
    
    var edges = new THREE.EdgesGeometry( geometry );
    bonusLine[3] = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );    
    bonusLine[3].rotation.x += ang; 


    knot[3].position.x = -2.5;
    knot[3].position.y = -4;

    bonusLine[3].position.x = -2.5;
    bonusLine[3].position.y = -4;

    PIEaddElement(knot[3]); PIEaddElement(bonusLine[3]); 
}

function addDodecahedron(){
    var ang = 0; 
    var geometry = new THREE.DodecahedronGeometry(3,0);
    var material = new THREE.MeshBasicMaterial({color : 0x156289, transparent : true, opacity : 0.6}); 
    knot[4] = new THREE.Mesh(geometry, material);
    knot[4].rotation.x += ang; 
    
    var edges = new THREE.EdgesGeometry( geometry );
    bonusLine[4] = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );    
    bonusLine[4].rotation.x += ang; 


    knot[4].position.x = 10;
    knot[4].position.y = -4;

    bonusLine[4].position.x = 10;
    bonusLine[4].position.y = -4;

    PIEaddElement(knot[4]); PIEaddElement(bonusLine[4]); 
}

/*function onDocumentTouchStart( event ) {
    PIErender();
        event.clientX = event.touches[0].clientX;
        event.clientY = event.touches[0].clientY;
        onDocumentMouseDown(event);
}
*/
var bonusoffset = [0,0,0,0,0];
var bonusoffsetpyr = 0;
var flag;
var raycaster= new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onDocumentMouseMove( event ) {
    PIErender();
    //event.preventDefault();
    mouse.x = ( event.clientX / PIErenderer.domElement.clientWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / PIErenderer.domElement.clientHeight ) * 2 + 1;
    raycaster.setFromCamera( mouse, PIEcamera );
    
    for(var i=0;i<5;i++){
        var objects = [knot[i]];
        var intersects = raycaster.intersectObjects( objects ); 
        if ( intersects.length > 0 ) {
            bonusoffset[i] = 1;
                //controls.dispose(); 
        } else {
            bonusoffset[i] = 0;
        }
    }
    var objects = [pyramid];
    var intersects = raycaster.intersectObjects( objects ); 
        if ( intersects.length > 0 ) {
            bonusoffsetpyr = 1;
                //controls.dispose(); 
        } else {
            bonusoffsetpyr = 0;
        }
    PIErender();
}

function addBonusText(){
    for(var i =0 ; i < 6 ; i++){
        bonusInfo[i] = document.createElement( 'div' );
        bonusInfo[i].style.position = 'absolute';
        if(i<3){
            bonusInfo[i].style.top = window.innerWidth*(2.5 )/10 + "px";
            if(i==2){
                bonusInfo[i].style.right = window.innerHeight*(15.5 - 5.3*i)/10 + "px";
            }
            else
                bonusInfo[i].style.right = window.innerHeight*(15.5 - 5*i)/10 + "px";
        }
        else{
            bonusInfo[i].style.top = window.innerWidth*(4.5 )/10 + "px";
            bonusInfo[i].style.right = window.innerHeight*(15.5 - 5.3*(i-3))/10 + "px";
        }
        bonusInfo[i].style.width = 100;
        bonusInfo[i].style.color = '#000';
        bonusInfo[i].style.fontWeight = 'bold';
        bonusInfo[i].style.backgroundColor = 'transparent';
        bonusInfo[i].style.zIndex = '1';
        bonusInfo[i].style.fontFamily = 'Monospace';
        bonusInfo[i].innerHTML = "";
        document.body.appendChild( bonusInfo[i] );    
    }
}

function showBonusInfo(){
    var bonusGem = ["Prism", "Torus" , "Icosahedron" , "Tetrahedron" , "Octahedron" , "Dodecahedron"];
    for(var i =0 ; i < 6 ; i++){
        bonusInfo[i].innerHTML = bonusGem[i];
    }
}

function remvoveBonusText(){
    for(var i =0 ; i < 6 ; i++){
        bonusInfo[i].innerHTML = "";
    }
}

var initbonus = 0;
function addBonus(){
    removeBonus();
    showBonusInfo();
    addPrism();
    addTorus();
    addIcosahedron();
    addTetrahedron();
    addOctahedron();
    addDodecahedron();
    initbonus = 1;

    if(current == 5){
        PIEchangeInputCommand("360 view","-", test);
        PIEchangeDisplayCommand("360 view","-", test);
        PIEchangeInputCommand("No Vertices","-", test);
        PIEchangeDisplayCommand("No Vertices","-", test);
        PIEchangeInputCommand("No Edges","-", test);
        PIEchangeDisplayCommand("No Edges","-", test);
        PIEchangeInputCommand("No Faces","-", test);
        PIEchangeDisplayCommand("No Faces","-", test);
    } else if(current == 6){
        PIEchangeInputCommand("-","-", test);
        PIEchangeDisplayCommand("-","-", test);
        PIEchangeInputCommand("-","-", test);
        PIEchangeDisplayCommand("-","-", test);
        PIEchangeInputCommand("-","-", test);
        PIEchangeDisplayCommand("-","-", test);
        PIEchangeInputCommand("-","-", test);
        PIEchangeDisplayCommand("-","-", test);
    } else { 
        if(current == 3){
            PIEchangeInputCommand("No Vertices","-", test);
            PIEchangeDisplayCommand("No Vertices","-", test);
        } else {
            PIEchangeInputCommand("Vertices","-", test);
            PIEchangeDisplayCommand("Vertices","-", test);
        }
        PIEchangeInputCommand("360 view","-", test);
        PIEchangeDisplayCommand("360 view","-", test);
        PIEchangeInputCommand("Edges","-", test);
        PIEchangeDisplayCommand("Edges","-", test);
        PIEchangeInputCommand("Faces","-", test);
        PIEchangeDisplayCommand("Faces","-", test);
    }
    current = 6;

    PIEstartAnimation();
}

function removeBonus(){
    remvoveBonusText();
    if(initbonus == 1){
        for(var i =0 ;i<5;i++){
            PIEscene.remove(knot[i]);
            PIEscene.remove(bonusLine[i]);
        }
        PIEscene.remove(pyramid);
        PIEscene.remove(pyline);
    }
}

/* ------------------------------- Bonus Ends ----------------------*/


var shapes = ["Cube" , "Cuboid" , "Cylinder" , "Cone" , "Sphere" , "Bonus"];

function checkCube(){ 
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    for(var i=0 ; i<6; i++){
        if(i != 0){
            PIEchangeInputCheckbox(shapes[i], false);
            PIEchangeDisplayCheckbox(shapes[i], false);
        }
    }
    PIEchangeInputCheckbox(shapes[0], true);
    PIEchangeDisplayCheckbox(shapes[0], true);
    removeCylinder();
    removeCone();
    removeSphere();
    removeBonus();
    removeCuboid();
    PIEstopAnimation();
    if(current == 6){
        startOrbitalControls();
    }
    addCube();
    PIErender();
    
}

function checkCuboid(){ 
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    for(var i=0 ; i<6; i++){
        if(i != 1){
            PIEchangeInputCheckbox(shapes[i], false);
            PIEchangeDisplayCheckbox(shapes[i], false);
        }
    }
    PIEchangeInputCheckbox(shapes[1], true);
    PIEchangeDisplayCheckbox(shapes[1], true);
    removeCylinder();
    removeCone();
    removeSphere();
    removeBonus();
    removeCube();
    PIEstopAnimation();
    if(current == 6){
        startOrbitalControls();
    }
    addCuboid();
    PIErender();
    
}

function checkCylinder(){ 
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    for(var i=0 ; i<6; i++){
        if(i != 2){
            PIEchangeInputCheckbox(shapes[i], false);
            PIEchangeDisplayCheckbox(shapes[i], false);
        }
    }
    PIEchangeInputCheckbox(shapes[2], true);
    PIEchangeDisplayCheckbox(shapes[2], true);
    removeCube();
    removeCone();
    removeSphere();
    removeBonus();
    removeCuboid();
    PIEstopAnimation();
    if(current == 6){
        startOrbitalControls();
    }
    addCylinder();
    PIErender();
    
}

function checkCone(){ 
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    for(var i=0 ; i<6; i++){
        if(i != 3){
            PIEchangeInputCheckbox(shapes[i], false);
            PIEchangeDisplayCheckbox(shapes[i], false);
        }
    }
    PIEchangeInputCheckbox(shapes[3], true);
    PIEchangeDisplayCheckbox(shapes[3], true);
    removeCube();
    removeCylinder();
    removeSphere();
    removeBonus();
    removeCuboid();
    PIEstopAnimation();
    if(current == 6){
        startOrbitalControls();
    }
    addCone();
    PIErender();
    
}

function checkSphere(){ 
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    for(var i=0 ; i<6; i++){
        if(i != 4){
            PIEchangeInputCheckbox(shapes[i], false);
            PIEchangeDisplayCheckbox(shapes[i], false);
        }
    }
    PIEchangeInputCheckbox(shapes[4], true);
    PIEchangeDisplayCheckbox(shapes[4], true);
    removeCube();
    removeCylinder();
    removeCone();
    removeBonus();
    removeCuboid();
    PIEstopAnimation();
    if(current == 6){
        startOrbitalControls();
    }
    addSphere();
    PIErender();

}

function checkBonus(){ 
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    for(var i=0 ; i<6; i++){
        if(i != 5){
            PIEchangeInputCheckbox(shapes[i], false);
            PIEchangeDisplayCheckbox(shapes[i], false);
        }
    }
    PIEchangeInputCheckbox(shapes[5], true);
    PIEchangeDisplayCheckbox(shapes[5], true);
    removeCube();
    removeCylinder();
    removeCone();
    removeSphere();
    removeCuboid();
    PIEstopAnimation();
    addBonus();
    PIErender();
    for(var i=0;i<5;i++){
        PIEdragElement(knot[i]);
        PIEsetDrag(knot[i], test);
    }
    PIEdragElement(pyramid);
    PIEsetDrag(pyramid, test);
    controls.dispose();
    document.addEventListener('mousemove', onDocumentMouseMove, false );
    //document.addEventListener('touchstart', onDocumentTouchStart, false );
}

function startanim(){
    if(stopset == 1){
        if(current == 1){
            rotateCube();
        } else if (current == 2){
            rotateCuboid();
        } else if (current == 3){
            rotateCylinder();
        } else if (current == 4){
            rotateCone();
        } else if (current == 5){
            rotateSphere();
        }
    } else {
        PIEstartAnimation();
    }
}
function loadExperimentElements() {
    
    PIEsetExperimentTitle("Three Dimensional Shapes");
    PIEsetDeveloperName("Chirag Wadhera");

    
    initialiseHelp();
    initialiseInfo();
    initialiseScene();
    startOrbitalControls();

    PIEaddInputCheckbox("Cube", true, checkCube);
    PIEaddInputCheckbox("Cuboid", false, checkCuboid);
    PIEaddInputCheckbox("Cylinder", false, checkCylinder);
    PIEaddInputCheckbox("Cone", false, checkCone);
    PIEaddInputCheckbox("Sphere", false, checkSphere);
    PIEaddInputCheckbox("Bonus", false, checkBonus);

    PIEaddDisplayCheckbox("Cube", true, checkCube);
    PIEaddDisplayCheckbox("Cuboid", false, checkCuboid);
    PIEaddDisplayCheckbox("Cylinder", false, checkCylinder);
    PIEaddDisplayCheckbox("Cone", false, checkCone);
    PIEaddDisplayCheckbox("Sphere", false, checkSphere);
    PIEaddDisplayCheckbox("Bonus", false, checkBonus);

    addCube();
    /*addButtonCuboid();
    removeButtonCuboid();
    addButtonCylinder();
    removeButtonCylinder();
    addButtonCone();
    removeButtonCone();
    addButtonSphere();
    removeButtonSphere();
   */ addBonusText();
    remvoveBonusText();


    PIEaddInputCommand("360 view", rotateCube);
    PIEaddInputCommand("Edges", addEdgesCube);
    PIEaddInputCommand("Vertices", addVerticesCube);
    PIEaddInputCommand("Faces", addFacesCube);

    PIEaddDisplayCommand("360 view", rotateCube);
    PIEaddDisplayCommand("Edges", addEdgesCube);
    PIEaddDisplayCommand("Vertices", addVerticesCube);
    PIEaddDisplayCommand("Faces", addFacesCube);

    //PIEinputGUI.remove();
    //var buttontest = PIEaddButton("test");
    //button.style.display="inline";
    //PIEstartButton.style.display = "none";
    //PIEstartAnimation();
    //PIEstopButton.style.display = "none";
    //PIErender();
    //addButtonCube();
    //addCubeByrectangle();
    //addCube();
    //PIErender();
    document.getElementById("start").addEventListener("click", startanim);

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

function resetExperiment() {
    checkCube();
    oldtime = 0;
    current = 1;
    stopset = 1;
}

var oldtime = 0;
var l =0;
var count = 0;
var movesquare = 0;
var count2=0;
var moverectangle = 0;
var count3 =0;
var count4 =0;
var count5 = 0;
var count6=0;
function updateExperimentElements(t, dt) {
    cube.rotation.x += (angCube);
    cube.rotation.y += (angCube);
    line.rotation.x += (angCube);
    line.rotation.y += (angCube);

    cuboid.rotation.x += (angCuboid);
    cuboid.rotation.y += (angCuboid);
    line2.rotation.x += (angCuboid);
    line2.rotation.y += (angCuboid);

    if(cylinit == 1){
        cylinder.rotation.x += (angCylinder);
        cylinder.rotation.z += (angCylinder);
    }

    if(coneinit ==1){
        cone.rotation.x += (angCone);
        cone.rotation.z += (angCone);
    }

    if(sphereinit ==1){
        sphereline.rotation.x += (angSphere);
        sphereline.rotation.z += (angSphere);
        sphere.rotation.x += (angSphere);
        sphere.rotation.z += (angSphere);
    }

    if(verticeoffsetcube == 1){
        if(l==0){
            circleVertex[l].material.opacity = 1;
            oldtime = t;
            l++;
        } else {
            if(t-oldtime >= 200){
                circleVertex[l].material.opacity = 1;
                oldtime = t;
                l++;
            }
            if(l == 8){
                l = 0;
                verticeoffsetcube = 0;
            }
        }
    }

     if(verticeoffsetcuboid == 1){
        if(l==0){
            circleVertex2[l].material.opacity = 1;
            oldtime = t;
            l++;
        } else {
            if(t-oldtime >= 200){
                circleVertex2[l].material.opacity = 1;
                oldtime = t;
                l++;
            }
            if(l == 8){
                l = 0;
                verticeoffsetcuboid = 0;
            }
        }
    }

    if(unboxsquare ==1){
        if(count < 1.57){
            parent[0].rotation.y += 0.005;
            parent[1].rotation.y -= 0.005;
            parent[2].rotation.x += 0.005;
            parent[3].rotation.x -= 0.005;
            parent[5].position.x += 0.0388;
            count += 0.005;
        } else {
            unboxsquare = 0;
            movesquare = 1;
            count = 0;
        }
    }
    if(movesquare == 1){
        if(count2 < 3){
            parent[5].position.z -= 0.038;
            count2 += 0.038;
        }
        else{
            movesquare = 0;
            count2 = 0;
        }
    }

    if(unboxrectangle ==1){
        if(count3 < 1.57){
            parent2[0].rotation.y += 0.005;
            parent2[1].rotation.y -= 0.005;
            parent2[2].rotation.x += 0.005;
            parent2[3].rotation.x -= 0.005;
            parent2[5].position.x += 0.0515;
            count3 += 0.005;
        } else {
            unboxrectangle = 0;
            moverectangle = 1;
            count3 = 0;
        }
        //rotateFaceZ(plane,0,-5,dt/10,0.01,Math.PI/2,5);
    }
    if(moverectangle == 1){
        if(count4 < 2.5){
            parent2[5].position.z -= 0.038;
            count4 += 0.038;
        }
        else{
            moverectangle = 0;
            count4 = 0;
        }
    }

    if(unboxcyl == 1){
        if(count5 < 1.57){
            parent3[0].rotation.x+=0.005;
            parent3[1].rotation.x+=0.005;
            cylrectangleMaterial.opacity += 0.005;
            cylinder4.material.opacity -=0.02;
            cylinder4.material.transparent = true;
            count5 += 0.005;
        }  else{
            count5 = 0;
            unboxcyl = 0;
        }
    }

    if(unboxcone == 1){
        if(count6 < 1.57){
            parent4.rotation.x +=0.005;
            circle5mat.opacity += 0.005;
            fullcone2.material.opacity -=0.01;
            fullcone2.material.transparent = true;
            count6 += 0.005;
        }  else{
            count6 = 0;
            unboxcone = 0;
        }
    }

    for(var i =0 ;i<5;i++){
        if(bonusoffset[i] == 1){
            knot[i].rotation.x+=0.008;
            knot[i].rotation.y+=0.008;
            bonusLine[i].rotation.x+=0.008;
            bonusLine[i].rotation.y+=0.008;
        }
    }
    if(bonusoffsetpyr == 1){
        pyramid.rotation.x+=0.008;
        pyramid.rotation.y+=0.008;
        pyline.rotation.x+=0.008;
        pyline.rotation.y+=0.008;
    }
    //PIErender();
}

