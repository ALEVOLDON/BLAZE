const fallingLeavesContainer = document.getElementById('falling-leaves');

function createLeaf() {
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');
  
  
  leaf.style.left = `${Math.random() * 100}vw`;
  leaf.style.animationDuration = `${Math.random() * 5 + 3}s`; 
  leaf.style.animationDelay = `${Math.random() * 3}s`; 
  
  fallingLeavesContainer.appendChild(leaf);
  

  setTimeout(() => {
    leaf.remove();
  }, 8000);
}


setInterval(createLeaf, 300);