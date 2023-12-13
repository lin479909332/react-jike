const TOKENKEY = 'token_key'

export function getToken() {
  return localStorage.getItem(TOKENKEY)
}

export function saveToken(token) {
  localStorage.setItem(TOKENKEY, token)
}

export function removeToken() {
  localStorage.removeItem(TOKENKEY)
}
