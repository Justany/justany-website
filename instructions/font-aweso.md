npm install --save '@awesome.me/75de8075f2@latest'


Il semble que vous ayez partagé des informations détaillées sur l'intégration de **Font Awesome** dans un projet Vue.js. Voici un résumé des étapes essentielles pour installer et utiliser **Font Awesome** avec Vue 3.

---

### 🛠️ **Installation de Font Awesome dans Vue 3**

1. **Installation des packages nécessaires**
   ```bash
    pnpm i --save @fortawesome/fontawesome-svg-core

    pnpm i --save @fortawesome/free-solid-svg-icons
    pnpm i --save @fortawesome/free-regular-svg-icons
    pnpm i --save @fortawesome/free-brands-svg-icons

    pnpm i --save @fortawesome/vue-fontawesome@latest-3
   ```

2. **Configuration de la bibliothèque d'icônes (dans `main.js` ou `main.ts`)**
   ```javascript
   import { createApp } from 'vue'
   import App from './App.vue'

   /* Importation du core de Font Awesome */
   import { library } from '@fortawesome/fontawesome-svg-core'

   /* Importation du composant Vue */
   import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

   /* Importation des icônes spécifiques */
   import { faUserSecret, faCoffee } from '@fortawesome/free-solid-svg-icons'

   /* Ajout des icônes à la bibliothèque */
   library.add(faUserSecret, faCoffee)

   const app = createApp(App)
   
   /* Enregistrement du composant globalement */
   app.component('font-awesome-icon', FontAwesomeIcon)

   app.mount('#app')
   ```

3. **Utilisation des icônes dans les composants Vue (par exemple, `App.vue`)**
   ```html
   <template>
     <div id="app">
       <!-- Icône en utilisant la bibliothèque Font Awesome -->
       <font-awesome-icon :icon="['fas', 'user-secret']" />
       <font-awesome-icon :icon="['fas', 'coffee']" />
     </div>
   </template>

   <script>
   export default {
     name: 'App',
   }
   </script>
   ```

---

### 🧾 **Explications des différentes approches**

#### 1️⃣ **Importer des icônes de manière individuelle**
- Vous importez et ajoutez uniquement les icônes dont vous avez besoin, ce qui est optimal pour **l'arbre de dépendance**.
- Exemple :
  ```javascript
  import { faUserSecret, faCoffee } from '@fortawesome/free-solid-svg-icons'
  library.add(faUserSecret, faCoffee)
  ```

#### 2️⃣ **Importer toutes les icônes d'une famille (Attention au poids)**
- Cette approche permet d'importer toutes les icônes d'un style spécifique (par exemple, **solid**).
- Exemple :
  ```javascript
  import { fas } from '@fortawesome/free-solid-svg-icons'
  library.add(fas)
  ```

> ⚠️ **Attention** : Cette méthode augmente la taille du bundle, car **toutes les icônes** du pack sont ajoutées.

---

### 💡 **Résumé des meilleures pratiques**
1. **Utiliser des imports spécifiques** au lieu d'importer toute la famille.
2. **Utiliser le composant globalement** (`app.component('font-awesome-icon', FontAwesomeIcon)`) pour éviter de devoir l'importer dans chaque composant.
3. **Utiliser la notation d'icône sous forme de tableau** : `:icon="['fas', 'user-secret']"` au lieu de la notation classique `icon="fa-solid fa-user-secret"`, car elle est plus explicite et efficace.

---

Si vous souhaitez des précisions sur une étape ou une approche particulière, faites-le-moi savoir ! 😊

-------- detailles

Set Up with Vue

When using Font Awesome with Vue.js, you can put our official vue-fontawesome component to work to make everything just right.

Before You Get Started

Make sure you:

Configured access to use Font Awesome packages
Plan to use the SVG+JS method with Vue.js
We recommend the official vue-fontawesome component (described below), which uses the SVG + JS method to render icons. But you can opt to use the Web Fonts with CSS method if you prefer.

