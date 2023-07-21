import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="fixed top-0 left-0 py-3 bg-[rgba(3,0,20,.08)] w-[100vw] z-10 backdrop-filter backdrop-blur-lg">
      <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,.12)] to-transparent"></div>
      <div class="flex items-center justify-between p-7 relative">
        <ul class="flex absolute gap-8 border left-1/2 -translate-x-1/2 border-white border-opacity-10 px-5 py-2 rounded-full bg-[rgba(255,255,255,0.05)]">
          <li class="text-slate-200 hover:text-slate-400">
            <a href="#front_layer">About</a>
          </li>
          <li class="text-slate-200 hover:text-slate-400">
            <a href="#projects">Projects</a>
          </li>
          <li class="text-slate-200 hover:text-slate-400">
            <a href="#experience">Experience</a>
          </li>
          <li class="text-slate-200 hover:text-slate-400">
            <a
              href="https://qwik.builder.io/tutorial/welcome/overview/"
              target="_blank"
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
