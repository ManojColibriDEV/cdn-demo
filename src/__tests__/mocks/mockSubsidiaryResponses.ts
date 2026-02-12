/**
 * Mock Data: Subsidiary and Global API Responses
 * Contains mock responses for subsidiary fetching and brand data
 */

export const mockSubsidiariesResponse = [
  {
    subsidiaryId: 1,
    subsidiaryName: "Elite Learning",
    siteURL: "https://dev.elitelearning.com",
  },
  {
    subsidiaryId: 2,
    subsidiaryName: "CE Broker",
    siteURL: "https://dev.cebroker.com",
  },
  {
    subsidiaryId: 3,
    subsidiaryName: "Colibri Real Estate",
    siteURL: "https://dev.colibrirealestate.com",
  },
  {
    subsidiaryId: 4,
    subsidiaryName: "McKissock Learning",
    siteURL: "https://dev.mckissock.com",
  },
];

export const mockSubsidiaryByDomain = {
  "elitelearning.com": {
    subsidiaryId: 1,
    subsidiaryName: "Elite Learning",
    siteURL: "https://dev.elitelearning.com",
  },
  "cebroker.com": {
    subsidiaryId: 2,
    subsidiaryName: "CE Broker",
    siteURL: "https://dev.cebroker.com",
  },
  "colibrirealestate.com": {
    subsidiaryId: 3,
    subsidiaryName: "Colibri Real Estate",
    siteURL: "https://dev.colibrirealestate.com",
  },
};

export const mockBrandData = {
  id: "elite",
  domain: "elitelearning.com",
  name: "Elite Learning",
};

export const mockBrandHeaders = {
  "X-Brand-Id": "elite",
  "X-Subsidiary-Id": "1",
  "X-Brand-Domain": "elitelearning.com",
};
