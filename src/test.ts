// // 类型注解
// // let foo = 'xx' // 类型推论
// let bar: string // 类型约束

// // bar = 1 // wrong
// bar = 'bar'

// let abc:{foo:string, bar:number}
// abc = { foo: 'foo', bar: 1 }
// abc.foo = 'abfs'

// let fee:string|number
// fee = 'efe'
// fee = 1

// // 数组类型约束
// let names: string[]
// name = ['Tom', 'Sam']

// // 任意类型
// let bar:any
// baz = 1
// baz = 'abc'

// // any应用与数组
// const list:any[] = [1, true, 'free']
// list[0] = 'abc'

// // 函数中使用类型
// function greeting (person: string): string {
//   return 'hello,' + person
// }
// greeting('Tom')

// function warnUser ():void{
//   alert('dfsd')
// }

// // 内置的常用类型：string,number,boolean,void,any

// // 函数
// // 必填函数:行参只要声明必须传递
// // 加上？表示可选，可选参数要在必选参数后面
// function sayHello (name:string, age?:number) {
//   console.log(name, age)
// }
// sayHello('Tom', 18)
// sayHello('Tom')

// // 函数重载：以参数数量或类型区分多个同名函数
// // 先声明，再实现
// function info(a:object):string
// function info(a:string):object

// function info (a:any):any {
//   if (typeof a === 'object') {
//     return a.name
//   } else {
//     return { name: a }
//   }
// }

// // class
// class MyComp {
//   private _foo: string; // 私有属性，不能在类的外部访问
//   protected bar: string;// 保护属性，还可以在派⽣类中访问
//   readonly mua = 'mua'; // 只读属性必须在声明时或构造函数⾥初始化
//   static dong = 'dong'; // 静态属性，通过myComp.dong访问
//   // 构造函数：初始化成员变量
//   // 参数加上修饰符，能够定义并初始化⼀个成员属性
//   constructor (private tua = 'tua') {
//     this._foo = 'foo'
//     this.bar = 'bar'
//   }

//   // ⽅法也有修饰符
//   private someMethod () {
//     // this.tua
//   }

//   // 存取器：存取数据时可添加额外逻辑；在vue⾥⾯可以⽤作计算属性
//   get foo () { return this._foo }
//   set foo (val) { this._foo = val }
// }
// const mycomp = new MyComp()
// mycomp.foo = 'fsdf'

// // 接口：仅定义结构，不需要实现
// interface Person {
// firstName: string;
// lastName: string;
// sayHello(): string; // 要求实现⽅法
// }
// // 实现接⼝
// class Greeter implements Person {
//   constructor (public firstName = '', public lastName = '') {}
//   sayHello () {
//     return 'Hello, ' + this.firstName + ' ' + this.lastName
//   }
// }
// // ⾯向接⼝编程
// function greeting (person: Person) {
//   return person.sayHello()
// }
// // const user = { firstName: 'Jane', lastName: 'User' }
// const user = new Greeter('Jane', 'User') // 创建对象实例
// console.log(user)
// console.log(greeting(user))

// 泛型：Generics是指在定义函数、接⼝或类的时候，不预先指定具体的类型，⽽在使⽤的时候再指定类型的⼀种特性。