We’ll cover the basics of installing core utility packages, icon installation, and installing the Vue component, so that you can make awesome stuff your way!

Follow the steps below to set up the vue-fontawesome component in your project.

1. Add SVG Core
First you’ll need to use pnpm or yarn to install the core package which includes all the utilities to make the icons work:

Terminal window
pnpm i --save @fortawesome/fontawesome-svg-core

Find out more about what’s in Font Awesome core

2. Add Icon Packages
Next, you’ll install the icons you want to use — you can choose a Kit Package or SVG Icon Packages, and select any of our styles.

For Pro icons, you’ll first need to set up access with your secret Font Awesome pnpm token and global or per-project access.

 Configure Access for Pro
Kit Package
Pro SVG Icon Package
Free SVG Icon Package
Terminal window
pnpm i --save @fortawesome/kit-KIT_CODE@latest

3. Add the Vue Component
And lastly, install the Font Awesome Vue component:

Using Vue 2 or Vue 3?

How you install our vue-fontawesome component will be different depending on whether you are using Vue 2 or Vue 3. Make sure to only install the appropriate one that matches the version of Vue you are using.

Vue 3.x
Vue 2.x
Terminal window
pnpm i --save @fortawesome/vue-fontawesome@latest-3

You’re Ready to Add Icons!
Like Anakin said, it’s woooorking! All of our icons are now ready to do your project’s bidding. Learn how to add them to your Vue project and then use their power to bring order and style to your UI!



Add Icons with Vue
When adding icon in a project configured with vue-cli, you’ll first create a library of icons, and then you can call them anywhere in your UI.

Using a Kit Package
If you’ve created a Kit and installed it in your project, you’re ready to get going

By prefix and name
Font Awesome Icons
Custom Icons
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
</script>

<template>
  <FontAwesomeIcon :icon="byPrefixAndName.fas['house']" />
</template>

For this to work, you’ll need to have a Kit that contains the icons in the examples. If you’re not familiar with how Kits work, you can find out here.

Importing specific icons
An alternative to using the prefix and name is by importing icons directly. This is your best bet at leveraging tree-shaking if that’s useful to you.

Font Awesome Icons
Custom Icons
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import { faTree } from '@awesome.me/kit-KIT_CODE/icons/sharp/solid'
import { faDog } from '@awesome.me/kit-KIT_CODE/icons/duotone/solid'
import { faDragon } from '@awesome.me/kit-KIT_CODE/icons/sharp-duotone/solid'
</script>

<template>
  <FontAwesomeIcon :icon="faHouse" />
  <FontAwesomeIcon :icon="faTree" />
  <FontAwesomeIcon :icon="faDog" />
  <FontAwesomeIcon :icon="faDragon" />
</template>

You can use all the icons in a family and style, too. But this will put the kibosh on tree-shaking (Probably‽, are we using A.I. for this yet?).

Font Awesome Icons
Custom Icons
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas, fad, fass, fasds } from '@awesome.me/kit-KIT_CODE/icons'
</script>

<template>
  <FontAwesomeIcon :icon="fas.faHouse" />
  <FontAwesomeIcon :icon="fad.faMouse" />
  <FontAwesomeIcon :icon="fass.faCat" />
  <FontAwesomeIcon :icon="fasds.faDog" />
</template>

Using the library
Another mechanism that the SVG Core provides is a JavaScript class called Library.

With a subsetted Kit, this can be an easy way to add all icons once and use them with a syntax that requires less typing.

// in main.ts
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { all } from '@awesome.me/kit-KIT_CODE/icons'

/* add icons to the library */
library.add(...all)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')

Now all icons in the Kit have been added in just one, easy line. No fuss, no muss.

Using it doesn’t require importing the icons. You just need an array or string.

Also note here that we’ve switched from importing and using FontAwesomeIcon directly and are using the already registered component, through app.component(). That means our syntax shifts slightly and we use <font-awesome-icon ...> now.

As an array
As a string
<template>
  <font-awesome-icon :icon="['fas', 'house']" />
