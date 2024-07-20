// app/caixa/page.tsx
'use client';
import Link from 'next/link';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from 'react';
import { Button } from "@/components/ui/button"

const createUserFormSchema = z.object({
cliente: z.string(),
produto: z.string(),
quantidade: z.string(),
valor: z.string()
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export default function Caixa() {
  const [output, setOutput] = useState('')
  const {register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
  })

  return (
    <main className=''>
      <div className='ml-[5.5rem] bg-white rounded-lg shadow-md-p-6'>
      <h2 className='text-2x1 font-bold mb-4'>Registro de Vendas</h2>
      <form className='space y-4'>
        <div>
          <label htmlFor='cliente' className='block font-medium mb-1'>Cliente</label>
          <input
          type='text'
          id='cliente'
          className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary'
          placeholder='Nome do Cliente'
          {...register('cliente')}
          />
        </div>
        <div>
          <label htmlFor='produto' className='block font-medium mb-1'>Produto</label>
          <input
          type='text'
          id='produto'
          className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary'
          placeholder='Nome do produto'
          {...register('produto')}
          />
        </div>
        <div>
          <label htmlFor='quantidade' className='block font-medium mb-1'>Quantidade</label>
          <input
          type='number'
          id='quantidade'
          className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary'
          placeholder='Quantidade'
          {...register('quantidade')}
          />
        </div>
        <div>
          <label htmlFor='valor' className='block font-medium mb-1'>Valor</label>
          <input
          type='number'
          id='valor'
          className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary'
          placeholder='Valor'
          {...register('valor')}
          />
        </div>
        <Button
        type='submit'
        className='bg-emerald-500 rounded font-semibold - text-white h-10 hover:bg-emerald-600 mt-4'
        >
          Registrar Venda
        </Button>
      </form>

      <pre>{output}</pre>
      </div>
    </main>
  );
}
