import 'server-only'

const dictionaries = {
    vi: () => import('./vi.json').then((module) => module.default),
    en: () => import('./en.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'vi' | 'en') => dictionaries[locale]()
