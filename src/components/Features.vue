<script setup>
import { ref } from 'vue'
const activeTab = ref('top-products')

const tabs = [
  { id: 'top-products', label: 'Top Products', icon: '✦' },
  { id: 'request-test', label: 'Request a Test', icon: '✚' },
  { id: 'cumulative', label: 'Cumulative Effect', icon: '✷' },
  { id: 'weekly', label: 'Weekly Category', icon: '◆' }
]

const content = {
  'top-products': {
    title: 'Top Products',
    desc: 'Browse high-performing supplements ranked by purity and accuracy.'
  },
  'request-test': {
    title: 'Request a Test',
    desc: 'Don’t see your product? Request a test and we’ll get it done for you.'
  },
  cumulative: {
    title: 'Cumulative Effect',
    desc: 'Understand cumulative exposure and how repeated use can impact your health.'
  },
  weekly: {
    title: 'Weekly Category',
    desc: 'Fresh results every week with new products tested and updated regularly.'
  }
}
</script>

<template>
  <section class="section-shell py-24 text-center">
    <h2 class="text-4xl md:text-6xl font-bold mb-12">Features</h2>

    <div class="inline-flex flex-wrap justify-center gap-3 p-2 bg-white/5 border border-white/10 rounded-full mb-16">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="[
          'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2',
          activeTab === tab.id
            ? 'bg-white text-black shadow-lg'
            : 'text-gray-400 hover:text-white'
        ]"
      >
        <span :class="activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'">{{ tab.icon }}</span>
        {{ tab.label }}
      </button>
    </div>

    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-6 mb-10 text-left">
        <article class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <h3 class="text-3xl font-bold mb-3">{{ content[activeTab].title }}</h3>
          <p class="text-gray-400 leading-relaxed">{{ content[activeTab].desc }}</p>
          <div class="asset-placeholder min-h-[340px] mt-8" :data-label="`Espacio visual ${content[activeTab].title}`"></div>
        </article>

        <article class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <h3 class="text-3xl font-bold mb-3">Weekly Category</h3>
          <p class="text-gray-400 leading-relaxed">
            New products tested and results updated regularly.
          </p>
          <div class="asset-placeholder min-h-[340px] mt-8" data-label="Espacio visual weekly category"></div>
        </article>
      </div>

      <transition name="fade" mode="out-in">
        <div :key="activeTab" class="max-w-xl mx-auto">
          <p class="text-gray-400 leading-relaxed">{{ content[activeTab].desc }}</p>
        </div>
      </transition>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
