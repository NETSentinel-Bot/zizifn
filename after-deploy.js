var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// pkg/zr_wasm.js
function processHeader(chunk, user_ids) {
  const ptr0 = passArray8ToWasm0(chunk, wasm.__wbindgen_malloc);
  const len0 = WASM_VECTOR_LEN;
  const ptr1 = passStringToWasm0(user_ids, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  const ret = wasm.processHeader(ptr0, len0, ptr1, len1);
  return ret;
}
__name(processHeader, "processHeader");
function __wbg_get_imports() {
  const import0 = {
    __proto__: null,
    __wbg_Error_30c8987f7c2ed4e2: /* @__PURE__ */ __name(function(arg0, arg1) {
      const ret = Error(getStringFromWasm0(arg0, arg1));
      return ret;
    }, "__wbg_Error_30c8987f7c2ed4e2"),
    __wbg___wbindgen_debug_string_4687d8d8c2017d52: /* @__PURE__ */ __name(function(arg0, arg1) {
      const ret = debugString(arg1);
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, "__wbg___wbindgen_debug_string_4687d8d8c2017d52"),
    __wbg___wbindgen_throw_41e9ee4f547fc59a: /* @__PURE__ */ __name(function(arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    }, "__wbg___wbindgen_throw_41e9ee4f547fc59a"),
    __wbg_new_617a8cdb8bb1130e: /* @__PURE__ */ __name(function() {
      const ret = new Object();
      return ret;
    }, "__wbg_new_617a8cdb8bb1130e"),
    __wbg_set_6be42768c690e380: /* @__PURE__ */ __name(function(arg0, arg1, arg2) {
      arg0[arg1] = arg2;
    }, "__wbg_set_6be42768c690e380"),
    __wbindgen_generic_0000000000000001: /* @__PURE__ */ __name(function(arg0) {
      const ret = arg0;
      return ret;
    }, "__wbindgen_generic_0000000000000001"),
    __wbindgen_generic_0000000000000002: /* @__PURE__ */ __name(function(arg0, arg1) {
      const ret = getStringFromWasm0(arg0, arg1);
      return ret;
    }, "__wbindgen_generic_0000000000000002"),
    __wbindgen_generic_0000000000000003: /* @__PURE__ */ __name(function(arg0) {
      const ret = BigInt.asUintN(64, arg0);
      return ret;
    }, "__wbindgen_generic_0000000000000003"),
    __wbindgen_init_externref_table: /* @__PURE__ */ __name(function() {
      const table = wasm.__wbindgen_externrefs;
      const offset = table.grow(4);
      table.set(0, void 0);
      table.set(offset + 0, void 0);
      table.set(offset + 1, null);
      table.set(offset + 2, true);
      table.set(offset + 3, false);
    }, "__wbindgen_init_externref_table")
  };
  return {
    __proto__: null,
    "./zr_wasm_bg.js": import0
  };
}
__name(__wbg_get_imports, "__wbg_get_imports");
function debugString(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return `${val}`;
  }
  if (type == "string") {
    return `"${val}"`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return `Symbol(${description})`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return `Function(${name})`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ", " + debugString(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches && builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return `${val.name}: ${val.message}
${val.stack}`;
  }
  return className;
}
__name(debugString, "debugString");
var cachedDataViewMemory0 = null;
function getDataViewMemory0() {
  if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || cachedDataViewMemory0.buffer.detached === void 0 && cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
    cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
  }
  return cachedDataViewMemory0;
}
__name(getDataViewMemory0, "getDataViewMemory0");
function getStringFromWasm0(ptr, len) {
  return decodeText(ptr >>> 0, len);
}
__name(getStringFromWasm0, "getStringFromWasm0");
var cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
  if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}
__name(getUint8ArrayMemory0, "getUint8ArrayMemory0");
function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1, 1) >>> 0;
  getUint8ArrayMemory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
__name(passArray8ToWasm0, "passArray8ToWasm0");
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8ArrayMemory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
    const ret = cachedTextEncoder.encodeInto(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
__name(passStringToWasm0, "passStringToWasm0");
var cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
var MAX_SAFARI_DECODE_BYTES = 2146435072;
var numBytesDecoded = 0;
function decodeText(ptr, len) {
  numBytesDecoded += len;
  if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
    cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    cachedTextDecoder.decode();
    numBytesDecoded = len;
  }
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
__name(decodeText, "decodeText");
var cachedTextEncoder = new TextEncoder();
if (!("encodeInto" in cachedTextEncoder)) {
  cachedTextEncoder.encodeInto = function(arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
      read: arg.length,
      written: buf.length
    };
  };
}
var WASM_VECTOR_LEN = 0;
var wasmModule;
var wasmInstance;
var wasm;
function __wbg_finalize_init(instance, module) {
  wasmInstance = instance;
  wasm = instance.exports;
  wasmModule = module;
  cachedDataViewMemory0 = null;
  cachedUint8ArrayMemory0 = null;
  wasm.__wbindgen_start();
  return wasm;
}
__name(__wbg_finalize_init, "__wbg_finalize_init");
async function __wbg_load(module, imports) {
  if (typeof Response === "function" && module instanceof Response) {
    if (!module.ok) {
      throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
    }
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        const validResponse = expectedResponseType(module.type);
        if (validResponse && module.headers.get("Content-Type") !== "application/wasm") {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module };
    } else {
      return instance;
    }
  }
  function expectedResponseType(type) {
    switch (type) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
  __name(expectedResponseType, "expectedResponseType");
}
__name(__wbg_load, "__wbg_load");
async function __wbg_init(module_or_path) {
  if (wasm !== void 0) return wasm;
  if (module_or_path !== void 0) {
    if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
      ({ module_or_path } = module_or_path);
    } else {
      console.warn("using deprecated parameters for the initialization function; pass a single object instead");
    }
  }
  if (module_or_path === void 0) {
    module_or_path = new URL("zr_wasm_bg.wasm", import.meta.url);
  }
  const imports = __wbg_get_imports();
  if (typeof module_or_path === "string" || typeof Request === "function" && module_or_path instanceof Request || typeof URL === "function" && module_or_path instanceof URL) {
    module_or_path = fetch(module_or_path);
  }
  const { instance, module } = await __wbg_load(await module_or_path, imports);
  return __wbg_finalize_init(instance, module);
}
__name(__wbg_init, "__wbg_init");

// index.js
import wasm2 from "./a7c24a962bd6ee05787f18e7d7b9ef7ba54b9571-zr_wasm_bg.wasm";

