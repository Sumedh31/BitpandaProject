**** Introduction
The test plan simulates a brief user journey, where user visits the https://www.zalando.at/herren-home/ and searches for Jeans.
The test plan have two thread groups depicting differnt load test strategies. The reports granularity is set to be 2 seconds.

**** Thread group1- ThreadsWithTransactionControl
This thread group controls the RPS, the tuning of RPS can easily be achieved by passing the parameters.
The parameters are:
1:-JUSERS - The number of threads / users that test needs to create.
2:-JRAMPUP - Rampup period for thread creation
3:-JRAMPUPSTEP - Number of steps for ramping up users
4:-JHOLD - Once the users are created keep them alive until given time in seconds
5:-JDESIREDRPS - Desired RPS that needs to be achieve
6:-JREACHRPSIN - Rampup desired RPS in given time in seconds
7:-JBREAKDOWN - Breakdown period of reducing RPS slowly

**** Thread group1- ThreadConfigWithoutTransactionController
This thread group creates the users in given ramup time in seconds and as soon as thread is created it executes the given request's workflow without controlling the RPS.
The parameters are:
 1:-JUSERS - The number of threads / users that test needs to create.
2:-JRAMPUP - Rampup period for thread creation

**** Required Plugins
https://jmeter-plugins.org/wiki/ThroughputShapingTimer/
https://jmeter-plugins.org/wiki/ConcurrencyThreadGroup/

**** Command to run the test - Notice the parameter names and associated values to set.
jmeter.bat -n -t D:\WORK\JMETER\ZalandoLoadTest.jmx -j D:\WORK\JMETER\jmeter.log -l D:\WORK\JMETER\report.log -e -o D:\WORK\JMETER\report\ -J jmeter.reportgenerator.overall_granularity=2000 -JUSERS=400 -JRAMPUP=20 -JRAMPUPSTEP=10 -JHOLD=80 -JDESIREDRPS=10 -JREACHRPSIN=60 -JBREAKDOWN=20

**** Test analysis
The two reports directory have reports associated to available two thread group runs. The requirement of the problem stated was to test load when 1000 users will visit web app in 15s.
The site that I chose received approx 1300 KB data for each request. Hence when I tested the site with 1000 users one of the following thing may have happenned which gave the inconclusive reports.
1: Since I created 1000 users with no control over RPS the maximum bandwidth allowed may have reached limiting the number of connections by thread.
2: Some sites keep their configuration in such a way that random load test to their servers are discoouraged hence when their web server detects suspicious traffic they block that IP for some time.
3: The combined throughput of two requests may have put extra load on my internet and it would not have been able to put up with the extra bandwitdh the 1000 users would have required.

Both the cases could explain the connect time out error that ./ThreadConfigWithoutTransactionController 1000 users 15 sec/ the report folder shows.

Note: If you run the test by enabling with ThreadsWithTransactionControl thread group, you may see exception after the test is run, but that can be ignored. The xception occurs because 
the hold time for threads is more than RPS controller break time.