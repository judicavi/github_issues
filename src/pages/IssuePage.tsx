import React from "react";
import { useParams } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export const IssuePage = () => {
  const { issueId } = useParams();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Header issue page #{issueId}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">Aqui va el cuerpo de la busqueda</Container>
    </React.Fragment>
  );
};
