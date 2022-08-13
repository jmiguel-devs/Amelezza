import React, {useEffect} from "react";
import { Container, Grid } from "@mui/material";
import "./styles.css"
import DehesaImage from "../../resources/images/dehesa-amelezza.jpg";


const Intro = () => {

    return (
        <Grid container className="intro-container">
            <h2 className="intro-title">Comparte lo que sientes.<br/>Disfruta lo que haces.</h2>
            <img className="intro-image" alt="dehesa-amelezza" src={DehesaImage} />
            <div>
                <div class="since-1964">
                    <hr class="vertical-hr"/>
                    <hr class="horizontal-hr"/>
                    <h3 style={{ marginTop: "1rem"} } class="mademirage desde-1964">Desde 1964</h3>
                    <p>Nuestro pasión es el legado<br/>que pasa de abuelos a nietos.</p>
                    <hr class="horizontal-hr"/>
                    <hr class="vertical-hr inner-element"/>
                </div>

            </div>
        </Grid>
    )
}

export default Intro