import { component$ } from "@builder.io/qwik";
import ImgThunder from "~/media/thunder.png?jsx";
import LinkedInLogo from "/public/LI-Logo.png?jsx";
import GithubLogo from "/public/github-mark-white.png?jsx";
import GmailLogo from "/public/Gmail_icon_(2020).svg.png?jsx";

export default component$(() => {
  return (
    <div class="md:max-w-[65%] relative flex-col flex flex-nowrap pl-[10%] pb-[10%] pr-[10%] pt-0 md:pt-[4%]">
      <ImgThunder class="w-full absolute top-0 h-auto object-cover -z-[1] opacity-20 pointer-events-none" />
      <div class="flex-col text-4xl md:flex">
        <p class="text-white font-extrabold gs_reveal gs_reveal_fromCenter opacity-0">
          Hello there,
        </p>
        <p class="text-white font-extrabold gs_reveal ml-0 md:ml-2 gs_reveal_about_name opacity-0">
          I'm Dorin Pleava
        </p>
      </div>
      <p class="text-base text-gray-500 font-extrabold gs_reveal gs_reveal_about_experience opacity-0">
        (Software Engineer | 10+ Years of Experience)
      </p>
      <p class="text-2xl pt-4 gs_reveal gs_reveal_about_passion text-white font-extrabold opacity-0">
        Passionate about crafting innovative software solutions.
      </p>
      <p class="text-2xl pt-4 gs_reveal gs_reveal_about_more_text text-white font-extrabold opacity-0">
        I thrive on taking up captivating projects in diverse technologies and
        programming languages
      </p>
      <div class="flex items-center justify-between pt-10 relative gs_reveals gs_revseal_about_see_work">
        <ul class="flex gap-8 border border-white border-opacity-10 px-5 py-2 rounded-full bg-[rgba(255,25,255,0.08)] justify-between items-center md:w-[80%]">
          <li class="text-slate-200 hover:text-slate-400 text-sm md:text-2xl font-extrabold">
            <a href="#front_layer">Contact me:</a>
          </li>
          <li class="flex gap-3 text-slate-200  text-2xl font-extrabold  items-center justify-between ">
            <a
              class="text-slate-200 hover:text-slate-400"
              href="https://github.com/DorinPleava"
            >
              <GithubLogo class="md:h-8 md:w-8" />
            </a>
            <a
              class="text-slate-200 hover:text-slate-400"
              href="https://www.linkedin.com/in/dorinpleava/"
            >
              <LinkedInLogo class="md:h-8 md:w-28" />
            </a>
            <a
              class="text-slate-200 hover:text-slate-400"
              href="mailto:dorin.pleava@gmail.com"
            >
              <GmailLogo class="md:h-8 md:w-8" />
            </a>
          </li>
        </ul>
      </div>
      <div class="absolute bottom-0 left-1/2 z-10 transform -translate-x-1/2 translate-y-1/2 bg-transparent text-center">
      <h1
        class="text-white font-extrabold gs_reveal gs_reveal_about_hello opacity-0"
        >
          Projects
        </h1>
        <button
          class="border-2 border-white rounded-full w-12 h-12 animate-bounce mt-4 gs_reveal gs_reveal_fromCenter opacity-0"
          aria-label="Scroll down"
        >
          <svg
            class="w-6 h-6 text-white mx-auto animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
});
