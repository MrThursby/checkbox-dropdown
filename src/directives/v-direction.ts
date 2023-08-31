import type { Directive } from "vue";
import type { Direction } from "@/types/direction";

export const vDirection: Directive<HTMLElement, Direction> = {
  bind: function (el, binding) {
    el.dataset.direction = binding.value;
  },
};
