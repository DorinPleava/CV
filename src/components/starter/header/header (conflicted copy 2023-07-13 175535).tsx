import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="fixed p-4 md:p-8 left-[50%] -translate-x-2/4 bg-[rgba(3,0,20,.08)] w-[100vw]">
      <div class="flex">
        <ul class="flex gap-8 border border-white border-opacity-10 px-5 py-2 rounded-full bg-[rgba(255,255,255,0.05)]">
          <li class="text-slate-200 hover:text-slate-400">
            <a
              href="https://qwik.builder.io/docs/components/overview/"
              target="_blank"
            >
              Projects
            </a>
          </li>
          <li class="text-slate-200 hover:text-slate-400">
            <a
              href="https://qwik.builder.io/examples/introduction/hello-world/"
              target="_blank"
            >
              Experience
            </a>
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
