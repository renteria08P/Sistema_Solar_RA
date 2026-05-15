export function applyGravity(body1, body2) {
  const direction = body2.mesh.position.subtract(body1.mesh.position);

  const distance = direction.length();

  if (distance < 1) return;

  const forceMagnitude = (body1.mass * body2.mass) / (distance * distance);

  const force = direction.normalize().scale(forceMagnitude * 0.001);

  body1.velocity.addInPlace(force.scale(1 / body1.mass));
}
