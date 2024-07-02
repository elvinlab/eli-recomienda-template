import { siteConfig } from '../config'
import type I18nKey from './i18nKey'
import { en } from './languages/en'
import { es } from './languages/es'

export type Translation = {
  [K in I18nKey]: string
}

const defaultTranslation = es

const map: { [key: string]: Translation } = {
  en: en,
  es: es,
}

export function getTranslation(lang: string): Translation {
  return map[lang.toLowerCase()] || defaultTranslation
}

export function i18n(key: I18nKey): string {
  const lang = siteConfig.lang || 'es'
  return getTranslation(lang)[key]
}
