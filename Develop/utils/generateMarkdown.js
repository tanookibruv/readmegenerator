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
  
  g## Here's what this project is about:
  
  ${data.description}

  ## Commands you'll need to get your app started:
  
  ${data.installation}

  ## Usage
  
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}

  ## Contributing
  
  ${data.contributing}

  ## If you have any further questions you may reach me here:
  
  ${data.email}
  
  ## GitHub Username:
  
  ${data.username}

  ## A great way to test your app:
  
  ${data.test}
`;
}

module.exports = generateMarkdown;
