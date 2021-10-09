// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[License](https://opensource.org/licenses/${license})`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    This application is covered by ${license} license.`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ##${renderLicenseBadge(data.license)}
  
  ## Here's what this project is about:
  
  ${data.description}

  ## Table of Contents
    
  * [Installation](#installation)

  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)

  * [Test](#test)

  * [Questions](#questions)

  * [Github](#github)

  ## Installation

  Commands you'll need to get your app started:
  
  ${data.installation}

  ## Usage
  
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  
  ${data.contributing}

  ## Tests

  A great way to test your application, run this command:
  
  \'\'\'
  ${data.test}
  \'\'\'

  ## Questions

  If you have any further questions you may reach me here:
  
  ${data.email}
  
  ## GitHub

  You can find more of my work here.
  
  ${data.username}
`;
}

module.exports = generateMarkdown;
