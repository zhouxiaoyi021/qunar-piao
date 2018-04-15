let city
try{
  city = localStorage.getItem('city') || '北京'
}catch(e){}

export default {
  city
}