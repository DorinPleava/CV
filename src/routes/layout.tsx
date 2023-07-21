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

const mouseMoveEvent = $(async (e: MouseEvent) => {
  const hiddenLayerDiv = document.getElementById("hidden_layer");
  const bounding = hiddenLayerDiv?.getBoundingClientRect();

  if (!bounding || !hiddenLayerDiv) {
    return;
  }

  const xx = e.clientX - bounding.left + hiddenLayerDiv.scrollLeft;
  const yy = e.clientY - bounding.top + hiddenLayerDiv.scrollTop;

  // console.log("mouseMoveEvent", xx, yy);

  gsap.to("#hidden_layer", {
    "--x": `${xx}px`,
    "--y": `${yy}px`,
    duration: 0.3,
    ease: "sine.out",
  });
});

function animateFrom(elem: any, direction: any) {
  direction = direction || 1;
  let x = 0,
    y = direction * 100,
    duration = 2,
    delay = 0;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -1000;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 1000;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromTop")) {
    x = -100;
    y = -100;
  } else if (elem.classList.contains("gs_reveal_fromCenter")) {
    x = 0;
    y = 0;
    duration = 5;
  } else if (elem.classList.contains("gs_reveal_about_textRight")) {
    x = 1000;
    y = 0;
    delay = 1;
    duration = 2;
  } else if (elem.classList.contains("gs_reveal_about_textLeft")) {
    x = -1000;
    y = 0;
    delay = 1;
    duration = 2;
  } else if (elem.classList.contains("gs_reveal_about_textCenter")) {
    x = 0;
    y = 0;
    delay = 1;
    duration = 5;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0, delay: delay },
    {
      duration,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
      delay: delay,
    }
  );
}

export default component$(() => {
  const hiddenLayerRef = useSignal<HTMLElement>();

  const enableCodeViewMouse = $(async (e: KeyboardEvent) => {
    if (e.repeat || e.key !== "v") {
      return;
    }
    console.log("code View on", e);

    hiddenLayerRef.value &&
      (hiddenLayerRef.value.style.clipPath =
        "circle(100px at var(--x) var(--y))");

    hiddenLayerRef.value && (hiddenLayerRef.value.style.visibility = "visible");
    hiddenLayerRef.value &&
      (hiddenLayerRef.value.style.animation = "clip 1s linear");
  });

  const disableCodeViewMouse = $(async (e: KeyboardEvent) => {
    if (e.repeat || e.key !== "v") {
      return;
    }
    console.log("code View off", e);

    hiddenLayerRef.value &&
      (hiddenLayerRef.value.style.clipPath =
        "circle(0px at var(--x) var(--y))");
  });

  useVisibleTask$(() => {
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("keydown", enableCodeViewMouse);
    document.addEventListener("keyup", disableCodeViewMouse);

    (function () {
      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }
      // gsap.registerPlugin(ScrollTrigger);

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
    // <div class="min-h-screen h-[100vh] box-border">
    <div class="">
      <Header />
      <section id="front_layer" class="pt-48">
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <div>Hello Projects</div>
          <About />
        </section>
        <section id="experience">
          <div>Hello Experience</div>
        </section>
      </section>
      <section
        id="hidden_layer"
        ref={hiddenLayerRef}
        class="min-h-full bg-red-950 [clip-path:_circle(5px_at_var(--x)_var(--y))] absolute top-0 left-0 w-full invisible transition-[clip-path] duration-100 ease-in-out pt-48"
      >
        <section>
          <About_hidden />
        </section>
        <section id="projects_hidden">
          <div>Hello Hidden Projects</div>
          <About_hidden />
        </section>
        <section id="experience_hidden">
          <div>Hello Hidden Experience</div>
        </section>
      </section>

      <Footer />
    </div>
  );
});
