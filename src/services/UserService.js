import DataService from './DataService'

const UserService = {
  async getAllUsers() {
    try {
      const response = await DataService.get('/api/users')
      return response.data
    } catch (error) {
      console.error('Error fetching users:', error)
      throw error
    }
  },

  async getUser(id) {
    try {
      const response = await DataService.get(`/api/users/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error fetching user with ID ${id}:`, error)
      throw error
    }
  },



  async updateUser(id, userData) {
    try {
      const response = await DataService.put(`/api/users/${id}`, userData)
      return response.data
    } catch (error) {
      console.error(`Error updating user with ID ${id}:`, error)
      throw error
    }
  },

  async deleteUser(id) {
    try {
      const response = await DataService.delete(`/api/users/${id}`)
      return response.data 
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error)
      throw error
    }
  },
}

export default UserService
