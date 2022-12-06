import { HeaderOnly } from '~/Component/Layout'
import Following from '~/page/Following/Following'
import Home from '~/page/Home/Home'
import Profile from '~/page/Profile/Profile'
import Upload from '~/page/Upload'
//không đăng nhập vẫn xem được
const publicRoutes = [
  { path: '/', Comment: Home },
  { path: '/following', Comment: Following },
  { path: '/profile', Comment: Profile },
  { path: '/upload', Comment: Upload, layout: HeaderOnly },
]
//đăng nhập mới xem được
const privateRoutes = []

export { privateRoutes, publicRoutes }
