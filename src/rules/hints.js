'use strict';

const Adviser = require('adviser');

class Hints extends Adviser.Rule {
  constructor(context) {
    super(context);
    this.results = context.shared;
  }

  async run(sandbox) {
    const report = {};
    this.results.forEach(result => {
      report.message = `${result.problems.length} webhint hint${result.problems.length > 1 ? 's' : ''} failed`;
      result.problems.forEach(problem => {
        report.verbose += `${problem.category}: ${problem.message} - ${problem.severity}\n  `;
      });
    });
    sandbox.report(report);
  }
}

Hints.meta = {
  category: 'general',
  description: 'Runs Webhint "hints" on provided URL',
  recommended: true
};

module.exports = Hints;
