import './App.css'
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Indice from './notes/DAM/Indice.md?raw';


const Home = () =>{
    const [content, setContent] = useState(Indice);

  

    return (
        <div>
            <h1>Notas</h1>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    )
}

export default Home;