// src/core.js
var decodeSecure = /* @__PURE__ */ __name((encoded) => atob(encoded), "decodeSecure");
var SENS = {
  vless: /* @__PURE__ */ __name(() => decodeSecure("dmxlc3M="), "vless"),
  ws: /* @__PURE__ */ __name(() => decodeSecure("d3M="), "ws"),
  wsOpts: /* @__PURE__ */ __name(() => decodeSecure("d3Mtb3B0czo="), "wsOpts"),
  edLine: /* @__PURE__ */ __name(() => decodeSecure("ZWFybHktZGF0YS1oZWFkZXItbmFtZTog"), "edLine"),
  hiddify: /* @__PURE__ */ __name(() => decodeSecure("aGlkZGlmZTovL2luc3RhbGwtY29uZmlnP3VybD0="), "hiddify"),
  v2rayng: /* @__PURE__ */ __name(() => decodeSecure("djJyYXluZzovL2luc3RhbGwtY29uZmlnP3VybD0="), "v2rayng"),
  clash: /* @__PURE__ */ __name(() => decodeSecure("Y2xhc2g6Ly9pbnN0YWxsLWNvbmZpZz91cmw9"), "clash"),
  exclave: /* @__PURE__ */ __name(() => decodeSecure("c246Ly9zdWJzY3JpcHRpb24/dXJsPQ=="), "exclave")
};
var CONST = {
  ED_PARAMS: { ed: 2560, eh: decodeSecure("U2VjLVdlYlNvY2tldC1Qcm90b2NvbA==") },
  AT_SYMBOL: "@",
  VLESS_PROTOCOL: decodeSecure("dmxlc3M="),
  WS_READY_STATE_OPEN: 1,
  WS_READY_STATE_CLOSING: 2,
  CIPHER_SUITES: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384:TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256:TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256:TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256:TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA:TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA:TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256:TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256",
  FINAL_MASK: JSON.stringify({
    tcp: [
      {
        type: "fragment",
        settings: { packets: "tlshello", lengths: ["0", "104", "1"], delays: ["0"], maxSplit: "0" }
      },
      {
        type: "fragment",
        settings: { packets: "1-1", lengths: ["114", "1"], delays: ["1"], maxSplit: "11" }
      }
    ]
  })
};
var Config = {
  userID: "be0ff9df-1468-41a0-8865-796d1c6800db",
  proxyIPs: ["di.nscl.ir:443", "tr.diam4.ggff.net:443"],
  fromEnv(env) {
    const pool = env.PROXYIP ? [env.PROXYIP, ...this.proxyIPs.filter((ip) => ip !== env.PROXYIP)] : this.proxyIPs;
    return {
      userID: env.UUID || this.userID,
      proxyPool: pool,
      proxyAddress: pool[0],
      workerName: env.WORKERNAME || "",
      nat64: env.NAT64 !== "off"
    };
  }
};
var IPV4_REGEX = /^\d{1,3}(\.\d{1,3}){3}$/;
var API_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36",
  Accept: "application/json"
};
async function resolveIPv4ViaDoH(hostname) {
  if (IPV4_REGEX.test(hostname)) return hostname;
  try {
    const resp = await safeFetch(
      `https://1.1.1.1/dns-query?name=${encodeURIComponent(hostname)}&type=A`,
      { headers: { accept: "application/dns-json" } },
      4e3
    );
    const data = await resp.json();
    const answer = (data.Answer || []).find((a) => a.type === 1);
    return answer ? answer.data : null;
  } catch (error) {
    return null;
  }
}
__name(resolveIPv4ViaDoH, "resolveIPv4ViaDoH");
async function safeFetch(url, options = {}, timeout = 4e3) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(id);
  }
}
__name(safeFetch, "safeFetch");
var ZIZIFN_PROXY_POOL_URL = "https://raw.githubusercontent.com/NiREvil/vless/refs/heads/main/sub/ProxyIP-for-zizifn.json";
var ZIZIFN_PROXY_POOL_FRESH_TTL = 21600;
var ZIZIFN_PROXY_POOL_STALE_TTL = 259200;
function createProxyPoolCacheKey(type) {
  return new Request(`https://cf-zizifn-proxy-pool.local/${type}`);
}
__name(createProxyPoolCacheKey, "createProxyPoolCacheKey");
function validateZizifnProxyPool(data) {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid ProxyIP dataset");
  }
  if (!Array.isArray(data.proxies)) {
    throw new Error("ProxyIP dataset has no proxies array");
  }
  if (!data.proxies.length) {
    throw new Error("ProxyIP dataset is empty");
  }
  const validProxies = data.proxies.filter(
    (proxy) => proxy && typeof proxy.ip === "string" && proxy.ip.length > 0 && Number.isInteger(proxy.port)
  );
  if (!validProxies.length) {
    throw new Error("ProxyIP dataset contains no valid proxies");
  }
  return {
    ...data,
    proxies: validProxies
  };
}
__name(validateZizifnProxyPool, "validateZizifnProxyPool");
async function fetchZizifnProxyPool(ctx) {
  const cache = caches.default;
  const freshKey = createProxyPoolCacheKey("fresh");
  const staleKey = createProxyPoolCacheKey("stale");
  try {
    const fresh = await cache.match(freshKey);
    if (fresh) {
      return validateZizifnProxyPool(await fresh.json());
    }
  } catch (error) {
    console.error("ProxyIP fresh cache read failed:", error);
  }
  try {
    const response = await safeFetch(
      ZIZIFN_PROXY_POOL_URL,
      {
        headers: {
          Accept: "application/json"
        }
      },
      8e3
    );
    if (!response.ok) {
      throw new Error(`GitHub returned HTTP ${response.status}`);
    }
    const text = await response.text();
    if (!text || text.length < 100) {
      throw new Error("GitHub returned an unexpectedly small dataset");
    }
    const data = validateZizifnProxyPool(JSON.parse(text));
    const cacheResponse = new Response(text, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": `public, max-age=${ZIZIFN_PROXY_POOL_FRESH_TTL}`
      }
    });
    const staleResponse = new Response(text, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": `public, max-age=${ZIZIFN_PROXY_POOL_STALE_TTL}`
      }
    });
    ctx?.waitUntil(
      Promise.all([
        cache.put(freshKey, cacheResponse),
        cache.put(staleKey, staleResponse)
      ])
    );
    return data;
  } catch (error) {
    console.error("ProxyIP GitHub fetch failed:", error);
    try {
      const stale = await cache.match(staleKey);
      if (stale) {
        console.warn("Using stale ProxyIP dataset");
        return validateZizifnProxyPool(await stale.json());
      }
    } catch (staleError) {
      console.error("ProxyIP stale cache read failed:", staleError);
    }
    throw new Error("ProxyIP dataset unavailable");
  }
}
__name(fetchZizifnProxyPool, "fetchZizifnProxyPool");
function buildSettingsUrl(workerName) {
  return workerName ? `https://dash.cloudflare.com/?to=/:account/workers/services/view/${workerName}/production/settings` : `https://dash.cloudflare.com/?to=/:account/workers-and-pages`;
}
__name(buildSettingsUrl, "buildSettingsUrl");
function generateRandomPath(length = 28, query = "") {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `/${result}${query ? `?${query}` : ""}`;
}
__name(generateRandomPath, "generateRandomPath");
function withConfigOverrides(path, { nat64, proxyIP } = {}) {
  const params = [];
  if (nat64 !== void 0) {
    params.push(`nat64=${nat64 ? "on" : "off"}`);
  }
  if (proxyIP) {
    const normalizedProxyIP = proxyIP.replace(/%3a/gi, ":");
    params.push(`proxyip=${normalizedProxyIP}`);
  }
  if (!params.length) return path;
  const sep = path.includes("?") ? "&" : "?";
  return `${path}${sep}${params.join("&")}`;
}
__name(withConfigOverrides, "withConfigOverrides");
var CORE_PRESETS = {
  xray: {
    tls: {
      path: /* @__PURE__ */ __name(() => generateRandomPath(12, "ed=2048"), "path"),
      security: "tls",
      fp: "chrome",
      alpn: "http/1.1",
      extra: {}
    },
    tcp: {
      path: /* @__PURE__ */ __name(() => generateRandomPath(12, "ed=2048"), "path"),
      security: "none",
      fp: "chrome",
      alpn: "http/1.1",
      extra: {}
    }
  },
  sb: {
    tls: {
      path: /* @__PURE__ */ __name(() => generateRandomPath(18), "path"),
      security: "tls",
      fp: "chrome",
      alpn: "http/1.1",
      extra: CONST.ED_PARAMS
    },
    tcp: {
      path: /* @__PURE__ */ __name(() => generateRandomPath(18), "path"),
      security: "none",
      fp: "chrome",
      alpn: "http/1.1",
      extra: CONST.ED_PARAMS
    }
  }
};
var CF_TLS_PORTS = [443, 2053, 2083, 2087, 2096, 8443];
var CF_NON_TLS_PORTS = [80, 8080, 2052, 2082, 2086, 2095, 8880];
function pickRandomProxyPort(isPagesDeployment) {
  const pool = isPagesDeployment ? CF_TLS_PORTS.map((port) => ({ port, proto: "tls" })) : [
    ...CF_TLS_PORTS.map((port) => ({ port, proto: "tls" })),
    ...CF_NON_TLS_PORTS.map((port) => ({ port, proto: "tcp" }))
  ];
  return pool[Math.floor(Math.random() * pool.length)];
}
__name(pickRandomProxyPort, "pickRandomProxyPort");
function countryCodeToFlagEmoji(countryCode) {
  if (!countryCode || countryCode.length !== 2) return "";
  const code = countryCode.toUpperCase();
  const points = [...code].map((c) => 127462 + (c.charCodeAt(0) - 65));
  if (points.some((p) => p < 127462 || p > 127487)) return "";
  return String.fromCodePoint(...points);
}
__name(countryCodeToFlagEmoji, "countryCodeToFlagEmoji");
async function cacheGetJson(key) {
  try {
    const res = await caches.default.match(
      new Request(`https://cf-ipmeta-cache.local/${encodeURIComponent(key)}`)
    );
    if (!res) return null;
    return await res.json();
  } catch (e) {
    return null;
  }
}
__name(cacheGetJson, "cacheGetJson");
async function cachePutJson(ctx, key, value, maxAgeSeconds = 21600) {
  try {
    const res = new Response(JSON.stringify(value), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": `public, max-age=${maxAgeSeconds}`
      }
    });
    const put = caches.default.put(
      new Request(`https://cf-ipmeta-cache.local/${encodeURIComponent(key)}`),
      res
    );
    if (ctx?.waitUntil) ctx.waitUntil(put);
    else await put;
  } catch (e) {
  }
}
__name(cachePutJson, "cachePutJson");
function makeName(tag, proto) {
  return `${tag}-${proto.toUpperCase()}`;
}
__name(makeName, "makeName");
function createVlessLink({
  userID,
  address,
  port,
  host,
  path,
  security,
  sni,
  fp,
  alpn,
  extra = {},
  enhanced = false,
  name
}) {
  const params = new URLSearchParams({ type: decodeSecure("d3M="), host, path });
  if (security) params.set("security", security);
  if (sni) params.set("sni", sni);
  if (fp) params.set("fp", fp);
  if (alpn) params.set("alpn", alpn);
  if (enhanced) {
    if (security === "tls") params.set("cs", CONST.CIPHER_SUITES);
    params.set("fm", CONST.FINAL_MASK);
  }
  for (const [k, v] of Object.entries(extra)) params.set(k, v);
  return `${CONST.VLESS_PROTOCOL}://${userID}@${address}:${port}?${params.toString()}#${encodeURIComponent(name)}`;
}
__name(createVlessLink, "createVlessLink");
function buildLink({
  core,
  proto,
  userID,
  hostName,
  address,
  port,
  tag,
  enhanced = false,
  overrides
}) {
  const p = CORE_PRESETS[core][proto];
  const path = overrides ? withConfigOverrides(p.path(), overrides) : p.path();
  return createVlessLink({
    userID,
    address,
    port,
    host: hostName,
    path,
    security: p.security,
    sni: p.security === "tls" ? hostName : void 0,
    fp: enhanced && p.security === "tls" ? "unsafe" : p.fp,
    alpn: p.alpn,
    extra: p.extra,
    enhanced,
    name: makeName(tag, proto) + (enhanced ? "-Enhanced" : "")
  });
}
__name(buildLink, "buildLink");
var pick = /* @__PURE__ */ __name((arr) => arr[Math.floor(Math.random() * arr.length)], "pick");
function isInIgnoredRange(ip) {
  return ip.startsWith("198.41.208.");
}
__name(isInIgnoredRange, "isInIgnoredRange");
function buildMainDomains(hostName) {
  return [
    hostName,
    "creativecommons.org",
    "sky.rethinkdns.com",
    "www.speedtest.net",
    "singapore.com",
    "go.inmobi.com",
    "www.visa.com",
    "www.wto.org",
    "chatgpt.com",
    "medium.com",
    "lb.nscl.ir",
    "nodejs.org",
    "linkerd.io",
    "harbor.io",
    "npmjs.com",
    "csgo.com",
    "fbi.gov",
    "ip.sb",
    "time.is",
    "icook.hk",
    "codepen.io",
    "unpkg.com",
    "jsdelivr.com",
    "www.cdnjs.com",
    "auth.vercel.com",
    "www.udacity.com",
    "www.gitbook.com",
    "www.ipaddress.my",
    "www.glassdoor.com",
    "www.ipchicken.com",
    "static.cloudflareinsights.com"
  ];
}
__name(buildMainDomains, "buildMainDomains");
function buildSubscriptionHeaders(subName) {
  const CAKE_INFO = { total_TB: 380, base_GB: 42e3, daily_growth_GB: 250 };
  const GB_in_bytes = 1024 * 1024 * 1024;
  const TB_in_bytes = 1024 * GB_in_bytes;
  const total_bytes = CAKE_INFO.total_TB * TB_in_bytes;
  const base_bytes = CAKE_INFO.base_GB * GB_in_bytes;
  const now = /* @__PURE__ */ new Date();
  const hours_passed = now.getHours() + now.getMinutes() / 60;
  const daily_growth_bytes = hours_passed / 24 * (CAKE_INFO.daily_growth_GB * GB_in_bytes);
  const cake_download = base_bytes + daily_growth_bytes / 2;
  const cake_upload = base_bytes + daily_growth_bytes / 2;
  const expire_timestamp = Math.floor(Date.now() / 1e3) + 2 * 365 * 24 * 60 * 60;
  const subInfo = `upload=${Math.round(cake_upload)}; download=${Math.round(cake_download)}; total=${total_bytes}; expire=${expire_timestamp}`;
  const headers = {
    "Profile-Update-Interval": "8",
    "Subscription-Userinfo": subInfo
  };
  if (subName) {
    headers["Profile-Title"] = /^[\x20-\x7e]+$/.test(subName) ? subName : `base64:${btoa(String.fromCharCode(...new TextEncoder().encode(subName)))}`;
  }
  return headers;
}
__name(buildSubscriptionHeaders, "buildSubscriptionHeaders");

