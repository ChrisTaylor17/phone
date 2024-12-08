document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('#desktop-view .item');
    const selectedItemDisplay = document.getElementById('selected-item');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const item = button.getAttribute('data-item');
        localStorage.setItem('selectedItem', item); // Save the selected item
        alert(`${item} selected! View details on your phone.`);
      });
    });
  
    // On mobile, display the selected item
    const mobileItem = localStorage.getItem('selectedItem');
    if (mobileItem) {
      selectedItemDisplay.textContent = mobileItem;
    }
  });
  