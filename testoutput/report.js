$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/eclipse/BDDPractice/src/main/java/feature/Login.Feature");
formatter.feature({
  "line": 3,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "title of login page is CRMPRO  - CRM software for customer relationship management, sales, and support.",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "tejas",
        "duo"
      ],
      "line": 14,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "ttoley",
        "duo"
      ],
      "line": 15,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    },
    {
      "cells": [
        "tejast",
        "duo"
      ],
      "line": 16,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "title of login page is CRMPRO  - CRM software for customer relationship management, sales, and support.",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"tejas\" and \"duo\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 13516265300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_CRMPRO_CRM_software_for_customer_relationship_management_sales_and_support()"
});
formatter.result({
  "duration": 27574800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tejas",
      "offset": 13
    },
    {
      "val": "duo",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 370526900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "title of login page is CRMPRO  - CRM software for customer relationship management, sales, and support.",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"ttoley\" and \"duo\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 9911827600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_CRMPRO_CRM_software_for_customer_relationship_management_sales_and_support()"
});
formatter.result({
  "duration": 38728500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ttoley",
      "offset": 13
    },
    {
      "val": "duo",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 350944100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "title of login page is CRMPRO  - CRM software for customer relationship management, sales, and support.",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"tejast\" and \"duo\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 11707595000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_CRMPRO_CRM_software_for_customer_relationship_management_sales_and_support()"
});
formatter.result({
  "duration": 17873900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tejast",
      "offset": 13
    },
    {
      "val": "duo",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 379870600,
  "status": "passed"
});
});