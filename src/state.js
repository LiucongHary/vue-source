import {observe} from './observe/index.js'

export function initState(vm) {
  const opts = vm.$options
  if (opts.props) {
    initProps(vm)
  }
  if (opts.methods) {
    initMethod(vm);
  }
  if (opts.data) {
    initData(vm);
  }
}

function initProps() { }
function initMethod() { }
function initData(vm) {
  // 数据响应式原理
  let data = vm.$options.data; //用户传入的数据
  // vm._data 就是检测后的数据
  data = vm._data = typeof data === 'function' ? data.call(vm) : data;
  // 观测数据
  observe(data); //观测这个数据
}