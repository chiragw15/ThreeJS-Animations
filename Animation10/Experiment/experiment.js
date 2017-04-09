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
    helpContent = helpContent + "<h2>Dispersion of white light by a prism help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a prism and a thin beam of white light. </p>";
    helpContent = helpContent + "<p>When the beam of light is incident on a prism, the light splits into seven different colours because different colours have different angles of deflection. </p>";
    helpContent = helpContent + "<p>When the prism is rotated, the angle of dispersion varies accordingly.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>Click on start button to start the animation</p>";
    helpContent = helpContent + "<p>Click on pause button to pause the animation</p>";
    helpContent = helpContent + "<p>Click on Reset button to reset animation</p>";
    helpContent = helpContent + "<p>Click on >> button to increase speed of the animation</p>";
    helpContent = helpContent + "<p>Click on << button to decrease speed of the animation</p>";
    helpContent = helpContent + "<p>The prism can be rotated along z axis. Control angle of rotation using the slider.</p>";
    helpContent = helpContent + "<p>Select the color of incident ray from the Checkboxes in Control Panel.</p>";
    helpContent = helpContent + "<p>Click on start button and then drag to view a 360 degree view and scroll to zoom</p>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo() {
    infoContent =  "";
    infoContent = infoContent + "<h2>Dispersion of white light by a prism experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a prism and a thin beam of white light.</p>";
    infoContent = infoContent + "<p>When the beam of light is incident on a prism, the light splits into seven different colours because different colours have different angles of deflection. </p>";
    infoContent = infoContent + "<p>When the prism is rotated, the dispersion angle varies accordingly.</p>";
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
    colors = [0x8f00ff,0x4b0082,0x0000ff,0x00ff00,0xffff00,0xFF4500,0xff0000];
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
            color: colors[i], linewidth: 2
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
            color: colors[i], linewidth: 2
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


    updatePositionsRandincident();
    updatePositionsincident();
    updatePositionsrainbowPrism1();
    updatePositionsrainbowOutside();
}

var finalx,finaly;
var vector, vector2, vector3;
function findfinal(){
    prism1.updateMatrixWorld();
    vector = prism1.geometry.vertices[0].clone();
    vector.applyMatrix4( prism1.matrixWorld );
    console.log(vector.x + " " + vector.y + " " + vector.z);

    vector2 = prism1.geometry.vertices[1].clone();
    vector2.applyMatrix4( prism1.matrixWorld );
    console.log(vector2.x + " " + vector2.y + " " + vector2.z);

    vector3 = prism1.geometry.vertices[2].clone();
    vector3.applyMatrix4( prism1.matrixWorld );
    console.log(vector3.x + " " + vector3.y + " " + vector3.z);

    var k = (vector3.y - vector.y) / (vector3.x - vector.x);

    finaly = ( ( 13 + vector.x )*k - vector.y  ) / (4*k - 1);
    finalx = (4*finaly - 13);

    console.log("final x = " + finalx + " finaly = " + finaly);
}

var currentangle = 0;
var currentcolor = 0;
function setAngle(prismAngle){
    currentangle = prismAngle;
    prism1.rotation.z = prismAngle/180 * Math.PI;
    findfinal();

   if(currentcolor == 0){
        showWhite();
   } else if (currentcolor == 1){
        showRed();
   } else if (currentcolor == 2){
        showOrange();
   } else if (currentcolor == 3){
        showYellow();
   } else if (currentcolor == 4){
        showGreen();
   } else if (currentcolor == 5){
        showBlue();
   } else if (currentcolor == 6){
        showIndigo();
   } else if (currentcolor == 7){
        showViolet();
   }

}

