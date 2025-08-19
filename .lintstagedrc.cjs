const path = require('path');

const buildEslintCommand = filenames => `next lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '**/*.{js,ts,tsx,scss,json}': 'prettier --write',
  'src/**/*.{js,ts,tsx}': [buildEslintCommand],
};
