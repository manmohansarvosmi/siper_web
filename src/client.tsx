/// <reference types="vinxi/types/client" />
import { StartClient, hydrateStart } from "@tanstack/react-start/client";
import { createRouter } from "./router";

const router = createRouter();

hydrateStart(<StartClient router={router} />);
