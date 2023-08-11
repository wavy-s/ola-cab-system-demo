const driver_car = document.querySelector('.driver-car');
let position = { top: 0, left: 0 };

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp') {
    position.top = Math.max(0, position.top-0.5);
  } else if (event.key === 'ArrowDown') {
    position.top = Math.min(90, position.top+0.5);
  } else if (event.key === 'ArrowLeft') {
    position.left = Math.max(0, position.left-0.5);
  } else if (event.key === 'ArrowRight') {
    position.left = Math.min(90, position.left+0.5);
  }
  console.log(position);
  driver_car.style.left = `${position.left}%`;
  driver_car.style.top = `${position.top}%`;
  // socket.emit('move', position);
});

// socket.on('position', newPosition => {
//   position = newPosition;
//   box.style.transform = `translate(${position.x}px, ${position.y}px)`;
// });
