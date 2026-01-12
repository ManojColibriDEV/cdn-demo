import Keycloak from 'keycloak-js';
import { resolveAuthority } from '../utils/authorityResolver';

// Function to create Keycloak instance dynamically based on authority
export const createKeycloakInstance = (authority?: string) => {
  const storedAuthority = authority || localStorage.getItem('authority') || 'dev';
  const authorityUrl = resolveAuthority(storedAuthority);
  
  // Extract realm from authority URL
  // Expected format: https://sso.{env}.colibri.com/realms/{realm}
  const realmMatch = authorityUrl.match(/\/realms\/([^/]+)/);
  const realm = realmMatch ? realmMatch[1] : 'elite';
  
  // Extract base URL (everything before /realms/)
  const urlMatch = authorityUrl.match(/(https?:\/\/[^/]+)/);
  const url = urlMatch ? urlMatch[1] : authorityUrl.split('/realms/')[0];

  console.log('[Keycloak] Creating instance with:', { url, realm, authority: storedAuthority });

  const keycloak = new Keycloak({
    url,
    realm,
    clientId: 'colibricore'
  });

  return keycloak;
};

// Default instance for initialization
const keycloak = createKeycloakInstance();

export default keycloak;
