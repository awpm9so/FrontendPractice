import * as React from 'react';
import { Component, Props } from 'react';


interface DataTableProps extends Props<any> {
    //columns: Column[];
    headersEnabled?: boolean;
    data: any[];
    rowClassGetter?: (row: any) => string;
    onRowClick?: (row: any) => any;
  }

export const DataTable:React.FC<Request> = () => {

    return(
        <table>
            <tbody>
            <tr><th>Unclassified data</th><th>Categoty</th></tr> 
            <tr><td>данные1</td><select>    
                                        <option disabled>Выберите категорию</option>                      
                                        <option value="Категория 1">Categoty 1</option>
                                        <option value="Категория 2">Categoty 2</option>             
                                        <option value="Категория 3">Categoty 3</option>
                                        <option value="Категория 4">Categoty 4</option>                           
                                        </select></tr> 
            <tr><td>данные1</td><td >данные1</td></tr> 
            <tr><td>данные1</td><td >данные1</td></tr> 
            <tr><td>данные1</td><td >данные1</td></tr> 
            <tr><td>данные1</td><td >данные1</td></tr> 
            </tbody>
        </table>
    )

}