</template>

Custom icons are just as easy.

As an array
As a string
<template>
  <font-awesome-icon :icon="['fak', 'my-icon']" />
</template>

Using Vue 2 instead?

Even though the examples on this page are for Vue 3.x, the API for the vue-fontawesome library is the same. Just make sure you install @fortawesome/vue-fontawesome@latest-2 if you are using Vue 2.x.

Importing from SVG Icon Packages
If you can’t or don’t want to use a Kit, you can explicitly add individual icons to each component. Here’s a simple example:

Set up the library
You’ll first create a library of all the icons you want to use in your project in the src/main.js or src/main.ts file. Here’s an example that adds the Solid style User Secret icon to the library:

Vue 3
Vue 2
/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

Calling the icons
You can now call the icons. You can add icons to your Vue 3 or Vue 2 project using a string format or an array format. Just use the syntax below wherever you want the icons to appear in your project, like in the src/App.vue file. Here’s the rest of the example we started above that adds the fa-user-secret icon into the app UI:

As an array
As a string
<template>
  <div id="app">
    <!-- Add the style and icon you want using the Array format -->
    <font-awesome-icon :icon="['fas', 'user-secret']" />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

Several icon in different styles
Here’s an example with a number of icons in different styles, just to give you a sense of how the syntax changes from style to style in your main.js file.

/* Vue 3 and Vue 2 use the same icon importing syntax */

/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fass } from '@fortawesome/sharp-solid-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { fadt } from '@fortawesome/duotone-thin-svg-icons'
import { fasds } from '@fortawesome/sharp-duotone-solid-svg-icons'

import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'


library.add(fas, fass, fad, fadt, fasds, faTwitter, faFontAwesome, faHatCowboy, faHatChef)

In our call to library.add() we’re passing:

fas: which represents all of the icons in @fortawesome/free-solid-svg-icons. (Be careful importing whole styles - it can be a LOT of icons!) So any of the icons in that package may be referenced by icon name as a string anywhere else in our app. For example: coffee, check-square, or spinner.
fass: represents all sharp solid icons in @sharp-solid-svg-icons. (pro icons!)
fad: represents all duotone solid icons in @pro-duotone-svg-icons. (pro icons!)
fadt: represents all duotone thin icons in @duotone-thin-svg-icons. (pro icons!)
fasds: represents all sharp duotone solid icons in @sharp-duotone-solid-svg-icons. (pro icons!)
faTwitter, faFontAwesome, faHatCowboy, and faHatChef: Adding each of these icons individually allows us to refer to them throughout our app by their icon string names, twitter, font-awesome, hat-cowboy, hat-chef, and plate-utensils.
You can then use any of those icons anywhere in your app without needing to re-import into each component. So if you used icons in a couple of components, that would end up looking something like this:

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
<script>

<template>
  <FontAwesomeIcon icon="fa-solid fa-dog" />
  <FontAwesomeIcon icon="fa-sharp fa-solid fa-hippo" />
  <FontAwesomeIcon icon="fa-duotone fa-solid fa-feather" />
  <FontAwesomeIcon icon="fa-duotone fa-thin fa-fish" />
  <FontAwesomeIcon icon="fa-sharp-duotone fa-solid fa-dolphin" />
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <FontAwesomeIcon icon="fa-brands fa-twitter" />
  <FontAwesomeIcon icon="fa-brands fa-font-awesome" />
  <FontAwesomeIcon icon="fa-thin fa-hat-cowboy" />
  <FontAwesomeIcon icon="fa-sharp fa-solid fa-hat-chef" />
<template>

You’ll notice we were able use the imported brand icons without explicitly importing them in the component. And we used the dog, hippo, feather, fish, and dolphin icons without explicitly importing them anywhere. But, each bundle now has over 1000 solid icons plus the two brand icons we added, which is more than we’re using - a good reason to avoid importing a whole style.

Same icons, Different Styles
Using ES modules and import statements we can define unique names for two or more different styles of the same icon. Here’s is what your main.js file would look like:

