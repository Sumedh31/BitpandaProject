# WebDriverIO Tests for WestWing

# Framework
The test is located at

.test/specs/wishliste2e.js 

.test/pageobjects/* contains the elements stored in page object format

# Run test
To run the tests:

1-Download the repo

2-
```cmd
cd westwingwditests
```
3- To run a single tests execute
```npx wdio wdio.conf.js --spec ./test/specs/wishliste2e.js```

All test can be run with
``` npm test```
or ```npx wdio wdio.conf.js```

# Running in Docker container
To run the test execute download the repo and execute following commands


```docker
cd westwingwditests
docker-compose build
docker-compose up
```

docker-compose.yml file contains command that executes the test only for file wishliste2e.js.
In order to be able to run more tests this command can be modified to run suites or can be replaced with "npm test" to run all the available tests.

# Note
Currently running the test within the docker container is giving an issue with chromedriver probably due to some configuration issues.

