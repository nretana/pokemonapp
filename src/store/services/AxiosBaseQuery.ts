import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { BaseQueryFn } from '@reduxjs/toolkit/query'

export const axiosBaseQuery =
    (requestConfig?: AxiosRequestConfig): BaseQueryFn<
        {
            url: string
            method: AxiosRequestConfig['method']
            data?: AxiosRequestConfig['data']
            params?: AxiosRequestConfig['params']
        },
        unknown,
        unknown
    > =>
    async (request) => {
        try {
            const currentRequest: AxiosRequestConfig = { baseURL: (requestConfig && requestConfig.baseURL), 
                                                         ...request };
           
            const response = axios.create(currentRequest) as any;
            return { data: response?.data, meta: { headers: {...(response && response.headers) && response?.headers } } };
        } catch (axiosError) {
            const err = axiosError as AxiosError
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            }
        }
    }

