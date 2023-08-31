<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppButton",
  methods: {
    onClick: function () {
      this.$emit("click");
    },
  },
});
</script>

<template>
  <button class="app-button" @click="onClick">
    <slot />
  </button>
</template>

<style>
.app-button {
  cursor: pointer;
  border: 1px solid var(--color-primary-300);
  color: var(--color-primary-200);
  background: var(--color-primary-700);
  transition: all 0.1s;
  height: 24px;
  min-width: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  padding: 4px;
}

.app-button:focus {
  border-color: var(--color-secondary-500);
  color: var(--color-secondary-500);
}
</style>
