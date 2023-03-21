export interface CustomResponse {
    message: string
    meta?: Meta
    data?: any
}

export interface Meta {
  page: number
  pageSize: number
  totalPages: number
  totalItems: number
}