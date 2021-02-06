$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/eclipse/BDDPractice/src/main/java/feature/AmazonSearch.Feature");
formatter.feature({
  "line": 2,
  "name": "Check search functionality of amazon",
  "description": "",
  "id": "check-search-functionality-of-amazon",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Test scenario for amazon search bar",
  "description": "",
  "id": "check-search-functionality-of-amazon;test-scenario-for-amazon-search-bar",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on amazon page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter \"\u003ctestData\u003e\" on searchbar and click on serach button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "check-search-functionality-of-amazon;test-scenario-for-amazon-search-bar;",
  "rows": [
    {
      "cells": [
        "testData"
      ],
      "line": 10,
      "id": "check-search-functionality-of-amazon;test-scenario-for-amazon-search-bar;;1"
    },
    {
      "cells": [
        "watches"
      ],
      "line": 11,
      "id": "check-search-functionality-of-amazon;test-scenario-for-amazon-search-bar;;2"
    },
    {
      "cells": [
        "selenium"
      ],
      "line": 12,
      "id": "check-search-functionality-of-amazon;test-scenario-for-amazon-search-bar;;3"
    },
    {
      "cells": [
        "batman"
      ],
      "line": 13,
      "id": "check-search-functionality-of-amazon;test-scenario-for-amazon-search-bar;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Test scenario for amazon search bar",
  "description": "",
  "id": "check-search-functionality-of-amazon;test-scenario-for-amazon-search-bar;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on amazon page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter \"watches\" on searchbar and click on serach button",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchBarStepDefinition.user_is_already_on_amazon_page()"
});
formatter.result({
  "duration": 14410922000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "watches",
      "offset": 7
    }
  ],
  "location": "SearchBarStepDefinition.enter_on_searchbar_and_click_on_serach_button(String)"
});
formatter.result({
  "duration": 5903499200,
  "status": "passed"
});
formatter.match({
  "location": "SearchBarStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 245302500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test scenario for amazon search bar",
  "description": "",
  "id": "check-search-functionality-of-amazon;test-scenario-for-amazon-search-bar;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on amazon page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter \"selenium\" on searchbar and click on serach button",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchBarStepDefinition.user_is_already_on_amazon_page()"
});
formatter.result({
  "duration": 9792594500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium",
      "offset": 7
    }
  ],
  "location": "SearchBarStepDefinition.enter_on_searchbar_and_click_on_serach_button(String)"
});
formatter.result({
  "duration": 5713370900,
  "status": "passed"
});
formatter.match({
  "location": "SearchBarStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 228842100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test scenario for amazon search bar",
  "description": "",
  "id": "check-search-functionality-of-amazon;test-scenario-for-amazon-search-bar;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on amazon page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter \"batman\" on searchbar and click on serach button",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchBarStepDefinition.user_is_already_on_amazon_page()"
});
formatter.result({
  "duration": 11493267900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batman",
      "offset": 7
    }
  ],
  "location": "SearchBarStepDefinition.enter_on_searchbar_and_click_on_serach_button(String)"
});
formatter.result({
  "duration": 5654441100,
  "status": "passed"
});
formatter.match({
  "location": "SearchBarStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 219626200,
  "status": "passed"
});
});