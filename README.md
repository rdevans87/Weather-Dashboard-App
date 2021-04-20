 # 06 Server-Side APIs: Weather Dashboard

## Description

This application features a weather dashboard that runs in the browser and contains extensive search capabilities, displaying precise data and up-to-date weather conditions for over 200,000 cities across the United States. Bootstrap was used to build the primary front-end framework with additional HTML and CSS properties added for a more responsive design. This app relies heavily on Javascript methods and principles to provide the essential functionality outlined in the acceptance criteria.  

In addition, this app required data requests from two different server-side APIs in order to obtain the accurate weather conditions and icon representations needed for both current and future conditions. [OpenWeather API](https://openweathermap.org/api) is a team of IT experts and data scientists that has been practiscing deep weather data science since 2014. For each point on the globe, OpenWeather provides historical, current and forecasted weather data via light-speed APIs.

['Deployed URL: GitHub IO'](https://rdevans87.github.io/Weather-Dashboard-March-6-2021/)

['Weather Dashboard Demo'](https://drive.google.com/file/d/1Pj8Op6adoKpHlrFWq2rpeH2I7ptYbjZb/view)


APIs USED:

[Current Weather Data](https://openweathermap.org/current) 

City, Date
Icon-image
Temperature
Humidity
Wind Speed


[One Call](https://openweathermap.org/api/one-call-api) 

City, Dates
Icon image
Temperature
Humidity
UV index

The Current Weather Data API was used as the primary search parameter "By City Name". The user can type any city name and hit "submit" to see the current weather including the specific conditions temperature, humidity, wind speed. The One Call API was used to retrieve the UVindex along with the 5 day forecast and corresponding weather conditions. Searches are saved in  `localStorage` , then listed in the search history beneath the search bar. In addition, I created a button linked to OpenWeather's Website for users to reference other relevent weather data. I've also included a standard time Interval representing accurate hours of the day ('h:mm:ss a'); 

## Challenges
I ran into significant issues saving my search history in local storage and append it to a list.
I was unable to recall previous search history because  would not save to the page.
I was unable to set a color that indicates whether the conditions are favorable, moderate, or severe.


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

The following images shows the web application's appearance and functionality:

Empty Dashboard 
![image](https://user-images.githubusercontent.com/74195719/115356454-ad004680-a189-11eb-9444-c754d37ccdc7.png)

[Populated Dashboard]
![image](https://user-images.githubusercontent.com/74195719/115356719-efc21e80-a189-11eb-8eab-96f974b90bff.png)


## Grading Requirements

### Technical Acceptance Criteria: 40%

### Deployment: 32%

### Application Quality: 15%

### Repository Quality: 13%

## Review


