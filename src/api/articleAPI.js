// 文章相关的API接口，都封装在这个模块中

import request from '@/utils/request.js'
// 向外按需导出一个API函数
export const getArticleListAPI = function(_page, _limit) {
  // 返回一个promise对象
  return request.get('/articles', {
    params: {
      _page: _page,
      _limit: _limit
    }
  })
}
