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
      <div class=" gs_reveal gs_reveal_press_v opacity-0 absolute hidden md:flex w-[200px] ml-7 mt-5 md:mt-10 left-3/4 -translate-x-3/4 border items-center text-center border-white border-opacity-10 px-2 pb-3 rounded-full bg-[rgba(255,25,255,0.08)] justify-between text-slate-200">
        <span class="justify-center">
          press <span class="font-black">&</span> hold
          <span class="text-3xl font-black animate-pulse text-purple-700">
            "v"
          </span>
          <span>to view extras</span>
        </span>
      </div>
    </header>
  );
});
