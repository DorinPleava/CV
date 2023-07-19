import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import About from "~/components/about/about";
import About_hidden from "~/components/about/about_hidden";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

// const loadGsapCDN = $(() => {
//   return new Promise<any>((resolve, reject) => {
//     if ((globalThis as any).gsap) {
//       return resolve((globalThis as any).gsap as any);
//     }
//     const script = document.createElement("script");
//     script.src =
//       "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
//     script.onload = () => resolve((globalThis as any).gsap as any);
//     script.onerror = reject;
//     document.head.appendChild(script);
//     script.remove();
//   });
// });

const mouseMoveEvent = $(async (e: MouseEvent) => {
  // const gsap = await loadGsapCDN();

  const { clientX, clientY } = e;
  const x = Math.round((clientX / window.innerWidth) * 100);
  const y = Math.round((clientY / window.innerHeight) * 100);

  gsap.to("#aboutHiddenRef", {
    "--x": `${x}%`,
    "--y": `${y}%`,
    duration: 0.5,
    ease: "sine.out",
  });
});

function animateFrom(elem: any, direction: any) {
  direction = direction || 1;
  let x = 0,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}

export default component$(() => {
  const aboutHiddenRef = useSignal<HTMLElement>();
  const projectsHiddenRef = useSignal<HTMLElement>();

  const enableCodeViewMouse = $(async (e: KeyboardEvent) => {
    if (e.repeat || e.key !== "v") {
      return;
    }
    console.log("code View on", e);

    aboutHiddenRef.value &&
      (aboutHiddenRef.value.style.clipPath =
        "circle(100px at var(--x) var(--y))");

    aboutHiddenRef.value && (aboutHiddenRef.value.style.visibility = "visible");
    aboutHiddenRef.value &&
      (aboutHiddenRef.value.style.animation = "clip 1s linear");
  });

  const disableCodeViewMouse = $(async (e: KeyboardEvent) => {
    if (e.repeat || e.key !== "v") {
      return;
    }
    console.log("code View off", e);

    aboutHiddenRef.value &&
      (aboutHiddenRef.value.style.clipPath =
        "circle(0px at var(--x) var(--y))");
  });

  useVisibleTask$(() => {
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("keydown", enableCodeViewMouse);
    document.addEventListener("keyup", disableCodeViewMouse);

    (function () {
      console.log("gsapDOMContentLoaded");

      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray(".gs_reveal").forEach(function (elem: any) {
        gsap.set(elem, { autoAlpha: 0 }); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
          trigger: elem,
          markers: true,
          onEnter: function () {
            animateFrom(elem, 1);
          },
          onEnterBack: function () {
            animateFrom(elem, -1);
          },
          onLeave: function () {
            gsap.set(elem, { autoAlpha: 0 });
          }, // assure that the element is hidden when scrolled into view
        });
      });
    })();

    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("keydown", enableCodeViewMouse);
      document.removeEventListener("keyup", disableCodeViewMouse);
    };
  });

  return (
    <div class="min-h-screen h-[100vh] box-border">
      <Header />
      <section id="about">
        <section id="about_main">
          <About />
          <div class="features">
            <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
              <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft opacity-0 hidden will-change-transform">
                <div class="card">
                  <img
                    width="479"
                    src="https://picsum.photos/479/479?index=1"
                    alt=""
                  />
                </div>
              </div>

              <div class="ipsGrid_span7 ipsType_left">
                <h2 class="heading_large gs_reveal">
                  Create amazing <strong>SVG</strong> animations
                </h2>
                <p class="gs_reveal">
                  <a href="https://greensock.com/drawsvg/">DrawSVGPlugin</a>{" "}
                  allows you to progressively reveal (or hide) SVG strokes to
                  make them look like they're being drawn.{" "}
                  <a href="https://greensock.com/morphsvg/">MorphSVGPlugin</a>{" "}
                  to Morph any SVG shape into any other shape smoothly
                  regardless of the number of points in each.{" "}
                  <a href="/docs/v3/Plugins/MotionPathPlugin">
                    MotionPathPlugin
                  </a>{" "}
                  allows you to easily move any object along a path.
                </p>
              </div>
            </div>

            <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
              <div class="ipsGrid_span7 ipsType_right">
                <h2 class="heading_large gs_reveal">
                  Supercharge immersive <strong>WebGL</strong> experiences
                </h2>
                <p class="gs_reveal">
                  GreenSock is used in some of the most popular{" "}
                  <a href="//threejs.org/">Three.js</a> powered WebGL projects.
                  Animate any object in a scene.{" "}
                  <a href="https://greensock.com/PixiPlugin/">PixiPlugin</a>{" "}
                  makes animating <a href="//www.pixijs.com/">Pixi.js</a>{" "}
                  objects with GSAP a breeze. Animate position, scale, color
                  effects and more with all the power and control of GSAP and
                  the rendering speed of Pixi.js.
                </p>
              </div>

              <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
                <div class="card">
                  <img
                    width="479"
                    src="https://picsum.photos/479/479?index=2"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
              <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
                <div class="card">
                  <img
                    width="479"
                    src="https://picsum.photos/479/479?index=3"
                    alt=""
                  />
                </div>
              </div>

              <div class="ipsGrid_span7 ipsType_left">
                <h2 class="heading_large gs_reveal">
                  Control performant <strong>Canvas</strong> animations
                </h2>
                <p class="gs_reveal">
                  GSAP makes animating with Canvas even easier by providing an
                  easier way to look and sequence animations. GSAP works great
                  with{" "}
                  <a href="//www.adobe.com/products/animate.html">
                    Adobe Animate
                  </a>{" "}
                  and <a href="//createjs.com/easeljs">EaseJS</a> through GSAP's{" "}
                  <a href="https://greensock.com/easelplugin/">EaselJSPlugin</a>
                  .
                </p>
              </div>
            </div>

            <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
              <div class="ipsGrid_span7 ipsType_right">
                <h2 class="heading_large gs_reveal">
                  <strong>Award winning</strong> websites
                </h2>
                <p class="gs_reveal">
                  GSAP is used on over 8,500,000 sites and over 1,000 sites
                  featured on{" "}
                  <a
                    href="https://www.awwwards.com/websites/gsap-animation/"
                    target="_blank"
                  >
                    Awwwards
                  </a>
                  . For some of our favorites, check out{" "}
                  <a href="https://greensock.com/showcase/">our showcase</a>.
                </p>
              </div>

              <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
                <div class="card">
                  <img
                    height="479"
                    width="479"
                    src="https://picsum.photos/479/479?index=4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          ref={aboutHiddenRef}
          id="aboutHiddenRef"
          class="min-h-full bg-red-950 [clip-path:_circle(5px_at_var(--x)_var(--y))] absolute top-0 left-0 w-full invisible transition-[clip-path] duration-100 ease-in-out"
        >
          <About_hidden />
        </section>
      </section>
      <section id="projects">
        <section id="projects_main">
          <div class="features">
            <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
              <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft opacity-0 hidden will-change-transform">
                <div class="card">
                  <img
                    width="479"
                    src="https://picsum.photos/479/479?index=1"
                    alt=""
                  />
                </div>
              </div>

              <div class="ipsGrid_span7 ipsType_left">
                <h2 class="heading_large gs_reveal">
                  Create amazing <strong>SVG</strong> animations
                </h2>
                <p class="gs_reveal">
                  <a href="https://greensock.com/drawsvg/">DrawSVGPlugin</a>{" "}
                  allows you to progressively reveal (or hide) SVG strokes to
                  make them look like they're being drawn.{" "}
                  <a href="https://greensock.com/morphsvg/">MorphSVGPlugin</a>{" "}
                  to Morph any SVG shape into any other shape smoothly
                  regardless of the number of points in each.{" "}
                  <a href="/docs/v3/Plugins/MotionPathPlugin">
                    MotionPathPlugin
                  </a>{" "}
                  allows you to easily move any object along a path.
                </p>
              </div>
            </div>

            <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
              <div class="ipsGrid_span7 ipsType_right">
                <h2 class="heading_large gs_reveal">
                  Supercharge immersive <strong>WebGL</strong> experiences
                </h2>
                <p class="gs_reveal">
                  GreenSock is used in some of the most popular{" "}
                  <a href="//threejs.org/">Three.js</a> powered WebGL projects.
                  Animate any object in a scene.{" "}
                  <a href="https://greensock.com/PixiPlugin/">PixiPlugin</a>{" "}
                  makes animating <a href="//www.pixijs.com/">Pixi.js</a>{" "}
                  objects with GSAP a breeze. Animate position, scale, color
                  effects and more with all the power and control of GSAP and
                  the rendering speed of Pixi.js.
                </p>
              </div>

              <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
                <div class="card">
                  <img
                    width="479"
                    src="https://picsum.photos/479/479?index=2"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
              <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
                <div class="card">
                  <img
                    width="479"
                    src="https://picsum.photos/479/479?index=3"
                    alt=""
                  />
                </div>
              </div>

              <div class="ipsGrid_span7 ipsType_left">
                <h2 class="heading_large gs_reveal">
                  Control performant <strong>Canvas</strong> animations
                </h2>
                <p class="gs_reveal">
                  GSAP makes animating with Canvas even easier by providing an
                  easier way to look and sequence animations. GSAP works great
                  with{" "}
                  <a href="//www.adobe.com/products/animate.html">
                    Adobe Animate
                  </a>{" "}
                  and <a href="//createjs.com/easeljs">EaseJS</a> through GSAP's{" "}
                  <a href="https://greensock.com/easelplugin/">EaselJSPlugin</a>
                  .
                </p>
              </div>
            </div>

            <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
              <div class="ipsGrid_span7 ipsType_right">
                <h2 class="heading_large gs_reveal">
                  <strong>Award winning</strong> websites
                </h2>
                <p class="gs_reveal">
                  GSAP is used on over 8,500,000 sites and over 1,000 sites
                  featured on{" "}
                  <a
                    href="https://www.awwwards.com/websites/gsap-animation/"
                    target="_blank"
                  >
                    Awwwards
                  </a>
                  . For some of our favorites, check out{" "}
                  <a href="https://greensock.com/showcase/">our showcase</a>.
                </p>
              </div>

              <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
                <div class="card">
                  <img
                    height="479"
                    width="479"
                    src="https://picsum.photos/479/479?index=4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          ref={projectsHiddenRef}
          id="projectsHiddenRef"
          class="min-h-full bg-red-950 [clip-path:_circle(5px_at_var(--x)_var(--y))] absolute top-0 left-0 w-full invisible transition-[clip-path] duration-100 ease-in-out"
        ></section>
      </section>
      <section id="experience">
        <section id="projects_main">
          <div class="features">
            <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
              <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft opacity-0 hidden will-change-transform">
                <div class="card">
                  <img
                    width="479"
                    src="https://picsum.photos/479/479?index=1"
                    alt=""
                  />
                </div>
              </div>

              <div class="ipsGrid_span7 ipsType_left">
                <h2 class="heading_large gs_reveal">
                  Create amazing <strong>SVG</strong> animations
                </h2>
                <p class="gs_reveal">
                  <a href="https://greensock.com/drawsvg/">DrawSVGPlugin</a>{" "}
                  allows you to progressively reveal (or hide) SVG strokes to
                  make them look like they're being drawn.{" "}
                  <a href="https://greensock.com/morphsvg/">MorphSVGPlugin</a>{" "}
                  to Morph any SVG shape into any other shape smoothly
                  regardless of the number of points in each.{" "}
                  <a href="/docs/v3/Plugins/MotionPathPlugin">
                    MotionPathPlugin
                  </a>{" "}
                  allows you to easily move any object along a path.
                </p>
              </div>
            </div>

            <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
              <div class="ipsGrid_span7 ipsType_right">
                <h2 class="heading_large gs_reveal">
                  Supercharge immersive <strong>WebGL</strong> experiences
                </h2>
                <p class="gs_reveal">
                  GreenSock is used in some of the most popular{" "}
                  <a href="//threejs.org/">Three.js</a> powered WebGL projects.
                  Animate any object in a scene.{" "}
                  <a href="https://greensock.com/PixiPlugin/">PixiPlugin</a>{" "}
                  makes animating <a href="//www.pixijs.com/">Pixi.js</a>{" "}
                  objects with GSAP a breeze. Animate position, scale, color
                  effects and more with all the power and control of GSAP and
                  the rendering speed of Pixi.js.
                </p>
              </div>

              <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
                <div class="card">
                  <img
                    width="479"
                    src="https://picsum.photos/479/479?index=2"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
              <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
                <div class="card">
                  <img
                    width="479"
                    src="https://picsum.photos/479/479?index=3"
                    alt=""
                  />
                </div>
              </div>

              <div class="ipsGrid_span7 ipsType_left">
                <h2 class="heading_large gs_reveal">
                  Control performant <strong>Canvas</strong> animations
                </h2>
                <p class="gs_reveal">
                  GSAP makes animating with Canvas even easier by providing an
                  easier way to look and sequence animations. GSAP works great
                  with{" "}
                  <a href="//www.adobe.com/products/animate.html">
                    Adobe Animate
                  </a>{" "}
                  and <a href="//createjs.com/easeljs">EaseJS</a> through GSAP's{" "}
                  <a href="https://greensock.com/easelplugin/">EaselJSPlugin</a>
                  .
                </p>
              </div>
            </div>

            <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
              <div class="ipsGrid_span7 ipsType_right">
                <h2 class="heading_large gs_reveal">
                  <strong>Award winning</strong> websites
                </h2>
                <p class="gs_reveal">
                  GSAP is used on over 8,500,000 sites and over 1,000 sites
                  featured on{" "}
                  <a
                    href="https://www.awwwards.com/websites/gsap-animation/"
                    target="_blank"
                  >
                    Awwwards
                  </a>
                  . For some of our favorites, check out{" "}
                  <a href="https://greensock.com/showcase/">our showcase</a>.
                </p>
              </div>

              <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
                <div class="card">
                  <img
                    height="479"
                    width="479"
                    src="https://picsum.photos/479/479?index=4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          ref={projectsHiddenRef}
          id="projectsHiddenRef"
          class="min-h-full bg-red-950 [clip-path:_circle(5px_at_var(--x)_var(--y))] absolute top-0 left-0 w-full invisible transition-[clip-path] duration-100 ease-in-out"
        ></section>
      </section>
      <Footer />
    </div>
  );
});
