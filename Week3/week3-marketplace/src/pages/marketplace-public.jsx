import * as React from "react";
import { LoginForm, useAuth } from "domains/auth";
import { MarketplacePrivate } from "./marketplace-private";

export const MarketplacePublic = () => {
  const auth = useAuth();

  switch (auth.status) {
    case "anonymous":
      return <LoginForm />
    case "authenticated":
      return <MarketplacePrivate />
    default:
  }
};

