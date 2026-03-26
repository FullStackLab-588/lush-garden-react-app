import { use } from "react";
import { fetchSiteData, type SiteData } from "../api/api";

let cachedPromise: Promise<SiteData> | null = null;

const getSiteDataPromise = (): Promise<SiteData> => {
  if (!cachedPromise) {
    cachedPromise = fetchSiteData();
  }
  return cachedPromise;
};

export const resetSiteDataPromise = (): void => {
  cachedPromise = null;
};

export const useSiteData = (): SiteData => use(getSiteDataPromise());
