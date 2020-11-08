## WooliesX API Tech Test - Best Surfing Beaches as per weather conditions

#### Technology used - CucumberJS for BDD, SupertestJs, JavaScript, NodeJs, CircleCI

### Running locally
- `git clone https://github.com/shiveshdewangan/surf-beaches.git`
- `cd surf-beaches`
- `npm install`
- `npm run test`
- `npm run generate:report`

### Running on Circle CI
I have added CI Steps under `.circleci/config.yml` which enables us to run it on **Circle CI Pipeline**.

### Running on Docker Container
- `docker pull shiveshdewangan/weather`
- `docker run shiveshdewangan/weather:latest`

### Test Coverage and My Notes
- Included all the Acceptance Criteria mentioned on the Tech Test document shared.
- Implemented BDD using Cucumber with Features Files and Step Definitions.
- Modularized the code properly splitting them into mutiple files and folders based on the purpose/uses and also incorporated proper Separation of Concerns.
- For all the decision making I have done and considerations I have taken, I am happy to have a discussion and further provide a walk through.
- Open to discussion on further improvement and advices on this sumission.
