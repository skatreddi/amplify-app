/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateVehicle: OnCreateVehicleSubscription;
  onUpdateVehicle: OnUpdateVehicleSubscription;
  onDeleteVehicle: OnDeleteVehicleSubscription;
  onCreateMaintainance: OnCreateMaintainanceSubscription;
  onUpdateMaintainance: OnUpdateMaintainanceSubscription;
  onDeleteMaintainance: OnDeleteMaintainanceSubscription;
};

export type CreateVehicleInput = {
  id?: string | null;
  VIN: string;
  Manufacturer: string;
  ModelYear: string;
  OdoMiles?: number | null;
  Region?: string | null;
  Vocation?: string | null;
  FleetName?: string | null;
  AdditionalParameter?: string | null;
  EngSerialNum: number;
  EngManufacturer: string;
  EngModel: string;
  EngModelYear: string;
  FuelType?: string | null;
  Displacement?: number | null;
  EngAdditionalParameter?: string | null;
  TransmissonType: string;
  TransManufacturer: string;
  TransModel: string;
  Hybrid?: string | null;
  DOC?: boolean | null;
  TWC?: boolean | null;
  SCR?: boolean | null;
  PMTrap?: boolean | null;
};

export type ModelVehicleConditionInput = {
  VIN?: ModelStringInput | null;
  Manufacturer?: ModelStringInput | null;
  ModelYear?: ModelStringInput | null;
  OdoMiles?: ModelIntInput | null;
  Region?: ModelStringInput | null;
  Vocation?: ModelStringInput | null;
  FleetName?: ModelStringInput | null;
  AdditionalParameter?: ModelStringInput | null;
  EngSerialNum?: ModelIntInput | null;
  EngManufacturer?: ModelStringInput | null;
  EngModel?: ModelStringInput | null;
  EngModelYear?: ModelStringInput | null;
  FuelType?: ModelStringInput | null;
  Displacement?: ModelIntInput | null;
  EngAdditionalParameter?: ModelStringInput | null;
  TransmissonType?: ModelStringInput | null;
  TransManufacturer?: ModelStringInput | null;
  TransModel?: ModelStringInput | null;
  Hybrid?: ModelStringInput | null;
  DOC?: ModelBooleanInput | null;
  TWC?: ModelBooleanInput | null;
  SCR?: ModelBooleanInput | null;
  PMTrap?: ModelBooleanInput | null;
  and?: Array<ModelVehicleConditionInput | null> | null;
  or?: Array<ModelVehicleConditionInput | null> | null;
  not?: ModelVehicleConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Vehicle = {
  __typename: "Vehicle";
  id: string;
  VIN: string;
  Manufacturer: string;
  ModelYear: string;
  OdoMiles?: number | null;
  Region?: string | null;
  Vocation?: string | null;
  FleetName?: string | null;
  AdditionalParameter?: string | null;
  EngSerialNum: number;
  EngManufacturer: string;
  EngModel: string;
  EngModelYear: string;
  FuelType?: string | null;
  Displacement?: number | null;
  EngAdditionalParameter?: string | null;
  TransmissonType: string;
  TransManufacturer: string;
  TransModel: string;
  Hybrid?: string | null;
  DOC?: boolean | null;
  TWC?: boolean | null;
  SCR?: boolean | null;
  PMTrap?: boolean | null;
  maintainances?: ModelMaintainanceConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelMaintainanceConnection = {
  __typename: "ModelMaintainanceConnection";
  items?: Array<Maintainance | null> | null;
  nextToken?: string | null;
};

export type Maintainance = {
  __typename: "Maintainance";
  id: string;
  MaintainanceID: string;
  Type: string;
  System: string;
  Component: string;
  Comments: string;
  vehicle?: Vehicle | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVehicleInput = {
  VIN?: string | null;
  Manufacturer?: string | null;
  ModelYear?: string | null;
  OdoMiles?: number | null;
  Region?: string | null;
  Vocation?: string | null;
  FleetName?: string | null;
  AdditionalParameter?: string | null;
  EngSerialNum?: number | null;
  EngManufacturer?: string | null;
  EngModel?: string | null;
  EngModelYear?: string | null;
  FuelType?: string | null;
  Displacement?: number | null;
  EngAdditionalParameter?: string | null;
  TransmissonType?: string | null;
  TransManufacturer?: string | null;
  TransModel?: string | null;
  Hybrid?: string | null;
  DOC?: boolean | null;
  TWC?: boolean | null;
  SCR?: boolean | null;
  PMTrap?: boolean | null;
};

export type DeleteVehicleInput = {
  id: string;
};

export type CreateMaintainanceInput = {
  id?: string | null;
  MaintainanceID: string;
  Type: string;
  System: string;
  Component: string;
  Comments: string;
  maintainanceVehicleId?: string | null;
};

export type ModelMaintainanceConditionInput = {
  MaintainanceID?: ModelIDInput | null;
  Type?: ModelStringInput | null;
  System?: ModelStringInput | null;
  Component?: ModelStringInput | null;
  Comments?: ModelStringInput | null;
  and?: Array<ModelMaintainanceConditionInput | null> | null;
  or?: Array<ModelMaintainanceConditionInput | null> | null;
  not?: ModelMaintainanceConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateMaintainanceInput = {
  MaintainanceID?: string | null;
  Type?: string | null;
  System?: string | null;
  Component?: string | null;
  Comments?: string | null;
  maintainanceVehicleId?: string | null;
};

export type DeleteMaintainanceInput = {
  id: string;
};

export type ModelVehicleFilterInput = {
  VIN?: ModelStringInput | null;
  Manufacturer?: ModelStringInput | null;
  ModelYear?: ModelStringInput | null;
  OdoMiles?: ModelIntInput | null;
  Region?: ModelStringInput | null;
  Vocation?: ModelStringInput | null;
  FleetName?: ModelStringInput | null;
  AdditionalParameter?: ModelStringInput | null;
  EngSerialNum?: ModelIntInput | null;
  EngManufacturer?: ModelStringInput | null;
  EngModel?: ModelStringInput | null;
  EngModelYear?: ModelStringInput | null;
  FuelType?: ModelStringInput | null;
  Displacement?: ModelIntInput | null;
  EngAdditionalParameter?: ModelStringInput | null;
  TransmissonType?: ModelStringInput | null;
  TransManufacturer?: ModelStringInput | null;
  TransModel?: ModelStringInput | null;
  Hybrid?: ModelStringInput | null;
  DOC?: ModelBooleanInput | null;
  TWC?: ModelBooleanInput | null;
  SCR?: ModelBooleanInput | null;
  PMTrap?: ModelBooleanInput | null;
  and?: Array<ModelVehicleFilterInput | null> | null;
  or?: Array<ModelVehicleFilterInput | null> | null;
  not?: ModelVehicleFilterInput | null;
};

export type ModelVehicleConnection = {
  __typename: "ModelVehicleConnection";
  items?: Array<Vehicle | null> | null;
  nextToken?: string | null;
};

export type ModelMaintainanceFilterInput = {
  MaintainanceID?: ModelIDInput | null;
  Type?: ModelStringInput | null;
  System?: ModelStringInput | null;
  Component?: ModelStringInput | null;
  Comments?: ModelStringInput | null;
  and?: Array<ModelMaintainanceFilterInput | null> | null;
  or?: Array<ModelMaintainanceFilterInput | null> | null;
  not?: ModelMaintainanceFilterInput | null;
};

export type CreateVehicleMutation = {
  __typename: "Vehicle";
  id: string;
  VIN: string;
  Manufacturer: string;
  ModelYear: string;
  OdoMiles?: number | null;
  Region?: string | null;
  Vocation?: string | null;
  FleetName?: string | null;
  AdditionalParameter?: string | null;
  EngSerialNum: number;
  EngManufacturer: string;
  EngModel: string;
  EngModelYear: string;
  FuelType?: string | null;
  Displacement?: number | null;
  EngAdditionalParameter?: string | null;
  TransmissonType: string;
  TransManufacturer: string;
  TransModel: string;
  Hybrid?: string | null;
  DOC?: boolean | null;
  TWC?: boolean | null;
  SCR?: boolean | null;
  PMTrap?: boolean | null;
  maintainances?: {
    __typename: "ModelMaintainanceConnection";
    items?: Array<{
      __typename: "Maintainance";
      id: string;
      MaintainanceID: string;
      Type: string;
      System: string;
      Component: string;
      Comments: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVehicleMutation = {
  __typename: "Vehicle";
  id: string;
  VIN: string;
  Manufacturer: string;
  ModelYear: string;
  OdoMiles?: number | null;
  Region?: string | null;
  Vocation?: string | null;
  FleetName?: string | null;
  AdditionalParameter?: string | null;
  EngSerialNum: number;
  EngManufacturer: string;
  EngModel: string;
  EngModelYear: string;
  FuelType?: string | null;
  Displacement?: number | null;
  EngAdditionalParameter?: string | null;
  TransmissonType: string;
  TransManufacturer: string;
  TransModel: string;
  Hybrid?: string | null;
  DOC?: boolean | null;
  TWC?: boolean | null;
  SCR?: boolean | null;
  PMTrap?: boolean | null;
  maintainances?: {
    __typename: "ModelMaintainanceConnection";
    items?: Array<{
      __typename: "Maintainance";
      id: string;
      MaintainanceID: string;
      Type: string;
      System: string;
      Component: string;
      Comments: string;
      createdAt: string;
      updatedAt: string;      
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteVehicleMutation = {
  __typename: "Vehicle";
  id: string;
  VIN: string;
  Manufacturer: string;
  ModelYear: string;
  OdoMiles?: number | null;
  Region?: string | null;
  Vocation?: string | null;
  FleetName?: string | null;
  AdditionalParameter?: string | null;
  EngSerialNum: number;
  EngManufacturer: string;
  EngModel: string;
  EngModelYear: string;
  FuelType?: string | null;
  Displacement?: number | null;
  EngAdditionalParameter?: string | null;
  TransmissonType: string;
  TransManufacturer: string;
  TransModel: string;
  Hybrid?: string | null;
  DOC?: boolean | null;
  TWC?: boolean | null;
  SCR?: boolean | null;
  PMTrap?: boolean | null;
  maintainances?: {
    __typename: "ModelMaintainanceConnection";
    items?: Array<{
      __typename: "Maintainance";
      id: string;
      MaintainanceID: string;
      Type: string;
      System: string;
      Component: string;
      Comments: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateMaintainanceMutation = {
  __typename: "Maintainance";
  id: string;
  MaintainanceID: string;
  Type: string;
  System: string;
  Component: string;
  Comments: string;
  vehicle?: {
    __typename: "Vehicle";
    id: string;
    VIN: string;
    Manufacturer: string;
    ModelYear: string;
    OdoMiles?: number | null;
    Region?: string | null;
    Vocation?: string | null;
    FleetName?: string | null;
    AdditionalParameter?: string | null;
    EngSerialNum: number;
    EngManufacturer: string;
    EngModel: string;
    EngModelYear: string;
    FuelType?: string | null;
    Displacement?: number | null;
    EngAdditionalParameter?: string | null;
    TransmissonType: string;
    TransManufacturer: string;
    TransModel: string;
    Hybrid?: string | null;
    DOC?: boolean | null;
    TWC?: boolean | null;
    SCR?: boolean | null;
    PMTrap?: boolean | null;
    maintainances?: {
      __typename: "ModelMaintainanceConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMaintainanceMutation = {
  __typename: "Maintainance";
  id: string;
  MaintainanceID: string;
  Type: string;
  System: string;
  Component: string;
  Comments: string;
  vehicle?: {
    __typename: "Vehicle";
    id: string;
    VIN: string;
    Manufacturer: string;
    ModelYear: string;
    OdoMiles?: number | null;
    Region?: string | null;
    Vocation?: string | null;
    FleetName?: string | null;
    AdditionalParameter?: string | null;
    EngSerialNum: number;
    EngManufacturer: string;
    EngModel: string;
    EngModelYear: string;
    FuelType?: string | null;
    Displacement?: number | null;
    EngAdditionalParameter?: string | null;
    TransmissonType: string;
    TransManufacturer: string;
    TransModel: string;
    Hybrid?: string | null;
    DOC?: boolean | null;
    TWC?: boolean | null;
    SCR?: boolean | null;
    PMTrap?: boolean | null;
    maintainances?: {
      __typename: "ModelMaintainanceConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteMaintainanceMutation = {
  __typename: "Maintainance";
  id: string;
  MaintainanceID: string;
  Type: string;
  System: string;
  Component: string;
  Comments: string;
  vehicle?: {
    __typename: "Vehicle";
    id: string;
    VIN: string;
    Manufacturer: string;
    ModelYear: string;
    OdoMiles?: number | null;
    Region?: string | null;
    Vocation?: string | null;
    FleetName?: string | null;
    AdditionalParameter?: string | null;
    EngSerialNum: number;
    EngManufacturer: string;
    EngModel: string;
    EngModelYear: string;
    FuelType?: string | null;
    Displacement?: number | null;
    EngAdditionalParameter?: string | null;
    TransmissonType: string;
    TransManufacturer: string;
    TransModel: string;
    Hybrid?: string | null;
    DOC?: boolean | null;
    TWC?: boolean | null;
    SCR?: boolean | null;
    PMTrap?: boolean | null;
    maintainances?: {
      __typename: "ModelMaintainanceConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetVehicleQuery = {
  __typename: "Vehicle";
  id: string;
  VIN: string;
  Manufacturer: string;
  ModelYear: string;
  OdoMiles?: number | null;
  Region?: string | null;
  Vocation?: string | null;
  FleetName?: string | null;
  AdditionalParameter?: string | null;
  EngSerialNum: number;
  EngManufacturer: string;
  EngModel: string;
  EngModelYear: string;
  FuelType?: string | null;
  Displacement?: number | null;
  EngAdditionalParameter?: string | null;
  TransmissonType: string;
  TransManufacturer: string;
  TransModel: string;
  Hybrid?: string | null;
  DOC?: boolean | null;
  TWC?: boolean | null;
  SCR?: boolean | null;
  PMTrap?: boolean | null;
  maintainances?: {
    __typename: "ModelMaintainanceConnection";
    items?: Array<{
      __typename: "Maintainance";
      id: string;
      MaintainanceID: string;
      Type: string;
      System: string;
      Component: string;
      Comments: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListVehiclesQuery = {
  __typename: "ModelVehicleConnection";
  items?: Array<{
    __typename: "Vehicle";
    id: string;
    VIN: string;
    Manufacturer: string;
    ModelYear: string;
    OdoMiles?: number | null;
    Region?: string | null;
    Vocation?: string | null;
    FleetName?: string | null;
    AdditionalParameter?: string | null;
    EngSerialNum: number;
    EngManufacturer: string;
    EngModel: string;
    EngModelYear: string;
    FuelType?: string | null;
    Displacement?: number | null;
    EngAdditionalParameter?: string | null;
    TransmissonType: string;
    TransManufacturer: string;
    TransModel: string;
    Hybrid?: string | null;
    DOC?: boolean | null;
    TWC?: boolean | null;
    SCR?: boolean | null;
    PMTrap?: boolean | null;
    maintainances?: {
      __typename: "ModelMaintainanceConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetMaintainanceQuery = {
  __typename: "Maintainance";
  id: string;
  MaintainanceID: string;
  Type: string;
  System: string;
  Component: string;
  Comments: string;
  vehicle?: {
    __typename: "Vehicle";
    id: string;
    VIN: string;
    Manufacturer: string;
    ModelYear: string;
    OdoMiles?: number | null;
    Region?: string | null;
    Vocation?: string | null;
    FleetName?: string | null;
    AdditionalParameter?: string | null;
    EngSerialNum: number;
    EngManufacturer: string;
    EngModel: string;
    EngModelYear: string;
    FuelType?: string | null;
    Displacement?: number | null;
    EngAdditionalParameter?: string | null;
    TransmissonType: string;
    TransManufacturer: string;
    TransModel: string;
    Hybrid?: string | null;
    DOC?: boolean | null;
    TWC?: boolean | null;
    SCR?: boolean | null;
    PMTrap?: boolean | null;
    maintainances?: {
      __typename: "ModelMaintainanceConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListMaintainancesQuery = {
  __typename: "ModelMaintainanceConnection";
  items?: Array<{
    __typename: "Maintainance";
    id: string;
    MaintainanceID: string;
    Type: string;
    System: string;
    Component: string;
    Comments: string;
    vehicle?: {
      __typename: "Vehicle";
      id: string;
      VIN: string;
      Manufacturer: string;
      ModelYear: string;
      OdoMiles?: number | null;
      Region?: string | null;
      Vocation?: string | null;
      FleetName?: string | null;
      AdditionalParameter?: string | null;
      EngSerialNum: number;
      EngManufacturer: string;
      EngModel: string;
      EngModelYear: string;
      FuelType?: string | null;
      Displacement?: number | null;
      EngAdditionalParameter?: string | null;
      TransmissonType: string;
      TransManufacturer: string;
      TransModel: string;
      Hybrid?: string | null;
      DOC?: boolean | null;
      TWC?: boolean | null;
      SCR?: boolean | null;
      PMTrap?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateVehicleSubscription = {
  __typename: "Vehicle";
  id: string;
  VIN: string;
  Manufacturer: string;
  ModelYear: string;
  OdoMiles?: number | null;
  Region?: string | null;
  Vocation?: string | null;
  FleetName?: string | null;
  AdditionalParameter?: string | null;
  EngSerialNum: number;
  EngManufacturer: string;
  EngModel: string;
  EngModelYear: string;
  FuelType?: string | null;
  Displacement?: number | null;
  EngAdditionalParameter?: string | null;
  TransmissonType: string;
  TransManufacturer: string;
  TransModel: string;
  Hybrid?: string | null;
  DOC?: boolean | null;
  TWC?: boolean | null;
  SCR?: boolean | null;
  PMTrap?: boolean | null;
  maintainances?: {
    __typename: "ModelMaintainanceConnection";
    items?: Array<{
      __typename: "Maintainance";
      id: string;
      MaintainanceID: string;
      Type: string;
      System: string;
      Component: string;
      Comments: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateVehicleSubscription = {
  __typename: "Vehicle";
  id: string;
  VIN: string;
  Manufacturer: string;
  ModelYear: string;
  OdoMiles?: number | null;
  Region?: string | null;
  Vocation?: string | null;
  FleetName?: string | null;
  AdditionalParameter?: string | null;
  EngSerialNum: number;
  EngManufacturer: string;
  EngModel: string;
  EngModelYear: string;
  FuelType?: string | null;
  Displacement?: number | null;
  EngAdditionalParameter?: string | null;
  TransmissonType: string;
  TransManufacturer: string;
  TransModel: string;
  Hybrid?: string | null;
  DOC?: boolean | null;
  TWC?: boolean | null;
  SCR?: boolean | null;
  PMTrap?: boolean | null;
  maintainances?: {
    __typename: "ModelMaintainanceConnection";
    items?: Array<{
      __typename: "Maintainance";
      id: string;
      MaintainanceID: string;
      Type: string;
      System: string;
      Component: string;
      Comments: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteVehicleSubscription = {
  __typename: "Vehicle";
  id: string;
  VIN: string;
  Manufacturer: string;
  ModelYear: string;
  OdoMiles?: number | null;
  Region?: string | null;
  Vocation?: string | null;
  FleetName?: string | null;
  AdditionalParameter?: string | null;
  EngSerialNum: number;
  EngManufacturer: string;
  EngModel: string;
  EngModelYear: string;
  FuelType?: string | null;
  Displacement?: number | null;
  EngAdditionalParameter?: string | null;
  TransmissonType: string;
  TransManufacturer: string;
  TransModel: string;
  Hybrid?: string | null;
  DOC?: boolean | null;
  TWC?: boolean | null;
  SCR?: boolean | null;
  PMTrap?: boolean | null;
  maintainances?: {
    __typename: "ModelMaintainanceConnection";
    items?: Array<{
      __typename: "Maintainance";
      id: string;
      MaintainanceID: string;
      Type: string;
      System: string;
      Component: string;
      Comments: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateMaintainanceSubscription = {
  __typename: "Maintainance";
  id: string;
  MaintainanceID: string;
  Type: string;
  System: string;
  Component: string;
  Comments: string;
  vehicle?: {
    __typename: "Vehicle";
    id: string;
    VIN: string;
    Manufacturer: string;
    ModelYear: string;
    OdoMiles?: number | null;
    Region?: string | null;
    Vocation?: string | null;
    FleetName?: string | null;
    AdditionalParameter?: string | null;
    EngSerialNum: number;
    EngManufacturer: string;
    EngModel: string;
    EngModelYear: string;
    FuelType?: string | null;
    Displacement?: number | null;
    EngAdditionalParameter?: string | null;
    TransmissonType: string;
    TransManufacturer: string;
    TransModel: string;
    Hybrid?: string | null;
    DOC?: boolean | null;
    TWC?: boolean | null;
    SCR?: boolean | null;
    PMTrap?: boolean | null;
    maintainances?: {
      __typename: "ModelMaintainanceConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateMaintainanceSubscription = {
  __typename: "Maintainance";
  id: string;
  MaintainanceID: string;
  Type: string;
  System: string;
  Component: string;
  Comments: string;
  vehicle?: {
    __typename: "Vehicle";
    id: string;
    VIN: string;
    Manufacturer: string;
    ModelYear: string;
    OdoMiles?: number | null;
    Region?: string | null;
    Vocation?: string | null;
    FleetName?: string | null;
    AdditionalParameter?: string | null;
    EngSerialNum: number;
    EngManufacturer: string;
    EngModel: string;
    EngModelYear: string;
    FuelType?: string | null;
    Displacement?: number | null;
    EngAdditionalParameter?: string | null;
    TransmissonType: string;
    TransManufacturer: string;
    TransModel: string;
    Hybrid?: string | null;
    DOC?: boolean | null;
    TWC?: boolean | null;
    SCR?: boolean | null;
    PMTrap?: boolean | null;
    maintainances?: {
      __typename: "ModelMaintainanceConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteMaintainanceSubscription = {
  __typename: "Maintainance";
  id: string;
  MaintainanceID: string;
  Type: string;
  System: string;
  Component: string;
  Comments: string;
  vehicle?: {
    __typename: "Vehicle";
    id: string;
    VIN: string;
    Manufacturer: string;
    ModelYear: string;
    OdoMiles?: number | null;
    Region?: string | null;
    Vocation?: string | null;
    FleetName?: string | null;
    AdditionalParameter?: string | null;
    EngSerialNum: number;
    EngManufacturer: string;
    EngModel: string;
    EngModelYear: string;
    FuelType?: string | null;
    Displacement?: number | null;
    EngAdditionalParameter?: string | null;
    TransmissonType: string;
    TransManufacturer: string;
    TransModel: string;
    Hybrid?: string | null;
    DOC?: boolean | null;
    TWC?: boolean | null;
    SCR?: boolean | null;
    PMTrap?: boolean | null;
    maintainances?: {
      __typename: "ModelMaintainanceConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateVehicle(
    input: CreateVehicleInput,
    condition?: ModelVehicleConditionInput
  ): Promise<CreateVehicleMutation> {
    const statement = `mutation CreateVehicle($input: CreateVehicleInput!, $condition: ModelVehicleConditionInput) {
        createVehicle(input: $input, condition: $condition) {
          __typename
          id
          VIN
          Manufacturer
          ModelYear
          OdoMiles
          Region
          Vocation
          FleetName
          AdditionalParameter
          EngSerialNum
          EngManufacturer
          EngModel
          EngModelYear
          FuelType
          Displacement
          EngAdditionalParameter
          TransmissonType
          TransManufacturer
          TransModel
          Hybrid
          DOC
          TWC
          SCR
          PMTrap
          maintainances {
            __typename
            items {
              __typename
              id
              MaintainanceID
              Type
              System
              Component
              Comments
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVehicleMutation>response.data.createVehicle;
  }
  async UpdateVehicle(
    input: UpdateVehicleInput,
    condition?: ModelVehicleConditionInput
  ): Promise<UpdateVehicleMutation> {
    const statement = `mutation UpdateVehicle($input: UpdateVehicleInput!, $condition: ModelVehicleConditionInput) {
        updateVehicle(input: $input, condition: $condition) {
          __typename
          id
          VIN
          Manufacturer
          ModelYear
          OdoMiles
          Region
          Vocation
          FleetName
          AdditionalParameter
          EngSerialNum
          EngManufacturer
          EngModel
          EngModelYear
          FuelType
          Displacement
          EngAdditionalParameter
          TransmissonType
          TransManufacturer
          TransModel
          Hybrid
          DOC
          TWC
          SCR
          PMTrap
          maintainances {
            __typename
            items {
              __typename
              id
              MaintainanceID
              Type
              System
              Component
              Comments
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVehicleMutation>response.data.updateVehicle;
  }
  async DeleteVehicle(
    input: DeleteVehicleInput,
    condition?: ModelVehicleConditionInput
  ): Promise<DeleteVehicleMutation> {
    const statement = `mutation DeleteVehicle($input: DeleteVehicleInput!, $condition: ModelVehicleConditionInput) {
        deleteVehicle(input: $input, condition: $condition) {
          __typename
          id
          VIN
          Manufacturer
          ModelYear
          OdoMiles
          Region
          Vocation
          FleetName
          AdditionalParameter
          EngSerialNum
          EngManufacturer
          EngModel
          EngModelYear
          FuelType
          Displacement
          EngAdditionalParameter
          TransmissonType
          TransManufacturer
          TransModel
          Hybrid
          DOC
          TWC
          SCR
          PMTrap
          maintainances {
            __typename
            items {
              __typename
              id
              MaintainanceID
              Type
              System
              Component
              Comments
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVehicleMutation>response.data.deleteVehicle;
  }
  async CreateMaintainance(
    input: CreateMaintainanceInput,
    condition?: ModelMaintainanceConditionInput
  ): Promise<CreateMaintainanceMutation> {
    const statement = `mutation CreateMaintainance($input: CreateMaintainanceInput!, $condition: ModelMaintainanceConditionInput) {
        createMaintainance(input: $input, condition: $condition) {
          __typename
          id
          MaintainanceID
          Type
          System
          Component
          Comments
          vehicle {
            __typename
            id
            VIN
            Manufacturer
            ModelYear
            OdoMiles
            Region
            Vocation
            FleetName
            AdditionalParameter
            EngSerialNum
            EngManufacturer
            EngModel
            EngModelYear
            FuelType
            Displacement
            EngAdditionalParameter
            TransmissonType
            TransManufacturer
            TransModel
            Hybrid
            DOC
            TWC
            SCR
            PMTrap
            maintainances {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMaintainanceMutation>response.data.createMaintainance;
  }
  async UpdateMaintainance(
    input: UpdateMaintainanceInput,
    condition?: ModelMaintainanceConditionInput
  ): Promise<UpdateMaintainanceMutation> {
    const statement = `mutation UpdateMaintainance($input: UpdateMaintainanceInput!, $condition: ModelMaintainanceConditionInput) {
        updateMaintainance(input: $input, condition: $condition) {
          __typename
          id
          MaintainanceID
          Type
          System
          Component
          Comments
          vehicle {
            __typename
            id
            VIN
            Manufacturer
            ModelYear
            OdoMiles
            Region
            Vocation
            FleetName
            AdditionalParameter
            EngSerialNum
            EngManufacturer
            EngModel
            EngModelYear
            FuelType
            Displacement
            EngAdditionalParameter
            TransmissonType
            TransManufacturer
            TransModel
            Hybrid
            DOC
            TWC
            SCR
            PMTrap
            maintainances {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMaintainanceMutation>response.data.updateMaintainance;
  }
  async DeleteMaintainance(
    input: DeleteMaintainanceInput,
    condition?: ModelMaintainanceConditionInput
  ): Promise<DeleteMaintainanceMutation> {
    const statement = `mutation DeleteMaintainance($input: DeleteMaintainanceInput!, $condition: ModelMaintainanceConditionInput) {
        deleteMaintainance(input: $input, condition: $condition) {
          __typename
          id
          MaintainanceID
          Type
          System
          Component
          Comments
          vehicle {
            __typename
            id
            VIN
            Manufacturer
            ModelYear
            OdoMiles
            Region
            Vocation
            FleetName
            AdditionalParameter
            EngSerialNum
            EngManufacturer
            EngModel
            EngModelYear
            FuelType
            Displacement
            EngAdditionalParameter
            TransmissonType
            TransManufacturer
            TransModel
            Hybrid
            DOC
            TWC
            SCR
            PMTrap
            maintainances {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMaintainanceMutation>response.data.deleteMaintainance;
  }
  async GetVehicle(id: string): Promise<GetVehicleQuery> {
    const statement = `query GetVehicle($id: ID!) {
        getVehicle(id: $id) {
          __typename
          id
          VIN
          Manufacturer
          ModelYear
          OdoMiles
          Region
          Vocation
          FleetName
          AdditionalParameter
          EngSerialNum
          EngManufacturer
          EngModel
          EngModelYear
          FuelType
          Displacement
          EngAdditionalParameter
          TransmissonType
          TransManufacturer
          TransModel
          Hybrid
          DOC
          TWC
          SCR
          PMTrap
          maintainances {
            __typename
            items {
              __typename
              id
              MaintainanceID
              Type
              System
              Component
              Comments
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVehicleQuery>response.data.getVehicle;
  }
  async ListVehicles(
    filter?: ModelVehicleFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVehiclesQuery> {
    const statement = `query ListVehicles($filter: ModelVehicleFilterInput, $limit: Int, $nextToken: String) {
        listVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            VIN
            Manufacturer
            ModelYear
            OdoMiles
            Region
            Vocation
            FleetName
            AdditionalParameter
            EngSerialNum
            EngManufacturer
            EngModel
            EngModelYear
            FuelType
            Displacement
            EngAdditionalParameter
            TransmissonType
            TransManufacturer
            TransModel
            Hybrid
            DOC
            TWC
            SCR
            PMTrap
            maintainances {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVehiclesQuery>response.data.listVehicles;
  }
  async GetMaintainance(id: string): Promise<GetMaintainanceQuery> {
    const statement = `query GetMaintainance($id: ID!) {
        getMaintainance(id: $id) {
          __typename
          id
          MaintainanceID
          Type
          System
          Component
          Comments
          vehicle {
            __typename
            id
            VIN
            Manufacturer
            ModelYear
            OdoMiles
            Region
            Vocation
            FleetName
            AdditionalParameter
            EngSerialNum
            EngManufacturer
            EngModel
            EngModelYear
            FuelType
            Displacement
            EngAdditionalParameter
            TransmissonType
            TransManufacturer
            TransModel
            Hybrid
            DOC
            TWC
            SCR
            PMTrap
            maintainances {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMaintainanceQuery>response.data.getMaintainance;
  }
  async ListMaintainances(
    filter?: ModelMaintainanceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMaintainancesQuery> {
    const statement = `query ListMaintainances($filter: ModelMaintainanceFilterInput, $limit: Int, $nextToken: String) {
        listMaintainances(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            MaintainanceID
            Type
            System
            Component
            Comments
            vehicle {
              __typename
              id
              VIN
              Manufacturer
              ModelYear
              OdoMiles
              Region
              Vocation
              FleetName
              AdditionalParameter
              EngSerialNum
              EngManufacturer
              EngModel
              EngModelYear
              FuelType
              Displacement
              EngAdditionalParameter
              TransmissonType
              TransManufacturer
              TransModel
              Hybrid
              DOC
              TWC
              SCR
              PMTrap
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMaintainancesQuery>response.data.listMaintainances;
  }
  // OnCreateVehicleListener(
  // ): Observable<
  //   SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateVehicle">>
  // > {
  //   const statement = `subscription OnCreateVehicle() {
  //       onCreateVehicle() {
  //         __typename
  //         id
  //         VIN
  //         Manufacturer
  //         ModelYear
  //         OdoMiles
  //         Region
  //         Vocation
  //         FleetName
  //         AdditionalParameter
  //         EngSerialNum
  //         EngManufacturer
  //         EngModel
  //         EngModelYear
  //         FuelType
  //         Displacement
  //         EngAdditionalParameter
  //         TransmissonType
  //         TransManufacturer
  //         TransModel
  //         Hybrid
  //         DOC
  //         TWC
  //         SCR
  //         PMTrap
  //         maintainances {
  //           __typename
  //           items {
  //             __typename
  //             id
  //             MaintainanceID
  //             Type
  //             System
  //             Component
  //             Comments
  //             createdAt
  //             updatedAt
  //           }
  //           nextToken
  //         }
  //         createdAt
  //         updatedAt
  //       }
  //     }`;
  //   const gqlAPIServiceArguments: any = {
  //   };
  //   return API.graphql(
  //     graphqlOperation(statement, gqlAPIServiceArguments)
  //   ) as Observable<
  //     SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateVehicle">>
  //   >;
  // }

  OnCreateVehicleListener: Observable<
    OnCreateVehicleSubscription
  > = (API.graphql(
      graphqlOperation(
        `subscription OnCreateVehicle {
          onCreateVehicle {
          __typename
          id
          VIN
          Manufacturer
          ModelYear
          OdoMiles
          Region
          Vocation
          FleetName
          AdditionalParameter
          EngSerialNum
          EngManufacturer
          EngModel
          EngModelYear
          FuelType
          Displacement
          EngAdditionalParameter
          TransmissonType
          TransManufacturer
          TransModel
          Hybrid
          DOC
          TWC
          SCR
          PMTrap
          maintainances {
            __typename
            items {
              __typename
              id
              MaintainanceID
              Type
              System
              Component
              Comments
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        }`
      )
    ) as Observable<any>)
  .map(x => x.value.data.onCreateVehicle as OnCreateVehicleSubscription);

  OnUpdateVehicleListener(
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateVehicle">>
  > {
    const statement = `subscription OnUpdateVehicle() {
        onUpdateVehicle() {
          __typename
          id
          VIN
          Manufacturer
          ModelYear
          OdoMiles
          Region
          Vocation
          FleetName
          AdditionalParameter
          EngSerialNum
          EngManufacturer
          EngModel
          EngModelYear
          FuelType
          Displacement
          EngAdditionalParameter
          TransmissonType
          TransManufacturer
          TransModel
          Hybrid
          DOC
          TWC
          SCR
          PMTrap
          maintainances {
            __typename
            items {
              __typename
              id
              MaintainanceID
              Type
              System
              Component
              Comments
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateVehicle">>
    >;
  }

  // OnDeleteVehicleListener(
  // ): Observable<
  //   SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVehicle">>
  // > {
  //   const statement = `subscription OnDeleteVehicle() {
  //       onDeleteVehicle() {
  //         __typename
  //         id
  //         VIN
  //         Manufacturer
  //         ModelYear
  //         OdoMiles
  //         Region
  //         Vocation
  //         FleetName
  //         AdditionalParameter
  //         EngSerialNum
  //         EngManufacturer
  //         EngModel
  //         EngModelYear
  //         FuelType
  //         Displacement
  //         EngAdditionalParameter
  //         TransmissonType
  //         TransManufacturer
  //         TransModel
  //         Hybrid
  //         DOC
  //         TWC
  //         SCR
  //         PMTrap
  //         maintainances {
  //           __typename
  //           items {
  //             __typename
  //             id
  //             MaintainanceID
  //             Type
  //             System
  //             Component
  //             Comments
  //             createdAt
  //             updatedAt
  //           }
  //           nextToken
  //         }
  //         createdAt
  //         updatedAt
  //       }
  //     }`;
  //   const gqlAPIServiceArguments: any = {
  //   };
  //   return API.graphql(
  //     graphqlOperation(statement, gqlAPIServiceArguments)
  //   ) as Observable<
  //     SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVehicle">>
  //   >;
  // }

  OnDeleteVehicleListener: Observable<
    OnDeleteVehicleSubscription
  > = (API.graphql(
      graphqlOperation(
        `subscription OnDeleteVehicle {
          onDeleteVehicle {
          __typename
          id
          VIN
          Manufacturer
          ModelYear
          OdoMiles
          Region
          Vocation
          FleetName
          AdditionalParameter
          EngSerialNum
          EngManufacturer
          EngModel
          EngModelYear
          FuelType
          Displacement
          EngAdditionalParameter
          TransmissonType
          TransManufacturer
          TransModel
          Hybrid
          DOC
          TWC
          SCR
          PMTrap
          maintainances {
            __typename
            items {
              __typename
              id
              MaintainanceID
              Type
              System
              Component
              Comments
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        }`
      )
    ) as Observable<any>)
  .map(x => x.value.data.onDeleteVehicle as OnDeleteVehicleSubscription);

  OnCreateMaintainanceListener(
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMaintainance">>
  > {
    const statement = `subscription OnCreateMaintainance() {
        onCreateMaintainance() {
          __typename
          id
          MaintainanceID
          Type
          System
          Component
          Comments
          vehicle {
            __typename
            id
            VIN
            Manufacturer
            ModelYear
            OdoMiles
            Region
            Vocation
            FleetName
            AdditionalParameter
            EngSerialNum
            EngManufacturer
            EngModel
            EngModelYear
            FuelType
            Displacement
            EngAdditionalParameter
            TransmissonType
            TransManufacturer
            TransModel
            Hybrid
            DOC
            TWC
            SCR
            PMTrap
            maintainances {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateMaintainance">
      >
    >;
  }

  OnUpdateMaintainanceListener(
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMaintainance">>
  > {
    const statement = `subscription OnUpdateMaintainance() {
        onUpdateMaintainance() {
          __typename
          id
          MaintainanceID
          Type
          System
          Component
          Comments
          vehicle {
            __typename
            id
            VIN
            Manufacturer
            ModelYear
            OdoMiles
            Region
            Vocation
            FleetName
            AdditionalParameter
            EngSerialNum
            EngManufacturer
            EngModel
            EngModelYear
            FuelType
            Displacement
            EngAdditionalParameter
            TransmissonType
            TransManufacturer
            TransModel
            Hybrid
            DOC
            TWC
            SCR
            PMTrap
            maintainances {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateMaintainance">
      >
    >;
  }

  OnDeleteMaintainanceListener(
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMaintainance">>
  > {
    const statement = `subscription OnDeleteMaintainance() {
        onDeleteMaintainance() {
          __typename
          id
          MaintainanceID
          Type
          System
          Component
          Comments
          vehicle {
            __typename
            id
            VIN
            Manufacturer
            ModelYear
            OdoMiles
            Region
            Vocation
            FleetName
            AdditionalParameter
            EngSerialNum
            EngManufacturer
            EngModel
            EngModelYear
            FuelType
            Displacement
            EngAdditionalParameter
            TransmissonType
            TransManufacturer
            TransModel
            Hybrid
            DOC
            TWC
            SCR
            PMTrap
            maintainances {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteMaintainance">
      >
    >;
  }
}
