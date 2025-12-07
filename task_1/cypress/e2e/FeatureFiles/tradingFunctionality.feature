################################################################### 
# This feature file contains Test scenarion in Gherkin.
# This is mainly part of BDD framework.
# Main intended to use it that it uses plain english,
# So every stockhlolder can understand the test scenarios.
# Owner: Vipin
##################################################################

Feature: Multibank UI Content Validation Test Scenarios

    Scenario: Spot trading section displays trading pairs across different categories.
    Given User is on Dashboard page
    When User click on Spot tab
    Then User can verify different trading pairs
