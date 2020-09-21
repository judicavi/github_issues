import { connect } from "react-redux";
import { BodyIssue } from "./BodyIssue.cmp";
import { IIssuesState } from "../store/actions/types";
import { IPropsBody } from "./types";

const mapStateToProps = (state: IIssuesState): IPropsBody => {
  return {
    issueSelected: {
      title: "Bug: React Portals - Memory Leak",
      number: 19857,
      body:
        "We use React and interact with a 3rd party JS library - we use React Portals to create & destroy React Components within the overall apThe supplied repo demonstrates a very simplified version of what we do - after destroying/cleaning up components and detached HTML elements still remain in memory.\nReact version: 16.3.1",
      state: "Open",
      created_at: "2020-09-18T09:19:11Z",
      user: {
        avarar_url: "https://avatars0.githubusercontent.com/u/1329081?v=4",
        login: "seanlandsman",
      },
      labels: [
        { color: "d4c5f9", name: "Status: Unconfirmed" },
        { color: "d4cFFF", name: "Otro label" },
      ],
    },
    //issueSelected: state.currentIssue
  };
};

export default connect(mapStateToProps)(BodyIssue);
