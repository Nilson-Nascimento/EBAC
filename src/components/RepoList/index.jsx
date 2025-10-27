import { useState, useEffect } from "react";

const ReposList = () => {
    const [repos, setRepos] = useState([])
    return (
        <ul>
            <li>
                Repositório 1
            </li>
        </ul>
    )

}

export default ReposList;