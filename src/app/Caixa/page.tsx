// app/caixa/page.tsx
'use client';
import Link from 'next/link';
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from 'react';
import { Button } from "@/components/ui/button"

const createUserFormSchema = z.object({
cliente: z.string().nonempty('Cliente é obrigatório'),
produto: z.string().nonempty('Produto é obrigatório'),
quantidade: z.number().min(1, 'Quantidade deve ser pelo menos 1'),
valor: z.number().min(1, 'Valor deve ser pelo menos 1')
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

type Venda = CreateUserFormData & { data: string };
export default function Caixa() {
  const [historicoVendas, setHistoricoVendas] = useState<Venda[]>([]);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
});

const onSubmit: SubmitHandler<CreateUserFormData> = (data) => {
  const novaVenda: Venda = { ...data, data: new Date().toISOString().split('T')[0] };
  setHistoricoVendas((prevVendas) => [...prevVendas, novaVenda]);
};

  return (
    <main className="flex-1 p-4">
        <div className="ml-[4.8rem] bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Registro de Vendas</h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="cliente" className="block font-medium mb-1">
                Cliente
              </label>
              <input
                type="text"
                id="cliente"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Nome do cliente"
                {...register('cliente')}
              />
              {errors.cliente && <p className="text-red-500">{errors.cliente.message}</p>}
            </div>
            <div>
              <label htmlFor="produto" className="block font-medium mb-1">
                Produto
              </label>
              <input
                type="text"
                id="produto"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Nome do produto"
                {...register('produto')}
              />
              {errors.produto && <p className="text-red-500">{errors.produto.message}</p>}
            </div>
            <div>
              <label htmlFor="quantidade" className="block font-medium mb-1">
                Quantidade
              </label>
              <input
                type="number"
                id="quantidade"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Quantidade"
                {...register('quantidade', { valueAsNumber: true })}
              />
              {errors.quantidade && <p className="text-red-500">{errors.quantidade.message}</p>}
            </div>
            <div>
              <label htmlFor="valor" className="block font-medium mb-1">
                Valor
              </label>
              <input
                type="number"
                id="valor"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Valor"
                {...register('valor', { valueAsNumber: true })}
              />
              {errors.valor && <p className="text-red-500">{errors.valor.message}</p>}
            </div>
            <button
              type="submit"
              className="bg-emerald-500 rounded font-semibold - text-white h-10 p-2 hover:bg-emerald-600"
            >
              Registrar Venda
            </button>
          </form>
        </div>
        <div className='ml-[4.8rem] bg-white roudend-lg shadow-md p-6 mt-6'>
          <h2 className='text-2x1 font-bold mb-4'>Histórico de Vendas</h2>
          <table className='w-full border-collapse'>
            <thead>
              <tr>
              <th className='px-4 py-2 text-left'>Cliente</th>
              <th className='px-4 py-2 text-left'>Produto</th>
              <th className='px-4 py-2 text-left'>Quantidade</th>
              <th className='px-4 py-2 text-left'>Valor</th>
              <th className='px-4 py-2 text-left'>Data</th>
              </tr>
            </thead>
            <tbody>
              {historicoVendas.map((venda, index) =>(
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{venda.cliente}</td>
                  <td className="px-4 py-2">{venda.produto}</td>
                  <td className="px-4 py-2">{venda.quantidade}</td>
                  <td className="px-4 py-2">{venda.valor}</td>
                  <td className="px-4 py-2">{venda.data}</td>
                  </tr>
              ))}
          </tbody>
          </table>
        </div>
      </main>
  );
}
