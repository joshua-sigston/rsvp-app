"use client"
import React, { useState } from 'react'
import {MapPin} from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group'
import { Calendar } from '../../components/ui/calendar'
import { useToast } from '@/hooks/use-toast'

const RSVPForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [accompany, setAccompany] = useState<string | null>(null);
    const [attendance, setAttendance] = useState("yes");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleSubmit = () => {
      console.log()
    }
  return (
    <div className='max-w-md max-auto my-10'>
      <h1 className="text-2xl font-bold-mb-4">Title</h1>
      <p className="mb-6">DESC</p>
      <div className="mb-6">
        <Label>DETAILS</Label>
        <p>DATE</p>
        <div className="mt-4">
        <Button>
          <MapPin className='w-full'/>
          STRING LOCATION
        </Button>
      </div>
      </div>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className="">
          <Label htmlFor='name'>NAME</Label>
          <Input id='name' value={name} onChange={(e) => setName(e.target.value)}
          required />
          {errors.name && (
            <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
          )}
        </div>
        <div className="">
          <Label htmlFor='email'>EMAIL</Label>
          <Input id='email' value={email} onChange={(e) => setEmail(e.target.value)}
          required />
          {errors.email && (
            <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
          )}
        </div>
        <div className="">
          <Label htmlFor='accompany'>ACCOMPANY</Label>
          <Input id='accompany'  value={accompany || ""} onChange={(e) => setAccompany(e.target.value)}
           />
        </div>
        <div className="">
          <Label>RSVP LABEL</Label>
          <RadioGroup value={attendance} onValueChange={setAttendance}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value='yes' id='yes' />
              <Label htmlFor='yes'>YES</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value='no' id='no' />
              <Label htmlFor='no'>NO</Label>
            </div>
          </RadioGroup>
        </div>
        <Button type='submit' disabled={isLoading}>{isLoading ? "Sending..." : "Submit" }</Button>
      </form>
    </div>
  )
}

export default RSVPForm