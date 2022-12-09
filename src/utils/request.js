import axios from 'axios'

const resquest = axios.create({
  baseURL: `https://tiktok.fullstack.edu.vn/api/`,
})

export const get = async (path, option = {}) => {
  const res = await resquest.get(path, option)
  return res.data
}
export default resquest
