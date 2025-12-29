(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$react$2d$burger$2d$menu$2f$lib$2f$BurgerMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/BurgerMenu.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Header = ()=>{
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "header",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "header__container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "logo",
                    href: "/",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "button",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$react$2d$burger$2d$menu$2f$lib$2f$BurgerMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slide"], {
                            right: true,
                            isOpen: menuOpen,
                            onStateChange: handleStateChange,
                            customBurgerIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "burger-icon",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx",
                                        lineNumber: 45,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx",
                                        lineNumber: 46,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
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
_s(Header, "K77eQVFAaxZgbvGoNWFAiCE7OTY=");
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const DropdownModal = ({ open, onClose })=>{
    _s();
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DropdownModal.useEffect": ()=>{
            const esc = {
                "DropdownModal.useEffect.esc": (e)=>e.key === 'Escape' && onClose()
            }["DropdownModal.useEffect.esc"];
            window.addEventListener("keydown", esc);
            return ({
                "DropdownModal.useEffect": ()=>window.removeEventListener("keydown", esc)
            })["DropdownModal.useEffect"];
        }
    }["DropdownModal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal--dropdown__container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal--dropdown__content",
                            children: menu.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal--dropdown__content__item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal--dropdown__content__item__title",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal--dropdown__content__item__sub",
                                            children: item.subCat.map((sub, subIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal--dropdown__content",
                            children: menu.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal--dropdown__content__item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal--dropdown__content__item__title",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal--dropdown__content__item__sub",
                                            children: item.subCat.map((sub, subIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal--dropdown__container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal--dropdown__event",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal--dropdown__event--header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal--dropdown__title bold",
                                    children: "Tuyến chuyên đề"
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal--dropdown__container no-border",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal--dropdown__contact",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "modal--dropdown__title bold",
                                        children: "Liên hệ"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                        lineNumber: 113,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "modal--dropdown__title",
                                        children: "iOS"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                        lineNumber: 114,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal--dropdown__title bold",
                                children: "Fanpage"
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                lineNumber: 118,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal--dropdown__contact",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal--dropdown__title bold",
                                            children: "Liên hệ"
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx",
                                            lineNumber: 122,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(DropdownModal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = DropdownModal;
const __TURBOPACK__default__export__ = DropdownModal;
var _c;
__turbopack_context__.k.register(_c, "DropdownModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$modal$2f$DropdownModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/modal/DropdownModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const HeaderDesktop = ()=>{
    _s();
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
    const [openModal, setOpenModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "header-desktop",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "header-desktop__logo",
                href: "/",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-desktop__menu",
                children: [
                    menu.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "text ",
                            href: item.href,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        onMouseEnter: ()=>setOpenModal(true),
                        onMouseLeave: ()=>setOpenModal(false),
                        onClick: ()=>setOpenModal(!openModal),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text cursor-pointer flex items-center gap-1",
                                children: [
                                    "Khác",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative bottom-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `extend absolute inset-0 flex items-center justify-center transition-all duration-200 ${openModal ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`,
                                                children: "✕"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                                                lineNumber: 38,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$modal$2f$DropdownModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-desktop__right",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "item bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M14.9064 5.51334L14.7131 3.66668C14.4331 1.65334 13.5198 0.833344 11.5664 0.833344H9.9931H9.00643H6.97977H5.9931H4.3931C2.4331 0.833344 1.52643 1.65334 1.23977 3.68668L1.05977 5.52001C0.9931 6.23334 1.18643 6.92668 1.60643 7.46668C2.1131 8.12668 2.8931 8.50001 3.75977 8.50001C4.59977 8.50001 5.40643 8.08001 5.9131 7.40668C6.36643 8.08001 7.13977 8.50001 7.99977 8.50001C8.85977 8.50001 9.6131 8.10001 10.0731 7.43334C10.5864 8.09334 11.3798 8.50001 12.2064 8.50001C13.0931 8.50001 13.8931 8.10668 14.3931 7.41334C14.7931 6.88001 14.9731 6.20668 14.9064 5.51334Z",
                                        fill: "#B5191D"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                                        lineNumber: 65,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M7.56675 11.1067C6.72008 11.1933 6.08008 11.9133 6.08008 12.7667V14.5933C6.08008 14.7733 6.22674 14.92 6.40674 14.92H9.58675C9.76675 14.92 9.91341 14.7733 9.91341 14.5933V13C9.92008 11.6067 9.10008 10.9467 7.56675 11.1067Z",
                                        fill: "#B5191D"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                                        lineNumber: 66,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8.00033 8.00001C9.84127 8.00001 11.3337 6.50763 11.3337 4.66668C11.3337 2.82573 9.84127 1.33334 8.00033 1.33334C6.15938 1.33334 4.66699 2.82573 4.66699 4.66668C4.66699 6.50763 6.15938 8.00001 8.00033 8.00001Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx",
                                        lineNumber: 71,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_s(HeaderDesktop, "uYk1wngonhmNAAo8U/frFfYvuzQ=");
_c = HeaderDesktop;
const __TURBOPACK__default__export__ = HeaderDesktop;
var _c;
__turbopack_context__.k.register(_c, "HeaderDesktop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const SportGroup = ({ open, onClose })=>{
    _s();
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SportGroup.useEffect": ()=>{
            const esc = {
                "SportGroup.useEffect.esc": (e)=>e.key === 'Escape' && onClose()
            }["SportGroup.useEffect.esc"];
            window.addEventListener("keydown", esc);
            return ({
                "SportGroup.useEffect": ()=>window.removeEventListener("keydown", esc)
            })["SportGroup.useEffect"];
        }
    }["SportGroup.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sport-group",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sport-group__container",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sport-group__title-container",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sport-group__title",
                                                children: " Nhóm thể thao "
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                                                lineNumber: 72,
                                                columnNumber: 143
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sport-group__icon",
                                                onClick: onClose,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M15.7123 16.773L7.22699 8.28768C6.93708 7.99776 6.93708 7.51693 7.22699 7.22702C7.51691 6.9371 7.99774 6.9371 8.28765 7.22702L16.7729 15.7123C17.0628 16.0022 17.0628 16.483 16.7729 16.773C16.483 17.0629 16.0022 17.0629 15.7123 16.773Z",
                                                            fill: "#121212"
                                                        }, void 0, false, {
                                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 33
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sport-group__body",
                                        children: [
                                            " ",
                                            divideSportGroup(sportGroups).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sport-group__row",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "sport-group__item",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "sport-group__item",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
_s(SportGroup, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SportGroup;
const __TURBOPACK__default__export__ = SportGroup;
var _c;
__turbopack_context__.k.register(_c, "SportGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$SportGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SportGroup.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Nav = ()=>{
    _s();
    const [openSportGroup, setOpenSportGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "nav",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav__container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "nav__nav",
                        href: "/schedule",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M13.1751 16.8166C12.9584 16.8166 12.7334 16.8083 12.4917 16.7833C12.0584 16.7499 11.5667 16.6666 11.0584 16.5416L9.65839 16.2083C5.81673 15.2999 4.55839 13.2666 5.45839 9.43326L6.27506 5.9416C6.45839 5.14993 6.67506 4.50826 6.94173 3.97493C8.37506 1.0166 11.1167 1.28326 13.0667 1.7416L14.4584 2.0666C16.4084 2.52493 17.6417 3.24993 18.3334 4.35826C19.0167 5.4666 19.1251 6.8916 18.6667 8.8416L17.8501 12.3249C17.1334 15.3749 15.6417 16.8166 13.1751 16.8166ZM10.9334 2.70826C9.54173 2.70826 8.65839 3.28326 8.06673 4.5166C7.85006 4.9666 7.65839 5.52493 7.49173 6.22493L6.67506 9.7166C5.93339 12.8666 6.79173 14.2416 9.94173 14.9916L11.3417 15.3249C11.7917 15.4333 12.2167 15.4999 12.6001 15.5333C14.8667 15.7583 15.9917 14.7666 16.6251 12.0416L17.4417 8.55827C17.8167 6.94993 17.7667 5.82493 17.2667 5.0166C16.7667 4.20826 15.7834 3.65826 14.1667 3.28326L12.7751 2.95826C12.0834 2.7916 11.4667 2.70826 10.9334 2.70826Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 13,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6.94155 18.5419C4.79988 18.5419 3.43321 17.2586 2.55821 14.5502L1.49155 11.2586C0.308214 7.59189 1.36655 5.52523 5.01655 4.34189L6.33321 3.91689C6.76655 3.78356 7.09155 3.69189 7.38321 3.64189C7.62488 3.59189 7.85821 3.68356 7.99988 3.87523C8.14155 4.06689 8.16655 4.31689 8.06655 4.53356C7.84988 4.97522 7.65821 5.53356 7.49988 6.23356L6.68321 9.72522C5.94155 12.8752 6.79988 14.2502 9.94988 15.0002L11.3499 15.3336C11.7999 15.4419 12.2249 15.5086 12.6082 15.5419C12.8749 15.5669 13.0915 15.7502 13.1665 16.0086C13.2332 16.2669 13.1332 16.5336 12.9165 16.6836C12.3665 17.0586 11.6749 17.3752 10.7999 17.6586L9.48321 18.0919C8.52488 18.3919 7.69155 18.5419 6.94155 18.5419ZM6.48321 5.18356L5.40821 5.53356C2.43321 6.49189 1.72488 7.89189 2.68321 10.8752L3.74988 14.1669C4.71655 17.1419 6.11655 17.8586 9.09155 16.9002L10.4082 16.4669C10.4582 16.4502 10.4999 16.4336 10.5499 16.4169L9.66655 16.2086C5.82488 15.3002 4.56655 13.2669 5.46655 9.43356L6.28321 5.94189C6.34155 5.67523 6.40821 5.41689 6.48321 5.18356Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 14,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M14.5751 8.75815C14.5251 8.75815 14.4751 8.74981 14.4168 8.74148L10.3751 7.71648C10.0418 7.63315 9.84181 7.29148 9.92514 6.95815C10.0085 6.62481 10.3501 6.42481 10.6835 6.50815L14.7251 7.53315C15.0585 7.61648 15.2585 7.95815 15.1751 8.29148C15.1085 8.56648 14.8501 8.75815 14.5751 8.75815Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 15,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "nav__nav",
                        href: "/prediction-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M15.8335 7.2915C14.1085 7.2915 12.7085 5.8915 12.7085 4.1665C12.7085 2.4415 14.1085 1.0415 15.8335 1.0415C17.5585 1.0415 18.9585 2.4415 18.9585 4.1665C18.9585 5.8915 17.5585 7.2915 15.8335 7.2915ZM15.8335 2.2915C14.8002 2.2915 13.9585 3.13317 13.9585 4.1665C13.9585 5.19984 14.8002 6.0415 15.8335 6.0415C16.8668 6.0415 17.7085 5.19984 17.7085 4.1665C17.7085 3.13317 16.8668 2.2915 15.8335 2.2915Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 23,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10.0002 11.4585H5.8335C5.49183 11.4585 5.2085 11.1752 5.2085 10.8335C5.2085 10.4918 5.49183 10.2085 5.8335 10.2085H10.0002C10.3418 10.2085 10.6252 10.4918 10.6252 10.8335C10.6252 11.1752 10.3418 11.4585 10.0002 11.4585Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 24,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M13.3335 14.7915H5.8335C5.49183 14.7915 5.2085 14.5082 5.2085 14.1665C5.2085 13.8248 5.49183 13.5415 5.8335 13.5415H13.3335C13.6752 13.5415 13.9585 13.8248 13.9585 14.1665C13.9585 14.5082 13.6752 14.7915 13.3335 14.7915Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 25,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav__nav--home",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12.25 18.9584H7.74997C3.6333 18.9584 1.8833 17.2001 1.8833 13.0918V9.3501C1.8833 9.00843 2.16663 8.7251 2.5083 8.7251C2.84997 8.7251 3.1333 9.00843 3.1333 9.3501V13.0918C3.1333 16.5001 4.34163 17.7084 7.74997 17.7084H12.2416C15.65 17.7084 16.8583 16.5001 16.8583 13.0918V9.3501C16.8583 9.00843 17.1416 8.7251 17.4833 8.7251C17.825 8.7251 18.1083 9.00843 18.1083 9.3501V13.0918C18.1166 17.2001 16.3583 18.9584 12.25 18.9584Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                    lineNumber: 33,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M10.0002 10.6248C9.0835 10.6248 8.25016 10.2665 7.6585 9.60817C7.06683 8.94984 6.79183 8.0915 6.8835 7.17484L7.44183 1.60817C7.47516 1.2915 7.74183 1.0415 8.06683 1.0415H11.9585C12.2835 1.0415 12.5502 1.28317 12.5835 1.60817L13.1418 7.17484C13.2335 8.0915 12.9585 8.94984 12.3668 9.60817C11.7502 10.2665 10.9168 10.6248 10.0002 10.6248ZM8.62516 2.2915L8.12516 7.29984C8.06683 7.85817 8.2335 8.38317 8.5835 8.7665C9.29183 9.54984 10.7085 9.54984 11.4168 8.7665C11.7668 8.37484 11.9335 7.84984 11.8752 7.29984L11.3752 2.2915H8.62516Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15.2585 10.6248C13.5668 10.6248 12.0585 9.25817 11.8835 7.57484L11.3002 1.73317C11.2835 1.55817 11.3418 1.38317 11.4585 1.24984C11.5752 1.1165 11.7418 1.0415 11.9252 1.0415H14.4668C16.9168 1.0415 18.0585 2.0665 18.4002 4.58317L18.6335 6.89984C18.7335 7.88317 18.4335 8.8165 17.7918 9.52484C17.1502 10.2332 16.2502 10.6248 15.2585 10.6248ZM12.6168 2.2915L13.1335 7.44984C13.2418 8.4915 14.2085 9.37484 15.2585 9.37484C15.8918 9.37484 16.4585 9.13317 16.8668 8.6915C17.2668 8.24984 17.4502 7.65817 17.3918 7.02484L17.1585 4.73317C16.9002 2.84984 16.2918 2.2915 14.4668 2.2915H12.6168Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                    lineNumber: 35,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M4.70002 10.6248C3.70835 10.6248 2.80835 10.2332 2.16668 9.52484C1.52502 8.8165 1.22502 7.88317 1.32502 6.89984L1.55002 4.60817C1.90002 2.0665 3.04168 1.0415 5.49168 1.0415H8.03335C8.20835 1.0415 8.37502 1.1165 8.50002 1.24984C8.62502 1.38317 8.67502 1.55817 8.65835 1.73317L8.07502 7.57484C7.90002 9.25817 6.39168 10.6248 4.70002 10.6248ZM5.49168 2.2915C3.66668 2.2915 3.05835 2.8415 2.79168 4.74984L2.56668 7.02484C2.50002 7.65817 2.69168 8.24984 3.09168 8.6915C3.49168 9.13317 4.05835 9.37484 4.70002 9.37484C5.75002 9.37484 6.72502 8.4915 6.82502 7.44984L7.34168 2.2915H5.49168Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                    lineNumber: 36,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "nav__nav",
                        href: "/reel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12.4998 18.9582H7.49984C2.97484 18.9582 1.0415 17.0248 1.0415 12.4998V7.49984C1.0415 2.97484 2.97484 1.0415 7.49984 1.0415H12.4998C17.0248 1.0415 18.9582 2.97484 18.9582 7.49984V12.4998C18.9582 17.0248 17.0248 18.9582 12.4998 18.9582ZM7.49984 2.2915C3.65817 2.2915 2.2915 3.65817 2.2915 7.49984V12.4998C2.2915 16.3415 3.65817 17.7082 7.49984 17.7082H12.4998C16.3415 17.7082 17.7082 16.3415 17.7082 12.4998V7.49984C17.7082 3.65817 16.3415 2.2915 12.4998 2.2915H7.49984Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 42,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M17.9001 6.5498H2.1001C1.75843 6.5498 1.4751 6.26647 1.4751 5.9248C1.4751 5.58314 1.7501 5.2998 2.1001 5.2998H17.9001C18.2418 5.2998 18.5251 5.58314 18.5251 5.9248C18.5251 6.26647 18.2501 6.5498 17.9001 6.5498Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 43,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M7.1001 6.4333C6.75843 6.4333 6.4751 6.14997 6.4751 5.8083V1.7583C6.4751 1.41663 6.75843 1.1333 7.1001 1.1333C7.44176 1.1333 7.7251 1.41663 7.7251 1.7583V5.8083C7.7251 6.14997 7.44176 6.4333 7.1001 6.4333Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 44,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12.8999 6.0583C12.5582 6.0583 12.2749 5.77497 12.2749 5.4333V1.7583C12.2749 1.41663 12.5582 1.1333 12.8999 1.1333C13.2416 1.1333 13.5249 1.41663 13.5249 1.7583V5.4333C13.5249 5.7833 13.2499 6.0583 12.8999 6.0583Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 45,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav__nav",
                        onClick: ()=>setOpenSportGroup(true),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M17.75 3.75H2.25C1.83579 3.75 1.5 4.08579 1.5 4.5C1.5 4.91421 1.83579 5.25 2.25 5.25H17.75C18.1642 5.25 18.5 4.91421 18.5 4.5C18.5 4.08579 18.1642 3.75 17.75 3.75Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 53,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M17.75 9.25H2.25C1.83579 9.25 1.5 9.58579 1.5 10C1.5 10.4142 1.83579 10.75 2.25 10.75H17.75C18.1642 10.75 18.5 10.4142 18.5 10C18.5 9.58579 18.1642 9.25 17.75 9.25Z",
                                        fill: "#666666"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx",
                                        lineNumber: 54,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$SportGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(Nav, "hMTun8HY/4RHH9Lz8W3m4FjVBfo=");
_c = Nav;
const __TURBOPACK__default__export__ = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/hooks/useIsCustomView.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsCustomView",
    ()=>useIsCustomView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useIsCustomView(max) {
    _s();
    const [isCustomView, setIsCustomView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsCustomView.useEffect": ()=>{
            const check = {
                "useIsCustomView.useEffect.check": ()=>setIsCustomView(window.innerWidth <= max)
            }["useIsCustomView.useEffect.check"];
            check();
            window.addEventListener("resize", check);
            return ({
                "useIsCustomView.useEffect": ()=>window.removeEventListener("resize", check)
            })["useIsCustomView.useEffect"];
        }
    }["useIsCustomView.useEffect"], [
        max
    ]);
    return isCustomView;
}
_s(useIsCustomView, "taovHr/ufjMlbcmyQxmuvADa0mA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$hooks$2f$useIsCustomView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/hooks/useIsCustomView.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FreeMode$3e$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/swiper/modules/free-mode.mjs [app-client] (ecmascript) <export default as FreeMode>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const SwiperRow = ({ items, active = 0, gap = 12, style = {} })=>{
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(active);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$hooks$2f$useIsCustomView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsCustomView"])(767);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SwiperRow.useEffect": ()=>{
            setActiveIndex(active);
        }
    }["SwiperRow.useEffect"], [
        active
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "search header",
        style: style,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search__item",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M2 11.7888L5.72414 7.59914L8.2069 10.3922L14 3.875",
                            stroke: "white",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                slidesPerView: "auto",
                freeMode: true,
                modules: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FreeMode$3e$__["FreeMode"]
                ],
                spaceBetween: gap,
                className: "search-container",
                children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        style: {
                            width: "auto"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `search__item ${activeIndex === index ? "active" : ""} ${index === items.length - 1 ? "last" : ""}`,
                            onClick: ()=>setActiveIndex(index),
                            children: [
                                item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                                    lineNumber: 43,
                                    columnNumber: 43
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search__item hideInMobile ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "name bg-gray",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z",
                                    stroke: "white",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
_s(SwiperRow, "Lvs1r/zpjitTDqTUHeaMi+Cc80k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$hooks$2f$useIsCustomView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsCustomView"]
    ];
});
_c = SwiperRow;
const __TURBOPACK__default__export__ = SwiperRow;
var _c;
__turbopack_context__.k.register(_c, "SwiperRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Schedule$2f$SwiperRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Schedule/SwiperRow.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Search = ({ style })=>{
    _s();
    const lastScrollTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Search.useEffect": ()=>{
            const handleScroll = {
                "Search.useEffect.handleScroll": ()=>{
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
                }
            }["Search.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Search.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Search.useEffect"];
        }
    }["Search.useEffect"], []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "search-bar-hidden",
        className: "search-bar-hidden",
        style: {
            ...style,
            background: "#1A1A1A"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Schedule$2f$SwiperRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(Search, "feShms1c8YZz9y0B+N7MJBXyPh8=");
_c = Search;
const __TURBOPACK__default__export__ = Search;
var _c;
__turbopack_context__.k.register(_c, "Search");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Advertisement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Advertisement = ({ image, isCollapsed })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `adv`,
        children: image ? isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `adv__text padding-12`,
                    children: "ADVERTISEMENT"
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Advertisement.tsx",
                    lineNumber: 5,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: image,
            alt: ""
        }, void 0, false, {
            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Advertisement.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = Advertisement;
const __TURBOPACK__default__export__ = Advertisement;
var _c;
__turbopack_context__.k.register(_c, "Advertisement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/hooks/useIsMobile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useIsMobile(max = 767) {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsMobile.useEffect": ()=>{
            const check = {
                "useIsMobile.useEffect.check": ()=>setIsMobile(window.innerWidth <= max)
            }["useIsMobile.useEffect.check"];
            check();
            window.addEventListener("resize", check);
            return ({
                "useIsMobile.useEffect": ()=>window.removeEventListener("resize", check)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], [
        max
    ]);
    return isMobile;
}
_s(useIsMobile, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/CardHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/hooks/useIsMobile.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const CardTitle = ({ title, logo, style, deco, arrow, className })=>{
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `card--header ${className}`,
        style: style,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card--header__title ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "deco-container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text",
                        style: {
                            color: style?.color
                        },
                        children: [
                            logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "arrow",
                style: {
                    display: arrow ? 'block' : 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_s(CardTitle, "zdJ8C3X+YlDYVai5EPOd8CzoqSU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c = CardTitle;
const __TURBOPACK__default__export__ = CardTitle;
var _c;
__turbopack_context__.k.register(_c, "CardTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/HotTopicCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card--trending",
        children: [
            isTitled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "title",
                children: "Chủ đề nóng"
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/HotTopicCard.tsx",
                lineNumber: 24,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card--trending__body",
                children: [
                    hotTopic.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "sentence",
                            href: item.link,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "dot",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "4",
                                        height: "4",
                                        viewBox: "0 0 4 4",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = HotTopic;
const __TURBOPACK__default__export__ = HotTopic;
var _c;
__turbopack_context__.k.register(_c, "HotTopic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SmallCard = ({ avatar, name, time, image, title, content, category, official, link, style })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card--article",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `card--article__container `,
            style: style,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: link,
                    className: "image",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link,
                            className: "title",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card--article__info",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card--article__name",
                                            children: name
                                        }, void 0, false, {
                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx",
                                            lineNumber: 32,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
_c = SmallCard;
const __TURBOPACK__default__export__ = SmallCard;
var _c;
__turbopack_context__.k.register(_c, "SmallCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Card = ({ avatar, name, time, image, title, content, category, official, link, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `card--news ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `info ${className}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: avatar,
                        alt: "",
                        className: "avatar"
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "name",
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                                        lineNumber: 24,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    official && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: link,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: link,
                        className: "title",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "content clamp-2",
                        children: content
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "category",
                                children: category
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/message.webp",
                                                alt: "",
                                                className: "icon"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                                                lineNumber: 50,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/export.webp",
                                                alt: "",
                                                className: "icon"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx",
                                                lineNumber: 57,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = Card;
const __TURBOPACK__default__export__ = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SmallInfo-horizontal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SmallInfo = ({ avatar, name, official, time })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "info-horizontal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: avatar,
                alt: "",
                className: "avatar"
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SmallInfo-horizontal.tsx",
                lineNumber: 4,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "name",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SmallInfo-horizontal.tsx",
                                lineNumber: 7,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            official && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/assets/verify.webp",
                                alt: "",
                                className: "official"
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SmallInfo-horizontal.tsx",
                                lineNumber: 11,
                                columnNumber: 37
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SmallInfo-horizontal.tsx",
                        lineNumber: 6,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "time",
                        children: time
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SmallInfo-horizontal.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SmallInfo-horizontal.tsx",
                lineNumber: 5,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SmallInfo-horizontal.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SmallInfo;
const __TURBOPACK__default__export__ = SmallInfo;
var _c;
__turbopack_context__.k.register(_c, "SmallInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogTitle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const BlogTitle = ({ title })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "blog-title",
            children: title
        }, void 0, false, {
            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogTitle.tsx",
            lineNumber: 4,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogTitle.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BlogTitle;
const __TURBOPACK__default__export__ = BlogTitle;
var _c;
__turbopack_context__.k.register(_c, "BlogTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogSapo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const BlogSapo = ({ sapo })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "blog-sapo",
            children: sapo
        }, void 0, false, {
            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogSapo.tsx",
            lineNumber: 4,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogSapo.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BlogSapo;
const __TURBOPACK__default__export__ = BlogSapo;
var _c;
__turbopack_context__.k.register(_c, "BlogSapo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogHeading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const BlogHeading = ({ heading })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        children: heading
    }, void 0, false, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogHeading.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BlogHeading;
const __TURBOPACK__default__export__ = BlogHeading;
var _c;
__turbopack_context__.k.register(_c, "BlogHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const BlogContent = ({ content })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: content
    }, void 0, false, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogContent.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BlogContent;
const __TURBOPACK__default__export__ = BlogContent;
var _c;
__turbopack_context__.k.register(_c, "BlogContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogQuote.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const BlogQuote = ({ quote, name })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "red-line"
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogQuote.tsx",
                lineNumber: 4,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "quote",
                        children: quote
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogQuote.tsx",
                        lineNumber: 6,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "name",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogQuote.tsx",
                        lineNumber: 9,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogQuote.tsx",
                lineNumber: 5,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogQuote.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BlogQuote;
const __TURBOPACK__default__export__ = BlogQuote;
var _c;
__turbopack_context__.k.register(_c, "BlogQuote");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/CommentInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const CommentInput = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "comment-input",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Nhập bình luận",
                className: "comment-input__placeholder"
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/CommentInput.tsx",
                lineNumber: 4,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "comment-input__submit",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10.5407 4.96425L5.54741 2.46758C2.19324 0.787578 0.816576 2.16425 2.49658 5.51841L3.00408 6.53341C3.14991 6.83091 3.14991 7.17508 3.00408 7.47258L2.49658 8.48175C0.816576 11.8359 2.18741 13.2126 5.54741 11.5326L10.5407 9.03591C12.7807 7.91591 12.7807 6.08425 10.5407 4.96425ZM8.65658 7.43758H5.50658C5.26741 7.43758 5.06908 7.23925 5.06908 7.00008C5.06908 6.76091 5.26741 6.56258 5.50658 6.56258H8.65658C8.89574 6.56258 9.09408 6.76091 9.09408 7.00008C9.09408 7.23925 8.89574 7.43758 8.65658 7.43758Z",
                        fill: "#292D32"
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/CommentInput.tsx",
                        lineNumber: 6,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/CommentInput.tsx",
                    lineNumber: 5,
                    columnNumber: 52
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/CommentInput.tsx",
                lineNumber: 5,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/CommentInput.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CommentInput;
const __TURBOPACK__default__export__ = CommentInput;
var _c;
__turbopack_context__.k.register(_c, "CommentInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/Comments.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Comments = ({ avatar, name, content, time })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "comments",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                className: "avatar",
                src: avatar,
                alt: ""
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/Comments.tsx",
                lineNumber: 4,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "right",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "comment-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "comment",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "name",
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/Comments.tsx",
                                    lineNumber: 8,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content",
                                    children: content
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/Comments.tsx",
                                    lineNumber: 9,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/Comments.tsx",
                            lineNumber: 7,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "time",
                            children: time
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/Comments.tsx",
                            lineNumber: 11,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/Comments.tsx",
                    lineNumber: 6,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/Comments.tsx",
                lineNumber: 5,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/Comments.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Comments;
const __TURBOPACK__default__export__ = Comments;
var _c;
__turbopack_context__.k.register(_c, "Comments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const BlogButton = ({ number, text })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "blog-button ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4.95817 11.0833H4.6665C2.33317 11.0833 1.1665 10.5 1.1665 7.58329V4.66663C1.1665 2.33329 2.33317 1.16663 4.6665 1.16663H9.33317C11.6665 1.16663 12.8332 2.33329 12.8332 4.66663V7.58329C12.8332 9.91663 11.6665 11.0833 9.33317 11.0833H9.0415C8.86067 11.0833 8.68567 11.1708 8.57484 11.3166L7.69984 12.4833C7.31484 12.9966 6.68484 12.9966 6.29984 12.4833L5.42484 11.3166C5.3315 11.1883 5.11567 11.0833 4.95817 11.0833Z",
                        stroke: "#3A3A3A",
                        "stroke-miterlimit": "10",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogButton.tsx",
                        lineNumber: 5,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9.33143 6.41667H9.33667",
                        stroke: "#3A3A3A",
                        "stroke-width": "1.33333",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogButton.tsx",
                        lineNumber: 6,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6.99745 6.41667H7.00269",
                        stroke: "#3A3A3A",
                        "stroke-width": "1.33333",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogButton.tsx",
                        lineNumber: 7,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4.66346 6.41667H4.6687",
                        stroke: "#3A3A3A",
                        "stroke-width": "1.33333",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogButton.tsx",
                        lineNumber: 8,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogButton.tsx",
                lineNumber: 4,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "info-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text",
                        children: number
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogButton.tsx",
                        lineNumber: 11,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text",
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogButton.tsx",
                        lineNumber: 12,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogButton.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogButton.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BlogButton;
const __TURBOPACK__default__export__ = BlogButton;
var _c;
__turbopack_context__.k.register(_c, "BlogButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$pages$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/pages/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$pages$2f$HeaderDesktop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/pages/HeaderDesktop.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/node_modules/react-responsive/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Home/Advertisement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/CardHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$HotTopicCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/HotTopicCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$ArticleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/ArticleCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$NewsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/ui/card/NewsCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$SmallInfo$2d$horizontal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Home/SmallInfo-horizontal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogSapo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogSapo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogQuote$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogQuote.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$CommentInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/CommentInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$Comments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/Comments.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0-main/webthethao2.0-main/components/Blog/BlogButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const Detail = ()=>{
    _s();
    const changeHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])({
        query: "(max-width: 1024px)"
    });
    const changeNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])({
        query: "(max-width: 768px)"
    });
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
    const title = "Vì sao Zane Navratil được bổ nhiệm làm Chủ tịch Ủy ban VĐV chuyên nghiệp Pickleball?";
    const sapo = "Với kinh nghiệm thi đấu, khả năng kinh doanh và kỹ năng truyền thông hiếm có, Zane Navratil có thể mang đến cho các tay vợt chuyên nghiệp điều mà họ chưa từng có.";
    const content = "Một bước ngoặt quan trọng đối với làng pickleball chuyên nghiệp, Zane Navratil đã được bầu làm Chủ tịch Ủy ban Vận động viên Chuyên nghiệp (Pro Player Committee) của Hiệp hội Pickleball Thống nhất (UPA) – tổ chức chung của PPA Tour và Major League Pickleball (MLP). Đây được xem là nỗ lực lớn nhất từ trước đến nay nhằm thiết lập một cơ chế đại diện thống nhất cho các vận động viên chuyên nghiệp trong môn thể thao đang phát triển bùng nổ này.";
    const heading = "Bước tiến cho tiếng nói của vận động viên";
    const content1 = "Ủy ban Vận động viên của UPA được thành lập để mang lại một tiếng nói có tổ chức và chính thức cho giới vận động viên giữa bối cảnh pickleball chuyên nghiệp phát triển nhanh chóng.";
    const content2 = "Trong nhiều năm, pickleball đã tăng trưởng vượt xa nền tảng tổ chức của nó. Dù PPA hay MLP từng có hội đồng cố vấn, nhưng một tổ chức đại diện chung, có quyền lực thực tế, vẫn chưa từng tồn tại. Trong khi đó, nhu cầu về một cơ quan thống nhất ngày càng cấp thiết khi lịch thi đấu dày đặc, di chuyển tốn kém và quyền lợi thương mại của các giải đang ảnh hưởng trực tiếp đến sự nghiệp và sức khỏe của vận động viên.";
    const heading2 = "Vì sao lại là Zane Navratil?";
    const content3 = "Việc Zane được chọn làm Chủ tịch là điều dễ hiểu. Anh là một trong những tay vợt hàng đầu, vô địch ở cả PPA và MLP, đồng thời là đội trưởng của New Jersey 5s. Ngoài thành tích thi đấu, Zane còn là đối tác kinh doanh của Paddletek và ProXR Pickleball, người sáng lập chuỗi huấn luyện quốc tế, và người dẫn chương trình podcast “PicklePod” – kênh phân tích hàng đầu của The Dink.";
    const quote = {
        quote: "“Đã đến lúc có một tiếng nói mang tính hợp tác, định hướng giải pháp thay vì đối đầu.” ",
        name: "- Zane Navratil"
    };
    const content4 = "Bên cạnh thành tích thi đấu, nền tảng chuyên môn về kế toán của Zane cũng giúp anh có lợi thế trong các cuộc trao đổi với lãnh đạo giải đấu và nhà tài trợ.";
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "App",
        children: [
            changeHeader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$pages$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                lineNumber: 72,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$pages$2f$HeaderDesktop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                lineNumber: 72,
                columnNumber: 42
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "detail-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "home--desktop ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "detail-layout",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "link--detail",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "24",
                                                    height: "25",
                                                    viewBox: "0 0 24 25",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 2.49219C10.625 2.49219 9.32812 2.75781 8.10938 3.28906C6.89062 3.80469 5.82812 4.51562 4.92188 5.42188C4.01562 6.32812 3.30469 7.39062 2.78906 8.60938C2.25781 9.82812 1.99219 11.125 1.99219 12.5C1.99219 13.75 2.21094 14.9297 2.64844 16.0391C3.08594 17.1641 3.67969 18.1641 4.42969 19.0391C5.17969 19.9141 6.07031 20.6406 7.10156 21.2188C8.13281 21.7969 9.24219 22.1797 10.4297 22.3672V15.3828H7.89844V12.5H10.4297V10.2969C10.4297 9.04688 10.7734 8.08594 11.4609 7.41406C12.1484 6.74219 13.0703 6.40625 14.2266 6.40625C14.7734 6.40625 15.2812 6.4375 15.75 6.5C16.2188 6.5625 16.4531 6.59375 16.4531 6.59375V9.05469H15.1875C14.5625 9.05469 14.1367 9.21875 13.9102 9.54688C13.6836 9.875 13.5703 10.2344 13.5703 10.625V12.5H16.3359L15.8906 15.3828H13.5703V22.3672C14.7578 22.1797 15.8672 21.7969 16.8984 21.2188C17.9297 20.6406 18.8242 19.9141 19.582 19.0391C20.3398 18.1641 20.9297 17.1641 21.3516 16.0391C21.7891 14.9297 22.0078 13.75 22.0078 12.5C22.0078 11.125 21.7422 9.82812 21.2109 8.60938C20.6953 7.39062 19.9844 6.32812 19.0781 5.42188C18.1719 4.51562 17.1094 3.80469 15.8906 3.28906C14.6719 2.75781 13.375 2.49219 12 2.49219Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 78,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "24",
                                                    height: "25",
                                                    viewBox: "0 0 24 25",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M8.60156 4.50781H3L9.60938 13.3203L3.35156 20.4922H5.48438L10.5938 14.6094L15 20.4922H20.6016L13.7109 11.3281L19.6406 4.50781H17.5312L12.7266 10.0156L8.60156 4.50781ZM15.7969 18.8984L6.21094 6.10156H7.80469L17.3906 18.8984H15.7969Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "24",
                                                    height: "25",
                                                    viewBox: "0 0 24 25",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 22.5078C10.625 22.5078 9.32812 22.2422 8.10938 21.7109C6.89062 21.1953 5.82812 20.4844 4.92188 19.5781C4.01562 18.6719 3.30469 17.6094 2.78906 16.3906C2.25781 15.1719 1.99219 13.875 1.99219 12.5C1.99219 11.125 2.25781 9.82812 2.78906 8.60938C3.30469 7.39062 4.01562 6.32812 4.92188 5.42188C5.82812 4.51562 6.89062 3.80469 8.10938 3.28906C9.32812 2.75781 10.625 2.49219 12 2.49219C13.375 2.49219 14.6719 2.75781 15.8906 3.28906C17.1094 3.80469 18.1719 4.51562 19.0781 5.42188C19.9844 6.32812 20.6953 7.39062 21.2109 8.60938C21.7422 9.82812 22.0078 11.125 22.0078 12.5C22.0078 13.875 21.7422 15.1719 21.2109 16.3906C20.6953 17.6094 19.9844 18.6719 19.0781 19.5781C18.1719 20.4844 17.1094 21.1953 15.8906 21.7109C14.6719 22.2422 13.375 22.5078 12 22.5078ZM8.88281 13.6719H8.90625C9.1875 14.625 9.40234 15.3398 9.55078 15.8164C9.69922 16.293 9.77344 16.5312 9.77344 16.5312C9.83594 16.6875 9.90234 16.7852 9.97266 16.8242C10.043 16.8633 10.125 16.8828 10.2188 16.8828C10.3125 16.8672 10.3906 16.8359 10.4531 16.7891C10.5156 16.7422 10.5781 16.6875 10.6406 16.625C10.6406 16.625 10.7383 16.5312 10.9336 16.3438C11.1289 16.1562 11.4297 15.8672 11.8359 15.4766L14.3672 17.375C14.6016 17.5 14.8008 17.5273 14.9648 17.457C15.1289 17.3867 15.2344 17.2109 15.2812 16.9297L16.9453 9.125C17.0391 8.75 17.0156 8.49609 16.875 8.36328C16.7344 8.23047 16.5234 8.21875 16.2422 8.32812L6.51562 12.0781C6.1875 12.2188 6.01562 12.3672 6 12.5234C5.98438 12.6797 6.11719 12.8047 6.39844 12.8984L8.88281 13.6719Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "24",
                                                    height: "25",
                                                    viewBox: "0 0 24 25",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M13.0547 8.60938L14.4844 10.0156C15.1562 10.7031 15.6641 11.4766 16.0078 12.3359C16.3516 13.1953 16.5234 14.0742 16.5234 14.9727C16.5234 15.8711 16.3516 16.75 16.0078 17.6094C15.6641 18.4688 15.1562 19.2422 14.4844 19.9297L14.1328 20.2812C13.4453 20.9688 12.6719 21.4766 11.8125 21.8047C10.9531 22.1484 10.0742 22.3203 9.17578 22.3203C8.27734 22.3203 7.39844 22.1484 6.53906 21.8047C5.67969 21.4766 4.90625 20.9688 4.21875 20.2812C3.53125 19.5938 3.02344 18.8203 2.69531 17.9609C2.35156 17.1016 2.17969 16.2227 2.17969 15.3242C2.17969 14.4258 2.35156 13.5469 2.69531 12.6875C3.02344 11.8281 3.53125 11.0547 4.21875 10.3672L5.625 11.7969C5.14062 12.2812 4.78125 12.8281 4.54688 13.4375C4.29688 14.0625 4.17188 14.6953 4.17188 15.3359C4.17188 15.9766 4.29688 16.6016 4.54688 17.2109C4.78125 17.8203 5.14062 18.375 5.625 18.875C6.125 19.3594 6.67969 19.7188 7.28906 19.9531C7.89844 20.2031 8.52344 20.3281 9.16406 20.3281C9.80469 20.3281 10.4375 20.2031 11.0625 19.9531C11.6719 19.7188 12.2188 19.3594 12.7031 18.875L13.0547 18.5C13.5391 18.0156 13.9062 17.4688 14.1562 16.8594C14.4062 16.25 14.5312 15.625 14.5312 14.9844C14.5312 14.3438 14.4062 13.7109 14.1562 13.0859C13.9062 12.4766 13.5391 11.9297 13.0547 11.4453L11.6484 10.0156L13.0547 8.60938ZM19.7812 14.6328L18.375 13.2031C18.8594 12.7188 19.2188 12.1719 19.4531 11.5625C19.7031 10.9375 19.8281 10.3047 19.8281 9.66406C19.8281 9.02344 19.7031 8.39844 19.4531 7.78906C19.2188 7.17969 18.8594 6.625 18.375 6.125C17.875 5.64062 17.3203 5.28125 16.7109 5.04688C16.1016 4.79688 15.4766 4.67188 14.8359 4.67188C14.1953 4.67188 13.5625 4.79688 12.9375 5.04688C12.3281 5.28125 11.7812 5.64062 11.2969 6.125L10.9453 6.5C10.4453 6.98438 10.0781 7.53125 9.84375 8.14062C9.59375 8.75 9.46875 9.375 9.46875 10.0156C9.46875 10.6562 9.59375 11.2891 9.84375 11.9141C10.0781 12.5234 10.4453 13.0703 10.9453 13.5547L12.3516 14.9844L10.9453 16.3906L9.51562 14.9844C8.84375 14.2969 8.33594 13.5234 7.99219 12.6641C7.64844 11.8047 7.47656 10.9258 7.47656 10.0273C7.47656 9.12891 7.64844 8.25 7.99219 7.39062C8.33594 6.53125 8.84375 5.75781 9.51562 5.07031L9.86719 4.71875C10.5547 4.03125 11.3281 3.52344 12.1875 3.19531C13.0469 2.85156 13.9258 2.67969 14.8242 2.67969C15.7227 2.67969 16.6016 2.85156 17.4609 3.19531C18.3203 3.52344 19.0938 4.03125 19.7812 4.71875C20.4688 5.40625 20.9766 6.17969 21.3047 7.03906C21.6484 7.89844 21.8203 8.77734 21.8203 9.67578C21.8203 10.5742 21.6484 11.4531 21.3047 12.3125C20.9766 13.1719 20.4688 13.9453 19.7812 14.6328Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "link",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69001C2 5.60001 4.49 3.10001 7.56 3.10001C9.38 3.10001 10.99 3.98001 12 5.34001C13.01 3.98001 14.63 3.10001 16.44 3.10001C19.51 3.10001 22 5.60001 22 8.69001C22 15.69 15.52 19.82 12.62 20.81Z",
                                                        stroke: "#292D32",
                                                        "stroke-width": "2",
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "blog detail",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "blog__container",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "blog__user"
                                                }, void 0, false, {
                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "blog__body",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: title
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "blog__user--inner boder",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$SmallInfo$2d$horizontal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                avatar: "/assets/Rectangle 1.webp",
                                                                name: "Kiet Phan",
                                                                time: "10 phút trước",
                                                                official: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "blog__cat",
                                                                children: "Pickleball"
                                                            }, void 0, false, {
                                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogSapo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        sapo: sapo
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/assets/image.webp",
                                                        alt: "",
                                                        className: "blog__image w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        content: content
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        heading: heading
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        content: content1
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        content: content2
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/image.webp",
                                                alt: "",
                                                className: "blog__image--inner w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "blog__body",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        heading: heading2
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        content: content3
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogQuote$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        quote: quote.quote,
                                                        name: quote.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        content: content4
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "blog__btn-container",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                number: 2,
                                                                text: "Bình luận"
                                                            }, void 0, false, {
                                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$BlogButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                number: 10,
                                                                text: "Chia sẻ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "blog__comment",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$CommentInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Blog$2f$Comments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        avatar: "/assets/Image (3).webp",
                                                        name: "Huong Nguyen",
                                                        content: "Anna hướng dẫn chi tiết, sửa tư thế nhẹ nhàng, giúp tôi thấy cơ thể dẻo dai hơn chỉ sau 2 tháng.",
                                                        time: "10 phút trước"
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "adv",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "adv__text padding-12",
                                                            children: "Advertisement"
                                                        }, void 0, false, {
                                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/assets/Advertisement.webp",
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "empty-container",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Cùng chủ đề",
                                                        className: "smaller",
                                                        deco: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "detail__card",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$NewsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "smaller",
                                                                avatar: "/assets/Image (3).webp",
                                                                name: "Huong Nguyen",
                                                                time: "10 phút trước",
                                                                image: "/assets/hal.webp",
                                                                title: "Trực tiếp vòng Last 64 Hanoi Open Pool 2025",
                                                                content: "Anna hướng dẫn chi tiết, sửa tư thế nhẹ nhàng, giúp tôi thấy cơ thể dẻo dai hơn chỉ sau 2 tháng.",
                                                                category: "Bóng đá",
                                                                official: true,
                                                                link: "/blog"
                                                            }, void 0, false, {
                                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$NewsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "smaller",
                                                                avatar: "/assets/Image (3).webp",
                                                                name: "Huong Nguyen",
                                                                time: "10 phút trước",
                                                                image: "/assets/hal.webp",
                                                                title: "Trực tiếp vòng Last 64 Hanoi Open Pool 2025",
                                                                content: "Anna hướng dẫn chi tiết, sửa tư thế nhẹ nhàng, giúp tôi thấy cơ thể dẻo dai hơn chỉ sau 2 tháng.",
                                                                category: "Bóng đá",
                                                                official: true,
                                                                link: "/blog"
                                                            }, void 0, false, {
                                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$NewsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "smaller",
                                                                avatar: "/assets/Image (3).webp",
                                                                name: "Huong Nguyen",
                                                                time: "10 phút trước",
                                                                image: "/assets/hal.webp",
                                                                title: "Trực tiếp vòng Last 64 Hanoi Open Pool 2025",
                                                                content: "Anna hướng dẫn chi tiết, sửa tư thế nhẹ nhàng, giúp tôi thấy cơ thể dẻo dai hơn chỉ sau 2 tháng.",
                                                                category: "Bóng đá",
                                                                official: true,
                                                                link: "/blog"
                                                            }, void 0, false, {
                                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "empty-container",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Bài viết nổi bật",
                                                        className: "smaller",
                                                        deco: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "detail__card",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$NewsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "smaller",
                                                                avatar: "/assets/Image (3).webp",
                                                                name: "Huong Nguyen",
                                                                time: "10 phút trước",
                                                                image: "/assets/hal.webp",
                                                                title: "Trực tiếp vòng Last 64 Hanoi Open Pool 2025",
                                                                content: "Anna hướng dẫn chi tiết, sửa tư thế nhẹ nhàng, giúp tôi thấy cơ thể dẻo dai hơn chỉ sau 2 tháng.",
                                                                category: "Bóng đá",
                                                                official: true,
                                                                link: "/blog"
                                                            }, void 0, false, {
                                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$NewsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "smaller",
                                                                avatar: "/assets/Image (3).webp",
                                                                name: "Huong Nguyen",
                                                                time: "10 phút trước",
                                                                image: "/assets/hal.webp",
                                                                title: "Trực tiếp vòng Last 64 Hanoi Open Pool 2025",
                                                                content: "Anna hướng dẫn chi tiết, sửa tư thế nhẹ nhàng, giúp tôi thấy cơ thể dẻo dai hơn chỉ sau 2 tháng.",
                                                                category: "Bóng đá",
                                                                official: true,
                                                                link: "/blog"
                                                            }, void 0, false, {
                                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$NewsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "smaller",
                                                                avatar: "/assets/Image (3).webp",
                                                                name: "Huong Nguyen",
                                                                time: "10 phút trước",
                                                                image: "/assets/hal.webp",
                                                                title: "Trực tiếp vòng Last 64 Hanoi Open Pool 2025",
                                                                content: "Anna hướng dẫn chi tiết, sửa tư thế nhẹ nhàng, giúp tôi thấy cơ thể dẻo dai hơn chỉ sau 2 tháng.",
                                                                category: "Bóng đá",
                                                                official: true,
                                                                link: "/blog"
                                                            }, void 0, false, {
                                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                lineNumber: 76,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "home--desktop__right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-container",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                logo: "assets/logo-sea-game 1.webp",
                                                title: "",
                                                deco: false,
                                                style: {
                                                    background: "#0056FF",
                                                    color: "#fff",
                                                    paddingLeft: "-14px"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card--header__content",
                                                children: [
                                                    card1.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$ArticleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "view-more--btn",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            children: "Xem thêm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-container",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                title: "Nhận định",
                                                deco: true
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 180,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card--header__content",
                                                children: [
                                                    card1.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$ArticleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "view-more--btn",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            children: "Xem thêm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        image: "/assets/adv.webp"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-container",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                title: "Đọc nhiều",
                                                deco: true
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card--header__content",
                                                children: [
                                                    card1.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$ArticleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "view-more--btn",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            children: "Xem thêm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "empty-container",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                title: "Lịch thi đấu bóng đá",
                                                style: {
                                                    borderBottom: 'none'
                                                },
                                                deco: true
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card--header__content",
                                                children: card2.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "home--desktop__schedule",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `item ${index === 0 ? 'active' : ''}`,
                                                            onClick: ()=>setActive(index),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: item.img,
                                                                    alt: "",
                                                                    className: "logo"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                                    lineNumber: 208,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text ",
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                                    lineNumber: 209,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        image: "/assets/adv.webp"
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-container",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$CardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                title: "Chủ đề nóng",
                                                style: {
                                                    borderBottom: 'none'
                                                },
                                                deco: true
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 219,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card--header__content",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$ui$2f$card$2f$HotTopicCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    isTitled: false
                                                }, void 0, false, {
                                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Advertisement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        image: "/assets/image 22.webp",
                                        isCollapsed: false
                                    }, void 0, false, {
                                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                lineNumber: 167,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail__footer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "adv",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/assets/Advertisement.webp",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                    lineNumber: 235,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                                lineNumber: 233,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                            lineNumber: 232,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                        lineNumber: 231,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            changeNav ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$components$2f$Home$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
                lineNumber: 240,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0)) : ""
        ]
    }, void 0, true, {
        fileName: "[project]/webthethao2.0-main/webthethao2.0-main/app/detail/page.tsx",
        lineNumber: 71,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Detail, "MKN0rNjucCYqmjThaVV0XnM7LXQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
_c = Detail;
const __TURBOPACK__default__export__ = Detail;
var _c;
__turbopack_context__.k.register(_c, "Detail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=webthethao2_0-main_webthethao2_0-main_173496d3._.js.map