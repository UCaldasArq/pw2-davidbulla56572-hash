import React, { useState } from 'react';
import type { User } from '../types';

interface UserFormProps {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<User>({
    email: '',
    firstName: '',
    lastName: '',
    document: '',
    phoneNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.firstName && formData.lastName && formData.document && formData.phoneNumber) {
      if (!/^\d+$/.test(formData.phoneNumber)) {
        alert('El numero de telefono solo debe contener numeros');
        return;
      }
      onSubmit(formData);
      setFormData({ email: '', firstName: '', lastName: '', document: '', phoneNumber: '' });
    } else {
      alert('Todos los campos son obligatorios');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="panel p-6" noValidate>
      <div className="mb-5">
        <label htmlFor="email" className="field-label">Email</label>
        <input id="email" name="email" value={formData.email} onChange={handleChange} className="field-input" type="email" required />
      </div>
      <div className="mb-5">
        <label htmlFor="firstName" className="field-label">Nombre</label>
        <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="field-input" type="text" required />
      </div>
      <div className="mb-5">
        <label htmlFor="lastName" className="field-label">Apellido</label>
        <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="field-input" type="text" required />
      </div>
      <div className="mb-5">
        <label htmlFor="document" className="field-label">Documento</label>
        <input id="document" name="document" value={formData.document} onChange={handleChange} className="field-input" type="text" required />
      </div>
      <div className="mb-6">
        <label htmlFor="phoneNumber" className="field-label">Telefono</label>
        <input id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="field-input" type="text" required pattern="[0-9]+" />
      </div>
      <div className="flex items-center justify-between">
        <button className="btn-primary w-full sm:w-auto" type="submit">
          Registrar usuario
        </button>
      </div>
    </form>
  );
};

export default UserForm;
