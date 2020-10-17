Feature: Covid India

    Scenario Outline: Verify State Statics against data (top <i>)
        When Get data from "!STATE_DISTRICTS_WISE_ENDPOINT" and saves it as "STATE_DISTRICTS_WISE_DATA"
        When User opens "!APP_URL"
        Then User should be on "Landing" page
        When User saves text of "Statistics Table > #<i> of Rows > State Name" as "STATE_NAME"
        When Text of "Statistics Table > #<i> of Rows > Confirmed" element should be equal to "#GET_TOP_COVID_STATE($STATE_NAME, Confirmed)"
        When Text of "Statistics Table > #<i> of Rows > Active" element should be equal to "#GET_TOP_COVID_STATE($STATE_NAME, Active)"
        When Text of "Statistics Table > #<i> of Rows > Recovered" element should be equal to "#GET_TOP_COVID_STATE($STATE_NAME, Recovered)"
        When Text of "Statistics Table > #<i> of Rows > Deceased" element should be equal to "#GET_TOP_COVID_STATE($STATE_NAME, Deceased)"

    Examples:
        |i|
        |1|
        |2|
        |3|
        |4|

    Scenario: Verify the districts totals
        Given Get data from "!STATE_DISTRICTS_WISE_ENDPOINT" and saves it as "STATE_DISTRICTS_WISE_DATA"