var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;        
var mySceneBRY;        
var mySceneW;         
var mySceneH;          
var myCenterX;         
var myCenterY;  

var helpContent;
function initialiseHelp(){
    helpContent="";
    helpContent = helpContent + "<h2>Melting Delicate Wires help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>Shown a battery connected to a wire made of steel wool (used for cleaning utensils) through a switch.</p>";
    helpContent = helpContent + "<p>When the switch is closed, the wire gets heated and melts.</p>"
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>Select voltage of a cell through slider.</p>";
    helpContent = helpContent + "<p>Click on start button to start the animation</p>";
    helpContent = helpContent + "<p>Alternatively, click on the swith to start the animation</p>";
    helpContent = helpContent + "<p>Click on pause button to pause the animation</p>";
    helpContent = helpContent + "<p>Click on Reset button to reset animation</p>";
    helpContent = helpContent + "<p>Click on start button and then drag to view a 360 degree view and scroll to zoom</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo(){
    infoContent =  "";
    infoContent = infoContent + "<h2>Melting Delicate Wires concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>Shown battery connected to a wire made of steel wool (used for cleaning utensils) through a switch.</p>";
    infoContent = infoContent + "<p>When the switch is closed, the wire gets heated and melts.</p>";
    infoContent = infoContent + "<h3>Current Flow</h3>";
    infoContent = infoContent + "<p>When switch in on, the current passes through steel wool. Steel wool having some resistance produces heat, according to joules law of heating.</p>";
    infoContent = infoContent + "<p>The heat produced is given by H = V*V/R or I*I*R. (Since V = I*R).</p>";
    infoContent = infoContent + "<p>When heat produced is sufficient to increase temperature of steel wool to its melting point, it melts.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene(){
    mySceneTLX = -16;
    mySceneTLY = 17;
    mySceneBRX = 16;
    mySceneBRY = -2;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;

    var light = new THREE.PointLight( 0xff0000, 7, 200 );
    PIEaddElement( light );
    light.position.set(-50,50,50);

    PIEscene.background = new THREE.Color( 0x00BFFF );
    //PIEscene.background = new THREE.Color( 0xFCEDB2 );
    var ambient = new THREE.AmbientLight( 0x555555 );
    PIEaddElement(ambient);

    var light = new THREE.DirectionalLight( 0x123456 );
    light.position = PIEcamera.position;
    PIEaddElement(light);

    var ambient = new THREE.AmbientLight( 0x555555 );
    PIEaddElement(ambient);

    var light = new THREE.DirectionalLight( 0x123456 );
    light.position = PIEcamera.position;
    PIEaddElement(light);

    var groundMaterial = new THREE.MeshPhongMaterial( { color: 0x024406, specular: 0x111111} );
    var mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2000, 2000 ), groundMaterial );
    mesh233.position.y = -25;
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement( mesh233 );

    //PIEadjustDisplayScene();
    PIErenderer.shadowMapEnabled = false;
}

var controls;
function startOrbitalControls() {
    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
}

var info;
function addText(){
    info = document.createElement( 'div' );
    info.style.position = 'absolute';
    info.style.top = window.innerWidth*(2.9 )/10 + "px";
    info.style.right = window.innerHeight*(7.5)/10 + "px";
    info.style.width = 100;
    info.style.color = '#000';
    info.style.fontWeight = 'bold';
    info.style.backgroundColor = 'transparent';
    info.style.zIndex = '1';
    info.style.fontFamily = 'Monospace';
    info.innerHTML = "";
    document.body.appendChild( info );    
}


