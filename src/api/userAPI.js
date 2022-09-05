import request from '@/utils/request.js'

// 向外按需导出一个api接口
export const getUserAPI = function() {
  return request.get('/user')
}
