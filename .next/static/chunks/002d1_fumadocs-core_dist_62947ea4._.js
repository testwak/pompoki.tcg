(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/fumadocs-core@15.3.1_@oramacloud+client@2.1.4_@types+react@19.1.4_next@15.3.1_react-dom_144ab601dc784eb3a37449fbe907e3ea/node_modules/fumadocs-core/dist/chunk-KAOEMCTI.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/utils/remove-undefined.ts
__turbopack_context__.s({
    "removeUndefined": (()=>removeUndefined)
});
function removeUndefined(value, deep = false) {
    const obj = value;
    for (const key of Object.keys(obj)){
        if (obj[key] === void 0) delete obj[key];
        if (deep && typeof obj[key] === "object" && obj[key] !== null) {
            removeUndefined(obj[key], deep);
        } else if (deep && Array.isArray(obj[key])) {
            obj[key].forEach((v)=>removeUndefined(v, deep));
        }
    }
    return value;
}
;
}}),
"[project]/node_modules/.pnpm/fumadocs-core@15.3.1_@oramacloud+client@2.1.4_@types+react@19.1.4_next@15.3.1_react-dom_144ab601dc784eb3a37449fbe907e3ea/node_modules/fumadocs-core/dist/orama-cloud-USLSOSXS.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "searchDocs": (()=>searchDocs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$3$2e$1_$40$oramacloud$2b$client$40$2$2e$1$2e$4_$40$types$2b$react$40$19$2e$1$2e$4_next$40$15$2e$3$2e$1_react$2d$dom_144ab601dc784eb3a37449fbe907e3ea$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$KAOEMCTI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@15.3.1_@oramacloud+client@2.1.4_@types+react@19.1.4_next@15.3.1_react-dom_144ab601dc784eb3a37449fbe907e3ea/node_modules/fumadocs-core/dist/chunk-KAOEMCTI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$3$2e$1_$40$oramacloud$2b$client$40$2$2e$1$2e$4_$40$types$2b$react$40$19$2e$1$2e$4_next$40$15$2e$3$2e$1_react$2d$dom_144ab601dc784eb3a37449fbe907e3ea$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$MLKGABMK$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@15.3.1_@oramacloud+client@2.1.4_@types+react@19.1.4_next@15.3.1_react-dom_144ab601dc784eb3a37449fbe907e3ea/node_modules/fumadocs-core/dist/chunk-MLKGABMK.js [app-client] (ecmascript)");
;
;
// src/search/client/orama-cloud.ts
async function searchDocs(query, tag, options) {
    const list = [];
    const { index = "default", client, params: extraParams = {} } = options;
    if (index === "crawler") {
        const result2 = await client.search({
            ...extraParams,
            term: query,
            where: {
                category: tag ? {
                    eq: tag.slice(0, 1).toUpperCase() + tag.slice(1)
                } : void 0,
                ...extraParams.where
            },
            limit: 10
        });
        if (!result2) return list;
        if (index === "crawler") {
            for (const hit of result2.hits){
                const doc = hit.document;
                list.push({
                    id: hit.id,
                    type: "page",
                    content: doc.title,
                    url: doc.path
                }, {
                    id: "page" + hit.id,
                    type: "text",
                    content: doc.content,
                    url: doc.path
                });
            }
            return list;
        }
    }
    const params = {
        ...extraParams,
        term: query,
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$3$2e$1_$40$oramacloud$2b$client$40$2$2e$1$2e$4_$40$types$2b$react$40$19$2e$1$2e$4_next$40$15$2e$3$2e$1_react$2d$dom_144ab601dc784eb3a37449fbe907e3ea$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$KAOEMCTI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeUndefined"])({
            tag,
            ...extraParams.where
        }),
        groupBy: {
            properties: [
                "page_id"
            ],
            maxResult: 7,
            ...extraParams.groupBy
        }
    };
    const result = await client.search(params);
    if (!result || !result.groups) return list;
    for (const item of result.groups){
        let addedHead = false;
        for (const hit of item.result){
            const doc = hit.document;
            if (!addedHead) {
                list.push({
                    id: doc.page_id,
                    type: "page",
                    content: doc.title,
                    url: doc.url
                });
                addedHead = true;
            }
            list.push({
                id: doc.id,
                content: doc.content,
                type: doc.content === doc.section ? "heading" : "text",
                url: doc.section_id ? `${doc.url}#${doc.section_id}` : doc.url
            });
        }
    }
    return list;
}
;
}}),
}]);

//# sourceMappingURL=002d1_fumadocs-core_dist_62947ea4._.js.map