
import React from 'react';
import { render, screen } from '@testing-library/react';
import CellHours from './cellHours';

const props = {
    theme: {
        palette:{
            primary: {
               main: '#221c35',
               text: '#ffffff',
               tranparent: '#5d527d'
            },
            secundary:{
               secundary:'#e74eb0',
               text:'#000000',
            },
            third:{
                third:'#e74eb0',
                over:'#8f3c9c',
            }
        }
    }
}
test('load cellHours', ()=> {
    const hours = 7;
    const stringHour = hours < 10 ?  `0${hours}:00`: `${hours}:00`;

    render(<CellHours hours={hours} {...props}/>);

    const element = screen.getByText(stringHour);
    expect(element).toBeInTheDocument();
    
})


