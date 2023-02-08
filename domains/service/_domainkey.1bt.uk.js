addSubDomain({
  description: 'DKIM record',
  domain: '1bt.uk',
  subdomain: '*._domainkey',
  owner: {
    repo: 'https://github.com/tarampampam/free-domains',
  },
  record: {
    TXT: [
      'v=DKIM1; p=',
    ],
  },
})
