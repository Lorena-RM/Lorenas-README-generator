// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "IBM":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "None":
      return "";
    default:
      console.log("choose an option");
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") return "* [Licesnse](#License)";
  else return "";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") return "## [License](table-of-contents)";
  else return "";
}

function renderLicenseSectionInfo (license) {
  if (license !== "None") return "### My project is under the following Licenses:";
  else return "";
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  
  ${renderLicenseLink(data.license)}

  * [Description](#description)
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseSectionInfo(data.license)}
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
  Take a look at some other work ive done on my repos from my Github:
  
  * Github: [${data.githubusername}](https://github.com/${data.githubusername})

  Get in contact with me Directly within linkden or my personal email:

  * Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
