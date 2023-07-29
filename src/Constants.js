const prod = {
  url: {
    KEYCLOAK_BASE_URL: "https://keycloak.greeta.net",
    API_BASE_URL: 'https://erp.greeta.net',
    OMDB_BASE_URL: 'https://www.omdbapi.com',
    AVATARS_DICEBEAR_URL: 'https://api.dicebear.com/6.x'
  }
}

const dev = {
  url: {
    KEYCLOAK_BASE_URL: "http://localhost:8080",
    API_BASE_URL: 'http://localhost:9080',
    OMDB_BASE_URL: 'https://www.omdbapi.com',
    AVATARS_DICEBEAR_URL: 'https://api.dicebear.com/6.x'
  }
}

// export const config = process.env.NODE_ENV === 'development' ? dev : prod
export const config = prod