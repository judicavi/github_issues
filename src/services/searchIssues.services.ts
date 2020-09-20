import { Octokit } from "@octokit/rest";

export const searchIssue = async (searchTerm) => {
  const octokit = new Octokit({});

  // check for open issues at react repo
  const result = await octokit.search.issuesAndPullRequests({
    q: `repo:facebook/react+is:issue+is:open+${searchTerm}`,
    per_page: 15,
  });

  return result.data.items;
};
