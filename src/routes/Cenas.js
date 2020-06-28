import * as THREE from 'three';

const scenes = {
    scene1() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth - 200, window.innerHeight - 200);
        document.getElementById('canvas').appendChild(renderer.domElement);
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;
        var animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }

        animate();
    }, scene2() {
        let camera, scene, renderer;

        init();
        animate();

        function init() {
            camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
            camera.position.set(0, 5, 2);

            scene = new THREE.Scene();
            

            const geometry = new THREE.PlaneGeometry(.5, .5);
            const material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/loliWisky.jpg') });

            // generate some boxes in a column

            for (let i = 0; i <= 10; i++) {

                const mesh = new THREE.Mesh(geometry, material);
                mesh.position.y = i;
                scene.add(mesh);

            }

            // instantiate a loader
            // load a image resource
            // var img = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load( './textures/loliWisky.jpg' )});
            // img.map.needsUpdate = true; //ADDED
            // var plane = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), img);
            // plane.overdraw = true;
            // scene.add(plane);

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('canvas').appendChild(renderer.domElement);
            renderer.setClearColor(0x4169E1)
            window.addEventListener('wheel', onMouseWheel, false);
            window.addEventListener('resize', onWindowResize, false);

        }

        function animate() {

            requestAnimationFrame(animate);
            renderer.render(scene, camera);

        }

        function onMouseWheel(event) {

            event.preventDefault();

            
            camera.position.y -= event.deltaY * 0.005;
            console.log(camera.position.y );
            // prevent scrolling beyond a min/max value

            camera.position.clampScalar(0, 10);

        }

        function onWindowResize() {

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);

        }
    }
}


export default scenes;