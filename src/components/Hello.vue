<template>
  <div>
    <div><input type="text" @keydown.enter="addFeature"></div>
    <div  v-for="feature in features" :key="feature.id">{{feature.name}}</div>
    <p>{{count}}</p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

// class Feature {
//   constructor (public id:number, public name:string) {}
// }

interface Feature{
  id:number,
  name:string
}

@Component
export default class Hello extends Vue {
  // features:string[]
  private features:Feature[];
  constructor () {
    super()
    this.features = [{ id: 1, name: '类型注解' }, { id: 2, name: '静态类型检测' }]
  }

  private addFeature (event:any) {
    this.features.push(event.target.value)
    event.target.value = ''
  }

  // 计算属性可以使用getter/setter实现
  get count () {
    return this.features.length
  }
}
</script>
