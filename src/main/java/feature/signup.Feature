
Feature: Free CRM signup feature

  
  Scenario : Title of your scenario
    Given user is already on login page
    When title of login page is CRMPRO  - CRM software for customer relationship management, sales, and support.
    Then click on signup button
    And title of sign up page is Cogmento CRM
    Then enter email address phone number 
    

  
  Scenario Outline: Title of your scenario outline
    Given I want to write a step with <name>
    When I check for the <value> in step
    Then I verify the <status> in step

    Examples: 
      | name  | value | status  |
      | name1 |     5 | success |
      | name2 |     7 | Fail    |
