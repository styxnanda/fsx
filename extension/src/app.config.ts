import { defineAppConfig } from "wxt/sandbox";

// Define types for config
declare module "wxt/sandbox" {
  export interface WxtAppConfig {
    theme?: "light" | "dark";
  }
}

export default defineAppConfig({
  theme: "dark",
});
