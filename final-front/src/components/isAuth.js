import cookies from 'js-cookie'
import axios from 'axios'

function isAuth() {
  if(cookies.get('blog'))
  return true
  return false
}

async function isAdmin() {


 const res = await axios.get('/api/Isadmin')
 try {
   if(res.data === 1)
  return res.data
 } catch(err){
   return 0
 }
}

export {isAuth,isAdmin}