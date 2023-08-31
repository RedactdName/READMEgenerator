// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `<img src="https://img.shields.io/badge/license-${license}-purple.svg">`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [License](#license)`
  } else {
    return ""
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
      
      This project is Licensed under ${license}`
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title} 

  ${renderLicenseBadge(data.license)}

  ## Description
${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Installation
  ${data.install}


## Usage
${data.use}

${renderLicenseSection(data.license)}

## Questions
If you have any questions or would like to contact me, you can reach me at [${data.email}](mailto:${data.email})

If you'd like to see more of my projects, you can check them out on my GitHub: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
