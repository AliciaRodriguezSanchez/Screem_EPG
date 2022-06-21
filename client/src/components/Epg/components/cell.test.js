
import React from 'react';
import { render, screen } from '@testing-library/react';
import Cell from './cell';
import { formatedDate, isActiveProgram } from '../../../utils/utils';
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
test('load cell', ()=> {

    const title = "Film 1";
    const start = "2018-10-26T00:00:00+02:00";
    const end = "2018-10-26T00:40:00+02:00";
   

    render(<Cell title={title} start={start} end={end} {...props}/>);

    const elementName = screen.getByText(title);
    expect(elementName).toBeInTheDocument();

    
})

