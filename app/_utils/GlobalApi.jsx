const { default: axios } = require('axios')

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY

const axiosClient = axios.create({
  baseURL: 'https://nas-medical-admin-2.onrender.com/api',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
})

const getCategory = () => axiosClient.get('/categories?populate=*')

const getDoctorList = () => axiosClient.get('/doctors?populate=*')

const getDoctorByCategory = (category) =>
  axiosClient.get(
    '/doctors?filter[categories] [Name] [$in]=' + category + '&populate=*'
  )

const getDoctorById = (id) => axiosClient.get('/doctors/' + id + '?populate=*')
const bookAppoinment = (data) => axiosClient.post('/appoinments', data)
const sendEmail = (data) => axios.post('/api/sendEmail', data)
const getUserBookingList = (userEmail) =>
  axiosClient.get(
    '/appoinments?[filters][Email][$eq]=' +
      userEmail +
      '&populate[doctor][populate][image][populate][0]=url&populate=*'
  )
const deleteBooking = (id) => axiosClient.delete('/appoinments/' + id)
export default {
  getCategory,
  getDoctorList,
  getDoctorByCategory,
  getDoctorById,
  bookAppoinment,
  sendEmail,
  getUserBookingList,
  deleteBooking,
}
