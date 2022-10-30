import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  [ADD_COUNTER](state, payload) {
    payload.counter++
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload)
  }
  // addToCart(state, payload) {
  //   // state.cartList.push(payload)
  //   // payload新添加的商品
  //   // let oldProduct = null
  //   // for(let item in state.cartList) {
  //   //   if(item.iid === payload.iid) {
  //   //     oldProduct = item;
  //   //   }
  //   // }

  //   // let product = state.cartList.find(function (item) {
  //   //   return item.iid === payload.iid
  //   // })

  //   // 1.查找之前数组中是否有该商品
  //   let oldProduct = state.cartList.find(item => item.iid === payload.iid)

  //   // 2.判断oldProduct
  //   if(oldProduct) {
  //     oldProduct.count += 1
  //   } else {
  //     payload.count = 1
  //     state.cartList.push(payload)
  //   }



  // }
}
