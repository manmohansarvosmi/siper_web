/// <reference types="vinxi/types/server" />
import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";

// In this version of TanStack Start, createStartHandler receives the render
// handler directly. The router is wired up lazily via the
// #tanstack-router-entry virtual alias -> src/router.tsx (getRouter export).
export default createStartHandler(defaultStreamHandler);
