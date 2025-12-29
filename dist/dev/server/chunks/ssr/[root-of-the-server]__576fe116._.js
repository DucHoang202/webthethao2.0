module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$react$2d$burger$2d$menu$2f$lib$2f$BurgerMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/BurgerMenu.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const Header = ()=>{
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleStateChange = (state)=>{
        setMenuOpen(state.isOpen);
    };
    const closeMenu = ()=>{
        setMenuOpen(false);
    };
    const getLinkConfig = (index)=>{
        // Map theo thứ tự: 0-Solutions, 1-Benefits, 2-Customers, 3-Blog, 4-Contact
        const linkConfigs = [
            {
                href: "#solution",
                target: "#solution"
            },
            {
                href: "#benefit",
                target: "#benefit"
            },
            {
                href: "#customer",
                target: "#customer"
            },
            {
                href: "/blog",
                target: ""
            },
            {
                href: "/form",
                target: ""
            }
        ];
        return linkConfigs[index] || {
            href: "#",
            target: ""
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "header",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "header__container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "logo",
                    href: "/",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/assets/Link.webp",
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx",
                        lineNumber: 30,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "button",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/assets/shop.webp",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx",
                                        lineNumber: 35,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text",
                                    children: "Shop"
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx",
                            lineNumber: 33,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$react$2d$burger$2d$menu$2f$lib$2f$BurgerMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slide"], {
                            right: true,
                            isOpen: menuOpen,
                            onStateChange: handleStateChange,
                            customBurgerIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "burger-icon",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx",
                                        lineNumber: 45,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx",
                                        lineNumber: 46,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx",
                                        lineNumber: 47,
                                        columnNumber: 33
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx",
                                lineNumber: 44,
                                columnNumber: 29
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx",
                    lineNumber: 32,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx",
            lineNumber: 28,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/webthethao2.0-main/webthethao2.0-main/hooks/useIsCustomView.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsCustomView",
    ()=>useIsCustomView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useIsCustomView(max) {
    const [isCustomView, setIsCustomView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const check = ()=>setIsCustomView(window.innerWidth <= max);
        check();
        window.addEventListener("resize", check);
        return ()=>window.removeEventListener("resize", check);
    }, [
        max
    ]);
    return isCustomView;
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$hooks$2f$useIsCustomView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/hooks/useIsCustomView.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FreeMode$3e$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/swiper/modules/free-mode.mjs [app-ssr] (ecmascript) <export default as FreeMode>");
'use client';
;
;
;
;
;
const SwiperRow = ({ items, active = 0, gap = 12, style = {} })=>{
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(active);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$hooks$2f$useIsCustomView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsCustomView"])(767);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setActiveIndex(active);
    }, [
        active
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "search header",
        style: style,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search__item",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M2 11.7888L5.72414 7.59914L8.2069 10.3922L14 3.875",
                            stroke: "white",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9.8623 3.875H14.0002V8.53017",
                            stroke: "white",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                slidesPerView: "auto",
                freeMode: true,
                modules: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FreeMode$3e$__["FreeMode"]
                ],
                spaceBetween: gap,
                className: "search-container",
                children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        style: {
                            width: "auto"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `search__item ${activeIndex === index ? "active" : ""} ${index === items.length - 1 ? "last" : ""}`,
                            onClick: ()=>setActiveIndex(index),
                            children: [
                                item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                                    lineNumber: 43,
                                    columnNumber: 43
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "name",
                                    children: [
                                        isMobile ? "" : "#",
                                        item.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                                    lineNumber: 44,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                            lineNumber: 39,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                        lineNumber: 38,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search__item hideInMobile ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "name bg-gray",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z",
                                    stroke: "white",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M13.9996 14L11.0996 11.1",
                                    stroke: "white",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                                    lineNumber: 54,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            className: "search",
                            placeholder: "Tìm kiếm theo chủ đề hoặc bộ môn..."
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SwiperRow;
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Search.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Schedule$2f$SwiperRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const Search = ({ style })=>{
    const lastScrollTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const header = document.getElementById("search-bar-hidden");
            if (!header) return;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop.current) {
                // Kéo xuống → ẩn
                header.classList.add("hide");
            } else {
                // Kéo lên → hiện
                header.classList.remove("hide");
            }
            lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const search = [
        {
            name: "TRENDING NOW",
            nav: "",
            icon: null
        },
        {
            name: "Hanoi Open Pool",
            nav: "",
            icon: null
        },
        {
            name: "PPA MB Vietnam Cup",
            nav: "",
            icon: null
        },
        {
            name: "PPA MB Vietnam Cup",
            nav: "",
            icon: null
        },
        {
            name: "PPA MB Vietnam Cup",
            nav: "",
            icon: null
        },
        {
            name: "PPA MB Vietnam Cup",
            nav: "",
            icon: null
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "search-bar-hidden",
        className: "search-bar-hidden",
        style: {
            ...style,
            background: "#1A1A1A"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Schedule$2f$SwiperRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            items: search,
            active: 0,
            gap: 14,
            style: {
                ...style,
                background: "#1A1A1A"
            }
        }, void 0, false, {
            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Search.tsx",
            lineNumber: 54,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Search.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Search;
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
const SportGroup = ({ open, onClose })=>{
    const sportGroups = [
        {
            name: "Pickleball",
            image: "/assets/pickleball.webp"
        },
        {
            name: "Bóng chuyền",
            image: "/assets/image 14.webp"
        },
        {
            name: "Bóng bàn",
            image: "/assets/image 13.webp"
        },
        {
            name: "Billiards",
            image: "/assets/image 3.webp"
        },
        {
            name: "Cầu lông",
            image: "/assets/image 4.webp"
        },
        {
            name: "Bóng đá",
            image: "/assets/image 5.webp"
        },
        {
            name: "Bóng rổ",
            image: "/assets/image 6.webp"
        },
        {
            name: "Võ thuật",
            image: "/assets/image 7.webp"
        },
        {
            name: "Điền kinh",
            image: "/assets/image 8.webp"
        },
        {
            name: "Bơi lội",
            image: "/assets/image 9.webp"
        },
        {
            name: "e-Sports",
            image: "/assets/image 10.webp"
        },
        {
            name: "Tennis",
            image: "/assets/image 11.webp"
        }
    ];
    const divideSportGroup = (list)=>list.reduce((acc, _, i)=>i % 2 === 0 ? [
                ...acc,
                list.slice(i, i + 2)
            ] : acc, []);
    // Tắt bằng ESC
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const esc = (e)=>e.key === 'Escape' && onClose();
        window.addEventListener("keydown", esc);
        return ()=>window.removeEventListener("keydown", esc);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    onClick: ()=>onClose(),
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    style: {
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.45)",
                        backdropFilter: "blur(4px)",
                        zIndex: 101
                    }
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                    lineNumber: 39,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        y: 200,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    exit: {
                        y: 200,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.25,
                        ease: "easeOut"
                    },
                    style: {
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        background: "white",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        padding: 20,
                        zIndex: 102
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sport-group",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sport-group__container",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sport-group__title-container",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sport-group__title",
                                                children: " Nhóm thể thao "
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                                                lineNumber: 72,
                                                columnNumber: 143
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sport-group__icon",
                                                onClick: onClose,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M15.7123 16.773L7.22699 8.28768C6.93708 7.99776 6.93708 7.51693 7.22699 7.22702C7.51691 6.9371 7.99774 6.9371 8.28765 7.22702L16.7729 15.7123C17.0628 16.0022 17.0628 16.483 16.7729 16.773C16.483 17.0629 16.0022 17.0629 15.7123 16.773Z",
                                                            fill: "#121212"
                                                        }, void 0, false, {
                                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 33
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M7.22706 16.773C6.93715 16.483 6.93715 16.0022 7.22706 15.7123L15.7123 7.22702C16.0023 6.9371 16.4831 6.9371 16.773 7.22702C17.0629 7.51693 17.0629 7.99776 16.773 8.28768L8.28772 16.773C7.99781 17.0629 7.51698 17.0629 7.22706 16.773Z",
                                                            fill: "#121212"
                                                        }, void 0, false, {
                                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 33
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                                                lineNumber: 72,
                                                columnNumber: 201
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                                        lineNumber: 72,
                                        columnNumber: 96
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sport-group__body",
                                        children: [
                                            " ",
                                            divideSportGroup(sportGroups).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sport-group__row",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "sport-group__item",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: item[0].image,
                                                                    alt: "",
                                                                    className: "image"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                                                                    lineNumber: 78,
                                                                    columnNumber: 212
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                item[0].name,
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 176
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "sport-group__item",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: item[1].image,
                                                                    alt: "",
                                                                    className: "image"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                                                                    lineNumber: 78,
                                                                    columnNumber: 323
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                item[1].name,
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 287
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 141
                                                }, ("TURBOPACK compile-time value", void 0))),
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                                        lineNumber: 78,
                                        columnNumber: 39
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                                lineNumber: 72,
                                columnNumber: 55
                            }, ("TURBOPACK compile-time value", void 0)),
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                        lineNumber: 72,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                    lineNumber: 55,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SportGroup;
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$SportGroup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const Nav = ()=>{
    const [openSportGroup, setOpenSportGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "nav",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav__container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "nav__nav",
                        href: "/schedule",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M13.1751 16.8166C12.9584 16.8166 12.7334 16.8083 12.4917 16.7833C12.0584 16.7499 11.5667 16.6666 11.0584 16.5416L9.65839 16.2083C5.81673 15.2999 4.55839 13.2666 5.45839 9.43326L6.27506 5.9416C6.45839 5.14993 6.67506 4.50826 6.94173 3.97493C8.37506 1.0166 11.1167 1.28326 13.0667 1.7416L14.4584 2.0666C16.4084 2.52493 17.6417 3.24993 18.3334 4.35826C19.0167 5.4666 19.1251 6.8916 18.6667 8.8416L17.8501 12.3249C17.1334 15.3749 15.6417 16.8166 13.1751 16.8166ZM10.9334 2.70826C9.54173 2.70826 8.65839 3.28326 8.06673 4.5166C7.85006 4.9666 7.65839 5.52493 7.49173 6.22493L6.67506 9.7166C5.93339 12.8666 6.79173 14.2416 9.94173 14.9916L11.3417 15.3249C11.7917 15.4333 12.2167 15.4999 12.6001 15.5333C14.8667 15.7583 15.9917 14.7666 16.6251 12.0416L17.4417 8.55827C17.8167 6.94993 17.7667 5.82493 17.2667 5.0166C16.7667 4.20826 15.7834 3.65826 14.1667 3.28326L12.7751 2.95826C12.0834 2.7916 11.4667 2.70826 10.9334 2.70826Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 13,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6.94155 18.5419C4.79988 18.5419 3.43321 17.2586 2.55821 14.5502L1.49155 11.2586C0.308214 7.59189 1.36655 5.52523 5.01655 4.34189L6.33321 3.91689C6.76655 3.78356 7.09155 3.69189 7.38321 3.64189C7.62488 3.59189 7.85821 3.68356 7.99988 3.87523C8.14155 4.06689 8.16655 4.31689 8.06655 4.53356C7.84988 4.97522 7.65821 5.53356 7.49988 6.23356L6.68321 9.72522C5.94155 12.8752 6.79988 14.2502 9.94988 15.0002L11.3499 15.3336C11.7999 15.4419 12.2249 15.5086 12.6082 15.5419C12.8749 15.5669 13.0915 15.7502 13.1665 16.0086C13.2332 16.2669 13.1332 16.5336 12.9165 16.6836C12.3665 17.0586 11.6749 17.3752 10.7999 17.6586L9.48321 18.0919C8.52488 18.3919 7.69155 18.5419 6.94155 18.5419ZM6.48321 5.18356L5.40821 5.53356C2.43321 6.49189 1.72488 7.89189 2.68321 10.8752L3.74988 14.1669C4.71655 17.1419 6.11655 17.8586 9.09155 16.9002L10.4082 16.4669C10.4582 16.4502 10.4999 16.4336 10.5499 16.4169L9.66655 16.2086C5.82488 15.3002 4.56655 13.2669 5.46655 9.43356L6.28321 5.94189C6.34155 5.67523 6.40821 5.41689 6.48321 5.18356Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 14,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M14.5751 8.75815C14.5251 8.75815 14.4751 8.74981 14.4168 8.74148L10.3751 7.71648C10.0418 7.63315 9.84181 7.29148 9.92514 6.95815C10.0085 6.62481 10.3501 6.42481 10.6835 6.50815L14.7251 7.53315C15.0585 7.61648 15.2585 7.95815 15.1751 8.29148C15.1085 8.56648 14.8501 8.75815 14.5751 8.75815Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 15,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12.1333 11.5749C12.0833 11.5749 12.0333 11.5666 11.9749 11.5582L9.54994 10.9416C9.21661 10.8582 9.01661 10.5166 9.09994 10.1832C9.18328 9.84991 9.52494 9.64991 9.85828 9.73325L12.2833 10.3499C12.6166 10.4332 12.8166 10.7749 12.7333 11.1082C12.6666 11.3916 12.4166 11.5749 12.1333 11.5749Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 16,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                lineNumber: 12,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Nhận định"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                        lineNumber: 11,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "nav__nav",
                        href: "/prediction-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M15.8335 7.2915C14.1085 7.2915 12.7085 5.8915 12.7085 4.1665C12.7085 2.4415 14.1085 1.0415 15.8335 1.0415C17.5585 1.0415 18.9585 2.4415 18.9585 4.1665C18.9585 5.8915 17.5585 7.2915 15.8335 7.2915ZM15.8335 2.2915C14.8002 2.2915 13.9585 3.13317 13.9585 4.1665C13.9585 5.19984 14.8002 6.0415 15.8335 6.0415C16.8668 6.0415 17.7085 5.19984 17.7085 4.1665C17.7085 3.13317 16.8668 2.2915 15.8335 2.2915Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 23,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10.0002 11.4585H5.8335C5.49183 11.4585 5.2085 11.1752 5.2085 10.8335C5.2085 10.4918 5.49183 10.2085 5.8335 10.2085H10.0002C10.3418 10.2085 10.6252 10.4918 10.6252 10.8335C10.6252 11.1752 10.3418 11.4585 10.0002 11.4585Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 24,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M13.3335 14.7915H5.8335C5.49183 14.7915 5.2085 14.5082 5.2085 14.1665C5.2085 13.8248 5.49183 13.5415 5.8335 13.5415H13.3335C13.6752 13.5415 13.9585 13.8248 13.9585 14.1665C13.9585 14.5082 13.6752 14.7915 13.3335 14.7915Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 25,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12.4998 18.9582H7.49984C2.97484 18.9582 1.0415 17.0248 1.0415 12.4998V7.49984C1.0415 2.97484 2.97484 1.0415 7.49984 1.0415H11.6665C12.0082 1.0415 12.2915 1.32484 12.2915 1.6665C12.2915 2.00817 12.0082 2.2915 11.6665 2.2915H7.49984C3.65817 2.2915 2.2915 3.65817 2.2915 7.49984V12.4998C2.2915 16.3415 3.65817 17.7082 7.49984 17.7082H12.4998C16.3415 17.7082 17.7082 16.3415 17.7082 12.4998V8.33317C17.7082 7.9915 17.9915 7.70817 18.3332 7.70817C18.6748 7.70817 18.9582 7.9915 18.9582 8.33317V12.4998C18.9582 17.0248 17.0248 18.9582 12.4998 18.9582Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 26,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                lineNumber: 22,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Mới nhất"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav__nav--home",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12.25 18.9584H7.74997C3.6333 18.9584 1.8833 17.2001 1.8833 13.0918V9.3501C1.8833 9.00843 2.16663 8.7251 2.5083 8.7251C2.84997 8.7251 3.1333 9.00843 3.1333 9.3501V13.0918C3.1333 16.5001 4.34163 17.7084 7.74997 17.7084H12.2416C15.65 17.7084 16.8583 16.5001 16.8583 13.0918V9.3501C16.8583 9.00843 17.1416 8.7251 17.4833 8.7251C17.825 8.7251 18.1083 9.00843 18.1083 9.3501V13.0918C18.1166 17.2001 16.3583 18.9584 12.25 18.9584Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                    lineNumber: 33,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M10.0002 10.6248C9.0835 10.6248 8.25016 10.2665 7.6585 9.60817C7.06683 8.94984 6.79183 8.0915 6.8835 7.17484L7.44183 1.60817C7.47516 1.2915 7.74183 1.0415 8.06683 1.0415H11.9585C12.2835 1.0415 12.5502 1.28317 12.5835 1.60817L13.1418 7.17484C13.2335 8.0915 12.9585 8.94984 12.3668 9.60817C11.7502 10.2665 10.9168 10.6248 10.0002 10.6248ZM8.62516 2.2915L8.12516 7.29984C8.06683 7.85817 8.2335 8.38317 8.5835 8.7665C9.29183 9.54984 10.7085 9.54984 11.4168 8.7665C11.7668 8.37484 11.9335 7.84984 11.8752 7.29984L11.3752 2.2915H8.62516Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15.2585 10.6248C13.5668 10.6248 12.0585 9.25817 11.8835 7.57484L11.3002 1.73317C11.2835 1.55817 11.3418 1.38317 11.4585 1.24984C11.5752 1.1165 11.7418 1.0415 11.9252 1.0415H14.4668C16.9168 1.0415 18.0585 2.0665 18.4002 4.58317L18.6335 6.89984C18.7335 7.88317 18.4335 8.8165 17.7918 9.52484C17.1502 10.2332 16.2502 10.6248 15.2585 10.6248ZM12.6168 2.2915L13.1335 7.44984C13.2418 8.4915 14.2085 9.37484 15.2585 9.37484C15.8918 9.37484 16.4585 9.13317 16.8668 8.6915C17.2668 8.24984 17.4502 7.65817 17.3918 7.02484L17.1585 4.73317C16.9002 2.84984 16.2918 2.2915 14.4668 2.2915H12.6168Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                    lineNumber: 35,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M4.70002 10.6248C3.70835 10.6248 2.80835 10.2332 2.16668 9.52484C1.52502 8.8165 1.22502 7.88317 1.32502 6.89984L1.55002 4.60817C1.90002 2.0665 3.04168 1.0415 5.49168 1.0415H8.03335C8.20835 1.0415 8.37502 1.1165 8.50002 1.24984C8.62502 1.38317 8.67502 1.55817 8.65835 1.73317L8.07502 7.57484C7.90002 9.25817 6.39168 10.6248 4.70002 10.6248ZM5.49168 2.2915C3.66668 2.2915 3.05835 2.8415 2.79168 4.74984L2.56668 7.02484C2.50002 7.65817 2.69168 8.24984 3.09168 8.6915C3.49168 9.13317 4.05835 9.37484 4.70002 9.37484C5.75002 9.37484 6.72502 8.4915 6.82502 7.44984L7.34168 2.2915H5.49168Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                    lineNumber: 36,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12.0832 18.9582H7.9165C7.57484 18.9582 7.2915 18.6748 7.2915 18.3332V16.2498C7.2915 14.4998 8.24984 13.5415 9.99984 13.5415C11.7498 13.5415 12.7082 14.4998 12.7082 16.2498V18.3332C12.7082 18.6748 12.4248 18.9582 12.0832 18.9582ZM8.5415 17.7082H11.4582V16.2498C11.4582 15.1998 11.0498 14.7915 9.99984 14.7915C8.94984 14.7915 8.5415 15.1998 8.5415 16.2498V17.7082Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                            lineNumber: 32,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "nav__nav",
                        href: "/reel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12.4998 18.9582H7.49984C2.97484 18.9582 1.0415 17.0248 1.0415 12.4998V7.49984C1.0415 2.97484 2.97484 1.0415 7.49984 1.0415H12.4998C17.0248 1.0415 18.9582 2.97484 18.9582 7.49984V12.4998C18.9582 17.0248 17.0248 18.9582 12.4998 18.9582ZM7.49984 2.2915C3.65817 2.2915 2.2915 3.65817 2.2915 7.49984V12.4998C2.2915 16.3415 3.65817 17.7082 7.49984 17.7082H12.4998C16.3415 17.7082 17.7082 16.3415 17.7082 12.4998V7.49984C17.7082 3.65817 16.3415 2.2915 12.4998 2.2915H7.49984Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 42,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M17.9001 6.5498H2.1001C1.75843 6.5498 1.4751 6.26647 1.4751 5.9248C1.4751 5.58314 1.7501 5.2998 2.1001 5.2998H17.9001C18.2418 5.2998 18.5251 5.58314 18.5251 5.9248C18.5251 6.26647 18.2501 6.5498 17.9001 6.5498Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 43,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M7.1001 6.4333C6.75843 6.4333 6.4751 6.14997 6.4751 5.8083V1.7583C6.4751 1.41663 6.75843 1.1333 7.1001 1.1333C7.44176 1.1333 7.7251 1.41663 7.7251 1.7583V5.8083C7.7251 6.14997 7.44176 6.4333 7.1001 6.4333Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 44,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12.8999 6.0583C12.5582 6.0583 12.2749 5.77497 12.2749 5.4333V1.7583C12.2749 1.41663 12.5582 1.1333 12.8999 1.1333C13.2416 1.1333 13.5249 1.41663 13.5249 1.7583V5.4333C13.5249 5.7833 13.2499 6.0583 12.8999 6.0583Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 45,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M9.24167 15.1C8.94167 15.1 8.65833 15.025 8.4 14.8834C7.83333 14.55 7.5 13.8834 7.5 13.0417V11.0417C7.5 10.2 7.83333 9.52505 8.40833 9.19171C8.98333 8.85838 9.73333 8.90838 10.4583 9.33338L12.1917 10.3334C12.9167 10.75 13.3417 11.375 13.3417 12.0417C13.3417 12.7084 12.9167 13.3334 12.1833 13.75L10.45 14.75C10.05 14.9834 9.63333 15.1 9.24167 15.1ZM9.25 10.225C9.16667 10.225 9.09167 10.2417 9.03333 10.275C8.85833 10.375 8.75 10.6584 8.75 11.0417V13.0417C8.75 13.4167 8.85833 13.7 9.03333 13.8084C9.20833 13.9084 9.50833 13.8584 9.83333 13.6667L11.5667 12.6667C11.8917 12.475 12.0917 12.2417 12.0917 12.0417C12.0917 11.8417 11.9 11.6084 11.5667 11.4167L9.83333 10.4167C9.61667 10.2917 9.40833 10.225 9.25 10.225Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 46,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Video"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav__nav",
                        onClick: ()=>setOpenSportGroup(true),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M17.75 3.75H2.25C1.83579 3.75 1.5 4.08579 1.5 4.5C1.5 4.91421 1.83579 5.25 2.25 5.25H17.75C18.1642 5.25 18.5 4.91421 18.5 4.5C18.5 4.08579 18.1642 3.75 17.75 3.75Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 53,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M17.75 9.25H2.25C1.83579 9.25 1.5 9.58579 1.5 10C1.5 10.4142 1.83579 10.75 2.25 10.75H17.75C18.1642 10.75 18.5 10.4142 18.5 10C18.5 9.58579 18.1642 9.25 17.75 9.25Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 54,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M17.75 14.75H2.25C1.83579 14.75 1.5 15.0858 1.5 15.5C1.5 15.9142 1.83579 16.25 2.25 16.25H17.75C18.1642 16.25 18.5 15.9142 18.5 15.5C18.5 15.0858 18.1642 14.75 17.75 14.75Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 55,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Bộ môn"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$SportGroup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: openSportGroup,
                onClose: ()=>setOpenSportGroup(false)
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Nav;
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Card = ({ avatar, name, time, image, title, content, category, official, link, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `card--news ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `info ${className}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: avatar,
                        alt: "",
                        className: "avatar"
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "name",
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                                        lineNumber: 24,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    official && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/assets/verify.webp",
                                        alt: "",
                                        className: "official"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                                        lineNumber: 28,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                                lineNumber: 23,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "time",
                                children: time
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            "            ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: link,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: image,
                    alt: "",
                    className: "image",
                    style: {
                        width: "100%"
                    }
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                lineNumber: 35,
                columnNumber: 31
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: link,
                        className: "title",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "content clamp-2",
                        children: content
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "category",
                                children: category
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/message.webp",
                                                alt: "",
                                                className: "icon"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                                                lineNumber: 50,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text",
                                                children: "Bình luận"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                                                lineNumber: 51,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                                        lineNumber: 49,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/export.webp",
                                                alt: "",
                                                className: "icon"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                                                lineNumber: 57,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text",
                                                children: "Chia sẻ"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                                                lineNumber: 58,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                                        lineNumber: 56,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Card;
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/swiper/modules/navigation.mjs [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/swiper/modules/pagination.mjs [app-ssr] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FreeMode$3e$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/swiper/modules/free-mode.mjs [app-ssr] (ecmascript) <export default as FreeMode>");
;
;
;
;
;
;
const Video = ()=>{
    const blogPosts = [
        {
            title: "Blog Post 1",
            excerpt: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
            thumb: "/assets/hi.png",
            link: "/reel"
        },
        {
            title: "Blog Post 2",
            excerpt: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
            thumb: "/assets/hi.png",
            link: "/reel"
        },
        {
            title: "Blog Post 3",
            excerpt: "Excerpt for Blog Post 3",
            thumb: "/assets/hi.png",
            link: "/reel"
        },
        {
            title: "Blog Post 4",
            excerpt: "Excerpt for Blog Post 4",
            thumb: "/assets/hi.png",
            link: "/reel"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "video",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M14.73 2H9.27V6.36H14.73V2Z",
                                fill: "white"
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M16.23 2V6.36H21.87C21.36 3.61 19.33 2.01 16.23 2Z",
                                fill: "white"
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M2 7.86V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.86H2Z",
                                fill: "white"
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M7.77 2C4.67 2.01 2.64 3.61 2.13 6.36H7.77V2Z",
                                fill: "white"
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Video"
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "body",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                    modules: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FreeMode$3e$__["FreeMode"]
                    ],
                    freeMode: true,
                    slidesPerView: "auto",
                    spaceBetween: 12,
                    // pagination={{ clickable: true }}
                    // navigation
                    className: "swiper",
                    children: blogPosts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                            style: {
                                width: "184px"
                            },
                            className: `video-slide ${index === blogPosts.length - 1 ? 'last' : ''}`,
                            onClick: ()=>window.location.href = post.link,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "video-thumb",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: post.thumb,
                                            alt: "",
                                            className: "video__image"
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                                            lineNumber: 70,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "play-button",
                                            onClick: (e)=>{
                                                e.stopPropagation(); // tránh redirect khi click nút play
                                                alert("Video is playing");
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "play-button--inner",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "play",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "24",
                                                        height: "24",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M4 12V8.44C4 4.02 7.13 2.21 10.96 4.42L17.14 7.98C20.97 10.19 20.97 13.81 17.14 16.02L10.96 19.58C7.13 21.79 4 19.98 4 15.56V12Z",
                                                            fill: "white",
                                                            stroke: "white",
                                                            strokeWidth: "1.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                                                lineNumber: 79,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                                            lineNumber: 72,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                                    lineNumber: 69,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content",
                                    children: post.excerpt
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                                    lineNumber: 90,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                            lineNumber: 60,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "view-more--btn black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#",
                    children: "Xem thêm"
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                    lineNumber: 98,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
                lineNumber: 97,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Video;
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/HotTopicCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const HotTopic = ({ isTitled })=>{
    const hotTopic = [
        {
            link: "",
            text: "Đoàn Văn Hậu như trở lại tuổi thơ khi đi truyền cảm hứng bóng đá cho các cầu thủ nhí"
        },
        {
            link: "",
            text: "Đai vô địch WBC Muay Thai thế giới lần đầu được tranh tài tại Việt Nam"
        },
        {
            link: "",
            text: `CLB Hà Nội quyết "đòi lại" ngôi vương V.League 2023/24, xác định "nhì là thất bại"`
        },
        {
            link: "",
            text: `CLB Hà Nội quyết "đòi lại" ngôi vương V.League 2023/24, xác định "nhì là thất bại"`
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card--trending",
        children: [
            isTitled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "title",
                children: "Chủ đề nóng"
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/HotTopicCard.tsx",
                lineNumber: 24,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card--trending__body",
                children: [
                    hotTopic.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "sentence",
                            href: item.link,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "dot",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "4",
                                        height: "4",
                                        viewBox: "0 0 4 4",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M0 0H4V4H0V0Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/HotTopicCard.tsx",
                                            lineNumber: 35,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/HotTopicCard.tsx",
                                        lineNumber: 34,
                                        columnNumber: 50
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/HotTopicCard.tsx",
                                    lineNumber: 34,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text",
                                    children: item.text
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/HotTopicCard.tsx",
                                    lineNumber: 37,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/HotTopicCard.tsx",
                            lineNumber: 31,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))),
                    "  "
                ]
            }, void 0, true, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/HotTopicCard.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/HotTopicCard.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HotTopic;
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Advertisement.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Advertisement = ({ image, isCollapsed })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `adv`,
        children: image ? isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `adv__text padding-12`,
                    children: "ADVERTISEMENT"
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Advertisement.tsx",
                    lineNumber: 5,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: image,
                    alt: ""
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Advertisement.tsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Advertisement.tsx",
            lineNumber: 4,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: image,
            alt: ""
        }, void 0, false, {
            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Advertisement.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `adv__text`,
            children: "ADVERTISEMENT"
        }, void 0, false, {
            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Advertisement.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Advertisement.tsx",
        lineNumber: 2,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const __TURBOPACK__default__export__ = Advertisement;
}),
"[project]/webthethao2.0-main/webthethao2.0-main/hooks/useIsMobile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useIsMobile(max = 767) {
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const check = ()=>setIsMobile(window.innerWidth <= max);
        check();
        window.addEventListener("resize", check);
        return ()=>window.removeEventListener("resize", check);
    }, [
        max
    ]);
    return isMobile;
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/CardHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/hooks/useIsMobile.ts [app-ssr] (ecmascript)");
;
;
const CardTitle = ({ title, logo, style, deco, arrow, className })=>{
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsMobile"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `card--header ${className}`,
        style: style,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card--header__title ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "deco-container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `deco ${isMobile ? 'hidden' : deco ? 'block' : 'hidden'}`
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/CardHeader.tsx",
                            lineNumber: 9,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/CardHeader.tsx",
                        lineNumber: 8,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text",
                        style: {
                            color: style?.color
                        },
                        children: [
                            logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: logo,
                                alt: "",
                                className: "logo"
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/CardHeader.tsx",
                                lineNumber: 17,
                                columnNumber: 30
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/CardHeader.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/CardHeader.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "arrow",
                style: {
                    display: arrow ? 'block' : 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5.93994 13.28L10.2866 8.9333C10.7999 8.41997 10.7999 7.57997 10.2866 7.06664L5.93994 2.71997",
                        stroke: "#52524F",
                        "stroke-miterlimit": "10",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/CardHeader.tsx",
                        lineNumber: 24,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/CardHeader.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/CardHeader.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/CardHeader.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CardTitle;
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const SmallCard = ({ avatar, name, time, image, title, content, category, official, link, style })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card--article",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `card--article__container `,
            style: style,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: link,
                    className: "image",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: image,
                        alt: "",
                        className: "image"
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx",
                        lineNumber: 24,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link,
                            className: "title",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card--article__info",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card--article__name",
                                            children: name
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx",
                                            lineNumber: 32,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card--article__time",
                                            children: time
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx",
                                            lineNumber: 33,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx",
                                    lineNumber: 31,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/message.webp",
                                                alt: "",
                                                className: "icon"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx",
                                                lineNumber: 38,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx",
                                            lineNumber: 37,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/export.webp",
                                                alt: "",
                                                className: "icon"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx",
                                                lineNumber: 43,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx",
                                            lineNumber: 42,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx",
                                    lineNumber: 36,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx",
            lineNumber: 21,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SmallCard;
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGenre.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$NewsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/CardHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$ArticleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx [app-ssr] (ecmascript)");
;
;
;
;
const SportGenre = ({ sport })=>{
    const card1 = {
        avatar: "/assets/Rectangle 1.webp",
        name: "Kiet Phan",
        time: "2 giờ trước",
        image: "/assets/image.webp",
        title: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
        content: "Adidas đang định hình lại vị thế của mình trong làng Pickleball thông qua dòng vợt AdiPower mới - sự kết hợp giữa chất lượng cao và giá cả hợp lý.",
        category: "Pickleball",
        official: true
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sport-genre",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: sport,
                arrow: true
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGenre.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$NewsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                avatar: card1.avatar,
                name: card1.name,
                time: card1.time,
                image: card1.image,
                title: card1.title,
                content: card1.content,
                category: card1.category,
                official: card1.official,
                link: "/blog"
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGenre.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$ArticleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                avatar: card1.avatar,
                name: card1.name,
                time: card1.time,
                image: "/assets/hal.webp",
                title: "Trực tiếp vòng Last 64 Hanoi Open Pool 2025",
                content: card1.content,
                category: card1.category,
                official: card1.official,
                link: "/blog"
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGenre.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$ArticleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                avatar: card1.avatar,
                name: card1.name,
                time: card1.time,
                image: "/assets/hal.webp",
                title: "Trực tiếp vòng Last 64 Hanoi Open Pool 2025 64 Hanoi Open Pool 2025 64 Hanoi Open Pool 2025",
                content: card1.content,
                category: card1.category,
                official: card1.official,
                link: "/blog"
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGenre.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$ArticleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                avatar: card1.avatar,
                name: card1.name,
                time: card1.time,
                image: "/assets/hal.webp",
                title: "Trực tiếp vòng Last 64 Hanoi Open Pool 2025 64 Hanoi Open Pool 2025 Hanoi Open Pool 2025 Hanoi Open Pool 2025 Hanoi Open Pool 2025",
                content: card1.content,
                category: card1.category,
                official: card1.official,
                link: "/blog"
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGenre.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGenre.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SportGenre;
}),
"[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$NewsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Video$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$HotTopicCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/HotTopicCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Advertisement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$SportGenre$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGenre.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
function HomeMobile() {
    const card1 = {
        avatar: "/assets/Rectangle 1.webp",
        name: "Kiet Phan",
        time: "2 giờ trước",
        image: "/assets/image.webp",
        title: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
        content: "Adidas đang định hình lại vị thế của mình trong làng Pickleball thông qua dòng vợt AdiPower mới - sự kết hợp giữa chất lượng cao và giá cả hợp lý.",
        category: "Pickleball",
        official: true
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "home--mobile",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$NewsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    avatar: card1.avatar,
                    name: card1.name,
                    time: card1.time,
                    image: card1.image,
                    title: card1.title,
                    content: card1.content,
                    category: card1.category,
                    official: card1.official,
                    link: "/blog"
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$NewsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    avatar: card1.avatar,
                    name: card1.name,
                    time: card1.time,
                    image: card1.image,
                    title: "Trực tiếp vòng Last 64 Hanoi Open Pool 2025 ngày 10/10: Dương Quốc Hoàng vs Ngô Quang Trung",
                    content: card1.content,
                    category: card1.category,
                    official: card1.official,
                    link: "/blog"
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$NewsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    avatar: card1.avatar,
                    name: card1.name,
                    time: card1.time,
                    image: card1.image,
                    title: "Tại sao Hà Lan chỉ cần thêm 2 chiến thắng nữa là có vé dự World Cup?",
                    content: card1.content,
                    category: card1.category,
                    official: card1.official,
                    link: "/blog"
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Video$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$HotTopicCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    image: ""
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$SportGenre$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    sport: "Bóng đá"
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$SportGenre$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    sport: "Pickleball"
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    image: ""
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
                    lineNumber: 32,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$SportGenre$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    sport: "Billiards"
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
                    lineNumber: 33,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "advertisement-section",
                    style: {
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: ""
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: ""
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: ""
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: ""
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "class",
                            style: {
                                height: "300px",
                                backgroundColor: "white"
                            }
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
            lineNumber: 23,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeDesktop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Advertisement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/CardHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$HotTopicCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/HotTopicCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$ArticleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$NewsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Video$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$SportGenre$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGenre.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function HomeDesktop() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const card1 = [
        {
            avatar: "/assets/Rectangle 1.webp",
            name: "Kiet Phan",
            time: "2 giờ trước",
            image: "/assets/image.webp",
            title: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
            content: "Adidas đang định hình lại vị thế của mình trong làng Pickleball thông qua dòng vợt AdiPower mới - sự kết hợp giữa chất lượng cao và giá cả hợp lý.",
            category: "Pickleball",
            official: true,
            linl: "/blog"
        },
        {
            avatar: "/assets/Rectangle 1.webp",
            name: "Kiet Phan",
            time: "2 giờ trước",
            image: "/assets/image.webp",
            title: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
            content: "Adidas đang định hình lại vị thế của mình trong làng Pickleball thông qua dòng vợt AdiPower mới - sự kết hợp giữa chất lượng cao và giá cả hợp lý.",
            category: "Pickleball",
            official: true,
            link: "/blog"
        }
    ];
    const card2 = [
        {
            img: "/assets/image 20-10.webp",
            name: "SEA Games 33"
        },
        {
            img: "/assets/image 20.webp",
            name: "V-League"
        },
        {
            img: "/assets/image 20-1.webp",
            name: "League 1"
        },
        {
            img: "/assets/image 20-2.webp",
            name: "Seria A"
        },
        {
            img: "/assets/image 20-3.webp",
            name: "Bundesliga"
        },
        {
            img: "/assets/image 20-4.webp",
            name: "Premier League"
        },
        {
            img: "/assets/image 20-5.webp",
            name: "Laliga"
        },
        {
            img: "/assets/image 20-6.webp",
            name: "UEFA Europa League"
        },
        {
            img: "/assets/image 20-7.webp",
            name: "UEFA Champions League"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "home--desktop",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "home--desktop__left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "empty-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    title: "Lịch thi đấu bóng đá",
                                    style: {
                                        borderBottom: 'none'
                                    },
                                    deco: true
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                    lineNumber: 43,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card--header__content",
                                    children: card2.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "home--desktop__schedule",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `item ${index === 0 ? 'active' : ''}`,
                                                onClick: ()=>setActive(index),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: item.img,
                                                        alt: "",
                                                        className: "logo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text ",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                                lineNumber: 47,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                            lineNumber: 46,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: "/assets/adv.webp"
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    title: "Chủ đề nóng",
                                    style: {
                                        borderBottom: 'none'
                                    },
                                    deco: true
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                    lineNumber: 59,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card--header__content",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$HotTopicCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        isTitled: false
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                        lineNumber: 61,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                    lineNumber: 60,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                            lineNumber: 58,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: "/assets/image 22.webp",
                            isCollapsed: false
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "home--desktop__middle",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "home--desktop__radius",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "home--desktop__share",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "32",
                                        height: "32",
                                        viewBox: "0 0 32 32",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                width: "32",
                                                height: "32",
                                                rx: "16",
                                                fill: "#F3F2F2"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                                lineNumber: 72,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16.0003 16C17.8413 16 19.3337 14.5076 19.3337 12.6667C19.3337 10.8257 17.8413 9.33334 16.0003 9.33334C14.1594 9.33334 12.667 10.8257 12.667 12.6667C12.667 14.5076 14.1594 16 16.0003 16Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                                lineNumber: 73,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16.0004 17.6667C12.6604 17.6667 9.94043 19.9067 9.94043 22.6667C9.94043 22.8533 10.0871 23 10.2738 23H21.7271C21.9138 23 22.0604 22.8533 22.0604 22.6667C22.0604 19.9067 19.3404 17.6667 16.0004 17.6667Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                                lineNumber: 74,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                        lineNumber: 71,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "text",
                                        placeholder: "Chia sẻ chủ đề mới với chúng tôi..."
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                        lineNumber: 77,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "32",
                                        height: "32",
                                        viewBox: "0 0 32 32",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                width: "32",
                                                height: "32",
                                                rx: "16",
                                                fill: "#F3F2F2"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                                lineNumber: 79,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M11.6933 21.0133C11.2867 21.0133 10.9067 20.8733 10.6333 20.6133C10.2867 20.2867 10.12 19.7933 10.18 19.26L10.4267 17.1C10.4733 16.6933 10.72 16.1533 11.0067 15.86L16.48 10.0667C17.8467 8.61999 19.2733 8.57999 20.72 9.94666C22.1667 11.3133 22.2067 12.74 20.84 14.1867L15.3667 19.98C15.0867 20.28 14.5667 20.56 14.16 20.6267L12.0133 20.9933C11.9 21 11.8 21.0133 11.6933 21.0133ZM18.62 9.93999C18.1067 9.93999 17.66 10.26 17.2067 10.74L11.7333 16.54C11.6 16.68 11.4467 17.0133 11.42 17.2067L11.1733 19.3667C11.1467 19.5867 11.2 19.7667 11.32 19.88C11.44 19.9933 11.62 20.0333 11.84 20L13.9867 19.6333C14.18 19.6 14.5 19.4267 14.6333 19.2867L20.1067 13.4933C20.9333 12.6133 21.2333 11.8 20.0267 10.6667C19.4933 10.1533 19.0333 9.93999 18.62 9.93999Z",
                                                fill: "#52524F"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                                lineNumber: 80,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M19.56 15.3C19.5466 15.3 19.5266 15.3 19.5133 15.3C17.4333 15.0933 15.76 13.5133 15.44 11.4467C15.4 11.1733 15.5866 10.92 15.86 10.8733C16.1333 10.8333 16.3866 11.02 16.4333 11.2933C16.6866 12.9067 17.9933 14.1467 19.62 14.3067C19.8933 14.3333 20.0933 14.58 20.0666 14.8533C20.0333 15.1067 19.8133 15.3 19.56 15.3Z",
                                                fill: "#52524F"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                                lineNumber: 81,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M22 23.1667H10C9.72667 23.1667 9.5 22.94 9.5 22.6667C9.5 22.3933 9.72667 22.1667 10 22.1667H22C22.2733 22.1667 22.5 22.3933 22.5 22.6667C22.5 22.94 22.2733 23.1667 22 23.1667Z",
                                                fill: "#52524F"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                                lineNumber: 82,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                        lineNumber: 78,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                lineNumber: 70,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "home--desktop__radius",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/assets/image-16.webp",
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                lineNumber: 88,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                            lineNumber: 87,
                            columnNumber: 21
                        }, this),
                        card1.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "home--desktop__radius",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$NewsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    avatar: item.avatar,
                                    name: item.name,
                                    time: item.time,
                                    image: item.image,
                                    title: item.title,
                                    content: item.content,
                                    category: item.category,
                                    official: item.official,
                                    link: "/blog"
                                }, index, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                    lineNumber: 92,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                lineNumber: 91,
                                columnNumber: 25
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Video$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                            lineNumber: 95,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    title: "Chủ đề nóng",
                                    style: {
                                        borderBottom: 'none'
                                    },
                                    deco: true
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card--header__content",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$HotTopicCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        isTitled: false
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                        lineNumber: 100,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                            lineNumber: 97,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: "/assets/image 19.webp",
                            isCollapsed: true
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "home--desktop__radius",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$SportGenre$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                sport: "Bóng đá"
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                lineNumber: 106,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "home--desktop__radius",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$SportGenre$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                sport: "Bóng đá"
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                lineNumber: 109,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "home--desktop__right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    logo: "assets/logo-sea-game 1.webp",
                                    title: "",
                                    deco: false,
                                    style: {
                                        background: "#0056FF",
                                        color: "#fff",
                                        paddingLeft: "-14px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                    lineNumber: 114,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card--header__content",
                                    children: [
                                        card1.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$ArticleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                avatar: item.avatar,
                                                name: item.name,
                                                time: item.time,
                                                image: "/assets/hal.webp",
                                                title: "Trực tiếp vòng Last 64 Hanoi Open Pool 2025",
                                                content: item.content,
                                                category: item.category,
                                                official: item.official,
                                                link: "/blog",
                                                style: {
                                                    padding: '10px 0',
                                                    borderTop: 'none'
                                                }
                                            }, index, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                                lineNumber: 117,
                                                columnNumber: 33
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "view-more--btn",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                children: "Xem thêm"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                                lineNumber: 120,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                            lineNumber: 119,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                    lineNumber: 115,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                            lineNumber: 113,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    title: "Nhận định",
                                    deco: true
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                    lineNumber: 125,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card--header__content",
                                    children: [
                                        card1.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$ArticleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                avatar: item.avatar,
                                                name: item.name,
                                                time: item.time,
                                                image: "/assets/hal.webp",
                                                title: "Trực tiếp vòng Last 64 Hanoi Open Pool 2025",
                                                content: item.content,
                                                category: item.category,
                                                official: item.official,
                                                link: "/blog",
                                                style: {
                                                    padding: '10px 0',
                                                    borderTop: 'none'
                                                }
                                            }, index, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                                lineNumber: 128,
                                                columnNumber: 33
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "view-more--btn",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                children: "Xem thêm"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                                lineNumber: 131,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                            lineNumber: 130,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                    lineNumber: 126,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                            lineNumber: 124,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: "/assets/adv.webp"
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                            lineNumber: 135,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    title: "Đọc nhiều",
                                    deco: true
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                    lineNumber: 137,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card--header__content",
                                    children: [
                                        card1.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$ArticleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                avatar: item.avatar,
                                                name: item.name,
                                                time: item.time,
                                                image: "/assets/hal.webp",
                                                title: "Trực tiếp vòng Last 64 Hanoi Open Pool 2025",
                                                content: item.content,
                                                category: item.category,
                                                official: item.official,
                                                link: "/blog",
                                                style: {
                                                    padding: '10px 0',
                                                    borderTop: 'none'
                                                }
                                            }, index, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                                lineNumber: 140,
                                                columnNumber: 33
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "view-more--btn",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                children: "Xem thêm"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                                lineNumber: 143,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                            lineNumber: 142,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                                    lineNumber: 138,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                            lineNumber: 136,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
                    lineNumber: 112,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
            lineNumber: 40,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeDesktop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Advertisement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/CardHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$HotTopicCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/HotTopicCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$ArticleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$NewsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Video$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Video.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$SportGenre$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGenre.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function HomeDesktop() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const card1 = [
        {
            avatar: "/assets/Rectangle 1.webp",
            name: "Kiet Phan",
            time: "2 giờ trước",
            image: "/assets/image.webp",
            title: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
            content: "Adidas đang định hình lại vị thế của mình trong làng Pickleball thông qua dòng vợt AdiPower mới - sự kết hợp giữa chất lượng cao và giá cả hợp lý.",
            category: "Pickleball",
            official: true,
            linl: "/blog"
        },
        {
            avatar: "/assets/Rectangle 1.webp",
            name: "Kiet Phan",
            time: "2 giờ trước",
            image: "/assets/image.webp",
            title: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
            content: "Adidas đang định hình lại vị thế của mình trong làng Pickleball thông qua dòng vợt AdiPower mới - sự kết hợp giữa chất lượng cao và giá cả hợp lý.",
            category: "Pickleball",
            official: true,
            link: "/blog"
        }
    ];
    const card2 = [
        {
            img: "/assets/image 20-10.webp",
            name: "SEA Games 33"
        },
        {
            img: "/assets/image 20.webp",
            name: "V-League"
        },
        {
            img: "/assets/image 20-1.webp",
            name: "League 1"
        },
        {
            img: "/assets/image 20-2.webp",
            name: "Seria A"
        },
        {
            img: "/assets/image 20-3.webp",
            name: "Bundesliga"
        },
        {
            img: "/assets/image 20-4.webp",
            name: "Premier League"
        },
        {
            img: "/assets/image 20-5.webp",
            name: "Laliga"
        },
        {
            img: "/assets/image 20-6.webp",
            name: "UEFA Europa League"
        },
        {
            img: "/assets/image 20-7.webp",
            name: "UEFA Champions League"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "home--desktop",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "home--desktop__middle",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "home--desktop__radius",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "home--desktop__share",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "32",
                                        height: "32",
                                        viewBox: "0 0 32 32",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                width: "32",
                                                height: "32",
                                                rx: "16",
                                                fill: "#F3F2F2"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                                lineNumber: 45,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16.0003 16C17.8413 16 19.3337 14.5076 19.3337 12.6667C19.3337 10.8257 17.8413 9.33334 16.0003 9.33334C14.1594 9.33334 12.667 10.8257 12.667 12.6667C12.667 14.5076 14.1594 16 16.0003 16Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                                lineNumber: 46,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16.0004 17.6667C12.6604 17.6667 9.94043 19.9067 9.94043 22.6667C9.94043 22.8533 10.0871 23 10.2738 23H21.7271C21.9138 23 22.0604 22.8533 22.0604 22.6667C22.0604 19.9067 19.3404 17.6667 16.0004 17.6667Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                                lineNumber: 47,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                        lineNumber: 44,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "text",
                                        placeholder: "Chia sẻ chủ đề mới với chúng tôi..."
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                        lineNumber: 50,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "32",
                                        height: "32",
                                        viewBox: "0 0 32 32",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                width: "32",
                                                height: "32",
                                                rx: "16",
                                                fill: "#F3F2F2"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                                lineNumber: 52,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M11.6933 21.0133C11.2867 21.0133 10.9067 20.8733 10.6333 20.6133C10.2867 20.2867 10.12 19.7933 10.18 19.26L10.4267 17.1C10.4733 16.6933 10.72 16.1533 11.0067 15.86L16.48 10.0667C17.8467 8.61999 19.2733 8.57999 20.72 9.94666C22.1667 11.3133 22.2067 12.74 20.84 14.1867L15.3667 19.98C15.0867 20.28 14.5667 20.56 14.16 20.6267L12.0133 20.9933C11.9 21 11.8 21.0133 11.6933 21.0133ZM18.62 9.93999C18.1067 9.93999 17.66 10.26 17.2067 10.74L11.7333 16.54C11.6 16.68 11.4467 17.0133 11.42 17.2067L11.1733 19.3667C11.1467 19.5867 11.2 19.7667 11.32 19.88C11.44 19.9933 11.62 20.0333 11.84 20L13.9867 19.6333C14.18 19.6 14.5 19.4267 14.6333 19.2867L20.1067 13.4933C20.9333 12.6133 21.2333 11.8 20.0267 10.6667C19.4933 10.1533 19.0333 9.93999 18.62 9.93999Z",
                                                fill: "#52524F"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                                lineNumber: 53,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M19.56 15.3C19.5466 15.3 19.5266 15.3 19.5133 15.3C17.4333 15.0933 15.76 13.5133 15.44 11.4467C15.4 11.1733 15.5866 10.92 15.86 10.8733C16.1333 10.8333 16.3866 11.02 16.4333 11.2933C16.6866 12.9067 17.9933 14.1467 19.62 14.3067C19.8933 14.3333 20.0933 14.58 20.0666 14.8533C20.0333 15.1067 19.8133 15.3 19.56 15.3Z",
                                                fill: "#52524F"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                                lineNumber: 54,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M22 23.1667H10C9.72667 23.1667 9.5 22.94 9.5 22.6667C9.5 22.3933 9.72667 22.1667 10 22.1667H22C22.2733 22.1667 22.5 22.3933 22.5 22.6667C22.5 22.94 22.2733 23.1667 22 23.1667Z",
                                                fill: "#52524F"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                                lineNumber: 55,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                        lineNumber: 51,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                lineNumber: 43,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "home--desktop__radius",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/assets/image-16.webp",
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                lineNumber: 61,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                            lineNumber: 60,
                            columnNumber: 21
                        }, this),
                        card1.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "home--desktop__radius",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$NewsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    avatar: item.avatar,
                                    name: item.name,
                                    time: item.time,
                                    image: item.image,
                                    title: item.title,
                                    content: item.content,
                                    category: item.category,
                                    official: item.official,
                                    link: "/blog"
                                }, index, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                lineNumber: 64,
                                columnNumber: 25
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Video$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    title: "Chủ đề nóng",
                                    style: {
                                        borderBottom: 'none'
                                    },
                                    deco: true
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                    lineNumber: 71,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card--header__content",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$HotTopicCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        isTitled: false
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                        lineNumber: 73,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                    lineNumber: 72,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: "/assets/image 19.webp",
                            isCollapsed: true
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "home--desktop__radius",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$SportGenre$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                sport: "Bóng đá"
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                lineNumber: 79,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                            lineNumber: 78,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "home--desktop__radius",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$SportGenre$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                sport: "Bóng đá"
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                lineNumber: 82,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                            lineNumber: 81,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "home--desktop__right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    logo: "assets/logo-sea-game 1.webp",
                                    title: "",
                                    deco: false,
                                    style: {
                                        background: "#0056FF",
                                        color: "#fff",
                                        paddingLeft: "-14px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card--header__content",
                                    children: [
                                        card1.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$ArticleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                avatar: item.avatar,
                                                name: item.name,
                                                time: item.time,
                                                image: "/assets/hal.webp",
                                                title: "Trực tiếp vòng Last 64 Hanoi Open Pool 2025",
                                                content: item.content,
                                                category: item.category,
                                                official: item.official,
                                                link: "/blog",
                                                style: {
                                                    padding: '10px 0',
                                                    borderTop: 'none'
                                                }
                                            }, index, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                                lineNumber: 90,
                                                columnNumber: 33
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "view-more--btn",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                children: "Xem thêm"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                                lineNumber: 93,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                            lineNumber: 92,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    title: "Nhận định",
                                    deco: true
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card--header__content",
                                    children: [
                                        card1.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$ArticleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                avatar: item.avatar,
                                                name: item.name,
                                                time: item.time,
                                                image: "/assets/hal.webp",
                                                title: "Trực tiếp vòng Last 64 Hanoi Open Pool 2025",
                                                content: item.content,
                                                category: item.category,
                                                official: item.official,
                                                link: "/blog",
                                                style: {
                                                    padding: '10px 0',
                                                    borderTop: 'none'
                                                }
                                            }, index, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                                lineNumber: 101,
                                                columnNumber: 33
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "view-more--btn",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                children: "Xem thêm"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                                lineNumber: 104,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                            lineNumber: 103,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                            lineNumber: 97,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: "/assets/adv.webp"
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    title: "Đọc nhiều",
                                    deco: true
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                    lineNumber: 110,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card--header__content",
                                    children: [
                                        card1.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$ArticleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                avatar: item.avatar,
                                                name: item.name,
                                                time: item.time,
                                                image: "/assets/hal.webp",
                                                title: "Trực tiếp vòng Last 64 Hanoi Open Pool 2025",
                                                content: item.content,
                                                category: item.category,
                                                official: item.official,
                                                link: "/blog",
                                                style: {
                                                    padding: '10px 0',
                                                    borderTop: 'none'
                                                }
                                            }, index, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                                lineNumber: 113,
                                                columnNumber: 33
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "view-more--btn",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                children: "Xem thêm"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                                lineNumber: 116,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                            lineNumber: 115,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                    lineNumber: 111,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                            lineNumber: 109,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "empty-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    title: "Lịch thi đấu bóng đá",
                                    style: {
                                        borderBottom: 'none'
                                    },
                                    deco: true
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                    lineNumber: 121,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card--header__content",
                                    children: card2.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "home--desktop__schedule",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `item ${index === 0 ? 'active' : ''}`,
                                                onClick: ()=>setActive(index),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: item.img,
                                                        alt: "",
                                                        className: "logo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text ",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                                lineNumber: 125,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                            lineNumber: 124,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                    lineNumber: 122,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                            lineNumber: 120,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: "/assets/adv.webp"
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                            lineNumber: 135,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    title: "Chủ đề nóng",
                                    style: {
                                        borderBottom: 'none'
                                    },
                                    deco: true
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                    lineNumber: 137,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card--header__content",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$HotTopicCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        isTitled: false
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                        lineNumber: 139,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                                    lineNumber: 138,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                            lineNumber: 136,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            image: "/assets/image 22.webp",
                            isCollapsed: false
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                            lineNumber: 143,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
            lineNumber: 40,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
const DropdownModal = ({ open, onClose })=>{
    const menu = [
        {
            category: "Sport",
            subCat: [
                {
                    name: "Pickleball",
                    href: "#"
                },
                {
                    name: "Badminton",
                    href: "#"
                },
                {
                    name: "Basketball",
                    href: "#"
                },
                {
                    name: "Volleyball",
                    href: "#"
                },
                {
                    name: "Video thể thao",
                    href: "/reel"
                }
            ]
        },
        {
            category: "Sport",
            subCat: [
                {
                    name: "Pickleball",
                    href: "#"
                },
                {
                    name: "Badminton",
                    href: "#"
                },
                {
                    name: "Basketball",
                    href: "#"
                },
                {
                    name: "Volleyball",
                    href: "#"
                }
            ]
        },
        {
            category: "Sport",
            subCat: [
                {
                    name: "Pickleball",
                    href: "#"
                },
                {
                    name: "Badminton",
                    href: "#"
                },
                {
                    name: "Basketball",
                    href: "#"
                },
                {
                    name: "Volleyball",
                    href: "#"
                }
            ]
        }
    ];
    // Tắt bằng ESC
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const esc = (e)=>e.key === 'Escape' && onClose();
        window.addEventListener("keydown", esc);
        return ()=>window.removeEventListener("keydown", esc);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "modal--dropdown",
            initial: {
                opacity: 0,
                y: -20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -20
            },
            transition: {
                duration: 0.25
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal--dropdown__container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal--dropdown__content",
                            children: menu.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal--dropdown__content__item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal--dropdown__content__item__title",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "deco"
                                                }, void 0, false, {
                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                item.category
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                            lineNumber: 57,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal--dropdown__content__item__sub",
                                            children: item.subCat.map((sub, subIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "modal--dropdown__content__item__sub__item",
                                                    href: sub.href,
                                                    children: sub.name
                                                }, subIdx, false, {
                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                            lineNumber: 61,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                    lineNumber: 56,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                            lineNumber: 54,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal--dropdown__content",
                            children: menu.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal--dropdown__content__item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal--dropdown__content__item__title",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "deco"
                                                }, void 0, false, {
                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                item.category
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                            lineNumber: 79,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal--dropdown__content__item__sub",
                                            children: item.subCat.map((sub, subIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "modal--dropdown__content__item__sub__item",
                                                    href: sub.href,
                                                    children: sub.name
                                                }, subIdx, false, {
                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                            lineNumber: 83,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                            lineNumber: 76,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                    lineNumber: 53,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal--dropdown__container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal--dropdown__event",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal--dropdown__event--header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal--dropdown__title bold",
                                    children: "Tuyến chuyên đề"
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "show-all--btn",
                                    children: "Xem tất cả"
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                    lineNumber: 105,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                            lineNumber: 101,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                        lineNumber: 100,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                    lineNumber: 99,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal--dropdown__container no-border",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal--dropdown__contact",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "modal--dropdown__title bold",
                                        children: "Liên hệ"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                        lineNumber: 113,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "modal--dropdown__title",
                                        children: "iOS"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                        lineNumber: 114,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "modal--dropdown__title",
                                        children: "Android"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                        lineNumber: 115,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                lineNumber: 112,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal--dropdown__title bold",
                                children: "Fanpage"
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                lineNumber: 118,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal--dropdown__contact",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal--dropdown__title bold",
                                            children: "Liên hệ"
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                            lineNumber: 122,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal--dropdown__title",
                                            children: "Quảng cáo"
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                            lineNumber: 123,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                    lineNumber: 121,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                lineNumber: 120,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                        lineNumber: 111,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                    lineNumber: 110,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
            lineNumber: 46,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DropdownModal;
}),
"[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$modal$2f$DropdownModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const HeaderDesktop = ()=>{
    const menu = [
        {
            title: "Pickleball",
            href: "#"
        },
        {
            title: "Badminton",
            href: "#"
        },
        {
            title: "Basketball",
            href: "#"
        },
        {
            title: "Volleyball",
            href: "#"
        },
        {
            title: "Video thể thao",
            href: "/reel"
        }
    ];
    const [openModal, setOpenModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "header-desktop",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "header-desktop__logo",
                href: "/",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/assets/image-1.webp",
                    alt: ""
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-desktop__menu",
                children: [
                    menu.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "text ",
                            href: item.href,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text hashtag",
                                    children: "#"
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                                    lineNumber: 23,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                item.title
                            ]
                        }, index, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                            lineNumber: 22,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        onMouseEnter: ()=>setOpenModal(true),
                        onMouseLeave: ()=>setOpenModal(false),
                        onClick: ()=>setOpenModal(!openModal),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text cursor-pointer flex items-center gap-1",
                                children: [
                                    "Khác",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative bottom-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `extend absolute inset-0 flex items-center justify-center transition-all duration-200 ${openModal ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`,
                                                children: "✕"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                                                lineNumber: 38,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `extend absolute inset-0 flex items-center justify-center transition-all duration-200 ${openModal ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 scale-100"}`,
                                                children: "• • •"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                                                lineNumber: 48,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                                        lineNumber: 36,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$modal$2f$DropdownModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                open: openModal,
                                onClose: ()=>setOpenModal(false)
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-desktop__right",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "item bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M14.9064 5.51334L14.7131 3.66668C14.4331 1.65334 13.5198 0.833344 11.5664 0.833344H9.9931H9.00643H6.97977H5.9931H4.3931C2.4331 0.833344 1.52643 1.65334 1.23977 3.68668L1.05977 5.52001C0.9931 6.23334 1.18643 6.92668 1.60643 7.46668C2.1131 8.12668 2.8931 8.50001 3.75977 8.50001C4.59977 8.50001 5.40643 8.08001 5.9131 7.40668C6.36643 8.08001 7.13977 8.50001 7.99977 8.50001C8.85977 8.50001 9.6131 8.10001 10.0731 7.43334C10.5864 8.09334 11.3798 8.50001 12.2064 8.50001C13.0931 8.50001 13.8931 8.10668 14.3931 7.41334C14.7931 6.88001 14.9731 6.20668 14.9064 5.51334Z",
                                        fill: "#B5191D"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                                        lineNumber: 65,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M7.56675 11.1067C6.72008 11.1933 6.08008 11.9133 6.08008 12.7667V14.5933C6.08008 14.7733 6.22674 14.92 6.40674 14.92H9.58675C9.76675 14.92 9.91341 14.7733 9.91341 14.5933V13C9.92008 11.6067 9.10008 10.9467 7.56675 11.1067Z",
                                        fill: "#B5191D"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                                        lineNumber: 66,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M14.2463 9.59999V11.5867C14.2463 13.4267 12.7529 14.92 10.9129 14.92C10.7329 14.92 10.5863 14.7733 10.5863 14.5933V13C10.5863 12.1467 10.3263 11.48 9.8196 11.0267C9.37293 10.62 8.76626 10.42 8.01293 10.42C7.84626 10.42 7.6796 10.4267 7.4996 10.4467C6.31293 10.5667 5.41293 11.5667 5.41293 12.7667V14.5933C5.41293 14.7733 5.26626 14.92 5.08626 14.92C3.24626 14.92 1.75293 13.4267 1.75293 11.5867V9.61332C1.75293 9.14666 2.21293 8.83332 2.64626 8.98666C2.82626 9.04666 3.00626 9.09332 3.19293 9.11999C3.27293 9.13332 3.3596 9.14666 3.4396 9.14666C3.54626 9.15999 3.65293 9.16666 3.7596 9.16666C4.53293 9.16666 5.29293 8.87999 5.89293 8.38666C6.46626 8.87999 7.21293 9.16666 7.9996 9.16666C8.79293 9.16666 9.52626 8.89332 10.0996 8.39999C10.6996 8.88666 11.4463 9.16666 12.2063 9.16666C12.3263 9.16666 12.4463 9.15999 12.5596 9.14666C12.6396 9.13999 12.7129 9.13332 12.7863 9.11999C12.9929 9.09332 13.1796 9.03332 13.3663 8.97332C13.7996 8.82666 14.2463 9.14666 14.2463 9.59999Z",
                                        fill: "#B5191D"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                                        lineNumber: 67,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                                lineNumber: 64,
                                columnNumber: 48
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Shop"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8.00033 8.00001C9.84127 8.00001 11.3337 6.50763 11.3337 4.66668C11.3337 2.82573 9.84127 1.33334 8.00033 1.33334C6.15938 1.33334 4.66699 2.82573 4.66699 4.66668C4.66699 6.50763 6.15938 8.00001 8.00033 8.00001Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                                        lineNumber: 71,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8.00043 9.66666C4.66043 9.66666 1.94043 11.9067 1.94043 14.6667C1.94043 14.8533 2.0871 15 2.27376 15H13.7271C13.9138 15 14.0604 14.8533 14.0604 14.6667C14.0604 11.9067 11.3404 9.66666 8.00043 9.66666Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                                        lineNumber: 72,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                                lineNumber: 70,
                                columnNumber: 39
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Đăng nhập"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HeaderDesktop;
}),
"[project]/webthethao2.0-main/webthethao2.0-main/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$pages$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Search$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Search.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$pages$2f$HomeMobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeMobile.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$pages$2f$HomeDesktop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeDesktop.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$hooks$2f$useIsCustomView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/hooks/useIsCustomView.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$pages$2f$HomeTablet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/pages/HomeTablet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$pages$2f$HeaderDesktop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$hooks$2f$useIsCustomView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsCustomView"])(768);
    const isTablet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$hooks$2f$useIsCustomView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsCustomView"])(1250);
    const changeHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$hooks$2f$useIsCustomView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsCustomView"])(768);
    const changeNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$hooks$2f$useIsCustomView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsCustomView"])(1024);
    const card1 = {
        avatar: "/assets/Rectangle 1.webp",
        name: "Kiet Phan",
        time: "2 giờ trước",
        image: "/assets/image.webp",
        title: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
        content: "Adidas đang định hình lại vị thế của mình trong làng Pickleball thông qua dòng vợt AdiPower mới - sự kết hợp giữa chất lượng cao và giá cả hợp lý.",
        category: "Pickleball",
        official: true
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "App",
        children: [
            changeNav ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$pages$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/page.tsx",
                lineNumber: 44,
                columnNumber: 20
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$pages$2f$HeaderDesktop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/page.tsx",
                lineNumber: 44,
                columnNumber: 33
            }, this),
            changeHeader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/page.tsx",
                lineNumber: 45,
                columnNumber: 23
            }, this) : "",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Search$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$pages$2f$HomeMobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/page.tsx",
                lineNumber: 47,
                columnNumber: 19
            }, this) : isTablet ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$pages$2f$HomeTablet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/page.tsx",
                lineNumber: 47,
                columnNumber: 47
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$pages$2f$HomeDesktop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/page.tsx",
                lineNumber: 47,
                columnNumber: 64
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function App() {
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Home, {}, void 0, false, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/page.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = App;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__576fe116._.js.map