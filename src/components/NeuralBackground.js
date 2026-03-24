import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const AI_TERMS = [
  "Neural Network", "Deep Learning", "Transformer", "GPT", "LLM",
  "Backpropagation", "Gradient Descent", "CNN", "RNN", "LSTM",
  "Attention", "Diffusion", "GAN", "Reinforcement Learning", "NLP",
  "Computer Vision", "RAG", "Fine-Tuning", "Embedding", "Tokenizer",
  "PyTorch", "TensorFlow", "Softmax", "Dropout", "Batch Norm",
  "Feature Extraction", "Clustering", "Regression", "Classification",
  "Random Forest", "XGBoost", "Data Pipeline", "MLOps", "Vector DB",
  "Prompt Engineering", "Agent", "Multi-Modal", "BERT", "LoRA",
];

export default function NeuralBackground() {
  const canvasRef = useRef(null);
  const { darkMode } = useTheme();
  const animationRef = useRef(null);
  const nodesRef = useRef([]);
  const wordsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (nodesRef.current.length === 0) init();
    };

    const NODE_COUNT = Math.min(Math.floor((width * height) / 18000), 80);
    const CONNECTION_DIST = 200;
    const WORD_COUNT = 20;

    function init() {
      const nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 2.5,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
      nodesRef.current = nodes;

      const words = [];
      const shuffled = [...AI_TERMS].sort(() => Math.random() - 0.5);
      for (let i = 0; i < WORD_COUNT; i++) {
        words.push(createWord(shuffled[i % shuffled.length]));
      }
      wordsRef.current = words;
    }

    function createWord(text) {
      return {
        text: text || AI_TERMS[Math.floor(Math.random() * AI_TERMS.length)],
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.15,
        fontSize: Math.random() * 10 + 18,
        opacity: Math.random() * 0.16 + 0.08,
        phase: Math.random() * Math.PI * 2,
      };
    }

    resize();
    window.addEventListener("resize", resize);

    let time = 0;
    function animate() {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      const words = wordsRef.current;
      const isDark = darkMode;

      // Colors — opaque enough to actually see
      const nodeRGB = isDark ? "96, 165, 250" : "30, 64, 175";
      const lineRGB = isDark ? "96, 165, 250" : "37, 99, 235";
      const pulseRGB = isDark ? "167, 139, 250" : "67, 56, 202";
      const wordRGB = isDark ? "147, 197, 253" : "30, 58, 138";

      // ---------- Floating AI terms ----------
      for (const w of words) {
        w.x += w.vx;
        w.y += w.vy;
        w.phase += 0.005;

        if (w.x < -120) w.x = width + 60;
        if (w.x > width + 120) w.x = -60;
        if (w.y < -40) w.y = height + 20;
        if (w.y > height + 40) w.y = -20;

        const alpha = w.opacity + Math.sin(w.phase) * 0.03;
        ctx.font = `600 ${w.fontSize}px "Inter", "Segoe UI", sans-serif`;
        ctx.fillStyle = `rgba(${wordRGB}, ${alpha})`;
        ctx.fillText(w.text, w.x, w.y);
      }

      // ---------- Update nodes ----------
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0) node.vx = Math.abs(node.vx);
        if (node.x > width) node.vx = -Math.abs(node.vx);
        if (node.y < 0) node.vy = Math.abs(node.vy);
        if (node.y > height) node.vy = -Math.abs(node.vy);
        node.pulsePhase += 0.025;
      }

      // ---------- Draw connections ----------
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const ratio = 1 - dist / CONNECTION_DIST;
            const opacity = ratio * (isDark ? 0.35 : 0.25);

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${lineRGB}, ${opacity})`;
            ctx.lineWidth = ratio * 1.5 + 0.5;
            ctx.stroke();

            // Data pulse traveling along connection
            if (Math.sin(time * 2 + i + j) > 0.92) {
              const t = (Math.sin(time * 3 + i) + 1) / 2;
              const px = nodes[i].x + (nodes[j].x - nodes[i].x) * t;
              const py = nodes[i].y + (nodes[j].y - nodes[i].y) * t;
              ctx.beginPath();
              ctx.arc(px, py, 2.5, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(${pulseRGB}, ${0.7 * ratio})`;
              ctx.fill();
            }
          }
        }
      }

      // ---------- Draw neurons ----------
      for (const node of nodes) {
        const pulse = Math.sin(node.pulsePhase) * 0.35 + 0.65;
        const r = node.radius * pulse;

        // Outer glow
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 8);
        glow.addColorStop(0, `rgba(${nodeRGB}, ${isDark ? 0.2 : 0.15})`);
        glow.addColorStop(0.5, `rgba(${nodeRGB}, ${isDark ? 0.06 : 0.04})`);
        glow.addColorStop(1, `rgba(${nodeRGB}, 0)`);
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 8, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Bright ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, r + 1, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${nodeRGB}, ${isDark ? 0.4 : 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Solid core
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeRGB}, ${isDark ? 0.75 : 0.55})`;
        ctx.fill();

        // White center highlight
        ctx.beginPath();
        ctx.arc(node.x - r * 0.2, node.y - r * 0.2, r * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${isDark ? 0.25 : 0.3})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
