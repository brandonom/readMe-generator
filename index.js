const inquirer = require('inquirer');
const fs = require('fs');
const genReadme = require('./readMeGen');
const project = {
    references: []
};

function getTitle() {
    inquirer.prompt({
        name: 'title',
        message: 'Please enter your project title.'
    }).then(answer => {
        project.title = answer.title;
        getDescription();
    });
}

function getDescription() {
    inquirer.prompt({
        name: 'description',
        message: 'Please enter your project description.'
    }).then(answer => {
        project.description = answer.description;
        getInstallation();
    });
}

function getInstallation() {
    inquirer.prompt({
        name: 'installation',
        message: 'Please enter your installation steps.'
    }).then(answer => {
        project.installation = answer.installation;
        getUsage();

    });
}

function getUsage(){
    inquirer.prompt({
        name: 'usage',
        message: 'Please enter your programs usage information.'
    }).then(answer=>{ 
        project.usage = answer.usage;
        getLicenseMenu();
    })
}

// function getLicense(){
//     inquirer.prompt({
//         name: 'license',
//         message: 'Please enter license.'
//     }).then (answer => {
//         project.license = answer.license;
//         getLicenseMenu();
//     })
// }

function getLicenseMenu(){
    inquirer.prompt({
        name: 'choice',
        message: 'Please make a choice',
        type: 'list',
        choices: ['Academic Free License v3.0', 'Artistic license 2.0', 'Open Software License 3.0']
    }).then(answer=>{ 
        project.license = answer.license;
        switch (answer.choice) {
            case 'Add license':
                return getLicense();
            default: 
                getContributing();
        }
    });
}

function getContributing(){
    inquirer.prompt({
        name: 'contribution',
        message: 'Please enter contributions.',
    }).then(answer =>{
        project.contributing = answer.contributing;
        getContributingMenu();
    })
}

function getContributingMenu(){
    inquirer.prompt({
        name: 'choice',
        message: 'Please make a choice.',
        type:'list',
        choices: ['Add a contribution', 'Next']
    }).then(answer => {
        switch (answer.choice) {
            case 'Add a contribution':
                return getContributing();
            default:
                getTest();
        }
    })
}

function getTest() {
    inquirer.prompt({
        name: 'test',
        message: 'Please add test',
    }).then(answer =>{
        project.test = answer.test;
        getReferenceLink();
    })

}

function getReferenceLink() {
    inquirer.prompt({
        name: 'link',
        message: 'Please enter the reference link.'
    }).then(answer => {
        project.references.push(answer.link);
        showReferenceMenu();
    });
}

function showReferenceMenu() {
    inquirer.prompt({
        name: 'choice',
        message: 'Please make a choice.',
        type: 'list',
        choices: ['Add a reference link', 'Next']
    }).then(answer => {
        switch (answer.choice) {
            case 'Add a reference link':
                return getReferenceLink();
            default:
                showQuestions();
        }
    });
}

function showQuestions() {
    inquirer.prompt({
        name: 'question',
        message: 'Please enter github username.'
    }).then(answer => {
        project.questions = answer.questions;
        showQuestions2()
        })
    
}

function showQuestions2() {
    inquirer.prompt({ 
        name: 'question2',
        message: 'Please enter email adress.'
    }).then(answer => {
        project.questions2 = answer.questions2;
        showMainMenu()
    })
}

function showMainMenu() {
    inquirer.prompt({
        name: 'choice',
        message: 'Please choose a menu item.',
        type: 'list',
        choices: ['Build README', 'Generate README File']
    }).then(answer => {
        switch (answer.choice) {
            case 'Build README':
                getTitle();
                break;
            case 'Generate README File':
                genReadMe();
                break;
                default:
                //const modifiedContent = data.replace()
                break;
            }
        });
    }
    
    function genReadMe () {
        console.log("HERE!")
        fs.writeFileSync('genReadMe.md', genReadme(project), (err) => {
             console.log(err);

        })
        console.log('generated');
        console.log(project);
        process.exit();
}


// function exitProcess(){
//     inquirer.prompt({
//         name: 'choice',
//         message: "Would you like to exit ?",
//         type: 'list',
//         choices :['No','Yes']
//     }).then(answer => {
//         switch (answer.choice) {
//             case 'No':
//                 return showMainMenu();
//             case 'Yes': 
//                 return process.exit();


//         }

//     }
//         )

// }

showMainMenu();

