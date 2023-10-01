//class MarkDown {

//}


function genReadme(project) {
    return `
 # ${project.title} 
 
  ## Description

   ${project.description}
 
 ## Table of Contents
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [Contributions](#Contribtions)
    * [Test](#test)
    * [References](#References)
    * [Questions](#Questions)
    * [License](#License)
 
 ## Installation 
  ${project.installation}
 ## Usage 
  ${project.usage}
 ## Contributions
  ${project.contributing}
 ## Test
 ${project.test}
 ## References 
 ${project.references}
 ## Questions 
 'github.com/'${project.questions}, 
 ${project.questions2}
 ### License 
 ${project.license}

 `


}

module.exports = genReadme;