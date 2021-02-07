$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/eclipse/BDDPractice/src/main/java/feature/AmazonSearch.Feature");
formatter.feature({
  "line": 2,
  "name": "Check search functionality of amazon",
  "description": "",
  "id": "check-search-functionality-of-amazon",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Test scenario for amazon search bar",
  "description": "",
  "id": "check-search-functionality-of-amazon;test-scenario-for-amazon-search-bar",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is already on amazon page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter data on searchbar and click on search button",
  "rows": [
    {
      "cells": [
        "watches",
        "selenium",
        "batman goodies"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchBarStepDefinition.user_is_already_on_amazon_page()"
});
formatter.result({
  "duration": 10685091000,
  "status": "passed"
});
formatter.match({
  "location": "SearchBarStepDefinition.enter_data_on_searchbar_and_click_on_search_button(DataTable)"
});
formatter.result({
  "duration": 15329777000,
  "status": "passed"
});
formatter.match({
  "location": "SearchBarStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 202110400,
  "status": "passed"
});
});