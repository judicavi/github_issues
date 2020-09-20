import React from "react";
import { HeaderCmp } from "../components/Header.cmp";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  conteiner: {
    paddingBottom: 65,
    paddingTop: 80,
  },
}));

export const IssuePage = () => {
  const { issueId } = useParams();
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HeaderCmp title="Problema tal" issueId={issueId} useBack={true} />
      <Container maxWidth="md" className={classes.conteiner}>
        Aqui va el cuerpo de la busqueda
      </Container>
    </React.Fragment>
  );
};
