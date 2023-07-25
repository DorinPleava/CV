import { component$ } from "@builder.io/qwik";
import ImgThunder from "~/media/thunder.png?jsx";
import LinkedInLogo from "/public/LI-Logo.png?jsx";
import GithubLogo from "/public/github-mark-white.png?jsx";
import GmailLogo from "/public/Gmail_icon_(2020).svg.png?jsx";

export default component$(() => {
  return (
    // height: calc(var(--vh, 1vh) * 100);
    <div
      class="md:max-w-[70%] relative flex-col flex flex-nowrap pl-[8%] pb-[10%] pr-[8%] pt-32 md:pl-[10%] md:pr-[10%] md:pt-48 h-[calc(var(--vh,_1vh)_*_100)]"
      id="about"
    >
      <ImgThunder class="w-full absolute top-0 h-auto object-cover -z-[1] opacity-20 pointer-events-none" />

      <div class="flex-col text-4xl md:flex">
        <p class="text-white font-extrabold gs_reveal gs_reveal_fromCenter opacity-0">
          Hello there,
        </p>
        <div class="flex items-center md:items-baseline">
          <p class="text-white font-extrabold gs_reveal gs_reveal_about_name opacity-0">
            I'm
          </p>
          <p class="text-white text-6xl font-extrabold gs_reveal gs_reveal_about_name opacity-0 ml-2">
            Dorin Pleava
          </p>
        </div>
      </div>
      <p class="text-base text-gray-500 font-extrabold gs_reveal gs_reveal_about_experience opacity-0">
        (Software Engineer | 10+ Years of Experience)
      </p>
      <p class="text-lg md:text-2xl pt-4 gs_reveal gs_reveal_about_passion text-white font-extrabold opacity-0">
        Passionate about crafting innovative software solutions
      </p>
      <p class="text-lg md:text-2xl pt-4 gs_reveal gs_reveal_about_more_text text-white font-extrabold opacity-0">
        I thrive on taking up captivating projects in diverse technologies and
        programming languages
      </p>
      <p class="text-lg md:text-2xl pt-4 text-white font-extrabold hidden md:flex gs_reveal gs_reveal_about_big_text opacity-0">
        Passionate and results-driven Software Engineer with over 10 years of
        experience. Skilled in developing innovative web applications,
        automating IT infrastructure management, and working with collaborative
        teams. Proficient in React JS, Python, Ruby, and CI/CD processes
        (GitLab, Docker, GitHub Actions). Eager to create impactful software
        that empowers users and businesses alike.
      </p>
      <div class="flex items-center justify-between pt-10 relative gs_reveal gs_reveal_about_contact_me opacity-0">
        <ul class="flex gap-8 border border-white border-opacity-10 px-5 py-2 rounded-full bg-[rgba(255,25,255,0.08)] justify-between items-center w-full">
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

      <div class="absolute bottom-[5%] left-1/2 z-10 transform -translate-x-1/2 translate-y-1/2 bg-transparent text-center">
        <h1 class="text-slate-200 font-extrabold opacity-50">Projects</h1>
        <button
          class="border-2 text-slate-400 rounded-full w-12 h-12 animate-bounce mt-4 opacity-50"
          aria-label="Scroll down"
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
