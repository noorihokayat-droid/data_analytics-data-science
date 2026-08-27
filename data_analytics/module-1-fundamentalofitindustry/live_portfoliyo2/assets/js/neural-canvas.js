/**
 * Neural Network Canvas Renderer
 * Interactive particle background for Hero section
 */

class NeuralCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.numParticles = 45;
    this.maxDistance = 140;
    this.mouse = { x: null, y: null, radius: 150 };

    this.init();
    this.animate();
    this.addEventListeners();
  }

  init() {
    this.resize();
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1.5,
        color: i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#a855f7' : '#34d399'
      });
    }
  }

  resize() {
    if (!this.canvas.parentElement) return;
    this.canvas.width = this.canvas.parentElement.clientWidth;
    this.canvas.height = this.canvas.parentElement.clientHeight || 500;
  }

  addEventListeners() {
    window.addEventListener('resize', () => this.resize());
    
    this.canvas.parentElement.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });

    this.canvas.parentElement.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update and draw particles
    for (let i = 0; i < this.particles.length; i++) {
      let p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;

      // Bounce on edges
      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

      // Mouse interactivity
      if (this.mouse.x !== null && this.mouse.y !== null) {
        let dx = this.mouse.x - p.x;
        let dy = this.mouse.y - p.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.mouse.radius) {
          let force = (this.mouse.radius - dist) / this.mouse.radius;
          p.x -= (dx / dist) * force * 2;
          p.y -= (dy / dist) * force * 2;
        }
      }

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = p.color;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;

      // Connect particles
      for (let j = i + 1; j < this.particles.length; j++) {
        let p2 = this.particles[j];
        let dx = p.x - p2.x;
        let dy = p.y - p2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.maxDistance) {
          let alpha = 1 - dist / this.maxDistance;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(34, 211, 238, ${alpha * 0.25})`;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new NeuralCanvas('hero-neural-canvas');
});
