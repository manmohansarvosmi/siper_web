/// <reference types="vinxi/types/server" />
import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";

// createStartHandler returns (request, requestOpts) => Response.
// The TanStack Start dev-server plugin (and Cloudflare Workers) expect the
// default export to be { fetch: Function }, not a bare function.
const handler = createStartHandler(defaultStreamHandler);
export default { fetch: handler };
