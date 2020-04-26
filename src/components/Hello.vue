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

interface Result<T>{
  ok:0|1
  data:T[]
}

function getData<T> ():Promise<Result<T>> {
  const data:any[] = [
    { id: 1, name: '类型注解' },
    { id: 2, name: '静态类型检测' }
  ]
  // return Promise.resolve<Result<T>>({ ok: 1, data })
  return new Promise(resolve => resolve({ ok: 1, data }))
}

@Component
export default class Hello extends Vue {
  // features:string[]
  private features:Feature[]=[];
  // constructor () {
  //   super()
  // }

  // 生命周期直接声明
  private async created () {
    console.log('created')
    this.features = (await getData<Feature>()).data
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
