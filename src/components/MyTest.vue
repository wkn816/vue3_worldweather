<template>
  <div>
    <div v-if="list" class="menu-btn">
      <v-icon @click="toggleMenu" class="arrow">mdi-format-list-bulleted</v-icon>
    </div>
    <transition name="fade">
      <ul v-if="showMenu" class="menu">
        <v-icon @click="toggleMenu" class="close-btn">mdi-close</v-icon>
        <li
          v-for="(title, index) in testtitles"
          :key="index"
          @click="$emit('scrollToChapter', index)"
        >
          <span class="marker"></span>

          "sssssssskk"
        </li>
        <li>aaaaaa</li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      list: true
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      this.list = !this.list;
      console.log("aaa");
    }
  },
  props: {
    testtitles: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.arrow {
  transition: all 0.3s;
  margin-right: 5px;
}
a:hover .arrow {
  transform: translateX(-3px);
}
.close-btn {
  color: black;
  position: absolute; /* 要素を絶対配置にする */
  top: 5px; /* 上端を親要素のトップに合わせる */
  right: 10px; /* 右端を親要素の右端に合わせる */
}

.menu-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  /* その他のスタイル */
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f1f1;
  border-radius: 50%;
}
.menu {
  position: fixed;
  top: 10px;
  right: 20px;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  height: auto;
}
.menu li {
  padding: 15px 0;
}
.marker {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 5px;
}

.menu li:hover .marker {
  background-color: orange;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
