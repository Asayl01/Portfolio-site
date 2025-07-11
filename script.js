    // Typing animation
    const texts = [
      "Software Developer", 
      "Interested in Web & IoT",
      "Cybersecurity Ethusiast",
      "Content Writer",
    ];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    (function type() {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      document.getElementById("dynamic-text").textContent = letter;
      if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500);
      } else {
        setTimeout(type, 150);
      }
    })();

    // Custom cursor
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll("a, .btn-cv, .social-link");
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover");
      });
      
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover");
      });
    });

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-fade-in, .animate-slide-up, .animate-fade-in-delayed, .animate-bounce-in").forEach(el => {
      observer.observe(el);
    });

    // Ripple effect for CV button
    document.querySelector(".btn-cv").addEventListener("click", function(e) {
      const ripple = this.querySelector(".btn-ripple");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple-active");
      
      setTimeout(() => {
        ripple.classList.remove("ripple-active");
      }, 600);
    });

