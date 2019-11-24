import axios from 'axios';
axios.defaults.baseURL="/static/mock/";

axios.interceptors.request.use((config)=>{
  console.log('加载啊。。。');
  return config;
});
axios.interceptors.response.use((response)=>{
  return response.data;
});

export let  getBanner=()=>{
  return axios.get('banner.json');
};
export let  getHotList=()=>{
  return axios.get('hotlist.json');
};
