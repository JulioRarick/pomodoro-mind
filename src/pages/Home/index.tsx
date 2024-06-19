import { Play } from 'phosphor-react';
import {
   CountdownContainer,
   FormContainer,
   HomeContainer,
   MinutesAmountMinutes,
   Separator,
   StartCountdownButton,
   TaskInput,
} from './styles';

export function Home() {
   return (
      <HomeContainer>
         <form action=''>
            <FormContainer>
               <label htmlFor=''>I will work on</label>
               <TaskInput
                  id='task'
                  list='task-suggestions'
                  placeholder='Give your project a name'
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
               />

               <span>minutes.</span>
            </FormContainer>
            <CountdownContainer>
               <span>0</span>
               <span>0</span>
               <Separator>:</Separator>
               <span>0</span>
               <span>0</span>
            </CountdownContainer>
            <StartCountdownButton disabled type='submit'>
               <Play size={24} /> Start
            </StartCountdownButton>
         </form>
      </HomeContainer>
   );
}
