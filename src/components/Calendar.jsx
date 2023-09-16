import React from "react";
import Event from './Event'
const Calendar=()=>{
    return(
        <div className="Calendar"><table><thead>
        <tr>
        <th></th>
        <th>Sunday</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
      </tr></thead>
      <tbody>
        <tr>
            <td className="time">8 am  </td>
             <Event event= 'Fancy Dinner🎩' color='green'/>
             <td></td>
             <td></td>
             <td></td>
             <Event event='Starbucks ☕️' color ='green'/>
             <td></td>
             <td></td>
        </tr>
        <tr>
            <td className="time">9 am  </td>
            <Event event='Subway 🚊' color ='pink'/>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
        </tr>
        <tr>
            <td className="time">10 am  </td>
             <Event />
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
        </tr>
        <tr>
            <td className="time">11 am  </td>
             <Event />
             <td></td>
             <Event event='CSE220 HW ' color ='blue'/>
        </tr>
        <tr>
            <td className="time">12 pm  </td>
             <Event />
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
        </tr>
        <tr>
            <td className="time">1 pm  </td>
             <Event />
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <Event event="WEB102 Class!!!"  color="icecold" location="virtual"/>
        </tr>
        <tr>
            <td className="time">2 pm  </td>
             <Event />
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
        </tr>
        <tr>
            <td className="time">3 pm  </td>
             <Event />
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
        </tr>
        <tr>
            <td className="time">4 pm  </td>
             <Event />
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
        </tr>
        <tr>
            <td className="time">5 pm  </td>
             <Event />
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
        </tr>


        
      </tbody>
      </table>
      
      </div>
    )
}
export default Calendar;