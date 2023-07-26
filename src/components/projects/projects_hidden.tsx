import { component$ } from "@builder.io/qwik";
import ImgThisWebsite from "/public/this_website.png?jsx";
import ImgThisWebsiteWide from "/public/this_website_wide.png?jsx";

export default component$(() => {
  return (
    <div
      class="max-w-full relative flex-col flex flex-nowrap pl-[8%] pb-[10%] pr-[8%] pt-32 md:pl-[10%] md:pr-[10%] md:pt-48"
      id="projects"
    >
      <p class="text-2xl text-white font-extrabold">Projects</p>

      <div class="grid gap-y-28">
        <div class="max-w-4xl flex items-center flex-wrap mx-auto my-32 lg:my-0">
          <div class="w-full lg:w-2/5">
            {/* <ImgThisWebsite class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" /> */}
          </div>
          <div class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
            <div class="p-4 md:p-12 text-center lg:text-left">
              <div class="block lg:hidden shadow-xl mx-auto bg-cover bg-center">
                {/* <ImgThisWebsiteWide class="rounded-xl w-auto h-auto" /> */}
              </div>

              <h1 class="text-3xl font-bold pt-8 lg:pt-0">This website</h1>
              <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-purple-500 opacity-25"></div>
              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Tech stack
              </p>
              <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <svg
                  class="h-4 fill-current pr-1"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                    fill="#53C1DE"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                    fill="#53C1DE"
                  />
                </svg>
                React
              </p>

              <p class="pt-0 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <svg
                  class="h-4 fill-current pr-1"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>file_type_typescript_official</title>
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="1.312"
                    style="fill:#3178c6"
                  />
                  <path
                    d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z"
                    style="fill:#ffffff;fill-rule:evenodd"
                  />
                </svg>
                Typescript
              </p>

              <p class="pt-0 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <svg
                  class="h-4 fill-current pr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                    style="fill:#44a8b3"
                  />
                </svg>{" "}
                TailwindCSS
              </p>
              <p class="pt-0 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <svg class="h-4 fill-current pr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path
                    style=" stroke:none;fill-rule:nonzero;fill:rgb(9.411765%,71.372549%,96.470588%);fill-opacity:1;"
                    d="M 95.671875 112.554688 L 78.242188 95.214844 L 77.996094 95.257812 L 77.996094 95.074219 L 40.929688 58.417969 L 50.082031 49.597656 L 44.699219 18.757812 L 19.230469 50.355469 C 14.90625 54.722656 14.074219 61.863281 17.207031 67.105469 L 33.125 93.527344 C 35.558594 97.578125 39.382812 100.183594 44.722656 99.992188 C 56.027344 99.589844 60.996094 99.589844 60.996094 99.589844 L 95.664062 112.546875 L 95.671875 112.558594 Z M 95.671875 112.554688 "
                  />
                  <path
                    style=" stroke:none;fill-rule:nonzero;fill:rgb(67.45098%,49.411765%,95.686275%);fill-opacity:1;"
                    d="M 104.285156 63.960938 C 106.792969 58.785156 107.691406 54.257812 105.214844 49.707031 L 101.691406 43.222656 L 99.863281 39.894531 L 99.152344 38.597656 L 99.085938 38.671875 L 89.5 22.042969 C 87.082031 17.835938 82.582031 15.265625 77.734375 15.320312 L 69.328125 15.558594 L 44.234375 15.625 C 39.496094 15.65625 35.125 18.175781 32.722656 22.257812 L 17.476562 52.539062 L 44.761719 18.59375 L 80.554688 57.953125 L 74.148438 64.445312 L 77.972656 95.238281 L 78.027344 95.167969 L 78.027344 95.257812 L 77.972656 95.257812 L 78.046875 95.332031 L 81.03125 98.238281 L 95.46875 112.339844 C 96.074219 112.925781 97.058594 112.222656 96.65625 111.5 L 87.730469 93.9375 "
                  />
                  <path
                    style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
                    d="M 80.640625 57.855469 L 44.753906 18.695312 L 49.851562 49.359375 L 40.71875 58.222656 L 77.90625 95.179688 L 74.554688 64.5 L 80.640625 57.867188 Z M 80.640625 57.855469 "
                  />
                </svg>{" "}
                Qwik
              </p>

              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Short description
              </p>
              <p class="text-sm">
                Did this site load fast?
                <br />I hope so, because I used{" "}
                <a
                  class="font-bold no-underline text-gray-900"
                  href="https://qwik.builder.io/"
                  target="_blank"
                >
                  Qwik
                </a>
                it claims it's the fastest front-end framework right now(2023)
                regardless of the size and complexity of your site.
                <br />
                It's considered as O(1) complexity as it can achieve consistent
                performance at scale
              </p>

              <div class="pt-12 pb-8">
                <button class="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full">
                  Go to project
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-4xl flex items-center flex-wrap mx-auto my-32 lg:my-0">
          <div class="w-full lg:w-2/5">
            <ImgThisWebsite class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
          </div>
          <div class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
            <div class="p-4 md:p-12 text-center lg:text-left">
              <div class="block lg:hidden shadow-xl mx-auto bg-cover bg-center">
                <ImgThisWebsiteWide class=" rounded-xl w-auto h-auto" />
              </div>

              <h1 class="text-3xl font-bold pt-8 lg:pt-0">SAAS website</h1>
              <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-purple-500 opacity-25"></div>
              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Tech stack
              </p>
              <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <svg
                  class="h-4 fill-current pr-1"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                    fill="#53C1DE"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                    fill="#53C1DE"
                  />
                </svg>
                React
              </p>

              <p class="pt-0 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <svg
                  class="h-4 fill-current pr-1"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>file_type_typescript_official</title>
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="1.312"
                    style="fill:#3178c6"
                  />
                  <path
                    d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z"
                    style="fill:#ffffff;fill-rule:evenodd"
                  />
                </svg>
                Typescript
              </p>

              <p class="pt-0 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <svg
                  class="h-4 fill-current pr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                    style="fill:#44a8b3"
                  />
                </svg>{" "}
                TailwindCSS
              </p>
              <p class="pt-0 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                Azure & Vercel
              </p>
              <p class="pt-0 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                Planetscale
              </p>
              <p class="pt-0 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                Elastic Search
              </p>
              <p class="pt-0 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                Stripe
              </p>

              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Short description
              </p>
              <p class="text-sm">
                Did this site load fast?
                <br />I hope so, because I used{" "}
                <a
                  class="font-bold no-underline text-gray-900"
                  href="https://qwik.builder.io/"
                  target="_blank"
                >
                  Qwik
                </a>
                it claims it's the fastest front-end framework right now(2023)
                regardless of the size and complexity of your site.
                <br />
                It's considered as O(1) complexity as it can achieve consistent
                performance at scale
              </p>

              <div class="pt-12 pb-8">
                <button class="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full">
                  Go to project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-[5%] left-1/2 z-10 transform -translate-x-1/2 translate-y-1/2 bg-transparent text-center">
        <h1 class="text-slate-200 font-extrabold opacity-50">Experience</h1>
        <button
          class="border-2 text-slate-400 rounded-full w-12 h-12 animate-bounce mt-4 opacity-50"
          aria-label="Scroll down"
          // go to projects section
          onClick$={() => {
            const projects = document.getElementById("experience");
            projects?.scrollIntoView({ behavior: "smooth" });
          }}
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
