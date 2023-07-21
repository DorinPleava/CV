import { component$ } from "@builder.io/qwik";
import ImgThunder from "~/media/thunder.png?jsx";

export default component$(() => {
  return (
    <div class="flex-col flex align-middle flex-nowrap items-center justify-center">
      <ImgThunder class="w-full absolute h-auto object-cover -z-[1] opacity-20 pointer-events-none" />
      <p class="text-2xl text-black font-extrabold">About page ...</p>
      <div class="">
        <div class="">
          <div class="gs_reveal gs_reveal_fromLeft ">
              <img
                width="479"
                height="479"
                src="https://picsum.photos/479/479?index=2"
                alt=""
              />
          </div>
          <div class="gs_reveal gs_reveal_fromLeft ">
              <img
                width="479"
                height="479"
                src="https://picsum.photos/479/479?index=2"
                alt=""
              />
          </div>
          <div class="gs_reveal gs_reveal_fromLeft ">
              <img
                width="479"
                height="479"
                src="https://picsum.photos/479/479?index=2"
                alt=""
              />
          </div>
        </div>
      </div>
    </div>
  );
});
