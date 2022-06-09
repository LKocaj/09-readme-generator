function generateMarkdown(data) {
    return `

# ${data.projectName}

## Summary
${data.summary}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Functionality
${data.functionality}

## Credits
${data.credits}
## License
This application is covered by the ${data.license} license. 

## Tests
${data.testFunctions}
## Questions
Follow me on Github: [${data.user}](https://github.com/${data.user})
<br />
<br />
Reach out: ${data.email}
`;
}

module.exports = generateMarkdown;