<template>
  <div>
    <div class="menu-btn">
      <v-icon @click="toggleMenu" class="arrow">mdi-format-list-bulleted</v-icon>
    </div>
    <transition name="fade">
      <ul v-if="showMenu" class="menu">
        <v-icon @click="toggleMenu" class= "close-btn">mdi-close</v-icon>
        <li>
          <span class="line"></span>
          <span class="marker"></span>
          Spring Bootの構成
        </li>
        <li>
          <span class="marker"></span>
          DIについて
        </li>
        <li>
          <span class="marker"></span>
          HelloWorld
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    },
  },
};
</script>

<style>
.arrow {
  transition: all .3s;
  margin-right: 5px;
}
a:hover .arrow {
  transform: translateX(-3px);
}
.close-btn{
  color: black;
  position: absolute;
  top: 50px;
  right: 10px;
  transform: translateY(-50%);
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

}
.menu li {
  padding: 10px 0;
  top: 10px;
}

.menu li::before {
  content: "";
  display: inline-block;
  width: 5px;
  height: 100%;
  background-color: rgb(177, 33, 33); /* 縦線の色 */
  margin-right: 10px; /* 縦線とテキストの距離 */
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
