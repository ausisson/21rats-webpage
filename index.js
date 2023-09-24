var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/Users/austinsisson/Desktop/words/programming/javascript/webdev/portfolio/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/austinsisson/Desktop/words/programming/javascript/webdev/portfolio/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_css_bundle = __toESM(require_dist()), import_node3 = require("@remix-run/node"), import_react2 = require("@remix-run/react");

// app/session.server.js
var import_node2 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.js
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.js
var import_client = require("@prisma/client");

// app/singleton.server.js
var singleton = (name, valueFactory) => {
  var _a;
  let g = global;
  return g.__singletons ?? (g.__singletons = {}), (_a = g.__singletons)[name] ?? (_a[name] = valueFactory()), g.__singletons[name];
};

// app/db.server.js
var prisma = singleton("prisma", () => new import_client.PrismaClient());
prisma.$connect();

// app/models/user.server.js
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}

// app/session.server.js
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !0
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/styles.css
var styles_default = "/build/_assets/styles-Z3LGSWEL.css";

// app/root.jsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: styles_default },
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
], loader = async ({ request }) => (0, import_node3.json)({ user: await getUser(request) });
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
var import_react4 = require("react");

// app/components/WavyHeader.jsx
var import_react3 = __toESM(require("react")), import_jsx_runtime3 = require("react/jsx-runtime");
var coinFlip = () => Math.floor(Math.random() * 2) == 1;
function getRandomNumber(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}
function updateText(text, h1) {
  let h1Class = h1.classList;
  h1.innerHTML = text.split("").map((letter) => `<span className="${h1Class}">` + letter + "</span>").join("");
  let letterClass = "letter";
  Array.from(h1.children).forEach((span, index) => {
    span.classList.add(letterClass);
    let animatedClass = (coinFlip(), "wavy");
    span.classList.add(animatedClass), span.style.setProperty("--xA", getRandomNumber(-4, 4) + "px"), span.style.setProperty("--yA", getRandomNumber(-4, 4) + "px"), span.style.setProperty("--xB", getRandomNumber(-4, 4) + "px"), span.style.setProperty("--yB", getRandomNumber(-4, 4) + "px"), setTimeout(() => {
      changeLocation(span);
    }, 0.5);
  });
}
function getOffset(el) {
  for (var _x = 0, _y = 0; el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop); )
    _x += el.offsetLeft - el.scrollLeft, _y += el.offsetTop - el.scrollTop, el = el.offsetParent;
  return { top: _y, left: _x };
}
function changeLocation(event) {
  let span = event.target ? event.target : event, xC = getRandomNumber(-4, 4) + "px", yC = getRandomNumber(-4, 4) + "px";
  return span.style.setProperty("--xC", yC), span.style.setProperty("--yC", yC), span;
}
function animateHover(element) {
  Array.from(element.children).forEach((span) => {
    let offset = getOffset(span);
    span.style.setProperty("--currentX", offset._x), span.style.setProperty("--currentY", offset._y), span.style.animationIterationCount = 1, span.style.animationDirection = "normal", span.style.animationDuration = ".25s", span.style.animationFillMode = "forwards", span.style.animationName = "reset";
  });
}
function reverseAnimation(element, handleNext) {
  let animationDuration = ".25s";
  Array.from(element.children).forEach((span) => {
    span.style.setProperty("--currentX", 0), span.style.setProperty("--currentY", 0), span.style.animationName = "reset-reverse", span.style.animationDuration = animationDuration;
  }), handleNext(parseInt(animationDuration) * 1e3);
}
function WavyHeader(props) {
  let headerRef = import_react3.default.createRef(), link = () => {
    window.location.href = props.link;
  };
  return (0, import_react3.useEffect)(() => {
    headerRef.current.addEventListener("mouseenter", (event) => {
      let h1 = event.target;
      animateHover(h1);
    }), headerRef.current.addEventListener("mouseleave", (event) => {
      let element = event.target;
      reverseAnimation(element, (time) => {
        let value = props.value, el = element;
        setTimeout(() => {
          updateText(value, el);
        }, time);
      });
    }), updateText(props.value, headerRef.current);
  }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { id: "animated", className: props.value, onClick: link, ref: headerRef, children: " " });
}

// app/assets/ratsitting.gif
var ratsitting_default = "/build/_assets/ratsitting-5NZ2F3J3.gif";

// app/routes/_index.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "homepage", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "landing", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { children: "21 rats & counting" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "inline", children: ".com" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "landing", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { className: "ratsitting", src: ratsitting_default }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "links", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(WavyHeader, { value: "youtube", link: "https://youtube.com/@21ratsandcounting" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "spacer" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(WavyHeader, { value: "instagram", link: "https://instagram.com/ratmanlately" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "spacer" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(WavyHeader, { value: "twitter", link: "https://twitter.com/21ratsinc" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "spacer" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(WavyHeader, { value: "merch", link: "https://google.com/?=rat" })
      ] })
    ] })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-GXXBPSHR.js", imports: ["/build/_shared/chunk-LVGNTFWM.js", "/build/_shared/chunk-DWFMXSZ6.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SFYAPPLP.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-OGG3VHK7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "8e0414d2", hmr: void 0, url: "/build/manifest-8E0414D2.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
