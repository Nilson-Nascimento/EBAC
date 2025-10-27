import { useState, useEffect } from "react"

const Form = () => {

    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState("");
    const [calculo, setCalculo] = useState(false);
    const [r, setR] = useState("");

   useEffect(() => {
            console.log("Use Effect- Disparou")
            setR(result()); // Extrai o texto do elemento <p> retornado pela função result
            console.log(r);
            
        }, [calculo]); // Sempre que o estado calculo for alterado, o useEffect será disparado.

    const changeName = (event) => {
        setNome(event.target.value);

    }

    const media = () => {
        const sumMedia = (Number(materiaA) + Number(materiaB) + Number(materiaC)) / 3;

        return sumMedia.toFixed(0);
    }
    const result = () => {

        if (media() >= 7) {
            return <p>{nome} você foi aprovado com média {media()} ponto(s)</p>;
        } else if (media() >= 4 && media() < 7) {
            return <p>{nome} você foi reprovado com média {media()} ponto(s)</p>;
        } else {
            return <p>{nome} Digite suas Notas</p>;
        }
    }

    

    return (
        <div>
            <form>
                <input type="text" placeholder="Digite Seu Nome" onChange={changeName} />
                <input type="number" placeholder="Nota da Matéria A" onChange={e => setMateriaA(e.target.value)} />
                <input type="number" placeholder="Nota da Matéria B" onChange={e => setMateriaB(e.target.value)} />
                <input type="number" placeholder="Nota da Matéria C" onChange={e => setMateriaC(e.target.value)} />
                <p>
                    <button type="button" onClick={() => setCalculo(!calculo) }>Mostar Resultado</button>
                </p>
            </form>
            <h3>Resultado:</h3>
            
            {/* {calculo && <p>{(r)}</p>} Condicional para mostrar o resultado apenas quando o estado calculo for true. Ao acionar o botão, será executado o que está após &&> */}

            {<p>{(r)}</p>} {/* Condicional para mostrar o resultado apenas quando o estado calculo for true. Ao acionar o botão, será executado o que está após &&>*/}
        </div>
    );

}

export default Form;