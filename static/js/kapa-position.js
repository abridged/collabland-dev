// Wait for the widget to load
window.addEventListener('load', () => {
  // Function to move the widget
  const moveWidget = () => {
    const widget = document.querySelector('#kapa-widget-container, .kapa-widget-button, iframe[src*="kapa-widget"]');
    if (widget) {
      widget.style.bottom = '100px';
      widget.style.position = 'fixed';
      widget.style.zIndex = '9999';
    }
  };

  // Try immediately
  moveWidget();

  // Try again after a short delay to ensure widget is loaded
  setTimeout(moveWidget, 1000);
  
  // Keep trying every second for 5 seconds
  let attempts = 0;
  const interval = setInterval(() => {
    moveWidget();
    attempts++;
    if (attempts >= 5) {
      clearInterval(interval);
    }
  }, 1000);
}); 