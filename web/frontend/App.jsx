import { NavigationMenu } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import {
  AppBridgeProvider,
  PolarisProvider,
  QueryProvider,
} from "./components";
import Routes from "./Routes";

import "./styles/index.css";

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");
  const { t } = useTranslation();

  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
            <NavigationMenu
              navigationLinks={[
                {
                  label: t("NavigationMenu.dashboard"),
                  destination: "/",
                },
                {
                  label: t("NavigationMenu.discounts"),
                  destination: "/discounts",
                },
                {
                  label: t("NavigationMenu.settings"),
                  destination: "/settings",
                },
              ]}
            />
            <Routes pages={pages} />
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
