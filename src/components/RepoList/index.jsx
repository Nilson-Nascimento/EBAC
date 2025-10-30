import { useState, useEffect } from "react";
import styles from "./ReposList.module.css";
// import { createConnection } from "../../services/api";

const ReposList = ({ userName, serverUrl }) => {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    // const [serverUrl, setServerUrl] = useState(`https://api.github.com/users/${userName}/repos`)

    useEffect(() => {
        setLoading(true)
        fetch(serverUrl) // createConnection()
            .then(response => response.json()

            ) // 
            .then(data => {
                setTimeout(() => { // Simula um atraso de 3 segundos
                    setLoading(false)
                    console.log('Dados recebidos do servidor:')
                    setRepos(data) // armazenar os dados no estado.
                    console.log(repos)
                }, 3000)
            })
    }, [userName])

    return (
        <div className="container encapsuling">
            {loading ?
                (<p>Carregando repositórios...</p>) : (
                    <>
                        <h1>Repositórios</h1>
                        <ol type="0" start="1" className={styles.list}>
                            {/* Method 1 */}
                            {/* {repos.map((repo, index) => (
                    <li key={repo.id}> {index + 1} -
                        Nome: <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
                        <b>Linguagem:</b> {repo.language ? repo.language : 'N/A'}
                    </li>
                ))} */}
                            {/* Method 2 */}
                            {/* {repos.map(repo => (
                    <li key={repo.id}>
                        <b>Nome:</b> <a target="_blank" href={repo.html_url}>{repo.name}</a> <br />
                        <b>Linguagem</b> : {repo.language ? repo.language : 'N/A'}
                    </li>
                ))} */}
                            {/* Method 3 - Desestrutuction */}
                            {repos.map(({ id, name, html_url, language, owner }) => (
                                <li key={id} className={styles.listItem}>
                                    <p>
                                        <div className={styles.itemName}>
                                            <b>Nome:</b> <a className={styles.itemLink} target="_blank" href={html_url}>{name}</a>
                                        </div>
                                        <div className={styles.itemLanguage}>
                                            <b>Linguagem: </b>{language ? language : 'N/A'}
                                        </div>
                                        {/* {owner.login}
                            {owner.id}
                            {owner.avatar_url && (
                                <img src={owner.avatar_url} alt={`${owner.login} avatar`} width="50" />
                            )} */}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </>
                )} {/*(
            <p>Carregando repositórios...</p>
            ) É possível usar os parênteses para quebrar linhas*/}

        </div>
    )

}

export default ReposList;