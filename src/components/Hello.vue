<template>
  <div>
    <p>{{msg}}</p>
    <div><input type="text" @keydown.enter="addFeature"></div>
    <div  v-for="feature in features" :key="feature.id">{{feature.name}}</div>
    <p>{{count}}</p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator'
import { State, Mutation, Action } from 'vuex-class'

// class Feature {
//   constructor (public id:number, public name:string) {}
// }

export interface Feature{
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

// @Component({
//   props: {
//     msg: {
//       type: String,
//       default: ''
//     }
//   }
// })
@Component
export default class Hello extends Vue {
@Prop({ type: String, default: '' })
private msg!:string

  // features:string[]
  @State
  private features!:Feature[];

  @Action addFeatureAction:any;
  @Mutation addFeatureMutation:any;
  // constructor () {
  //   super()
  // }

  // 生命周期直接声明
  private async created () {
    console.log('created')
    this.features = (await getData<Feature>()).data
  }

  @Watch('features', { deep: true })
  private msgChange (newVal:any, oldVal:any) {
    console.log(newVal, oldVal)
  }

  // 不给Emit传参，表示事件名就是方法名
  @Emit('add')
  private addFeature (event:any) {
    // const feature = { id: this.features.length + 1, name: event.target.value }
    // this.features.push(feature)
    this.addFeatureAction(event.target.value)
    event.target.value = ''
    // 如果没有返回值，行参是事件参数，否则返回值是
    // return feature
  }

  // 计算属性可以使用getter/setter实现
  get count () {
    return this.features.length
  }
}
</script>
