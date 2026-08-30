<template>
  <section id="skills" class="skills">
    <div class="skills-inner">
      <h2 class="section-title">{{ content.sections.skills }}</h2>

      <div class="skills-grid">
        <div v-for="skill in content.skillsList" :key="skill.name" class="skill-card">
          <img
            :src="skill.icon"
            :alt="skill.name"
            class="skill-icon"
            width="32"
            height="32"
            loading="lazy"
            decoding="async"
          />
          <span class="skill-name">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolio } from '@/composables/usePortfolio'

const { content } = usePortfolio()
</script>

<style scoped>
.skills {
  padding: 48px 0;
}

.skills-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 32px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  max-width: 420px;
  margin: 0 auto;
  direction: ltr;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  border-radius: 10px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
}

.skill-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.skill-name {
  font-size: 11px;
  font-weight: 500;
  color: var(--text-secondary);
  text-align: center;
  line-height: 1.2;
}

@media (min-width: 480px) {
  .skills-grid {
    gap: 16px;
    max-width: 480px;
  }

  .skill-card {
    padding: 20px 10px;
  }

  .skill-icon {
    width: 36px;
    height: 36px;
  }

  .skill-name {
    font-size: 12px;
  }
}

@media (min-width: 768px) {
  .skills {
    padding: 64px 0;
  }

  .section-title {
    font-size: 28px;
    margin-bottom: 40px;
  }

  .skills-grid {
    gap: 20px;
    max-width: 540px;
  }

  .skill-card {
    padding: 24px 14px;
  }

  .skill-icon {
    width: 40px;
    height: 40px;
  }

  .skill-name {
    font-size: 13px;
  }
}
</style>
