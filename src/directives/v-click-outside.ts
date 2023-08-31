import type { Directive } from "vue";

export const vClickOutside: Directive = {
  inserted: function (el, binding) {
    window.addEventListener("click", (event) => {
      const isBindingValueFunction = typeof binding.value === "function";
      const isClickOccurredOutside = !el.contains(event.target as Node);

      if (isBindingValueFunction && isClickOccurredOutside) binding.value();
    });
  },
};