// src/clash.js
var GENERAL_TEMPLATE = `port: 7890
socks-port: 7891
mixed-port: 10801
ipv6: false
allow-lan: true
mode: rule
log-level: warning
disable-keep-alive: false
keep-alive-idle: 10
keep-alive-interval: 15
unified-delay: true
geo-auto-update: false
external-ui: /path/to/ui/folder/
external-controller-unix: mihomo.sock
external-ui-name: xd
external-controller: 0.0.0.0:9093
external-ui-url: "https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip"
external-controller-cors:
  allow-origins:
    - '*'
  allow-private-network: true
profile:
  store-selected: true
  store-fake-ip: true
dns:
  enable: true
  listen: 0.0.0.0:1053
  ipv6: false
  respect-rules: true
  use-system-hosts: false
  nameserver:
    - https://8.8.8.8/dns-query
    - https://94.140.14.14/dns-query
    - https://208.67.222.222/dns-query
  default-nameserver:
    - 8.8.8.8
    - 223.5.5.5
    - system
  nameserver-policy:
    raw.githubusercontent.com: 8.8.8.8
    time.apple.com: 8.8.8.8
    www.gstatic.com: system
  proxy-server-nameserver:
    - 8.8.8.8
    - 223.5.5.5
  fallback:
    - tls://1.1.1.1
    - tcp://8.8.8.8
    - udp://223.5.5.5
    - tls://dns.quad9.net
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  fake-ip-filter:
    - '*.lan'
    - geosite:private
tun:
  enable: true
  stack: system
  auto-route: true
  strict-route: true
  auto-detect-interface: true
  dns-hijack:
    - any:53
    - tcp://any:53
  mtu: 9000
sniffer:
  enable: true
  force-dns-mapping: true
  parse-pure-ip: true
  override-destination: false
  sniff:
    HTTP:
      ports:
        - 80
        - 8080
        - 8880
        - 2052
        - 2082
        - 2086
        - 2095
    TLS:
      ports:
        - 443
        - 8443
        - 2053
        - 2083
        - 2087
        - 2096
`;
function clashProxyBlock({ name, server, port, uuid, hostName, tls }) {
  const path = generateRandomPath(18);
  const lines = [
    `  - name: ${name}`,
    `    type: ${SENS.vless()}`,
    `    server: ${server}`,
    `    port: ${port}`,
    `    uuid: ${uuid}`,
    `    tls: ${tls}`
  ];
  if (tls) lines.push(`    servername: ${hostName}`, `    alpn:`, `      - http/1.1`);
  lines.push(
    `    client-fingerprint: chrome`,
    `    network: ${SENS.ws()}`,
    `    ${SENS.wsOpts()}`,
    `      path: ${path}`,
    `      headers:`,
    `        host: ${hostName}`,
    `      max-early-data: ${CONST.ED_PARAMS.ed}`,
    `      ${SENS.edLine()}${CONST.ED_PARAMS.eh}`,
    `    udp: true`
  );
  if (tls) lines.push(`    skip-cert-verify: true`);
  return lines.join("\n");
}
__name(clashProxyBlock, "clashProxyBlock");
async function handleClashConfig(request, userID, hostName, ctx) {
  const url = new URL(request.url);
  const subName = url.searchParams.get("name");
  const httpsPorts = [443, 8443, 2053, 2083, 2087, 2096];
  const httpPorts = [80, 8080, 8880, 2052, 2082, 2086, 2095];
  const pick2 = /* @__PURE__ */ __name((arr) => arr[Math.floor(Math.random() * arr.length)], "pick");
  const isPagesDeployment = hostName.endsWith(".pages.dev");
  const proxies = [];
  const names = [];
  const addPair = /* @__PURE__ */ __name((label, server, includeTcp = true) => {
    proxies.push(
      clashProxyBlock({
        name: `${label}-TLS`,
        server,
        port: pick2(httpsPorts),
        uuid: userID,
        hostName,
        tls: true
      })
    );
    names.push(`${label}-TLS`);
    if (includeTcp && !isPagesDeployment) {
      proxies.push(
        clashProxyBlock({
          name: `${label}-TCP`,
          server,
          port: pick2(httpPorts),
          uuid: userID,
          hostName,
          tls: false
        })
      );
      names.push(`${label}-TCP`);
    }
  }, "addPair");
  buildMainDomains(hostName).forEach((domain, i) => addPair(`Domain${i + 1}`, domain, false));
  try {
    const cache = caches.default;
    const cacheKey = new Request("https://cf-ip-cache.local");
    let response = await cache.match(cacheKey);
    if (!response) {
      const r = await safeFetch(
        "https://raw.githubusercontent.com/NiREvil/vless/refs/heads/main/Cloudflare-IPs.json",
        {},
        4e3
      );
      if (r.ok) {
        response = new Response(await r.text(), {
          headers: { "Cache-Control": "public, max-age=86400" }
        });
        ctx.waitUntil(cache.put(cacheKey, response.clone()));
      }
    }
    if (response) {
      const json = await response.json();
      const ips = [...json.ipv4 || [], ...json.ipv6 || []].map((x) => x.ip).filter((v) => !isInIgnoredRange(v)).slice(0, 20);
      ips.forEach((ip, i) => addPair(`IP${i + 1}`, ip.includes(":") ? `[${ip}]` : ip));
    }
  } catch (e) {
    console.error("Clash IP fetch failed", e);
  }
  const groupList = names.map((n) => `      - ${n}`).join("\n");
  const yaml = `${GENERAL_TEMPLATE}proxies:
${proxies.join("\n")}
proxy-groups:
  - name: \u26AA 0x00
    type: select
    proxies:
      - \u{1F7E2} AUTO
      - DIRECT
${groupList}
  - name: \u{1F7E2} AUTO
    type: url-test
    url: https://www.gstatic.com/generate_204
    interval: 180
    tolerance: 50
    proxies:
${groupList}
rules:
  - MATCH,\u26AA 0x00
ntp:
  enable: true
  server: time.apple.com
  port: 123
  interval: 30
`;
  return new Response(yaml, {
    headers: {
      "Content-Type": "text/yaml; charset=utf-8",
      ...buildSubscriptionHeaders(subName)
    }
  });
}
__name(handleClashConfig, "handleClashConfig");

