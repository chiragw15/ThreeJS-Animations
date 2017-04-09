/*Made by: Chirag Wadhera, IIT Patna*/

/*These variables are used for 
  defining dimensions of the scene*/
var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;        
var mySceneBRY;        
var mySceneW;          
var mySceneH;          
var myCenterX;         
var myCenterY;  

/*These variables are used to make geometrical 
  objects and defining their properites*/
var line;
var MAX_POINTS;
var drawCount;
var colors;
var cords;
var cords2;

var randAllgeometries;
var randAllMaterials;
var randAllLines;
var randAllPositions;

var allgeometries;
var allMaterials;
var allLines;
var allPositions;

var allgeometries2;
var allMaterials2;
var allLines2;
var allPositions2;

var allgeometries3;
var allMaterials3;
var allLines3;
var allPositions3;

var line2;
var geometry;
var material;
var prism1
var prism2;       

var helpContent;
function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Dispersion and consolidation of light by a prism help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a prism and a thin beam of white light. </p>";
    helpContent = helpContent + "<p>When the beam of light is incident on a prism, the light splits into seven different colours because different colours have different angles of deflection. </p>";
    helpContent = helpContent + "<p>When moving another prism into the ‘rainbow' (dispersed beam), all the lights are reverse deflected into a single white beam.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>Click on start button to start the animation</p>";
    helpContent = helpContent + "<p>Click on pause button to pause the animation</p>";
    helpContent = helpContent + "<p>Click on Reset button to reset animation</p>";
    helpContent = helpContent + "<p>Click on >> button to increase speed of the animation</p>";
    helpContent = helpContent + "<p>Click on << button to decrease speed of the animation</p>";
    helpContent = helpContent + "<p>Click on start button and then drag to view a 360 degree view and scroll to zoom</p>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo() {
    infoContent =  "";
    infoContent = infoContent + "<h2>Dispersion and consolidation of light by a prism experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a prism and a thin beam of white light.</p>";
    infoContent = infoContent + "<p>When the beam of light is incident on a prism, the light splits into seven different colours because different colours have different angles of deflection. </p>";
    infoContent = infoContent + "<p>When moving another prism into the ‘rainbow' (dispersed beam), all the lights are reverse deflected into a single white beam.</p>";
    infoContent = infoContent + "<h3>Dispersion</h3>";
    infoContent = infoContent + "<p>Since different colour lights have different wavelenghts, each of them have different refractive Index. The refractive index is inversely propotional to the wavelength of the light wave. </p>";
    infoContent = infoContent + "<p>Red light has highest wavelength, thus least refractive index and therfore it deviates less.</p>";
    infoContent = infoContent + "<h3>The refractive index of prism used for different colours</h3>";
    infoContent = infoContent + "<ul>";
    infoContent = infoContent + "<li>Red&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;1.520</li>";
    infoContent = infoContent + "<li>Orange&nbsp;:&nbsp;1.522</li>";
    infoContent = infoContent + "<li>Yellow&nbsp;:&nbsp;1.523</li>";
    infoContent = infoContent + "<li>Green&nbsp;&nbsp;:&nbsp;1.526</li>";
    infoContent = infoContent + "<li>Blue&nbsp;&nbsp;&nbsp;:&nbsp;1.531</li>";
    infoContent = infoContent + "<li>Indigo&nbsp;:&nbsp;1.534</li>";
    infoContent = infoContent + "<li>Violet&nbsp;:&nbsp;1.538</li>";
    infoContent = infoContent + "</ul>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initializeText(){
    var info = document.createElement( 'div' );
    info.style.position = 'absolute';
    info.style.top = window.innerWidth*4.5/10 + "px";
    info.style.right = window.innerHeight/10 + "px";
    info.style.width = '100%';
    info.style.textAlign = 'center';
    info.style.color = '#fff';
    info.style.fontWeight = 'bold';
    info.style.backgroundColor = 'transparent';
    info.style.zIndex = '1';
    info.style.fontFamily = 'Monospace';
    info.innerHTML = "Drag to move and scroll to zoom (After clicking on start)";
    document.body.appendChild( info );
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

    //PIEscene.background = new THREE.Color( 0x87ceeb );
    PIEscene.background = new THREE.Color( 0x00BFFF );

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
    mesh233.position.y = - 25;
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement( mesh233 );

    PIErenderer.shadowMapEnabled = false;
}

