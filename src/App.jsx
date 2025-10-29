import { useState } from 'react'

import Perfil from './components/Perfil';
import Form from './components/Form';
import ReposList from './components/RepoList';
// import "./index.css";

function App() {
    const [formVisible, setFormVisible] = useState(false);
    
    return (
       <div className='encapsuling-div'>
            <Perfil
                nome="Nilson Nascimento"
                avatarGithub={`https://github.com/Nilson-Nascimento.png`}
                />

            <ReposList/>
            {/* <Form /> */}
            {/* {formVisible && <Form/>} Renderiza o componente Form apenas se formVisible for true */}
            {/* {formVisible && (<Form/>)} Outra forma de renderizar condicionalmente o componente Form */}
            {/* <button type='button' onClick={() => setFormVisible(!formVisible)}>Toggle Form</button> */}
            
        </div>    
    )
}

export default App;