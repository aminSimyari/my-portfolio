<template>
  <div class="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
    <Navbar />
    <Hero />
    <Skills />
    <Project />
    <Contacts />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Skills from '@/components/Skills.vue'
import Project from '@/components/Project.vue'
import Contacts from '@/components/Contacts.vue'
import Footer from '@/components/Footer.vue'
</script>
