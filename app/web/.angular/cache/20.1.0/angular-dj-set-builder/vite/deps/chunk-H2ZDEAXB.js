// node_modules/.pnpm/@angular+cdk@20.1.0_@angular+common@20.1.0_@angular+core@20.1.0_@angular+compiler@20.1.0_rxjs_c6jqdmuezl5gdeo6y5p557ayui/node_modules/@angular/cdk/fesm2022/css-pixel-value-C_HEqLhI.mjs
function coerceCssPixelValue(value) {
  if (value == null) {
    return "";
  }
  return typeof value === "string" ? value : `${value}px`;
}

// node_modules/.pnpm/@angular+cdk@20.1.0_@angular+common@20.1.0_@angular+core@20.1.0_@angular+compiler@20.1.0_rxjs_c6jqdmuezl5gdeo6y5p557ayui/node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}

export {
  coerceCssPixelValue,
  coerceBooleanProperty
};
//# sourceMappingURL=chunk-H2ZDEAXB.js.map
