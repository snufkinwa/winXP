import "./exports.js";
import "devalue";
import { c as create_ssr_component, a as add_attribute } from "./ssr.js";
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const cellphone = "data:image/gif;base64,R0lGODlhAAEuAPQAAAAAADEAAAAxADFjMWNjMQAASgAxSjExSmMxYwBjYzFjY2Njf5xjY2OcY5ycYwAAhABjtQAA/5xjnACcnGOcnAD//5yctc6cnJzOtc7OnM6czs7/zs7O///O/87//////yH5BAQAAAAALAAAAAAAAS4AAAX/IBCNZGmeaKqubOu+cCzPdG3fkSjifO//wKBwmAI8RoCkcslsOp/QqHRKrVqv2Kx2y+U+jrmPeEwum8/otHrNbrvf8Lh8Tq/PjWCAfc/v+/+AgYJweEhoHBwWiouMjYuDkJGSk5R1hWFnHB+aY5xinpuboJWkpaandpd6ZxkcCwewsbKzC6GBLWYkdbpxJaW8t8Bvwh++hF+GmR8HVguIghHFuia5I7vWYtFuxL1w3H7fa8Da4WmqaK0cVQsWttC8xpHYbeVs86jV2tfZ923nmYgOFBhIkCAEgs6eDYo3zZoxavkcpuD37cQYiNImkqGGgqJEiw3HYfToC1dIf8gw/5lBZOGAAQgwYx4kOCHhqD8MLWbcWSxfNoo8T5Y5SRRbtIrzyH3cKfToUqEbl/ZkalTnmn8rEQFIYLAgQQMMEN0EJ9KpUrP9SF6U2nHoU5AP0wLVFzKu2Z4doUa9ezao1KspV2Xl4NKr4QQ2IeW86xcpPLZy1/JNyzHyNMk892bsq9nxZsyPGQPOcyggAMMyISAWq7hs46ncOBdN6hPq0bkOzwizLdnuRar63GKcLVoN1jJimRlYztzAwIMJwioMVnKGbrs6R5JMiv1scM1qR1bdy107v/PbcY1ONlh58+UFV0/HR7++fVPHyYgFIGBK4vsABiigH/l1ktwBrwxwAP8CCiJwwAAIiDXWgBRWaCEZBX4i4YYcbnjhhyBWmKEoHZYoYYgopkjfiCa2OJ+KMMY4CIsuSlgBBzdOKOOOPMoxYiuvHLAMg7AQUKQFFCjyYo9MNskGix80sMCUVFY5pQMSOGDBkk526aUYP5a4SJYUcPjlmWfSSAA7jjQy5ZY6omlfPPXVQ2Bg6LhigQaJsMQBBhdgoEEjccr50yl2VjIOJCN+wEQASzADKQCTCmmoGpFJkiii3/3RKAcdeBBonx1oYuomG3QgD53k9YYWcHmpV5lE19XVmGNyzRYecRDN6tQxpH3CyAfsuPLmnxdwkIEiG3AgAQYWXADnqXvohRv/cJvFOtm2uKFF2VuzZgbatypg21ZT4G46BlaJbLkItO4qCW+7inQAbZ/tUFcbt7r2C1m4mZoLLqbkCsxvVYz5CywSYmXwgZKKSJtIQhL3ydIGWwLqQQf58mEVZuMeLDK24pYsnL/FudopygZ367K6ZajiML2MALpIK/Eq4sACy3bAprsbl3lNykG1zLK2n/1UztF/hbzvyOhuy62PgbFkgZUMLEABO1NKSeXVC+y8SNgWAIpI1s7MoVGru8rQba/VhRNDtv2snZ6v3rrQdsBoqGLl34AH/sqaY78pai0hwnzphapYPO2fHGiQTuTpwBno1UqO0VLaHCiAouKLi4gnZyBpb8I114mzGjqMjdYBtiKrx05h63ScKPvtANKO++5M6s777zH6DvzwIarSxfHIJ6/88sw37zwWyODxxfTUV2/99dhnr/323Hfv/ffghy/++OSXT74R0puv/vrst+/++/DHHz4AIQAAOw==";
const css = {
  code: ".main-container.svelte-uczzz6{height:100%;width:100%;position:absolute;color:black;display:flex;overflow:hidden;flex-direction:column;align-items:center;justify-content:center;background-color:blue;background-size:cover;z-index:1000}",
  map: `{"version":3,"file":"NoCellphones.svelte","sources":["NoCellphones.svelte"],"sourcesContent":["<script>\\n    import cellphone from '$lib/assets/cellphonewarn.gif';\\n\\n<\/script>\\n\\n<div class=\\"main-container\\">\\n    <div class=\\"cellphone\\"><img src={cellphone} alt=\\"cellphone\\" /></div> \\n</div>\\n\\n<style>\\n    .main-container {\\n        height: 100%;\\n        width: 100%;\\n        position: absolute;\\n        color: black;\\n        display: flex;\\n        overflow: hidden;\\n        flex-direction: column;\\n        align-items: center;\\n        justify-content: center;\\n      background-color: blue;\\n        background-size: cover;\\n        z-index: 1000;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAUI,6BAAgB,CACZ,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,MAAM,CAChB,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACzB,gBAAgB,CAAE,IAAI,CACpB,eAAe,CAAE,KAAK,CACtB,OAAO,CAAE,IACb"}`
};
const NoCellphones = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="main-container svelte-uczzz6" data-svelte-h="svelte-3timc7"><div class="cellphone"><img${add_attribute("src", cellphone, 0)} alt="cellphone"></div> </div>`;
});
export {
  NoCellphones as N
};
//# sourceMappingURL=NoCellphones.js.map