// src/network.js
import { connect } from "cloudflare:sockets";
var IPV4_REGEX2 = /^\d{1,3}(\.\d{1,3}){3}$/;
async function resolveIPv4(hostname) {
  if (IPV4_REGEX2.test(hostname)) return hostname;
  try {
    const resp = await safeFetch(
      `https://1.1.1.1/dns-query?name=${encodeURIComponent(hostname)}&type=A`,
      { headers: { accept: "application/dns-json" } },
      4e3
    );
    const data = await resp.json();
    const answer = (data.Answer || []).find((a) => a.type === 1);
    return answer ? answer.data : null;
  } catch (error) {
    return null;
  }
}
__name(resolveIPv4, "resolveIPv4");
function toNAT64Address(ipv4) {
  if (!ipv4 || !IPV4_REGEX2.test(ipv4)) return null;
  const octets = ipv4.split(".").map(Number);
  if (octets.some((n) => n < 0 || n > 255)) return null;
  const hex = octets.map((n) => n.toString(16).padStart(2, "0"));
  return `64:ff9b::${hex[0]}${hex[1]}:${hex[2]}${hex[3]}`;
}
__name(toNAT64Address, "toNAT64Address");
function parsePathOverrides(url) {
  const overrides = {};
  for (const [rawKey, rawValue] of url.searchParams) {
    const key = rawKey.toLowerCase();
    if (key === "nat64") {
      overrides.nat64 = rawValue.toLowerCase() === "on";
    } else if (key === "proxyip" || key === "proxyips") {
      overrides.proxyPool = rawValue.split(",").map((s) => s.trim()).filter(Boolean);
    }
  }
  return overrides;
}
__name(parsePathOverrides, "parsePathOverrides");
function parseHostAndPort(addr, defaultPort = 443) {
  if (!addr) return { host: "", port: defaultPort };
  const str = String(addr).trim();
  if (str.startsWith("[")) {
    const closeBracketIdx = str.indexOf("]");
    if (closeBracketIdx !== -1) {
      const host = str.slice(1, closeBracketIdx);
      const rest = str.slice(closeBracketIdx + 1);
      const port = rest.startsWith(":") ? parseInt(rest.slice(1), 10) || defaultPort : defaultPort;
      return { host, port };
    }
  }
  const lastColon = str.lastIndexOf(":");
  if (lastColon !== -1 && str.indexOf(":") === lastColon) {
    const host = str.slice(0, lastColon);
    const port = parseInt(str.slice(lastColon + 1), 10) || defaultPort;
    return { host, port };
  }
  if (lastColon !== -1) {
    return { host: str, port: defaultPort };
  }
  return { host: str, port: defaultPort };
}
__name(parseHostAndPort, "parseHostAndPort");
function formatConnectHost(address) {
  if (!address) return "";
  const host = String(address).trim();
  if (host.includes(":") && !host.startsWith("[")) {
    return `[${host}]`;
  }
  return host;
}
__name(formatConnectHost, "formatConnectHost");
async function ProtocolOverWSHandler(request, config) {
  const overrides = parsePathOverrides(new URL(request.url));
  config = { ...config, ...overrides };
  const webSocketPair = new WebSocketPair();
  const [client, webSocket] = Object.values(webSocketPair);
  webSocket.accept();
  let address = "";
  let portWithRandomLog = "";
  let udpStreamWriter = null;
  const log = /* @__PURE__ */ __name((info, event) => {
    console.log(`[${address}:${portWithRandomLog}] ${info}`, event || "");
  }, "log");
  const earlyDataHeader = request.headers.get(CONST.ED_PARAMS.eh) || "";
  const readableWebSocketStream = MakeReadableWebSocketStream(webSocket, earlyDataHeader, log);
  let remoteSocketWapper = { value: null };
  readableWebSocketStream.pipeTo(
    new WritableStream({
      async write(chunk, controller) {
        if (udpStreamWriter) return udpStreamWriter(chunk);
        if (remoteSocketWapper.value) {
          const writer = remoteSocketWapper.value.writable.getWriter();
          try {
            await writer.write(chunk);
          } catch (error) {
            safeCloseWebSocket(webSocket);
          } finally {
            writer.releaseLock();
          }
          return;
        }
        const header = processHeader(new Uint8Array(chunk), config.userID);
        if (header.has_error) throw new Error(header.message);
        address = header.address_remote;
        portWithRandomLog = `${header.port_remote}--${Math.random()} ${header.is_udp ? "udp" : "tcp"} `;
        const vlessResponseHeader = new Uint8Array([header.version, 0]);
        const rawClientData = chunk.slice(header.raw_data_index);
        if (header.is_udp) {
          if (header.port_remote === 53) {
            const dnsPipeline = await createDnsPipeline(webSocket, vlessResponseHeader, log);
            udpStreamWriter = dnsPipeline.write;
            await udpStreamWriter(rawClientData);
          } else {
            log(`udp:${header.port_remote} not supported (dns-only), closing gently`);
            safeCloseWebSocket(webSocket);
          }
          return;
        }
        HandleTCPOutBound(
          remoteSocketWapper,
          header.address_remote,
          header.port_remote,
          rawClientData,
          webSocket,
          vlessResponseHeader,
          log,
          config
        ).catch((error) => {
          console.error("HandleTCPOutBound failed:", error.stack || error);
          safeCloseWebSocket(webSocket);
        });
      },
      close() {
        log(`readableWebSocketStream closed`);
      },
      abort(err) {
        log(`readableWebSocketStream aborted`, err);
      }
    })
  ).catch((err) => {
    console.error("Pipeline failed:", err.stack || err);
  });
  return new Response(null, { status: 101, webSocket: client });
}
__name(ProtocolOverWSHandler, "ProtocolOverWSHandler");
async function HandleTCPOutBound(remoteSocket, addressRemote, portRemote, rawClientData, webSocket, protocolResponseHeader, log, config) {
  async function connectAndWrite(address, port) {
    const formattedHost = formatConnectHost(address);
    const tcpSocket = connect({
      hostname: formattedHost,
      port: Number(port)
    });
    remoteSocket.value = tcpSocket;
    const writer = tcpSocket.writable.getWriter();
    try {
      await writer.write(rawClientData);
      log(`connected to ${formattedHost}:${port}`);
      return tcpSocket;
    } catch (error) {
      try {
        tcpSocket.close();
      } catch {
      }
      remoteSocket.value = null;
      throw error;
    } finally {
      writer.releaseLock();
    }
  }
  __name(connectAndWrite, "connectAndWrite");
  async function retryWithPool(pool, index) {
    if (index >= pool.length) {
      await retryWithNAT64();
      return;
    }
    const { host: proxyHost, port: proxyPort } = parseHostAndPort(pool[index], 443);
    try {
      const tcpSocket = await connectAndWrite(proxyHost, proxyPort);
      RemoteSocketToWS(
        tcpSocket,
        webSocket,
        protocolResponseHeader,
        () => retryWithPool(pool, index + 1),
        log
      ).catch((error) => {
        console.error("Proxy RemoteSocketToWS failed:", error.stack || error);
        safeCloseWebSocket(webSocket);
      });
    } catch (error) {
      log(`proxy ${proxyHost}:${proxyPort} failed`, error);
      await retryWithPool(pool, index + 1);
    }
  }
  __name(retryWithPool, "retryWithPool");
  async function retryWithNAT64() {
    if (config.nat64 === false) {
      safeCloseWebSocket(webSocket);
      return;
    }
    const ipv4 = await resolveIPv4(addressRemote);
    const nat64Address = toNAT64Address(ipv4);
    if (!nat64Address) {
      log(`NAT64 fallback failed: could not resolve ${addressRemote}`);
      safeCloseWebSocket(webSocket);
      return;
    }
    log(`falling back to NAT64: ${nat64Address}`);
    try {
      const tcpSocket = await connectAndWrite(nat64Address, portRemote);
      RemoteSocketToWS(
        tcpSocket,
        webSocket,
        protocolResponseHeader,
        null,
        log
      ).catch((error) => {
        console.error("NAT64 RemoteSocketToWS failed:", error.stack || error);
        safeCloseWebSocket(webSocket);
      });
    } catch (error) {
      log("NAT64 connect failed", error);
      safeCloseWebSocket(webSocket);
    }
  }
  __name(retryWithNAT64, "retryWithNAT64");
  try {
    const tcpSocket = await connectAndWrite(addressRemote, portRemote);
    RemoteSocketToWS(
      tcpSocket,
      webSocket,
      protocolResponseHeader,
      () => retryWithPool(config.proxyPool || [], 0),
      log
    ).catch((error) => {
      console.error("Direct RemoteSocketToWS failed:", error.stack || error);
      safeCloseWebSocket(webSocket);
    });
  } catch (error) {
    log(`direct connection failed: ${addressRemote}:${portRemote}`, error);
    await retryWithPool(config.proxyPool || [], 0);
  }
}
__name(HandleTCPOutBound, "HandleTCPOutBound");
function MakeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
  return new ReadableStream({
    start(controller) {
      webSocketServer.addEventListener("message", (event) => {
        try {
          controller.enqueue(event.data);
        } catch (error2) {
          safeCloseWebSocket(webSocketServer);
        }
      });
      webSocketServer.addEventListener("close", () => {
        safeCloseWebSocket(webSocketServer);
        try {
          controller.close();
        } catch (error2) {
          log("stream already closed");
        }
      });
      webSocketServer.addEventListener("error", (err) => {
        log("webSocketServer has error");
        controller.error(err);
      });
      const { earlyData, error } = base64ToArrayBuffer(earlyDataHeader);
      if (error) controller.error(error);
      else if (earlyData) controller.enqueue(earlyData);
    },
    pull(_controller) {
    },
    cancel(reason) {
      log(`ReadableStream was canceled, due to ${reason}`);
      safeCloseWebSocket(webSocketServer);
    }
  });
}
__name(MakeReadableWebSocketStream, "MakeReadableWebSocketStream");
async function RemoteSocketToWS(remoteSocket, webSocket, protocolResponseHeader, retry, log) {
  let hasIncomingData = false;
  let headerSent = false;
  try {
    await remoteSocket.readable.pipeTo(
      new WritableStream({
        async write(chunk) {
          if (webSocket.readyState !== CONST.WS_READY_STATE_OPEN)
            throw new Error("WebSocket is not open");
          hasIncomingData = true;
          let dataToSend = chunk;
          if (!headerSent && protocolResponseHeader) {
            const merged = new Uint8Array(protocolResponseHeader.length + chunk.byteLength);
            merged.set(protocolResponseHeader, 0);
            merged.set(new Uint8Array(chunk), protocolResponseHeader.length);
            dataToSend = merged.buffer;
            headerSent = true;
          }
          webSocket.send(dataToSend);
        },
        close() {
          log(`Remote connection readable closed.`);
        },
        abort(reason) {
          console.error(`Remote connection readable aborted:`, reason);
        }
      })
    );
  } catch (error) {
    console.error(`RemoteSocketToWS error:`, error.stack || error);
  }
  if (!hasIncomingData && retry) {
    try {
      await retry();
    } catch (error) {
      console.error("retry failed:", error.stack || error);
      safeCloseWebSocket(webSocket);
    }
    return;
  }
  safeCloseWebSocket(webSocket);
}
__name(RemoteSocketToWS, "RemoteSocketToWS");
function base64ToArrayBuffer(base64Str) {
  if (!base64Str) return { earlyData: null, error: null };
  try {
    const binaryStr = atob(base64Str.replace(/-/g, "+").replace(/_/g, "/"));
    const buffer = new ArrayBuffer(binaryStr.length);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < binaryStr.length; i++) view[i] = binaryStr.charCodeAt(i);
    return { earlyData: buffer, error: null };
  } catch (error) {
    return { earlyData: null, error };
  }
}
__name(base64ToArrayBuffer, "base64ToArrayBuffer");
function safeCloseWebSocket(socket) {
  try {
    if (socket.readyState === CONST.WS_READY_STATE_OPEN || socket.readyState === CONST.WS_READY_STATE_CLOSING)
      socket.close();
  } catch (error) {
    console.error("safeCloseWebSocket error:", error);
  }
}
__name(safeCloseWebSocket, "safeCloseWebSocket");
async function createDnsPipeline(webSocket, vlessResponseHeader, log) {
  let isHeaderSent = false;
  let pending = new Uint8Array(0);
  const transformStream = new TransformStream({
    transform(chunk, controller) {
      const incoming = chunk instanceof Uint8Array ? chunk : new Uint8Array(chunk);
      const data = new Uint8Array(pending.length + incoming.length);
      data.set(pending, 0);
      data.set(incoming, pending.length);
      let offset = 0;
      while (data.length - offset >= 2) {
        const udpPacketLength = data[offset] << 8 | data[offset + 1];
        const frameLength = udpPacketLength + 2;
        if (data.length - offset < frameLength) break;
        controller.enqueue(data.slice(offset + 2, offset + frameLength));
        offset += frameLength;
      }
      pending = data.slice(offset);
    },
    flush() {
      if (pending.length !== 0) {
        throw new Error("Incomplete DNS-over-WebSocket frame");
      }
    }
  });
  transformStream.readable.pipeTo(
    new WritableStream({
      async write(chunk) {
        try {
          const resp = await safeFetch(
            `https://1.1.1.1/dns-query`,
            {
              method: "POST",
              headers: { "content-type": "application/dns-message" },
              body: chunk
            },
            4e3
          );
          const dnsQueryResult = await resp.arrayBuffer();
          const udpSize = dnsQueryResult.byteLength;
          const udpSizeBuffer = new Uint8Array([udpSize >> 8 & 255, udpSize & 255]);
          if (webSocket.readyState === CONST.WS_READY_STATE_OPEN) {
            if (isHeaderSent) {
              webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
            } else {
              webSocket.send(
                await new Blob([
                  vlessResponseHeader,
                  udpSizeBuffer,
                  dnsQueryResult
                ]).arrayBuffer()
              );
              isHeaderSent = true;
            }
          }
        } catch (error) {
          log("DNS query error: " + error);
        }
      }
    })
  ).catch((e) => log("DNS stream error: " + e));
  const writer = transformStream.writable.getWriter();
  return { write: /* @__PURE__ */ __name((chunk) => writer.write(chunk), "write") };
}
__name(createDnsPipeline, "createDnsPipeline");

