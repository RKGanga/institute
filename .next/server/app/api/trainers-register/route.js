"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/trainers-register/route";
exports.ids = ["app/api/trainers-register/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftrainers-register%2Froute&page=%2Fapi%2Ftrainers-register%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrainers-register%2Froute.ts&appDir=C%3A%5CUsers%5Crk-ap%5COneDrive%5CDesktop%5CCustomised%5Cram%20tech%5Cram%20tech%5Cinstitute%5Cnext-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crk-ap%5COneDrive%5CDesktop%5CCustomised%5Cram%20tech%5Cram%20tech%5Cinstitute%5Cnext-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftrainers-register%2Froute&page=%2Fapi%2Ftrainers-register%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrainers-register%2Froute.ts&appDir=C%3A%5CUsers%5Crk-ap%5COneDrive%5CDesktop%5CCustomised%5Cram%20tech%5Cram%20tech%5Cinstitute%5Cnext-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crk-ap%5COneDrive%5CDesktop%5CCustomised%5Cram%20tech%5Cram%20tech%5Cinstitute%5Cnext-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_rk_ap_OneDrive_Desktop_Customised_ram_tech_ram_tech_institute_next_app_app_api_trainers_register_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/trainers-register/route.ts */ \"(rsc)/./app/api/trainers-register/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/trainers-register/route\",\n        pathname: \"/api/trainers-register\",\n        filename: \"route\",\n        bundlePath: \"app/api/trainers-register/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\rk-ap\\\\OneDrive\\\\Desktop\\\\Customised\\\\ram tech\\\\ram tech\\\\institute\\\\next-app\\\\app\\\\api\\\\trainers-register\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_rk_ap_OneDrive_Desktop_Customised_ram_tech_ram_tech_institute_next_app_app_api_trainers_register_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/trainers-register/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0cmFpbmVycy1yZWdpc3RlciUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdHJhaW5lcnMtcmVnaXN0ZXIlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0cmFpbmVycy1yZWdpc3RlciUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNyay1hcCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0N1c3RvbWlzZWQlNUNyYW0lMjB0ZWNoJTVDcmFtJTIwdGVjaCU1Q2luc3RpdHV0ZSU1Q25leHQtYXBwJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNyay1hcCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0N1c3RvbWlzZWQlNUNyYW0lMjB0ZWNoJTVDcmFtJTIwdGVjaCU1Q2luc3RpdHV0ZSU1Q25leHQtYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUMrRTtBQUM1SjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3JhbS10ZWNoLWluc3RpdHV0ZS8/NTY0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyay1hcFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEN1c3RvbWlzZWRcXFxccmFtIHRlY2hcXFxccmFtIHRlY2hcXFxcaW5zdGl0dXRlXFxcXG5leHQtYXBwXFxcXGFwcFxcXFxhcGlcXFxcdHJhaW5lcnMtcmVnaXN0ZXJcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3RyYWluZXJzLXJlZ2lzdGVyL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdHJhaW5lcnMtcmVnaXN0ZXJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3RyYWluZXJzLXJlZ2lzdGVyL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxccmstYXBcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxDdXN0b21pc2VkXFxcXHJhbSB0ZWNoXFxcXHJhbSB0ZWNoXFxcXGluc3RpdHV0ZVxcXFxuZXh0LWFwcFxcXFxhcHBcXFxcYXBpXFxcXHRyYWluZXJzLXJlZ2lzdGVyXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS90cmFpbmVycy1yZWdpc3Rlci9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftrainers-register%2Froute&page=%2Fapi%2Ftrainers-register%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrainers-register%2Froute.ts&appDir=C%3A%5CUsers%5Crk-ap%5COneDrive%5CDesktop%5CCustomised%5Cram%20tech%5Cram%20tech%5Cinstitute%5Cnext-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crk-ap%5COneDrive%5CDesktop%5CCustomised%5Cram%20tech%5Cram%20tech%5Cinstitute%5Cnext-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/trainers-register/route.ts":
/*!********************************************!*\
  !*** ./app/api/trainers-register/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_supabase_serviceClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/supabase/serviceClient */ \"(rsc)/./lib/supabase/serviceClient.ts\");\n\n\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        const supabase = (0,_lib_supabase_serviceClient__WEBPACK_IMPORTED_MODULE_1__.createServiceClient)();\n        const payload = {\n            name: String(body.name || \"\").trim(),\n            email: String(body.email || \"\").trim(),\n            phone: String(body.phone || \"\").trim(),\n            expertise: String(body.expertise || \"\").trim(),\n            experience: body.experience != null ? Number(body.experience) : null,\n            status: \"pending\",\n            bio: String(body.bio || \"\").trim() || null\n        };\n        if (!payload.name || !payload.email || !payload.phone || !payload.expertise) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                ok: false,\n                error: \"Missing required fields\"\n            }, {\n                status: 400\n            });\n        }\n        const { error } = await supabase.from(\"teachers\").insert(payload);\n        if (error) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            ok: false,\n            error: error.message\n        }, {\n            status: 400\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            ok: true\n        });\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            ok: false,\n            error: e?.message || \"Unexpected error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3RyYWluZXJzLXJlZ2lzdGVyL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQztBQUN3QjtBQUUzRCxlQUFlRSxLQUFLQyxHQUFZO0lBQ3JDLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1ELElBQUlFLElBQUk7UUFDM0IsTUFBTUMsV0FBV0wsZ0ZBQW1CQTtRQUVwQyxNQUFNTSxVQUFVO1lBQ2RDLE1BQU1DLE9BQU9MLEtBQUtJLElBQUksSUFBSSxJQUFJRSxJQUFJO1lBQ2xDQyxPQUFPRixPQUFPTCxLQUFLTyxLQUFLLElBQUksSUFBSUQsSUFBSTtZQUNwQ0UsT0FBT0gsT0FBT0wsS0FBS1EsS0FBSyxJQUFJLElBQUlGLElBQUk7WUFDcENHLFdBQVdKLE9BQU9MLEtBQUtTLFNBQVMsSUFBSSxJQUFJSCxJQUFJO1lBQzVDSSxZQUFZVixLQUFLVSxVQUFVLElBQUksT0FBT0MsT0FBT1gsS0FBS1UsVUFBVSxJQUFJO1lBQ2hFRSxRQUFRO1lBQ1JDLEtBQUtSLE9BQU9MLEtBQUthLEdBQUcsSUFBSSxJQUFJUCxJQUFJLE1BQU07UUFDeEM7UUFFQSxJQUFJLENBQUNILFFBQVFDLElBQUksSUFBSSxDQUFDRCxRQUFRSSxLQUFLLElBQUksQ0FBQ0osUUFBUUssS0FBSyxJQUFJLENBQUNMLFFBQVFNLFNBQVMsRUFBRTtZQUMzRSxPQUFPYixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO2dCQUFFYSxJQUFJO2dCQUFPQyxPQUFPO1lBQTBCLEdBQUc7Z0JBQUVILFFBQVE7WUFBSTtRQUMxRjtRQUVBLE1BQU0sRUFBRUcsS0FBSyxFQUFFLEdBQUcsTUFBTWIsU0FBU2MsSUFBSSxDQUFDLFlBQVlDLE1BQU0sQ0FBQ2Q7UUFDekQsSUFBSVksT0FBTyxPQUFPbkIscURBQVlBLENBQUNLLElBQUksQ0FBQztZQUFFYSxJQUFJO1lBQU9DLE9BQU9BLE1BQU1HLE9BQU87UUFBQyxHQUFHO1lBQUVOLFFBQVE7UUFBSTtRQUV2RixPQUFPaEIscURBQVlBLENBQUNLLElBQUksQ0FBQztZQUFFYSxJQUFJO1FBQUs7SUFDdEMsRUFBRSxPQUFPSyxHQUFRO1FBQ2YsT0FBT3ZCLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7WUFBRWEsSUFBSTtZQUFPQyxPQUFPSSxHQUFHRCxXQUFXO1FBQW1CLEdBQUc7WUFBRU4sUUFBUTtRQUFJO0lBQ2pHO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW0tdGVjaC1pbnN0aXR1dGUvLi9hcHAvYXBpL3RyYWluZXJzLXJlZ2lzdGVyL3JvdXRlLnRzPzg1NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgeyBjcmVhdGVTZXJ2aWNlQ2xpZW50IH0gZnJvbSAnQC9saWIvc3VwYWJhc2Uvc2VydmljZUNsaWVudCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKClcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZVNlcnZpY2VDbGllbnQoKVxuXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIG5hbWU6IFN0cmluZyhib2R5Lm5hbWUgfHwgJycpLnRyaW0oKSxcbiAgICAgIGVtYWlsOiBTdHJpbmcoYm9keS5lbWFpbCB8fCAnJykudHJpbSgpLFxuICAgICAgcGhvbmU6IFN0cmluZyhib2R5LnBob25lIHx8ICcnKS50cmltKCksXG4gICAgICBleHBlcnRpc2U6IFN0cmluZyhib2R5LmV4cGVydGlzZSB8fCAnJykudHJpbSgpLFxuICAgICAgZXhwZXJpZW5jZTogYm9keS5leHBlcmllbmNlICE9IG51bGwgPyBOdW1iZXIoYm9keS5leHBlcmllbmNlKSA6IG51bGwsXG4gICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICAgIGJpbzogU3RyaW5nKGJvZHkuYmlvIHx8ICcnKS50cmltKCkgfHwgbnVsbCxcbiAgICB9IGFzIGFueVxuXG4gICAgaWYgKCFwYXlsb2FkLm5hbWUgfHwgIXBheWxvYWQuZW1haWwgfHwgIXBheWxvYWQucGhvbmUgfHwgIXBheWxvYWQuZXhwZXJ0aXNlKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBvazogZmFsc2UsIGVycm9yOiAnTWlzc2luZyByZXF1aXJlZCBmaWVsZHMnIH0sIHsgc3RhdHVzOiA0MDAgfSlcbiAgICB9XG5cbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCd0ZWFjaGVycycpLmluc2VydChwYXlsb2FkKVxuICAgIGlmIChlcnJvcikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgb2s6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNDAwIH0pXG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBvazogdHJ1ZSB9KVxuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBvazogZmFsc2UsIGVycm9yOiBlPy5tZXNzYWdlIHx8ICdVbmV4cGVjdGVkIGVycm9yJyB9LCB7IHN0YXR1czogNTAwIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjcmVhdGVTZXJ2aWNlQ2xpZW50IiwiUE9TVCIsInJlcSIsImJvZHkiLCJqc29uIiwic3VwYWJhc2UiLCJwYXlsb2FkIiwibmFtZSIsIlN0cmluZyIsInRyaW0iLCJlbWFpbCIsInBob25lIiwiZXhwZXJ0aXNlIiwiZXhwZXJpZW5jZSIsIk51bWJlciIsInN0YXR1cyIsImJpbyIsIm9rIiwiZXJyb3IiLCJmcm9tIiwiaW5zZXJ0IiwibWVzc2FnZSIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/trainers-register/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/supabase/serviceClient.ts":
/*!***************************************!*\
  !*** ./lib/supabase/serviceClient.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createServiceClient: () => (/* binding */ createServiceClient)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\n// Server-only Supabase client using the Service Role key.\n// IMPORTANT: Never import this into client components.\nfunction createServiceClient() {\n    const url = \"https://acxnoxgyxbqtioesutes.supabase.co\";\n    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;\n    return (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(url, serviceKey, {\n        auth: {\n            persistSession: false\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2Uvc2VydmljZUNsaWVudC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvRDtBQUVwRCwwREFBMEQ7QUFDMUQsdURBQXVEO0FBQ2hELFNBQVNDO0lBQ2QsTUFBTUMsTUFBTUMsMENBQW9DO0lBQ2hELE1BQU1HLGFBQWFILFFBQVFDLEdBQUcsQ0FBQ0cseUJBQXlCO0lBQ3hELE9BQU9QLG1FQUFZQSxDQUFDRSxLQUFLSSxZQUFZO1FBQ25DRSxNQUFNO1lBQUVDLGdCQUFnQjtRQUFNO0lBQ2hDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW0tdGVjaC1pbnN0aXR1dGUvLi9saWIvc3VwYWJhc2Uvc2VydmljZUNsaWVudC50cz84ZWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcblxuLy8gU2VydmVyLW9ubHkgU3VwYWJhc2UgY2xpZW50IHVzaW5nIHRoZSBTZXJ2aWNlIFJvbGUga2V5LlxuLy8gSU1QT1JUQU5UOiBOZXZlciBpbXBvcnQgdGhpcyBpbnRvIGNsaWVudCBjb21wb25lbnRzLlxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlcnZpY2VDbGllbnQoKSB7XG4gIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCFcbiAgY29uc3Qgc2VydmljZUtleSA9IHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVkhXG4gIHJldHVybiBjcmVhdGVDbGllbnQodXJsLCBzZXJ2aWNlS2V5LCB7XG4gICAgYXV0aDogeyBwZXJzaXN0U2Vzc2lvbjogZmFsc2UgfSxcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJjcmVhdGVTZXJ2aWNlQ2xpZW50IiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInNlcnZpY2VLZXkiLCJTVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZIiwiYXV0aCIsInBlcnNpc3RTZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabase/serviceClient.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftrainers-register%2Froute&page=%2Fapi%2Ftrainers-register%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrainers-register%2Froute.ts&appDir=C%3A%5CUsers%5Crk-ap%5COneDrive%5CDesktop%5CCustomised%5Cram%20tech%5Cram%20tech%5Cinstitute%5Cnext-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crk-ap%5COneDrive%5CDesktop%5CCustomised%5Cram%20tech%5Cram%20tech%5Cinstitute%5Cnext-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();