var lampBulb, lampBulbGeom;
function addBulb(){
    var lampBottomGeom = new THREE.CylinderGeometry(0.4, 0.4, 0.7, 12);
    var lampBottom = new THREE.Mesh(lampBottomGeom, new THREE.MeshPhongMaterial({color: "gray", shininess: 0}));
    lampBottom.position.set(-3, 0.8, -3);
    PIEaddElement(lampBottom);

    lampBulbGeom = new THREE.SphereGeometry(1.1, 32, 24);
    lampBulbGeom.translate(0, 1.3, 0);
    lampBulb = new THREE.Mesh(lampBulbGeom, new THREE.MeshPhongMaterial({color: 0xffffff, transparent: true, opacity:0.8}));
    lampBottom.add(lampBulb);

    var baseGeom = new THREE.BoxGeometry( 3, 1.3, 1.3 );
    baseGeom.translate(0,-0.6,0);
    var base = new THREE.Mesh(baseGeom, new THREE.MeshBasicMaterial( {/*color: 0xd3d3d3*/color:"gray"} ));

    var edges = new THREE.EdgesGeometry( baseGeom );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    
    cylgeom = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 32 ); 
    cylgeom.translate(1.2,0,0);
    var cylinder1 = new THREE.Mesh( cylgeom, new THREE.MeshBasicMaterial( {color: 0xff0000} ) );
    
    cylgeom2 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 32 ); 
    cylgeom2.translate(-1.2,0,0);
    var cylinder2 = new THREE.Mesh( cylgeom2, new THREE.MeshBasicMaterial( {color: 0x000000} ) );
    

    base.add(cylinder1);
    base.add(cylinder2);
    lampBottom.add( line );
    lampBottom.add(base);
}

var prism1,prism2,fakeSwitch;
function addSwitchPrism(x,y,z,ang,color){
    PrismGeometry = function ( vertices, height ) {
        var Shape = new THREE.Shape();

            ( function f( ctx ) {

            ctx.moveTo( vertices[0].x, vertices[0].y );
        for (var i=1; i < vertices.length; i++) {
            ctx.lineTo( vertices[i].x, vertices[i].y );
        }
    
        ctx.lineTo( vertices[0].x, vertices[0].y );

        } )( Shape );

        var settings = { };
        settings.amount = height;
        settings.bevelEnabled = false;
        THREE.ExtrudeGeometry.call( this, Shape, settings );

    };

    //Object of Prism Class
    PrismGeometry.prototype = Object.create( THREE.ExtrudeGeometry.prototype );
    

    /*-----------------First Prism starts----------*/

    //Coordinates of first prism            
    var A = new THREE.Vector2(  0, 0 );
    var B = new THREE.Vector2(  0.7, 0 );
    var C = new THREE.Vector2(  0, 0.3 );

    //height of first prism 
    var height1 = 0.5;           

    //geometry for prism prism        
    var geometry1 = new PrismGeometry( [ A, B, C ], height1 ); 

    var geometry2 = new PrismGeometry( [ A, B, C ], height1 ); 

    var material1 = new THREE.MeshPhongMaterial( { color: color} );

    var material2 = new THREE.MeshPhongMaterial( { color: 0x000} );

    prism1 = new THREE.Mesh( geometry1, material1 );
    prism1.position.y += x;
    prism1.position.x += y;
    prism1.position.z += z;
    prism1.rotation.y += ang;
    //prism1.rotation.z += Math.PI/8;
    //fakeSwitch = new THREE.Mesh(new THREE.BoxGeometry(0.9,0.9,0.9),
      //  new THREE.MeshPhongMaterial({color: 0x0000FF , transparent: true , opacity: 1}));
    //fakeSwitch.position.set(6,0,0);
    //prism1.add(fakeSwitch);
    //PIEaddElement(fakeSwitch);
    base.add(prism1);

    prism2 = new THREE.Mesh( geometry2, material2 );
    prism2.position.y += x-0.25;
    prism2.position.x += y+1.3;
    prism2.position.z += z+0.5;
    prism2.rotation.y += Math.PI;
    prism2.rotation.z += Math.PI/8;

    base.add(prism2 );
}

