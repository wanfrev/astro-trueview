<script setup>
import TopProducts from '../assets/images/topproducts.png?url'
import RequestATest from '../assets/images/requestatest.png?url'
import CumulativeEffect from '../assets/images/cumulativeeffect.png?url'
import WeeklyCategory from '../assets/images/weeklycategory.png?url'

const featureLabels = ['Top Products', 'Request a Test', 'Cumulative Effect', 'Weekly Category']

const featureCards = [
  {
    title: 'Top Products',
    description: 'Browse high-performing supplements ranked by purity and accuracy.',
    image: TopProducts,
    alt: 'Top Products feature preview'
  },
  {
    title: 'Request a Test',
    description: 'Request products to be lab tested and added to the catalog.',
    image: RequestATest,
    alt: 'Request a Test feature preview'
  },
  {
    title: 'Cumulative Effect',
    description: 'Understand cumulative exposure across repeated product use.',
    image: CumulativeEffect,
    alt: 'Cumulative Effect feature preview'
  },
  {
    title: 'Weekly Category',
    description: 'Fresh results every week with updated categories and products.',
    image: WeeklyCategory,
    alt: 'Weekly Category feature preview'
  }
]
</script>

<template>
  <section class="section-shell py-16 md:py-24">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">Features</h2>

      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <span
          v-for="label in featureLabels"
          :key="label"
          class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-gray-200"
        >
          {{ label }}
        </span>
      </div>

      <div class="mt-10 md:mt-14 grid gap-5 md:gap-6 md:grid-cols-2 xl:grid-cols-4 text-left">
        <article
          v-for="card in featureCards"
          :key="card.title"
          class="rounded-4xl border border-white/10 bg-white/4 p-5 sm:p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-xs uppercase tracking-[0.24em] text-gray-500">Feature</p>
              <h3 class="mt-2 text-xl sm:text-2xl font-bold leading-tight">{{ card.title }}</h3>
            </div>
          </div>

          <p class="mt-3 text-sm leading-relaxed text-gray-400">{{ card.description }}</p>

          <div class="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-3">
            <img
              :src="card.image"
              :alt="card.alt"
              class="h-auto w-full select-none object-contain"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
