import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  conteiner: {
    paddingBottom: 65,
    paddingTop: 80,
  },
}));

export const BodyIssue = () => {
  //const { issueId } = useParams();
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="md" className={classes.conteiner}>
        Aqui va el cuerpo de la busqueda xxx
      </Container>
    </React.Fragment>
  );
};
