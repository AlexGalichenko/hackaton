Feature: Covid India

    Scenario Outline: Verify State Statics against data (top <i>)
        When User opens "!APP_URL"
        Then User should be on "Landing" page
        When Text of "Statistics Table > #<i> of Rows" element should be equal to "#GET_TOP_COVID_STATE(<i>)"

    Examples:
        |i|
        |1|
        |2|
        |3|
        |4|

