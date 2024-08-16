import React from 'react';

import { z } from 'zod';
import { Input } from './ui/input';
import { authFormSchema } from '@/lib/utils';
import { Control, FieldPath } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from './ui/form';

const formSchema = authFormSchema('sign-up');

interface CustomFieldFormProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  placeholder: string;
  label: string;
  type?: string;
};

const CustomFormField = ({ control, name, placeholder, label }: CustomFieldFormProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
          <FormLabel className='form-label'>
            {label}
          </FormLabel>
          <div className='flex flex-col w-full'>
            <FormControl>
              <Input
                placeholder={placeholder}
                className='input-class'
                type={name === 'password' ? 'password' : 'text'}
                {...field}
              />
            </FormControl>
            <FormMessage className='form-message mt-2' />
          </div>
        </div>
      )}
    />
  );
};

export default CustomFormField;