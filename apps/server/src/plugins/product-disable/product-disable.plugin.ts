import { PluginCommonModule, Type, VendurePlugin } from "@vendure/core";

@VendurePlugin({
  imports: [PluginCommonModule],
  dashboard: {
    location: "./dashboard/extension.tsx",
  },
  compatibility: "^3.0.0",
})
export class ProductDisablePlugin {
  static init(): Type<ProductDisablePlugin> {
    return ProductDisablePlugin;
  }
}
