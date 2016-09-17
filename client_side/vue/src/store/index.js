/* eslint-disable */
import { EventEmitter } from 'events'

const blogAPI = `/proxyPrefix/api/post`;

const aboutAPI = `/proxyPrefix/api/post/57dbe47c2993f70dc6d6b12c`

const store = new EventEmitter()

export default store

store.fetchAbout = (vue) => {
  return vue.$http.get(aboutAPI).then((response) => {
    // console.log('Response Ok')
    return response.body;
  }, (err) => {
    // console.log('Response Error')
    console.log(err)
  })
}

store.fetchBlogCount = (vue, page = 0, perPage = 10) => {

  return vue.$http.get(blogAPI,{
    params: {
      conditions: {
        type: 0
      },
      count: 1,
    }
  }).then((response) => {
    let totalPage = Math.ceil(parseInt(response.body)/perPage);
    return totalPage;
  }, (err) => {
    console.log(err)
  })
}
 
store.fetchBlogByPage = (vue, page = 0, perPage = 10) => {

  return vue.$http.get(blogAPI,{
    params: {
      conditions: {
        type: 0
      },
      limit: perPage,
      skip: page*perPage,
    }
  }).then((response) => {
    console.log(response.body[0].title);
    return response.body;
  }, (err) => {
    console.log(err)
  })
}