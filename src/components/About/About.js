import React from 'react'
import { styles, Section } from '../../utils'
import styled from 'styled-components'

const About = () => {
    return (
        <Section>
            <AboutWrapper>
                <p>Al Cemût seguiamo un semplice mantra: "Sforzati per migliorare continuamente e non fare
                    compromessi sulla qualità!"
                </p>
                <p>Inizialmente eravamo solo una piccola unità con una manciata di dipendenti. Oggi, 3 anni dopo,
                     abbiamo stabilito una presenza di successo in città con una forte forza lavoro di circa
                     15 persone.
                </p>
                <p>
                Fornire cibo di qualità in perfette condizioni igieniche rimane la nostra massima priorità.
                </p>
                <p>
                Il nostro obiettivo è essere leggeri sulle tasche, saziare un range sempre più esigente e garantire
                 che ogni cliente tornerà per altro.
                </p>
            </AboutWrapper>
        </Section>
    )
}
export const AboutWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    p {
        font-size: 1.2rem;
        letter-spacing: 2px;
        color: ${styles.colors.mainBlack};
        margin-bottom: 2rem;
    }
`;

export default About;
