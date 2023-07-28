import { component$ } from "@builder.io/qwik";
import ImgThisWebsite100 from "/public/resized/this_website_100.jpeg?jsx";
import ImgSAAS from "/public/resized/saas.png?jsx";
import ImgSAASWide from "/public/resized/saas_wide.png?jsx";

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default component$(() => {
  return (
    <div
      class="max-w-full relative flex-col flex flex-nowrap pl-[4%] pb-[10%] pr-[4%] pt-32 md:pl-[10%] md:pr-[10%] md:pt-48"
      id="projects"
    >
      <div class="flex text-5xl pb-7 text-white font-extrabold">
        <p>Personal projects</p>
        <p class="text-sm">(that I'm proud of)</p>
      </div>

      <div class="grid gap-y-28">
        <div class="max-w-4xl rounded-2xl flex items-center flex-wrap mx-auto bg-gradient-to-r from-pink-800 via-pink-900 to-purple-900 opacity-90">
          <div class="w-full lg:w-2/5 p-2">
            <ImgThisWebsite100
              alt="project_this_website"
              class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            />
          </div>
          <div class="w-full lg:w-3/5 rounded-2xl shadow-2xl bg-white opacity-75 mx-4 lg:mx-0">
            <div class="p-4 md:p-12 text-center lg:text-left">
              <div class="block lg:hidden shadow-xl mx-auto bg-cover bg-center">
                <ImgThisWebsite100
                  alt="project_this_website_wide"
                  class="rounded-xl w-auto h-auto"
                />
              </div>
              <h1 class="text-3xl font-bold pt-8 lg:pt-0">This website</h1>
              <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-purple-500 opacity-25"></div>

              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                How can it be so fast?
              </p>
              <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                - Delay execution and download of JavaScript
              </p>
              <p class="pt-0 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                - Using
                <a
                  class="ml-1 font-bold no-underline text-gray-900"
                  href="https://qwik.builder.io/docs/concepts/resumable/"
                >
                  Qwik's Resumability
                </a>
              </p>
              <p class="pt-0 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                - Using CDN's
              </p>
              <p class="pt-0 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                - Qwik is not React. Just simmilar
              </p>
              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                More specifically...
              </p>
              <p class="text-lg">
                The whole Javascript
                <br />
                for this website{" "}
              </p>
              <p>
                was fetched from the server, mounted, and executed only when you
                do any interaction with the website.
              </p>
              <p>
                Test it yourself by opening the Network tab and clicking on the
                button below.
              </p>
              <div class="pt-12 pb-8">
                <button
                  class="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full"
                  onClick$={async () => {
                    const duration = 15 * 1000;
                    const animationEnd = Date.now() + duration;
                    let skew = 1;

                    function loadConfetti() {
                      return new Promise<(opts: any) => void>(
                        (resolve, reject) => {
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
                        }
                      );
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
                  Lazy loading Javascript
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-4xl rounded-2xl flex items-center flex-wrap mx-auto bg-gradient-to-r from-pink-800 via-pink-900 to-purple-900 opacity-90">
          <div class="w-full lg:w-2/5 p-2">
            <ImgSAAS
              alt="project_this_website"
              class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            />
          </div>
          <div class="w-full lg:w-3/5 rounded-2xl shadow-2xl bg-white opacity-75 mx-4 lg:mx-0">
            <div class="p-4 md:p-12 text-center lg:text-left">
              <div class="block lg:hidden shadow-xl mx-auto bg-cover bg-center">
                <ImgSAASWide
                  alt="project_this_website_wide"
                  class=" rounded-xl w-auto h-auto"
                />
              </div>

              <h1 class="text-3xl font-bold pt-8 lg:pt-0">SAAS website</h1>
              <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-purple-500 opacity-25"></div>
              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Implementation details
              </p>

              <ul class="list-disc my-5">
                <li class="ml-4">
                  Presentation website, hosted on Vercel using Next.js,
                  TypeScript, TailwindCSS, TRPC, Prisma and React.
                </li>
                <li class="ml-4">
                  Azure web services to handle long-running tasks, ensuring
                  efficient analysis and data processing.
                </li>
                <li class="ml-4">
                  Modular architecture, to easily add new websites to be
                  analyzed.
                </li>
                <li class="ml-4">
                  Leveraged Planetscale for the database management, ensuring
                  scalability and high availability.
                </li>
                <li class="ml-4">
                  Google sign-in for easy authentication and authorization.
                </li>
                <li class="ml-4">
                  GitHub Actions for seamless CI/CD, and cron job
                  functionalities.
                </li>
                <li class="ml-4">Server-side rendering of best products</li>
                <li class="ml-4">
                  Redis to cache daily quote about precious metals
                </li>
                <li class="ml-4">
                  Elastic Search for filtering and searching (currently disabled
                  as it costs $$$)
                </li>
                <li class="ml-4">
                  Stripe payment gateway to enable users to purchase tokens,
                  which could increase the value of their vote, or just start
                  the analysis instantly
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-[5%] left-1/2 z-10 transform -translate-x-1/2 translate-y-1/2 bg-transparent text-center">
        <h1 class="text-slate-200 font-extrabold opacity-50">Experience</h1>
        <button
          class="border-2 text-slate-400 rounded-full w-12 h-12 animate-bounce mt-4 opacity-50"
          aria-label="Scroll down"
          // go to projects section
          onClick$={() => {
            const projects = document.getElementById("experience");
            projects?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <svg
            class="w-6 h-6 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
});
