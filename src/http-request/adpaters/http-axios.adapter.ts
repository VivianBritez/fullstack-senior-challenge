import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { HttpInterface } from '../core/interface/http-request.interface';

@Injectable()
export class AxiosHttpService implements HttpInterface {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
  }

  async get<T = any>(url: string, options?: any): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, options);
    return response.data;
  }

  async post<T = any>(url: string, data?: any, options?: any): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data, options);
    return response.data;
  }

  async put<T = any>(url: string, data?: any, options?: any): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data, options);
    return response.data;
  }

  async delete<T = any>(url: string, options?: any): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url, options);
    return response.data;
  }
}
