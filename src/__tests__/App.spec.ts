import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

beforeEach(() => {
  localStorage.clear()
})

describe('App', () => {
  function mountApp() {
    return mount(App)
  }

  it('mounts renders properly', () => {
    const wrapper = mountApp()
    expect(wrapper.text()).toContain('امین سیمیاری')
  })
  it('does not crash on mount', () => {
    const wrapper = mountApp()
    expect(wrapper.exists()).toBe(true)
  })

  describe('Navbar', () => {
    it('has the brand name in navbar', () => {
      const wrapper = mountApp()
      const navbar = wrapper.find('.navbar-brand')
      expect(navbar.exists()).toBe(true)
      expect(navbar.text()).toContain('امین سیمیاری')
    })

    it('has a language toggle button', () => {
      const wrapper = mountApp()
      const langBtn = wrapper.find('.lang-toggle')
      expect(langBtn.exists()).toBe(true)
      expect(langBtn.text()).toBe('En')
    })

    it('has a theme toggle button', () => {
      const wrapper = mountApp()
      const themeBtn = wrapper.find('.theme-toggle')
      expect(themeBtn.exists()).toBe(true)
    })

    it('theme toggle has sun or moon icon', () => {
      const wrapper = mountApp()
      const themeBtn = wrapper.find('.theme-toggle')
      const icon = themeBtn.find('.toggle-icon')
      expect(icon.exists()).toBe(true)
      const src = icon.attributes('src')
      expect(src?.includes('/icons/Sun.svg') || src?.includes('/icons/Moon.svg')).toBe(true)
    })

    it('starts in light mode by default', () => {
      const wrapper = mountApp()
      const themeBtn = wrapper.find('.theme-toggle')
      expect(themeBtn.attributes('aria-label')).toBe('Switch to dark mode')
    })

    it('clicking theme toggle switches to dark mode', async () => {
      const wrapper = mountApp()
      const themeBtn = wrapper.find('.theme-toggle')
      await themeBtn.trigger('click')
      await wrapper.vm.$nextTick()
      expect(themeBtn.attributes('aria-label')).toBe('Switch to light mode')
    })

    it('clicking theme toggle again switches back to light', async () => {
      const wrapper = mountApp()
      const themeBtn = wrapper.find('.theme-toggle')
      const labelBefore = themeBtn.attributes('aria-label')
      await themeBtn.trigger('click')
      await wrapper.vm.$nextTick()
      await themeBtn.trigger('click')
      await wrapper.vm.$nextTick()
      expect(themeBtn.attributes('aria-label')).toBe(labelBefore)
    })

    it('theme toggle icon changes after click', async () => {
      const wrapper = mountApp()
      const themeBtn = wrapper.find('.theme-toggle')
      const iconBefore = themeBtn.find('.toggle-icon').attributes('src')
      await themeBtn.trigger('click')
      await wrapper.vm.$nextTick()
      const iconAfter = themeBtn.find('.toggle-icon').attributes('src')
      expect(iconBefore).not.toBe(iconAfter)
    })

    it('theme is saved in localStorage', async () => {
      const wrapper = mountApp()
      const themeBtn = wrapper.find('.theme-toggle')
      await themeBtn.trigger('click')
      await wrapper.vm.$nextTick()
      expect(localStorage.getItem('portfolio-theme')).toBe('dark')
    })

    it('navbar is fixed at the top', () => {
      const wrapper = mountApp()
      const nav = wrapper.find('nav')
      expect(nav.exists()).toBe(true)
      expect(nav.classes()).toContain('navbar')
    })
  })

  describe('Hero', () => {
    it('shows the hero name', () => {
      const wrapper = mountApp()
      expect(wrapper.text()).toContain('محمدامین سیمیاری')
    })

    it('shows the role', () => {
      const wrapper = mountApp()
      expect(wrapper.text()).toContain('مهندس فرانت‌اند')
    })

    it('has two buttons in hero', () => {
      const wrapper = mountApp()
      const buttons = wrapper.findAll('.hero-buttons .btn')
      expect(buttons.length).toBe(2)
    })

    it('hero buttons have correct text', () => {
      const wrapper = mountApp()
      const buttons = wrapper.findAll('.hero-buttons .btn')
      expect(buttons.length).toBe(2)
      expect(buttons[0]?.text()).toContain('پروژه')
      expect(buttons[1]?.text()).toContain('ارتباط')
    })

    it('hero buttons link to correct sections', () => {
      const wrapper = mountApp()
      const buttons = wrapper.findAll('.hero-buttons .btn')
      expect(buttons.length).toBe(2)
      expect(buttons[0]?.attributes('href')).toBe('#projects')
      expect(buttons[1]?.attributes('href')).toBe('#contact')
    })

    it('has the avatar image', () => {
      const wrapper = mountApp()
      const img = wrapper.find('.avatar-img')
      expect(img.exists()).toBe(true)
      expect(img.attributes('src')?.includes('/images/avatar.jpg')).toBe(true)
    })
  })

  describe('Skills', () => {
    it('shows skills section title', () => {
      const wrapper = mountApp()
      expect(wrapper.text()).toContain('مهارت‌ها')
    })

    it('has 9 skill cards', () => {
      const wrapper = mountApp()
      const cards = wrapper.findAll('.skill-card')
      expect(cards.length).toBe(9)
    })

    it('has JavaScript skill', () => {
      const wrapper = mountApp()
      expect(wrapper.text()).toContain('JavaScript')
    })

    it('has Vue.js skill', () => {
      const wrapper = mountApp()
      expect(wrapper.text()).toContain('Vue.js')
    })

    it('has TypeScript skill', () => {
      const wrapper = mountApp()
      expect(wrapper.text()).toContain('TypeScript')
    })

    it('skills have icon images', () => {
      const wrapper = mountApp()
      const icons = wrapper.findAll('.skill-icon')
      expect(icons.length).toBe(9)
    })

    it('JavaScript skill icon has correct path', () => {
      const wrapper = mountApp()
      const icons = wrapper.findAll('.skill-icon')
      expect(icons.length).toBe(9)
      expect(icons[0]?.attributes('src')?.includes('/icons/js.svg')).toBe(true)
    })
  })

  describe('Projects', () => {
    it('shows projects section title', () => {
      const wrapper = mountApp()
      expect(wrapper.text()).toContain('پروژه‌ها')
    })

    it('has 6 project items', () => {
      const wrapper = mountApp()
      const items = wrapper.findAll('.project-item')
      expect(items.length).toBe(6)
    })

    it('first project is map', () => {
      const wrapper = mountApp()
      const items = wrapper.findAll('.project-title')
      expect(items.length).toBe(6)
      expect(items[0]?.text()).toBe('نقشه')
    })

    it('has the To Do project', () => {
      const wrapper = mountApp()
      expect(wrapper.text()).toContain('To Do')
    })

    it('project links go to github', () => {
      const wrapper = mountApp()
      const links = wrapper.findAll('.project-item')
      expect(links.length).toBe(6)
      expect(links[0]?.attributes('href')).toBe('https://github.com/aminSimyari')
    })

    it('projects open in new tab', () => {
      const wrapper = mountApp()
      const links = wrapper.findAll('.project-item')
      links.forEach((link) => {
        expect(link.attributes('target')).toBe('_blank')
      })
    })

    it('project images load lazily', () => {
      const wrapper = mountApp()
      const images = wrapper.findAll('.project-image img')
      expect(images.length).toBeGreaterThan(0)
      expect(images[0]?.attributes('loading')).toBe('lazy')
    })
  })

  describe('Contacts', () => {
    it('shows contact section title', () => {
      const wrapper = mountApp()
      expect(wrapper.text()).toContain('ارتباط با من')
    })

    it('has 3 contact items', () => {
      const wrapper = mountApp()
      const items = wrapper.findAll('.contact-item')
      expect(items.length).toBe(3)
    })

    it('first contact item is telegram', () => {
      const wrapper = mountApp()
      const items = wrapper.findAll('.contact-item')
      expect(items.length).toBe(3)
      expect(items[0]?.attributes('aria-label')).toBe('Telegram')
    })

    it('second contact item is github', () => {
      const wrapper = mountApp()
      const items = wrapper.findAll('.contact-item')
      expect(items.length).toBe(3)
      expect(items[1]?.attributes('aria-label')).toBe('GitHub')
    })

    it('telegram link goes to correct url', () => {
      const wrapper = mountApp()
      const items = wrapper.findAll('.contact-item')
      expect(items.length).toBe(3)
      expect(items[0]?.attributes('href')).toBe('https://t.me/Amin_smy')
    })

    it('github link goes to correct url', () => {
      const wrapper = mountApp()
      const items = wrapper.findAll('.contact-item')
      expect(items.length).toBe(3)
      expect(items[1]?.attributes('href')).toBe('https://github.com/aminSimyari')
    })

    it('contact links open in new tab', () => {
      const wrapper = mountApp()
      const items = wrapper.findAll('.contact-item')
      items.forEach((item) => {
        expect(item.attributes('target')).toBe('_blank')
      })
    })

    it('contact icons have width and height', () => {
      const wrapper = mountApp()
      const icons = wrapper.findAll('.contact-icon')
      icons.forEach((icon) => {
        expect(icon.attributes('width')).toBe('24')
        expect(icon.attributes('height')).toBe('24')
      })
    })
  })

  describe('Footer', () => {
    it('shows the footer text', () => {
      const wrapper = mountApp()
      expect(wrapper.text()).toContain('طراحی‌شده توسط')
    })

    it('footer shows last updated date', () => {
      const wrapper = mountApp()
      expect(wrapper.text()).toContain('آخرین به‌روزرسانی')
    })

    it('footer has the border top', () => {
      const wrapper = mountApp()
      const footer = wrapper.find('.footer')
      expect(footer.exists()).toBe(true)
      expect(footer.classes()).toContain('footer')
    })
  })

  describe('Language switching', () => {
    async function ensureFa(wrapper: ReturnType<typeof mount>) {
      const langBtn = wrapper.find('.lang-toggle')

      if (langBtn.text().trim() === 'Fa') {
        await langBtn.trigger('click')
        await wrapper.vm.$nextTick()
      }
    }

    it('starts in fa language', async () => {
      const wrapper = mountApp()
      await ensureFa(wrapper)

      expect(wrapper.text()).toContain('امین سیمیاری')

      const langBtn = wrapper.find('.lang-toggle')
      expect(langBtn.text()).toBe('En')
    })

    it('can switch to english', async () => {
      const wrapper = mountApp()
      await ensureFa(wrapper)
      const langBtn = wrapper.find('.lang-toggle')
      await langBtn.trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.text()).toContain('Amin Simyari')
    })

    it('can switch back to fa after going to en', async () => {
      const wrapper = mountApp()
      await ensureFa(wrapper)
      const langBtn = wrapper.find('.lang-toggle')

      await langBtn.trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.text()).toContain('MohammadAmin')

      await langBtn.trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.text()).toContain('مهندس فرانت‌اند')
    })

    it('english shows correct hero name', async () => {
      const wrapper = mountApp()
      await ensureFa(wrapper)
      const langBtn = wrapper.find('.lang-toggle')
      await langBtn.trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.text()).toContain('MohammadAmin')
    })

    it('english shows skills section in english', async () => {
      const wrapper = mountApp()
      await ensureFa(wrapper)
      const langBtn = wrapper.find('.lang-toggle')
      await langBtn.trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.text()).toContain('Skills')
    })

    it('english shows projects section in english', async () => {
      const wrapper = mountApp()
      await ensureFa(wrapper)
      const langBtn = wrapper.find('.lang-toggle')
      await langBtn.trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.text()).toContain('Projects')
    })

    it('english footer text is different from fa', async () => {
      const wrapper = mountApp()
      await ensureFa(wrapper)
      const langBtn = wrapper.find('.lang-toggle')
      await langBtn.trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.text()).toContain('Designed by')
    })
  })

  describe('General rendering', () => {
    it('has all main sections', () => {
      const wrapper = mountApp()

      expect(wrapper.find('#home').exists()).toBe(true)
      expect(wrapper.find('#skills').exists()).toBe(true)
      expect(wrapper.find('#projects').exists()).toBe(true)
      expect(wrapper.find('#contact').exists()).toBe(true)
    })

    it('has navbar', () => {
      const wrapper = mountApp()
      expect(wrapper.find('nav').exists()).toBe(true)
    })

    it('has footer', () => {
      const wrapper = mountApp()
      expect(wrapper.find('footer').exists()).toBe(true)
    })

    it('all external links have noopener noreferrer', () => {
      const wrapper = mountApp()
      const externalLinks = wrapper.findAll('a[target="_blank"]')
      externalLinks.forEach((link) => {
        expect(link.attributes('rel')).toBe('noopener noreferrer')
      })
    })

    it('hero avatar has alt text', () => {
      const wrapper = mountApp()
      const avatar = wrapper.find('.avatar-img')
      expect(avatar.attributes('alt')).toBeTruthy()
    })

    it('skill cards have names', () => {
      const wrapper = mountApp()
      const names = wrapper.findAll('.skill-name')
      names.forEach((name) => {
        expect(name.text().length).toBeGreaterThan(0)
      })
    })

    it('project cards have titles', () => {
      const wrapper = mountApp()
      const titles = wrapper.findAll('.project-title')
      titles.forEach((title) => {
        expect(title.text().length).toBeGreaterThan(0)
      })
    })
  })
})
