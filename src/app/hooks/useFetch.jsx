import axios from "axios"

export function useFetch(url) {
  const baseURL = process.env.NEXT_PUBLIC_API_URL
  return axios.get(baseURL + url)
}