import { library } from '@fortawesome/fontawesome-svg-core'

import { faCoffee as fasFaCoffee } from '@fortawesome/pro-solid-svg-icons'
import { faCoffee as fadFaCoffee } from '@fortawesome/pro-duotone-svg-icons'
import { faCoffee as fadtFaCoffee } from '@fortawesome/duotone-thin-svg-icons'
import { faCoffee as fassFaCoffee } from '@fortawesome/sharp-solid-svg-icons'
import { faCoffee as fasdsFaCoffee } from '@fortawesome/sharp-duotone-solid-svg-icons'

library.add(fasFaCoffee, fadFaCoffee, fadtFaCoffee, fassFaCoffee, fasdsFaCoffee)

Add the icons to your component.

As a string
As an array
<font-awesome-icon icon="fa-solid fa-coffee" />
<font-awesome-icon icon="fa-duotone fa-solid fa-coffee" />
<font-awesome-icon icon="fa-duotone fa-thin fa-coffee" />
<font-awesome-icon icon="fa-sharp fa-solid fa-coffee" />
<font-awesome-icon icon="fa-sharp-duotone fa-solid fa-coffee" />

Watch out for self-closing tags in HTML
If you are using inline templates or HTML as templates you need to be careful to avoid self-closing tags. Read more about self-closing tags on Vue.js. If you are writing these types of templates, you’ll need to adjust the syntax to be valid HTML, like this:

String
Array
<!-- Add Icons using String format -->
<font-awesome-icon icon="fa-regular fa-envelope"></font-awesome-icon>

Looking to use computed or component properties?

We’ve got those too. Get the low-down on how to add icons as computed or component properties.




Adding Icon Styling with Vue
Font Awesome has a ton of great styling tools that work hand-in-hand with our icons to make your project look its best.

The entire Font Awesome styling toolkit is available when using Vue, but the syntax is different from our general web-use documentation. Below you’ll find the syntax for adding styling with Vue, with a link to the general documentation that has descriptions and examples for each styling tool.

Using Vue 2 or Vue 3 ?

You can add icons to your Vue 2 or Vue 3 project using a string format or an array format.

Size
View DocsFont Awesome supports t-shirt size scale from 2xs to 2xl as well as literal sizing from 1x to 10x.

String
Array
<!-- T-shirt sizes -->
<font-awesome-icon icon="fa-solid fa-coffee" size="xs" />
<font-awesome-icon icon="fa-solid fa-coffee" size="lg" />

<!-- X-factor sizing -->
<font-awesome-icon icon="fa-solid fa-coffee" size="6x" />

Remember, you can always control icon size directly with the CSS font-size attribute. The font-awesome-icon’s size prop determines icon size relative to the current context’s font-size.

Fixed-Width
View DocsSetting icons to use a fixed-width helps when you’re trying to align icons in a vertical column.

String
Array
<font-awesome-icon icon="fa-solid fa-coffee" fixed-width />

Icons in a List
View DocsThere’s no Vue-specific syntax for using icons in a list, so you can use fa-ul and fa-li to replace default bullets in unordered lists just like usual.

Rotate and Flip Icons
View DocsRotate on quarter turns and flip horizontally, vertically, or both. Or try power transforms for more granularity.

String
Array
<!-- Rotate -->
<font-awesome-icon icon="fa-solid fa-coffee" rotation="90" />
<font-awesome-icon icon="fa-solid fa-coffee" rotation="180" />
<font-awesome-icon icon="fa-solid fa-coffee" rotation="270" />

<!-- Mirror -->
<font-awesome-icon icon="fa-solid fa-coffee" flip="horizontal" />
<font-awesome-icon icon="fa-solid fa-coffee" flip="vertical" />
<font-awesome-icon icon="fa-solid fa-coffee" flip="both" />

Animate Icons
View DocsYou can use the animate utilities as a way to indicate loading or processing, especially when paired with icons like spinner or sync. The spin utility smoothly spins the icon clockwise, and the pulse utility spins clockwise in eight steps.

