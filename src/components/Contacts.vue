<template>
  <section id="contact" class="contact">
    <div class="contact-inner">
      <h2 class="section-title">{{ content.sections.contact }}</h2>

      <div class="contact-container">
        <a
          :href="content.contactLinks.telegram"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-item"
          aria-label="Telegram"
        >
          <img
            :src="telegramIcon"
            alt=""
            class="contact-icon"
            width="24"
            height="24"
            loading="lazy"
            decoding="async"
          />
        </a>

        <a
          :href="content.contactLinks.github"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-item"
          aria-label="GitHub"
        >
          <img
            :src="githubIcon"
            alt=""
            class="contact-icon"
            width="24"
            height="24"
            loading="lazy"
            decoding="async"
          />
        </a>

        <a
          :href="content.contactLinks.email"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-item"
          :aria-label="content.contactLinks.emailLabel"
        >
          <img
            :src="emailIcon"
            alt=""
            class="contact-icon"
            width="24"
            height="24"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolio } from '@/composables/usePortfolio'

const { content } = usePortfolio()

const emailIcon = '/icons/gmail f.svg'
const telegramIcon = '/icons/tel f.svg'
const githubIcon = '/icons/github f.svg'
</script>

<style scoped>
.contact {
  padding: 48px 0;
}

.contact-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 32px;
}

.contact-container {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 12px 20px;
  background-color: var(--bg-secondary);
  border-radius: 10px;
  direction: ltr;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 45px;
  border-radius: 24px;
  background-color: var(--button-bg);
  text-decoration: none;
  cursor: pointer;
}

.contact-icon {
  width: 24px;
  height: 24px;
}

@media (min-width: 768px) {
  .contact {
    padding: 64px 0;
  }

  .section-title {
    font-size: 28px;
    margin-bottom: 40px;
  }
}
</style>
