var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;        
var mySceneBRY;        
var mySceneW;         
var mySceneH;          
var myCenterX;         
var myCenterY;  
var meterTop;
var arrow1;
var arrow1A;
var arrow2;
var arrow3;
var arrow4;
var arrow5;
var arrow6;
var arrow2A;

var arrow3A;
var arrow4A;
var arrow5A;
var arrow6A;

var helpContent;
function initialiseHelp(){
    helpContent="";
    helpContent = helpContent + "<h2>Magnetic field due to a current carrying conductor help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>Shown how the deflection changes with direction and strength of the current.</p>";
    helpContent = helpContent + "<p>When the switch is closed, there is deflection in the compass according to the direction and strength of the current.</p>"
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>Select voltage of a cell through slider.</p>";
    helpContent = helpContent + "<p>Select the direction of the current using checkboxes.</p>";
    helpContent = helpContent + "<p>Drag the compass to set its position.</p>";
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
    infoContent = infoContent + "<h2>Magnetic field due to a current carrying conductor concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>Shown how the deflection changes with direction and strength of the current.</p>";
    infoContent = infoContent + "<p>When the switch is closed, there is deflection in the compass according to the direction and strength of the current.</p>";
    infoContent = infoContent + "<h3>Current Flow</h3>";
    infoContent = infoContent + "<p>According to the Fleming's Right hand rule of finding magnetic direction, if the current's direction is clockwise, the needle deflects to the right and left otherwise </p>";
    infoContent = infoContent + "<p>Current Direction: Clockwise ---------  Needle Deflection : Right</p>";
    infoContent = infoContent + "<p>Current Direction: Anti Clockwise ---------  Needle Deflection : Left</p>";
    infoContent = infoContent + "<p>Also since force on needle is directly propotional to the current, there is more deflection when voltage is high.</p>";
    infoContent = infoContent + "<p>If the compass is moved far from the rod, where there is no magnetic field, then there is no deflection in compass.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene(){
    mySceneTLX = -16;
    mySceneTLY = 19;
    mySceneBRX = 16;
    mySceneBRY = 3;
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
    controls.enabled = false;
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

    base.rotation.y += Math.PI / 6;
    base.position.x +=6;
    PIEaddElement(base);
    addSwitchPrism(0.5,-0.8,-0.3,0,0xff0000);

    cylgeom = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 32 ); 
    cylgeom.translate(1.2,0.5,0);
    var cylinder1 = new THREE.Mesh( cylgeom, new THREE.MeshBasicMaterial( {color: 0xff0000} ) );
    
    cylgeom2 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 32 ); 
    cylgeom2.translate(-1.2,0.5,0);
    var cylinder2 = new THREE.Mesh( cylgeom2, new THREE.MeshBasicMaterial( {color: 0x000000} ) );
    
    base.add(cylinder1);
    base.add(cylinder2);   
}

var plus2, cuboidOrange;
function mybattery( x, y, z){
    var a = 3;
    cuboidOrange =  new THREE.Mesh( new THREE.CubeGeometry( 4/a, 5/a, 2/a, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "orange"}));
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

    plus2 =  new THREE.Mesh( new THREE.CubeGeometry( 2/a, 0.3/a, 0.1/a, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "red"}));
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