function showWhite(){
    currentcolor = 0;
    lampBulb.material.color = new THREE.Color( 0xffffff );
    
    PIEscene.remove(line);

    for(var i =0 ;i<7;i++){
        PIEscene.remove(allLines[i]);
    }
    for(var i =0 ;i<7;i++){
        PIEscene.remove(allLines2[i]);
    }
    
    for(var i =0 ;i<4;i++){
        PIEscene.remove(randAllLines[i]);
    }
    
    addElementsToScene();

    for(var i=0 ; i<4 ; i++){
        randAllMaterials[i].color = new THREE.Color( 0xffffff );
    }

    line.material.color = new THREE.Color( 0xffffff );

    for( var i =0 ;i<7;i++){
        allLines[i].material.opacity= 1;
        allLines2[i].material.opacity= 1;
    }

    startOrbitalControls();
    PIErender();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

function showRed(){
    currentcolor = 1;
    lampBulb.material.color = new THREE.Color( colors[6] );
    
    PIEscene.remove(line);

    for(var i =0 ;i<7;i++){
        PIEscene.remove(allLines[i]);
    }
    for(var i =0 ;i<7;i++){
        PIEscene.remove(allLines2[i]);
    }
    
    for(var i =0 ;i<4;i++){
        PIEscene.remove(randAllLines[i]);
    }
    
    addElementsToScene();

    for(var i=0 ; i<4 ; i++){
        randAllMaterials[i].color = new THREE.Color( colors[6] );
    }

    line.material.color = new THREE.Color( colors[6] );

    for( var i =0 ;i<7;i++){
        if(i==6){
            allLines[i].material.opacity= 1;
            allLines2[i].material.opacity= 1;
        } else {
            allLines[i].material.transparent = true;
            allLines2[i].material.transparent = true;
            allLines[i].material.opacity= 0;
            allLines2[i].material.opacity= 0;
        }
    }

    startOrbitalControls();
    PIErender();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

function showOrange(){
    currentcolor = 2;
    lampBulb.material.color = new THREE.Color( colors[5] );
    
    PIEscene.remove(line);

    for(var i =0 ;i<7;i++){
        PIEscene.remove(allLines[i]);
    }
    for(var i =0 ;i<7;i++){
        PIEscene.remove(allLines2[i]);
    }
    
    for(var i =0 ;i<4;i++){
        PIEscene.remove(randAllLines[i]);
    }
    
    addElementsToScene();

    for(var i=0 ; i<4 ; i++){
        randAllMaterials[i].color = new THREE.Color( colors[5] );
    }

    line.material.color = new THREE.Color( colors[5] );

    for( var i =0 ;i<7;i++){
        if(i==5){
            allLines[i].material.opacity= 1;
            allLines2[i].material.opacity= 1;
        } else {
            allLines[i].material.transparent = true;
            allLines2[i].material.transparent = true;
            allLines[i].material.opacity= 0;
            allLines2[i].material.opacity= 0;
        }
    }

    startOrbitalControls();
    PIErender();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

function showYellow(){
    currentcolor = 3;
    lampBulb.material.color = new THREE.Color( colors[4] );
    
    PIEscene.remove(line);

    for(var i =0 ;i<7;i++){
        PIEscene.remove(allLines[i]);
    }
    for(var i =0 ;i<7;i++){
        PIEscene.remove(allLines2[i]);
    }
    
    for(var i =0 ;i<4;i++){
        PIEscene.remove(randAllLines[i]);
    }
    
    addElementsToScene();

    for(var i=0 ; i<4 ; i++){
        randAllMaterials[i].color = new THREE.Color( colors[4] );
    }

    line.material.color = new THREE.Color( colors[4] );

    for( var i =0 ;i<7;i++){
        if(i==4){
            allLines[i].material.opacity= 1;
            allLines2[i].material.opacity= 1;
        } else {
            allLines[i].material.transparent = true;
            allLines2[i].material.transparent = true;
            allLines[i].material.opacity= 0;
            allLines2[i].material.opacity= 0;
        }
    }
    startOrbitalControls();
    PIErender();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

function showGreen(){
    currentcolor = 4;
    lampBulb.material.color = new THREE.Color( colors[3] );
    
    PIEscene.remove(line);

    for(var i =0 ;i<7;i++){
        PIEscene.remove(allLines[i]);
    }
    for(var i =0 ;i<7;i++){
        PIEscene.remove(allLines2[i]);
    }
    
    for(var i =0 ;i<4;i++){
        PIEscene.remove(randAllLines[i]);
    }
    
    addElementsToScene();

    for(var i=0 ; i<4 ; i++){
        randAllMaterials[i].color = new THREE.Color( colors[3] );
    }

    line.material.color = new THREE.Color( colors[3] );

    for( var i =0 ;i<7;i++){
        if(i==3){
            allLines[i].material.opacity= 1;
            allLines2[i].material.opacity= 1;
        } else {
            allLines[i].material.transparent = true;
            allLines2[i].material.transparent = true;
            allLines[i].material.opacity= 0;
            allLines2[i].material.opacity= 0;
        }
    }
    startOrbitalControls();
    PIErender();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

function showBlue(){
    currentcolor = 5;
    lampBulb.material.color = new THREE.Color( colors[2] );
    
    PIEscene.remove(line);

    for(var i =0 ;i<7;i++){
        PIEscene.remove(allLines[i]);
    }
    for(var i =0 ;i<7;i++){
        PIEscene.remove(allLines2[i]);
    }
    
    for(var i =0 ;i<4;i++){
        PIEscene.remove(randAllLines[i]);
    }
    
    addElementsToScene();

    for(var i=0 ; i<4 ; i++){
        randAllMaterials[i].color = new THREE.Color( colors[2] );
    }

    line.material.color = new THREE.Color( colors[2] );

    for( var i =0 ;i<7;i++){
        if(i==2){
            allLines[i].material.opacity= 1;
            allLines2[i].material.opacity= 1;
        } else {
            allLines[i].material.transparent = true;
            allLines2[i].material.transparent = true;
            allLines[i].material.opacity= 0;
            allLines2[i].material.opacity= 0;
        }
    }
    startOrbitalControls();
    PIErender();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

function showIndigo(){
    currentcolor = 6;
    lampBulb.material.color = new THREE.Color( colors[1] );
    
    PIEscene.remove(line);

    for(var i =0 ;i<7;i++){
        PIEscene.remove(allLines[i]);
    }
    for(var i =0 ;i<7;i++){
        PIEscene.remove(allLines2[i]);
    }
    
    for(var i =0 ;i<4;i++){
        PIEscene.remove(randAllLines[i]);
    }
    
    addElementsToScene();

    for(var i=0 ; i<4 ; i++){
        randAllMaterials[i].color = new THREE.Color( colors[1] );
    }

    line.material.color = new THREE.Color( colors[1] );

    for( var i =0 ;i<7;i++){
        if(i==1){
            allLines[i].material.opacity= 1;
            allLines2[i].material.opacity= 1;
        } else {
            allLines[i].material.transparent = true;
            allLines2[i].material.transparent = true;
            allLines[i].material.opacity= 0;
            allLines2[i].material.opacity= 0;
        }
    }
    startOrbitalControls();
    PIErender();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

function showViolet(){
    currentcolor = 7;
    lampBulb.material.color = new THREE.Color( colors[0] );

    PIEscene.remove(line);

    for(var i =0 ;i<7;i++){
        PIEscene.remove(allLines[i]);
    }
    for(var i =0 ;i<7;i++){
        PIEscene.remove(allLines2[i]);
    }
    
    for(var i =0 ;i<4;i++){
        PIEscene.remove(randAllLines[i]);
    }
    
    addElementsToScene();

    for(var i=0 ; i<4 ; i++){
        randAllMaterials[i].color = new THREE.Color( colors[0] );
    }

    line.material.color = new THREE.Color( colors[0] );

    for( var i =0 ;i<7;i++){
        if(i==0){
            allLines[i].material.opacity= 1;
            allLines2[i].material.opacity= 1;
        } else {
            allLines[i].material.transparent = true;
            allLines2[i].material.transparent = true;
            allLines[i].material.opacity= 0;
            allLines2[i].material.opacity= 0;
        }
    }
    startOrbitalControls();
    PIErender();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

var colorRay = ["White" , "Red" , "Orange" , "Yellow" , "Green" , "Blue" , "Indigo" , "Violet"];

function checkWhite(){
    for(var i=0 ; i<8; i++){
        if(i != 0){
            PIEchangeInputCheckbox(colorRay[i], false);
        }
    }
    PIEchangeInputCheckbox(colorRay[0], true);
    showWhite();
}

function checkRed(){
    for(var i=0 ; i<8; i++){
        if(i != 1){
            PIEchangeInputCheckbox(colorRay[i], false);
        }
    }
    PIEchangeInputCheckbox(colorRay[1], true);
    showRed();
}

function checkOrange(){
    for(var i=0 ; i<8; i++){
        if(i != 2){
            PIEchangeInputCheckbox(colorRay[i], false);
        }
    }
    PIEchangeInputCheckbox(colorRay[2], true);
    showOrange();
}

function checkYellow(){
    for(var i=0 ; i<8; i++){
        if(i != 3){
            PIEchangeInputCheckbox(colorRay[i], false);
        }
    }
    PIEchangeInputCheckbox(colorRay[3], true);
    showYellow();
}

function checkGreen(){
    for(var i=0 ; i<8; i++){
        if(i != 4){
            PIEchangeInputCheckbox(colorRay[i], false);
        }
    }
    PIEchangeInputCheckbox(colorRay[4], true);
    showGreen();
}

function checkBlue(){
    for(var i=0 ; i<8; i++){
        if(i != 5){
            PIEchangeInputCheckbox(colorRay[i], false);
        }
    }
    PIEchangeInputCheckbox(colorRay[5], true);
    showBlue();
}

function checkIndigo(){
    for(var i=0 ; i<8; i++){
        if(i != 6){
            PIEchangeInputCheckbox(colorRay[i], false);
        }
    }
    PIEchangeInputCheckbox(colorRay[6], true);
    showIndigo();
}

function checkViolet(){
    for(var i=0 ; i<8; i++){
        if(i != 7){
            PIEchangeInputCheckbox(colorRay[i], false);
        }
    }
    PIEchangeInputCheckbox(colorRay[7], true);
    showViolet();
}

var lampBulbGeom;
function loadExperimentElements() {
    
    PIEsetExperimentTitle("Dispersion of white light through a prism");
    PIEsetDeveloperName("Chirag Wadhera");

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    initialiseScene();          

    /* Adding both prism and all rays to the scene*/

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
    var A = new THREE.Vector2( -3, 0 );
    var B = new THREE.Vector2( 3, 0 );
    var C = new THREE.Vector2( 0, -5.19 );

    //height of first prism 
    var height1 = 5;           

    //geometry for prism prism        
    var geometry1 = new PrismGeometry( [ A, B, C ], height1 ); 

    var material1 = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0xffffff, shininess: 20, transparent: true, opacity: 0.5 } );

    prism1 = new THREE.Mesh( geometry1, material1 );
    prism1.rotation.x = -Math.PI ;
    PIEaddElement( prism1 );

    /*-----------------First Prism ends----------*/    

    /*----------------Lamp starts-----------------*/

    var lampBottomGeom = new THREE.CylinderGeometry(0.5, 0.5, 1, 12);
    var lampBottom = new THREE.Mesh(lampBottomGeom, new THREE.MeshPhongMaterial({color: "grey", shininess: 0}));
    lampBottom.position.set(-14, -1.5, -2.5);
    PIEaddElement(lampBottom);

    lampBulbGeom = new THREE.SphereGeometry(1.3, 32, 24);
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
    squareMesh.position.set(4.5, 0.0, 4.0); 
    PIEaddElement(squareMesh); 

    /*----------------Screen ends-----------------*/

var squareGeometry3 = new THREE.Geometry(); 
    squareGeometry3.vertices.push(new THREE.Vector3(-13,  10, -11)); 
    squareGeometry3.vertices.push(new THREE.Vector3(-13,  10, -1)); 
    squareGeometry3.vertices.push(new THREE.Vector3(-13,  -2, -1)); 
    squareGeometry3.vertices.push(new THREE.Vector3(-13,  -2, -11)); 
    squareGeometry3.faces.push(new THREE.Face3(0, 1, 2)); 
    squareGeometry3.faces.push(new THREE.Face3(0, 2, 3)); 
   
    var squareMaterial3 = new THREE.MeshBasicMaterial({ 
        color:0x3d1600, 
        side:THREE.DoubleSide 
    }); 
    
    var squareMesh3 = new THREE.Mesh(squareGeometry3, squareMaterial3); 
    squareMesh3.position.set(21, -2.0, 4.0); 
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
    squareMesh2.position.set(4.5, 0.3, 4.0); 
    PIEaddElement(squareMesh2); 

    /*----------------Hole ends-----------------*/
    findfinal();
    addElementsToScene();
    PIEaddInputSlider("Angle", 0, setAngle, -30, 30, 1);

    PIEaddInputCheckbox("White", true, checkWhite);
    PIEaddInputCheckbox("Red", false, checkRed);
    PIEaddInputCheckbox("Orange", false, checkOrange);
    PIEaddInputCheckbox("Yellow", false, checkYellow);
    PIEaddInputCheckbox("Green", false, checkGreen);
    PIEaddInputCheckbox("Blue", false, checkBlue);
    PIEaddInputCheckbox("Indigo", false, checkIndigo);
    PIEaddInputCheckbox("Violet", false, checkViolet);
    
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

    var x = [-13,-13,-13,-13];  
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

    var x = -13;
    var y = 0; 
    var z = -2.5;
    var index = 0;
    console.log("chirag " + finalx + " " + finaly )
    for ( var i = 0, l = MAX_POINTS; i < l; i ++ ) {

        positions[ index ++ ] = x;
        positions[ index ++ ] = y;
        positions[ index ++ ] = z;

        x += ((finalx + 13.04) /MAX_POINTS);
        y += (finaly /MAX_POINTS);
    }
}

 var finalprismx = new Array(7);
 var finalprismy = new Array(7);

function findfinalprism(){
    var m = [-1.43 + 4.30 + finalx,-1.48 + 4.30 + finalx,-1.53 + 4.30 + finalx,-1.53 + 4.30 + finalx,-1.55 + 4.30 + finalx,-1.60 + 4.30 + finalx,-1.65 + 4.30 + finalx];
    var n = new Array(7);
    for( var i =0 ;i <7;i++){
        n[i] = (-2.5+cords[i]+finaly);
    }

   

    for( var i = 0;i<7;i++){
        var k1 = (n[i] - finaly) / (m[i] - finalx);
        var k2 = (vector2.y - vector3.y) / (vector2.x - vector3.x);
        finalprismx[i] = (vector3.y - finaly + k1*finalx - k2*vector3.x) / (k1-k2);
        finalprismy[i] = k1*(finalprismx[i] - finalx ) + finaly;
        console.log("finalprismx["+i+"] = " + finalprismx[i]);
        console.log("finalprismy["+i+"] = " + finalprismy[i]);
    }
}

/*This function is used to animate all the VIBGYOR rays*/
function updatePositionsrainbowPrism1() {
    var positions = new Array(7);

    for(var i =0 ;i<7 ; i++) {
        positions[i] = new Array(MAX_POINTS * 3);
        positions[i] = allLines[i].geometry.attributes.position.array;
    }

    var x = [finalx,finalx,finalx,finalx,finalx,finalx,finalx]; 
    var x2 = [-1.43,-1.48,-1.53,-1.53,-1.55,-1.60,-1.65]; 
    var y = [finaly,finaly,finaly,finaly,finaly,finaly,finaly]; 
    var z = -2.5;
    var index = 0;
    for(var i = 0;i<7;i++){
        x[i]-=0.02;
    }
    findfinalprism();
    for ( var i = 0, l = MAX_POINTS; i < l; i ++ ) {
        for(var j=0;j<7;j++){
            positions[j][ index ++ ] = x[j];
            positions[j][ index ++ ] = y[j];
            positions[j][ index ++ ] = z;

            x[j] += (((finalprismx[j])-finalx)/MAX_POINTS);
            y[j] -= ((finaly-(finalprismy[j]))/MAX_POINTS);
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

    var x = [1.65,1.60,1.55,1.53,1.51,1.48,1.43]; 
    var x2 = [6.6,6.5,6.4,6.3,6.2,6.1,6]; 
    var y = new Array(7);

    for(var i=0;i<7;i++){
        y[i] = finalprismy[i];
        x[i] = finalprismx[i] - 0.05 ;
        x2[i] = x2[i]  ;
    } 

    var z = -2.5;
    var index = 0;

    for ( var i = 0, l = MAX_POINTS; i < l; i ++ ) {
        for(var j=0;j<7;j++){
            positions[j][ index ++ ] = x[j];
            positions[j][ index ++ ] = y[j];
            positions[j][ index ++ ] = z;

            x[j] += ((8-finalprismx[j])/MAX_POINTS);
            y[j] -= ((finalprismy[j]-cords2[j] + 0.6)/MAX_POINTS);
            index-=3;
        }
        index+=3;
    }
}

function resetExperiment() {
    PIEscene.remove(line);
    
        for(var i =0 ;i<7;i++){
            PIEscene.remove(allLines[i]);
        }
        for(var i =0 ;i<7;i++){
            PIEscene.remove(allLines2[i]);
        }
        
        for(var i =0 ;i<4;i++){
            PIEscene.remove(randAllLines[i]);
        }
        setAngle(0);
        PIEchangeInputSlider("Angle", 0);
        addElementsToScene();
        checkWhite();
        startOrbitalControls();
        PIErender();
        PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

var offset = 0;
function updateExperimentElements(t, dt) {
    drawCount = ( drawCount + dt/8 ) ;

    if(offset == 1) {
        line.geometry.setDrawRange( 0, drawCount );
        line.geometry.attributes.position.needsUpdate = true;

        for( var i =0 ;i < 7; i++){
            allLines[i].geometry.setDrawRange( 0, (drawCount) );
            allLines[i].geometry.attributes.position.needsUpdate = true;
        }

        for( var i =0 ;i < 7; i++){
            allLines2[i].geometry.setDrawRange( 0, drawCount);
            allLines2[i].geometry.attributes.position.needsUpdate = true;
        }
        offset = 0;
    }

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

    if(drawCount >= 3*MAX_POINTS ){
        /*PIEscene.remove(line);
        for(var i =0 ;i<7;i++){
            PIEscene.remove(allLines[i]);
        }
        for(var i =0 ;i<7;i++){
            PIEscene.remove(allLines2[i]);
        }
        
        for(var i =0 ;i<4;i++){
            PIEscene.remove(randAllLines[i]);
        }
        */
        offset = 1;
        PIEstopAnimation();
        drawCount = 0;
        //addElementsToScene();
        //PIEscene.remove(prism1);   
        //addElementsToScene();
        //resetExperiment();
    } 
    PIErender();
}