var base;
function addSwitch(){

    var baseGeom = new THREE.BoxGeometry( 3, 1, 2 );
    base = new THREE.Mesh(baseGeom, new THREE.MeshBasicMaterial( {/*color: 0xd3d3d3*/color: "gray"} ));

    var edges = new THREE.EdgesGeometry( baseGeom );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    
    base.add(line);
  //  base.rotation.x += Math.PI / 6;
    base.rotation.y += Math.PI / 6;
    base.position.x +=6;
    PIEaddElement(base);
    addSwitchPrism(0.5,-0.8,-0.3,0,0xff0000);
    //addSwitchPrismBase(0x000);

    cylgeom = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 32 ); 
    cylgeom.translate(1.2,0.5,0);
    var cylinder1 = new THREE.Mesh( cylgeom, new THREE.MeshBasicMaterial( {color: 0xff0000} ) );
    
    cylgeom2 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 32 ); 
    cylgeom2.translate(-1.2,0.5,0);
    var cylinder2 = new THREE.Mesh( cylgeom2, new THREE.MeshBasicMaterial( {color: 0x000000} ) );
    

    base.add(cylinder1);
    base.add(cylinder2);   
}

function mybattery( x, y, z){
    var a = 3;
    var cuboidOrange =  new THREE.Mesh( new THREE.CubeGeometry( 4/a, 5/a, 2/a, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "orange"}));
    cuboidOrange.position.set(x,y,z);
    PIEaddElement(cuboidOrange);

    var curve1O = new THREE.Mesh(new THREE.CylinderGeometry(1/a,1/a,4/a,32),new THREE.MeshBasicMaterial({color:"orange"}));
    curve1O.position.set(x,y+2.5/a,z);
    cuboidOrange.add(curve1O);
    curve1O.rotation.z = Math.PI/2;


    var curve2O = new THREE.Mesh(new THREE.CylinderGeometry(1/a,1/a,4/a,32),new THREE.MeshBasicMaterial({color:"orange"}));
    curve2O.position.set(x,y-2.5/a,z);
    cuboidOrange.add(curve2O);
    curve2O.rotation.z = Math.PI/2;

    var cuboidBlack =  new THREE.Mesh( new THREE.CubeGeometry( 6/a, 5/a, 2/a, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
    cuboidBlack.position.set(x+5/a,y,z);
    cuboidOrange.add(cuboidBlack);


    var curve1B = new THREE.Mesh(new THREE.CylinderGeometry(1/a,1/a,6/a,32),new THREE.MeshBasicMaterial({color:"black"}));
    curve1B.position.set(x+5/a,y+2.5/a,z);
    cuboidOrange.add(curve1B);
    curve1B.rotation.z = Math.PI/2;

    var curve2B = new THREE.Mesh(new THREE.CylinderGeometry(1/a,1/a,6/a,32),new THREE.MeshBasicMaterial({color:"black"}));
    curve2B.position.set(x+5/a,y-2.5/a,z);
    cuboidOrange.add(curve2B);
    curve2B.rotation.z = Math.PI/2;

    var minus =  new THREE.Mesh( new THREE.CubeGeometry( 2/a, 0.3/a, 0.1/a, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "red"}));
    minus.position.set(x,y+2.5/a,z+1.1/a);
    cuboidOrange.add(minus);

    var plus1 =  new THREE.Mesh( new THREE.CubeGeometry( 2/a, 0.3/a, 0.1/a, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "red"}));
    plus1.position.set(x,y-1.5/a,z+1.1/a);
    cuboidOrange.add(plus1);

    var plus2 =  new THREE.Mesh( new THREE.CubeGeometry( 2/a, 0.3/a, 0.1/a, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "red"}));
    plus2.position.set(x,y-1.5/a,z+1.1/a);
    cuboidOrange.add(plus2);
    plus2.rotation.z=Math.PI/2;


    var terminal1 = new THREE.Mesh(new THREE.CylinderGeometry(0.5/a,0.5/a,0.5/a,32),new THREE.MeshBasicMaterial({color:"gray"}));
    terminal1.position.set(x-2.2/a,y+2.2/a,z);
    cuboidOrange.add(terminal1);
    terminal1.rotation.z = Math.PI/2;

    var terminal2 = new THREE.Mesh(new THREE.CylinderGeometry(0.5/a,0.5/a,0.5/a,32),new THREE.MeshBasicMaterial({color:"gray"}));
    terminal2.position.set(x-2.2/a,y-2.2/a,z);
    cuboidOrange.add(terminal2);
    terminal2.rotation.z = Math.PI/2;

    cuboidOrange.position.x += -7;
    cuboidOrange.position.y += -0.2;
    cuboidOrange.position.z += 3;
    cuboidOrange.rotation.z = Math.PI;
    cuboidOrange.rotation.x = -Math.PI/2;
}

