import React, { useState } from 'react';
import type { Application } from '../types';

interface ApplicationFormProps {
  onSubmit: (app: Application) => void;
  initialData?: Application | null;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData?.name ?? '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      const app: Application = { id: initialData?.id, name: name.trim() };
      onSubmit(app);
      setName('');
    } else {
      alert('El nombre de la aplicacion es obligatorio');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="panel p-6" noValidate>
      <div className="mb-5">
        <label htmlFor="appName" className="field-label">Nombre de la aplicacion</label>
        <input
          id="appName"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="field-input"
          type="text"
          required
          placeholder="Ej: Chrome, VS Code, Spotify..."
        />
      </div>
      <button className="btn-primary w-full sm:w-auto" type="submit">
        {initialData ? 'Actualizar' : 'Registrar'} aplicacion
      </button>
    </form>
  );
};

export default ApplicationForm;
