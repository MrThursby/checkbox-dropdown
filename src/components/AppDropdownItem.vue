<script setup lang="ts">
import type { Component } from "vue";

const props = defineProps<{
  title: string;
  icon?: Component;
  active?: boolean;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const Icon = props.icon;

function onClick() {
  if (props.disabled) return;

  emit("click");
}
</script>

<template>
  <div
    class="app-dropdown-item"
    :class="{
      'app-dropdown-item_active': active,
      'app-dropdown-item_disabled': disabled,
    }"
    @click="onClick"
  >
    <div class="app-dropdown-item__icon" v-if="icon"><Icon /></div>
    <span class="app-dropdown-item__title">{{ title }}</span>
  </div>
</template>

<style>
.app-dropdown-item {
  font-size: 14px;
  padding: 6px 12px 6px 10px;
  border-left: 2px solid transparent;
  cursor: pointer;
  height: 20px;
  display: flex;
  gap: 6px;
  align-items: center;
  user-select: none;
  background: var(--color-primary-500);
}

.app-dropdown-item__icon {
  color: var(--color-primary-200);
}

.app-dropdown-item_active {
  background: var(--color-primary-700);
  border-color: var(--color-secondary-500);
}

.app-dropdown-item_disabled {
  cursor: default;
}

.app-dropdown-item_disabled .app-dropdown-item__title {
  color: var(--gradient-gray);
}

.app-dropdown-item_disabled .app-dropdown-item__icon {
  color: var(--color-primary-300);
}

.app-dropdown-item__title {
  padding-top: 2px;
}

.app-dropdown-item__icon {
  width: 16px;
  height: 16px;
}
</style>
