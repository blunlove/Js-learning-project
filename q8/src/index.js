import './assets/style/base.less';

const Scene = () => {
    return new THREE.Scene();
}

const Cube = (x, y, z) => {
    let geometry = new THREE.CubeGeometry(1, 1, 1);
    let material = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF
    });
    let cube = new THREE.Mesh(geometry, material);
    cube.position.set(x, y, z);
    return cube;
}

const Camera = () => {
    let camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(20, 40, 16);
    // camera.lookAt(new THREE.Vector3(0, 0, 0));
    return camera;
}

const DirectionalLight = (color, x, y, z) => {
    let light = new THREE.DirectionalLight(color, 1.0);
    light.position.set(x, y, z);
    return light;
}

const Renderer = () => {
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    // renderer.shadowMapEnabled = true;
    renderer.setClearColor(0xFFFFFF, 1.0);
    return renderer;
}

const createStats = () => {
    let stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    return stats;
}

let scene = Scene();
let cube = [
    Cube(0, 0, 0),
    Cube(-4, 0, 0),
    Cube(0, -2, 0),
    Cube(0, 2, 0),
    Cube(4, 0, 0),
    Cube(0, 0, -2),
]
for (let key in cube) {
    scene.add(cube[key]);
}
let light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
light.position.set(100, 100, 100);
scene.add(light);
// scene.add(DirectionalLight('red', 0, 0, 1));
// scene.add(DirectionalLight('green', 1, 0, 0));
// scene.add(DirectionalLight('blue', 0, 1, 0));
// scene.add(DirectionalLight('yellow', 0, 0, -1));
// scene.add(DirectionalLight('#00e4ff', -1, 0, 0));
// scene.add(DirectionalLight('#b400ff', 0, -1, 0));

let helper = new THREE.GridHelper(800, 100);
scene.add(helper);

let camera = Camera();

let manager = new THREE.LoadingManager();
manager.onProgress = function (item, loaded, total) {
    console.log(item, loaded, total);
};
let onProgress = function (xhr) {
    if (xhr.lengthComputable) {
        let percentComplete = xhr.loaded / xhr.total * 100;
        console.log(Math.round(percentComplete, 2) + '% downloaded');
    }
};
let onError = function (xhr) {
    console.error(xhr);
};
let mixers = [];
let clock = new THREE.Clock();
let loader = new THREE.FBXLoader(manager);
let obj;
loader.load('./src/models/kule.fbx', function (object) {
    obj = object;
    obj.mixer = new THREE.AnimationMixer(obj);
    mixers.push(obj.mixer);
    var action = obj.mixer.clipAction(obj.animations[0]);
    action.play();
    obj.scale.multiplyScalar(.5);
    // obj.position.set(4,5,2);
    scene.add(obj);
}, onProgress, onError);

let renderer = Renderer();

let stats = createStats();

let controls = new THREE.OrbitControls(camera);
// controls.autoRotate = false;

setInterval(() => {
    for (let key in cube) {
        cube[key].rotation.x += 0.001 * (key + 1);
        cube[key].rotation.y += 0.001 * (key + 1);
    }
    // obj.rotation.x += 0.01;
    // obj.rotation.y += 0.01;
    if (mixers.length > 0) {
        for (let i = 0; i < mixers.length; i++) {
            mixers[i].update(clock.getDelta());
        }
    }
    renderer.clear();
    renderer.render(scene, camera);
    stats.update();
}, 1000 / 60);