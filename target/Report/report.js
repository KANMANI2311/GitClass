$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFiles/Forgetten.feature");
formatter.feature({
  "name": "Validate the forgotten password functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate the forgotten with invalid mobile number",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should open chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldOpenChromeBrowserAndLoadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the forgotten password link",
  "keyword": "When "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldClickTheForgottenPasswordLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should input invalid mobile number on the textbox",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldInputInvalidMobileNumberOnTheTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldClickTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to recover page",
  "keyword": "Then "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldNavigateToRecoverPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/Login.feature");
formatter.feature({
  "name": "Validate the login Functionality of Facebook Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch the chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_launch_the_chrome_browser_and_load_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Pink"
    }
  ]
});
formatter.step({
  "name": "User should input invalid username and invalid passworD in the textbook",
  "rows": [
    {
      "cells": [
        "Kumar",
        "Kumar@123",
        "Kavin",
        "Kavin@123",
        "Praveen",
        "Praveen@123"
      ]
    },
    {
      "cells": [
        "Yellow",
        "Yellow@123",
        "Green",
        "Green@123",
        "Pink",
        "Pink@123"
      ]
    },
    {
      "cells": [
        "Vinay",
        "Vinay@123",
        "Kavin",
        "Kavin@123",
        "Anu",
        "Anu@123"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputInvalidUsernameAndInvalidPassworDInTheTextbook(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_title_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current Url of my page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_current_Url_of_my_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch the chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_launch_the_chrome_browser_and_load_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with valid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Yellow"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User should input valid username and invalid password in the textbook",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_input_valid_username_and_invalid_password_in_the_textbook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current Url of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldPrintTheCurrentUrlOfThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_title_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_navigate_to_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the login with invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should input invalid username \"\u003cFruits\u003e\" and valid password \"\u003cColours\u003e\" in the textbook",
  "keyword": "When "
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should print the current Url of the page",
  "keyword": "And "
});
formatter.step({
  "name": "User should print the title of the page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Fruits",
        "Colours"
      ]
    },
    {
      "cells": [
        "Apple",
        "Green"
      ]
    },
    {
      "cells": [
        "Orange",
        "Black"
      ]
    },
    {
      "cells": [
        "Grapes",
        "Yellow"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch the chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_launch_the_chrome_browser_and_load_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User should input invalid username \"Apple\" and valid password \"Green\" in the textbook",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputInvalidUsernameAndValidPasswordInTheTextbook(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current Url of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldPrintTheCurrentUrlOfThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_title_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch the chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_launch_the_chrome_browser_and_load_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User should input invalid username \"Orange\" and valid password \"Black\" in the textbook",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputInvalidUsernameAndValidPasswordInTheTextbook(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current Url of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldPrintTheCurrentUrlOfThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_title_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch the chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_launch_the_chrome_browser_and_load_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User should input invalid username \"Grapes\" and valid password \"Yellow\" in the textbook",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputInvalidUsernameAndValidPasswordInTheTextbook(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current Url of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldPrintTheCurrentUrlOfThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_title_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});