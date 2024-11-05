import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.jpg"


export default function Banner(){
    return (
        <div className={styles.banner}>
           <div className={styles.apresentacao}>
            <h1 className= {styles.titulo}>
                Olá, Mundo!
            </h1>
            <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Sou a Beatriz Eduarda, estudante de Análise e Desenvolvimento de Sistemas no IESB. Aqui compartilho um pouco de alguns conhecimentos sobre tecnologia, espero que assim como eu, aproveitem também!
            </p>
            </div>
            <div className={styles.imagens}>
                <img
                className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}

              />  


                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto da Beatriz Eduarda"
                />

            </div>
           </div>
    
    )
}