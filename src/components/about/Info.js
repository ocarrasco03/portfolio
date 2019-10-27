import React from "react";
import {
  Typography,
  makeStyles,
  Grid,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import BulletIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#ff3411",
    borderRadius: "10px",
    padding: "15px 10%",
    color: "#fff",
    fontFamily: "Poppins",
    textAlign: "left"
  },
  title: {
    fontWeight: 400,
    fontSize: "22px",
    lineHeight: "26px"
  },
  text: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "17px"
  },
  text2: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "17px",
    opacity: 0.5
  },
  border: {
    border: "1px solid black"
  },
  mt: {
    marginTop: "30px"
  },
  noPad: {
    padding: 0
  },
  mb40: {
      marginBottom: '40px',
  },
  bullet: {
      fontSize: '12px'
  },
  bulletMark: {
      fontSize: '12px',
      opacity: 0.2,
  },

}));

const calculateAge = birth => {
  let birthdate = new Date(birth);
  let birthDay = birthdate.getDate();
  let birthMonth = birthdate.getMonth();
  let birthYear = birthdate.getFullYear();

  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();

  if (day >= birthDay && month >= birthMonth) {
    return year - birthYear;
  } else {
    return year - birthYear - 1;
  }
};

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.mb40}>
          <Typography variant="h5" gutterBottom className={classes.title}>
            Personal Information
          </Typography>
          <Grid container spacing={0} className={classes.mt}>
            <Grid item xs={4}>
              <Typography
                variant="caption"
                gutterBottom
                className={classes.text2}
              >
                Name:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="caption"
                gutterBottom
                className={classes.text}
              >
                Oscar Humbreto Carrasco Parrales
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="caption"
                gutterBottom
                className={classes.text2}
              >
                Age:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="caption"
                gutterBottom
                className={classes.text}
              >
                {calculateAge("08/03/1990")}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="caption"
                gutterBottom
                className={classes.text2}
              >
                Experience:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="caption"
                gutterBottom
                className={classes.text}
              >
                2
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="caption"
                gutterBottom
                className={classes.text2}
              >
                Language:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="caption"
                gutterBottom
                className={classes.text}
              >
                Spanish
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.mb40}>
          <Typography variant="h5" gutterBottom className={classes.title}>
            Competency
          </Typography>
          <Grid container spacing={0} className={classes.mt}>
            <Grid item xs={4}>
              <Typography
                variant="caption"
                gutterBottom
                className={classes.text}
              >
                PHP
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="caption"
                gutterBottom
                className={classes.text}
              >
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bulletMark} />
                <BulletIcon className={classes.bulletMark} />
                <BulletIcon className={classes.bulletMark} />
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="caption"
                gutterBottom
                className={classes.text}
              >
                NodeJS
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="caption"
                gutterBottom
                className={classes.text}
              >
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bulletMark} />
                <BulletIcon className={classes.bulletMark} />
                <BulletIcon className={classes.bulletMark} />
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="caption"
                gutterBottom
                className={classes.text}
              >
                ReactJS:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="caption"
                gutterBottom
                className={classes.text}
              >
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bulletMark} />
                <BulletIcon className={classes.bulletMark} />
                <BulletIcon className={classes.bulletMark} />
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="caption"
                gutterBottom
                className={classes.text}
              >
                MongoDB:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="caption"
                gutterBottom
                className={classes.text}
              >
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bullet} />
                <BulletIcon className={classes.bulletMark} />
                <BulletIcon className={classes.bulletMark} />
                <BulletIcon className={classes.bulletMark} />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.mb40}>
          <Typography variant="h5" gutterBottom className={classes.title}>
            Languages
          </Typography>
          <List>
            <ListItem className={classes.noPad}>
              <ListItemText
                primary="Spanish (Native)"
                className={classes.text2}
              />
            </ListItem>
            <ListItem className={classes.noPad}>
              <ListItemText
                primary="English (Intermediate)"
                className={classes.text2}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} className={classes.mb40}>
          <Typography variant="h5" gutterBottom className={classes.title}>
            Hobbies
          </Typography>
          <List>
            <ListItem className={classes.noPad}>
              <ListItemText primary="Swim" className={classes.text2} />
            </ListItem>
            <ListItem className={classes.noPad}>
              <ListItemText primary="Dive" className={classes.text2} />
            </ListItem>
            <ListItem className={classes.noPad}>
              <ListItemText primary="Baseball" className={classes.text2} />
            </ListItem>
            <ListItem className={classes.noPad}>
              <ListItemText primary="Soccer" className={classes.text2} />
            </ListItem>
            <ListItem className={classes.noPad}>
              <ListItemText
                primary="Outdoor Activities"
                className={classes.text2}
              />
            </ListItem>
            <ListItem className={classes.noPad}>
              <ListItemText
                primary="Paintball Wars"
                className={classes.text2}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
