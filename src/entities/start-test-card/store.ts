import { request } from "@/shared";
import { AxiosResponse } from "axios";
import { useMutation, useQuery } from "react-query";
import {
  convertKeysToCamelCase,
  convertKeysToSnakeCase,
} from "@/shared/heplers.ts";

export type TestResponseRaw = {
  id: number;
  start_at: string;
  end_at: string;
  user_id: number;
  result: number;
  status: string;
};

export type TestResponse = {
  id: number;
  startAt: string;
  endAt: string;
  userId: number;
  result: number;
  status: string;
};

export type PostTestRequest = {
  language: string;
  subjectIds: number[];
};

export type DetailedTestResponseRaw = {
  id: number;
  start_at: string;
  end_at: string;
  subject_ids: number[];
  subjects: {
    id: string;
    name: string;
  }[];
};

export type DetailedTestResponse = {
  id: number;

  startAt: string;
  endAt: string;
  subjectIds: number[];
  subjects: {
    id: string;
    name: string;
  }[];
};

export const getTest = (): Promise<AxiosResponse<TestResponseRaw[]>> => {
  const url = "/test/";

  return request.get(url);
};

export const postTest = (
  data: PostTestRequest,
): Promise<AxiosResponse<unknown>> => {
  const url = "/test/";

  return request.post(url, convertKeysToSnakeCase(data));
};

export const useCreateTest = () => {
  return useMutation((data: PostTestRequest) => postTest(data));
};

export const getTestById = (
  id: string,
): Promise<AxiosResponse<DetailedTestResponseRaw>> => {
  const url = `/test/${id}/`;

  return request.get(url);
};

export const useTests = () => {
  const { data, isLoading, error } = useQuery("tests", () =>
    getTest().then((res) =>
      convertKeysToCamelCase<TestResponseRaw[], TestResponse[]>(res.data),
    ),
  );
  return { tests: data || [], isLoading, error };
};
