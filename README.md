 ## 06 Server-Side APIs: Weather Dashboard

## Coder Story

This application features a weather dashboard that runs in the browser and was created using dynamically updated HTML and CSS with Javascript to access server-side APIs and retrieve data which is saved in local storage and apppended through the DOM and displayed on my dashboard, which remains saved when the browser is refreshed.

I used the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. I used `localStorage` to store specific parameters of my search, which I attempted to append onto my own page. I used a fetch call to gather the search criteria with an API key provided by the site and stored the data in local storage.  

METHOD USED: 



======

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Mock-Up

The following image shows the web application's appearance and functionality:



## Grading Requirements

### Technical Acceptance Criteria: 40%

### Deployment: 32%

### Application Quality: 15%

### Repository Quality: 13%

## Review


