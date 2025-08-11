import axios from 'axios'

export function useFetch(url) {
  // Use relative URL for same-origin requests
  return axios.get(url)
}
