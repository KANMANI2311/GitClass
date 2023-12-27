@Smoke
Feature: Validate the login Functionality of Facebook Page

Background:
Given User should launch the chrome browser and load url

@Pink
Scenario: Validate the login with invalid username and invalid password

When User should input invalid username and invalid passworD in the textbook  
# 2D List
 |Kumar | Kumar@123 | Kavin| Kavin@123 |Praveen |Praveen@123|
 |Yellow | Yellow@123 | Green | Green@123 | Pink |Pink@123 |
 |Vinay | Vinay@123 | Kavin | Kavin@123 |Anu |Anu@123|    
And User should click the login button
And User should print the title of the page
And User should print the current Url of my page
#Then User should navigate to incorrect credential page

@Yellow @Smoke
Scenario: Validate the login with valid username and invalid password

When User should input valid username and invalid password in the textbook
And User should click the login button
And User should print the current Url of the page
And User should print the title of the page
Then User should navigate to incorrect credential page

Scenario Outline:Validate the login with invalid username and valid password
When User should input invalid username "<Fruits>" and valid password "<Colours>" in the textbook
And User should click the login button
And User should print the current Url of the page
And User should print the title of the page
#Then User should navigate to incorrect credential page

Examples:
               |Fruits | Colours|
               |Apple  | Green  |
               |Orange | Black  |
               |Grapes | Yellow |
