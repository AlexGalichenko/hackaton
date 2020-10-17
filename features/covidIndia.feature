Feature: Covid India

  Background:
    When Get data from "!STATE_DISTRICTS_WISE_ENDPOINT" and saves it as "STATE_DISTRICTS_WISE_DATA"
    And User opens "!APPLICATION_START_PAGE"
    Then User should be on "Landing" page

  Scenario Outline: Verify State Statics against data (top <numbers>>)
    When User saves text of "Statistics Table > #<numbers>> of Rows > State Name" as "STATE_NAME"
    Then Text of "Statistics Table > #<numbers>> of Rows > Confirmed" element should be equal to "#GET_TOP_COVID_STATE($STATE_NAME, Confirmed)"
    * Text of "Statistics Table > #<numbers>> of Rows > Active" element should be equal to "#GET_TOP_COVID_STATE($STATE_NAME, Active)"
    * Text of "Statistics Table > #<numbers>> of Rows > Recovered" element should be equal to "#GET_TOP_COVID_STATE($STATE_NAME, Recovered)"
    * Text of "Statistics Table > #<numbers>> of Rows > Deceased" element should be equal to "#GET_TOP_COVID_STATE($STATE_NAME, Deceased)"

    Examples:
      | numbers |
      | 1       |
      | 2       |
      | 3       |
      | 4       |

  Scenario Outline: Verify State Statics on details page against data (top <numbers>>)
    When User saves text of "Statistics Table > #<numbers>> of Rows > State Name" as "STATE_NAME"
    * User clicks "Statistics Table > #<numbers>> of Rows > State Name"
    * User clicks "See More Details"
    Then User should be on "State Details" page
    * Text of "State Name Title" element should be equal to "$STATE_NAME1"
    * Text of "Confirmed Amount" element should be equal to "#GET_TOP_COVID_STATE($STATE_NAME, Confirmed)"
    * Text of "Active Amount" element should be equal to "#GET_TOP_COVID_STATE($STATE_NAME, Active)"
    * Text of "Recovered Amount" element should be equal to "#GET_TOP_COVID_STATE($STATE_NAME, Recovered)"
    * Text of "Deceased Amount" element should be equal to "#GET_TOP_COVID_STATE($STATE_NAME, Deceased)"


    Examples:
      | numbers |
      | 1       |
      | 2       |
      | 3       |
      | 4       |