import type { Directive } from "vue";

export const vClickOutside: Directive<HTMLElement, () => void> = {
  inserted: function (el, binding) {
    window.addEventListener("click", (event) => {
      const isClickOccurredOutside = !el.contains(event.target as Node);

      if (isClickOccurredOutside) binding.value();
    });
  },
};
