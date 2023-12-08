/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDiaryInput = {
  id?: string | null,
  name: string,
  image?: string | null,
  description?: string | null,
  author?: string | null,
};

export type ModelDiaryConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelDiaryConditionInput | null > | null,
  or?: Array< ModelDiaryConditionInput | null > | null,
  not?: ModelDiaryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
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
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Diary = {
  __typename: "Diary",
  id: string,
  name: string,
  image?: string | null,
  description?: string | null,
  author?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDiaryInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  description?: string | null,
  author?: string | null,
};

export type DeleteDiaryInput = {
  id: string,
};

export type ModelDiaryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelDiaryFilterInput | null > | null,
  or?: Array< ModelDiaryFilterInput | null > | null,
  not?: ModelDiaryFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelDiaryConnection = {
  __typename: "ModelDiaryConnection",
  items:  Array<Diary | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionDiaryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  author?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDiaryFilterInput | null > | null,
  or?: Array< ModelSubscriptionDiaryFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateDiaryMutationVariables = {
  input: CreateDiaryInput,
  condition?: ModelDiaryConditionInput | null,
};

export type CreateDiaryMutation = {
  createDiary?:  {
    __typename: "Diary",
    id: string,
    name: string,
    image?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDiaryMutationVariables = {
  input: UpdateDiaryInput,
  condition?: ModelDiaryConditionInput | null,
};

export type UpdateDiaryMutation = {
  updateDiary?:  {
    __typename: "Diary",
    id: string,
    name: string,
    image?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDiaryMutationVariables = {
  input: DeleteDiaryInput,
  condition?: ModelDiaryConditionInput | null,
};

export type DeleteDiaryMutation = {
  deleteDiary?:  {
    __typename: "Diary",
    id: string,
    name: string,
    image?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetDiaryQueryVariables = {
  id: string,
};

export type GetDiaryQuery = {
  getDiary?:  {
    __typename: "Diary",
    id: string,
    name: string,
    image?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDiariesQueryVariables = {
  filter?: ModelDiaryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiariesQuery = {
  listDiaries?:  {
    __typename: "ModelDiaryConnection",
    items:  Array< {
      __typename: "Diary",
      id: string,
      name: string,
      image?: string | null,
      description?: string | null,
      author?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDiarySubscriptionVariables = {
  filter?: ModelSubscriptionDiaryFilterInput | null,
};

export type OnCreateDiarySubscription = {
  onCreateDiary?:  {
    __typename: "Diary",
    id: string,
    name: string,
    image?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDiarySubscriptionVariables = {
  filter?: ModelSubscriptionDiaryFilterInput | null,
};

export type OnUpdateDiarySubscription = {
  onUpdateDiary?:  {
    __typename: "Diary",
    id: string,
    name: string,
    image?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDiarySubscriptionVariables = {
  filter?: ModelSubscriptionDiaryFilterInput | null,
};

export type OnDeleteDiarySubscription = {
  onDeleteDiary?:  {
    __typename: "Diary",
    id: string,
    name: string,
    image?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
