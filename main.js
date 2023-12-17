// Handle mouse movement over card elements
const handleOnMouseMove = e => {
  const { currentTarget: target } = e;
  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left, // Calculate mouse X position
    y = e.clientY - rect.top;  // Calculate mouse Y position

  // Set CSS variables for mouse positions
  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
}

// Assign mouse move handler to each card
for (const card of document.querySelectorAll(".card")) {
  card.onmousemove = handleOnMouseMove;
}

// Handle mouse movement on parent container 'cards'
document.getElementById("cards").onmousemove = e => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left, // Mouse X position
      y = e.clientY - rect.top;  // Mouse Y position

    // Update mouse position variables for each card
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}