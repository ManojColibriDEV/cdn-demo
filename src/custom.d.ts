declare module "*.png" {
  const content: string;
  export default content;
}
declare module "*.jpg" {
  const content: string;
  export default content;
}
declare module "*.jpeg" {
  const content: string;
  export default content;
}
declare module "*.gif" {
  const content: string;
  export default content;
}
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.module.css";

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly MODE: string;
  readonly VITE_RENDER_MODE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
declare module "*.css";

// Web Component type definitions for React usage
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "keycloak-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          ref?: React.Ref<KeycloakWidgetElement>;
          authority?: string;
          subsidiary?: string;
          redirectUrl?: string;
          isShowToggle?: string;
          loginTitle?: string;
          loginSubtitle?: string;
          "show-login"?: string;
          // Function props for React/NPM usage
          onRedirect?: (url: string, userSession?: any) => void;
          onClose?: () => void;
          onLogout?: () => void;
        },
        HTMLElement
      >;
    }
  }

  interface KeycloakWidgetElement extends HTMLElement {
    login(): void;
    logout(): void;
    // Function props
    onRedirect?: (url: string, userSession?: any) => void;
    onClose?: () => void;
    onLogout?: () => void;
  }
}

export {};