function addCurvedWire(){
    
    var curve = new THREE.CubicBezierCurve3(
    new THREE.Vector3( 1.8, 0.4, 6 ),
    new THREE.Vector3( 2, 0, 5 ),
    new THREE.Vector3( 3.7, -0.4, 3.5 ),
    new THREE.Vector3( 4.21, 0.81, 2.2 )
    );

    var tube = new THREE.TubeGeometry(curve, 40, 0.05, 20, false);
    var mesh = new THREE.Mesh(tube, new THREE.MeshBasicMaterial({color: "black"}));

    PIEaddElement(mesh);

    var curve2 = new THREE.CubicBezierCurve3(
    new THREE.Vector3( 4.2, 0.8, 2.2 ),
    new THREE.Vector3( 4.5, 1.6, 1.6 ),
    new THREE.Vector3( 4.9, 1.3, 0.6 ),
    new THREE.Vector3( 5, 0.5, 0.6 )
    );

    var tube2 = new THREE.TubeGeometry(curve2, 40, 0.05, 20, false);
    var mesh2 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({color: "black"}));

    PIEaddElement(mesh2);


    var curve3 = new THREE.CubicBezierCurve3(
    new THREE.Vector3( -6.2, -0.2, 3.8 ),
    new THREE.Vector3( -4.5, 0, 5.5 ),
    new THREE.Vector3( -2.2, 0.2, 6.5 ),
    new THREE.Vector3( 0.1, 0.4, 6 )
    );

    var tube3 = new THREE.TubeGeometry(curve3, 40, 0.05, 20, false);
    var mesh3 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({color: "black"}));

    PIEaddElement(mesh3);


    var curve4 = new THREE.CubicBezierCurve3(
    new THREE.Vector3( -6.2, -0.2, 2.3 ),
    new THREE.Vector3( -5.6, -0.4, 1 ),
    new THREE.Vector3( -5.2, -0.8, -0.5 ),
    new THREE.Vector3( -5, 0, -1.2 )
    );

    var tube4 = new THREE.TubeGeometry(curve4, 40, 0.05, 20, false);
    var mesh4 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({color: "black"}));

    PIEaddElement(mesh4);

    var curve5 = new THREE.CubicBezierCurve3(
    new THREE.Vector3( 7.05, 0.7, -0.58 ),
    new THREE.Vector3( 6, 2.3, -1 ),
    new THREE.Vector3( 2, 3.4, -2 ),
    new THREE.Vector3( 0.9, 1, -2.5 )
    );

    var tube5 = new THREE.TubeGeometry(curve5, 40, 0.05, 20, false);
    var mesh5 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({color: "black"}));

    PIEaddElement(mesh5);


    var curve51 = new THREE.CubicBezierCurve3(
    new THREE.Vector3( -1.85, 0.92, -3 ),
    new THREE.Vector3( -1, 3.3, -2.9 ),
    new THREE.Vector3( -0.4, -2, -2.7 ),
    new THREE.Vector3( 0.91, 1.01, -2.5 )
    );

    var tube51 = new THREE.TubeGeometry(curve51, 40, 0.05, 20, false);
    var mesh51 = new THREE.Mesh(tube51, new THREE.MeshBasicMaterial({color: "black"}));

    PIEaddElement(mesh51);

    var curve6 = new THREE.CubicBezierCurve3(
    new THREE.Vector3( -4.2, 1, -3 ),
    new THREE.Vector3( -4.4, 2.4, -2.7 ),
    new THREE.Vector3( -4.8, 1, -2 ),
    new THREE.Vector3( -5, 0, -1.2 )
    );

    var tube6 = new THREE.TubeGeometry(curve6, 40, 0.05, 20, false);
    var mesh6 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({color: "black"}));

    PIEaddElement(mesh6);
}

