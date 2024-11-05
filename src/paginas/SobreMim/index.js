import styles from "./SobreMim.module.css"

import PostModelo from "componentes/PostModelo";

import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/IMAGEM-EU.jpg";


export default function SobreMim(){
    return(
               <PostModelo
                  fotoCapa={fotoCapa}
                  titulo="Sobre mim"
               >
                <h3 className={styles.subtitulo}>
                    Olá, eu sou a Beatriz!

                </h3>

                <img
                
                src={fotoSobreMim}
                alt="Foto da Beatriz!"
                className={styles.fotoSobreMim}/>

               <p className={styles.paragrafo}> Oi, tudo bem? Atualmente sou estudante de Análise e Desenvolvimento de Sistemas. </p>

                <p className={styles.paragrafo}>Minha história com a programação começou no Instituto de Ensino Superior de Brasília (IESB), com o curso de Análise e Desenvolvimento de Sistemas, e desde então a programaçao conquistou um lugar no meu coração, e a partir disso comecei a fazer cursos em algumas plataformas como Alura, Udemy, Dio.. E diversos outros canais no Youtube. </p>

               <p className={styles.paragrafo}> Assim, tem sido uma jornada repleta de aprendizados. </p>
               </PostModelo>
  
    )
}