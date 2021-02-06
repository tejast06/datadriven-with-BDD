
Feature: Check search functionality of amazon
    
    Scenario Outline: Test scenario for amazon search bar
    Given user is already on amazon page
    Then enter "<testData>" on searchbar and click on serach button
    Then close the browser
    
    Examples:
    |testData|
    |watches|
    |selenium|
    |batman|