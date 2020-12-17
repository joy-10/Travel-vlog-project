import cookies from 'js-cookie'

function isAuth() {
  if(cookies.get('blog'))
  return true
  return false
}

export default isAuth