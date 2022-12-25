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
        readonly name: "address";
        readonly type: "string";
      },
      {
        readonly name: "found";
        readonly type: "int";
      },
      {
        readonly name: "vehicles";
        readonly type: "link";
        readonly link: {
          readonly table: "Gadgets";
        };
        readonly unique: true;
      },
      {
        readonly name: "email";
        readonly type: "email";
        readonly unique: true;
      },
      {
        readonly name: "gadgets";
        readonly type: "link";
        readonly link: {
          readonly table: "Vehicles";
        };
        readonly unique: true;
      }
    ];
  },
  {
    readonly name: "Vehicles";
    readonly columns: readonly [
      {
        readonly name: "brand";
        readonly type: "string";
      },
      {
        readonly name: "model";
        readonly type: "string";
      },
      {
        readonly name: "year";
        readonly type: "int";
      },
      {
        readonly name: "description";
        readonly type: "text";
      },
      {
        readonly name: "status";
        readonly type: "string";
      },
      {
        readonly name: "category";
        readonly type: "string";
      },
      {
        readonly name: "images";
        readonly type: "multiple";
      },
      {
        readonly name: "color";
        readonly type: "string";
      },
      {
        readonly name: "location";
        readonly type: "link";
        readonly link: {
          readonly table: "Asset-location";
        };
        readonly unique: true;
      },
      {
        readonly name: "plate_no";
        readonly type: "string";
        readonly unique: true;
      },
      {
        readonly name: "vin";
        readonly type: "string";
        readonly unique: true;
      },
      {
        readonly name: "chasis_no";
        readonly type: "string";
        readonly unique: true;
      },
      {
        readonly name: "markings";
        readonly type: "text";
      }
    ];
  },
  {
    readonly name: "Gadgets";
    readonly columns: readonly [
      {
        readonly name: "location";
        readonly type: "link";
        readonly link: {
          readonly table: "Asset-location";
        };
        readonly unique: true;
      },
      {
        readonly name: "brand";
        readonly type: "string";
      },
      {
        readonly name: "year";
        readonly type: "int";
      },
      {
        readonly name: "model";
        readonly type: "string";
      },
      {
        readonly name: "status";
        readonly type: "string";
      },
      {
        readonly name: "category";
        readonly type: "string";
      },
      {
        readonly name: "color";
        readonly type: "string";
      },
      {
        readonly name: "description";
        readonly type: "text";
      },
      {
        readonly name: "images";
        readonly type: "multiple";
      },
      {
        readonly name: "serial_no";
        readonly type: "string";
        readonly unique: true;
      },
      {
        readonly name: "imei";
        readonly type: "multiple";
      },
      {
        readonly name: "markings";
        readonly type: "text";
      },
      {
        readonly name: "receipt";
        readonly type: "string";
        readonly unique: true;
      }
    ];
  },
  {
    readonly name: "Asset-location";
    readonly columns: readonly [
      {
        readonly name: "state";
        readonly type: "string";
      },
      {
        readonly name: "lga";
        readonly type: "string";
      },
      {
        readonly name: "town";
        readonly type: "string";
      }
    ];
  }
];
export declare type SchemaTables = typeof tables;
export declare type InferredTypes = SchemaInference<SchemaTables>;
export declare type Users = InferredTypes["Users"];
export declare type UsersRecord = Users & XataRecord;
export declare type Vehicles = InferredTypes["Vehicles"];
export declare type VehiclesRecord = Vehicles & XataRecord;
export declare type Gadgets = InferredTypes["Gadgets"];
export declare type GadgetsRecord = Gadgets & XataRecord;
export declare type AssetLocation = InferredTypes["Asset-location"];
export declare type AssetLocationRecord = AssetLocation & XataRecord;
export declare type DatabaseSchema = {
  Users: UsersRecord;
  Vehicles: VehiclesRecord;
  Gadgets: GadgetsRecord;
  "Asset-location": AssetLocationRecord;
};
declare const DatabaseClient: any;
export declare class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions);
}
export declare const getXataClient: () => XataClient;
export {};
