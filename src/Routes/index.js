import { HeaderOnly } from '~/Component/Layout'
import Following from '~/page/Following/Following'
import Home from '~/page/Home/Home'
import Profile from '~/page/Profile/Profile'
import Upload from '~/page/Upload'
import routesConfig from '../config/routes'
//không đăng nhập vẫn xem được
const publicRoutes = [
  { path: routesConfig.home, Comment: Home },
  { path: routesConfig.following, Comment: Following },
  { path: routesConfig.profile, Comment: Profile },
  { path: routesConfig.upload, Comment: Upload, layout: HeaderOnly },
]
//đăng nhập mới xem được
const privateRoutes = []

export { privateRoutes, publicRoutes }
