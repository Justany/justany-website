import { ref } from 'vue'

export function useImageGradient() {
  // Fonction pour générer un dégradé aléatoire
  const generateGradient = (name: string) => {
    const colors = [
      ['from-orange-400', 'via-rose-400', 'to-purple-500'],
      ['from-blue-400', 'via-cyan-400', 'to-teal-500'],
      ['from-green-400', 'via-emerald-400', 'to-teal-500'],
      ['from-indigo-400', 'via-purple-400', 'to-pink-500'],
      ['from-rose-400', 'via-orange-400', 'to-yellow-500']
    ]
    const hash = name.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0)
    return colors[hash % colors.length]
  }

  // Vérifier si une image existe
  const imageExists = ref(new Set<string>())

  const checkImage = (src?: string) => {
    if (!src) return false
    if (imageExists.value.has(src)) return true
    
    const img = new Image()
    img.onload = () => imageExists.value.add(src)
    img.src = src
    return imageExists.value.has(src)
  }

  return {
    generateGradient,
    checkImage,
    imageExists
  }
}
