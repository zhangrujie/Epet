
import {
  RECEIVE_HOME_DATA
}from './mutations-types'


export default {
  [RECEIVE_HOME_DATA](state,{homeData}){
    state.homeData = homeData
  }
}
