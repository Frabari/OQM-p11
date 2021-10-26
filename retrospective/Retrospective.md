# TEMPLATE FOR RETROSPECTIVE (Team P11)

The retrospective should include _at least_ the following
sections:

- [process measures](#process-measures)
- [quality measures](#quality-measures)
- [general assessment](#assessment)

## PROCESS MEASURES

### Macro statistics

- Number of stories committed vs done --> 3 stories committed, 3 done
- Total points committed vs done --> 10 points committed, 10 points done
- Nr of hours planned vs spent (as a team) --> 56 hour planned and about 59 spent

**Remember** a story is done ONLY if it fits the Definition of Done:

- Unit Tests passing
- Code review completed
- Code present on VCS
- End-to-End tests performed

> Please refine your DoD: our definition includes

- Code actually works
- Unit and integration tests only implemented
- End-to-End tests performed

### Detailed statistics

| Story                  | # Tasks | Points | Hours est. | Hours actual |
| ---------------------- | ------- | ------ | ---------- | ------------ |
| Transversal stories #0 | 7       | -      | 25         | 28           |
| Choose a service #1    | 3       | 3      | 12         | 14           |
| Service completed #2   | 3       | 2      | 13         | 10           |
| Receiving an alert #3  | 1       | 5      | 6          | 7            |

> place technical tasks corresponding to story `#0` and leave out story points (not applicable in this case)

- Hours per task (average, standard deviation) --> average estimated: 56/14 = 4, average actual: 59/14 = 4.2
- Total task estimation error ratio: sum of total hours estimation / sum of total hours spent from previous table --> 56/59 = 0.95

## QUALITY MEASURES

- Unit Testing:
  - Total hours estimated --> 1 hour
  - Total hours spent --> 30 mins
  - Nr of automated unit test cases --> 7
  - ~~Coverage (if available)~~
- E2E testing:
  - Total hours estimated --> 1 hour
  - Total hours spent --> 30 mins
- Code review
  - Total hours estimated --> ND
  - Total hours spent --> at least 3 hours
- ~~Technical Debt management:~~
  - ~~Total hours estimated~~
  - ~~Total hours spent~~
  - ~~Hours estimated for remediation by SonarQube~~
  - ~~Hours estimated for remediation by SonarQube only for the selected and planned issues~~
  - ~~Hours spent on remediation~~
  - ~~debt ratio (as reported by SonarQube under "Measures-Maintainability")~~
  - ~~rating for each quality characteristic reported in SonarQube under "Measures" (namely reliability, security, maintainability )~~

## ASSESSMENT

- What caused your errors in estimation (if any)?
  We have problems in different fields, starting from what concerning new development environment, after that we have some troubles in knowledge among team members and also task distribution give us problem.

- What lessons did you learn (both positive and negative) in this sprint?
  We have learned that:

1. We do not have to understimate the development time (as negative aspect).
2. If we work together and communicate well, the team works and brings home the goals set (as positive aspect).

~~- Which improvement goals set in the previous retrospective were you able to achieve?~~

~~- Which ones you were not able to achieve? Why?~~

- Improvement goals for the next sprint and how to achieve them (technical tasks, team coordination, etc.)
  We can manage in a better way the division of time between all team members.
  Moreover, we could handle the tasks related to a story in a smarter way: reducing the size of the tasks and the amount of people assigned to a task. We can also improve the knowledge of the development environment. To achieve the last goal we must know better each other skills and setting new learning task in order to exploit better the environment.

> Propose one or two

- One thing you are proud of as a Team!!
  We are proud of harmony we achieve during the time we shared together.
