/* eslint-disable no-console */
const express = require('express');
const { exec } = require('child_process');

const app = express();

app.get('/api/audit/', (req, res) => {
  exec('npm audit --json', (err, stdout) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const auditResult = JSON.parse(stdout);
    const vulnerabilities = Object.values(auditResult.vulnerabilities);

    res.json(vulnerabilities);
  });
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});