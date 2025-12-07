################################################################### 
# This feature file contains Test scenarion in Gherkin.
# This is mainly part of BDD framework.
# Main intended to use it that it uses plain english,
# So every stockhlolder can understand the test scenarios.
# Owner: Vipin
##################################################################

Feature: Multibank UI Trading Test Scenarios

    Scenario: User can validation diffrent Contents.
    Given User is on Dashboard page
    Then User can see marketing banners at bottom of the page
    And User can verify the download sections
    And User can render About Us section
