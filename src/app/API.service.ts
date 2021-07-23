/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateVehicleInput = {
  id?: string | null;
  VIN: string;
  Manufacturer: string;
};

export type ModelVehicleConditionInput = {
  VIN?: ModelStringInput | null;
  Manufacturer?: ModelStringInput | null;
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

export type Vehicle = {
  __typename: "Vehicle";
  id: string;
  VIN: string;
  Manufacturer: string;
  maintainances?: ModelMaintainanceConnection | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ModelMaintainanceConnection = {
  __typename: "ModelMaintainanceConnection";
  items?: Array<Maintainance | null> | null;
  nextToken?: string | null;
};

export type Maintainance = {
  __typename: "Maintainance";
  id: string;
  Type: string;
  vehicleID: string;
  vehicle?: Vehicle | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateVehicleInput = {
  id: string;
  VIN?: string | null;
  Manufacturer?: string | null;
};

export type DeleteVehicleInput = {
  id: string;
};

export type CreateMaintainanceInput = {
  id?: string | null;
  Type: string;
  vehicleID: string;
};

export type ModelMaintainanceConditionInput = {
  Type?: ModelStringInput | null;
  vehicleID?: ModelIDInput | null;
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
  id: string;
  Type?: string | null;
  vehicleID?: string | null;
};

export type DeleteMaintainanceInput = {
  id: string;
};

export type ModelVehicleFilterInput = {
  id?: ModelIDInput | null;
  VIN?: ModelStringInput | null;
  Manufacturer?: ModelStringInput | null;
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
  id?: ModelIDInput | null;
  Type?: ModelStringInput | null;
  vehicleID?: ModelIDInput | null;
  and?: Array<ModelMaintainanceFilterInput | null> | null;
  or?: Array<ModelMaintainanceFilterInput | null> | null;
  not?: ModelMaintainanceFilterInput | null;
};

export type CreateVehicleMutation = {
  __typename: "Vehicle";
  id: string;
  VIN: string;
  Manufacturer: string;
  maintainances?: {
    __typename: "ModelMaintainanceConnection";
    items?: Array<{
      __typename: "Maintainance";
      id: string;
      Type: string;
      vehicleID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateVehicleMutation = {
  __typename: "Vehicle";
  id: string;
  VIN: string;
  Manufacturer: string;
  maintainances?: {
    __typename: "ModelMaintainanceConnection";
    items?: Array<{
      __typename: "Maintainance";
      id: string;
      Type: string;
      vehicleID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteVehicleMutation = {
  __typename: "Vehicle";
  id: string;
  VIN: string;
  Manufacturer: string;
  maintainances?: {
    __typename: "ModelMaintainanceConnection";
    items?: Array<{
      __typename: "Maintainance";
      id: string;
      Type: string;
      vehicleID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateMaintainanceMutation = {
  __typename: "Maintainance";
  id: string;
  Type: string;
  vehicleID: string;
  vehicle?: {
    __typename: "Vehicle";
    id: string;
    VIN: string;
    Manufacturer: string;
    maintainances?: {
      __typename: "ModelMaintainanceConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateMaintainanceMutation = {
  __typename: "Maintainance";
  id: string;
  Type: string;
  vehicleID: string;
  vehicle?: {
    __typename: "Vehicle";
    id: string;
    VIN: string;
    Manufacturer: string;
    maintainances?: {
      __typename: "ModelMaintainanceConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteMaintainanceMutation = {
  __typename: "Maintainance";
  id: string;
  Type: string;
  vehicleID: string;
  vehicle?: {
    __typename: "Vehicle";
    id: string;
    VIN: string;
    Manufacturer: string;
    maintainances?: {
      __typename: "ModelMaintainanceConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type GetVehicleQuery = {
  __typename: "Vehicle";
  id: string;
  VIN: string;
  Manufacturer: string;
  maintainances?: {
    __typename: "ModelMaintainanceConnection";
    items?: Array<{
      __typename: "Maintainance";
      id: string;
      Type: string;
      vehicleID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListVehiclesQuery = {
  __typename: "ModelVehicleConnection";
  items?: Array<{
    __typename: "Vehicle";
    id: string;
    VIN: string;
    Manufacturer: string;
    maintainances?: {
      __typename: "ModelMaintainanceConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetMaintainanceQuery = {
  __typename: "Maintainance";
  id: string;
  Type: string;
  vehicleID: string;
  vehicle?: {
    __typename: "Vehicle";
    id: string;
    VIN: string;
    Manufacturer: string;
    maintainances?: {
      __typename: "ModelMaintainanceConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListMaintainancesQuery = {
  __typename: "ModelMaintainanceConnection";
  items?: Array<{
    __typename: "Maintainance";
    id: string;
    Type: string;
    vehicleID: string;
    vehicle?: {
      __typename: "Vehicle";
      id: string;
      VIN: string;
      Manufacturer: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateVehicleSubscription = {
  __typename: "Vehicle";
  id: string;
  VIN: string;
  Manufacturer: string;
  maintainances?: {
    __typename: "ModelMaintainanceConnection";
    items?: Array<{
      __typename: "Maintainance";
      id: string;
      Type: string;
      vehicleID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateVehicleSubscription = {
  __typename: "Vehicle";
  id: string;
  VIN: string;
  Manufacturer: string;
  maintainances?: {
    __typename: "ModelMaintainanceConnection";
    items?: Array<{
      __typename: "Maintainance";
      id: string;
      Type: string;
      vehicleID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteVehicleSubscription = {
  __typename: "Vehicle";
  id: string;
  VIN: string;
  Manufacturer: string;
  maintainances?: {
    __typename: "ModelMaintainanceConnection";
    items?: Array<{
      __typename: "Maintainance";
      id: string;
      Type: string;
      vehicleID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateMaintainanceSubscription = {
  __typename: "Maintainance";
  id: string;
  Type: string;
  vehicleID: string;
  vehicle?: {
    __typename: "Vehicle";
    id: string;
    VIN: string;
    Manufacturer: string;
    maintainances?: {
      __typename: "ModelMaintainanceConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateMaintainanceSubscription = {
  __typename: "Maintainance";
  id: string;
  Type: string;
  vehicleID: string;
  vehicle?: {
    __typename: "Vehicle";
    id: string;
    VIN: string;
    Manufacturer: string;
    maintainances?: {
      __typename: "ModelMaintainanceConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteMaintainanceSubscription = {
  __typename: "Maintainance";
  id: string;
  Type: string;
  vehicleID: string;
  vehicle?: {
    __typename: "Vehicle";
    id: string;
    VIN: string;
    Manufacturer: string;
    maintainances?: {
      __typename: "ModelMaintainanceConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
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
          maintainances {
            __typename
            items {
              __typename
              id
              Type
              vehicleID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
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
          maintainances {
            __typename
            items {
              __typename
              id
              Type
              vehicleID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
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
          maintainances {
            __typename
            items {
              __typename
              id
              Type
              vehicleID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
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
          Type
          vehicleID
          vehicle {
            __typename
            id
            VIN
            Manufacturer
            maintainances {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
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
          Type
          vehicleID
          vehicle {
            __typename
            id
            VIN
            Manufacturer
            maintainances {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
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
          Type
          vehicleID
          vehicle {
            __typename
            id
            VIN
            Manufacturer
            maintainances {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
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
          maintainances {
            __typename
            items {
              __typename
              id
              Type
              vehicleID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
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
            maintainances {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
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
          Type
          vehicleID
          vehicle {
            __typename
            id
            VIN
            Manufacturer
            maintainances {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
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
            Type
            vehicleID
            vehicle {
              __typename
              id
              VIN
              Manufacturer
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
  OnCreateVehicleListener(
    owner: string
  ): Observable<SubscriptionResponse<OnCreateVehicleSubscription>> {
    const statement = `subscription OnCreateVehicle($owner: String!) {
        onCreateVehicle(owner: $owner) {
          __typename
          id
          VIN
          Manufacturer
          maintainances {
            __typename
            items {
              __typename
              id
              Type
              vehicleID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateVehicleSubscription>>;
  }

  OnUpdateVehicleListener(
    owner: string
  ): Observable<SubscriptionResponse<OnUpdateVehicleSubscription>> {
    const statement = `subscription OnUpdateVehicle($owner: String!) {
        onUpdateVehicle(owner: $owner) {
          __typename
          id
          VIN
          Manufacturer
          maintainances {
            __typename
            items {
              __typename
              id
              Type
              vehicleID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateVehicleSubscription>>;
  }

  OnDeleteVehicleListener(
    owner: string
  ): Observable<SubscriptionResponse<OnDeleteVehicleSubscription>> {
    const statement = `subscription OnDeleteVehicle($owner: String!) {
        onDeleteVehicle(owner: $owner) {
          __typename
          id
          VIN
          Manufacturer
          maintainances {
            __typename
            items {
              __typename
              id
              Type
              vehicleID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteVehicleSubscription>>;
  }

  OnCreateMaintainanceListener(
    owner: string
  ): Observable<SubscriptionResponse<OnCreateMaintainanceSubscription>> {
    const statement = `subscription OnCreateMaintainance($owner: String!) {
        onCreateMaintainance(owner: $owner) {
          __typename
          id
          Type
          vehicleID
          vehicle {
            __typename
            id
            VIN
            Manufacturer
            maintainances {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateMaintainanceSubscription>>;
  }

  OnUpdateMaintainanceListener(
    owner: string
  ): Observable<SubscriptionResponse<OnUpdateMaintainanceSubscription>> {
    const statement = `subscription OnUpdateMaintainance($owner: String!) {
        onUpdateMaintainance(owner: $owner) {
          __typename
          id
          Type
          vehicleID
          vehicle {
            __typename
            id
            VIN
            Manufacturer
            maintainances {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateMaintainanceSubscription>>;
  }

  OnDeleteMaintainanceListener(
    owner: string
  ): Observable<SubscriptionResponse<OnDeleteMaintainanceSubscription>> {
    const statement = `subscription OnDeleteMaintainance($owner: String!) {
        onDeleteMaintainance(owner: $owner) {
          __typename
          id
          Type
          vehicleID
          vehicle {
            __typename
            id
            VIN
            Manufacturer
            maintainances {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteMaintainanceSubscription>>;
  }
}
