<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <ul class="options step" :class="{ visible: step == 1 }">
        <li><code>v-if</code> / <code>v-else</code> / <code>v-else-if</code>:<pre>

          &lt;div v-if="myVar > 7"&gt;
            This is visible if myVar &gt; 7
          &lt;/div&gt;
          &lt;div v-else-if="myVar > 5"&gt;
            This is visible if myVar &gt; 5 and &lt;= 7
          &lt;/div&gt;
          &lt;div v-else&gt;
            This is visible if myVar &lt;= 5
          &lt;/div&gt;
        </pre>
        </li>
      </ul>
      <ul class="options step" :class="{ visible: step == 2 }">
        <li><code>v-bind (:)</code>:<pre>

          &lt;img v-bind:src="imageSrc"&gt;
          &lt;img :src="imageSrc"&gt;
          &lt;img :src="'/path/to/images/' + fileName"&gt;
          &lt;div :class="{ red: isRed }"&gt;&lt;/div&gt;
          &lt;div :class="[classA, classB]"&gt;&lt;/div&gt;
          &lt;div :class="[classA, { classB: isB, classC: isC }]"&gt;
          &lt;div :style="{ fontSize: size + 'px' }"&gt;&lt;/div&gt;
          &lt;div :style="[styleObjectA, styleObjectB]"&gt;&lt;/div&gt;
        </pre>
        </li>
      </ul>
      <ul class="options step" :class="{ visible: step == 3 }">
        <li><code>v-for</code>:<pre>

          &lt;ul&gt;
            &lt;li v-for="(item, index) in items" :key="index"&gt;
              <span v-pre>{{ item }}</span>
            &lt;/li&gt;
          &lt;/ul&gt;
        </pre>
        </li>
      </ul>
      <ul class="options step" :class="{ visible: step == 4 }">
        <li><code>v-on (@)</code>:<pre>

          &lt;button v-on:click="doThis"&gt;&lt;/button&gt;
          &lt;button v-on:click="doThat('hello', $event)"&gt;&lt;/button&gt;
          &lt;button @click="doThis"&gt;&lt;/button&gt;
          &lt;button @click.stop="doThis"&gt;&lt;/button&gt;
          &lt;button @click.prevent="doThis"&gt;&lt;/button&gt;
          &lt;form @submit.prevent&gt;&lt;/form&gt;
          &lt;button v-on:click.once="doThis"&gt;&lt;/button&gt;
          &lt;button v-on="{ mousedown: doThis, mouseup: doThat }"&gt;&lt;/button&gt;
        </pre>
        </li>
      </ul>
      <ul class="options step" :class="{ visible: step == 5 }">
        <li><code>v-model</code>:<pre>

          &lt;input v-model="message" placeholder="edit me"&gt;
          &lt;input type="checkbox" id="checkbox" v-model="checked"&gt;

          &lt;input type="checkbox" id="jack" value="Jack" v-model="checkedNames"&gt;
          &lt;label for="jack"&gt;Jack&lt;/label&gt;
          &lt;input type="checkbox" id="john" value="John" v-model="checkedNames"&gt;
          &lt;label for="john"&gt;John&lt;/label&gt;
          &lt;input type="checkbox" id="mike" value="Mike" v-model="checkedNames"&gt;
          &lt;label for="mike"&gt;Mike&lt;/label&gt;
          &lt;br&gt;
          &lt;span&gt;Checked names: <span v-pre>{{ checkedNames }}</span>&lt;/span&gt;
        </pre>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseSlide from '@/modules/BaseSlideMixin'
export default {
  name: 'Slide011',
  mixins: [BaseSlide],
  data () {
    return {
      title: 'Directivas de Vue.js'
    }
  }
}
</script>

<style lang="less" scoped>
.options {
  position: absolute;
  width: 90%;
}
pre {
  background-color: #000;
  color: #fff;
}
</style>
