import type { NavBarConfig, ProfileConfig, SiteConfig } from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Eli Recomienda ✨',
  subtitle: 'Bienvenido',
  lang: 'es',
  themeColor: {
    hue: 275, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false, // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/banner.webp', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
  },
}

export const navBarConfig: NavBarConfig = {
  links: [LinkPreset.Recommendations, LinkPreset.ContactMe, LinkPreset.AboutMe],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.webp', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Elizabeth González 👋',
  bio: '¡Hola! 🌟 Bienvenido a mi blog de recomendaciones. 😊 Aquí encontrarás mis mejores selecciones para ayudarte a decidir con confianza. Explora y descubre lo que necesitas. Si tienes alguna pregunta, no dudes en contactarme a través de los enlaces disponibles. 👇',
  links: [
    {
      name: 'Telegram',
      icon: 'fa6-brands:telegram', // Visit https://icones.js.org/ for icon codes
      // You will need to install the corresponding icon set if it's not already included
      // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://t.me/elirecomienda',
    },
    {
      name: 'Whatsapp',
      icon: 'fa6-brands:whatsapp',
      url: 'https://chat.whatsapp.com/BBhiORW58YZFpFGeOO1KM5',
    },
    {
      name: 'Facebook',
      icon: 'fa6-brands:facebook',
      url: 'https://www.facebook.com/profile.php?id=61561528753778',
    },
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram',
      url: 'https://www.instagram.com/eliterecomienda/',
    },
    {
      name: 'Tiktok',
      icon: 'fa6-brands:tiktok',
      url: 'https://www.tiktok.com/@eliterecomienda',
    },
    {
      name: 'Tiktok',
      icon: 'fa6-brands:youtube',
      url: 'https://www.youtube.com/@elirecomienda',
    },
    {
      name: 'Mail',
      icon: 'material-symbols:outgoing-mail-rounded',
      url: 'eliterecomienda@gmail.com',
    },
  ],
}
