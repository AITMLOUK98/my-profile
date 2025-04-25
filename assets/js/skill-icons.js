document.addEventListener('DOMContentLoaded', function() {
  // Technology logos that might be missing in the skills folder
  const skillImages = document.querySelectorAll('.testimonial-item img');
  
  // Handle image loading errors and replace with colorful placeholder
  skillImages.forEach(img => {
    img.onerror = function() {
      // Get the technology name from the alt text
      const techName = this.alt || 'Tech';
      
      // Create a canvas element to generate a placeholder
      const canvas = document.createElement('canvas');
      canvas.width = 120;
      canvas.height = 120;
      const ctx = canvas.getContext('2d');
      
      // Create a colorful background based on the technology name
      const hue = Math.abs(techName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 360);
      ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add text with technology initial
      ctx.fillStyle = 'white';
      ctx.font = 'bold 60px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(techName.charAt(0).toUpperCase(), canvas.width / 2, canvas.height / 2);
      
      // Replace the broken image with the canvas data
      this.src = canvas.toDataURL('image/png');
    };
    
    // Initialize loading of the images
    if (img.complete) {
      if (!img.naturalWidth) {
        img.onerror();
      }
    }
  });
});