/*This function is used to set orbital controls*/
function startOrbitalControls(){
    var controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
    controls.maxPolarAngle = Math.PI * 0.5;
                controls.minDistance = 35;
                controls.maxDistance = 75;

}

/*This functions initializes variables*/
function initializeVariables(){
    MAX_POINTS = 500;
    drawCount = 1;
    colors = [0x8f00ff,0x4b0082,0x0000ff,0x00ff00,0xffff00,0xff7f00,0xff0000];
    cords = [2.02,2.11,2.18,2.25,2.32,2.40,2.47];
    cords2 = [1.55,1.74,1.94,2.18,2.34,2.52,2.70];
    
    randAllgeometries = new Array(4);
    randAllMaterials = new Array(4);
    randAllLines = new Array(4);
    randAllPositions = new Array(4);

    allgeometries = new Array(7);
    allMaterials = new Array(7);
    allLines = new Array(7);
    allPositions = new Array(7);

    allgeometries2 = new Array(7);
    allMaterials2 = new Array(7);
    allLines2 = new Array(7);
    allPositions2 = new Array(7);

    allgeometries3 = new Array(7);
    allMaterials3 = new Array(7);
    allLines3 = new Array(7);
    allPositions3 = new Array(7);
}

/* This function crates all the elements required for experiment, 
   defines there positions and properties and adds them to the scene */
function addElementsToScene(){


    //initalize variables
    initializeVariables();

    //Prism Class
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
    var A = new THREE.Vector2( -6, 0 );
    var B = new THREE.Vector2( -0, 0 );
    var C = new THREE.Vector2( -3, -5.19 );

    //height of first prism 
    var height1 = 5;           

    //geometry for prism prism        
    var geometry1 = new PrismGeometry( [ A, B, C ], height1 ); 

    var material1 = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0xffffff, shininess: 20, transparent: true, opacity: 0.5 } );

    prism1 = new THREE.Mesh( geometry1, material1 );
    prism1.rotation.x = -Math.PI ;
    PIEaddElement( prism1 );

    /*-----------------First Prism ends----------*/    


    /*-----------------Second Prism starts----------*/

    //coordinates of second prism
    var D = new THREE.Vector2( 1.5, -5.19 );
    var E = new THREE.Vector2( 7.5, -5.19 );
    var F = new THREE.Vector2( 4.5, 0 );

    //height of second prism
    var height2 = 5;  

    //geometry for second prism                 
    var geometry2 = new PrismGeometry( [ D, E, F ], height2 ); 

    var material2 = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0xffffff, shininess: 20, transparent: true, opacity: 0.5 } );

    prism2 = new THREE.Mesh( geometry2, material2 );
    prism2.rotation.x = -Math.PI  ;

    PIEaddElement( prism2 );

    /*----------------Second Prism ends-----------------*/



    /*----------------Lamp starts-----------------*/

    var lampBottomGeom = new THREE.CylinderGeometry(0.5, 0.5, 1, 12);
    var lampBottom = new THREE.Mesh(lampBottomGeom, new THREE.MeshPhongMaterial({color: "grey", shininess: 0}));
    lampBottom.position.set(-17, -1.5, -2.5);
    PIEaddElement(lampBottom);

    var lampBulbGeom = new THREE.SphereGeometry(1.3, 32, 24);
    lampBulbGeom.translate(0, 1.5, 0);
    lampBulb = new THREE.Mesh(lampBulbGeom, new THREE.MeshPhongMaterial({color: "white", shininess: 5000}));
    lampBottom.add(lampBulb);

    /*----------------Lamp ends-----------------*/

   


    /*----------------Screen starts-----------------*/

    var squareGeometry = new THREE.Geometry(); 
    squareGeometry.vertices.push(new THREE.Vector3(-13,  5, -11)); 
    squareGeometry.vertices.push(new THREE.Vector3(-13,  5, -3)); 
    squareGeometry.vertices.push(new THREE.Vector3(-13, -3, -3)); 
    squareGeometry.vertices.push(new THREE.Vector3(-13, -3, -11)); 
    squareGeometry.faces.push(new THREE.Face3(0, 1, 2)); 
    squareGeometry.faces.push(new THREE.Face3(0, 2, 3)); 
   
    var squareMaterial = new THREE.MeshBasicMaterial({ 
        color:0x3d1600, 
        side:THREE.DoubleSide 
    }); 
    
    var squareMesh = new THREE.Mesh(squareGeometry, squareMaterial); 
    squareMesh.position.set(1.5, 0.0, 4.0); 
    PIEaddElement(squareMesh); 

    /*----------------Screen ends-----------------*/

