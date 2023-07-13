import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";

export default component$(() => {
  return (
    // padding: 0 20px;
    // -webkit-backdrop-filter: blur(16px);
    // backdrop-filter: blur(16px);
    // background: rgba(3,0,20,.08);
    // left: 0;
    // position: fixed;
    // top: 0;
    // width: 100vw;
    // z-index: 10;
    <header class="fixed top-0 left-0 py-3 bg-[rgba(3,0,20,.08)] w-[100vw] z-10 backdrop-filter backdrop-blur-lg">
    {/* background: radial-gradient(62.87% 100% at 50% 100%,rgba(255,255,255,.12) 0%,rgba(255,255,255,0) 100%);
    bottom: 0;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    width: 100%; */}
      <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,.12)] to-transparent"> 

      </div>
          {/* align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 26px 0;
    position: relative; */}
      <div class="flex items-center justify-between p-7 relative">
        {/* <div >
          <a href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div> */}
        {/* background: rgba(255,255,255,.02);
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 999px;
    display: flex;
    left: 50%;
    margin: 0 auto;
    padding: 10px 12px;
    position: absolute;
    transform: translate(-50%); */}
        <ul class="flex absolute gap-8 border left-1/2 -translate-x-1/2 border-white border-opacity-10 px-5 py-2 rounded-full bg-[rgba(255,255,255,0.05)]">
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
