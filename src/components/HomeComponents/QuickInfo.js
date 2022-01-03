import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { styles } from '../../utils'
import { Link } from 'gatsby'

export default class QuickInfo extends Component {
    render() {
        return (
            <Section>
                <Title message="ci raccontiamo" title="il nostro concept" />
                <QuickInfoWrapper>
                    <p className="text">
                    Cemût nasce dalla volontà di portare le gioia della tavola friulana e la sua filosofia tramite una selezione di prodotti da partner riconosciuti in Friuli.
                    </p>
                    <Link to="/about/" style={{ textDecoration: 'none' }}>
                        <SectionButton style={{ margin: '2rem auto' }}>Scopri di più</SectionButton>
                    </Link>
                </QuickInfoWrapper>
            </Section>
        )
    }
}

const QuickInfoWrapper = styled.div`
    width: 90%;
    margin: 2rem auto;
    .text {
        font-size: 1.2rem;
        letter-spacing: 2px;
        line-height: 2em;
        color: ${styles.colors.mainGrey};
        word-spacing: 0.2rem;
    }

    @media (min-width: 768px) {
        width: 70%;
    }
    @media (min-width: 992px) {
        width: 60%;
    }
`