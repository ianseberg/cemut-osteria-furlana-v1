export const colors = {
    mainWhite: `#fff`,
    mainBlack: `#262626`,
    mainRed: `#4b0925`,
    mainYellow: `#fdeb35`,
    mainBlue: `#1ba3e0`,
}

export const transDefault = 'transition:all 0.5s ease-in-out';

export const transObject = ({ property = 'all', time = '0.5s', type = 'ease-in-out' }) => {
    return `transition:${property} ${time} ${type}`
}

export const textSlanted = `font-family:'Caveat', cursive;`

export const letterSpacing = ({ spacing = '0.1rem' }) => {
    return `letter-spacing:${spacing}`
}

export const border = ({ width = '0.15rem', type = 'solid', color = 'white' }) => {
    return `border:${width} ${type} ${color}`
}