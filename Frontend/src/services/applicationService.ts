import api from './api';
import type { Application } from '../types';

export const getApplications = () => api.get<Application[]>('/applications');
export const getApplicationById = (id: number) => api.get<Application>(`/applications/${id}`);
export const createApplication = (app: Application) => api.post<Application>('/applications', app);
export const updateApplication = (id: number, app: Application) => api.put<Application>(`/applications/${id}`, app);
export const deleteApplication = (id: number) => api.delete(`/applications/${id}`);
