import { config } from '../../Constants'

export const getAvatarUrl = (text) => {
  return `${config.url.AVATARS_DICEBEAR_URL}/avataaars/svg?seed=${text}`
}

export const isAdmin = (keycloak) => {
  return keycloak && 
         keycloak.tokenParsed && 
         keycloak.tokenParsed.resource_access['erp-app'] && 
         keycloak.tokenParsed.resource_access['erp-app'].roles.includes('ERP_MANAGER')
}

export const handleLogError = (error) => {
  if (error.response) {
    console.log(error.response.data);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log(error.message);
  }
}