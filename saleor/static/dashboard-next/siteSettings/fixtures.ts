import { AuthorizationKeyType } from "../types/globalTypes";
import { SiteSettings_shop } from "./types/SiteSettings";

export const shop: SiteSettings_shop = {
  __typename: "Shop",
  authorizationKeys: [
    {
      __typename: "AuthorizationKey",
      key: "n1n62jkn2123:123n",
      name: AuthorizationKeyType.FACEBOOK
    }
  ],
  description: "Lorem ipsum dolor sit amet",
  domain: {
    __typename: "Domain",
    host: "http://104.156.250.24:8000"
  },
  name: "Shopu e-commerce"
};
