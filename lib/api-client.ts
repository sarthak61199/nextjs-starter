import { routes } from "@/app/api/[[...route]]/route";
import { hc } from "hono/client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const client = hc<typeof routes>("");
export type Client = typeof client;

const hcWithType = (...args: Parameters<typeof hc>): Client =>
  hc<typeof routes>(...args);

const apiClient = hcWithType("http://localhost:3000/");

export default apiClient;
