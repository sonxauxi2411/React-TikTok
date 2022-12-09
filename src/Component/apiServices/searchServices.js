import * as resquest from '~/utils/request'

export const searchApi = async (q, type = 'less') => {
  try {
    const res = await resquest.get(`/users/search`, {
      params: {
        q,
        type: 'less',
      },
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}
