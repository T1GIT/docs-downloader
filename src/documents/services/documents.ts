import { axiosApi } from '@/shared/utils/axios'
import type { Document } from '@/documents/dto/document'


export const documentsService = {
  getAll: async (search?: string) => {
    const { data } = await axiosApi.get<Document[]>('/user/docs', {
      params: { search },
    })
    return data
  },
}
