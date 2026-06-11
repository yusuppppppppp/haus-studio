"use client";

import { useEffect, useRef } from "react";

const lerp = (start, end, factor) => {
  return start + (end - start) * factor;
};

export default function Sketchable({ children, className = "" }) {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const canvas = canvasRef.current;
    const section = sectionRef.current;

    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrame;


    const mouse = {
      x: 0,
      y: 0,
      active: false,
    };


    const current = {
      x: 0,
      y: 0,
    };


    const previous = {
      x: 0,
      y: 0,
    };

    current.x = window.innerWidth / 2;
    current.y = window.innerHeight / 2;

    previous.x = current.x;
    previous.y = current.y;

    let radius = 30;


    const resizeCanvas = () => {
      const rect = section.getBoundingClientRect();

      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();


    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      mouse.active = true;
    };


    const handleMouseLeave = () => {
      mouse.active = false;

      setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 500);
    };


    section.addEventListener("mousemove", handleMouseMove);

    section.addEventListener("mouseleave", handleMouseLeave);

    window.addEventListener("resize", resizeCanvas);


    const render = (time) => {
      // smooth fade
      ctx.fillStyle = "rgba(0,0,0,0.03)";

      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // save previous position
      previous.x = current.x;
      previous.y = current.y;

      // smooth follow
      current.x = lerp(current.x, mouse.x, 0.08);

      current.y = lerp(current.y, mouse.y, 0.08);

      // animated radius
      radius = 2 + Math.abs(Math.sin(time * 0.002)) * 20;

      // draw
      if (mouse.active) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // mix blend difference
        ctx.strokeStyle = "#ffffff";

        ctx.lineWidth = radius;

        ctx.beginPath();

        // start point
        ctx.moveTo(previous.x, previous.y);

        // end point
        ctx.lineTo(
          current.x + (Math.random() - 0.5) * 1.5,

          current.y + (Math.random() - 0.5) * 1.5,
        );

        ctx.stroke();
      }

      animationFrame = requestAnimationFrame(render);
    };

    render(0);


    return () => {
      cancelAnimationFrame(animationFrame);

      section.removeEventListener("mousemove", handleMouseMove);

      section.removeEventListener("mouseleave", handleMouseLeave);

      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`
        relative
        overflow-hidden
        bg-foreground
        px-section
        py-25
        2xl:pb-50
        xl:pb-30
        lg:pb-30
        md:pb-30
        sm:pb-25
        pb-30
        ${className}
      `}
      style={{
        transform: "translateZ(0)",
      }}
    >
      {/* canvas */}
      <canvas
        ref={canvasRef}
        className="
          absolute
          inset-0
          w-full
          h-full
          pointer-events-none
          mix-blend-difference
          hidden
          lg:block
          z-10
        "
        style={{
          filter: "blur(0.2px)",
        }}
      />

      {/* content */}
      <div className="relative z-20">{children}</div>
    </section>
  );
}
