@smoke
Feature: Search
As a Springer Nature customer
I want to be able to see suggestions when I search
So I can choose a suggestion


  Scenario: Search 
    When I enter "Machine Learning"
    Then I should see 5 search suggestions