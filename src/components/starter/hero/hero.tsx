import { component$ } from "@builder.io/qwik";
import ImgThunder from "~/media/thunder.png?jsx";

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default component$(() => {
  return (
    <div class="flex-col flex align-middle flex-nowrap items-center h-96 justify-center gap-10">
      <ImgThunder class="w-full absolute h-auto object-cover -z-[1] opacity-20 pointer-events-none" />
      <p class="text-2xl text-white font-extrabold" >Welcome to my CV experience</p>
      <div class="flex-row gap-6">
        <button
          onClick$={async () => {
            const duration = 15 * 1000;
            const animationEnd = Date.now() + duration;
            let skew = 1;

            function loadConfetti() {
              return new Promise<(opts: any) => void>((resolve, reject) => {
                if ((globalThis as any).confetti) {
                  return resolve((globalThis as any).confetti as any);
                }
                const script = document.createElement("script");
                script.src =
                  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
                script.onload = () =>
                  resolve((globalThis as any).confetti as any);
                script.onerror = reject;
                document.head.appendChild(script);
                script.remove();
              });
            }

            const confetti = await loadConfetti();

            function snow() {
              const timeLeft = animationEnd - Date.now();
              const ticks = Math.max(200, 500 * (timeLeft / duration));
              skew = Math.max(0.8, skew - 0.001);

              confetti({
                particleCount: 1,
                startVelocity: 0,
                ticks: ticks,
                origin: {
                  x: Math.random(),
                  // since particles fall down, skew start toward the top
                  y: Math.random() * skew - 0.2,
                },
                colors: ["#ffffff"],
                shapes: ["circle"],
                gravity: randomInRange(0.4, 0.6),
                scalar: randomInRange(0.4, 1),
                drift: randomInRange(-0.4, 0.4),
              });

              if (timeLeft > 0) {
                requestAnimationFrame(snow);
              }
            }

            setTimeout(snow, 0);
          }}
        >
          Time to celebrate
        </button>
        <a
          href="https://qwik.builder.io/docs"
          target="_blank"
          // class="button button-dark"
        >
          Explore the docs
        </a>
      </div>
    </div>
  );
});
