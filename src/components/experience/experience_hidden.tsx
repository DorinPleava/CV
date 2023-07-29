import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div
      class="max-w-full relative flex-col flex flex-nowrap pl-[4%] pb-[10%] pr-[4%] pt-16 md:pl-[10%] md:pr-[10%] md:pt-24"
      id="projects"
    >
      <p class="text-5xl pb-7 text-white font-extrabold bg-gradient-to-r from-fuchsia-800 via-violet-600 to-fuchsia-700 bg-clip-text text-transparent">
        Work Experience
      </p>

      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <ul class="mb-10 ml-4 ">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <p class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2022 - Present · 1 yr 6 mos
          </p>
          <h3 class="text-2xl text-white font-black">Porsche Engineering</h3>
          <p class="ml-10 text-lg font-extrabold leading-none text-gray-500">
            (React.js · React · JavaScript · Python)
          </p>
          <ul class="mt-5 ml-5 list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
            <li>
              Started a new web application project that focuses on comparing
              multiple routing engines for electric vehicles. For the backend, I
              am utilizing Python's FastAPI framework, while the frontend is
              built with React JS. The aim is to analyze the influence of
              various parameters on calculating the most economical as well as
              the fastest route.
            </li>
            <li>
              The app is built on top of a micro frontend architecture,
              employing a combination of TypeScript, Tailwind CSS, and
              JavaScript to enhance the user experience and ensure seamless
              integration across different modules.
            </li>
            <li>
              Took ownership of the project's full CI/CD pipeline, leveraging
              GitLab and Docker for efficient Continuous Integration (CI) and
              Continuous Deployment (CD) processes.
            </li>
            <li>
              As the project grew and new co workers joined the project, I
              demonstrated ability to lead and mentor teams, delegate tasks, and
              provide guidance to junior developers.
            </li>
            <li>Using GitLab and Docker for CI and CD.</li>
          </ul>
        </ul>
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2019 - Feb 2022 · 2 yrs 10 mos
          </time>
          <h3 class="text-2xl text-white font-black ">Puppet</h3>
          <p class="ml-10 text-lg font-extrabold leading-none text-gray-500">
            (Ruby · Go · AWS · Open Source · Multiplatform)
          </p>
          <ul class="mt-5 ml-5 list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
            <li>
              Puppet is a service application primarily written in Ruby,
              designed to streamline and automate IT infrastructure management
              and intricate workflows with a user-friendly yet robust approach.
            </li>
            <li>
              In summary, my responsibilities encompass creating new features in
              the core application, continuous integration, releasing new
              versions of Puppet, developing internal tools, conducting code
              reviews, engaging in pair programming, extending support for
              additional operating systems, and addressing customer tickets.
            </li>
            <li>
              I work extensively with Ruby language, but also have some C++ for
              maintaining legacy projects, and Go for rewriting legacy projects.
            </li>
            <li>
              As 70% of Puppet core is open-source and supports almost all
              operating systems, I collaborated with the community to test, fix,
              and enhance software, thereby ensuring its stability and
              reliability across a diverse range of operating systems.
            </li>
            <li>
              I used Jenkins and GitHub Actions for efficient CI/CD processes,
              as well as Ec2 instances for AWS.
            </li>
          </ul>
        </li>
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Nov 2018 - Apr 2019 · 6 mos
          </time>
          <h3 class="text-2xl text-white font-black ">Nagarro</h3>
          <p class="ml-10 text-lg font-extrabold leading-none text-gray-500">
            (.NET Core · JavaScript · C# · Angular)
          </p>
          <ul class="mt-5 ml-5 list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
            <li>
              Actively contributed to the development and deployment of .Net
              Core microservices using Docker.
            </li>
            <li>
              Implemented microservices to gather data from diverse factory
              machines.
            </li>
            <li>
              Leveraged NodeRed, a powerful tool for integrating APIs, hardware
              devices, and online services, to generate customized Angular web
              applications based on customer requirements.
            </li>
          </ul>
        </li>
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2013 - Nov 2018 · 5 yrs 7 mos
          </time>
          <h3 class="text-2xl text-white font-black">Honeywell</h3>
          <p class="ml-10 text-lg font-extrabold leading-none text-gray-500">
            (C# · Python)
          </p>
          <ul class="mt-5 ml-5 list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
            <li>
              Developed desktop applications, libraries for smart meters and
              tools using Visual Studio (C#) to test and configure various
              functions in smart Electric/Gas meters.
            </li>
            <li>
              Implemented graphical representation of information retrieved,
              displayed in the User Interface.
            </li>
            <li>
              Utilized Python to create production scripts for configuring
              meters on the assembly line.
            </li>
            <li>
              Developed desktop applications, libraries for smart meters and
              tools using Visual Studio (C#) to test and configure various
              functions in smart Electric/Gas meters.
            </li>
            <li>
              Implemented graphical representation of information retrieved,
              displayed in the User Interface.
            </li>
            <li>
              Utilized Python to create production scripts for configuring
              meters on the assembly line.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
});
