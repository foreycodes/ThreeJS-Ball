import * as THREE from 'three'; 

// Set up the scene
const scene = new THREE.Scene(); 

// Create the sphere
                                    // radius, segments
const geometry = new THREE.SphereGeometry (3, 64, 64)
const material = new THREE.MeshStandardMaterial({
  color: "#00ff83",
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Camera
                                      // FOV, aspect ratio
const camera = new THREE.PerspectiveCamera(45, 800, 600)
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl'); 
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(800, 600)
renderer.render(scene, camera)