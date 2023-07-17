import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export const CustomCursor = component$(() => {
  const dot = useSignal<HTMLElement>();
  const dotOutline = useSignal<HTMLElement>();

  const delay = 8;

  const cursorVisible = useSignal(true);
  const cursorEnlarged = useSignal(false);

  const endX = useSignal(100);
  const endY = useSignal(100);
  const _x = useSignal(0);
  const _y = useSignal(0);

  const requestRef = useSignal<number>();

  const toggleCursorVisibility = $(() => {
    if (!cursorVisible.value) {
      dot.value && (dot.value.style.opacity = "0");
      dotOutline.value && (dotOutline.value.style.opacity = "0");
    } else {
      dot.value && (dot.value.style.opacity = "1");
      dotOutline.value && (dotOutline.value.style.opacity = "1");
    }
  });

  const toggleCursorSize = $(() => {
    if (cursorEnlarged.value) {
      dot.value &&
        (dot.value.style.transform = `translate(-50%, -50%) scale(0.75)`);
      dotOutline.value &&
        (dotOutline.value.style.transform = `translate(-50%, -50%) scale(1.5)`);
    } else {
      dot.value &&
        (dot.value.style.transform = `translate(-50%, -50%) scale(1)`);
      dotOutline.value &&
        (dotOutline.value.style.transform = `translate(-50%, -50%) scale(1)`);
    }
  });

  const mouseOverEvent = $(() => {
    cursorEnlarged.value = true;
    toggleCursorSize();
  });

  const mouseOutEvent = $(() => {
    cursorEnlarged.value = false;
    toggleCursorSize();
  });

  const mouseEnterEvent = $(() => {
    cursorVisible.value = true;
    toggleCursorVisibility();
  });

  const mouseLeaveEvent = $(() => {
    cursorVisible.value = false;
    toggleCursorVisibility();
  });

  const mouseMoveEvent = $((e: MouseEvent) => {
    cursorVisible.value = true;
    toggleCursorVisibility();

    endX.value = e.pageX;
    endY.value = e.pageY;

    dot.value && (dot.value.style.top = `${endY.value}px`);
    dot.value && (dot.value.style.left = `${endX.value}px`);
  });

  useVisibleTask$(() => {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);

    (function animateDotOutline() {
      _x.value += (endX.value - _x.value) / delay;
      _y.value += (endY.value - _y.value) / delay;

      dotOutline.value && (dotOutline.value.style.top = `${_y.value}px`);
      dotOutline.value && (dotOutline.value.style.left = `${_x.value}px`);

      requestRef.value = requestAnimationFrame(animateDotOutline);
    })();

    return () => {
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mouseup", mouseOutEvent);
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);

      cancelAnimationFrame(requestRef.value!);
    };
  });

  return (
    <>
      <div
        ref={dotOutline}
        class="w-10 h-10 bg-[rgba(255,255,255,0.5)] pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 transition-opacity duration-150 ease-in-out z-50"
      ></div>
      <div
        ref={dot}
        class="w-[10px] h-[10px] bg-white pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 rounded-full opacity-20 transition-opacity duration-150 ease-in-out z-50"
      ></div>
    </>
  );
});
