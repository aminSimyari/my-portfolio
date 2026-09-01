<template>
  <footer class="footer">
    <div class="footer-inner">
      <p class="footer-text">{{ content.footer }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { usePortfolio } from '@/composables/usePortfolio'

const { content } = usePortfolio()
</script>

<style scoped>
.footer {
  padding: 24px 0;
  border-top: 1px solid var(--border-color);
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}

.footer-text {
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.5;
}
</style>
