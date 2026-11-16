(() => {
  const scene = document.getElementById("scene");
  const dome = document.getElementById("dome");
  let yaw = -18;
  let pitch = -9;
  let zoom = 1;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let velocityX = 0;
  let velocityY = 0;
  let lastTime = 0;
  let raf = 0;

  function render() {
    dome.style.transform =
      `rotateX(${pitch}deg) rotateY(${yaw}deg) scale(${zoom})`;
  }
  render();

  function pointerDown(event) {
    dragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
    lastTime = performance.now();
    velocityX = velocityY = 0;
    scene.classList.add("dragging");
    scene.setPointerCapture?.(event.pointerId);
    cancelAnimationFrame(raf);
  }

  function pointerMove(event) {
    if (!dragging) return;
    const now = performance.now();
    const dx = event.clientX - lastX;
    const dy = event.clientY - lastY;
    const dt = Math.max(1, now - lastTime);
    yaw += dx * 0.48;
    pitch = Math.max(-65, Math.min(65, pitch - dy * 0.38));
    velocityX = dx / dt * 16;
    velocityY = dy / dt * 12;
    lastX = event.clientX;
    lastY = event.clientY;
    lastTime = now;
    render();
  }

  function pointerUp() {
    if (!dragging) return;
    dragging = false;
    scene.classList.remove("dragging");
    coast();
  }

  function coast() {
    if (dragging) return;
    if (Math.abs(velocityX) < 0.015 && Math.abs(velocityY) < 0.015) return;
    yaw += velocityX;
    pitch = Math.max(-65, Math.min(65, pitch - velocityY));
    velocityX *= 0.94;
    velocityY *= 0.94;
    render();
    raf = requestAnimationFrame(coast);
  }

  scene.addEventListener("pointerdown", pointerDown);
  scene.addEventListener("pointermove", pointerMove);
  scene.addEventListener("pointerup", pointerUp);
  scene.addEventListener("pointercancel", pointerUp);
  scene.addEventListener("wheel", (event) => {
    event.preventDefault();
    zoom = Math.max(0.7, Math.min(1.45, zoom + (event.deltaY < 0 ? 0.06 : -0.06)));
    render();
  }, { passive: false });

  // Gentle idle drift when the dome is not being manipulated.
  let idle = 0;
  function animateIdle() {
    if (!dragging && Math.abs(velocityX) < 0.02 && Math.abs(velocityY) < 0.02) {
      idle += 0.025;
      yaw += 0.018;
      render();
    }
    requestAnimationFrame(animateIdle);
  }
  animateIdle();
})();
