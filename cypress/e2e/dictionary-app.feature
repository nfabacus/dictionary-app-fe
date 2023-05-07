Feature: English Words Dictionary
  Scenario: User wants to see a scrollable list of English words in the Dictionary App.
    When I open the dictionary app
    Then I see a scrollable list of English words

  Scenario: User wants to filter the list of English words using text field.
    When I type in some string in the text field
    Then I see a list of words that starts with that string

  Scenario: User wants to filter the list of English words with at least 1 wildcard ('*' symbol that means any character).
    When I use at least 1 wildcard |* in my string - for example, when a user filters by 'c|*t'
    Then I see words that starts with 'c', followed by any other character and the 3rd character is 't'. In this case users should get words like 'cat'

  Scenario: User wants to retain their filtered list of English words between browser refreshes.
    When I filter the list
    And I refreshes the browser
    Then I still see my filtered list which is the same as before the refresh
