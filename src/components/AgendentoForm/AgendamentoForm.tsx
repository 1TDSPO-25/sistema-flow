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

  const formClasses = 'space-y-6';
  const inputClasses = 'shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500';
  const labelClasses = 'block text-gray-700 text-sm font-bold mb-2';
  const buttonClasses = 'bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300';
  const cancelButtonClasses = 'bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ml-4';

  return (
    <form className={formClasses} onSubmit={handleSubmit}>
      <div className="mb-6">
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

      <div className="mb-6">
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

      <div className="mb-8">
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

      <div className="flex items-center justify-center">
        <button type="submit" className={buttonClasses}>
          {agendamento ? 'Atualizar Agendamento' : 'Agendar Banho & Tosa'}
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