function addArrows(){
    arrow1 = new THREE.Mesh(new THREE.CylinderGeometry(0.035,0.035,0.45,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow1);
    arrow1.position.set(3.6,2.5,-1.6);
    arrow1.rotation.y -= 0.3;
    arrow1.rotation.z += 1.2;

     arrow1A = new THREE.Mesh(new THREE.CylinderGeometry(0.035,0.035,0.45,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow1A);
    arrow1A.position.set(3.6,2.5,-1.6);
    arrow1A.rotation.y += 0.3;
    arrow1A.rotation.z -= 1.2;


     arrow2 = new THREE.Mesh(new THREE.CylinderGeometry(0.035,0.035,0.45,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow2);
    arrow2.position.set(3.6,2.3,-1.6);
    arrow2.rotation.y -= 0.3;
    arrow2.rotation.z -= 1.2;


     arrow2A = new THREE.Mesh(new THREE.CylinderGeometry(0.035,0.035,0.45,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow2A);
    arrow2A.position.set(3.6,2.3,-1.6);
    arrow2A.rotation.y += 0.3;
    arrow2A.rotation.z += 1.2;


    arrow3 = new THREE.Mesh(new THREE.CylinderGeometry(0.035,0.035,0.45,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow3);
    arrow3.position.set(-4,-0.45,4.3);
    arrow3.rotation.z -= Math.PI/3;
    //arrow3.rotation.z += 1.8;

    arrow4 = new THREE.Mesh(new THREE.CylinderGeometry(0.035,0.035,0.45,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow4);
    arrow4.position.set(-4,-0.2,4.3);
    arrow4.rotation.z += Math.PI/3;


    arrow3A= new THREE.Mesh(new THREE.CylinderGeometry(0.035,0.035,0.45,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow3A);
    arrow3A.position.set(-4,-0.45,4.2);
    arrow3A.rotation.z += Math.PI/3;
    //arrow3A.rotation.x += Math.PI/4;
    //arrow3A.rotation.z -= 1.2;

    arrow4A = new THREE.Mesh(new THREE.CylinderGeometry(0.035,0.035,0.45,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow4A);
    arrow4A.position.set(-4,-0.2,4.2);
    arrow4A.rotation.z -= Math.PI/3;
    //arrow4A.rotation.x += Math.PI/4;
    //arrow4A.rotation.z += 1.8;

     arrow5 = new THREE.Mesh(new THREE.CylinderGeometry(0.035,0.035,0.45,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow5);
    arrow5.position.set(-5.05,0.3,-1.4);
    arrow5.rotation.x -= 0.8;
    arrow5.rotation.y -= 0.3;
    arrow5.rotation.z += 2.6;

     arrow6 = new THREE.Mesh(new THREE.CylinderGeometry(0.035,0.035,0.45,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow6);
    arrow6.position.set(-4.85,0.28,-1.38);
    arrow6.rotation.x -= 0.4;
    arrow6.rotation.y -= 0.3;
    arrow6.rotation.z += 0.3;


     arrow5A = new THREE.Mesh(new THREE.CylinderGeometry(0.035,0.035,0.45,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow5A);
    arrow5A.position.set(-5.05,0.3,-1.4);
    arrow5A.rotation.x -= 0.8;
    arrow5A.rotation.y -= 0.3;
    arrow5A.rotation.z += 0.4;

     arrow6A = new THREE.Mesh(new THREE.CylinderGeometry(0.035,0.035,0.45,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow6A);
    arrow6A.position.set(-4.85,0.28,-1.38);
    arrow6A.rotation.x -= 0.4;
    arrow6A.rotation.y += 0.3;
    arrow6A.rotation.z += 2.3;
}

function addCurvedWire(){
    
    var curve = new THREE.CubicBezierCurve3(
    new THREE.Vector3( 1.9, -0.4, -0.5 ),
    new THREE.Vector3( 2.2, -0.4, -0.4 ),
    new THREE.Vector3( 2.8, -0.4, -0.2 ),
    new THREE.Vector3( 3.8, 0.8, 0 )
    );

    var tube = new THREE.TubeGeometry(curve, 40, 0.05, 20, false);
    var mesh = new THREE.Mesh(tube, new THREE.MeshBasicMaterial({color: "black"}));

    PIEaddElement(mesh);

    var curve1 = new THREE.CubicBezierCurve3(
    new THREE.Vector3( 1.91, -0.4, -0.5 ),
    new THREE.Vector3( 1.2, -0.4, -1 ),
    new THREE.Vector3( 0.8, -0.4, -0.8 ),
    new THREE.Vector3( 0.5, -0.3, -0.4 )
    );

    var tube1 = new THREE.TubeGeometry(curve1, 40, 0.05, 20, false);
    var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({color: "black"}));

    PIEaddElement(mesh1);

    var curve2 = new THREE.CubicBezierCurve3(
    new THREE.Vector3( 3.8, 0.8, 0 ),
    new THREE.Vector3( 4.5, 1.6, 0.3 ),
    new THREE.Vector3( 4.9, 1.3, 0.6 ),
    new THREE.Vector3( 5, 0.5, 0.6 )
    );

    var tube2 = new THREE.TubeGeometry(curve2, 40, 0.05, 20, false);
    var mesh2 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({color: "black"}));

    PIEaddElement(mesh2);

    var curve3 = new THREE.CubicBezierCurve3(
    new THREE.Vector3( -6.2, -0.2, 3.8 ),
    new THREE.Vector3( -4.5, -0.4, 4 ),
    new THREE.Vector3( -2.2, -0.4, 4.5 ),
    new THREE.Vector3( -0.7, -0.3, 5.83 )
    );

    var tube3 = new THREE.TubeGeometry(curve3, 40, 0.05, 20, false);
    var mesh3 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({color: "black"}));

    PIEaddElement(mesh3);


    var curve31 = new THREE.CubicBezierCurve3(
    new THREE.Vector3( -0.7, -0.3, 5.83 ),
    new THREE.Vector3( 0, -0.3, 6.5 ),
    new THREE.Vector3( 0.3, -0.3, 7.5 ),
    new THREE.Vector3( 0.52, -0.3, 6.53 )
    );

    var tube31 = new THREE.TubeGeometry(curve31, 40, 0.05, 20, false);
    var mesh31 = new THREE.Mesh(tube31, new THREE.MeshBasicMaterial({color: "black"}));

    PIEaddElement(mesh31);

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

var circle = new Array(3);
function addFieldLines() {
    //PIErender();
    for(var j=0;j<3;j++){
        circle[j] = new Array(5);
        for(var i =0 ;i<5;i++){
            var geometry4 = new THREE.RingGeometry((2*i+1)/(8-currentVoltage), (2*i+1)/(8-currentVoltage), 32);
            var material4 = new THREE.MeshBasicMaterial({color:0xffffff , side: THREE.DoubleSide});
            material4.wireframe = true; 
            circle[j][i] = new THREE.Mesh( geometry4, material4 );
            circle[j][i].position.set(0.5, -0.4, 3*j);
            PIEaddElement(circle[j][i]); 
        }
    }
}

function removeFieldlines(){
    for(var i=0;i<3;i++){
        for(var j=0;j<5;j++){
            PIEscene.remove(circle[i][j]);
        }
    }
}

var distfromrod;
function mydragf(element,newpos){
    if(newpos.x < 1.7){
        newpos.x = 1.7;
    } 
    
    if (newpos.x > 4.5) {
        newpos.x = 4.5;
    }
    if( newpos.y != -0.3){
        newpos.y = -0.3;
    }
    if(newpos.z<0){
        newpos.z = 0;
    }

    if(newpos.z>6){
        newpos.z = 6;
    }
    distfromrod = newpos.x-0.8;
    console.log(distfromrod);
	meterTop.position.set(newpos.x,newpos.y,newpos.z);
	needprism1.position.set(newpos.x,newpos.y+0.1,newpos.z);
    if(flag == 1){
        if(distfromrod > (9/(8-currentVoltage))){
            needprism1.rotation.z = 0;
        } else {
            if(currdir == 0){
                needprism1.rotation.z = -currentVoltage/5;
            }
            else {
                needprism1.rotation.z = currentVoltage/5;
            }
        }

        PIErender();
    } 
}

var needprism1,needprism2;
function addMeter(){
 //   PIEdragElement(meterTop);
  //  PIEsetDrag(meterTop,mydragf);
    
}

function addRod() {
	var rodGeom = new THREE.CubeGeometry( 0.3, 0.3, 7, 4, 4, 1 );
    var rodTop =  new THREE.Mesh( rodGeom,new THREE.MeshBasicMaterial({color: "red"}));
    rodTop.position.y -=0.35;
    rodTop.position.z +=3;
    rodTop.position.x +=0.5;
    PIEaddElement(rodTop);

    var edges = new THREE.EdgesGeometry( rodGeom );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    
    rodTop.add(line);

}

function addDirecLetters() {


	var north = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,1.45,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(north);
    north.position.set(0.1,-0.4,-3);
    north.rotation.x += Math.PI/2;

    var north2 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,1.55,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(north2);
    north2.position.set(0.5,-0.4,-3);
    north2.rotation.x += Math.PI/2;
    north2.rotation.z -= Math.PI/6;

    var north3 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,1.45,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(north3);
    north3.position.set(0.9,-0.4,-3);
    north3.rotation.x += Math.PI/2;

    var west = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,1.45,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(west);
    west.position.set(-1.9,-0.4,3);
    west.rotation.x += Math.PI/2;

    var west2 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,0.65,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(west2);
    west2.position.set(-1.7,-0.4,3.4);
    west2.rotation.x += Math.PI/2;
    west2.rotation.z += Math.PI/5.2;

    var west3 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,0.65,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(west3);
    west3.position.set(-1.3,-0.4,3.4);
    west3.rotation.x += Math.PI/2;
    west3.rotation.z -= Math.PI/5.2;

    var west4 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,1.45,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(west4);
    west4.position.set(-1.1,-0.4,3);
    west4.rotation.x += Math.PI/2;


    var east = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,1.45,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(east);
    east.position.set(3.9,-0.4,3);
    east.rotation.x += Math.PI/2;

    var east2 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,0.55,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(east2);
    east2.position.set(4.2,-0.4,2.3);
    east2.rotation.x += Math.PI/2;
    east2.rotation.z += Math.PI/2;

    var east3 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,0.55,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(east3);
    east3.position.set(4.2,-0.4,3);
    east3.rotation.x += Math.PI/2;
    east3.rotation.z -= Math.PI/2;

    var east4 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,0.55,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(east4);
    east4.position.set(4.2,-0.4,3.7);
    east4.rotation.x += Math.PI/2;
    east4.rotation.z -= Math.PI/2;

	var curveS = new THREE.CubicBezierCurve3(
    new THREE.Vector3( 0.7, -0.4,  8 ),
    new THREE.Vector3( 0, -0.4,  8.4 ),
    new THREE.Vector3( 0.6, -0.4,  8.7 ),
    new THREE.Vector3( 0.6, -0.4,  8.7 )
    );

    var tubeS = new THREE.TubeGeometry(curveS, 40, 0.05, 20, false);
    var meshS = new THREE.Mesh(tubeS, new THREE.MeshBasicMaterial({color: "red"}));

    PIEaddElement(meshS);	

    var curveS2 = new THREE.CubicBezierCurve3(
    new THREE.Vector3( 0.6, -0.4,  8.7),
    new THREE.Vector3( 1, -0.4,  9.1 ),
    new THREE.Vector3( 0.3, -0.4,  9.2 ),
    new THREE.Vector3( 0.3, -0.4,  9.2 )
    );

    var tubeS2 = new THREE.TubeGeometry(curveS2, 40, 0.05, 20, false);
    var meshS2 = new THREE.Mesh(tubeS2, new THREE.MeshBasicMaterial({color: "red"}));

    PIEaddElement(meshS2);	

}

function addElementsToScene(){startOrbitalControls();
    addCurvedWire();
    addBulb();
    addSwitch();
    mybattery(0,0,0);
    addTable();
    addMeter();
    addArrows();
    addRod();
    addDirecLetters();
}

var currentrotation;
function startAnimation(){
    flag=1;
    if(currdir == 0){
        if(needprism1.position.x-0.7 < (9/(8-currentVoltage))){
            needprism1.rotation.z -= currentVoltage/5;
        }
        showClockArrows();
    }
    else {
        if(needprism1.position.x-0.7 < (9/(8-currentVoltage))){
            needprism1.rotation.z += currentVoltage/5;
        }
        showAntiArrows();
    }
    addFieldLines(); 
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
    needprism1.rotation.z = 0;
    prism1.rotation.z += -Math.PI/8;
    prism1.position.y += +0.25;
    prism2.rotation.z += +Math.PI/8;
    prism2.position.y += -0.25;
    lampBulb.material.color.set("white");
    showNoArrows();
    removeFieldlines();
    PIEstopAnimation();
    PIErender();    
}

var objects = [];
var raycaster= new THREE.Raycaster();
var mouse = new THREE.Vector2();
var flag = 0 ;

function PIEmouseMove( event ) {
 var intersects;     // to hold return array of ray intersects

    event.defaultPrevented = true;

    PIEmouseP.x = ( event.clientX / PIEcanvasW ) * 2 - 1;
    PIEmouseP.y = - ( event.clientY / PIEcanvasH ) * 2 + 1;

    /* Cast the ray to find intersecting objects */
    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);

    if (PIEselectedDrag != null)
    {   /* Drag the element */
        PIEraycaster.ray.intersectPlane(PIEdragPlane, PIEdragIntersect);
	    PIEdefaultDrag(PIEselectedDrag, PIEdragIntersect.sub(PIEdragOffset)); 
    }
    else
    {   /* If possible Call hoveron method of the nearest element */
        intersects = PIEraycaster.intersectObjects([prism2,prism1,meterTop]);
        if (intersects.length > 0)
        {
            PIEdragPlane.setFromNormalAndCoplanarPoint(PIEcamera.getWorldDirection(PIEdragPlane.normal), intersects[0].object.position);
            if (PIEselectedHover != intersects[0].object)
            {
                PIEdefaultHoverOFF(PIEselectedHover);
                PIEselectedHover = intersects[0].object;
                PIEdefaultHoverON(PIEselectedHover);
            }
            PIEscreenElem.style.cursor = 'pointer';
        }
    else if (PIEselectedHover != null)
        {
            PIEdefaultHoverOFF(PIEselectedHover);
            PIEselectedHover = null;
            PIEscreenElem.style.cursor = 'auto';
        }
    }
}

function PIEmouseDown( event ) {
    
	var intersects;     // to hold return array of ray intersects

    // console.log("Mouse Down at ", PIEmouseP);
    event.defaultPrevented = true;
    PIEselectedDrag = null;
	
	PIEmouseP.x = ( event.clientX / PIEcanvasW ) * 2 - 1;
    PIEmouseP.y = - ( event.clientY / PIEcanvasH ) * 2 + 1;

    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);
    intersects = PIEraycaster.intersectObjects(PIEdragElements);
    if (intersects.length > 0) {
        PIEselectedDrag = intersects[0].object;
        if (PIEraycaster.ray.intersectPlane(PIEdragPlane, PIEdragIntersect))
		{
            PIEdragOffset.copy(PIEdragIntersect).sub(PIEselectedDrag.position);
        }
        PIEscreenElem.style.cursor = 'move';
		PIEdefaultDragStart(PIEselectedDrag);
    }
    
    intersects = PIEraycaster.intersectObjects( [prism2,prism1] ); 
    if ( intersects.length > 0 ) {
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

var currentVoltage = 2.5;
function test2(volt){
    PIEchangeDisplayCommand("Voltage : " + currentVoltage + "V", "Voltage : " + volt + "V", test);
    currentVoltage = volt;
}

function showClockArrows() {
    arrow1.visible = true;
    arrow2.visible = true;
    arrow1A.visible = false;
    arrow2A.visible = false;


    arrow3.visible = false;
    arrow4.visible = false;
    arrow5.visible = true;
    arrow6.visible = true;

    arrow3A.visible = true;
    arrow4A.visible = true;
    arrow5A.visible = false;
    arrow6A.visible = false;
}

function showAntiArrows() {
    arrow1.visible = false;
    arrow2.visible = false;
    arrow1A.visible = true;
    arrow2A.visible = true;


    arrow3.visible = true;
    arrow4.visible = true;
    arrow5.visible = false;
    arrow6.visible = false;

    arrow3A.visible = false;
    arrow4A.visible = false;
    arrow5A.visible = true;
    arrow6A.visible = true;
}

function showNoArrows(){
    arrow1.visible = false;
    arrow2.visible = false;
    arrow1A.visible = false;
    arrow2A.visible = false;


    arrow3.visible = false;
    arrow4.visible = false;
    arrow5.visible = false;
    arrow6.visible = false;

    arrow3A.visible = false;
    arrow4A.visible = false;
    arrow5A.visible = false;
    arrow6A.visible = false;
}

var currdir = 0;
function checkClock(){
    if(currdir == 1)
    plus2.position.y -= 1.3;
    PIEchangeInputCheckbox("Anti-Clockwise",false);
    PIEchangeInputCheckbox("Clockwise",true);
    currdir = 0;
    PIErender();
}

function checkAntiClock(){
    if(currdir == 0)
    plus2.position.y += 1.3;
    PIEchangeInputCheckbox("Clockwise",false);
    PIEchangeInputCheckbox("Anti-Clockwise",true);
    currdir = 1;
    PIErender();
}

function loadExperimentElements(){
    PIEsetExperimentTitle("Magnetic field due to a current carrying conductor");
    PIEsetDeveloperName("Chirag Wadhera");

    initialiseHelp();
    initialiseInfo();
    initialiseScene();
    var meterGeom = new THREE.CylinderGeometry( 0.9, 0.9, 0.4, 32);
    meterTop =  new THREE.Mesh( meterGeom,new THREE.MeshBasicMaterial({color: "gray"}));
    meterTop.position.y +=0.5;
    meterTop.position.z += 5;
    meterTop.position.x += 0.8;
    meterTop.rotation.x += Math.PI/2;
    var edges = new THREE.EdgesGeometry( meterGeom );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    
    meterTop.add(line);

    var geometry = new THREE.CircleGeometry( 0.85, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    var circle = new THREE.Mesh( geometry, material );
    geometry.translate(0,0,0.21);
    circle.rotation.x += -Math.PI/2;
    meterTop.add( circle );

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

    PrismGeometry.prototype = Object.create( THREE.ExtrudeGeometry.prototype );
                
    var A = new THREE.Vector2( -0.15, 0 );
    var B = new THREE.Vector2( 0.15, 0 );
    var C = new THREE.Vector2( 0, 0.7 );

    var height1 = 0.2;           

    var geometry1 = new PrismGeometry( [ A, B, C ], height1 ); 

    var material1 = new THREE.MeshBasicMaterial( { color: 0xff0000} );

    needprism1 = new THREE.Mesh( geometry1, material1 );
    PIEaddElement( needprism1 );
    needprism1.position.set(0.8,0.6,5.05);


    var A1 = new THREE.Vector2( -0.15, 0 );
    var B1 = new THREE.Vector2( 0.15, 0 );
    var C1 = new THREE.Vector2( 0, 0.7 );

    var height2 = 0.2;           

    var geometry2 = new PrismGeometry( [ A1, B1, C1 ], height2 ); 

    var material2 = new THREE.MeshBasicMaterial( { color: 0x000} );

    needprism2 = new THREE.Mesh( geometry2, material2 );
    needprism2.rotation.z = Math.PI;
    needprism1.add(needprism2);
    meterTop.rotation.x += -Math.PI/2;
    needprism1.rotation.x += -Math.PI/2;
    meterTop.position.y -= 0.8;
    needprism1.position.y -= 0.8;
    needprism1.position.x +=1.4;
    meterTop.position.x +=1.4;
    needprism1.position.z -=2;
    meterTop.position.z -=2;
	PIEaddElement(meterTop);

    addElementsToScene();    

    PIEdragElement(meterTop);
    PIEsetDrag(meterTop,mydragf);

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    
    startOrbitalControls();

    document.getElementById("start").addEventListener("click", startAnimation);
    document.getElementById("stop").addEventListener("click", stopAnimation  );

    PIEaddInputSlider("Voltage", 2.5, test2, 1, 5, 0.5);
    PIEaddInputCommand("Current Direction :", test);
    PIEaddInputCheckbox("Clockwise", true, checkClock);
    PIEaddInputCheckbox("Anti-Clockwise", false, checkAntiClock);
    PIEinputGUI.width = 280;
    var a = "Voltage : " + currentVoltage + "V";

    PIEaddDisplayCommand(a, test);

    showNoArrows();
	PIErender();    
   // objects.push(prism2);
  //  objects.push(prism1);
    
    //PIEdragElement(prism1);
    //PIEdragElement(prism2);
    //PIEsetDrag(prism1, test);
    //PIEsetDrag(prism2, test);
 //   document.addEventListener('mousedown', onDocumentMouseDown, false );
}

function resetExperiment() {
    /*if(flag == 0){
        prism1.rotation.z += Math.PI/8;
        prism1.position.y += -0.25;
        prism2.rotation.z += -Math.PI/8;
        prism2.position.y += +0.25;
    } */       
    
    needprism1.position.set(0.8,0.6,5.05);
    meterTop.position.set(0.8,0.5,5);
    meterTop.position.y -= 0.8;
    needprism1.position.y -= 0.8;
    needprism1.position.x +=1.4;
    meterTop.position.x +=1.4;
    needprism1.position.z -=2;
    meterTop.position.z -=2;
    PIEchangeInputSlider("Voltage",2.5);
    currentVoltage = 2.5;
    if(flag == 1)
    stopAnimation();
    checkClock();
}

function updateExperimentElements(t, dt) {  
}