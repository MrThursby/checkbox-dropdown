<script setup lang="ts">
import AppButton from "@/components/AppButton.vue";
import IconDots from "@/components/icons/IconDots.vue";
import { ref } from "vue";

const opened = ref();

function close() {
  opened.value = false;
}

function toggle() {
  opened.value = !opened.value;
}
</script>

<template>
  <div class="app-dropdown" v-direction v-click-outside="close">
    <AppButton @click="toggle" v-direction.toggle>
      <IconDots />
    </AppButton>

    <Transition name="app-dropdown__items-list_transition">
      <div class="app-dropdown__items-list_wrapper" v-show="opened">
        <div class="app-dropdown__items-list" v-direction.target>
          <slot :close="close" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style>
.app-dropdown {
  position: relative;
  max-width: min-content;
}

.app-dropdown__items-list_wrapper {
  background: var(--color-primary-700);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.75);
  z-index: 1000;
  width: 200px;
  position: absolute;
  border-radius: 2px;
  padding: 2px 0;
  top: calc(100% + 2px);
}

.v-direction_left-up .app-dropdown__items-list_wrapper,
.v-direction_right-up .app-dropdown__items-list_wrapper {
  bottom: calc(100% + 2px);
  top: auto;
}

.v-direction_left-down .app-dropdown__items-list_wrapper,
.v-direction_left-up .app-dropdown__items-list_wrapper {
  right: 0;
  left: auto;
}

.app-dropdown__items-list {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.app-dropdown__items-list_transition-enter-active,
.app-dropdown__items-list_transition-leave-active {
  transition: all 0.1s;
}

.app-dropdown__items-list_transition-enter,
.app-dropdown__items-list_transition-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
