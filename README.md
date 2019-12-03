# GeoforAll members map [coding]

The following is the write up for the `GeoforAll members map [coding]` google codein task completed by me.

## Procedure
1. Firstly, I used [WebScraper](https://webscraper.io) to scrape through the table of names and lat/long values available on the [Wiki](https://wiki.osgeo.org/wiki/Edu_current_initiatives#Current_members_of_the_Geo_for_All_Labs_Network).
2. Next, I cleaned the retrieved values in Excel by removing any institution that did not provide a lat/long value.
3. Next, I converted the cleaned CSV to JSON format via [ConvertCSV](http://www.convertcsv.com/csv-to-json.htm) for easier parsing when using Leaflet.
4. After this, I setup Leaflet and parsed the JSON to map each of the JSON keys to a marker and popup. Please see the `script.js` to see the commented process in full.
