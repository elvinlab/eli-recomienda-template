import { LinkPreset, type NavBarLink } from '@/types/config'
import I18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
  [LinkPreset.Recommendations]: {
    name: i18n(I18nKey.recommendations),
    url: '/mis-recomendaciones/',
  },
  [LinkPreset.AboutMe]: {
    name: i18n(I18nKey.aboutMe),
    url: '/sobre-eli/',
  },
  [LinkPreset.ContactMe]: {
    name: i18n(I18nKey.contactMe),
    url: '/contactame/',
  },
}
