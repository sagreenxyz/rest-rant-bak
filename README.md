# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## Planning
### User Stories
### Wireframes
### Color Scheme

## Technology
|       Technology      |                   Elements                   |
|:---------------------:|:--------------------------------------------:|
| CSS Framework         | Bootstrap                                    |
| Stack                 | MongoDB, Express, NodeJS                     |
| Server-Side Rendering | JSX                                          |
| Node Modules          | dotenv, express-react-views, method-override |

## User Stories

## Wireframes

## Color Scheme

## Routes


| Method |           Path           |                      Purpose                     |
|:------:|:------------------------:|:------------------------------------------------:|
|   GET  |             /            |                     Home page                    |
|   GET  |          /places         |                 Places index page                |
|  POST  |          /places         |                 Create new place                 |
|   GET  |        /places/new       |        Form page for creating a new place        |
|   GET  |        /places/:id       |         Details about a particular place         |
|   PUT  |        /places/:id       |             Update a particular place            |
|   GET  |     /places/:id/edit     |      Form page for editing an existing place     |
| DELETE |        /places/:id       |             Delete a particular place            |
|  POST  |     /places/:id/rant     | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
|   GET  |             *            |  404 page (matches any route not defined above)  |

## Data
### Places
| Data Element | Data Type |                 Purpose                |
|:------------:|:---------:|:--------------------------------------:|
| \_id         | object ID | primary key                            |
| name         | string    | name of the restaurant                 |
| city         | string    | city the restaurant is located in      |
| state        | string    | state the city is in                   |
| cuisines     | string    | type of food(s) the restauarant serves |
| pic          | string    | URL to an image for the restaurant     |

### Rants
| Data Element | Data Type | Purpose                                 |
|:------------:|:---------:|-----------------------------------------|
| \_id         | object ID | primary key                             |
| place_id     | object ID | foreign key ref(places) Object\_ID      |
| rant         | boolean   | flag to indicate the place was disliked |
| rating       | number    | rating of 1 to 5                        |
| comment      | string    | captures user comments                  |
| reviewer     | string    | captures the user's name submission     |


---
## Notes
### Possible Bonus Ideas
- Updates to comments
- Aggregate ratings for a place
- Auto-complete state dropdown
### Helpful Links
- https://www.tablesgenerator.com/markdown_tables
- https://app.diagrams.net/
- https://coolors.co/
### Assignment Links
- https://digitalskills.instructure.com/courses/3775/pages/demo-rest-rant-6-dot-3-3?module_item_id=464236
