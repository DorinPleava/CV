import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer>
      <div class="container text-white p-10 text-center">
        <button
          onClick$={() => {
            const projects = document.getElementById("contact-me");
            projects?.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
          }}
        >
          <hi>Contact me</hi>
        </button>
      </div>
    </footer>
  );
});
