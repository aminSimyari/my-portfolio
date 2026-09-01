<template>
  <section id="projects" class="projects">
    <div class="projects-inner">
      <h2 class="section-title">{{ content.sections.projects }}</h2>

      <div class="projects-list">
        <article v-for="project in content.projectsList" :key="project.id" class="project-item">
          <h3 class="project-title">{{ project.title }}</h3>
          <div class="project-image">
            <img
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              decoding="async"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolio } from '@/composables/usePortfolio'

const { content } = usePortfolio()
</script>

<style scoped>
.projects {
  padding: 48px 0 60px;
}

.projects-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 40px;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 48px;
  direction: ltr;
}

.project-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 16px;
}

.project-image {
  width: 100%;
  background-color: var(--bg-secondary);
  border-radius: 12px;
  padding: 24px;
}

.project-image img {
  width: 100%;
  height: auto;
  display: block;
  image-rendering: auto;
}

@media (min-width: 768px) {
  .projects {
    padding: 64px 0 80px;
  }

  .section-title {
    font-size: 28px;
    margin-bottom: 48px;
  }

  .projects-list {
    gap: 64px;
  }

  .project-title {
    font-size: 18px;
  }

  .project-image {
    padding: 32px;
  }
}
</style>
