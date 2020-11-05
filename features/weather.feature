Feature: Weather API Testing

    End to End Testing of the Weather API

    Scenario Outline: As a choosey surfer, I would like to surf in any 2 beaches out of top 10 beaches
        Given I like to surf in any two beaches out of top ten in Sydney
        When I look up the the weather forecast for the next sixteen days using "<Postal_Code>"
        Then I only like to surf on any 2 days specifically Thursday & Friday in next 16 Days
        Then I check to if see the temperature is between 20℃ and 30℃
        Then I check to see if UV index is less than 3
        Then I pick two spots based on suitable weather forecast for the day using "<Beach>"
        Examples:
            | Beach              | Postal_Code |
            | Manly Beach        | 1655        |
            | Freshwater Beach   | 2096        |
            | Bondi Beach        | 2026        |
            | Maroubra Beach     | 2035        |
            | Whale Beach        | 2107        |
            | Cronulla Beach     | 2230        |
            | Garie Beach        | 2232        |
            | Shark Island Beach | 2463        |
            | Palm Beach         | 2108        |
            | Long Reef Beach    | 2536        |
