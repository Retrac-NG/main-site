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
      { name: "address", type: "string" },
      { name: "found", type: "int" },
      { name: "email", type: "email", unique: true },
      {
        name: "vehicles",
        type: "link",
        link: { table: "Vehicles" },
        unique: true,
      },
      { name: "gadgets", type: "link", link: { table: "Gadgets" } },
    ],
  },
  {
    name: "Vehicles",
    columns: [
      { name: "brand", type: "string" },
      { name: "model", type: "string" },
      { name: "year", type: "int" },
      { name: "description", type: "text" },
      { name: "status", type: "string" },
      { name: "category", type: "string" },
      { name: "images", type: "multiple" },
      { name: "color", type: "string" },
      {
        name: "location",
        type: "link",
        link: { table: "Asset-location" },
        unique: true,
      },
      { name: "plate_no", type: "string", unique: true },
      { name: "vin", type: "string", unique: true },
      { name: "chasis_no", type: "string", unique: true },
      { name: "markings", type: "text" },
    ],
  },
  {
    name: "Gadgets",
    columns: [
      {
        name: "location",
        type: "link",
        link: { table: "Asset-location" },
        unique: true,
      },
      { name: "brand", type: "string" },
      { name: "year", type: "int" },
      { name: "model", type: "string" },
      { name: "status", type: "string" },
      { name: "category", type: "string" },
      { name: "color", type: "string" },
      { name: "description", type: "text" },
      { name: "images", type: "multiple" },
      { name: "serial_no", type: "string", unique: true },
      { name: "imei", type: "multiple" },
      { name: "markings", type: "text" },
      { name: "receipt", type: "string", unique: true },
    ],
  },
  {
    name: "Asset-location",
    columns: [
      { name: "state", type: "string" },
      { name: "lga", type: "string" },
      { name: "town", type: "string" },
    ],
  },
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
