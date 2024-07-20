// app/home/page.tsx
import React from "react";
import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Agenda() {
  return (
    <main className='flex-1 p-4'>
      <div className='bg-white rounded-lg shadow-md-p-6'>
        <h2 className='text-2x1 font-bold mb-4'>Agenda</h2>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label htmlFor='date' className='block font-medium-mb-1'>Data</label>
            <Popover>
              <PopoverTrigger asChild>

              </PopoverTrigger>
            </Popover>
          </div>
        </div>
      </div>
    </main>
  );
}