String
Array
<font-awesome-icon icon="fa-solid fa-heart" beat />
<font-awesome-icon icon="fa-solid fa-circle-info" beat-fade />
<font-awesome-icon icon="fa-solid fa-basketball" bounce />
<font-awesome-icon icon="fa-solid fa-triangle-exclamation" fade />
<font-awesome-icon icon="fa-solid fa-compact-disc" flip />
<font-awesome-icon icon="fa-solid fa-bell" shake />
<font-awesome-icon icon="fa-solid fa-cog" spin />
<font-awesome-icon icon="fa-solid fa-compass" spin spin-reverse />
<font-awesome-icon icon="fa-solid fa-spinner" spin-pulse />

We’ve also built some animation utilities into CSS custom properties.

Bordered Icons
View DocsAdd a border around an icon with this utility.

String
Array
<font-awesome-icon icon="fa-solid fa-coffee" border />

Pulled Icons
View DocsWrap text around an icon with this utility.

String
Array
<font-awesome-icon icon="fa-solid fa-coffee" pull="left" />
<font-awesome-icon icon="fa-solid fa-coffee" pull="right" />

Power Transforms
View DocsPower Transforms are just that - powerful! You can scale, position, rotate, and flip all with this one styling tool.

To scale icons up or down, use grow-# and shrink-# with any arbitrary value, including decimals.
To move icons up, down, left, or right, use up-#, down-#, left-#, and right-# with any arbitrary value, including decimals.
To rotate or flip icons use any combination of flip-v, flip-h, or rotate-# with any arbitrary value.
String
Array
<font-awesome-icon icon="fa-solid fa-coffee" transform="shrink-6 left-4" />

Mask
View DocsGrab the Mask utility when you want to layer two icons but have the inner icon cut out from the icon below so the parent element’s background shows through.

String
Array
<!-- using transform with mask will allow you to scale, shrink, grow, etc. the coffee icon within the circle icon -->
<font-awesome-icon icon="fa-solid fa-coffee" transform="shrink-7" mask="fa-solid fa-circle" />

Duotone Icons
View DocsFor Duotone icons, you can swap the opacity on the layers:

String
Array
<font-awesome-icon icon="fa-duotone fa-solid fa-coffee-pot" swap-opacity />

We’ve also built a lot of utility into CSS custom properties for Duotone icons.

Layer
View DocsIf you’d like to layer icons, add a text layer over an icon, or add a counter to an icon, you’ll need to add the layering components. Edit your main.js to look like this:

Vue 2.x
Vue 3.x
// Using Vue 2.x
import Vue from 'vue'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Then you can use the utilities in those components to layer icons, text, or add counters. You can also invert an icon to get a cut-out effect.

Layer Icons
Layer one or more icons to create a new icon. Include fixed-width to have the layers align.

String
Array
<font-awesome-layers class="fa-lg">
  <font-awesome-icon icon="fa-solid fa-circle" />
  <font-awesome-icon icon="fa-solid fa-check" transform="shrink-6" :style="{ color: 'white' }" />
</font-awesome-layers>

Layer Text
Add text on top of an icon. Use power transforms to control how the text appears.

String
Array
<font-awesome-layers full-width class="fa-4x">
  <font-awesome-icon icon="fa-solid fa-badge"/>
  <font-awesome-layers-text class="gray8" transform="down-2 shrink-8" value="New!" />
</font-awesome-layers>

Add Counters
Add a counter to the corner of an icon. Postion can be bottom-left, bottom-right, top-left and the default top-right.

String
Array
<font-awesome-layers full-width class="fa-4x">
  <font-awesome-icon icon="fa-solid fa-envelope" />
  <font-awesome-layers-text counter value="1" position="top-right" />
</font-awesome-layers>

Invert the Icon Color to White
This can be useful when layering icons, or on its own.

String
Array
<font-awesome-icon icon="fa-solid fa-coffee" inverse />

