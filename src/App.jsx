import { useState } from 'react'

import Perfil from './components/Perfil';
import Form from './components/Form';
import ReposList from './components/RepoList';
// import "./index.css";

function App() {
    const [formVisible, setFormVisible] = useState(false);
    const [userName, setUserName] = useState("");

    return (
        <div className='encapsuling-div'>
            
            <p>Digite seu Perfil Github:
                <input type="text" onBlur={(e) => setUserName(e.target.value)} />
            </p>

            {userName &&

                (
                    <div>
                        <Perfil
                            nome={userName.split(2)}
                            avatarGithub={`https://github.com/${userName}.png`}
                        />

                        <ReposList
                            userName={userName}
                            serverUrl={`https://api.github.com/users/${userName}/repos`}
                        />
                        {/* <Form /> */}
                        {/* {formVisible && <Form/>} Renderiza o componente Form apenas se formVisible for true */}
                        {/* {formVisible && (<Form/>)} Outra forma de renderizar condicionalmente o componente Form */}
                        {/* <button type='button' onClick={() => setFormVisible(!formVisible)}>Toggle Form</button  > */}
                    </div>
                )
            }

            { }

        </div>
    )
}

export default App;