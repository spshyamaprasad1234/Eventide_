 // Smooth scroll polyfill for older browsers
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });


 
 
  document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".image-carousel");

    carousels.forEach((carousel) => {
      const images = carousel.querySelectorAll("img");
      let currentIndex = 0;

      setInterval(() => {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
      }, 3000);
    });
  });




const figure = document.querySelector(".carousel figure");
        const imageContainers = figure.querySelectorAll(".image-container");
        const totalImages = imageContainers.length;
        const angle = 360 / totalImages;
        
        // Control buttons
        const stopBtn = document.getElementById('stopBtn');
        const playBtn = document.getElementById('playBtn');
        let isPlaying = true;
        
        // Increase translateZ distance so back images remain visible and clickable
        const radius = 600; // Increased from 450px
        
        // Arrange images in a circular layout
        imageContainers.forEach((container, i) => {
            container.style.transform = `rotateY(${i * angle}deg) translateZ(${radius}px)`;
        });

        // Stop/Play button functionality
        stopBtn.addEventListener('click', () => {
            figure.style.animationPlayState = 'paused';
            stopBtn.style.display = 'none';
            playBtn.style.display = 'inline-block';
            isPlaying = false;
        });

        playBtn.addEventListener('click', () => {
            figure.style.animationPlayState = 'running';
            playBtn.style.display = 'none';
            stopBtn.style.display = 'inline-block';
            isPlaying = true;
        });

        // Pause rotation on click, then rotate to clicked image
        let currentIndex = 0;
        imageContainers.forEach((container, i) => {
            container.addEventListener("click", () => {
                figure.style.animation = "none"; // Stop auto-rotation
                currentIndex = i;
                figure.style.transform = `rotateY(-${currentIndex * angle}deg)`;
                
                // Update button states
                stopBtn.style.display = 'none';
                playBtn.style.display = 'inline-block';
                isPlaying = false;
                
                // Add visual feedback
                imageContainers.forEach(cont => cont.style.opacity = "0.7");
                container.style.opacity = "1";
                
                // Resume animation after 3 seconds only if it was playing before
                setTimeout(() => {
                    if (!isPlaying) {
                        figure.style.animation = "rotateGallery 50s infinite linear";
                        stopBtn.style.display = 'inline-block';
                        playBtn.style.display = 'none';
                        isPlaying = true;
                    }
                    imageContainers.forEach(cont => cont.style.opacity = "1");
                }, 3000);
            });
        });

const form = document.getElementById("contactForm");
  const output = document.getElementById("outputMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      output.innerHTML = `
        <p>✅ Thank you, <strong>${name}</strong>!</p>
        <p>📧 Email: ${email}</p>
        <p>💬 Message: ${message}</p>
      `;
      form.reset();
    } else {
      output.textContent = "❗Please fill out all fields.";
    }
  });
  
  