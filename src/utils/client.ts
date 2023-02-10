import { createClient } from "microcms-js-sdk";

import { config } from "./config";

export const client = createClient({
  serviceDomain: "bicpema",
  apiKey: config.apiKey,
});
