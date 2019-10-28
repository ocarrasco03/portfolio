import React, { Fragment } from "react";
import {
  Typography,
  makeStyles,
  Fab,
  Grid,
  CssBaseline,
  Container,
  Avatar,
  Link
} from "@material-ui/core";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import BioAvatar from "../../assets/images/bio-img.jpg";
import cv from '../../assets/files/resume.pdf';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: "Poppins",
    fontWeight: 400,
    textAlign: "center",
    color: "#000"
  },
  downloadBtn: {
    marginTop: theme.spacing(5)
  },
  mt5: {
    marginTop: theme.spacing(5)
  },
  mt4: {
    marginTop: theme.spacing(4)
  },
  mt3: {
    marginTop: theme.spacing(3)
  },
  mt2: {
    marginTop: theme.spacing(2)
  },
  mt1: {
    marginTop: theme.spacing(1)
  },
  resume: {
    margin: theme.spacing(1),
    color: "#fff",
    backgroundColor: "#FF1800",
    "&:hover": {
      backgroundColor: "#FF3411"
    },
    boxShadow: "none",
    marginLeft: "auto",
    marginRight: "auto"
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  bioName: {
    fontSize: "35px",
    lineHeight: "45px"
  },
  bioSubtitle: {
    fontSize: "18px",
    lineHeight: "22px"
  },
  bioSocial: {
    color: "#a3a3a3",
    fontSize: 18,
    lineHeight: 22,
    "&:hover": {
      color: "#FF3411"
    }
  },
  socialLink: {
    margin: theme.spacing(1)
  },
  avatar: {
    margin: 10,
    marginLeft: "auto",
    marginRight: "auto",
    maxHeight: 160,
    maxWidth: 160,
    width: "50%",
    height: "50%"
  }
}));

const Bio = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.root}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Avatar
              alt="Oscar Carrasco"
              src={BioAvatar}
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={12} className={classes.mt5}>
            <Typography variant="h2" gutterBottom className={classes.bioName}>
              Oscar Humberto Carrasco Parrales
            </Typography>
            <Typography
              variant="h2"
              gutterBottom
              className={classes.bioSubtitle}
            >
              FullStack Developer
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.mt3}>
            <Typography>
              <Link
                href="https://www.facebook.com/ocarrasco0308"
                className={classes.socialLink}
              >
                <FacebookIcon className={classes.bioSocial} />
              </Link>
              <Link
                href="https://github.com/ocarrasco03"
                className={classes.socialLink}
              >
                <GitHubIcon className={classes.bioSocial} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/oscar-humberto-carrasco-parrales-667535179/"
                className={classes.socialLink}
              >
                <LinkedInIcon className={classes.bioSocial} />
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.downloadBtn}>
            <Fab
              variant="extended"
              aria-label="download"
              className={classes.resume}
              download
              href={cv}
            >
              <CloudDownloadOutlinedIcon className={classes.extendedIcon} />
              Resume
            </Fab>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Bio;
