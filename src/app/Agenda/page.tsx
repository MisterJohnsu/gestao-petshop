// app/home/page.tsx
import React from "react";
import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CalendarDaysIcon, FilePenIcon, TrashIcon } from "lucide-react";

export default function Agenda() {
  return (
    <main className='ml-[4.8rem] flex-1 p-4'>
      <div className='bg-white rounded-lg shadow-md-p-6'>
        <h2 className='text-2x1 font-bold mb-4'>Agenda</h2>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label htmlFor='date' className='block font-medium-mb-1'>Data</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant='outline' className="w-full justify-start font-normal">
                  <CalendarDaysIcon className='mr-2 h-4 w-4' />Selecione uma data
                  </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align='start'>
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <label htmlFor="time" className="block font-medium mb-1">Horário</label>
            <Select>
              <SelectTrigger id="time">
                <SelectValue placeholder='Selecione um horário' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9:00">09:00</SelectItem>
                <SelectItem value="9:30">09:30</SelectItem>
                <SelectItem value="10:00">10:00</SelectItem>
                <SelectItem value="10:30">10:30</SelectItem>
                <SelectItem value="11:00">11:00</SelectItem>
                <SelectItem value="11:30">11:30</SelectItem>
                <SelectItem value="13:00">13:00</SelectItem>
                <SelectItem value="13:30">13:30</SelectItem>
                <SelectItem value="14:00">14:00</SelectItem>
                <SelectItem value="14:30">14:30</SelectItem>
                <SelectItem value="15:00">15:00</SelectItem>
                <SelectItem value="15:30">15:30</SelectItem>
                <SelectItem value="16:00">16:00</SelectItem>
                <SelectItem value="16:30">16:30</SelectItem>
                <SelectItem value="17:00">17:00</SelectItem>
                <SelectItem value="17:30">17:30</SelectItem>
                <SelectItem value="18:00">18:00</SelectItem>
                <SelectItem value="18:30">18:30</SelectItem>
                <SelectItem value="19:00">19:00</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="pet-name" className="block font-medium mb-1">Nome do pet</label>
            <Input 
            id ="pet-name"
            placeholder='Digite o nome do pet'
            />
          </div>
          <div>
            <label htmlFor="service" className="block font-medium">Serviço</label>
            <Select>
              <SelectTrigger id='service'>
                <SelectValue
                placeholder='Selecione um serviço' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='banho'>Banho</SelectItem>
                <SelectItem value='tosa'>Tosa</SelectItem>
                <SelectItem value='tosahigiênica'>Tosa higiênica</SelectItem>
                <SelectItem value='consulta'>Consulta</SelectItem>
                <SelectItem value='outros'>Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="value" className="block font-medium mb-1">Valor</label>
            <Input 
            id="value"
            placeholder="Digite o valor"
            type="number" />
          </div>
          <div>
            <label htmlFor="observations" className="block font-medium -mb-1">Observações</label>
            <Textarea id="observations" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Adicione observações" />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button type="submit" className="bg-emerald-500 rounded font-semibold - text-white h-10 p-2 hover:bg-emerald-600">Agendar</Button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        <h2 className="text-2x1 font-bold mb-4">Agenda</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Data</th>
              <th className="px-4 py-2 text-left">Horário</th>
              <th className="px-4 py-2 text-left">Nome do pet</th>
              <th className="px-4 py-2 text-left">Nome do dono</th>
              <th className="px-4 py-2 text-left">Serviço</th>
              <th className="px-4 py-2 text-left">Valor</th>
              <th className="px-4 py-2 text-left">Observações</th>
              <th className="px-4 py-2 text-left">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">2024-07-21</td>
              <td className="px-4 py-2">14:00</td>
              <td className="px-4 py-2">Buddy</td>
              <td className="px-4 py-2">João Silva</td>
              <td className="px-4 py-2">Banho</td>
              <td className="px-4 py-2">50,00</td>
              <td className="px-4 py-2">Pelagem curta</td>
              <td className="px-4 py-2">
                <Button variant='ghost' size='icon' className='mr-2'>
                  <FilePenIcon className="w-5 h-5" />
                  <span className="sr-only">Editar</span>
                </Button>
                <Button variant='ghost' size='icon' className='text-red-500'>
                  <TrashIcon className="w-5 h-5" />
                  <span className="sr-only">Excluir</span>
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