var wool;
function addWool(){
    var geometry = new THREE.TorusKnotGeometry( 0.6, 0.05, 100, 16 , 8 , 7 );
    var material = new THREE.MeshBasicMaterial( { color: 0x212121 } );
    wool = new THREE.Mesh( geometry, material );
    wool.position.z = 5.95;
    wool.position.y = 0.5;
    wool.position.x = 1;
    //wool.rotation.x +=Math.PI/2;
    PIEaddElement(wool);
}

function addTable(){
    var tableGeom = new THREE.CubeGeometry( 20, 0.5, 20, 4, 4, 1 );
    var tableTop =  new THREE.Mesh( tableGeom,new THREE.MeshBasicMaterial({color: 0x8B4513}));
    tableTop.position.y -=0.8;
    PIEaddElement(tableTop);

    var edges = new THREE.EdgesGeometry( tableGeom );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    
    tableTop.add(line);

    var tablelegGeom = new THREE.CubeGeometry( 0.5, 10, 0.5, 4, 4, 1 );
    var tableleg =  new THREE.Mesh( tablelegGeom,new THREE.MeshBasicMaterial({color: 0x8B4513}));
    tableleg.position.set(-9.5,-5,9.5);
    
    var edges2 = new THREE.EdgesGeometry( tablelegGeom );
    var line2 = new THREE.LineSegments( edges2, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    
    tableleg.add(line2);
    tableTop.add(tableleg);  

   
    var tablelegGeom2 = new THREE.CubeGeometry( 0.5, 10, 0.5, 4, 4, 1 );
    var tableleg2 =  new THREE.Mesh( tablelegGeom2,new THREE.MeshBasicMaterial({color: 0x8B4513}));
    tableleg2.position.set(9.5,-5,9.5);
    
    var edges3 = new THREE.EdgesGeometry( tablelegGeom2 );
    var line3 = new THREE.LineSegments( edges3, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    
    tableleg2.add(line3);
    tableTop.add(tableleg2); 


    var tablelegGeom3 = new THREE.CubeGeometry( 0.5, 10, 0.5, 4, 4, 1 );
    var tableleg3 =  new THREE.Mesh( tablelegGeom3,new THREE.MeshBasicMaterial({color: 0x8B4513}));
    tableleg3.position.set(-9.5,-5,-9.5);
    
    var edges4 = new THREE.EdgesGeometry( tablelegGeom3 );
    var line4 = new THREE.LineSegments( edges4, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    
    tableleg3.add(line4);
    tableTop.add(tableleg3);


    var tablelegGeom4 = new THREE.CubeGeometry( 0.5, 10, 0.5, 4, 4, 1 );
    var tableleg4 =  new THREE.Mesh( tablelegGeom4,new THREE.MeshBasicMaterial({color: 0x8B4513}));
    tableleg4.position.set(9.5,-5,-9.5);
    
    var edges5 = new THREE.EdgesGeometry( tablelegGeom4 );
    var line5 = new THREE.LineSegments( edges5, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    
    tableleg4.add(line5);
    tableTop.add(tableleg4);    
}

function addElementsToScene(){
    addCurvedWire();
    addBulb();
    addSwitch();
    addWool();
    mybattery(0,0,0);
    addTable();
}

function startAnimation(){
    flag=1;
    prism1.rotation.z += Math.PI/8;
    prism1.position.y += -0.25;
    prism2.rotation.z += -Math.PI/8;
    prism2.position.y += +0.25;
    lampBulb.material.color.set("yellow");
    isStart = 0;   
    PIEstartAnimation();
    startOrbitalControls();
}

function stopAnimation(){
    flag=0;
    prism1.rotation.z += -Math.PI/8;
    prism1.position.y += +0.25;
    prism2.rotation.z += +Math.PI/8;
    prism2.position.y += -0.25;
    lampBulb.material.color.set("white");
    PIEstopAnimation();
    isStart = 1;
    stopCount = 0;
    stopoffset = 0;
    //uwool.material.color = new THREE.Color(0x212121);
    //controls.dispose();
    PIEanimationON=true;
    PIEanimationPaused=false;
    PIEanimate();
    //controls.dispose();
    PIErender();    
}

var objects = [];
var raycaster= new THREE.Raycaster();
var mouse = new THREE.Vector2();
var flag = 0 ;
function onDocumentMouseDown( event ) {
    PIErender();console.log("chirag");
    event.preventDefault();
    mouse.x = ( event.clientX / PIErenderer.domElement.clientWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / PIErenderer.domElement.clientHeight ) * 2 + 1;
    raycaster.setFromCamera( mouse, PIEcamera );
    var intersects = raycaster.intersectObjects( objects ); 
    if ( intersects.length > 0 ) {console.log("chirag2");
        if(flag ==0){
            startAnimation();
        } else {
            stopAnimation();
        }
    }
    PIErender();
}

function test(){
}

var currentVoltage = 2;
function test2(volt){
    PIEchangeDisplayCommand("Voltage : " + currentVoltage + "V", "Voltage : " + volt + "V", test);
    currentVoltage = volt; 
}

function loadExperimentElements(){
    PIEsetExperimentTitle("Melting Delicate Wires");
    PIEsetDeveloperName("Chirag Wadhera");

    initialiseHelp();
    initialiseInfo();
    initialiseScene();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    
    startOrbitalControls();

    document.getElementById("start").addEventListener("click", startAnimation);
    document.getElementById("stop").addEventListener("click", stopAnimation  );

    PIEaddInputSlider("Voltage", 2, test2, 1, 5, 0.5);
    var a = "Voltage : " + currentVoltage + "V";
    console.log(a);
    //PIEaddDisplayText("Keep voltage to atleast 3V to melt wool.", "test");
    addText();

    PIEaddDisplayCommand(a, test);

    addElementsToScene();

    //stopAnimation();
    objects.push(prism2);
    objects.push(prism1);
    PIEdragElement(prism1);
    PIEdragElement(prism2);
    PIEsetDrag(prism1, test);
    PIEsetDrag(prism2, test);
    document.addEventListener('mousedown', onDocumentMouseDown, false );
    
    //PIEadjustCamera(0,6.3,34);
    //PIErender();
}

function resetExperiment() {
    tot = 0;
    PIEscene.remove(wool);
    //PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    addWool();
        PIErender();
        info.innerHTML = "";
    if(flag == 0){
        prism1.rotation.z += Math.PI/8;
        prism1.position.y += -0.25;
        prism2.rotation.z += -Math.PI/8;
        prism2.position.y += +0.25;
    }        
    stopAnimation();
    PIEanimationON=false;
    PIEanimationPaused=true;
    //isStart = 1;
    //PIEadjustCamera(0,15,500);
    //PIErender();
}

var tot=0;
//var offset = 0;
var con = 0;
var isStart = 0;
stopoffset = 0;
stopCount = 0;
function updateExperimentElements(t, dt) {
    if(isStart == 0){
        if(tot<=0.05 ){
            PIEscene.remove(wool); 
            var geometry = new THREE.TorusKnotGeometry( 0.6 , 0.05 - tot, 100, 16 , 8 , 7 );
            var material = new THREE.MeshBasicMaterial( { color: 0x212121 } );
            wool = new THREE.Mesh( geometry, material );
            wool.position.z = 5.95;
            wool.position.y = 0.5;
            wool.position.x = 1;con++;//console.log(con);
            if(tot > 0.01)
                wool.material.color = new THREE.Color(0x8b0000);
            PIEaddElement(wool);
            tot+=currentVoltage/10000;
        } else if( tot >= 0.05 ){
            PIEscene.remove(wool);
            //PIEstopAnimation();
            lampBulb.material.color.set("white");
            info.innerHTML = "Reset experiment to add wool.";
            info.style.right = window.innerHeight*(8.6)/10 + "px";
        }
    } else {
        if(stopCount > 70 && stopoffset == 0){
            wool.material.color = new THREE.Color(0x212121);
            PIEanimationON=false;
            PIEanimationPaused=true;
            stopoffset = 1;
        } else if (stopoffset == 0) {
            stopCount ++;console.log(stopCount);
        }
    }
}