// Generated by Xata Codegen 0.18.0. Please do not edit.
import { buildClient } from "@xata.io/client";
/** @typedef { import('./types').SchemaTables } SchemaTables */
/** @type { SchemaTables } */
const tables = [
  {
    name: "Users",
    columns: [
      { name: "first_name", type: "string" },
      { name: "last_name", type: "string" },
      { name: "other_name", type: "string" },
      { name: "password", type: "string" },
      { name: "phone", type: "int" },
      { name: "email", type: "email" },
      { name: "address", type: "string" },
      { name: "found", type: "int" },
    ],
  },
  { name: "Assets", columns: [] },
  { name: "Gadgets", columns: [] },
  { name: "Vehicles", columns: [] },
];
/** @type { import('@xata.io/client').ClientConstructor<{}> } */
const DatabaseClient = buildClient();
const defaultOptions = {
  databaseURL:
    "https://Retrac-Nigeria-s-workspace-makigu.us-east-1.xata.sh/db/Development",
};
/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */
/** @extends DatabaseClient<DatabaseSchema> */
export class XataClient extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables);
  }
}
let instance = undefined;
/** @type { () => XataClient } */
export const getXataClient = () => {
  if (instance) return instance;
  instance = new XataClient();
  return instance;
};
