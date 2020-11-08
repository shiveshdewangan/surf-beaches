## WooliesX API Tech Test - Best Surfing Beaches as per weather conditions

#### Technology used - CucumberJS for BDD, SupertestJs, JavaScript, NodeJs, CircleCI, Chai Assertions

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

### Test Report
- After running the tests locally on command line, you can check the cucumber report published globally at link generated. It looks something like this - `https://reports.cucumber.io/reports/d3425ff9-5a99-414b-8a7e-6620b56b574d`.

### Assumptions and My Notes
- I could do this problem using RestAssured with Java but since I have used Java (Appium) for the Mobile Application assignment, I chose SupertestJs for this one. Also the test details says ***The Mission is to implement a test to automate the following acceptance criteria (inthe form of a BDD) in your tool of choice/language***
- Included all the Acceptance Criteria mentioned on the Tech Test document shared.
- Implemented BDD using Cucumber with Features Files and Step Definitions.
- Modularized the code properly splitting them into mutiple files and folders based on the purpose/uses and also incorporated proper Separation of Concerns.
- For all the decision making I have done and considerations I have taken, I am happy to have a discussion and further provide a walk through.
- Open to discussion on further improvement and advices on this sumission.

#### Acceptance Criteria met
- :white_check_mark: Assertions for both verification and validations wherever necessary
- :white_check_mark: Code modularity/reuse of methods is achieved
- :white_check_mark: Data Driven
- :white_check_mark: Capture screenshots when test fails
- :white_check_mark: Basic reporting
