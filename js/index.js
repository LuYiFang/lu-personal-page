if (!Detector.webgl) Detector.addGetWebGLMessage();

var container, stats;

var camera, scene, renderer;
var mouseX = 0, mouseY = 0;
distance = 300;
var textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = 'anonymous';
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

THREE.ImageUtils.crossOrigin = 'anonymous';

document.addEventListener('mousemove', onDocumentMouseMove, false);

init();
animate();

function init() {
  
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    container = document.getElementById('earth');

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 700;
    scene = new THREE.Scene();
    ambientLight = new THREE.AmbientLight( 0x222222 );
    scene.add( ambientLight );
    spotLight = new THREE.SpotLight( 0xffffff, 2.65 );
    spotLight.castShadow = true;
    spotLight.distance = 1100;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.position.set( -300, 600, 600 );

    scene.add( spotLight );

    var sphere = new THREE.SphereGeometry( 200, 100, 100 );
    var texture_earth = textureLoader.load('https://roky.rocks/THREEJS/bg-earth.jpg');
    texture_earth.anisotropy = renderer.getMaxAnisotropy();
    var material = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      specular: 0xbdbec5,
      shininess: 0,
      map: texture_earth,
    });
    earth = new THREE.Mesh( sphere,  material );
    earth.castShadow = true;
    scene.add(earth);
  
    var cloud_geometry = new THREE.SphereGeometry( 201, 100, 100 );
    var texture_clouds = textureLoader.load('https://roky.rocks/THREEJS/earth-clouds.png');
    texture_clouds.anisotropy = renderer.getMaxAnisotropy();
    var material_cluds = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: texture_clouds,
      transparent: true
    });

    clouds = new THREE.Mesh( cloud_geometry, material_cluds );
    scene.add(clouds);
  
    var glow_geometry = new THREE.SphereGeometry( 390, 100, 100 );
    var material_glow = new THREE.ShaderMaterial( 
	{
	    uniforms: 
		{ 
			"c":   { type: "f", value: 0.3 },
			"p":   { type: "f", value: 6 },
			glowColor: { type: "c", value: new THREE.Color(0x27d4ff) },
			viewVector: { type: "v3", value: camera.position }
		},
		vertexShader:   document.getElementById( 'vertexShader'   ).textContent,
		fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
		side: THREE.BackSide,
		blending: THREE.AdditiveBlending,
		transparent: true
	}   );

    glow = new THREE.Mesh( glow_geometry, material_glow );
    glow.position.x = 5;
    glow.position.y = -5;
    glow.position.z = -350;
    scene.add(glow);
  
    //Stars
    var particles, stars_geom, stars_materials;
    stars_geom = new THREE.Geometry();
    stars_materials = new THREE.PointsMaterial({color: 0xffffff});

    for ( i = 0; i < 4000; i ++ ) {
    var vertex = new THREE.Vector3();
    vertex.x = Math.random()*5000-1000;
    vertex.y = Math.random()*5000-1000;
    vertex.z = Math.random()*5000-1000;
    stars_geom.vertices.push( vertex );
    }

    particles = new THREE.Points( stars_geom, stars_materials );
    scene.add(particles);


    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
}


function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 2;
    mouseY = (event.clientY - windowHalfY) * 2;
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    /*camera.position.x += (mouseX - camera.position.x) * .05;
    camera.position.y += (-mouseY - camera.position.y) * .05;
    stats.update();*/
    earth.rotation.y += 0.001
    clouds.rotation.y += 0.0015
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}
