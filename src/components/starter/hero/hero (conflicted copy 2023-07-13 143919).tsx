import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import ImgThunder from "~/media/thunder.png?jsx";

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

export default component$(() => {
  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  const skew = 1;

  return (
    <div class={["container", styles.hero]}>
      <ImgThunder class={styles["hero-image"]} />
      <h1>
        So <span class="highlight">fantastic</span>
        <br />
        to have <span class="highlight">you</span> here
      </h1>
      <p>Have fun building your App with Qwik.</p>
      <div class={styles["button-group"]}>
        <button
          onClick$={async () => {
            const defaults = {
              spread: 360,
              ticks: 70,
              gravity: 0,
              decay: 0.95,
              startVelocity: 30,
              colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
              origin: {
                x: 0.5,
                y: 0.35,
              },
            };

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

            function shoot() {
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

              confetti({
                ...defaults,
                particleCount: 60,
                scalar: 0.75,
              });
            }

            setTimeout(shoot, 0);
            setTimeout(shoot, 100);
            setTimeout(shoot, 200);
            setTimeout(shoot, 300);
            setTimeout(shoot, 400);
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
