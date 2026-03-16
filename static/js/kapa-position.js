window.addEventListener('load', () => {
  const moveWidget = () => {
    const root = document.querySelector('#kapa-widget-root') || document.querySelector('div[id^="kapa-widget"]');
    const button = root?.shadowRoot?.querySelector('button') || document.querySelector('#kapa-widget-container, .mantine-focus-auto');
    if (button) {
      button.style.setProperty('bottom', '80px', 'important');
      button.style.setProperty('position', 'fixed', 'important');
    }
  };

  setInterval(moveWidget, 1000);
});