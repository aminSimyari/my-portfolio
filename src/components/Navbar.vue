<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="#home" class="navbar-brand">{{ content.nav.brand }}</a>

      <div class="navbar-actions">
        <button
          class="toggle-btn lang-toggle"
          :aria-label="`Switch to ${content.nav.langToggle}`"
          @click="toggleLanguage"
        >
          {{ content.nav.langToggle }}
        </button>

        <button
          class="toggle-btn theme-toggle"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <img
            :src="isDark ? '/icons/Sun.svg' : '/icons/Moon.svg'"
            alt=""
            class="toggle-icon"
            width="16"
            height="16"
            decoding="async"
          />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { usePortfolio } from '@/composables/usePortfolio'

const { content, isDark, toggleTheme, toggleLanguage } = usePortfolio()
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: var(--bg-navbar);
}

.navbar-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  font-weight: 700;
  font-size: 16px;
  color: var(--text-primary);
  text-decoration: none;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  border-radius: 6px;
  background: var(--button-bg);
  border: 1px solid var(--border-color);
}

.lang-toggle {
  width: auto;
  padding: 0 10px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
}

.theme-toggle {
  width: 32px;
  padding: 0;
}

.toggle-icon {
  width: 16px;
  height: 16px;
  filter: brightness(0) invert(1);
}
</style>
