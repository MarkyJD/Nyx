import React from "react";
import './Post.css';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Message from '@material-ui/icons/MessageOutlined';
import Reply from '@material-ui/icons/ReplyOutlined';

const useStyles = makeStyles({
  root: {
    minWidth: 280,
  },
  date: {
    float: "right",
  },
  btn: {
    textAlign: "center",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Post() {
  const classes = useStyles();
  const d = new Date();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          BR Mark
          <span className={classes.date}>
            {d.toLocaleTimeString("en-au") +
              ", " +
              d.toLocaleDateString("en-au")}
          </span>
        </Typography>
        <Typography variant="h6" component="h3">
          211 Change Over
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <strong>TO:</strong> <i>BR Guy, BH Sima, Tim Bone</i>
        </Typography>
        <Typography variant="body2" component="p" align="justify">
          Donec commodo orci sit amet efficitur ullamcorper. Aliquam pulvinar
          justo vel massa maximus tempus. Suspendisse eget tortor vehicula,
          tempus orci nec, pharetra erat. Etiam non tempor purus. Vivamus congue
          enim elementum ligula commodo volutpat. Nam ac orci pulvinar,
          consequat lacus eu, auctor justo. Nullam in tortor ut neque ultrices
          facilisis sit amet in ipsum. Pellentesque porttitor metus eget justo
          imperdiet commodo. Sed porttitor tempor gravida. Duis at quam risus.
          Duis viverra imperdiet diam in blandit.
        </Typography>
      </CardContent>
      <CardActions>
  <Button className={classes.btn}size="small" color="primary" variant="outlined"><Message /></Button>
        <Button className={classes.btn} size="small" color="primary" variant="outlined"><Reply /></Button>
      </CardActions>
    </Card>
  );
}

export default Post;