var squareGeometry3 = new THREE.Geometry(); 
    squareGeometry3.vertices.push(new THREE.Vector3(-13,  11, -12)); 
    squareGeometry3.vertices.push(new THREE.Vector3(-13,  11, 0)); 
    squareGeometry3.vertices.push(new THREE.Vector3(-13,  -3, 0)); 
    squareGeometry3.vertices.push(new THREE.Vector3(-13,  -3, -12)); 
    squareGeometry3.faces.push(new THREE.Face3(0, 1, 2)); 
    squareGeometry3.faces.push(new THREE.Face3(0, 2, 3)); 
   
    var squareMaterial3 = new THREE.MeshBasicMaterial({ 
        color:0x3d1600, 
        side:THREE.DoubleSide 
    }); 
    
    var squareMesh3 = new THREE.Mesh(squareGeometry3, squareMaterial3); 
    squareMesh3.position.set(28, 0.0, 4.0); 
    PIEaddElement(squareMesh3); 

    /*----------------Hole starts-----------------*/
    
    var squareGeometry2 = new THREE.Geometry(); 
    squareGeometry2.vertices.push(new THREE.Vector3(-13,  0.5, -6.3)); 
    squareGeometry2.vertices.push(new THREE.Vector3(-13,  0.5, -6.8)); 
    squareGeometry2.vertices.push(new THREE.Vector3(-13, 1, -6.8)); 
    squareGeometry2.vertices.push(new THREE.Vector3(-13, 1, -6.3)); 
    squareGeometry2.faces.push(new THREE.Face3(0, 1, 2)); 
    squareGeometry2.faces.push(new THREE.Face3(0, 2, 3)); 
   
    var squareMaterial2 = new THREE.MeshBasicMaterial({ 
        color:0x000, 
        side:THREE.DoubleSide 
    }); 
    
    var squareMesh2 = new THREE.Mesh(squareGeometry2, squareMaterial2); 
    squareMesh2.position.set(1.5, 0.3, 4.0); 
    PIEaddElement(squareMesh2); 

    /*----------------Hole ends-----------------*/

