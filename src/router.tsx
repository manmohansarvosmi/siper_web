import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true,
  });

  return router;
}

// Required by @tanstack/start-client-core — it imports `getRouter` from
// the #tanstack-router-entry virtual module which resolves to this file.
export { createRouter as getRouter };

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
