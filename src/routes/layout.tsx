import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import About from "~/components/about/about";
import About_hidden from "~/components/about/about_hidden";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import Projects from "~/components/projects/projects";
import Projects_hidden from "~/components/projects/projects_hidden";

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

function animateFrom(elem: any, direction: any, baseDelayAndDuration: any) {
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
  } else if (elem.classList.contains("gs_reveal_about_more_text")) {
    x = 400;
    y = 0;
    delay = 4 * baseDelayAndDuration;
    duration = 3 * baseDelayAndDuration;
  } else if (elem.classList.contains("gs_reveal_about_passion")) {
    x = -100;
    y = 0;
    delay = 3.5 * baseDelayAndDuration;
    duration = 2 * baseDelayAndDuration;
  } else if (elem.classList.contains("gs_reveal_about_experience")) {
    x = 0;
    y = 0;
    delay = 2.5 * baseDelayAndDuration;
    duration = 5 * baseDelayAndDuration;
  } else if (elem.classList.value.includes("gs_reveal_about_name")) {
    x = 0;
    y = 0;
    delay = 1.5 * baseDelayAndDuration;
    duration = 5 * baseDelayAndDuration;
  } else if (elem.classList.value.includes("gs_reveal_about_hello")) {
    x = 0;
    y = 0;
    delay = 0.5;
    duration = 5 * baseDelayAndDuration;
  } else if (elem.classList.value.includes("gs_reveal_about_contact_me")) {
    x = 0;
    y = 500;
    delay = 5 * baseDelayAndDuration;
    duration = 2 * baseDelayAndDuration;
  } else if (elem.classList.value.includes("gs_reveal_press_v")) {
    x = 0;
    y = 0;
    delay = 5 * baseDelayAndDuration;
    duration = 4 * baseDelayAndDuration;
  } else if (elem.classList.value.includes("gs_reveal_about_big_text")) {
    x = -500;
    y = 0;
    delay = 4.5 * baseDelayAndDuration;
    duration = 2 * baseDelayAndDuration;
  } else if (elem.classList.value.includes("gs_reveal_about_skill_1")) {
    x = 500;
    y = 0;
    delay = 5 * baseDelayAndDuration;
    duration = 2 * baseDelayAndDuration;
  } else if (elem.classList.value.includes("gs_reveal_about_skill_2")) {
    x = 500;
    y = 0;
    delay = 5.1 * baseDelayAndDuration;
    duration = 2 * baseDelayAndDuration;
  } else if (elem.classList.value.includes("gs_reveal_about_skill_3")) {
    x = 500;
    y = 0;
    delay = 5.2 * baseDelayAndDuration;
    duration = 2 * baseDelayAndDuration;
  } else if (elem.classList.value.includes("gs_reveal_about_skill_4")) {
    x = 500;
    y = 0;
    delay = 5.3 * baseDelayAndDuration;
    duration = 2 * baseDelayAndDuration;
  } else if (elem.classList.value.includes("gs_reveal_about_skill_5")) {
    x = 500;
    y = 0;
    delay = 5.4 * baseDelayAndDuration;
    duration = 2 * baseDelayAndDuration;
  } else if (elem.classList.value.includes("gs_reveal_about_skill_6")) {
    x = 500;
    y = 0;
    delay = 5.5 * baseDelayAndDuration;
    duration = 2 * baseDelayAndDuration;
  } else if (elem.classList.value.includes("gs_reveal_about_skill_7")) {
    x = 500;
    y = 0;
    delay = 5.6 * baseDelayAndDuration;
    duration = 2 * baseDelayAndDuration;
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
        "circle(200px at var(--x) var(--y))");

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

    // // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    // const vh = window.innerHeight * 0.01;
    // // Then we set the value in the --vh custom property to the root of the document
    // document.documentElement.style.setProperty("--vh", `${vh}px`);

    (function () {
      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }
      // gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray(".gs_reveal").forEach(function (elem: any) {
        gsap.set(elem, { autoAlpha: 0 }); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
          trigger: elem,
          // markers: true,
          onEnter: function () {
            animateFrom(elem, 1, 1);
          },
          onEnterBack: function () {
            animateFrom(elem, -1, 0.5);
          },
          // onLeave: function () {
          // gsap.set(elem, { autoAlpha: 0 });
          // }, // assure that the element is hidden when scrolled into view
          once: true,
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
      <section id="front_layer" class="">
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <About />
        </section>
      </section>
      <section
        id="hidden_layer"
        ref={hiddenLayerRef}
        class="min-h-full bg-red-950 [clip-path:_circle(5px_at_var(--x)_var(--y))] absolute top-0 left-0 w-full invisible transition-[clip-path] duration-100 ease-in-out"
      >
        <section>
          <About_hidden />
        </section>
        <section id="projects_hidden">
          <Projects_hidden />
        </section>
        <section id="experience_hidden">
          <About_hidden />
        </section>
      </section>

      <Footer />
    </div>
  );
});
