import React from 'react';
import './App.css'
import { DataTable } from './components/DataTable/DataTable';


interface IProps{
    name?:string;
}

const App: React.FC<IProps> = (props:IProps) => {
return (
<div>
    <h1>Hello, {props.name}!  Welcome to React and TypeScript. </h1>
    <DataTable/>
</div>
);
}
App.defaultProps = {
    name : "User",
};


export default App;