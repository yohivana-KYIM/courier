import DataService from './DataService'

const PostService = {
  async getAllPosts() {
    try {
      const response = await DataService.get('/api/posts')
      return response.data
    } catch (error) {
      console.error('Erreur lors de la récupération des posts :', error)
      throw error
    }
  },

  async getPost(id) {
    try {
      const response = await DataService.get(`/api/posts/${id}`)
      return response.data
    } catch (error) {
      console.error(`Erreur lors de la récupération du post avec l'ID ${id} :`, error)
      throw error
    }
  },

  async createPost(postData) {
    try {
      const response = await DataService.post('/api/posts', postData)
      return response.data
    } catch (error) {
      console.error('Erreur lors de la création du post :', error)
      throw error
    }
  },

  async updatePost(id, postData) {
    try {
      const response = await DataService.put(`/api/posts/${id}`, postData)
      return response.data
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du post avec l'ID ${id} :`, error)
      throw error
    }
  },

  async deletePost(id) {
    try {
      const response = await DataService.delete(`/api/posts/${id}`)
      return response.data
    } catch (error) {
      console.error(`Erreur lors de la suppression du post avec l'ID ${id} :`, error)
      throw error
    }
  },
}

export default PostService