/*----------------Random Incident rays starts--------------*/

    for(var i=0 ; i<4 ; i++){

        randAllMaterials[i] = new THREE.LineBasicMaterial({
            color: 0xffffff, linewidth: 2
        });

        //Geometries for random incident rays
        randAllgeometries[i] = new THREE.BufferGeometry();

        //positions for random incident rays
        randAllPositions[i] = new Float32Array( MAX_POINTS * 3 );

        randAllgeometries[i].addAttribute( 'position', new THREE.BufferAttribute( randAllPositions[i], 3 ) );

        randAllgeometries[i].setDrawRange( 0, drawCount );
        randAllLines[i] = new THREE.Line( randAllgeometries[i], randAllMaterials[i] );
        PIEaddElement( randAllLines[i] );
    }

    /*--------------Random incident rays ends-----------------*/



    /* ---------------Incident ray Starts-------------- */

    var material3 = new THREE.LineBasicMaterial({
        color: 0xffffff, linewidth: 2
    });

    //geometry for incident ray
    var geometry3 = new THREE.BufferGeometry();

    //positions for incident ray
    var positions1 = new Float32Array( MAX_POINTS * 3 );
    geometry3.addAttribute( 'position', new THREE.BufferAttribute( positions1, 3 ) );
 
    geometry3.setDrawRange( 0, drawCount );

    line = new THREE.Line( geometry3, material3 );
    PIEaddElement( line );

    /* ---------------Incident ray ends----------------*/


    /*----------------Rainbow rays inside Prism1 starts--------------*/

    for(var i=0 ; i<7 ; i++){

        allMaterials[i] = new THREE.LineBasicMaterial({
            color: colors[i], linewidth: 3
        });

        //Geometries for VIBGYOR rays
        allgeometries[i] = new THREE.BufferGeometry();

        //positions for VIBGYOR rays
        allPositions[i] = new Float32Array( MAX_POINTS * 3 );

        allgeometries[i].addAttribute( 'position', new THREE.BufferAttribute( allPositions[i], 3 ) );

        allgeometries[i].setDrawRange( 0, drawCount );
        allLines[i] = new THREE.Line( allgeometries[i], allMaterials[i] );
        PIEaddElement( allLines[i] );
    }

    /*--------------Rainbow rays inside Prism1 ends-----------------*/


    /*----------------Rainbow rays outside starts--------------*/

    for(var i=0 ; i<7 ; i++){

        allMaterials2[i] = new THREE.LineBasicMaterial({
            color: colors[i], linewidth: 5
        });

        //Geometries for VIBGYOR rays
        allgeometries2[i] = new THREE.BufferGeometry();

        //positions for VIBGYOR rays
        allPositions2[i] = new Float32Array( MAX_POINTS * 3 );

        allgeometries2[i].addAttribute( 'position', new THREE.BufferAttribute( allPositions2[i], 3 ) );

        allgeometries2[i].setDrawRange( 0, drawCount );
        allLines2[i] = new THREE.Line( allgeometries2[i], allMaterials2[i] );
        PIEaddElement( allLines2[i] );
    }

    /*--------------Rainbow rays outside ends-----------------*/



    /*----------------Rainbow rays inside Prism2 starts--------------*/

    for(var i=0 ; i<7 ; i++){

        allMaterials3[i] = new THREE.LineBasicMaterial({
            color: colors[i], linewidth: 5
        });

        //Geometries for VIBGYOR rays
        allgeometries3[i] = new THREE.BufferGeometry();

        //positions for VIBGYOR rays
        allPositions3[i] = new Float32Array( MAX_POINTS * 3 );

        allgeometries3[i].addAttribute( 'position', new THREE.BufferAttribute( allPositions3[i], 3 ) );

        allgeometries3[i].setDrawRange( 0, drawCount );
        allLines3[i] = new THREE.Line( allgeometries3[i], allMaterials3[i] );
        PIEaddElement( allLines3[i] );
    }

    /*--------------Rainbow rays inside Prism2 ends-----------------*/



    /*--------------Final ray starts-----------------*/
        
    var material4 = new THREE.LineBasicMaterial({
        color: 0xffffff, linewidth: 2
    });

    //geometry for final ray
    var geometry4 = new THREE.BufferGeometry();
    
    //positions for final ray
    var positions2 = new Float32Array( MAX_POINTS * 3 );
    
    geometry4.addAttribute( 'position', new THREE.BufferAttribute( positions2, 3 ) );

    geometry4.setDrawRange( 0, drawCount );

    line2 = new THREE.Line( geometry4, material4 );
    PIEaddElement( line2 ); 

    /*---------------Final ray ends-------------------*/

    updatePositionsRandincident();
    updatePositionsincident();
    updatePositionsrainbowPrism1();
    updatePositionsrainbowOutside();
    updatePositionsrainbowPrism2();
    updatePositionsfinal();
}

