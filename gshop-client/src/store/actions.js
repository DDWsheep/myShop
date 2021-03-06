import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutation-types'
import {
  reqAddress,
  reqCategory,
  reqShops,
  reqUser,
  reqLogout,
  reqGoods,
  reqRatings,
  reqInfo
} from '../api'
export default {
  async getAddress({commit, state}){
    //异步获取当前地址
    const {latitude, longitude} = state;
    const geohash = `${latitude},${longitude}`;
    const result = await reqAddress(geohash);
    if(result.code === 0){
      const address = result.data;
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  async getCategorys({commit}){
    //异步获取商品分类列表
    const result = await reqCategory();
    if(result.code === 0){
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  async getShops({commit, state}){
    //异步获取商家
    const {latitude, longitude} = state;
    const result = await reqShops(latitude, longitude);
    if(result.code === 0){
      const shops = result.data;
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  //同步保存用户
  saveUser({commit}, user){
    commit(RECEIVE_USER, {user})
  },
  
  async giveUser({commit}){
    const result = await reqUser();
    if(result.code === 0){
      const user = result.data;
      commit(RECEIVE_USER, {user})
    }
  },
  
  async logout({commit}){
    const result = await reqLogout();
    if(result.code === 0){
      commit(RESET_USER)
    }
  },
  
  async getGoods({commit, state}, cb){
    //异步获取商品列表
    const result = await reqGoods();
    if(result.code === 0){
      const goods = result.data;
      commit(RECEIVE_GOODS, {goods})
      //数据更新之后执行回调函数
      cb && cb()
    }
  },
  async getRatings({commit, state}, cb){
    //异步获取评论
    const result = await reqRatings();
    if(result.code === 0){
      const ratings = result.data;
      commit(RECEIVE_RATINGS, {ratings})
      //数据更新之后执行回调函数
      cb && cb()
    }
  },
  async getInfo({commit, state}, cb){
    //异步获取商家
    const result = await reqInfo();
    if(result.code === 0){
      const info = result.data;
      commit(RECEIVE_INFO, {info})
      //数据更新之后执行回调函数
      cb && cb()
    }
  },
  
  updateFoodCount ({commit, state}, {food, isAdd}) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  }
}
