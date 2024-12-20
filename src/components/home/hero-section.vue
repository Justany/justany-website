<script lang="ts" setup>
</script>

<template>
    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex items-center relative hero-section">
        <div class="animated-lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <!-- Profile Image -->
            <div class="w-24 h-24 rounded-full overflow-hidden mb-8">
                <img src="https://avatars.githubusercontent.com/u/32221808?v=4" alt="Justany Itoua"
                    class="w-full h-full object-cover" />
            </div>

            <!-- Title and Description -->
            <h1 class="max-w-2xl text-5xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text mb-6">
                Entrepreneur, vendeur & Développeur Full Stack
            </h1>

            <p class="text-lg text-zinc-600 mb-8 max-w-2xl">
                Basé au Congo-Brazzaville, je suis passionné par la création de solutions numériques innovantes qui répondent aux besoins spécifiques du marché africain. Je transforme des idées en produits technologiques qui ont un impact réel.
            </p>

            <!-- Social Links -->
            <div class="flex space-x-6">
                <a href="tel:+242053518256" class="text-zinc-500 hover:text-zinc-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                    </svg>
                </a>
                <a href="mailto:justany2014@gmail.com" class="text-zinc-500 hover:text-zinc-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                </a>
                <a href="https://github.com/Justany" target="_blank" rel="noopener" class="text-zinc-500 hover:text-zinc-600">
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-current">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/justany-itoua" target="_blank" rel="noopener" class="text-zinc-500 hover:text-zinc-600">
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-current">
                        <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                    </svg>
                </a>
            </div>

            <div class="mt-16">
                <p class="font-display text-base text-zinc-900">Quelques projets réalisés</p>
                <ul role="list"
                    class="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
                    <li>
                        <ul role="list" class="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
                            <li class="flex"><img alt="Transistor" loading="lazy" width="158" height="48"
                                    decoding="async" data-nimg="1" style="color:transparent"
                                    src="https://salient.tailwindui.com/_next/static/media/transistor.7274e6c3.svg">
                            </li>
                            <li class="flex"><img alt="Tuple" loading="lazy" width="105" height="48" decoding="async"
                                    data-nimg="1" style="color:transparent"
                                    src="https://salient.tailwindui.com/_next/static/media/tuple.74eb0ae0.svg">
                            </li>
                            <li class="flex"><img alt="StaticKit" loading="lazy" width="127" height="48"
                                    decoding="async" data-nimg="1" style="color:transparent"
                                    src="https://salient.tailwindui.com/_next/static/media/statickit.d7937794.svg"></li>
                        </ul>
                            </li>
                    <li>
                        <ul role="list" class="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
                            <li class="flex"><img alt="Mirage" loading="lazy" width="138" height="48" decoding="async"
                                    data-nimg="1" style="color:transparent"
                                    src="https://salient.tailwindui.com/_next/static/media/mirage.18d2ec4e.svg">
                            </li>
                            <li class="flex"><img alt="Laravel" loading="lazy" width="136" height="48" decoding="async"
                                    data-nimg="1" style="color:transparent"
                                    src="https://salient.tailwindui.com/_next/static/media/laravel.7deed17e.svg"></li>
                            <li class="flex"><img alt="Statamic" loading="lazy" width="147" height="48" decoding="async"
                                    data-nimg="1" style="color:transparent"
                                    src="https://salient.tailwindui.com/_next/static/media/statamic.6da5ebfb.svg"></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <a href="#experience"
            class="scroll-indicator cursor-pointer hover:border-orange-500 transition-colors duration-300">
        </a>
    </section>
</template>