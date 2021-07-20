// @ts-nocheck
import React from "react";
import { Grid } from "@material-ui/core";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";
import { Details, MainContent } from "./components";
import useStyles from "./styles/appStyles";

export const App = () => {
  const classes = useStyles();
  return (
    <div className="fix-padding">
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        {/* in MOBILE => HIDDEN */}
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <Details title="Income" />
        </Grid>

        <Grid item xs={12} sm={4} className={classes.main}>
          <MainContent />
        </Grid>

        <Grid item xs={12} sm={3} className={classes.desktop}>
          <Details title="Income" />
        </Grid>

        <Grid item xs={12} sm={3} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
};
