import { useState } from 'react';
import type { Agendamento } from '../../types/agendamento';

interface AgendamentoFormProps {
  agendamento?: Agendamento;
  onSubmit: (agendamento: Omit<Agendamento, 'id'>) => void;
  onCancel?: () => void;
}

export function AgendamentoForm({ agendamento, onSubmit, onCancel }: AgendamentoFormProps) {
  const [nomePet, setNomePet] = useState(agendamento?.nomePet || '');
  const [data, setData] = useState(
    agendamento?.data.toISOString().split('T')[0] || ''
  );
  const [horario, setHorario] = useState(agendamento?.horario || 8);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onSubmit({
      nomePet,
      data: new Date(data),
      horario,
    });
  };

  const formClasses = 'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4';
  const inputClasses = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
  const labelClasses = 'block text-gray-700 text-sm font-bold mb-2';
  const buttonClasses = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline';
  const cancelButtonClasses = 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2';

  return (
    <form className={formClasses} onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className={labelClasses} htmlFor="nomePet">
          Nome do Pet
        </label>
        <input
          id="nomePet"
          type="text"
          value={nomePet}
          onChange={(e) => setNomePet(e.target.value)}
          className={inputClasses}
          placeholder="Digite o nome do pet"
          required
        />
      </div>

      <div className="mb-4">
        <label className={labelClasses} htmlFor="data">
          Data
        </label>
        <input
          id="data"
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className={inputClasses}
          required
        />
      </div>

      <div className="mb-6">
        <label className={labelClasses} htmlFor="horario">
          Horário
        </label>
        <select
          id="horario"
          value={horario}
          onChange={(e) => setHorario(Number(e.target.value))}
          className={inputClasses}
          required
        >
          {Array.from({ length: 13 }, (_, i) => i + 8).map((hora) => (
            <option key={hora} value={hora}>
              {hora}:00
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center justify-between">
        <button type="submit" className={buttonClasses}>
          {agendamento ? 'Atualizar' : 'Agendar'}
        </button>
        
        {onCancel && (
          <button type="button" onClick={onCancel} className={cancelButtonClasses}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}