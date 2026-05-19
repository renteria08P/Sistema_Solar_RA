import * as BABYLON from "@babylonjs/core";

// gravedad universal simulada
const G = 0.00001;

export function applyGravity(body1, body2) {
  // no aplicar gravedad mientras arrastra
  if (body1.isDragging) return;

  // dirección hacia el cuerpo atractivo
  const direction = body2.mesh.position.subtract(body1.mesh.position);

  // distancia entre cuerpos
  const distance = direction.length();

  // evitar explosiones físicas
  if (distance < 1) return;

  // dirección normalizada
  const normalizedDirection = direction.normalize();

  // ley gravitacional
  const forceMagnitude = (G * body1.mass * body2.mass) / (distance * distance);

  // aceleración
  const acceleration = normalizedDirection.scale(forceMagnitude / body1.mass);

  // aplicar velocidad
  body1.velocity.addInPlace(acceleration);
}
