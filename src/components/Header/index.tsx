/**
 * Header
 * Stateless function Header
 * Created by Bantai:sahil for Turtlemint on 3/27/2019, 12:06:53 PM
 */

import {AppBar, Toolbar, Typography} from '@material-ui/core';
import { unstable_Box as Box } from '@material-ui/core/Box';
import { Grid, Paper } from '@material-ui/core/es';
import CssBaseline from '@material-ui/core/es/CssBaseline';
import withStyles from '@material-ui/core/es/styles/withStyles';
import { LocalPhone as Phone } from '@material-ui/icons';
import React from 'react';

import { FormattedMessage } from 'react-intl';
import {IHeaderProps} from './interface';
import messages from './messages';
import { styles } from './styles';

const Header = (props: IHeaderProps) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position='static' color='secondary'>
                <Box className={classes.layout} display='inherit'>
                    <Grid item={true} xs={6}>
                        <Box color='white' p={1}>
                            <FormattedMessage {...messages.header} />
                        </Box>
                    </Grid>
                    <Grid item={true} xs={6} sm={6} justify='flex-end' container={true}>
                        <Box color='white' className={classes.link}>
                            Article
                        </Box>
                        <Box color='white' className={classes.link}>
                            Raise Claim
                        </Box>
                        <Box color='white' className={classes.link}>
                            Become Partner
                        </Box>
                        <Box color='white' className={classes.link}>
                            <Phone className={classes.icon} />
                            <span className={classes.callText}>18002660101</span>
                        </Box>
                    </Grid>
                </Box>
            </AppBar>
        </React.Fragment>
      );
};

export default withStyles(styles)(Header);
