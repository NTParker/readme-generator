// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "BSD") {
    badge =
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "GNU") {
    badge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    badge = "";
  }

  return badge;
}

// Function that returns the license link
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    lisenceLink = "https://choosealicense.com/licenses/mit/";
  } else if (license === "Apache 2.0") {
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
  } else if (license === "BSD") {
    licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
  } else if (license === "GNU") {
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else license === "None";

  return licenseLink;
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === "None") {
    licenseSection = "";
  } else {
    licenseSection = `License: ${license}`;
  }
  return licenseSection;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # ${renderLicenseBadge(data.license)} ${renderLicenseSection(data.license)} 

  # Description
  ${data.description}

  # Table of Contents
  * [Installation](#install)
  * [Usage](#usage)
  * [How to Contribute](#contribute)
  * [License](#license)
  * [Test](#test)
  * [Questions?](#questions)
  
  # Installation
  ${data.install}

  # Usage
  ${data.usage}

  # How to Contribute
  ${data.contribute}

  #License
  ${data.license}
  # ${renderLicenseBadge(data.license)} 
  # ${renderLicenseSection(data.license)} 
  # ${renderLicenseLink(data.license)}

  # Test
  ${data.test}

  # Questions?
  If you have any questions, please reach out!
  GitHub: https://github.com/${data.username}
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
