import type { Directive } from "vue";
import { Direction } from "@/types/direction";

export const vDirection: Directive<HTMLElement, Direction> = {
  bind: function ($el, binding) {
    if (binding.modifiers.target)
      return $el.classList.add("v-direction__target");

    if (binding.modifiers.toggle)
      return $el.classList.add("v-direction__toggle");

    $el.classList.add("v-direction");

    const $toggle = $el.querySelector<HTMLElement>(".v-direction__toggle");
    if ($toggle) {
      $toggle.onclick = () => {
        const $target = $el.querySelector(".v-direction__target");

        if (!$toggle || !$target) return;

        const toggleClientRect = $toggle?.getBoundingClientRect();
        const popUpClientRect = $target?.getBoundingClientRect();

        const isNoPlaceOnTheRight =
          window.innerWidth - toggleClientRect.left <
          popUpClientRect.width;

        const isNoPlaceAtTheBottom =
          window.innerHeight - toggleClientRect.top + toggleClientRect.height <
          popUpClientRect.height;

        const direction = isNoPlaceOnTheRight
          ? isNoPlaceAtTheBottom
            ? Direction.LEFT_UP
            : Direction.LEFT_DOWN
          : isNoPlaceAtTheBottom
            ? Direction.RIGHT_UP
            : Direction.RIGHT_DOWN;

        [...$el.classList]
          .filter((className) => className.startsWith("v-direction_"))
          .forEach((className) => $el.classList.remove(className));

        $el.classList.add("v-direction_" + direction);
      };
    }
  },

  unbind: function ($el, binding) {
    if (binding.modifiers.popup)
      return $el.classList.remove("v-direction__target");

    if (binding.modifiers.toggle)
      return $el.classList.remove("v-direction__toggle");

    $el.classList.remove("v-direction");

    const $toggle = $el.querySelector<HTMLElement>(".v-direction__toggle");
    if ($toggle) $toggle.onclick = null;
  },
};
