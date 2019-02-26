const telcoContent = {
  title: 'UK Telecoms Network',
  logoUrl: '/content/images/telco.jpg',
  logoLink: '/',
  principalRole: 'Account Architect',
  roleA: {
    title: 'Account Architect',
    dates: 'July 2014 - June 2016',
    prose: [
      'In the eyes of the client (add client and company appraisal quote here?), Rob owned the Production environment. He become integral to their flagship device launches, with iPhone often yielding staggering volumes of traffic during Keynotes. Leading up to these events, Rob would work \'in the margins\' executing staggered penetration tests across the Production estate to provide the client with the confidence they needed before one of their biggest revenue events of the year. Rob was very proud during the iPhone 7 launch that this telco was the only one out of the seven major telcos to stay up serving requests. His meticulous preparation leading up to the event was very much to thank for this.',
      'Rob\'s time as a backend developer for the client ultimately helped him realise a gap when he moved into this role. The client for years, would often push content directly into Live for speed. Naturally, as you can imagine, this is fraught with danger. Pages were often brought down. Sometimes the entire site! It was clear to Rob there needed to be some kind of buffer.',
      'He began by selling the benefits of an intermediate, Pre-Production environment to the client. After several presentations to various stakeholders, the client offered buy-in. Rob began re-commissioning forgotten hardware; installing, hardening and proving the Pre-Production server itself; enrolling testers to validate the system; devising a ‘Move-to-Production’ plan and finally, deploying the new server into the Production estate itself.',
      'A bundle of nerves and very aware of the integral changes he was about to make to a Production estate over a weekend, his planning and re-planning ultimately paid off and they went live that weekend. He was relieved it could be called a success!',
      'Today, the client still use Pre-Production as a route to Live and often, it catches defects that can be resolved before damaging Production and the online reputation of the client. A job worth doing.'
    ]
  },
  roleB: {
    title: 'Lead Java EE Developer',
    dates: 'Early 2012 - July 2014',
    prose: [
      'Rob started work on this account back in 2012 as a backend Java developer and supported the transition of the account to another UK location.',
      'Rob\'s most notable piece of work was a three months project consolidating ten or eleven fragmented Production API feeds organically grown over time into a single, hot-reloadable Java backend with a consistent and documented schema. Something the client needed for years.',
      'During his time as a Dev, he built up an invaluable relationship with the client, with weekly visits to their site and ultimately complete integration into their Scrum team. The client even bought him an Amazon Alexa as a parting gift! Tasty.'
    ]
  }
};

module.exports = {
  telcoContent
};
