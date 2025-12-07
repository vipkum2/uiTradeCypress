################################################################### 
# This feature file contains Test scenarion in Gherkin.
# This is mainly part of BDD framework.
# Main intended to use it that it uses plain english,
# So every stockhlolder can understand the test scenarios.
# Owner: Vipin
##################################################################

Feature: Multibank UI Test Scenarios

    Scenario: Access the UI and click on navigation and layouts.
    Given User is on Dashboard page
    Then User can see top menu options
    And User can click and verify the layout and structure is correct