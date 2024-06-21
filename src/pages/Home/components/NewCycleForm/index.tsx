import { FormContainer, MinutesAmountMinutes, TaskInput } from './styles';
import { useContext } from 'react';
import { CyclesContext } from '../..';
import { useFormContext } from 'react-hook-form';

export function NewCycleForm() {
   const { activeCycle } = useContext(CyclesContext);
   const { register } = useFormContext();

   return (
      <FormContainer>
         <label htmlFor=''>I will work on</label>
         <TaskInput
            id='task'
            list='task-suggestions'
            placeholder='Give your project a name'
            disabled={!!activeCycle}
            {...register('task')}
         />
         <datalist id='task-suggestions'>
            <option value='Project 1' />
            <option value='Project 2' />
            <option value='Project 3' />
            <option value='Project 4' />
         </datalist>

         <label htmlFor=''>for</label>
         <MinutesAmountMinutes
            type='number'
            id='minutesAmount'
            placeholder='00'
            step={5}
            min={5}
            max={60}
            disabled={!!activeCycle}
            {...register('minutesAmount', { valueAsNumber: true })}
         />

         <span>minutes.</span>
      </FormContainer>
   );
}
