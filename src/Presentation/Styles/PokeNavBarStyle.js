export function getStyles(theme) {
    return ({
        grow: {
            flexGrow: 1,
        },
        appBar: {
            backgroundColor: 'rgba(52, 52, 52, 0.2)'
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },


        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        navbarP: {
            margin: 25,
            fontSize: 30,
            color: 'white'
        },
        navbarPMobile: {
            margin: 25,
            fontSize: 15,
            color: 'black'
        }
    })
}