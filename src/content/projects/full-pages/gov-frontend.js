const govFrontendContent = {
  title: 'Government U.K.',
  logoUrl: '/content/images/gov2.png',
  logoLink: '/projects/gov-frontend',
  role: 'Lead Frontend Developer',
  dates: 'April 2018 - Jan 2019',
  prose: [
    'In March 2018, Rob applied for a lead React developer role with a Government client after their Business requested a new front-end to sit above a graph database-driven service. Initial conception of the visual design had been planned but the application architecture and application design were not.',
    'With most of the initial project requirements already gathered by the BAs, Rob began modelling the global application state and page routing against the flow of the design. Whilst waiting for the team mobilisation, Rob began writing a local mock server against an ICD produced by the team’s architect and finally, integrating a unit testing framework into the CD pipeline. With application state designed, backend services mocked and testing frameworks in place, the project was ready to begin.',
    'Although Rob led a TDD team through this project, TDD does not ‘guarantee’ you a quality product but instead is the foundation to a quality product and where Rob believes you should start. He helped his team take the approach of writing tests against JIRA ticket spec (story acceptance criteria) then filling the code out from there. Something that is not easy without a good deal of experience. The upfront effort of writing tests against spec proved its worth during the development of this product, often reaching those corner cases in code that test data rarely reaches. Quality of code is then reinforced with component integration level testing. Later, cross-browser and UI interaction tests ran on each CD deploy giving the team relevant regression feedback during each feature build.',
    'Sonar integration was introduced during Sprint 2. This helped the team address code smells and track the cyclomatic complexity of the application along with unit test coverage and own-code vulnerabilities. During the final Sprint, Rob and the team were happy to announce to the client they had 0 vulnerabilities (not in transitive dependencies but in team’s code), only 20 code smells and 84% unit test coverage, putting the project at the top of the whole client’s programme for code quality.',
    'Subsequent Sprints saw development of reusable components shared between pages and views, the development of modularised CSS and the maturity of the view > dispatch > saga > reducer application flow, which ultimately becomes backbone of the application. Following integration with an IdP in the CI environment for authentication management, the team were now able to see the SPA served up from a Kubernetes hosted pod and begin cross-browser testing and building a Selenium integration test suite.',
    'Rob and the team liaised closely with the Business and customer user base over the course of the 10 Sprints, providing demonstrations, listening to their feedback and adapting the design and application interaction model to better suit their needs. Often, the users’ do not even know what they want so it is important to get an MVP or fairly immature product in front of them as soon as possible to help derive and evolve their requirements.',
    'The project received very good feedback from the client and was quoted as the ‘exemplar’ work stream within the whole programme, something Rob was very proud to hear.',
    'Rob received a Thank You award from the client for his work on the project.'
  ]
};

module.exports = {
  govFrontendContent
};
