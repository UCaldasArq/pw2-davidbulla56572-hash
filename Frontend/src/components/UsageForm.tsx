import React, { useState } from 'react';
import type { User, UsageRecord, Application } from '../types';

interface UsageFormProps {
  users: User[];
  applications: Application[];
  onSubmit: (record: UsageRecord) => void;
}

const UsageForm: React.FC<UsageFormProps> = ({ users, applications, onSubmit }) => {
  const [formData, setFormData] = useState<UsageRecord>({
    userId: '',
    applicationId: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    usagePeriod: 'MORNING',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const val = name === 'days' || name === 'hours' || name === 'minutes' || name === 'applicationId'
      ? (value === '' ? 0 : parseInt(value))
      : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.userId && formData.applicationId) {
      if (formData.hours < 0 || formData.hours > 23 || formData.minutes < 0 || formData.minutes > 59 || (formData.days ?? 0) < 0) {
        alert('Los valores de tiempo no son validos');
        return;
      }
      onSubmit(formData);
      setFormData({
        userId: '',
        applicationId: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        usagePeriod: 'MORNING',
      });
    } else {
      alert('Usuario y aplicación son obligatorios');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="panel p-6" noValidate>
      <div className="mb-5">
        <label htmlFor="userId" className="field-label">Usuario</label>
        <select id="userId" name="userId" value={formData.userId} onChange={handleChange} className="field-input" required>
          <option value="">Selecciona un usuario</option>
          {users.map((u) => <option key={u.id} value={u.id}>{u.firstName} {u.lastName}</option>)}
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="application" className="field-label">Aplicacion</label>
        <select id="application" name="applicationId" value={formData.applicationId} onChange={handleChange} className="field-input" required>
          <option value="">Selecciona una aplicacion</option>
          {applications.map((app) => <option key={app.id} value={app.id}>{app.name}</option>)}
        </select>
      </div>
      <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="days" className="field-label">Dias</label>
          <input id="days" name="days" type="number" min="0" value={formData.days} onChange={handleChange} className="field-input" />
        </div>
        <div>
          <label htmlFor="hours" className="field-label">Horas</label>
          <input id="hours" name="hours" type="number" min="0" max="23" value={formData.hours} onChange={handleChange} className="field-input" />
        </div>
        <div>
          <label htmlFor="minutes" className="field-label">Minutos</label>
          <input id="minutes" name="minutes" type="number" min="0" max="59" value={formData.minutes} onChange={handleChange} className="field-input" />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="usagePeriod" className="field-label">Periodo de uso</label>
        <select id="usagePeriod" name="usagePeriod" value={formData.usagePeriod} onChange={handleChange} className="field-input">
          <option value="MORNING">Mañana</option>
          <option value="AFTERNOON">Tarde</option>
          <option value="NIGHT">Noche</option>
        </select>
      </div>
      <button className="btn-primary w-full sm:w-auto" type="submit">
        Registrar uso
      </button>
    </form>
  );
};

export default UsageForm;
