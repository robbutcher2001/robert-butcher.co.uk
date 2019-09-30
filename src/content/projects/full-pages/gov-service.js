const govServiceContent = {
  title: 'Government',
  logoUrl: '/content/images/gov4.jpg',
  logoLink: '/projects/gov-service',
  role: 'Flow-Based and Stream-Orientated Programmer',
  dates: 'Jan 2019 - Present',
  prose: [
    'Rob\'s current role primarily exists of architecting and developing a flow-based system for message processing. Data is ingested as several disparate data sources, validated, transformed then standardised into a common, canonical format. Most of this was achieved using Apache NiFi, a technology previously developed by the NSA (National Security Agency) and open-sourced in 2014, allows processor groups to act on data, passing output to further processor groups to achieve a pre-defined goal. Decisions can be made to route data on success paths or failure paths. Visual flow of data on a canvas helps to understand where bottlenecks exist in the system.',
    'Message persistence and resilience is managed through Kafka topics, working on a FIFO principle. NiFi flow has been designed to be idempotent so messages can be replayed if needed from Kafka, without affecting the end result. NiFi keeps track of all data lineage.',
    'Alongside NiFi and Kafka, there are persistent stores and various micro-services. All services are Dockerised and deployed to a Kubernetes cluster. Rob is the most experienced in the team with this cluster so naturally, also wears the DevOps hat within this role.'
  ]
};

module.exports = {
  govServiceContent
};
