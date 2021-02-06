

Feature: Free CRM login feature
 

  
  Scenario Outline: Free CRM login test scenario
    Given User is already on login page
    When title of login page is CRMPRO  - CRM software for customer relationship management, sales, and support.
    Then User enters "<username>" and "<password>"
    
    Examples:
    |username|password|
    |tejas|duo|
    |ttoley|duo|
    |tejast|duo|
    
    

  
  
