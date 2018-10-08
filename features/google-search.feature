Feature: Background support

Background:
    Given I open Google`s search page

Scenario Outline: Addition

  When I search for <inputfilename> and <inputfilepath>
  Then the search result should contain "620"

Examples: 
| inputfilename | inputfilepath |
| "500+120" | "500+120" |
| "500+120" | "500+120" |
| "500+120" | "500+120" |