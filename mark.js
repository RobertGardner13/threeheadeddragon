// script.js

// Function to change the color of the block from blue to red and vice versa
function changeColor() {
    var block = document.getElementById('colorBlock');
    var currentColor = block.style.backgroundColor;
  
    // If the current color is blue, change it to red; otherwise, change it to blue
    if (currentColor === 'blue' || currentColor === '') {
      block.style.backgroundColor = 'red';
        // 1s_h3??????}
    } else {
      block.style.backgroundColor = 'blue';
    }
  }

 