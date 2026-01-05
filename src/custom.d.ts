declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.module.css';

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
declare module '*.css';
