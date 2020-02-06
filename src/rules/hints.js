'use strict';

const Adviser = require('adviser');

class Hints extends Adviser.Rule {
  constructor(context) {
    super(context);
    this.results = context.shared;
  }

  async run(sandbox) {
    this.results.forEach(result => {
      result.problems.forEach(problem => {
        sandbox.report({ message: problem });
      });
    });
  }
}

Hints.meta = {
  category: 'general',
  description: 'Runs Webhint "hints" on provided URL',
  recommended: true
};

module.exports = Hints;
