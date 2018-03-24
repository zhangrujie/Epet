import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/home_data',{code: 0, data: data.homepage})
