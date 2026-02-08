// Particle Network Background Effect
// Save as: assets/js/particle-network.js

(function() {
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-network';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  `;
  document.body.insertBefore(canvas, document.body.firstChild);

  // Sidebar exclusion - Chirpy sidebar width is 260px by default
  const sidebarWidth = 260;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 150 };
  
  // Configuration
  const config = {
    particleCount: 80,
    particleSize: 3,
    lineDistance: 150,
    lineWidth: 0.8,
    particleSpeed: 0.3,
    mouseForce: 2,
    breakDistance: 80,
    reconnectTime: 3000,
    // Colors - adjust to match your site's theme
    particleColor: 'rgba(255, 255, 255, 0.8)',
    lineColor: 'rgba(255, 255, 255, 0.3)',
    glowColor: 'rgba(255, 255, 255, 0.5)'
  };

  class Particle {
    constructor() {
      this.reset();
      this.x = sidebarWidth + Math.random() * (width - sidebarWidth);
      this.y = Math.random() * height;
      this.brokenConnections = new Set();
    }

    reset() {
      // Spawn particles only in the allowed area (right of sidebar)
      this.x = sidebarWidth + Math.random() * (width - sidebarWidth);
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * config.particleSpeed;
      this.vy = (Math.random() - 0.5) * config.particleSpeed;
      this.size = Math.random() * config.particleSize + 1;
      this.baseSize = this.size;
    }

    update() {
      // Apply mouse force
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle) * force * 0.5;
          this.vy += Math.sin(angle) * force * 0.5;
        }
      }

      // Apply friction
      this.vx *= 0.99;
      this.vy *= 0.99;

      // Ensure minimum velocity
      const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (speed < config.particleSpeed * 0.5) {
        this.vx += (Math.random() - 0.5) * 0.1;
        this.vy += (Math.random() - 0.5) * 0.1;
      }

      this.x += this.vx;
      this.y += this.vy;

      // Wrap around edges (but keep out of sidebar area)
      if (this.x < sidebarWidth) this.x = width;
      if (this.x > width) this.x = sidebarWidth;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = config.particleColor;
      ctx.fill();
      
      // Glow effect
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.size * 2
      );
      gradient.addColorStop(0, config.glowColor);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    breakConnection(otherIndex) {
      this.brokenConnections.add(otherIndex);
      setTimeout(() => {
        this.brokenConnections.delete(otherIndex);
      }, config.reconnectTime);
    }
  }

  function init() {
    resize();
    particles = [];
    for (let i = 0; i < config.particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        
        // Skip if connection is broken
        if (p1.brokenConnections.has(j) || p2.brokenConnections.has(i)) {
          continue;
        }

        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < config.lineDistance) {
          // Check if mouse is near this connection (for breaking)
          if (mouse.x !== null && mouse.y !== null) {
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;
            const mouseDist = Math.sqrt(
              (mouse.x - midX) ** 2 + (mouse.y - midY) ** 2
            );
            
            if (mouseDist < config.breakDistance) {
              // Break the connection and apply force
              p1.breakConnection(j);
              p2.breakConnection(i);
              
              // Apply explosive force
              const angle1 = Math.atan2(p1.y - mouse.y, p1.x - mouse.x);
              const angle2 = Math.atan2(p2.y - mouse.y, p2.x - mouse.x);
              p1.vx += Math.cos(angle1) * config.mouseForce;
              p1.vy += Math.sin(angle1) * config.mouseForce;
              p2.vx += Math.cos(angle2) * config.mouseForce;
              p2.vy += Math.sin(angle2) * config.mouseForce;
              continue;
            }
          }

          const opacity = 1 - (dist / config.lineDistance);
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(100, 180, 255, ${opacity * 0.5})`;
          ctx.lineWidth = config.lineWidth;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    // Clear only the area outside the sidebar
    ctx.clearRect(sidebarWidth, 0, width - sidebarWidth, height);
    
    drawConnections();
    
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  // Event Listeners
  window.addEventListener('resize', () => {
    resize();
  });

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  document.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Enable pointer events on canvas for interaction
  canvas.style.pointerEvents = 'auto';

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      init();
      animate();
    });
  } else {
    init();
    animate();
  }
})();
