<template>
  <div>

    <div class="test">
      <v-icon class="arrow">mdi-format-list-bulleted</v-icon>
    </div>
    <!-- ボタンで各章にスクロール -->
    <button @click="scrollTo('#chapter-1')">第1章へ移動</button>
    <button @click="scrollTo('#chapter-2')">第2章へ移動</button>
    <button @click="scrollTo('#chapter-3')">第3章へ移動</button>

    <!-- 各章のコンテンツ -->
    <div id="chapter-1" class="chapter">
            <v-icon class="arrow">mdi-format-list-bulleted</v-icon>

      <h2>第1章: はじめに/h2>
      <p>ここでは、Vue.jsについて学びます。</p>
    </div>

    <div id="chapter-2" class="chapter">
      <h2>第2章: 基本的な機能</h2>
      <p>Vue.jsの基本的な機能を紹介します。</p>
    </div>

    <div id="chapter-3" class="chapter">
      <h2>第3章: コンポーネント</h2>
      <p>コンポーネントの使い方を学びます。</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // vue-scrollto を使ってセクションにスクロールする
    scrollTo(target) {
      this.$scrollTo(target);
    }
  }
};
</script>

<style>
.chapter {
  margin-bottom: 50px;
}

button {
  margin: 10px;
}
</style>
