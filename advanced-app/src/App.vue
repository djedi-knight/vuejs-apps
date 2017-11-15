<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <button @click="selectedComponent = 'appAuthor'">Author</button>
      <button @click="selectedComponent = 'appNew'">New</button>
      <button @click="selectedComponent = 'appQuote'">Quote</button>
      <hr>
      <p>{{ selectedComponent }}</p>
      <keep-alive>
        <component :is="selectedComponent">
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>A wonderful quote!</p>
        </component>
      </keep-alive>
      <!-- <app-quote>
        <h2 slot="title">{{ quoteTitle }}</h2>
        <p>A wonderful quote!</p>
      </app-quote> -->
    </div>
  </div>
</div>
</template>

<script>
import Author from './components/Author'
import New from './components/New'
import Quote from './components/Quote'

export default {
  data() {
    return {
      quoteTitle: 'The Quote',
      selectedComponent: 'appQuote'
    }
  },
  components: {
    appAuthor: Author,
    appNew: New,
    appQuote: Quote
  }
}
</script>

<style>
</style>
