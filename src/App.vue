<script setup lang="ts">
import { type Ref, ref } from "vue";
import FormCheckboxList from "@/components/FormCheckboxList.vue";
import type { FormCheckboxListItem } from "@/types/form-checkbox-list-item";
import AppContainer from "@/components/AppContainer.vue";
import AppDropdown from "@/components/AppDropdown.vue";
import IconImage from "@/components/icons/IconImage.vue";
import AppDropdownItem from "@/components/AppDropdownItem.vue";

const checkboxesValue = ref([4]);
const checkboxes: FormCheckboxListItem[] = [
  { id: 1, title: "apple", visible: true, disabled: true },
  { id: 2, title: "melon", visible: false },
  { id: 3, title: "pineapple", visible: true },
  { id: 4, title: "disabled checked", visible: true, disabled: true },
  { id: 5, title: "toggle", visible: true, variant: "toggle" },
];

const dropdownValue: Ref<number | null> = ref(3);
const dropdownItems = [
  { id: 1, title: "Первый" },
  { id: 2, title: "Второй" },
  { id: 3, title: "Третий" },
  { id: 4, title: "Четвертый", disabled: true },
  { id: 5, title: "Пятый", icon: IconImage, disabled: true },
  { id: 6, title: "Шестой", icon: IconImage },
];

function setDropdownValue(value: number, close: () => void) {
  dropdownValue.value = value;
  console.log(value);
  close();
}
</script>

<template>
  <div id="app">
    <AppContainer class="app">
      <div class="app__dropdowns-list">
        <AppDropdown
          v-model="dropdownValue"
          :items="dropdownItems"
          v-slot="{ close }"
        >
          <AppDropdownItem
            v-for="item of dropdownItems"
            :key="item.id"
            :active="dropdownValue === item.id"
            v-bind="item"
            @click="setDropdownValue(item.id, close)"
          />
        </AppDropdown>

        <AppDropdown v-slot="{ close }">
          <AppDropdownItem
            v-for="item of dropdownItems"
            :key="item.id"
            :active="dropdownValue === item.id"
            v-bind="item"
            @click="setDropdownValue(item.id, close)"
          />
        </AppDropdown>
      </div>

      <div class="app__main-content">
        <FormCheckboxList :list="checkboxes" v-model="checkboxesValue" />
      </div>

      <div class="app__dropdowns-list">
        <AppDropdown v-slot="{ close }">
          <AppDropdownItem
            v-for="item of dropdownItems"
            :key="item.id"
            :active="dropdownValue === item.id"
            v-bind="item"
            @click="setDropdownValue(item.id, close)"
          />
        </AppDropdown>

        <AppDropdown v-slot="{ close }">
          <AppDropdownItem
            v-for="item of dropdownItems"
            :key="item.id"
            :active="dropdownValue === item.id"
            v-bind="item"
            @click="setDropdownValue(item.id, close)"
          />
        </AppDropdown>
      </div>
    </AppContainer>
  </div>
</template>

<style>
.app {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
  min-height: 100vh;
  box-sizing: border-box;
}

.app__main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.app__dropdowns-list {
  display: flex;
  justify-content: space-between;
}
</style>
