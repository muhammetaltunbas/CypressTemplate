@FeatureOne
Feature: Checking login functionality for travel.agileway.net

@ProperLogin
  Scenario Outline: Checking login functionality for proper login credential
    Given User is on "<website>" landing page
    Then Login page is opened
    When User enters "<username>" and "<password>" and clicks sign in button
    Then User goes flightpage
    Examples:
      | website                           | username | password |
      | https://travel.agileway.net/login | agileway | testwise |

  Scenario Outline: Checking login functionality for wrong login credential
    Given User is on "<website>" landing page
    Then Login page is opened
    When User enters "<username>" and "<password>" and clicks sign in button
    Then User can not login in
    Examples:
      | website                           | username     | password     |
      | https://travel.agileway.net/login | testUsername | TestPassword |
      | https://travel.agileway.net/login |     | TestPass1    |