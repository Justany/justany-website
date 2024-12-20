export type MainCategory = 'Tous' | 'Web' | 'Design' | 'Ads'

export type SubCategories = {
  Web: string[];
  Design: string[];
  Ads: string[];
}

export const mainCategories: MainCategory[] = ['Tous', 'Web', 'Design', 'Ads']

export const subCategories: SubCategories = {
  Web: ['Applications', 'Plateformes', 'Sites'],
  Design: ['Logos', 'Affiches', 'Maquettes'],
  Ads: ['Réseaux Sociaux', 'Social Media Ads', 'Performance']
}