function loadExperimentElements() {
    
    PIEsetExperimentTitle("Dispersion of light through prism");
    PIEsetDeveloperName("Chirag Wadhera");

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /*initialize text displayed*/
    initializeText();

    initialiseScene();          

    /* Adding both prism and all rays to the scene*/
    addElementsToScene();


    document.getElementById("start").addEventListener("click", startOrbitalControls);

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

/*This function is used to animate random incident rays*/
function updatePositionsRandincident() {
    var positions = new Array(4);

    for(var i =0 ;i<4 ; i++) {
        positions[i] = new Array(MAX_POINTS * 3);
        positions[i] = randAllLines[i].geometry.attributes.position.array;
    }

    var x = [-16,-16,-16,-16];  
    var y = [-0.5,-0.3,0.3,0.5]; 
    var y2 = [1,0.5,1.5,2];
    var z = -2.5;
    var index = 0;

    for ( var i = 0, l = MAX_POINTS; i < l; i ++ ) {
        for(var j=0;j<4;j++){
            positions[j][ index ++ ] = x[j];
            positions[j][ index ++ ] = y[j];
            positions[j][ index ++ ] = z;

            x[j] += ((4.5)/MAX_POINTS);
            if(j==0 || j==1){
                y[j] -= ((y2[j])/MAX_POINTS);
            } else {
                y[j] += ((y2[j])/MAX_POINTS);
            }
            index-=3;
        }
        index+=3;
    }
}


/*This function is used to animate incident ray*/
function updatePositionsincident() {
    var positions = line.geometry.attributes.position.array;

    var x = -16;
    var y = 0; 
    var z = -2.5;
    var index = 0;

    for ( var i = 0, l = MAX_POINTS; i < l; i ++ ) {

        positions[ index ++ ] = x;
        positions[ index ++ ] = y;
        positions[ index ++ ] = z;

        x += (11.78/MAX_POINTS);
        y += (3/MAX_POINTS);
    }
}


/*This function is used to animate all the VIBGYOR rays*/
function updatePositionsrainbowPrism1() {
    var positions = new Array(7);

    for(var i =0 ;i<7 ; i++) {
        positions[i] = new Array(MAX_POINTS * 3);
        positions[i] = allLines[i].geometry.attributes.position.array;
    }

    var x = [-4.3,-4.3,-4.3,-4.3,-4.3,-4.3,-4.3]; 
    var x2 = [-1.43,-1.48,-1.53,-1.53,-1.55,-1.60,-1.65]; 
    var y = [3,3,3,3,3,3,3]; 
    var z = -2.5;
    var index = 0;

    for ( var i = 0, l = MAX_POINTS; i < l; i ++ ) {
        for(var j=0;j<7;j++){
            positions[j][ index ++ ] = x[j];
            positions[j][ index ++ ] = y[j];
            positions[j][ index ++ ] = z;

            x[j] += ((x2[j]+4.30)/MAX_POINTS);
            y[j] -= ((2.5-cords[j])/MAX_POINTS);
            index-=3;
        }
        index+=3;
    }
}

function updatePositionsrainbowOutside() {
    var positions = new Array(7);

    for(var i =0 ;i<7 ; i++) {
        positions[i] = new Array(MAX_POINTS * 3);
        positions[i] = allLines2[i].geometry.attributes.position.array;
    }

    var x = [-1.43,-1.48,-1.53,-1.53,-1.55,-1.60,-1.65]; 
    var x2 = [6.6,6.5,6.4,6.3,6.2,6.1,6]; 
    var y = new Array(7);

    for(var i=0;i<7;i++){
        y[i] = cords[i]+0.5;
        x[i] = x[i] -0.05 ;
        x2[i] = x2[i] -1.37 ;
    } 

    var z = -2.5;
    var index = 0;

    for ( var i = 0, l = MAX_POINTS; i < l; i ++ ) {
        for(var j=0;j<7;j++){
            positions[j][ index ++ ] = x[j];
            positions[j][ index ++ ] = y[j];
            positions[j][ index ++ ] = z;

            x[j] += (x2[j]/MAX_POINTS);
            y[j] -= ((cords[j]-cords2[j] + 0.6)/MAX_POINTS);
            index-=3;
        }
        index+=3;
    }
}

function updatePositionsrainbowPrism2() {
    var positions = new Array(7);
    var x3 = new Array(7);

    for(var i =0 ;i<7 ; i++) {
        positions[i] = new Array(MAX_POINTS * 3);
        positions[i] = allLines3[i].geometry.attributes.position.array;
    }

    var x = [-1.43,-1.48,-1.53,-1.53,-1.55,-1.60,-1.65]; 
    var x2 = [6.6,6.5,6.4,6.3,6.2,6.1,6]; 
    var y = new Array(7);

    for(var i=0;i<7;i++){
        y[i] = cords2[i] -0.10;
        x3[i] = x2[i] + x[i] - 1.43;
    } 

    var z = -2.5;
    var index = 0;

    for ( var i = 0, l = MAX_POINTS; i < l; i ++ ) {
        for(var j=0;j<7;j++){
            positions[j][ index ++ ] = x3[j];
            positions[j][ index ++ ] = y[j];
            positions[j][ index ++ ] = z;

            x3[j] += ((7.5-x2[j]-x[j])/MAX_POINTS);
            y[j] += ((2.8-cords2[j])/MAX_POINTS);
            index-=3;
        }
        index+=3;
    }
}

/*This function is used to animate the final emerging ray*/
function updatePositionsfinal() {
    var positions = line2.geometry.attributes.position.array;

    var x = 6; 
    var y = 2.7; 
    var z = -2.5;
    var index = 0;

    for ( var i = 0, l = MAX_POINTS; i < l; i ++ ) {

        positions[ index ++ ] = x;
        positions[ index ++ ] = y;
        positions[ index ++ ] = z;

        x += (9/MAX_POINTS);
        y += (2.6/MAX_POINTS);
    }
}

function resetExperiment() {
    PIEscene.remove(line);
        PIEscene.remove(line2);
        for(var i =0 ;i<7;i++){
            PIEscene.remove(allLines[i]);
        }
        for(var i =0 ;i<7;i++){
            PIEscene.remove(allLines2[i]);
        }
        for(var i =0 ;i<7;i++){
            PIEscene.remove(allLines3[i]);
        }
        for(var i =0 ;i<4;i++){
            PIEscene.remove(randAllLines[i]);
        }
        PIEscene.remove(prism1);
        PIEscene.remove(prism2);
        addElementsToScene();
        startOrbitalControls();
        PIErender();
        PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

function updateExperimentElements(t, dt) {
    drawCount = ( drawCount + dt/8 ) ;

    if(drawCount < MAX_POINTS){
        line.geometry.setDrawRange( 0, drawCount );
        line.geometry.attributes.position.needsUpdate = true;
        for( var i =0 ;i < 4; i++){
            randAllLines[i].geometry.setDrawRange( 0, drawCount*2);
            randAllLines[i].geometry.attributes.position.needsUpdate = true;
        }
    }

    if(drawCount >= MAX_POINTS ){
        for( var i =0 ;i < 7; i++){
            allLines[i].geometry.setDrawRange( 0, (drawCount - MAX_POINTS) );
            allLines[i].geometry.attributes.position.needsUpdate = true;
        }
    }

    if(drawCount >= MAX_POINTS*2 ){
        for( var i =0 ;i < 7; i++){
            allLines2[i].geometry.setDrawRange( 0, drawCount - 2*MAX_POINTS );
            allLines2[i].geometry.attributes.position.needsUpdate = true;
        }
    }

    if(drawCount >= MAX_POINTS*3 ){
        for( var i =0 ;i < 7; i++){
            allLines3[i].geometry.setDrawRange( 0, drawCount - 3*MAX_POINTS );
            allLines3[i].geometry.attributes.position.needsUpdate = true;
        }
    }


    if(drawCount >= (4*MAX_POINTS) ){
        line2.geometry.setDrawRange( 0, drawCount - (4*MAX_POINTS)  );
        line2.geometry.attributes.position.needsUpdate = true;
    }
   
    if(drawCount >= 5*MAX_POINTS ){
        PIEscene.remove(line);
        PIEscene.remove(line2);
        for(var i =0 ;i<7;i++){
            PIEscene.remove(allLines[i]);
        }
        for(var i =0 ;i<7;i++){
            PIEscene.remove(allLines2[i]);
        }
        for(var i =0 ;i<7;i++){
            PIEscene.remove(allLines3[i]);
        }
        for(var i =0 ;i<4;i++){
            PIEscene.remove(randAllLines[i]);
        }
        PIEscene.remove(prism1);
        PIEscene.remove(prism2);   
        addElementsToScene();
    } 
    PIErender();
}

