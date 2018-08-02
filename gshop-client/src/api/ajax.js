import axios from 'axios';

export default function ajax (url, data={}, type='GET') {
  return new Promise(function (reslove, reject) {
    let promise;
    if(type === 'GET'){
      //拼接url /register?username=dashen1&password=1243  query参数数据
      let queryStr = '';
      Object.keys(data).forEach(key => {
        const value = data[key];
        queryStr += key + '=' + value + '&'
      });
      //去除最后一个&
      if(queryStr){
        queryStr = queryStr.substring(0,queryStr.length-1);// username=tom&password=123
        queryStr = '?' + queryStr //?username=tom&password=123
      }
     
      promise = axios.get(url + queryStr);
    }else{
      promise = axios.post(url, data);
    }
    
    promise.then(response => {
      reslove(response.data)
    })
      .catch(error => {
        reject(error)
      })
    
  });
  
}
