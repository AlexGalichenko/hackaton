Feature: Covid India

    Scenario: Verify State Dropdown
        When User opens "!APP_URL"
        Then User should be on "Landing" page
        When User waits "10" second

    Scenario: Verify the districts totals
        Given Get data from "!STATE_DISTRICTS_WISE_ENDPOINT" and saves it as "STATE_DISTRICTS_WISE_DATA"