import { c as create_ssr_component } from "./ssr.js";
const MediaQuery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { query } = $$props;
  let matches = false;
  if ($$props.query === void 0 && $$bindings.query && query !== void 0)
    $$bindings.query(query);
  return `${slots.default ? slots.default({ matches }) : ``}`;
});
export {
  MediaQuery as M
};
//# sourceMappingURL=MediaQuery.js.map
