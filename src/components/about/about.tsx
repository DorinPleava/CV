import { component$ } from "@builder.io/qwik";
import ImgThunder from "~/media/thunder.png?jsx";
import { BsApple } from "react-icons/bs";

export default component$(() => {
  return (
    <div class="max-w-5xl relative flex-col flex flex-nowrap pl-[10%] pb-[10%] pr-[10%] pt-[4%]">
      <ImgThunder class="w-full absolute top-0 h-auto object-cover -z-[1] opacity-20 pointer-events-none" />
      <div class="flex text-4xl">
        <p class="text-white font-extrabold gs_reveal gs_reveal_fromCenter opacity-0">
          Hello there,
        </p>
        <p class="text-white font-extrabold gs_reveal ml-2 gs_reveal_about_name opacity-0">
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
      <div class="flex items-center justify-between pt-10 relative gs_reveal gs_reveal_about_see_work">
        <ul class="flex gap-8 border border-white border-opacity-10 px-5 py-2 rounded-full bg-[rgba(255,25,255,0.08)] w-[80%] justify-between">
          <li class="text-slate-200 hover:text-slate-400 text-2xl font-extrabold">
            <a href="#front_layer">See my work</a>
          </li>
          <li class="flex gap-3 text-slate-200  text-2xl font-extrabold  items-center justify-between ">
            <a
              class="text-slate-200 hover:text-slate-400"
              href="https://github.com/DorinPleava"
            >
              <img src="public/github-mark-white.png" width="24" height="24" />
            </a>
            <a
              class="text-slate-200 hover:text-slate-400"
              href="https://www.linkedin.com/in/dorinpleava/"
            >
              <img src="public/LI-Logo.png" width="100" height="50" />
            </a>
            <a
              class="text-slate-200 hover:text-slate-400"
              href="mailto:dorin.pleava@gmail.com"
            >
              <img
                src="public/Gmail_icon_(2020).svg.png"
                width="24"
                height="24"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
});
