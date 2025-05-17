module.exports = {

"[project]/node_modules/.pnpm/fumadocs-core@15.3.1_@oramacloud+client@2.1.4_@types+react@19.1.4_next@15.3.1_react-dom_144ab601dc784eb3a37449fbe907e3ea/node_modules/fumadocs-core/dist/fetch-W5EHIBOE.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchDocs": (()=>fetchDocs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$3$2e$1_$40$oramacloud$2b$client$40$2$2e$1$2e$4_$40$types$2b$react$40$19$2e$1$2e$4_next$40$15$2e$3$2e$1_react$2d$dom_144ab601dc784eb3a37449fbe907e3ea$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$MLKGABMK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@15.3.1_@oramacloud+client@2.1.4_@types+react@19.1.4_next@15.3.1_react-dom_144ab601dc784eb3a37449fbe907e3ea/node_modules/fumadocs-core/dist/chunk-MLKGABMK.js [app-ssr] (ecmascript)");
;
// src/search/client/fetch.ts
var cache = /* @__PURE__ */ new Map();
async function fetchDocs(query, locale, tag, options) {
    const params = new URLSearchParams();
    params.set("query", query);
    if (locale) params.set("locale", locale);
    if (tag) params.set("tag", tag);
    const key = `${options.api ?? "/api/search"}?${params}`;
    const cached = cache.get(key);
    if (cached) return cached;
    const res = await fetch(key);
    if (!res.ok) throw new Error(await res.text());
    const result = await res.json();
    cache.set(key, result);
    return result;
}
;
}}),

};

//# sourceMappingURL=002d1_fumadocs-core_dist_fetch-W5EHIBOE_f54949b8.js.map