import styles from './Perfil.module.css';
// import "./index.css";

const Perfil = ({nome, avatarGithub}) => {
    // const usuario = {
    //     name: 'Nilson Nascimento',
    //     avatarGithub: 'https://github.com/Nilson-Nascimento.png',
    // }

    // Desestruturação de props
    // const { nome, avatarGithub } = props;
    
    return (
        <header className={styles.header}>
            {/* {JSON.stringify(props)} Exibe o nome do usuário em formato JSON. */}
            <h1
            className="logo-spin">Desenvolvedor Full Stack Java</h1> {/* Título principal exibido em um elemento h1. Em React */}
            <h2 >{nome}</h2> {/* Nome do usuário exibido em um elemento h2. */}
            <img className={styles.avatar} src={avatarGithub} />{/* Imagem do avatar do GitHub. Em src não é necessário as "" duplas*/ }
            {/* <p>Olá 👋 Eu Sou Nilson Nascimento
🌟 Uma Jornada através do Mundo do Código

Desde os primeiros dias, Java foi meu ponto de partida. Na Unifacs, mergulhei na programação orientada a objetos. Mas a jornada não parou por aí.

⚙️ Capítulo 2: Explorando o Stack Tecnológico Do frontend ao backend, me tornei um mestre fullStack. Java, HTML, JavaScript e CSS se tornaram ferramentas essenciais. Construí sistemas complexos e elegantes que deixaram uma marca no mundo digital.

🔍 Capítulo 3: Diversificando Minhas Habilidades A busca pelo conhecimento nunca cessou. Explorei Python, R e outras ferramentas de análise de dados, expandindo meu repertório e enriquecendo minhas habilidades como desenvolvedor.

🌐 Capítulo 4: Conexão entre Frontend e Backend Entendi a importância da integração perfeita entre o frontend e o backend. Java continuou sendo a espinha dorsal, enquanto HTML, JavaScript e CSS deram vida e beleza às minhas criações.

💻 Capítulo 5: Escrevendo o Futuro do Código Agora, compartilho minha experiência e conhecimento com outros entusiastas. Cada projeto fullStack é uma nova história a ser contada, uma oportunidade para criar algo extraordinário e deixar minha marca no mundo da tecnologia.

Bem-vindo à minha jornada pelo mundo do código! Juntos, vamos explorar novos horizontes e escrever o futuro da tecnologia. 🚀🌐</p> */}
        </header>
    );
}

export default Perfil;