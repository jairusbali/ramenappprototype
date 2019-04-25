import React from "react";

import Grid from "@material-ui/core/Grid";

import RamenMenu from "./RamenMenu/RamenMenu";
import NoodleMenu from "./NoodleMenu/NoodleMenu";
import ExtraMenu from "./ExtraMenu/ExtraMenu";

const Menu = props => {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <RamenMenu />
      </Grid>
      <Grid item xs={12}>
        <NoodleMenu />
      </Grid>
      <Grid item xs={12}>
        <ExtraMenu />
      </Grid>
    </Grid>
  );
};

export default Menu;
