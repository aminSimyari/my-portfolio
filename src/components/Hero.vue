<template>
  <section id="home" class="hero">
    <div class="hero-inner" :class="{ 'hero-rtl': isRtl }">
      <div class="hero-content">
        <h1 class="hero-name">{{ content.hero.name }}</h1>
        <p class="hero-role">{{ content.hero.role }}</p>
        <p class="hero-description">{{ content.hero.description }}</p>
      </div>

      <div class="hero-avatar">
        <img
          :src="avatarSrc"
          :alt="content.hero.name"
          class="avatar-img"
          width="100"
          height="100"
          fetchpriority="high"
        />
      </div>
    </div>

    <div class="hero-buttons">
      <a href="#projects" class="btn btn-primary">
        {{ content.hero.buttons.projects }}
      </a>
      <a href="#contact" class="btn btn-secondary">
        {{ content.hero.buttons.contact }}
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolio } from '@/composables/usePortfolio'

const { content, isRtl } = usePortfolio()
const avatarSrc = '/images/avatar.jpg'
</script>

<style scoped>
.hero {
  padding-top: 80px;
  padding-bottom: 48px;
}

.hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  direction: ltr;
}

.hero-rtl {
  flex-direction: row-reverse;
}

.hero-rtl .hero-content {
  text-align: right;
}

.hero-content {
  flex: 1;
  min-width: 0;
}

.hero-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 6px;
  line-height: 1.3;
}

.hero-role {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.hero-description {
  font-size: 0.8rem;
  color: var(--text-primary);
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 130px;
  padding: 9px 24px;
  border-radius: 999px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #ffffff;
  background-color: var(--button-bg);
  text-decoration: none;
  transition:
    background-color 0.2s,
    transform 0.2s;
}

.btn:hover {
  background-color: var(--contact-bg);
  transform: translateY(-1px);
}

.hero-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--border-color);
  flex-shrink: 0;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 768px) {
  .hero {
    padding-top: 100px;
    padding-bottom: 64px;
  }

  .hero-inner {
    gap: 40px;
  }

  .hero-name {
    font-size: 2rem;
  }

  .hero-role {
    font-size: 1.0625rem;
  }

  .hero-description {
    font-size: 0.85rem;
  }

  .hero-buttons {
    gap: 40px;
    margin-top: 150px;
  }

  .btn {
    padding: 10px 24px;
    font-size: 0.875rem;
  }

  .hero-avatar {
    width: 200.5px;
    height: 200.97px;
  }
}
</style>
