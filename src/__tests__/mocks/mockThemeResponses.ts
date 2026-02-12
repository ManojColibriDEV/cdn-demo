/**
 * Mock Data: Theme and Brand Configuration
 * Contains mock responses for theme loading and brand configuration
 */

import type { BrandConfig, ThemeConfig } from "../../types";

export const mockBrandsResponse: BrandConfig[] = [
  {
    token: "dev-elite",
    folder: "elite",
    name: "Elite Learning",
    domain: "elitelearning.com",
  },
  {
    token: "dev-cebroker",
    folder: "cebroker",
    name: "CE Broker",
    domain: "cebroker.com",
  },
  {
    token: "dev-colibri",
    folder: "colibri",
    name: "Colibri Real Estate",
    domain: "colibrirealestate.com",
  },
  {
    token: "dev-mckissock",
    folder: "mckissock",
    name: "McKissock Learning",
    domain: "mckissock.com",
  },
];

export const mockThemeConfig: ThemeConfig = {
  styles: [
    { name: "--primary-color", value: "#0066CC" },
    { name: "--secondary-color", value: "#F5A623" },
    { name: "--accent-color", value: "#7ED321" },
    { name: "--background-color", value: "#FFFFFF" },
    { name: "--text-color", value: "#333333" },
    { name: "--font-family-primary", value: "Inter, sans-serif" },
    { name: "--font-family-secondary", value: "Roboto, sans-serif" },
    { name: "--spacing-small", value: "8px" },
    { name: "--spacing-medium", value: "16px" },
    { name: "--spacing-large", value: "24px" },
  ],
};

export const mockThemeVariables = `
:host {
  --primary-color: #0066CC;
  --secondary-color: #F5A623;
  --accent-color: #7ED321;
  --background-color: #FFFFFF;
  --text-color: #333333;
  --font-family-primary: Inter, sans-serif;
  --font-family-secondary: Roboto, sans-serif;
  --spacing-small: 8px;
  --spacing-medium: 16px;
  --spacing-large: 24px;
}
`;

export const mockLoadThemeSuccess = {
  brand: mockBrandsResponse[0],
  theme: mockThemeConfig,
  cssVariables: mockThemeVariables,
};
