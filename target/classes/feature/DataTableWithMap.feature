Feature: Check search functionality of amazon
    
    Scenario: Test scenario for amazon search bar
    
    Given user is already on amazon page
    
    Then enter data on searchbar and click on search button
    |searchbar|
    |watches|selenium|batman goodies|
   
    Then close the browser