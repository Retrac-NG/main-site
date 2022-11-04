import {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";
declare const tables: readonly [
  {
    readonly name: "Users";
    readonly columns: readonly [
      {
        readonly name: "first_name";
        readonly type: "string";
      },
      {
        readonly name: "last_name";
        readonly type: "string";
      },
      {
        readonly name: "other_name";
        readonly type: "string";
      },
      {
        readonly name: "password";
        readonly type: "string";
      },
      {
        readonly name: "phone";
        readonly type: "int";
      },
      {
        readonly name: "email";
        readonly type: "email";
      },
      {
        readonly name: "address";
        readonly type: "string";
      },
      {
        readonly name: "found";
        readonly type: "int";
      }
    ];
  },
  {
    readonly name: "Assets";
    readonly columns: readonly [];
  },
  {
    readonly name: "Gadgets";
    readonly columns: readonly [];
  },
  {
    readonly name: "Vehicles";
    readonly columns: readonly [];
  }
];
export declare type SchemaTables = typeof tables;
export declare type InferredTypes = SchemaInference<SchemaTables>;
export declare type Users = InferredTypes["Users"];
export declare type UsersRecord = Users & XataRecord;
export declare type Assets = InferredTypes["Assets"];
export declare type AssetsRecord = Assets & XataRecord;
export declare type Gadgets = InferredTypes["Gadgets"];
export declare type GadgetsRecord = Gadgets & XataRecord;
export declare type Vehicles = InferredTypes["Vehicles"];
export declare type VehiclesRecord = Vehicles & XataRecord;
export declare type DatabaseSchema = {
  Users: UsersRecord;
  Assets: AssetsRecord;
  Gadgets: GadgetsRecord;
  Vehicles: VehiclesRecord;
};
declare const DatabaseClient: any;
export declare class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions);
}
export declare const getXataClient: () => XataClient;
export {};
