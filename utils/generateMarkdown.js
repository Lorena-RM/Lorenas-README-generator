// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  
  ${renderLicenseLink(data.license)}

  * [Description](#Description)
  
  * [Installation](#Installation)
  
  * [Usage](#Usage)
  
  * [Contributing](#contributing)
  
  * [Tests](#Tests)
  
  * [Questions](#questions)
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  
  ## [Description](#table-of-contents)
  ${data.desc}

  ## [Installation](#table-of-contents)
  ${data.installation}

  ## [Usage](#table-of-contents)
  ${data.usage}

  ## [Contributing](#table-of-contents)
  ${data.contributors}

  ## [Tests](#table-of-contents)
  ${data.tests}

  ## [Questions](#table-of-contents)
  ${data.githubusername}
  ${data.email}
`;
}

module.exports = generateMarkdown;
