Feature: Google

    Scenario: Search in Google
        When User opens "https://www.google.com"
        Then User should be on "Google Home" page
        When User types "Wikipedia" to "Search Input"
        And User clicks "#wikipedia in Search Suggestions"
        Then User should be on "Google Results" page