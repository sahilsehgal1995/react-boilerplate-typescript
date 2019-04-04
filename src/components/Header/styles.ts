/*
 * Header Styles
 *
 * This contains all the css for the Header container.
 * Created by Bantai:sahil for Turtlemint on 3/27/2019, 12:06:53 PM
 */

export const styles = (theme: any) => ({
    callText: {
        verticalAlign: 'middle',
    },
    icon: {
        color: theme.palette.text.secondary,
        fontSize: 'inherit',
        verticalAlign: 'middle',
    },
    layout: {
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 1150,
        },
        width: 'auto',
    },
    link: {
        '&:hover': {
            background: theme.background.whiteTransparent,
            color: theme.color.white,
            transition: 'background 0.35s cubic-bezier(0.36, 0.6, 0.23, 1)',
        },
        'color': theme.palette.text.secondary,
        'display': 'inline',
        'padding': theme.spacing.unit * 0.8,
    },
});
