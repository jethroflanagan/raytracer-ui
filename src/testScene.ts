import { Color } from 'typescript-raytracer/Color';
import { LambertMaterial } from 'typescript-raytracer/material/LambertMaterial';
import { Camera } from 'typescript-raytracer/scene/Camera';
import { FlatBackground } from 'typescript-raytracer/scene/FlatBackground';
import { Scene } from 'typescript-raytracer/scene/Scene';
import { ColorTexture } from 'typescript-raytracer/texture/ColorTexture';
import { Vector3 } from 'typescript-raytracer/Vector';
import { Sphere } from 'typescript-raytracer/volume/Sphere';

export function create({ aspectRatio }) {
  const cameraOrigin = new Vector3(10, 6, -30);
  const cameraTarget = new Vector3(0, 0, 0);
  const focalDistance = cameraTarget.subtract(cameraOrigin).length();
  const camera: Camera = new Camera({
    origin: cameraOrigin,
    aspectRatio,
    verticalFOV: 30,
    lookAt: cameraTarget,
    // up: new Vector3(1, 0, 1),
    aperture: 0,//1,
    focalDistance,
    shutterOpenTime: 0,
  });

  const background = new FlatBackground();

  const sphere = new Sphere({
    center: new Vector3(-3, 3.5 / 2, -30),
    radius: 3.5,
    material: new LambertMaterial({ albedo: new ColorTexture(new Color(1, 1, 1)), reflectance: 1, fuzziness: 0 }),
  });


  const scene = new Scene();
  scene.addBackground(background);
  scene.setActiveCamera(camera);

  scene.addChild(sphere);

  return { scene, camera };
}
