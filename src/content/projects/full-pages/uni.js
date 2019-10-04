module.exports = {
  title: 'A Top English University',
  logoUrl: '/content/images/uni.jpg',
  logoLink: '/projects/uni',
  role: 'Principal DevOps Engineer',
  dates: 'April 2017 - April 2018',
  prose: [
    'Rob designed and solely implemented the Amazon Web Services environment architecture from a fresh AWS account for a client back in 2017. It was the first project within his company to use the serverless technology, AWS Lambda, with a client. Integration was set up between the WAF to CloudFront, which was used for the routing of static file requests to S3 and API requests to API Gateway. Rob used API Gateway for request payload validation, authentication and to proxy all API requests to Lambda. Authorisation was managed in the Lambda middleware layer through RBAC with AWS IAM, with some limited ABAC when the most granular control was required.',
    'Rob drew up the formal design documents and eventually even implemented a mechanism to autonomously deploy code drops into the client\'s integration environment ready for end-of-sprint demos. During his time on the project, Rob worked closely with Penetration Testers and Information Security experts to attain a secure platform through the use of various browser security policies including: a Content Security Policy; Strict Transport Security header (force to https) and XSS-Protection.',
    'The entire stack was managed as configuration (configuration-as-code) using AWS CloudFormation. CloudFormation offers repeatable, parameterised, full-stack deployments, providing flexibility yet confidence when replicating changes across environments. Rob designed the stack to be as modular as possible, grouping services logically so components could be hot-swapped at a later date without affecting the interface to the surrounding components.',
    'The CloudFormation stack was managed using AWS CodePipeline, which automated the deployment of any changes pushed to develop or master branches into the relevant environments. Rob introduced quality-gates where approval by senior developers was required before say, a deployment was automatically pushed to the client\'s AWS account. Overall, the automated nature of deployments created an incredibly fast integration-feedback loop for the developers\' and the client.',
    'The team hit a few AWS stumbling blocks during the last year of the project, each resolved with the help of AWS Support but in fact out of the 7 issues raised, 2 of them turned out to be corner-cases where AWS had not even accounted before. This resulted in AWS raising feature requests on the team\'s behalf.',
    'Quote from Rob\'s Project Manager at the time: "He has led the charge when it comes to researching, trialling and ultimately implementing patterns using the AWS suite of services."',
    'Quote from the Account Architect of the project: "Rob has continued to innovate in this [architecture design] area throughout the construction sprints, to the point where he has helped shaped AWS best practice for large API Gateway and Lambda deliveries, not just for our company, but in its totality - there will be projects across the world benefiting from Rob\'s findings and collaborative working with AWS."',
    'Rob received a Thank You award from the client for his work on the project in 2017.'
  ],
  codeSnippetTitle: 'Rob isn\'t allowed to post any code from previous professional projects but here is a snippet from his personal project:',
  codeSnippetProse: 'Above is a snippet from the CloudFormation template used to deploy this website to AWS. Let\'s briefly step through the config:',
  codeSnippetStepThrough: [
    'Initially, we define some top-level config for the distribution, including a domain alias for \'www\'.',
    'The \'ViewerCertificate\' config allows us to reference the DNS cert provided by AWS ACM so we can serve all of our content and API requests over https. We in fact, force this later with the \'ViewerProtocolPolicy\' directive.',
    'We then set up some origins. An Origin is where CloudFront will forward requests to in order to get a copy of the actual content to serve. We set up an S3 origin for serving our static files and then an API origin on the path \'/api\' in order to route requests for the Contact Rob form in the footer of every page. We force usage of TLS here.',
    'As this website is a Single Page App, we need 404 requests to serve the index.html file and let the React app in the browser decide which components to display based on the URL. This is done with the \'DefaultRootObject\' and the \'CustomErrorResponses\' settings in the origin. Here we force a 404 response code to be 200.',
    'The penultimate section is to define the \'DefaultCacheBehavior\' of the distribution. Without a cache behaviour, the distribution will not know what to do with the origins. Here, we define a catch all (*) for requests to route to the S3 bucket. CloudFront will order this as least important in order of precedence.',
    'Lastly, we define any custom cache behaviours under \'CacheBehaviors\', specifically here anything that matches \'/api\' in the request. This will be evaluated before the catch all (*) \'DefaultCacheBehavior\'. We use this cache behaviour to catch API requests and route them to API Gateway.'
  ],
  codeSnippetEnd: 'Thanks for reading and if you\'d like to see the full codebase, please head over to ',
  codeSnippetLink: 'https://github.com/robbutcher2001/robert-butcher.co.uk',
  codeSnippetLinkText: 'github.com/robbutcher2001.'
};
