import { ref, computed, watch } from 'vue'
import contentEn from './content.en.yml'
import contentFa from './content.fa.yml'

const en = contentEn as unknown as ContentData
const fa = contentFa as unknown as ContentData

export type Language = 'en' | 'fa'
export type Theme = 'light' | 'dark'

export interface NavLink {
  label: string
  href: string
}

export interface HeroButtons {
  projects: string
  contact: string
}

export interface Skill {
  name: string
  icon: string
}

export interface Project {
  id: string
  title: string
  image: string
  github: string
}

export interface ContactLinks {
  email: string
  emailLabel: string
  telegram: string
  github: string
}

export interface ContentData {
  nav: {
    brand: string
    langToggle: string
  }
  hero: {
    name: string
    role: string
    description: string
    buttons: HeroButtons
  }
  sections: {
    skills: string
    projects: string
    contact: string
  }
  skillsList: Skill[]
  projectsList: Project[]
  contactLinks: ContactLinks
  footer: string
}

const LANG_KEY = 'portfolio-lang'
const THEME_KEY = 'portfolio-theme'

function stored<T extends string>(key: string, valid: readonly T[], fallback: T): T {
  const raw = localStorage.getItem(key)
  return valid.includes(raw as T) ? (raw as T) : fallback
}

const language = ref<Language>(stored(LANG_KEY, ['en', 'fa'], 'fa'))
const theme = ref<Theme>(stored(THEME_KEY, ['light', 'dark'], 'light'))

const content = computed<ContentData>(() => (language.value === 'en' ? en : fa))

const isRtl = computed(() => language.value === 'fa')
const isDark = computed(() => theme.value === 'dark')

function toggleLanguage() {
  language.value = language.value === 'en' ? 'fa' : 'en'
}

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

function applyTheme(t: Theme) {
  const el = document.documentElement
  el.setAttribute('data-theme', t)
  el.classList.toggle('dark', t === 'dark')
}

function syncDom(dir: 'rtl' | 'ltr', lang: Language) {
  document.documentElement.lang = lang
  document.documentElement.dir = dir
}

watch(language, (v) => {
  localStorage.setItem(LANG_KEY, v)
  syncDom(v === 'fa' ? 'rtl' : 'ltr', v)
})

watch(theme, (v) => {
  localStorage.setItem(THEME_KEY, v)
  applyTheme(v)
})

syncDom(language.value === 'fa' ? 'rtl' : 'ltr', language.value)
applyTheme(theme.value)

export function usePortfolio() {
  return {
    language,
    theme,
    content,
    isRtl,
    isDark,
    toggleLanguage,
    toggleTheme,
  }
}
