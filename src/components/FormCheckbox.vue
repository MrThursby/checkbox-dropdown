<script lang="ts">
import { defineComponent, type PropType } from "vue";
import IconCheck from "@/components/icons/IconCheck.vue";
import type { FormCheckboxVariant } from "@/types/form-checkbox-variant";

export default defineComponent({
  name: "FormCheckbox",
  components: { IconCheck },
  model: {
    prop: "checked",
    event: "change",
  },
  methods: {
    toggle() {
      if (this.disabled) return;

      this.$emit("change", !this.checked);
    },
  },
  props: {
    id: String,
    label: String,
    variant: {
      type: String as PropType<FormCheckboxVariant>,
      default: "checkbox",
    },
    checked: Boolean,
    disabled: Boolean,
  },
});
</script>

<template>
  <div
    class="form-checkbox"
    :class="{
      'form-checkbox_checked': checked,
      'form-checkbox_disabled': disabled,
      'form-checkbox_toggle': variant === 'toggle',
    }"
  >
    <input
      class="form-checkbox__input"
      :value="checked"
      @change="toggle"
      type="checkbox"
      ref="input"
      :id="id"
    />

    <label
      tabindex="0"
      :for="id"
      class="form-checkbox__indicator-wrapper"
      @keydown.space.enter="toggle"
    >
      <Transition name="form-checkbox_transition">
        <IconCheck v-if="checked && variant !== 'toggle'" />
        <div v-if="variant === 'toggle'" class="form-checkbox__indicator"></div>
      </Transition>
    </label>

    <label class="form-checkbox__label" :for="id">{{ label }}</label>
  </div>
</template>

<style scoped>
.form-checkbox {
  display: flex;
  align-items: center;
  gap: 6px;
}

.form-checkbox__input {
  display: none;
}

.form-checkbox__indicator-wrapper {
  cursor: pointer;
  box-sizing: border-box;
  background: var(--color-primary-700);
  border: 1px solid var(--color-primary-400);
  color: var(--color-secondary-500);
  transition: all 0.1s;
  outline: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin: 2px;
}

.form-checkbox_toggle .form-checkbox__indicator-wrapper {
  width: 44px;
}

.form-checkbox__indicator-wrapper:focus {
  border: 1px solid var(--color-secondary-500);
}

.form-checkbox__indicator-wrapper:active {
  background: var(--color-primary-900);
}

.form-checkbox__indicator {
  transition: margin 0.1s;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  background: var(--color-primary-200);
  margin: 0 24px 0 0;
}

.form-checkbox_checked .form-checkbox__indicator {
  background: var(--color-secondary-500);
  margin: 0 0 0 24px;
}

.form-checkbox_disabled .form-checkbox__indicator-wrapper {
  color: var(--color-primary-300);
  border-color: var(--color-primary-300);
  background: var(--color-primary-500);
  cursor: default;
}

.form-checkbox__label {
  color: var(--color-primary-200);
  transition: color 0.1s;
}

.form-checkbox_checked .form-checkbox__label {
  color: var(--color-foreground);
}

.form-checkbox_disabled .form-checkbox__label {
  color: var(--gradient-gray);
}

.form-checkbox_transition-enter-active,
.form-checkbox_transition-leave-active {
  transition: opacity 0.05s;
}
.form-checkbox_transition-enter,
.form-checkbox_transition-leave-to {
  opacity: 0;
}
</style>