// src/routes.js
import panelB64 from "./841ce55b3ba54391a97ce5a0dc01fb3801321a9f-panel.b64";
var panelHtml = null;
function getPanelHtml() {
  if (!panelHtml) {
    try {
      if (typeof panelB64 === "string" && panelB64.length > 0) {
        panelHtml = new TextDecoder("utf-8").decode(
          Uint8Array.from(atob(panelB64), (c) => c.charCodeAt(0))
        );
      } else {
        throw new Error("panelB64 is empty or invalid");
      }
    } catch (e) {
      console.error("Failed to decode panelB64, using fallback panel HTML:", e);
      panelHtml = `<!DOCTYPE html><html><head><title>VLESS Proxy Panel</title></head><body><h1>VLESS Worker Config</h1><p>Dream Config: {{CONFIG_DREAM}}</p></body></html>`;
    }
  }
  return panelHtml;
}
__name(getPanelHtml, "getPanelHtml");
async function handleIpSubscription(request, core, userID, hostName, ctx, enhanced = false, cfg = null, env = null) {
  const url = new URL(request.url);
  const subName = url.searchParams.get("name");
  const mainDomains = buildMainDomains(hostName);
  const httpsPorts = [443, 8443, 2053, 2083, 2087, 2096];
  const httpPorts = [80, 8080, 8880, 2052, 2082, 2086, 2095];
  let links = [];
  const isPagesDeployment = hostName.endsWith(".pages.dev");
  const includeTcp = core === "xray" && enhanced && !isPagesDeployment;
  mainDomains.forEach((domain, i) => {
    links.push(
      buildLink({
        core,
        proto: "tls",
        userID,
        hostName,
        address: domain,
        port: pick(httpsPorts),
        tag: `Domain${i + 1}`,
        enhanced
      })
    );
  });
  try {
    const cache = caches.default;
    const cacheKey = new Request("https://cf-ip-cache.local");
    let response = await cache.match(cacheKey);
    if (!response) {
      const r = await safeFetch(
        "https://raw.githubusercontent.com/NiREvil/vless/refs/heads/main/Cloudflare-IPs.json",
        {},
        4e3
      );
      if (r.ok) {
        response = new Response(await r.text(), {
          headers: { "Cache-Control": "public, max-age=86400" }
        });
        ctx.waitUntil(cache.put(cacheKey, response.clone()));
      }
    }
    if (response) {
      const json = await response.json();
      const ips = [...json.ipv4 || [], ...json.ipv6 || []].map((x) => x.ip).filter((ip) => !isInIgnoredRange(ip)).slice(0, 20);
      ips.forEach((ip, i) => {
        const formattedAddress = ip.includes(":") ? `[${ip}]` : ip;
        links.push(
          buildLink({
            core,
            proto: "tls",
            userID,
            hostName,
            address: formattedAddress,
            port: pick(httpsPorts),
            tag: `IP${i + 1}`,
            enhanced
          })
        );
        if (includeTcp) {
          links.push(
            buildLink({
              core,
              proto: "tcp",
              userID,
              hostName,
              address: formattedAddress,
              port: pick(httpPorts),
              tag: `IP${i + 1}`,
              enhanced
            })
          );
        }
      });
    }
  } catch (e) {
    console.error("Cached IP fetch failed", e);
  }
  links.push(
    buildLink({
      core,
      proto: "tls",
      userID,
      hostName,
      address: hostName,
      port: 443,
      tag: "NAT64",
      enhanced,
      overrides: { nat64: true }
    })
  );
  if (cfg) {
    try {
      const dataset = await fetchZizifnProxyPool(ctx);
      const pool = dataset.proxies.filter((entry) => entry?.ip && !isInIgnoredRange(entry.ip)).map((entry) => ({
        ip: entry.ip,
        port: entry.port || 443,
        country: entry.country || "Unknown",
        countryCode: entry.country ? entry.country.toUpperCase() : "",
        score: typeof entry.score === "number" ? entry.score : 999,
        risk: entry.risk || "Unknown",
        host: entry.isp || "ProxyIP",
        hostType: "ip"
      }));
      const sorted = [...pool].sort((a, b) => (a.score ?? 999) - (b.score ?? 999));
      const selected = [];
      const seenCountries = /* @__PURE__ */ new Set();
      for (const entry of sorted) {
        const countryKey = entry.country || "Unknown";
        if (!seenCountries.has(countryKey)) {
          seenCountries.add(countryKey);
          selected.push(entry);
        }
      }
      const MIN_TOTAL = 10;
      if (selected.length < MIN_TOTAL) {
        const selectedIds = new Set(selected.map((e) => `${e.host}:${e.ip}`));
        for (const entry of sorted) {
          if (selected.length >= MIN_TOTAL) break;
          const id = `${entry.host}:${entry.ip}`;
          if (!selectedIds.has(id)) {
            selected.push(entry);
            selectedIds.add(id);
          }
        }
      }
      selected.sort((a, b) => (a.score ?? 999) - (b.score ?? 999));
      selected.forEach((entry, i) => {
        const tag = proxyEntryTag(entry, i);
        const overrides = { proxyIP: `${entry.ip}:${entry.port}` };
        const { proto, port } = pickRandomProxyPort(isPagesDeployment);
        links.push(
          buildLink({
            core,
            proto,
            userID,
            hostName,
            address: hostName,
            port,
            tag,
            enhanced,
            overrides
          })
        );
      });
    } catch (e) {
      console.error("ProxyIP pool for subscription failed", e);
    }
  }
  const headers = {
    "Content-Type": "text/plain;charset=utf-8",
    ...buildSubscriptionHeaders(subName)
  };
  return new Response(btoa(links.join("\n")), { headers });
}
__name(handleIpSubscription, "handleIpSubscription");
async function handleMyConnection(request, env, ctx) {
  const clientIP = request.headers.get("CF-Connecting-IP") || "127.0.0.1";
  const cf = request.cf || {};
  let threatScore = null;
  let risk = "Unknown";
  let country = cf.country || "";
  let city = cf.city || "";
  let isp = cf.asOrganization || "";
  try {
    const harmonicaRes = await safeFetch(
      `https://api-serpents.pages.dev/${clientIP}`,
      { headers: API_HEADERS },
      4e3
    );
    if (harmonicaRes.ok) {
      const data = await harmonicaRes.json();
      if (data) {
        const targetObj = data.info || data;
        threatScore = targetObj.score ?? targetObj.fraud_score ?? targetObj.threatScore ?? null;
        if (targetObj.risk) risk = targetObj.risk.charAt(0).toUpperCase() + targetObj.risk.slice(1);
        const details = data.details || {};
        if (!country) country = details.country || "";
        if (!city) city = details.city || "";
        if (!isp) isp = details.isp || details.organization || "";
      }
    }
  } catch (e) {
    console.error("Serpents api my-connection fetch failed:", e.toString());
  }
  if (!country || country === "N/A" || !isp || isp === "N/A") {
    try {
      const fallbackMeta = await fetchFreeIpMeta(clientIP);
      if (fallbackMeta) {
        if (!country || country === "N/A") country = fallbackMeta.country || country;
        if (!city) city = fallbackMeta.city || city;
        if (!isp || isp === "N/A") isp = fallbackMeta.org || isp;
      }
    } catch (e) {
      console.error("my-connection fallback failed:", e.toString());
    }
  }
  return new Response(
    JSON.stringify({
      ip: clientIP,
      country: country || "N/A",
      city: city || "",
      isp: isp || "N/A",
      threatScore,
      risk
    }),
    { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
  );
}
__name(handleMyConnection, "handleMyConnection");
async function handleResolveDomain(request) {
  const url = new URL(request.url);
  const domain = url.searchParams.get("domain");
  if (!domain)
    return new Response(JSON.stringify({ error: "Missing domain" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" };
  if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(domain)) {
    return new Response(JSON.stringify({ ip: domain }), { headers });
  }
  try {
    const dnsRes = await safeFetch(
      `https://1.1.1.1/dns-query?name=${encodeURIComponent(domain)}&type=A`,
      { headers: { accept: "application/dns-json" } },
      4e3
    );
    const dnsData = await dnsRes.json();
    const ipAnswer = dnsData.Answer?.find((a) => a.type === 1);
    return new Response(JSON.stringify({ ip: ipAnswer ? ipAnswer.data : null }), { headers });
  } catch (error) {
    return new Response(JSON.stringify({ ip: null, error: error.toString() }), { headers });
  }
}
__name(handleResolveDomain, "handleResolveDomain");
async function handleProxyHostInfo(request, env, ctx) {
  const url = new URL(request.url);
  const host = url.searchParams.get("host");
  const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" };
  if (!host)
    return new Response(JSON.stringify({ error: true, reason: "Missing host" }), {
      status: 400,
      headers
    });
  try {
    let ip = host;
    if (!/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(host)) {
      const resolved = await resolveIPv4ViaDoH(host);
      if (!resolved)
        return new Response(JSON.stringify({ error: true, reason: "Could not resolve host" }), {
          headers
        });
      ip = resolved;
    }
    const meta = await getIpMeta(ctx, ip);
    return new Response(
      JSON.stringify({
        ip,
        city: meta.city || "",
        country_name: meta.country,
        country_code: meta.countryCode,
        org: meta.org || ""
      }),
      { headers }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: true, reason: error.toString() }), { headers });
  }
}
__name(handleProxyHostInfo, "handleProxyHostInfo");
async function fetchFreeIpMeta(ip) {
  try {
    const res = await safeFetch(`https://ipwho.is/${ip}`, { headers: API_HEADERS }, 4e3);
    if (res.ok) {
      const data = await res.json();
      if (data && data.success !== false) {
        return {
          country: data.country || "Unknown",
          countryCode: (data.country_code || "").toLowerCase(),
          city: data.city || "",
          org: data.connection?.isp || data.connection?.org || ""
        };
      }
    }
  } catch (e) {
    console.error("ipwho.is fallback fetch failed:", e.toString());
  }
  try {
    const res = await safeFetch(`https://ipapi.co/${ip}/json/`, { headers: API_HEADERS }, 4e3);
    if (res.ok) {
      const data = await res.json();
      if (data && !data.error) {
        return {
          country: data.country_name || "Unknown",
          countryCode: (data.country_code || "").toLowerCase(),
          city: data.city || "",
          org: data.org || data.asn || ""
        };
      }
    }
  } catch (e) {
    console.error("ipapi.co fallback fetch failed:", e.toString());
  }
  return null;
}
__name(fetchFreeIpMeta, "fetchFreeIpMeta");
async function FetchIPData(ip) {
  let country = "Unknown";
  let countryCode = "";
  let city = "";
  let org = "";
  let score = 0;
  let risk = "Unknown";
  let harmonicaSuccess = false;
  try {
    const res = await safeFetch(
      `https://cf-connected.pages.dev/${ip}`,
      { headers: API_HEADERS },
      4e3
    );
    if (res.ok) {
      const data = await res.json();
      if (data) {
        harmonicaSuccess = true;
        const info = data.info || {};
        const details = data.details || {};
        score = info.score ?? info.fraud_score ?? info.threatScore ?? 0;
        risk = info.risk ? info.risk.charAt(0).toUpperCase() + info.risk.slice(1) : "Unknown";
        country = details.country || "Unknown";
        countryCode = (details.country_code || "").toLowerCase();
        city = details.city || "";
        org = details.isp || details.organization || "";
      }
    }
  } catch (e) {
    console.error("CF-Connected api \u2014 FetchIPData failed:", e.toString());
  }
  const hasLocationInfo = country && country !== "Unknown";
  if (!harmonicaSuccess || !hasLocationInfo) {
    try {
      const fallbackMeta = await fetchFreeIpMeta(ip);
      if (fallbackMeta) {
        if (!hasLocationInfo) {
          country = fallbackMeta.country || country;
          countryCode = fallbackMeta.countryCode || countryCode;
          city = fallbackMeta.city || city;
          org = fallbackMeta.org || org;
        }
      }
    } catch (e) {
      console.error("FetchIPData fallback failed:", e.toString());
    }
  }
  return {
    country,
    countryCode,
    city,
    org,
    score,
    risk
  };
}
__name(FetchIPData, "FetchIPData");
async function getIpMeta(ctx, ip) {
  const cacheKey = `ipmeta:${ip}`;
  const cached = await cacheGetJson(cacheKey);
  if (cached) return cached;
  const meta = await FetchIPData(ip) || {
    country: "Unknown",
    countryCode: "",
    city: "",
    org: "",
    score: 0,
    risk: "Unknown"
  };
  if (meta.country && meta.country !== "Unknown") await cachePutJson(ctx, cacheKey, meta);
  return meta;
}
__name(getIpMeta, "getIpMeta");
function proxyEntryTag(entry, index) {
  const countryTag = entry.countryCode ? entry.countryCode.toUpperCase() : (entry.country || "XX").slice(0, 2).toUpperCase();
  const flag = countryCodeToFlagEmoji(entry.countryCode);
  const hostTag = entry.hostType === "ip" ? "IP" : "Domain";
  return `${flag}${countryTag}-${hostTag}-${index + 1}`;
}
__name(proxyEntryTag, "proxyEntryTag");
function buildProxyEntryConfigs(entry, hostName, userID, index) {
  const tag = proxyEntryTag(entry, index);
  const proxyIP = `${entry.ip}:${entry.port}`;
  const isPagesDeployment = hostName.endsWith(".pages.dev");
  const xrayPort = pickRandomProxyPort(isPagesDeployment);
  const sbPort = pickRandomProxyPort(isPagesDeployment);
  const xray = buildLink({
    core: "xray",
    proto: xrayPort.proto,
    userID,
    hostName,
    address: hostName,
    port: xrayPort.port,
    enhanced: true,
    tag,
    overrides: { proxyIP }
  });
  const xrayNormal = buildLink({
    core: "xray",
    proto: xrayPort.proto,
    userID,
    hostName,
    address: hostName,
    port: xrayPort.port,
    tag,
    overrides: { proxyIP }
  });
  const sb = buildLink({
    core: "sb",
    proto: sbPort.proto,
    userID,
    hostName,
    address: hostName,
    port: sbPort.port,
    tag,
    overrides: { proxyIP }
  });
  return {
    host: entry.host,
    ip: entry.ip,
    hostType: entry.hostType,
    risk: entry.risk,
    score: entry.score,
    xrayNormalLink: xrayNormal,
    configs: [
      { label: "Xray", link: xray },
      { label: "Singbox", link: sb }
    ]
  };
}
__name(buildProxyEntryConfigs, "buildProxyEntryConfigs");
async function handleProxyIpsInfo(request, cfg, hostName, ctx, env) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "public, max-age=21600"
  };
  try {
    const url = new URL(request.url);
    const forceRefresh = url.searchParams.get("refresh") === "1";
    const cache = caches.default;
    const cacheKey = new Request(
      `https://cf-proxyips-cache.local/${hostName}`
    );
    if (!forceRefresh) {
      const cached = await cache.match(cacheKey);
      if (cached) return cached;
    }
    const dataset = await fetchZizifnProxyPool(ctx);
    const countryMap = /* @__PURE__ */ new Map();
    for (const proxy of dataset.proxies) {
      if (!proxy?.ip || isInIgnoredRange(proxy.ip)) continue;
      const country = proxy.country || "Unknown";
      const countryCode = (country === "Unknown" ? "" : country).toUpperCase();
      if (!countryMap.has(country)) {
        countryMap.set(country, {
          country,
          countryCode,
          hostsMap: /* @__PURE__ */ new Map()
        });
      }
      const countryGroup = countryMap.get(country);
      const host = proxy.isp || "ProxyIP";
      if (!countryGroup.hostsMap.has(host)) {
        countryGroup.hostsMap.set(host, {
          host,
          hostType: "ip",
          entries: []
        });
      }
      countryGroup.hostsMap.get(host).entries.push({
        host,
        ip: proxy.ip,
        port: proxy.port || 443,
        hostType: "ip",
        country,
        countryCode,
        score: typeof proxy.score === "number" ? proxy.score : null,
        risk: proxy.risk || "Unknown"
      });
    }
    const groups = [...countryMap.values()].map((countryGroup) => {
      const hosts = [...countryGroup.hostsMap.values()].map((hostGroup) => {
        const sortedEntries = [...hostGroup.entries].sort(
          (a, b) => (a.score ?? 999) - (b.score ?? 999)
        );
        return {
          host: hostGroup.host,
          hostType: hostGroup.hostType,
          entries: sortedEntries.map(
            (entry, i) => buildProxyEntryConfigs(
              entry,
              hostName,
              cfg.userID,
              i
            )
          )
        };
      }).sort(
        (a, b) => (a.entries[0]?.score ?? 999) - (b.entries[0]?.score ?? 999)
      );
      const lowestEntry = hosts[0]?.entries[0];
      return {
        country: countryGroup.country,
        countryCode: countryGroup.countryCode,
        flag: countryCodeToFlagEmoji(countryGroup.countryCode),
        lowestScore: lowestEntry?.score ?? null,
        lowestRisk: lowestEntry?.risk ?? "Unknown",
        hosts
      };
    }).sort(
      (a, b) => (a.lowestScore ?? 999) - (b.lowestScore ?? 999)
    );
    const response = new Response(JSON.stringify({ groups }), {
      headers
    });
    if (groups.length) {
      ctx.waitUntil(cache.put(cacheKey, response.clone()));
    }
    return response;
  } catch (error) {
    console.error("ProxyIP info failed:", error);
    return new Response(
      JSON.stringify({
        groups: [],
        error: "ProxyIP dataset unavailable"
      }),
      {
        status: 503,
        headers
      }
    );
  }
}
__name(handleProxyIpsInfo, "handleProxyIpsInfo");
async function handleConfigPage(userID, hostName, proxyAddress, workerName, nat64 = true) {
  const dream = buildLink({
    core: "xray",
    proto: "tls",
    userID,
    hostName,
    address: hostName,
    port: 443,
    tag: `${hostName}-Xray`
  });
  const freedom = buildLink({
    core: "sb",
    proto: "tls",
    userID,
    hostName,
    address: hostName,
    port: 443,
    tag: `${hostName}-Singbox`
  });
  const pattng = buildLink({
    core: "xray",
    proto: "tls",
    userID,
    hostName,
    address: hostName,
    port: 443,
    tag: `${hostName}-PTN`,
    enhanced: true
  });
  const nat64On = buildLink({
    core: "xray",
    proto: "tls",
    userID,
    hostName,
    address: hostName,
    port: 443,
    tag: "NAT64",
    overrides: { nat64: true }
  });
  const nat64Off = buildLink({
    core: "xray",
    proto: "tls",
    userID,
    hostName,
    address: hostName,
    port: 443,
    tag: "NAT64",
    overrides: { nat64: false }
  });
  const nat64OnEnhanced = buildLink({
    core: "xray",
    proto: "tls",
    userID,
    hostName,
    address: hostName,
    port: 443,
    tag: "NAT64",
    enhanced: true,
    overrides: { nat64: true }
  });
  const nat64OffEnhanced = buildLink({
    core: "xray",
    proto: "tls",
    userID,
    hostName,
    address: hostName,
    port: 443,
    tag: "NAT64",
    enhanced: true,
    overrides: { nat64: false }
  });
  const settingsUrl = buildSettingsUrl(workerName);
  const workerLabel = hostName.split(".")[0] || "0x00";
  const encodedSubName = encodeURIComponent(workerLabel);
  const subXrayUrlH = `https://${hostName}/xray/${userID}?name=${encodedSubName}`;
  const subXrayUrlV = `https://${hostName}/xray/${userID}#${encodedSubName}`;
  const subXrayUrlVEnhanced = `https://${hostName}/xray-enhanced/${userID}#${encodedSubName}`;
  const subClashUrl = `https://${hostName}/clash/${userID}?name=${encodedSubName}`;
  const subSbUrl = `https://${hostName}/sb/${userID}?name=${encodedSubName}`;
  const subProxyIpsUrl = `https://${hostName}/proxy-ips/${userID}`;
  const finalHTML = getPanelHtml().replace(/{{PROXY_ADDRESS}}/g, proxyAddress).replace(/{{CONFIG_DREAM}}/g, dream).replace(/{{CONFIG_FREEDOM}}/g, freedom).replace(/{{CONFIG_PATTNG}}/g, pattng).replace(/{{NAT64_DEFAULT}}/g, nat64 ? "on" : "off").replace(/{{CONFIG_NAT64_ON_NORMAL}}/g, nat64On).replace(/{{CONFIG_NAT64_ON_ENHANCED}}/g, nat64OnEnhanced).replace(/{{CONFIG_NAT64_OFF_NORMAL}}/g, nat64Off).replace(/{{CONFIG_NAT64_OFF_ENHANCED}}/g, nat64OffEnhanced).replace(/{{URL_PROXYIPS}}/g, subProxyIpsUrl).replace(/{{URL_WORKER_SETTINGS}}/g, settingsUrl).replace(/{{URL_V2RAYNG_ENHANCED}}/g, `${SENS.v2rayng()}${subXrayUrlVEnhanced}`).replace(/{{URL_V2RAYNG}}/g, `${SENS.v2rayng()}${subXrayUrlV}`).replace(/{{URL_CLASH}}/g, `${SENS.clash()}${encodeURIComponent(subClashUrl)}`).replace(/{{URL_HIDDIFY}}/g, `${SENS.hiddify()}${encodeURIComponent(subXrayUrlH)}`).replace(
    /{{URL_EXCLAVE}}/g,
    `${SENS.exclave()}${encodeURIComponent(subSbUrl)}&name=${encodedSubName}`
  );
  return new Response(finalHTML, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
__name(handleConfigPage, "handleConfigPage");

// index.js
var wasmReady = null;
function ensureWasm() {
  if (!wasmReady) {
    wasmReady = __wbg_init({ module_or_path: wasm2 }).catch((e) => {
      wasmReady = null;
      throw e;
    });
  }
  return wasmReady;
}
__name(ensureWasm, "ensureWasm");
function notFoundPage(hostName, workerName) {
  const settingsUrl = buildSettingsUrl(workerName);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Oops. Not Found</title>
<style>
  body {
    background: #0d1117;
    color: #c9d1d9;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    text-align: center;
    padding: 24px;
  }
  .box { max-width: 480px; }
  h1 { color: #966600; font-size: 22px; margin-bottom: 12px; }
  p { line-height: 1.6; color: #8b949e; }
  code {
    background: #161b22;
    border: 1px solid #30363d;
    color: #966600;
    padding: 2px 6px;
    border-radius: 4px;
  }
  a.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: #161b22;
    border: 1px solid #966600;
    border-radius: 8px;
    color: #966600;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    margin-top: 20px;
  }
</style>
</head>
<body>
  <div class="box">
    <h1>No UUID found in this URL</h1>
    <p>This worker needs a valid UUID in the path to know who you are.</p>
    <p>Try visiting <code>https://${hostName}/&lt;your-uuid&gt;</code></p>
    <a class="btn" href="${settingsUrl}" target="_blank" rel="noopener noreferrer">\u{1F511} Find your UUID on Cloudflare</a>
  </div>
</body>
</html>`;
}
__name(notFoundPage, "notFoundPage");
var index_default = {
  async fetch(request, env, ctx) {
    try {
      const cfg = Config.fromEnv(env);
      const url = new URL(request.url);
      const upgradeHeader = request.headers.get("Upgrade");
      if (upgradeHeader && upgradeHeader.toLowerCase() === "websocket") {
        try {
          await ensureWasm();
        } catch (wasmErr) {
          console.error("WASM module initialization failed:", wasmErr);
          return new Response(`WASM Error: ${wasmErr.message || wasmErr}`, { status: 500 });
        }
        return await ProtocolOverWSHandler(request, {
          userID: cfg.userID,
          proxyPool: cfg.proxyPool,
          nat64: cfg.nat64
        });
      }
      if (url.pathname === "/resolve-domain") return await handleResolveDomain(request);
      if (url.pathname === "/proxy-host-info") return await handleProxyHostInfo(request, env, ctx);
      if (url.pathname === "/my-connection") return await handleMyConnection(request, env, ctx);
      if (url.pathname.startsWith(`/proxy-ips/${cfg.userID}`))
        return await handleProxyIpsInfo(request, cfg, url.hostname, ctx, env);
      if (url.pathname.startsWith(`/xray-enhanced/${cfg.userID}`))
        return await handleIpSubscription(request, "xray", cfg.userID, url.hostname, ctx, true, cfg, env);
      if (url.pathname.startsWith(`/xray/${cfg.userID}`))
        return await handleIpSubscription(request, "xray", cfg.userID, url.hostname, ctx, false, cfg, env);
      if (url.pathname.startsWith(`/sb/${cfg.userID}`))
        return await handleIpSubscription(request, "sb", cfg.userID, url.hostname, ctx, false, cfg, env);
      if (url.pathname.startsWith(`/clash/${cfg.userID}`))
        return await handleClashConfig(request, cfg.userID, url.hostname, ctx);
      if (url.pathname.startsWith(`/${cfg.userID}`))
        return await handleConfigPage(
          cfg.userID,
          url.hostname,
          cfg.proxyAddress,
          cfg.workerName,
          cfg.nat64
        );
      return new Response(notFoundPage(url.hostname, cfg.workerName), {
        status: 404,
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    } catch (err) {
      console.error(err.stack || err);
      return new Response(`Worker Logic Error: ${err.message}
${err.stack}`, {
        status: 500,
        headers: { "Content-Type": "text/plain" }
      });
    }
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
