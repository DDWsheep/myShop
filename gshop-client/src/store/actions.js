import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER
} from './mutation-types'
import {
  reqAddress,
  reqCategory,
  reqShops,
  reqUser,
  reqLogout
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
  }
}
