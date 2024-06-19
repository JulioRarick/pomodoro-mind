import { HistoryContainer, HistoryList } from './styles';

export function History() {
   return (
      <HistoryContainer>
         <h1>My history</h1>
         <HistoryList>
            <table>
               <thead>
                  <th>Task</th>
                  <th>Time</th>
                  <th>Start</th>
                  <th>Status</th>
               </thead>
               <tbody>
                  <tr>
                     <td>Task</td>
                     <td>20 minutes</td>
                     <td>2 months ago</td>
                     <td>Completed</td>
                  </tr>
                  <tr>
                     <td>Task</td>
                     <td>20 minutes</td>
                     <td>2 months ago</td>
                     <td>Completed</td>
                  </tr>
                  <tr>
                     <td>Task</td>
                     <td>20 minutes</td>
                     <td>2 months ago</td>
                     <td>Completed</td>
                  </tr>
                  <tr>
                     <td>Task</td>
                     <td>20 minutes</td>
                     <td>2 months ago</td>
                     <td>Completed</td>
                  </tr>
               </tbody>
            </table>
         </HistoryList>
      </HistoryContainer>
   );
}
