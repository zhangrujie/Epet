
import{
  reqHomeData,
}from '../api/index'
import {
  RECEIVE_HOME_DATA
} from './mutations-types'

export default {
  async getHomeData({commit}, callback) {
    let result = await reqHomeData()
    commit(RECEIVE_HOME_DATA ,{homeData: result.data})
    callback && callback()
  }
}
