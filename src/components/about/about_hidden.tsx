import { component$ } from "@builder.io/qwik";
import ImgThunder from "~/media/thunder.png?jsx";

export default component$(() => {
  return (
    <div class="relative flex-col flex align-middle flex-nowrap items-center justify-center">
      <ImgThunder class="w-full absolute h-auto object-cover -z-[1] opacity-20 pointer-events-none" />
        <p class="text-2xl text-red font-extrabold px-4 pt-4 gs_reveal gs_reveal_fromCenter opacity-0">
          Hi, I'm Dorin
        </p>
        <p class="text-base text-green-500 font-extrabold gs_reveal gs_reveal_fromCenter opacity-0">
          (Software Engineer | 10+ Years of Expertise)
        </p>
      <div class="">
        <div class="">
          <div class="gs_reveal gs_reveal_fromLeft  opacity-0">
            <p class="text-2xl text-white font-extrabold p-12">
              and I'm a software engineer passionate about crafting innovative
              solutions.
            </p>
            <p class="text-2xl text-white font-extrabold p-12">
              Passionate and results-driven Software Engineer with over 10 years
              of experience. Skilled in developing innovative web applications,
              automating IT infrastructure management, and working with
              collaborative teams. Proficient in React JS, Python, Ruby, and
              CI/CD processes (GitLab, Docker, GitHub Actions). Eager to create
              impactful software that empowers users and businesses alike.
            </p>
            <img
              width="479"
              height="479"
              src="https://picsum.photos/479/479?index=1"
              alt=""
            />
          </div>
          <div class="gs_reveal gs_reveal_fromRight  opacity-0">
            <img
              width="479"
              height="479"
              src="https://picsum.photos/479/479?index=1"
              alt=""
            />
          </div>
          <div class="gs_reveal gs_reveal_fromLeft opacity-0 ">
            <img
              width="479"
              height="479"
              src="https://picsum.photos/479/479?index=1"
              alt=""
            />
          </div>
          {/* <div class="gs_reveal gs_reveal_fromLeft ">
            <div class="card">
              <img
                width="479"
                height="479"
                src="https://picsum.photos/479/479?index=1"
                alt=""
              />
            </div>
          </div>
          <div class="gs_reveal gs_reveal_fromLeft ">
            <div class="card">
              <img
                width="479"
                height="479"
                src="https://picsum.photos/479/479?index=1"
                alt=""
              />
            </div>
          </div>
          <div class="gs_reveal gs_reveal_fromLeft ">
            <div class="card">
              <img
                width="479"
                height="479"
                src="https://picsum.photos/479/479?index=1"
                alt=""
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
});