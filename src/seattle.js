//http://api.us.socrata.com/api/catalog/v1?domains=data.seattle.gov&search_context=data.seattle.gov&provenance=official

export const seattle = {
  results: [
    {
      resource: {
        name: "2018 Paid Parking Occupancy (Year-to-date)",
        id: "6yaw-2m8q",
        parent_fxf: [],
        description:
          "The City of Seattle has created an on-street paid parking occupancy data set and is providing access to this data set for public use for research and entrepreneurial purposes under the City’s Open Data Program. This data set contains paid occupancy records from 2018.",
        attribution: "Seattle Department of Transportation",
        attribution_link:
          "http://www.seattle.gov/transportation/projects-and-programs/programs/parking-program/maps-and-data",
        contact_email: null,
        type: "dataset",
        updatedAt: "2019-05-10T19:53:33.000Z",
        createdAt: "2018-09-15T19:10:20.000Z",
        metadata_updated_at: "2019-05-10T19:53:33.000Z",
        data_updated_at: "2019-03-21T22:12:17.000Z",
        page_views: {
          page_views_last_week: 3,
          page_views_last_month: 7,
          page_views_total: 1044,
          page_views_last_week_log: 2.0,
          page_views_last_month_log: 3.0,
          page_views_total_log: 10.029287226968245,
        },
        columns_name: [
          "SourceElementKey",
          "Location",
          "2010 Census Tracts",
          "Zip Codes",
          "SPD Beats",
          "City Council Districts",
          "Seattle Police Department Micro Community Policing Plan Areas",
          "ParkingCategory",
          "SideOfStreet",
          "PaidParkingArea",
          "PaidOccupancy",
          "PaidParkingSubArea",
          "ParkingSpaceCount",
          "ParkingTimeLimitCategory",
          "BlockfaceName",
          "OccupancyDateTime",
          "PaidParkingRate",
        ],
        columns_field_name: [
          "sourceelementkey",
          "location",
          ":@computed_region_2day_rhn5",
          ":@computed_region_q256_3sug",
          ":@computed_region_kuhn_3gp2",
          ":@computed_region_cyqu_gs94",
          ":@computed_region_ru88_fbhk",
          "parkingcategory",
          "sideofstreet",
          "paidparkingarea",
          "paidoccupancy",
          "paidparkingsubarea",
          "parkingspacecount",
          "parkingtimelimitcategory",
          "blockfacename",
          "occupancydatetime",
          "paidparkingrate",
        ],
        columns_datatype: [
          "Number",
          "Point",
          "Number",
          "Number",
          "Number",
          "Number",
          "Number",
          "Text",
          "Text",
          "Text",
          "Number",
          "Text",
          "Number",
          "Number",
          "Text",
          "Calendar date",
          "Text",
        ],
        columns_description: [
          "Unique identifier for the city street segment where the pay station is located; Use this column to match with SDOT’s Pay Station data and other curbspace asset data",
          "Calculated based on the known location of a pay station along the same blockface. See Issues section for more info.",
          "",
          "",
          "",
          "",
          "",
          "An overall description of the type of parking allowed on a blockface. Examples could be Paid or RPZ (restricted parking zone)",
          "Options are: E, S, N, W, NE, SW, SE, NW. The two digits are because many Seattle streets are at an angle. Avenues run north-south, Streets run east-west. 1 st Ave on the SW side is the west side of the street",
          "The primary name of a paid parking neighborhood. Example is Commercial Core.",
          "The numerator of the paid occupancy percentage calculation. Number of transactions that have paid at this date/time on this blockface. This is the number of vehicles paid for parking at this time. It is not necessarily the number of vehicles along the blockface since there are most likely vehicles that haven’t paid.",
          "A subset of a paid parking area—not all paid parking areas have subareas. Example is Financial, so would be Commercial Core Financial.",
          "Number of paid spaces on the blockface at the given date and time. This does not include any loading zones (even if payment is required at the loading zones). While SDOT does not delineate individual spaces, we maintain a record of legal parking supply if spaces were marked. Average parallel parking paid space length is 18 feet. Any summary of parking space counts needs to account for the amount of time covered as the data will count all spaces as discrete items over a time period.",
          "In minutes. Options are 120 (2-hour parking), 240 (4-hour parking), 30, or 600 (10-hour parking)",
          "Street segment, name of street with the “from street” and “to street; ” Example is “1ST AVE BETWEEN BELL ST AND BATTERY ST” Combined with Side of Street for Blockface -- 1ST AVE BETWEEN BELL ST AND BATTERY ST SW Side. Also referred to as UnitDesc (description)",
          "The date and time (minute) of the transaction as recorded",
          "Parking rate charged at date and time. Data is available for the parking rate when SDOT used to have one rate across the entire day, roughly 2012-2015. If the column is blank, that is because the rates were/are currently set by time of day. Rates vary by area or sub area and by morning, afternoon and evening (8-11 am, 11 am-5 or 6 pm, and 5 pm to 8 pm or 10 pm)",
        ],
        columns_format: [
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ],
        download_count: 888,
        provenance: "official",
        lens_view_type: "tabular",
        lens_display_type: "table",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2018-09-19T22:21:53.000Z",
      },
      classification: {
        categories: ["transportation", "politics", "housing & development"],
        tags: [],
        domain_category: "Transportation",
        domain_tags: ["curbspace", "parking", "pay stations", "sdot"],
        domain_metadata: [
          {
            key: "Department_Department",
            value: "Seattle Department of Transportation",
          },
          { key: "Refresh-Frequency_Frequency", value: "Daily" },
        ],
      },
      metadata: { domain: "data.seattle.gov", license: "Public Domain" },
      permalink: "https://data.seattle.gov/d/6yaw-2m8q",
      link: "https://data.seattle.gov/Transportation/2018-Paid-Parking-Occupancy-Year-to-date-/6yaw-2m8q",
      owner: {
        id: "pfbu-yuv5",
        user_type: "interactive",
        display_name: "Seattle IT",
      },
      creator: {
        id: "pfbu-yuv5",
        user_type: "interactive",
        display_name: "Seattle IT",
      },
    },
    {
      resource: {
        name: "SDOT Collisions - All Years",
        id: "9jdj-3h57",
        parent_fxf: [],
        description:
          "This includes all types of collisions. Collisions will display at the intersection or mid-block of a segment. Timeframe: 2004 to Present. <br /><br />| Attribute Information: <a href='https://www.seattle.gov/Documents/Departments/SDOT/GIS/Collisions_OD.pdf' target='_blank' rel='nofollow ugc noopener noreferrer'>https://www.seattle.gov/Documents/Departments/SDOT/GIS/Collisions_OD.pdf</a><br /><br />| Update Cycle: Weekly <br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' target='_blank' rel='nofollow ugc noopener noreferrer'>DOT_IT_GIS@seattle.gov</a><br /><br />---  <br />Common SDOT queries of collision data and data downloads<br />| <a href='https://data-seattlecitygis.opendata.arcgis.com/datasets/collisions/data?where=PEDCOUNT+%3E%3D+1' target='_blank' rel='nofollow ugc noopener noreferrer'>Collision with a Pedestrian</a>: <br />PEDCOUNT greater than or = 1<br /><br />| <a href='https://data-seattlecitygis.opendata.arcgis.com/datasets/collisions/data?where=PEDCYLCOUNT+%3E%3D+1' target='_blank' rel='nofollow ugc noopener noreferrer'>Collision with a Bicycle</a>: <br />PEDCYLCOUNT greater than or = 1<br /><br />| <a href='https://data-seattlecitygis.opendata.arcgis.com/datasets/collisions/data?where=FATALITIES+%3E%3D+1' target='_blank' rel='nofollow ugc noopener noreferrer'>Collision with a Fatality</a>: <br />FATALITIES greater than or = 1<br /><br />| <a href='https://data-seattlecitygis.opendata.arcgis.com/datasets/collisions/data?where=SERIOUSINJURIES+%3E%3D+1' target='_blank' rel='nofollow ugc noopener noreferrer'>Collision with a Serious Injury</a>: <br />SERIOUSINJURIES greater than or = 1",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-18T19:02:31.000Z",
        createdAt: "2022-08-20T05:03:38.000Z",
        metadata_updated_at: "2023-01-18T19:02:31.000Z",
        data_updated_at: "2022-08-20T05:03:38.000Z",
        page_views: {
          page_views_last_week: 7,
          page_views_last_month: 42,
          page_views_total: 332,
          page_views_last_week_log: 3.0,
          page_views_last_month_log: 5.426264754702098,
          page_views_total_log: 8.379378367071263,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:38.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "018",
          "accidents",
          "bicycle",
          "car",
          "crash",
          "gis",
          "pedestrian",
          "safety",
          "sdot",
          "seattle",
          "spd",
          "traffic",
          "vehicle",
          "wa",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2023-01-17T21:19:45.876Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<div><font size='4'><font face='Calibri, Calibri_EmbeddedFont, sans-serif'><span style='font-variant-ligatures:none;'><i>The City of Seattle makes no representation or warranty as to its accuracy, and in particular, its accuracy </i></span></font><i>as to labeling, dimensions, contours, property boundaries, or placement or location of any map feature thereof. </i></font></div>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4202,47.4935,-122.2450,47.7356",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=b2d6fa15a1e74f12b7e653813d61e756&sublayer=6",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::sdot-collisions-all-years",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-07-06T22:11:53.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "City_Seattle_GIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::sdot-collisions-all-years",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Collisions___All_Years/FeatureServer/6",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::sdot-collisions-all-years.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::sdot-collisions-all-years.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::sdot-collisions-all-years.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::sdot-collisions-all-years.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::sdot-collisions-all-years",
        },
      },
      permalink: "https://data.seattle.gov/d/9jdj-3h57",
      link: "https://data.seattle.gov/dataset/SDOT-Collisions-All-Years/9jdj-3h57",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Trees",
        id: "f93e-gna8",
        parent_fxf: [],
        description:
          "Listing of both publicly and privately maintained trees in the public right of way, with information on the condition, location, size, species and maintenance responsibility.  Data was collected with the intent to predict maintenance needs, as well as to show the level of diversification within the street tree population.  <br /><br />| Attribute Information: <a href='https://www.seattle.gov/Documents/Departments/SDOT/GIS/Trees_OD.pdf' rel='nofollow ugc' target='_blank'>https://www.seattle.gov/Documents/Departments/SDOT/GIS/Trees_OD.pdf</a> <br /><br />| Data Confidence: Medium <br />| Data Confidence Source: <a href='https://www.seattle.gov/Documents/Departments/SDOT/About/SDOT2015SCReportFinal12-7-2015.pdf' rel='nofollow ugc' target='_blank'>2015 SDOT Asset Management, Status and Condition Report</a> <br /><br />| Update Cycle: Weekly <br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' rel='nofollow ugc' target='_blank'>DOT_IT_GIS@seattle.gov</a>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:02:36.000Z",
        createdAt: "2022-08-20T05:02:36.000Z",
        metadata_updated_at: "2022-08-20T05:02:36.000Z",
        data_updated_at: "2022-08-20T05:02:36.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 12,
          page_views_total: 181,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 3.700439718141092,
          page_views_total_log: 7.507794640198696,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:36.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "environment",
          "gis",
          "sdot",
          "seattle",
          "street trees",
          "transportation",
          "trees",
          "urban forestry",
          "wa",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4649,47.4931,-122.2463,47.7959",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=0b8c124ace214943ab0379623937eccb&sublayer=6",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::trees",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2017-09-19T15:43:41.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Transportation_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::trees",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Assets/MapServer/6",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::trees.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::trees.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::trees.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::trees.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::trees",
        },
      },
      permalink: "https://data.seattle.gov/d/f93e-gna8",
      link: "https://data.seattle.gov/dataset/Trees/f93e-gna8",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Racial and Social Equity Composite Index",
        id: "5p9i-255u",
        parent_fxf: [],
        description:
          "<div><div>The Racial and Social Equity Index combines information on race, ethnicity, and related demographics with data on socioeconomic and health disadvantages to identify where priority populations make up relatively large proportions of neighborhood residents. </div><div><br /></div><div>Version: <b>Current</b></div><div><br /></div><div><span style='font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size:16px;'>See the data in action in this </span><a href='https://seattlecitygis.maps.arcgis.com/apps/Minimalist/index.html?appid=764b5d8988574644b61e644e9fbe30d1' target='_blank' rel='nofollow ugc noopener noreferrer'>web app</a><span style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'>.</span><br /></div><div><span style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'><br /></span></div><div>The Composite Index includes sub-indices of:   </div></div><div><font color='#8b008b'><br /></font></div><div><b><font size='3'><font color='#000000'>Race, English Language Learners, and Origins Index</font><font color='#32cd32'> </font></font></b><br /></div><div>ranks census tracts by an index of three measures weighted as follows:</div><div><br /></div><div><img src='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/f07803899a174f21891c13cf6f73fc41/data' width='22' />   Persons of color (weight: 1.0)<br /><img src='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/26cc814b461c4b8d93e590586a79fa4f/data' width='27' /> English language learner (weight: 0.5)<br /><img src='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/5f17b32f2f504e1f96a26033459d9af7/data' width='25' />  Foreign born (weight: 0.5)<br /></div><div><br /></div><div><b><font color='#000000' size='3'>Socioeconomic Disadvantage Index </font></b></div><div>ranks census tracts by an index of two equally weighted measures:</div><div><br /></div><div><img src='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/a3051da873684551be11afc77935e442/data' width='30' /> Income below 200% of poverty level </div><div><img alt='grad' src='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/6ab4ccadbb0744b49b9234cfebf71956/data' width='30' /> Educational attainment less than a bachelor’s degree</div><div><br /></div><div><b><font color='#000000' size='3'>Health Disadvantage Index</font><font color='#ff4500'> </font></b></div><div>ranks census tracts by an index of seven equally weighted measures:</div><div><br /></div><div><img src='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/b4712eae6780412592a79505f7927e4d/data' width='25' /> No leisure-time physical activity</div><div><img src='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/f7415c7b4ba1463f8c88ecbd95093631/data' width='22' />  Diagnosed diabetes </div><div><img src='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/b670392c274a4ea4a3ad73b0bcea77c2/data' width='15' />   Obesity</div><div><img src='#seattlecitygis.maps.arcgis.com/sharing/rest/content/items/3d60f105993148bc8c10080c7ddb0633/data' width='25' /> Mental health not good </div><div><img src='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/85f2c5719b3744b99be9014bf9cc7b7b/data' width='22' />  Asthma</div><div><img src='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/59551594ee2f4271afe19e818ab3c60f/data' width='27' />Low life expectancy at birth</div><div><img src='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/81c8cbc1c2e143019c93680cec4dba28/data' width='25' /> Disability</div><div><br /></div><div><div style='font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;,",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-11T19:05:49.000Z",
        createdAt: "2022-11-30T19:06:23.000Z",
        metadata_updated_at: "2023-01-11T19:05:49.000Z",
        data_updated_at: "2022-11-30T19:06:23.000Z",
        page_views: {
          page_views_last_week: 18,
          page_views_last_month: 111,
          page_views_total: 144,
          page_views_last_week_log: 4.247927513443585,
          page_views_last_month_log: 6.807354922057604,
          page_views_total_log: 7.1799090900149345,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-11-30T19:06:23.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "equity",
          "ethnicity",
          "foreign born",
          "gis",
          "health",
          "languages spoken",
          "people of color",
          "planning",
          "poverty",
          "race",
          "rseapp",
          "tracts",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2023-01-10T21:25:10.988Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4308,47.4933,-122.2420,47.7357",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=225a4c2c50e94f2cb548a046217f49f7&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::racial-and-social-equity-composite-index",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-01-07T04:32:15.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::racial-and-social-equity-composite-index",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Racial_and_Social_Equity_Composite_Index/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::racial-and-social-equity-composite-index.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::racial-and-social-equity-composite-index.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::racial-and-social-equity-composite-index.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::racial-and-social-equity-composite-index.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::racial-and-social-equity-composite-index",
        },
      },
      permalink: "https://data.seattle.gov/d/5p9i-255u",
      link: "https://data.seattle.gov/dataset/Racial-and-Social-Equity-Composite-Index/5p9i-255u",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "City of Seattle Shoreline",
        id: "vcx7-uj97",
        parent_fxf: [],
        description:
          "<p><span style='line-height: 115%; font-family: '><font color='#000000'>A polygon feature class showing the City of Seattle, including Shoreline. It essentially follows the 8 foot contour line, except where the ortho offered further clarification. That 8 foot contour line matches closest to what NAVD88 shows as &quot;mean high water&quot; (see official definition below) at 7.97 feet. MEAN HIGH WATER (MHW): &quot;A tidal datum. The average of all the high water heights observed over the National Tidal Datum Epoch. For stations with shorter series, simultaneous observational comparisons are made with a control tide station in order to derive the equivalent datum of the National Tidal Datum Epoch. </font></span></p><p><span style='line-height: 115%; font-family: '><font color='#000000'>&quot;Source: </font><a href='http://co-ops.nos.noaa.gov/mapfinder/mhw.html'>http://co-ops.nos.noaa.gov/mapfinder/mhw.html</a><font color='#000000'>”</font></span></p>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-12-05T19:06:44.000Z",
        createdAt: "2022-08-20T05:03:50.000Z",
        metadata_updated_at: "2022-12-05T19:06:44.000Z",
        data_updated_at: "2022-08-20T05:03:50.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 4,
          page_views_total: 95,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.321928094887362,
          page_views_total_log: 6.584962500721156,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:50.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "boundaries",
          "city limits",
          "contours",
          "cosgis",
          "landuse",
          "seattle",
          "seattlecitygis",
          "seattle public utilities",
          "tidal",
          "wa",
          "wm_carto_shore",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-12-05T18:39:13.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4321,47.4417,-122.2327,47.7810",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=8fcbbb3f142d4d1dade4b99f443015ae&sublayer=3",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::city-of-seattle-shoreline",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2012-07-02T16:26:05.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::city-of-seattle-shoreline",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/COS_OutdoorsMisc/MapServer/3",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::city-of-seattle-shoreline.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::city-of-seattle-shoreline.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::city-of-seattle-shoreline.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::city-of-seattle-shoreline.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::city-of-seattle-shoreline",
        },
      },
      permalink: "https://data.seattle.gov/d/vcx7-uj97",
      link: "https://data.seattle.gov/dataset/City-of-Seattle-Shoreline/vcx7-uj97",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Seattle City Limits",
        id: "asfq-hunj",
        parent_fxf: [],
        description:
          "City of Seattle municipal boundaries. Includes northerly and southerly boundaries for the city. The easterly and westerly boundaries of the city are defined by waterbodies.",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:02.000Z",
        createdAt: "2022-08-20T05:03:02.000Z",
        metadata_updated_at: "2022-08-20T05:03:02.000Z",
        data_updated_at: "2022-08-20T05:03:02.000Z",
        page_views: {
          page_views_last_week: 3,
          page_views_last_month: 9,
          page_views_total: 95,
          page_views_last_week_log: 2.0,
          page_views_last_month_log: 3.3219280948873626,
          page_views_total_log: 6.584962500721156,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:02.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "boundaries",
          "boundary",
          "city of seattle",
          "dso",
          "gis",
          "land base",
          "municipal",
          "seattle",
          "seattle public utilities",
          "spu",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.3755,47.4941,-122.2421,47.7359",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=648c2d358afb48b3b95130a5a95405be&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-city-limits",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-03-08T00:05:40.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "PublicUtilities_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-city-limits",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/Seattle_City_Limits/MapServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-city-limits.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-city-limits.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-city-limits.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-city-limits.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-city-limits",
        },
      },
      permalink: "https://data.seattle.gov/d/asfq-hunj",
      link: "https://data.seattle.gov/dataset/Seattle-City-Limits/asfq-hunj",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Seattle Streets",
        id: "hhcg-rdwh",
        parent_fxf: [],
        description:
          "Streets data includes: Arterial Classification, Street Names, Block Number, Direction, One-way, Surface Width, Surface Type, Pavement Condition, Speed Limit, Percent Slope.   From the Hansen Asset Management System:<br /><br />The linework is from the SND(Street Network Database) which can be found at our open data site - <a href='https://data-seattlecitygis.opendata.arcgis.com/datasets/street-network-database-snd' target='_blank' rel='nofollow ugc noopener noreferrer'>https://data-seattlecitygis.opendata.arcgis.com/datasets/street-network-database-snd</a>.  <br /><br />| Attribute Information: <a href='https://www.seattle.gov/Documents/Departments/SDOT/GIS/Seattle_Streets_OD.pdf' target='_blank' rel='nofollow ugc noopener noreferrer'>https://www.seattle.gov/Documents/Departments/SDOT/GIS/Seattle_Streets_OD.pdf</a> <br /><br />| Update Cycle: Weekly<br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' target='_blank' rel='nofollow ugc noopener noreferrer'>DOT_IT_GIS@seattle.gov</a><br /><br />---  <br /><b>Common SDOT queries and data downloads</b>   <br />| <a href='https://data-seattlecitygis.opendata.arcgis.com/datasets/seattle-streets/data?where=%20(ARTDESCRIPT%20%3D%20%27Minor%20Arterial%27%20OR%20ARTDESCRIPT%20%3D%20%27Principal%20Arterial%27%20OR%20ARTDESCRIPT%20%3D%20%27Collector%20Arterial%27%20OR%20ARTDESCRIPT%20%3D%20%27State%20Route%2FFreeway%27)%20' target='_blank' rel='nofollow ugc noopener noreferrer'>Arterial Classification</a>: of Seattle Streets<br />ARTCLASS IN(1,2,3,4)<br /><br />| <a href='https://data-seattlecitygis.opendata.arcgis.com/datasets/seattle-streets/data?where=%20(TRANDESCRIPT%20%3D%20%27MINOR%20TRANSIT%20ROUTE%27%20OR%20TRANDESCRIPT%20%3D%20%27MAJOR%20TRANSIT%20ROUTE%27%20OR%20TRANDESCRIPT%20%3D%20%27PRINCIPAL%20TRANSIT%20ROUTE%27%20OR%20TRANDESCRIPT%20%3D%20%27LOCAL%20TRANSIT%20ROUTE%27%20OR%20TRANDESCRIPT%20%3D%20%27TEMPORARY%20TRANSIT%20ROUTE%27%20OR%20TRANDESCRIPT%20%3D%20%27MINOR%20RESTRICTED%20TRANSIT%20RT%27)%20' target='_blank' rel='nofollow ugc noopener noreferrer'>Transit Classification</a>: of Seattle Streets<br />TRANCLASS IN(1,2,3,4,5,6)",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-18T19:02:30.000Z",
        createdAt: "2022-08-20T05:03:14.000Z",
        metadata_updated_at: "2023-01-18T19:02:30.000Z",
        data_updated_at: "2022-08-20T05:03:14.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 12,
          page_views_total: 93,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 3.700439718141092,
          page_views_total_log: 6.554588851677638,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:14.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "arterial",
          "arterial classification",
          "block number",
          "direction",
          "gis",
          "one-way",
          "one way streets",
          "pavement condition",
          "percent slope",
          "sdot",
          "seattle",
          "speed limit",
          "street names",
          "surface type",
          "surface width",
          "transit",
          "transit classification",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2023-01-17T22:01:47.157Z",
          },
          { key: "Common-Core_License", value: "" },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4253,47.4832,-122.2306,47.7358",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=73f5184d9062458c81ff86e5f5bcdbb8&sublayer=9",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-streets-3",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-07-14T21:39:03.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "City_Seattle_GIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-streets-3",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Seattle_Streets/FeatureServer/9",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-streets-3.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-streets-3.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-streets-3.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-streets-3.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-streets-3",
        },
      },
      permalink: "https://data.seattle.gov/d/hhcg-rdwh",
      link: "https://data.seattle.gov/dataset/Seattle-Streets/hhcg-rdwh",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Current Land Use Zoning Detail",
        id: "ibgz-ugae",
        parent_fxf: [],
        description:
          "<div><span style='font-size:16px;'>Note:  This map is not an official zoning map.  For precise zoning information, please call or visit the Seattle Municipal Tower, </span><a href='https://www.seattle.gov/sdci/about-us' style='font-size:12pt;' target='_blank' rel='nofollow ugc noopener noreferrer'>Seattle Department of Construction and Inspections</a><br /></div><div><br /></div><div>A polygon feature class showing current City of Seattle land use zoning areas. It provides information on the type of zoning, overlay districts, enacting ordinance numbers and effective dates.</div><div><br /></div><div>Zoning Code governs the use and development of land in Seattle. Zoning districts specify a category of uses (e.g., single-family residential, multifamily residential, commercial, industrial, etc.) including specific overlays and are applied by ordinance. <br /></div><div><br /></div><div>Symbolized on the value DETAIL_DESC (group 28 categories).</div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:20.000Z",
        createdAt: "2022-08-20T05:03:25.000Z",
        metadata_updated_at: "2022-11-18T19:01:20.000Z",
        data_updated_at: "2022-08-20T05:03:25.000Z",
        page_views: {
          page_views_last_week: 3,
          page_views_last_month: 8,
          page_views_total: 84,
          page_views_last_week_log: 2.0,
          page_views_last_month_log: 3.1699250014423126,
          page_views_total_log: 6.409390936137703,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:25.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["gis", "land use", "planning", "sdcizoningmap", "zoning"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-09-20T21:57:03.856Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4489,47.4884,-122.2265,47.7429",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=dd29065b5d01420e9686570c2b77502b&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::current-land-use-zoning-detail",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-01-05T16:24:40.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::current-land-use-zoning-detail",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Current_Land_Use_Zoning_Detail_2/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::current-land-use-zoning-detail.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::current-land-use-zoning-detail.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::current-land-use-zoning-detail.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::current-land-use-zoning-detail.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::current-land-use-zoning-detail",
        },
      },
      permalink: "https://data.seattle.gov/d/ibgz-ugae",
      link: "https://data.seattle.gov/dataset/Current-Land-Use-Zoning-Detail/ibgz-ugae",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Neighborhood Map Atlas Districts",
        id: "vcc5-xhtr",
        parent_fxf: [],
        description:
          "Neighborhood map atlas district areas are derived from the Seattle City Clerk's Office Neighborhood Map Atlas.  These are the largest neighborhood areas and have been supplemented with alternate names from other sources in 2020.  They are subdivided further into the neighborhood map atlas sub-areas called neighborhoods.  The sub-neighborhoods field contains a comma delimited list of all the sub-areas and their alternate names.<div><br /></div><div>The original atlas is designed for subject indexing of legislation, photographs, and other documents and is an unofficial delineation of neighborhood boundaries used by the City Clerks Office. Sources for this atlas and the neighborhood names used in it include a 1980 neighborhood map produced by the Department of Community Development, Seattle Public Library indexes, a 1984-1986 Neighborhood Profiles feature series in the Seattle Post-Intelligencer, numerous parks, land use and transportation planning studies, and records in the Seattle Municipal Archives. </div><div><br /></div><div>Many of the neighborhood names are traditional names whose meaning has changed over the years, and others derive from subdivision names or elementary school attendance areas.</div><div><br /></div><div><p style='margin-top:0px; margin-bottom:1.5rem; font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size:16px;'><span style='font-family:inherit; font-size:10pt;'>Disclaimer: The Seattle City Clerk's Office Geographic Indexing Atlas is designed for subject indexing of legislation, photographs, and other records in the City Clerk's Office and Seattle Municipal Archives according to geographic area. Neighborhoods are named and delineated in this collection of maps in order to provide consistency in the way geographic names are used in describing records of the Archives and City Clerk, thus allowing precise retrieval of records. The neighborhood names and boundaries are not intended to represent any &quot;official&quot; City of Seattle neighborhood map. </span></p><p style='margin-top:0px; margin-bottom:1.5rem; font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size:16px;'><span style='font-family:inherit; font-size:10pt;'>The Office of the City Clerk makes no claims as to the completeness, accuracy, or content of any data contained in the Geographic Indexing Atlas; nor does it make any representation of any kind, including, but not limited to, warranty of the accuracy or fitness for a particular use; nor are any such warranties to be implied or inferred with respect to the representations furnished herein. The maps are subject to change for administrative purposes of the Office of the City Clerk. Information contained in the site, if used for any purpose other than as an indexing and search aid for the databases of the Office of the City Clerk, is being used at one's own risk.</span></p></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:19.000Z",
        createdAt: "2022-08-20T05:04:00.000Z",
        metadata_updated_at: "2022-11-18T19:01:19.000Z",
        data_updated_at: "2022-08-20T05:04:00.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 4,
          page_views_total: 76,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.321928094887362,
          page_views_total_log: 6.266786540694902,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:04:00.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["gis", "neighborhood", "planning"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2020-12-03T23:52:42.738Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4308,47.4933,-122.2422,47.7359",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=531976f80bd74c0992ba9079e4d86e2a&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "Seattle Public Utilities",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::neighborhood-map-atlas-districts",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-12-02T00:59:07.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::neighborhood-map-atlas-districts",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/nma_nhoods_main/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::neighborhood-map-atlas-districts.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::neighborhood-map-atlas-districts.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::neighborhood-map-atlas-districts.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::neighborhood-map-atlas-districts.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::neighborhood-map-atlas-districts",
        },
      },
      permalink: "https://data.seattle.gov/d/vcc5-xhtr",
      link: "https://data.seattle.gov/dataset/Neighborhood-Map-Atlas-Districts/vcc5-xhtr",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Parcels",
        id: "u4im-m88e",
        parent_fxf: [],
        description:
          "<div style='text-align:left;'><p><span style='font-size:12pt;'>These layers are used as part of the City of Seattle Zoned Development Capacity Model </span><span style='font-size:16px;'>2016. Includes all input and output layers.</span><span style='font-size:12pt;'>.</span></p><p style='font-size:12pt;'><span></span></p><p style='font-size:12pt;'><span>To estimate potential development, the City of Seattle maintains a zoned development capacity model that compares existing development to an estimate of what could be built under current zoning. </span></p><p style='font-size:12pt;'><span></span></p><p style='font-size:12pt;'><span>The difference between existing and potential development yields the capacity for new residential and commercial development.</span></p><p style='font-size:12pt;'><span></span></p><p style='font-size:12pt;'><span>There is a </span><a href='https://www.seattle.gov/dpd/cs/groups/pan/@pan/documents/web_informational/p2182731.pdf' target='_blank' rel='nofollow ugc noopener noreferrer'>report</a><span> of summary findings available as part of Seattle 2035 as well as </span><a href='https://www.seattle.gov/opcd/population-and-demographics/zoned-development-capacity' target='_blank' rel='nofollow ugc noopener noreferrer'>resources</a><span> for reports, methodologies and data.</span></p><p style='font-size:12pt;'><span style='font-size:15px;'>When downloading the data, please select a layer and then &quot;GDB Download&quot; under &quot;Additional Resources&quot; to preserve long field names.  The associated file geodatabase contains all the feature classes for the 10 layers represented.<br /></span><span><br /></span></p></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:16.000Z",
        createdAt: "2022-08-20T05:03:22.000Z",
        metadata_updated_at: "2022-11-18T19:01:16.000Z",
        data_updated_at: "2022-08-20T05:03:22.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 12,
          page_views_total: 73,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 3.700439718141092,
          page_views_total_log: 6.209453365628951,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:22.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "buildable lands",
          "capacity",
          "capacity model 2016",
          "devcapapp",
          "development",
          "gis",
          "planning",
          "zoned capacity",
          "zoning",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2020-01-02T18:40:06.388Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4351,47.4931,-122.2417,47.7361",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=42863f1debdc47488a1c2b9edd38053e&sublayer=2",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::parcels-1",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-01-02T18:39:37.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::parcels-1",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Zoned_Development_Capacity_Layers_2016/FeatureServer/2",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::parcels-1.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::parcels-1.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::parcels-1.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::parcels-1.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::parcels-1",
        },
      },
      permalink: "https://data.seattle.gov/d/u4im-m88e",
      link: "https://data.seattle.gov/dataset/Parcels/u4im-m88e",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Municipal Boundaries",
        id: "xbem-iqka",
        parent_fxf: [],
        description:
          "<div style='display: block'><span><div>A polygon feature class showing the 19 different cities and unincorporated areas of King County surrounding the City of Seattle.  Does not show full extent cities on the east.</div></span><br /><div style='display: block'><span><div>Display based on the category JURIS.</div></span><br /></div></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:17.000Z",
        createdAt: "2022-08-20T05:03:17.000Z",
        metadata_updated_at: "2022-08-20T05:03:17.000Z",
        data_updated_at: "2022-08-20T05:03:17.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 8,
          page_views_total: 71,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 3.1699250014423126,
          page_views_total_log: 6.169925001442312,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:17.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "boundaries",
          "city limits",
          "cosgis",
          "landuse",
          "planning",
          "political",
          "seattle",
          "seattlecitygis",
          "wa",
          "wm_municipal_boundaries",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4463,47.1575,-121.3470,47.7875",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=d508083ebd7d444b9997639af845937d&sublayer=1",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::municipal-boundaries",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2012-07-02T21:43:51.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::municipal-boundaries",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/Seattle_City_Limits/MapServer/1",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::municipal-boundaries.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::municipal-boundaries.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::municipal-boundaries.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::municipal-boundaries.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::municipal-boundaries",
        },
      },
      permalink: "https://data.seattle.gov/d/xbem-iqka",
      link: "https://data.seattle.gov/dataset/Municipal-Boundaries/xbem-iqka",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "2010 Census Tract Seattle - Population Statistics",
        id: "huxa-86yc",
        parent_fxf: [],
        description:
          "<i>Data from:  </i><i><a href='http://www.seattle.gov/opcd/population-and-demographics/decennial-census#2010' target='_blank'>2010 Decennial Census</a></i><div><br /></div><div>Decennial population data for Census Tracts in the City of Seattle.<br /></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-21T19:03:00.000Z",
        createdAt: "2022-08-20T05:03:59.000Z",
        metadata_updated_at: "2023-01-21T19:03:00.000Z",
        data_updated_at: "2022-08-20T05:03:59.000Z",
        page_views: {
          page_views_last_week: 4,
          page_views_last_month: 10,
          page_views_total: 66,
          page_views_last_week_log: 2.321928094887362,
          page_views_last_month_log: 3.4594316186372978,
          page_views_total_log: 6.066089190457772,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:59.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "dc2010",
          "gis",
          "planning",
          "census",
          "demographics",
          "population",
          "tracts",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2023-01-20T23:47:17.000Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4308,47.4933,-122.2420,47.7357",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=e7886cf380e6449180916dbf0e95adc3&sublayer=15",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-tract-seattle-population-statistics",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2016-04-05T22:41:50.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-tract-seattle-population-statistics",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisrevprxy.seattle.gov/arcgis/rest/services/CENSUS_EXT/CENSUS_2010_BASICS/MapServer/15",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-tract-seattle-population-statistics.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-tract-seattle-population-statistics.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-tract-seattle-population-statistics.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-tract-seattle-population-statistics.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-tract-seattle-population-statistics",
        },
      },
      permalink: "https://data.seattle.gov/d/huxa-86yc",
      link: "https://data.seattle.gov/dataset/2010-Census-Tract-Seattle-Population-Statistics/huxa-86yc",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Zoning with Development Assumptions",
        id: "8xhp-x5pe",
        parent_fxf: [],
        description:
          "<div>Land use zoning simplified to zoning and shoreline overlay polygons with development assumptions by zoning category.</div><div><br /></div><div>Assumptions include floor-area-ratio, residential density, split between residential and commercial floor area in mixed use zones, redevelopment ratio thresholds and conversions between floor area and housing units and jobs.</div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:18.000Z",
        createdAt: "2022-08-27T05:05:34.000Z",
        metadata_updated_at: "2022-11-18T19:01:18.000Z",
        data_updated_at: "2022-08-27T05:05:34.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 2,
          page_views_total: 64,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.5849625007211563,
          page_views_total_log: 6.022367813028454,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-27T05:05:34.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "capacity model current",
          "development capacity",
          "gis",
          "land use zoning",
          "planning",
          "zoning",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-08-25T20:42:12.705Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4361,47.4933,-122.2404,47.7359",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=e5c353571e334c36acf51147f2741049&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::zoning-with-development-assumptions",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-08-25T20:42:04.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::zoning-with-development-assumptions",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Zoning_with_Development_Assumptions/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::zoning-with-development-assumptions.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::zoning-with-development-assumptions.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::zoning-with-development-assumptions.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::zoning-with-development-assumptions.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::zoning-with-development-assumptions",
        },
      },
      permalink: "https://data.seattle.gov/d/8xhp-x5pe",
      link: "https://data.seattle.gov/dataset/Zoning-with-Development-Assumptions/8xhp-x5pe",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Building Outlines 2015",
        id: "myr3-bpjz",
        parent_fxf: [],
        description:
          "Building roof outlines based on 2015 imagery. Update Areas of Change (AoC) identified from 2015 imagery, AoCs reviewed and accepted by Seattle Public Utilities. Update feature collection done in stereo with 2015 imagery. Original 2012 data removed from identified AoCs, newly collected 2015 data merged back into dataset. All data within 2015 AoCs is given an attribute of &quot;2015&quot; in the &quot;YearUpdated&quot; attribute field. Attribution includes updated building structures apex roof heights.",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:02:35.000Z",
        createdAt: "2022-08-20T05:02:35.000Z",
        metadata_updated_at: "2022-08-20T05:02:35.000Z",
        data_updated_at: "2022-08-20T05:02:35.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 12,
          page_views_total: 63,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 3.700439718141092,
          page_views_total_log: 6.0,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:35.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "2015",
          "building",
          "building outlines",
          "buildings",
          "gis",
          "planning",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4291,47.4422,-122.2252,47.7801",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=1e3a033a714e483cbbc84e29b45fd183&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::building-outlines-2015",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-11-06T17:41:31.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::building-outlines-2015",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/COS_Building_Outlines_2015/MapServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::building-outlines-2015.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::building-outlines-2015.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::building-outlines-2015.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::building-outlines-2015.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::building-outlines-2015",
        },
      },
      permalink: "https://data.seattle.gov/d/myr3-bpjz",
      link: "https://data.seattle.gov/dataset/Building-Outlines-2015/myr3-bpjz",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Seattle Public Libraries",
        id: "id7u-w2mt",
        parent_fxf: [],
        description: "Locations of Seattle Public Library facilities.",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:02:24.000Z",
        createdAt: "2022-08-20T05:02:24.000Z",
        metadata_updated_at: "2022-08-20T05:02:24.000Z",
        data_updated_at: "2022-08-20T05:02:24.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 3,
          page_views_total: 59,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.0,
          page_views_total_log: 5.906890595608519,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:24.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["libraries", "library", "public facility", "spl"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:02.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.3976,47.5197,-122.2761,47.7240",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=ebcdc27c763f46ef84b98f171d2eecd8&sublayer=5",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-public-libraries",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-12-04T22:19:19.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-public-libraries",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/COS_Public_Facilities_and_Safety/MapServer/5",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-public-libraries.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-public-libraries.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-public-libraries.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-public-libraries.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-public-libraries",
        },
      },
      permalink: "https://data.seattle.gov/d/id7u-w2mt",
      link: "https://data.seattle.gov/dataset/Seattle-Public-Libraries/id7u-w2mt",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Sidewalks",
        id: "t9up-nnny",
        parent_fxf: [],
        description:
          "The sidewalk inventory was developed to assist staff in planning walkway development and to prioritize sidewalk improvements and maintenance.  Sidewalk locations will be based on the locations of the assets on either side of the street segments.  Expired assets are excluded.  The sidewalk system consists of paved walkways (concrete, asphalt, and pavers), a few soft-surface pathways.  \n<br /><br />| Attribute Information: <a href='https://www.seattle.gov/Documents/Departments/SDOT/GIS/Sidewalks_OD.pdf' rel='nofollow ugc' target='_blank'>https://www.seattle.gov/Documents/Departments/SDOT/GIS/Sidewalks_OD.pdf</a> <br /><br />| Data Confidence: Medium <br />| Data Confidence Source: <a href='https://www.seattle.gov/Documents/Departments/SDOT/About/SDOT2015SCReportFinal12-7-2015.pdf' rel='nofollow ugc' target='_blank'>2015 SDOT Asset Management, Status and Condition Report</a> <br />| Data Update Cycle: Weekly <br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' rel='nofollow ugc' target='_blank'>DOT_IT_GIS@seattle.gov</a>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:02:39.000Z",
        createdAt: "2022-08-20T05:02:39.000Z",
        metadata_updated_at: "2022-08-20T05:02:39.000Z",
        data_updated_at: "2022-08-20T05:02:39.000Z",
        page_views: {
          page_views_last_week: 3,
          page_views_last_month: 11,
          page_views_total: 57,
          page_views_last_week_log: 2.0,
          page_views_last_month_log: 3.5849625007211565,
          page_views_total_log: 5.857980995127572,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:39.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "018",
          "curb",
          "gis",
          "pedestrian",
          "planting strip",
          "ramp",
          "sdot",
          "seattle",
          "sidewalk",
          "sidewalks",
          "transportation",
          "wa",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4172,47.4935,-122.2433,47.7357",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=ee6d0642d2a04e35892d0eab77d971d6&sublayer=2",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::sidewalks",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2017-09-18T20:50:10.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Transportation_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::sidewalks",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Pedestrian/MapServer/2",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::sidewalks.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::sidewalks.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::sidewalks.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::sidewalks.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::sidewalks",
        },
      },
      permalink: "https://data.seattle.gov/d/t9up-nnny",
      link: "https://data.seattle.gov/dataset/Sidewalks/t9up-nnny",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Zip Codes",
        id: "supc-teir",
        parent_fxf: [],
        description:
          "<div><span><div>A polygon feature class displaying countywide zip code boundaries.</div></span><div><span></span></div><div><span>Zip code data supplied by King County, updated quarterly.</span><br /></div></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:19.000Z",
        createdAt: "2022-08-20T05:03:19.000Z",
        metadata_updated_at: "2022-08-20T05:03:19.000Z",
        data_updated_at: "2022-08-20T05:03:19.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 7,
          page_views_total: 50,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 3.0,
          page_views_total_log: 5.672425341971496,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:19.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "boundaries",
          "cosgis",
          "king county",
          "political",
          "seattle",
          "seattlecitygis",
          "wa",
          "wm_zip_codes",
          "zip",
          "zip code",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.9898,46.7122,-119.8992,48.3040",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=83fc2e72903343aabff6de8cb445b81c&sublayer=2",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::zip-codes",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2012-07-02T22:02:43.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::zip-codes",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/Seattle_City_Limits/MapServer/2",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::zip-codes.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::zip-codes.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::zip-codes.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::zip-codes.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::zip-codes",
        },
      },
      permalink: "https://data.seattle.gov/d/supc-teir",
      link: "https://data.seattle.gov/dataset/Zip-Codes/supc-teir",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Addresses (MAF)",
        id: "y8kz-x5b5",
        parent_fxf: [],
        description:
          "Displays citywide address points using TRANSPO.MAFDAP_PV. Differs from TRANSPO.DAP in that it contains address data. Attributes include house number and modifier, directional, street name, and street type. Does not display when zoomed out beyond 1:10,000. Labels are based on the attribute MAF_HSENUMMOD and do not display when zoomed out beyond 1:3,000. <div><br /></div><div>ATTRIBUTE INFORMATION: </div><div>MAILUSECODE: Identifies suitability of MAF address and associated MAFUNIT record(s) for use as a mailing address. This field serves as an indicator whether the address is being utilized in the City's Utility Billing System. If so, it is more likely (but still not guaranteed) to be a valid mailing address. </div><div><br /></div><div>DCLUSTAT - Description of address establishment and validation status related to DCLU business process. </div><div>Valid values: </div><div><ul><li>INITIAL VALUE: SPU-added records are assigned this value upon creation. </li><li>DRAFT: only DPD-added records are assigned this value upon creation.</li><li>FIELD VERIFIED: only DPD can assign this value. Indicates that DPD at some point conducted a site visit. This value is not reliably assigned and is not necessarily an indicator of a correct address. </li><li>CANCELED: only DPD can assign this value. The address was never utilized. </li><li>RETIRED: DPD or SPU can assign this value. The address may have been utilized for some period of time but was then replaced by a different address for the location or retired from use completely. </li></ul></div><div><br /></div><div>DCLUSTATDT - Date of creation or modification of record. </div><div><br /></div><div>SOURCENAME - Descriptive character string identifying agency, department or divisional record source or usage. </div><div>Valid values: </div><div><ul><li>DPD_MAF: Added or modified by DPD </li><li>CGDB_MAFEDITS: Added or modified by SPU</li><li>INIT_MAF: The initial record value, likely harvested from King County Assessor data when the MAF/DAP was first implemented.</li></ul></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-18T19:02:31.000Z",
        createdAt: "2022-08-20T05:03:08.000Z",
        metadata_updated_at: "2023-01-18T19:02:31.000Z",
        data_updated_at: "2022-08-20T05:03:08.000Z",
        page_views: {
          page_views_last_week: 7,
          page_views_last_month: 11,
          page_views_total: 48,
          page_views_last_week_log: 3.0,
          page_views_last_month_log: 3.5849625007211565,
          page_views_total_log: 5.614709844115208,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:08.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["address", "addresses", "maf", "seattle", "transpo"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2023-01-17T22:29:54.336Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color:rgb(50, 49, 48); font-family:&quot;Segoe UI&quot;, &quot;Segoe UI Web (West European)&quot;, &quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, Roboto, &quot;Helvetica Neue&quot;, sans-serif; font-size:18px;'>The City of Seattle makes no representation or warranty as to its accuracy, and in particular, its accuracy as to labeling, dimensions, contours, property boundaries, or placement or location of any map feature thereof.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4291,47.4441,-122.2266,47.7801",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=e596af4297b343ee8ea92ff56a076ba7&sublayer=1",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::addresses-maf",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-07-25T21:28:17.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "City_Seattle_GIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::addresses-maf",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/TRANSPO_MAFDAP_PV/FeatureServer/1",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::addresses-maf.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::addresses-maf.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::addresses-maf.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::addresses-maf.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::addresses-maf",
        },
      },
      permalink: "https://data.seattle.gov/d/y8kz-x5b5",
      link: "https://data.seattle.gov/dataset/Addresses-MAF-/y8kz-x5b5",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Public and Open Spaces in Seattle",
        id: "hhma-y9tj",
        parent_fxf: [],
        description:
          "<p><font size='3'>The PublicSpaceSeattle sublayer is a comprehensive inventory of all outdoor, publicly-accessible spaces in Seattle. It is complemented by a separate entrance point sublayer, PublicSpaceSeattle_EntryPts, for network analysis purposes.  PrivateOpenSpace contains parks and open spaces that aren't publicly-accessible. Current as of Jan 1, 2022. <br /></font></p><p><font size='3'>Webmap of the data is available </font><a href='https://seattlecitygis.maps.arcgis.com/apps/mapviewer/index.html?webmap=25b07ac12bee4943ab034f846adf89cb' target='_blank' rel='nofollow ugc noopener noreferrer'>here</a><font size='3'>.</font></p><p><font size='3'>PublicSpaceSeattle is a comprehensive inventory of all outdoor public spaces in Seattle. It includes all types of publicly-accessible outdoor spaces (public parks, privately owned plazas, cemeteries, greenbelts, etc) across all forms of ownership (City of Seattle, the Port of Seattle, King County, universities, etc).</font></p><p><font size='3'>This dataset was developed for use in planning and analysis applications, and is oriented toward user experience. Therefore, areas under different forms of City ownership forming a connected open space have sometimes been merged, with all owners listed in the feature attributes (such as a greenbelt owned by both SPR and SDOT).</font></p><p><font size='3'>The dataset includes all outdoor publicly-accessible space (cemeteries, parks, schoolyards, etc). Buildings and parking lots are included in feature boundaries if the location is primarily dedicated toward environmental or outdoor recreational uses (such as a park). Buildings and parking lots are not included in locations primarily dedicated toward other uses (such as libraries and schoolyards). Waterbodies are included within feature boundaries only if they are surrounded by land-based public space.</font></p><p><font size='3'>PublicSpaceSeattle_EntryPts contains entrance points for the polygon features in PublicSpaceSeattle.  Identical feature data is attached to each polygon and corresponding entrance point.</font></p><p><span style='text-decoration-line:underline;'><font size='3'>Field definitions</font></span></p><p><font size='3'><span style='font-weight:bold;'>NAME: </span>name of public space</font></p><p><font size='3'><span style='font-weight:bold;'>TYPE: </span>public space type (i.e.. park, greenbelt, cemetery, golf course, plaza, etc)</font></p><p><font size='3'><span style='font-weight:bold;'>OWNER: </span>initials of owner (see OWNER NAME LONG for full name)</font></p><p><font size='3'><span style='font-weight:bold;'>GREENSPACE: </span>feature is or contains an occupiable lawn area</font></p><p><font size='3'><span style='font-weight:bold;'>PLAYGROUND: </span>feature is or contains a playground, play area, or play feature</font></p><p><font size='3'><span style='font-weight:bold;'>SPORTS: </span>feature is or contains a sports facility of any type, including a skatepark, basketball hoop, football field, etc</font></p><p><font size='3'><span style='font-weight:bold;'>NATURAL: </span>feature is or contains a natural area such as a forest or wetland</font></p><p><font size='3'><span style='font-weight:bold;'>TRAIL: </span>feature is or contains a trail network long enough to be used for walking, jogging, running, or biking (such as a loop trail within a large park, a segment of a larger trail network, etc)</font></p><p><font size='3'><span style='font-weight:bold;'>AGRICULTURE: </span>feature is used for or contains an area for agricultural activity, such as a community garden or p-patch</font></p><p><font size='3'><span style='font-weight:bold;'>RESTROOM: </span>feature contains a public restroom</font></p><p><font size='3'><span style='font-weight:bold;'>WATER: </span>feature contains or is in close proximity to a waterbody, stream, or human-made water feature. Does not indicate physical access.</font></p><p><font size='3'><span style='font-weight:bold;'>PUBLIC ACCESS: </span>y",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-24T19:04:42.000Z",
        createdAt: "2022-08-20T05:03:20.000Z",
        metadata_updated_at: "2022-11-24T19:04:42.000Z",
        data_updated_at: "2022-08-20T05:03:20.000Z",
        page_views: {
          page_views_last_week: 3,
          page_views_last_month: 6,
          page_views_total: 48,
          page_views_last_week_log: 2.0,
          page_views_last_month_log: 2.807354922057604,
          page_views_total_log: 5.614709844115208,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:20.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "entrances",
          "gis",
          "green space",
          "open space",
          "parks",
          "public space",
          "seattle",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-11-23T20:35:14.000Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4309,47.4965,-122.2471,47.7356",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=4eb72c46b30c4bdbb101965ac137d7c3",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::public-and-open-spaces-in-seattle-1",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-02-13T13:26:08.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::public-and-open-spaces-in-seattle-1",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Public_and_Open_Spaces_in_Seattle_WFL1/FeatureServer",
            },
            title: "ArcGIS GeoService",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::public-and-open-spaces-in-seattle-1",
        },
      },
      permalink: "https://data.seattle.gov/d/hhma-y9tj",
      link: "https://data.seattle.gov/dataset/Public-and-Open-Spaces-in-Seattle/hhma-y9tj",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "King County Tax Parcel Centroids with select City of Seattle geographic overlays",
        id: "uyre-b654",
        parent_fxf: [],
        description:
          "<div><b>PLEASE NOTE</b>: If choosing the Download option of &quot;Spreadsheet&quot; the field PIN is reformatted to a number - you will need to format it as a 10 character text string with leading zeros to join this data with data from King County.</div><div><br /></div><div>King County Assessor data has been summarized to the tax parcel identification number (PIN) and City of Seattle spatial overlay data has been assigned through geographic overlay processes.  This data is updated periodically and is used to support the analytical and reporting functions of the City of Seattle long-range and policy planning office.</div><div><br /></div><div>The table includes attribute data from the King County Assessor as well as spatial overlay data for various City of Seattle reporting geographies.  These geographic attributes are assigned as &quot;majority rules&quot; by land area in cases where multiple geographies span a single tax parcel.</div><div><br /></div><div>KCA tax parcels are created by King County for property tax assessment and collection and may not match development sites as defined by the City of Seattle (single buildings may span multiple tax parcels), may be stacked on top of each other to represent undivided interest and vertical parcels, or may be made up of several sites that are not contiguous.  Every effort is made to accurately summarize key tax parcel attributes to a single PIN.  </div><div><br /></div><div>Attributes include parcel centroid locations in latitude/longitude and Washington State Plane X,Y.  To get polygon representation of the data please see King County's open data page for <a href='https://gis-kingcounty.opendata.arcgis.com/datasets/king-county-parcels-parcel-area' target='_blank' rel='nofollow ugc noopener noreferrer'>parcels</a> and join this table through the PIN field.  Please be aware that the King County Assessor site address is not a postal address and may not match other address sources for the same property such as postal, utility billing, and permitting.<br /></div><div><br /></div><div>See the detailed <a href='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/2bd094a63fdd4c30a90129b09f818485/data' target='_blank' rel='nofollow ugc noopener noreferrer'>data dictionary</a> for more information.</div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:12.000Z",
        createdAt: "2022-08-20T05:03:24.000Z",
        metadata_updated_at: "2022-11-18T19:01:12.000Z",
        data_updated_at: "2022-08-20T05:03:24.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 4,
          page_views_total: 45,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 2.321928094887362,
          page_views_total_log: 5.523561956057013,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:24.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "gis",
          "king county assessor",
          "parcels",
          "planning",
          "zoning",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-08-08T23:12:53.879Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4397,47.4929,-122.2365,47.7367",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=f068ed28bace4d00bd0d91a1c4626068&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::king-county-tax-parcel-centroids-with-select-city-of-seattle-geographic-overlays",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-05-01T20:52:00.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::king-county-tax-parcel-centroids-with-select-city-of-seattle-geographic-overlays",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/King_County_Tax_Parcel_Centroids_with_select_City_of_Seattle_geographic_overlays/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::king-county-tax-parcel-centroids-with-select-city-of-seattle-geographic-overlays.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::king-county-tax-parcel-centroids-with-select-city-of-seattle-geographic-overlays.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::king-county-tax-parcel-centroids-with-select-city-of-seattle-geographic-overlays.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::king-county-tax-parcel-centroids-with-select-city-of-seattle-geographic-overlays.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::king-county-tax-parcel-centroids-with-select-city-of-seattle-geographic-overlays",
        },
      },
      permalink: "https://data.seattle.gov/d/uyre-b654",
      link: "https://data.seattle.gov/dataset/King-County-Tax-Parcel-Centroids-with-select-City-/uyre-b654",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Land Use Zoning",
        id: "nzjz-q2j5",
        parent_fxf: [],
        description:
          "<div style='text-align:left;'><p><span style='font-size:12pt;'>These layers are used as part of the City of Seattle Zoned Development Capacity Model </span><span style='font-size:16px;'>2016. Includes all input and output layers.</span><span style='font-size:12pt;'>.</span></p><p style='font-size:12pt;'><span></span></p><p style='font-size:12pt;'><span>To estimate potential development, the City of Seattle maintains a zoned development capacity model that compares existing development to an estimate of what could be built under current zoning. </span></p><p style='font-size:12pt;'><span></span></p><p style='font-size:12pt;'><span>The difference between existing and potential development yields the capacity for new residential and commercial development.</span></p><p style='font-size:12pt;'><span></span></p><p style='font-size:12pt;'><span>There is a </span><a href='https://www.seattle.gov/dpd/cs/groups/pan/@pan/documents/web_informational/p2182731.pdf' target='_blank' rel='nofollow ugc noopener noreferrer'>report</a><span> of summary findings available as part of Seattle 2035 as well as </span><a href='https://www.seattle.gov/opcd/population-and-demographics/zoned-development-capacity' target='_blank' rel='nofollow ugc noopener noreferrer'>resources</a><span> for reports, methodologies and data.</span></p><p style='font-size:12pt;'><span style='font-size:15px;'>When downloading the data, please select a layer and then &quot;GDB Download&quot; under &quot;Additional Resources&quot; to preserve long field names.  The associated file geodatabase contains all the feature classes for the 10 layers represented.<br /></span><span><br /></span></p></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:20.000Z",
        createdAt: "2022-08-20T05:03:05.000Z",
        metadata_updated_at: "2022-11-18T19:01:20.000Z",
        data_updated_at: "2022-08-20T05:03:05.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 7,
          page_views_total: 45,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 3.0,
          page_views_total_log: 5.523561956057013,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:05.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "buildable lands",
          "capacity",
          "capacity model 2016",
          "devcapapp",
          "development",
          "gis",
          "planning",
          "zoned capacity",
          "zoning",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2020-01-02T18:40:06.388Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4489,47.4884,-122.2265,47.7429",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=42863f1debdc47488a1c2b9edd38053e&sublayer=9",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::land-use-zoning",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-01-02T18:39:37.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::land-use-zoning",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Zoned_Development_Capacity_Layers_2016/FeatureServer/9",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::land-use-zoning.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::land-use-zoning.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::land-use-zoning.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::land-use-zoning.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::land-use-zoning",
        },
      },
      permalink: "https://data.seattle.gov/d/nzjz-q2j5",
      link: "https://data.seattle.gov/dataset/Land-Use-Zoning/nzjz-q2j5",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Seattle Police Beats 2018-Present",
        id: "eaki-hrtf",
        parent_fxf: [],
        description:
          "<div><p>Seattle is divided into five geographic areas. Within those areas are\n the 5 precincts or police stations: North, East, South, West and \nSouthwest. Precinct boundaries were determined through consideration of \nneighborhood boundaries, geographic and other natural boundaries.</p>\n<p>Each precinct contains smaller geographic areas called Sectors. There are 17 sectors total in the city.</p>\n<p>Each of these Sectors are divided into between 3 smaller sections \ncalled Beats (i.e. Ocean sector has three beats O1, O2, O3) These are \nthe areas that individual patrol officers are assigned responsibility \nfor.</p></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:02:31.000Z",
        createdAt: "2022-08-20T05:02:31.000Z",
        metadata_updated_at: "2022-08-20T05:02:31.000Z",
        data_updated_at: "2022-08-20T05:02:31.000Z",
        page_views: {
          page_views_last_week: 3,
          page_views_last_month: 5,
          page_views_total: 45,
          page_views_last_week_log: 2.0,
          page_views_last_month_log: 2.584962500721156,
          page_views_total_log: 5.523561956057013,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:31.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "beats",
          "gis",
          "police beats",
          "precincts",
          "safety",
          "seattle",
          "seattle police",
          "spd",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:02.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4537,47.4811,-122.2285,47.7511",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=36378b7acb8a464c8019b9618fecd0dd&sublayer=2",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-police-beats-2018-present",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2019-01-30T23:39:43.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-police-beats-2018-present",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/SPD/SPD/MapServer/2",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-police-beats-2018-present.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-police-beats-2018-present.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-police-beats-2018-present.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-police-beats-2018-present.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-police-beats-2018-present",
        },
      },
      permalink: "https://data.seattle.gov/d/eaki-hrtf",
      link: "https://data.seattle.gov/dataset/Seattle-Police-Beats-2018-Present/eaki-hrtf",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Pay Stations",
        id: "psnz-rgwe",
        parent_fxf: [],
        description:
          "<div style='text-align:Left;'><p>Displays the locations of Paid Parking Kiosks that distribute a receipt that is displayed in the vehicle.  <br /><br />| Attribute Information: <a href='https://www.seattle.gov/Documents/Departments/SDOT/GIS/Pay_Station_OD.pdf' target='_blank' rel='nofollow ugc noopener noreferrer'>https://www.seattle.gov/Documents/Departments/SDOT/GIS/Pay_Station_OD.pdf</a><br /><br />| Data Update Cycle: Weekly (Due to issues with nightly update)<br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' target='_blank' rel='nofollow ugc noopener noreferrer'>DOT_IT_GIS@seattle.gov</a><br /></p></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-18T19:02:30.000Z",
        createdAt: "2022-08-20T05:02:29.000Z",
        metadata_updated_at: "2023-01-18T19:02:30.000Z",
        data_updated_at: "2022-08-20T05:02:29.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 4,
          page_views_total: 44,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.321928094887362,
          page_views_total_log: 5.491853096329675,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:29.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "gis",
          "parking",
          "pay station",
          "sdot",
          "seattle",
          "transportation",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2023-01-17T21:56:27.768Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size:16px;'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.3957,47.5560,-122.2876,47.6814",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=ab129e715eb045c1bc80bfae380ccec4&sublayer=2",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::pay-stations-2",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-07-06T23:00:08.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "City_Seattle_GIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::pay-stations-2",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Pay_Stations/FeatureServer/2",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::pay-stations-2.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::pay-stations-2.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::pay-stations-2.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::pay-stations-2.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::pay-stations-2",
        },
      },
      permalink: "https://data.seattle.gov/d/psnz-rgwe",
      link: "https://data.seattle.gov/dataset/Pay-Stations/psnz-rgwe",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Urban Center Neighborhood Areas",
        id: "dw7b-xfqb",
        parent_fxf: [],
        description:
          "<span style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'>Growth data for housing units and employment for r</span><span style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'>ecognized sub-villages of three of the City of Seattle's designated urban centers.</span><div><span style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'><br /></span></div><div><span style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'>Housing unit growth is reported quarterly from the city's permitting system while employment change is reported annually from the State of Washington QCEW data.</span></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:11.000Z",
        createdAt: "2022-08-20T05:04:01.000Z",
        metadata_updated_at: "2022-11-18T19:01:11.000Z",
        data_updated_at: "2022-08-20T05:04:01.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 1,
          page_views_total: 44,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.0,
          page_views_total_log: 5.491853096329675,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:04:01.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "comprehensive plan",
          "employment",
          "gis",
          "housing units",
          "jobs",
          "monitoring",
          "planning",
          "urban centers and villages",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-11-08T21:13:13.827Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.3618,47.5920,-122.2932,47.6716",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=475a720405cc45968a04513354030a3e&sublayer=1",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::urban-center-neighborhood-areas",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-01-06T07:25:11.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::urban-center-neighborhood-areas",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Urban_Centers_and_Villages_Growth_Monitoring/FeatureServer/1",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::urban-center-neighborhood-areas.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::urban-center-neighborhood-areas.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::urban-center-neighborhood-areas.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::urban-center-neighborhood-areas.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::urban-center-neighborhood-areas",
        },
      },
      permalink: "https://data.seattle.gov/d/dw7b-xfqb",
      link: "https://data.seattle.gov/dataset/Urban-Center-Neighborhood-Areas/dw7b-xfqb",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Neighborhood Map Atlas Neighborhoods",
        id: "h6sh-ea6k",
        parent_fxf: [],
        description:
          "Neighborhood Map Atlas neighborhoods are derived from the Seattle City Clerk's Office Neighborhood Map Atlas.  These are the smallest neighborhood areas and have been supplemented with alternate names from other sources in 2020.  They roll up to the district areas.  The sub-neighborhood field contains the most common name and the alternate name field is a comma delimited list of all the alternate names.<div><br /></div><div>The original atlas is designed for subject indexing of legislation, photographs, and other documents and is an unofficial delineation of neighborhood boundaries used by the City Clerks Office. Sources for this atlas and the neighborhood names used in it include a 1980 neighborhood map produced by the Department of Community Development, Seattle Public Library indexes, a 1984-1986 Neighborhood Profiles feature series in the Seattle Post-Intelligencer, numerous parks, land use and transportation planning studies, and records in the Seattle Municipal Archives. Many of the neighborhood names are traditional names whose meaning has changed over the years, and others derive from subdivision names or elementary school attendance areas.</div><div><br /></div><div><p><span style='font-size:10.0pt;'>Disclaimer:\nThe Seattle City Clerk's Office Geographic Indexing Atlas is designed for\nsubject indexing of legislation, photographs, and other records in the City\nClerk's Office and Seattle Municipal Archives according to geographic area.\nNeighborhoods are named and delineated in this collection of maps in order to\nprovide consistency in the way geographic names are used in describing records\nof the Archives and City Clerk, thus allowing precise retrieval of records. The\nneighborhood names and boundaries are not intended to represent any\n&quot;official&quot; City of Seattle neighborhood map. </span></p>\n\n<p><span style='font-size:10pt;'>The Office of the City Clerk makes no claims\nas to the completeness, accuracy, or content of any data contained in the\nGeographic Indexing Atlas; nor does it make any representation of any kind,\nincluding, but not limited to, warranty of the accuracy or fitness for a\nparticular use; nor are any such warranties to be implied or inferred with\nrespect to the representations furnished herein. The maps are subject to change\nfor administrative purposes of the Office of the City Clerk. Information\ncontained in the site, if used for any purpose other than as an indexing and\nsearch aid for the databases of the Office of the City Clerk, is being used at\none's own risk.</span><br /></p></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:22.000Z",
        createdAt: "2022-11-16T19:06:57.000Z",
        metadata_updated_at: "2022-11-18T19:01:22.000Z",
        data_updated_at: "2022-11-16T19:06:57.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 11,
          page_views_total: 42,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 3.5849625007211565,
          page_views_total_log: 5.426264754702098,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-11-16T19:06:57.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["gis", "neighborhood", "planning"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2020-12-03T23:51:11.433Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4308,47.4933,-122.2422,47.7359",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=b4a142f592e94d39a3bf787f3c112c1d&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "Seattle Public Utilities",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::neighborhood-map-atlas-neighborhoods",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-12-02T01:01:53.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::neighborhood-map-atlas-neighborhoods",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/nma_nhoods_sub/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::neighborhood-map-atlas-neighborhoods.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::neighborhood-map-atlas-neighborhoods.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::neighborhood-map-atlas-neighborhoods.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::neighborhood-map-atlas-neighborhoods.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::neighborhood-map-atlas-neighborhoods",
        },
      },
      permalink: "https://data.seattle.gov/d/h6sh-ea6k",
      link: "https://data.seattle.gov/dataset/Neighborhood-Map-Atlas-Neighborhoods/h6sh-ea6k",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Housing Cost Burden by Race",
        id: "pu36-s5gv",
        parent_fxf: [],
        description:
          "Displacement risk indicator showing how many households within the specified groups are facing either housing cost burden (contributing more than 30% of monthly income toward housing costs) or <span style='font-style: italic;'>severe</span> housing cost burden (contributing more than 50% of monthly income toward housing costs).",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:13.000Z",
        createdAt: "2022-08-20T05:03:12.000Z",
        metadata_updated_at: "2022-11-18T19:01:13.000Z",
        data_updated_at: "2022-08-20T05:03:12.000Z",
        page_views: {
          page_views_last_week: 3,
          page_views_last_month: 9,
          page_views_total: 41,
          page_views_last_week_log: 2.0,
          page_views_last_month_log: 3.3219280948873626,
          page_views_total_log: 5.392317422778761,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:12.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["gis", "hdri", "ipums", "planning"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2021-05-04T01:19:07.639Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=ff5d4a5f06134130b72e9b940657f06d&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::housing-cost-burden-by-race",
          },
          {
            key: "Common-Core_Issued",
            value: "2020-04-17T23:01:16.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::housing-cost-burden-by-race",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Burden/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::housing-cost-burden-by-race.geojson",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::housing-cost-burden-by-race.csv",
            },
            title: "CSV",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::housing-cost-burden-by-race",
        },
      },
      permalink: "https://data.seattle.gov/d/pu36-s5gv",
      link: "https://data.seattle.gov/dataset/Housing-Cost-Burden-by-Race/pu36-s5gv",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "2010 Census Tract Seattle - Housing Statistics",
        id: "dc37-h568",
        parent_fxf: [],
        description:
          "<i>Data from:  </i><i><a href='http://www.seattle.gov/opcd/population-and-demographics/decennial-census#2010' target='_blank'>2010 Decennial Census</a></i><div><br /></div><div>Decennial housing data for Census Tracts in the City of Seattle.</div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-21T19:03:02.000Z",
        createdAt: "2022-08-20T05:03:57.000Z",
        metadata_updated_at: "2023-01-21T19:03:02.000Z",
        data_updated_at: "2022-08-20T05:03:57.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 4,
          page_views_total: 41,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.321928094887362,
          page_views_total_log: 5.392317422778761,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:57.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "dc2010",
          "gis",
          "planning",
          "census",
          "demographics",
          "housing",
          "tracts",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2023-01-20T23:47:17.000Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4308,47.4933,-122.2420,47.7357",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=1a86f2a1b5ba459ba115cd1c2a4b274e&sublayer=17",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-tract-seattle-housing-statistics",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2016-04-05T22:42:17.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-tract-seattle-housing-statistics",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisrevprxy.seattle.gov/arcgis/rest/services/CENSUS_EXT/CENSUS_2010_BASICS/MapServer/17",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-tract-seattle-housing-statistics.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-tract-seattle-housing-statistics.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-tract-seattle-housing-statistics.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-tract-seattle-housing-statistics.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-tract-seattle-housing-statistics",
        },
      },
      permalink: "https://data.seattle.gov/d/dc37-h568",
      link: "https://data.seattle.gov/dataset/2010-Census-Tract-Seattle-Housing-Statistics/dc37-h568",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Council Districts",
        id: "jt8g-sfiy",
        parent_fxf: [],
        description:
          "Represents the seven districts from which Seattle City Councilmembers will be elected from.",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-10-27T05:02:38.000Z",
        createdAt: "2022-10-27T05:02:38.000Z",
        metadata_updated_at: "2022-10-27T05:02:38.000Z",
        data_updated_at: "2022-10-27T05:02:38.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 8,
          page_views_total: 40,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 3.1699250014423126,
          page_views_total_log: 5.357552004618084,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-10-27T05:02:38.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "boundaries",
          "council district",
          "election",
          "gis",
          "seattle",
          "voting",
          "wa",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-06-28T19:33:36.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4308,47.4933,-122.2421,47.7357",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=f14766ecd6274702bd786b214cb916e7&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::council-districts",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2017-08-23T16:54:08.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::council-districts",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/COS_PlanningAndLandUse/MapServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::council-districts.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::council-districts.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::council-districts.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::council-districts.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::council-districts",
        },
      },
      permalink: "https://data.seattle.gov/d/jt8g-sfiy",
      link: "https://data.seattle.gov/dataset/Council-Districts/jt8g-sfiy",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "2010 Census Block Seattle - Population Statistics",
        id: "mm73-xx7y",
        parent_fxf: [],
        description:
          "<i>Data from:  </i><i><a href='http://www.seattle.gov/opcd/population-and-demographics/decennial-census#2010' target='_blank'>2010 Decennial Census</a></i><div><br /></div><div>Decennial population data for Census Blocks in the City of Seattle.</div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-21T19:03:00.000Z",
        createdAt: "2022-08-20T05:03:58.000Z",
        metadata_updated_at: "2023-01-21T19:03:00.000Z",
        data_updated_at: "2022-08-20T05:03:58.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 2,
          page_views_total: 40,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.5849625007211563,
          page_views_total_log: 5.357552004618084,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:58.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "dc2010",
          "gis",
          "planning",
          "blocks",
          "census",
          "demographics",
          "population",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2023-01-20T23:47:17.000Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4318,47.4933,-122.2423,47.7357",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=99661b09a93a4af093aec2590b815d3b&sublayer=12",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-block-seattle-population-statistics",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2016-04-05T22:46:34.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-block-seattle-population-statistics",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisrevprxy.seattle.gov/arcgis/rest/services/CENSUS_EXT/CENSUS_2010_BASICS/MapServer/12",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-block-seattle-population-statistics.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-block-seattle-population-statistics.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-block-seattle-population-statistics.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-block-seattle-population-statistics.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-block-seattle-population-statistics",
        },
      },
      permalink: "https://data.seattle.gov/d/mm73-xx7y",
      link: "https://data.seattle.gov/dataset/2010-Census-Block-Seattle-Population-Statistics/mm73-xx7y",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Urban Centers Villages and Manufacturing Industrial Centers",
        id: "fzwb-araf",
        parent_fxf: [],
        description:
          "<p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'>Growth data for housing units and employment for the growth areas, urban centers and villages, for the City of Seattle Comprehensive Plan.</p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'></p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'>Housing unit growth is reported quarterly from the city's permitting system while employment change is reported annually from the State of Washington QCEW data.</p>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:12.000Z",
        createdAt: "2022-08-20T05:04:01.000Z",
        metadata_updated_at: "2022-11-18T19:01:12.000Z",
        data_updated_at: "2022-08-20T05:04:01.000Z",
        page_views: {
          page_views_last_week: 3,
          page_views_last_month: 4,
          page_views_total: 40,
          page_views_last_week_log: 2.0,
          page_views_last_month_log: 2.321928094887362,
          page_views_total_log: 5.357552004618084,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:04:01.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "aduapp",
          "comprehensive plan",
          "employment",
          "flumapp",
          "gis",
          "housing units",
          "jobs",
          "monitoring",
          "permitexploreapp",
          "planning",
          "qrdashb",
          "sdcizoningmap",
          "ucuvmonitordashb",
          "urban centers and villages",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-11-08T21:13:13.827Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.3935,47.5057,-122.2651,47.7352",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=9267e111804b4cc7b44bc73c673e6bda&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::urban-centers-villages-and-manufacturing-industrial-centers",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-01-06T07:33:27.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::urban-centers-villages-and-manufacturing-industrial-centers",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Urban_Centers_and_Villages_Growth_Monitoring/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::urban-centers-villages-and-manufacturing-industrial-centers.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::urban-centers-villages-and-manufacturing-industrial-centers.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::urban-centers-villages-and-manufacturing-industrial-centers.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::urban-centers-villages-and-manufacturing-industrial-centers.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::urban-centers-villages-and-manufacturing-industrial-centers",
        },
      },
      permalink: "https://data.seattle.gov/d/fzwb-araf",
      link: "https://data.seattle.gov/dataset/Urban-Centers-Villages-and-Manufacturing-Industria/fzwb-araf",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Traffic Signals",
        id: "8hex-98rm",
        parent_fxf: [],
        description:
          "Traffic signal locations within the City of Seattle.  A traffic signal controls the movement of vehicles, pedestrians\nand bicyclists, minimizes conflicts, and optimizes the flow of traffic\nthroughout the street network.<br /><br />| Attribute Information: <a href='https://drive.google.com/open?id=1vzMcyC9Q40LXPI-U00PbZty7SDzUX2yx' rel='nofollow ugc' target='_blank'>Traffic_Signals_OD.pdf</a> <br /><br />| Data Confidence: Medium-High \n<br />| Data Confidence Source: <a href='https://www.seattle.gov/Documents/Departments/SDOT/About/SDOT2015SCReportFinal12-7-2015.pdf' rel='nofollow ugc' target='_blank'>2015 SDOT Asset Management, Status and Condition Report</a> <br /><br />| Update Cycle: Weekly <br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' rel='nofollow ugc' target='_blank'>DOT_IT_GIS@seattle.gov</a>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-15T19:03:21.000Z",
        createdAt: "2022-08-20T05:02:51.000Z",
        metadata_updated_at: "2023-01-15T19:03:21.000Z",
        data_updated_at: "2022-08-20T05:02:51.000Z",
        page_views: {
          page_views_last_week: 9,
          page_views_last_month: 13,
          page_views_total: 38,
          page_views_last_week_log: 3.3219280948873626,
          page_views_last_month_log: 3.8073549220576037,
          page_views_total_log: 5.285402218862249,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:51.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "018",
          "gis",
          "pedestrian",
          "sdot",
          "seattle",
          "traffic",
          "traffic signals",
          "transportation",
          "wa",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2018-04-02T00:00:00.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4060,47.5044,-122.2608,47.7354",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=ff97a6eb8ac84356beea09138c6e1ec3&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::traffic-signals",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-03-30T23:16:16.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Transportation_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::traffic-signals",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Traffic_Signals/MapServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::traffic-signals.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::traffic-signals.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::traffic-signals.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::traffic-signals.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::traffic-signals",
        },
      },
      permalink: "https://data.seattle.gov/d/8hex-98rm",
      link: "https://data.seattle.gov/dataset/Traffic-Signals/8hex-98rm",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Contours 10 ft 2016",
        id: "uksm-5d8a",
        parent_fxf: [],
        description:
          "<div style='text-align:Left;'><div>2016 10-foot contour data derived from 3ft pixel bare earth rasters for the Seattle Area that were acquired and processed 02/24/2016 -03/28/2016 by Quantum Spatial (QSI).<br /></div><p style='margin:0 0 0 0;'><span>Displays data from IMAGE.Contour_2016, SP_2016_Contour_2 with the following definition query:  Type = 2.  This layerfile displays between the scales 20,000 - 5,501.  Labels are based on the attribute Contour and do not display when zoomed out beyond 1:8,000.</span></p><p style='margin:0 0 0 0;'><span><br /></span></p><div>Because of the size of this dataset, we do not recommend trying to download it. Please use as a service. If you need a particular area extracted, please use this form to make a request:</div><div><a href='https://forms.office.com/Pages/ResponsePage.aspx?id=RR7meOtrCUCPmTWdi1T0G9zIhm_E9thFiIFY5ws9oKtUQUlNU0hTQ0pGQlhOUDNSOExZQlhXM01INi4u' rel='nofollow ugc' target='_blank'>City of Seattle GIS Data Request</a><br /></div><div><br /></div><p style='margin:0 0 0 0;'><span><br /></span></p></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:44.000Z",
        createdAt: "2022-08-20T05:03:44.000Z",
        metadata_updated_at: "2022-08-20T05:03:44.000Z",
        data_updated_at: "2022-08-20T05:03:44.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 4,
          page_views_total: 37,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.321928094887362,
          page_views_total_log: 5.247927513443585,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:44.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "contours",
          "elevation",
          "environmental",
          "gis",
          "land base",
          "lidar",
          "seattle",
          "topography",
          "washington",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:02.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4292,47.4423,-122.2248,47.7802",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=926821b9faee428181059392a9519a98&sublayer=1",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::contours-10-ft-2016",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2019-01-14T17:07:13.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::contours-10-ft-2016",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/COS_Contours_2016/MapServer/1",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::contours-10-ft-2016.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::contours-10-ft-2016.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::contours-10-ft-2016.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::contours-10-ft-2016.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::contours-10-ft-2016",
        },
      },
      permalink: "https://data.seattle.gov/d/uksm-5d8a",
      link: "https://data.seattle.gov/dataset/Contours-10-ft-2016/uksm-5d8a",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Transit Classification",
        id: "aavr-miwt",
        parent_fxf: [],
        description:
          "Transit classifications of City streets data is sourced from the Hansen Asset Management System.  <br /><br />| Attribute Information: <a href='https://drive.google.com/file/d/1Bc9yaJ8ZEWfQ0OzWtrPr66ZlzDwIPhjX/view?usp=sharing' target='_blank'>Transit_Classification_OD.pdf </a><br /><br />| Update Cycle: As Needed <br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' target='_blank'>DOT_IT_GIS@seattle.gov</a>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-09-03T05:05:30.000Z",
        createdAt: "2022-09-03T05:05:30.000Z",
        metadata_updated_at: "2022-09-03T05:05:30.000Z",
        data_updated_at: "2022-09-03T05:05:30.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 2,
          page_views_total: 37,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.5849625007211563,
          page_views_total_log: 5.247927513443585,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-09-03T05:05:30.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "018",
          "classification",
          "gis",
          "pedestrian",
          "sdot",
          "seattle",
          "signal",
          "transit",
          "transportation",
          "wa",
          "wsdot",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4253,47.4832,-122.2306,47.7358",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=c098f328fe6b47e68829408910d0dd63&sublayer=4",
          },
          { key: "Common-Core_Publisher", value: "Seattle IT" },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::transit-classification",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-04-02T19:22:21.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Transportation_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::transit-classification",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Transit/MapServer/4",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::transit-classification.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::transit-classification.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::transit-classification.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::transit-classification.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
          {
            urls: {
              unknown:
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Transit/MapServer/4",
            },
          },
          {
            urls: {
              PDF: "https://www.seattle.gov/Documents/Departments/SDOT/GIS/Transit_Classification_OD.pdf",
            },
            description:
              "PDF metadata with General Information, Contact information, and Attribute Information(name, data type and   length, description)",
            title: "Attribute Information\\Metadata",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::transit-classification",
        },
      },
      permalink: "https://data.seattle.gov/d/aavr-miwt",
      link: "https://data.seattle.gov/dataset/Transit-Classification/aavr-miwt",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Paid Area Curb Spaces",
        id: "ihwt-d3pk",
        parent_fxf: [],
        description:
          "<div style='text-align:left;'><p>Describes the type of space along a blockface.  Location: Downtown Seattle, First Hill, Capitol Hill and South Lake Union  <br /><br />| Attribute Information: <a href='https://drive.google.com/open?id=1rTX02Gdw6SeE9tzS0o6x_rr3Ccu7Vvyf' target='_blank' rel='nofollow ugc noopener noreferrer'>Curbspaces_OD.pdf</a> <br /><br />| Update Cycle: Weekly <br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' target='_blank' rel='nofollow ugc noopener noreferrer'>DOT_IT_GIS@seattle.gov</a><br /></p></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-18T19:02:31.000Z",
        createdAt: "2022-08-20T05:03:38.000Z",
        metadata_updated_at: "2023-01-18T19:02:31.000Z",
        data_updated_at: "2022-08-20T05:03:38.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 12,
          page_views_total: 34,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 3.700439718141092,
          page_views_total_log: 5.129283016944966,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:38.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "018",
          "blockface",
          "block id",
          "curbs",
          "gis",
          "parking",
          "peak hour",
          "rpz",
          "sdot",
          "streets",
          "transportation",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2023-01-17T21:27:53.313Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size:16px;'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.3962,47.5556,-122.2870,47.6817",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=69af206729884701b32f5a810a1c6405&sublayer=5",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::paid-area-curb-spaces--1",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-07-06T16:47:02.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "City_Seattle_GIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::paid-area-curb-spaces--1",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Paid_Area_Curb_Spaces/FeatureServer/5",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::paid-area-curb-spaces--1.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::paid-area-curb-spaces--1.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::paid-area-curb-spaces--1.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::paid-area-curb-spaces--1.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::paid-area-curb-spaces--1",
        },
      },
      permalink: "https://data.seattle.gov/d/ihwt-d3pk",
      link: "https://data.seattle.gov/dataset/Paid-Area-Curb-Spaces/ihwt-d3pk",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Urban Creek Watersheds",
        id: "9f5t-duyt",
        parent_fxf: [],
        description:
          " <span style='font-family: Verdana, Helvetica, sans-serif; font-size: 12px; line-height: 18px; background-color: rgb(255, 255, 255);'>A polygon feature class showing urban creek watersheds in King County. It also provides information on its alternative name, area, and absolute location. </span>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-09-04T05:05:39.000Z",
        createdAt: "2022-09-04T05:05:39.000Z",
        metadata_updated_at: "2022-09-04T05:05:39.000Z",
        data_updated_at: "2022-09-04T05:05:39.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 1,
          page_views_total: 34,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.0,
          page_views_total_log: 5.129283016944966,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-09-04T05:05:39.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "cosgis",
          "creek",
          "environment",
          "environmental",
          "seattle",
          "seattlecitygis",
          "spu",
          "urban creek watersheds",
          "wa",
          "watersheds",
          "wildlife",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4208,47.4859,-122.2430,47.7694",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=04bdee758fd6462da4e2413eb9404e8e&sublayer=1",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::urban-creek-watersheds",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2013-04-25T18:22:38.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::urban-creek-watersheds",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/COS_OutdoorsMisc/MapServer/1",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::urban-creek-watersheds.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::urban-creek-watersheds.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::urban-creek-watersheds.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::urban-creek-watersheds.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::urban-creek-watersheds",
        },
      },
      permalink: "https://data.seattle.gov/d/9f5t-duyt",
      link: "https://data.seattle.gov/dataset/Urban-Creek-Watersheds/9f5t-duyt",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Mandatory Housing Affordability (MHA) Zones",
        id: "iiu7-uxf2",
        parent_fxf: [],
        description:
          "<div><span style='font-size:16px;'>Note:  This map is not an official zoning map.  For precise zoning information, please call or visit the Seattle Municipal Tower, </span><a href='https://www.seattle.gov/sdci/about-us' rel='nofollow ugc' style='font-size:12pt;' target='_blank'>Seattle Department of Construction and Inspections</a><br /></div><div><br /></div>Zoning areas where Mandatory Housing Affordability requirements may apply.<div><br /></div><div>Mandatory Housing Affordability requires new development to contribute to affordable housing by including affordable housing in the development or making a payment to the City’s Office of Housing to support affordable housing. The amount of the MHA contribution varies based on a property’s location and other factors specified in Seattle Municipal Code Chapters 23.58B and 23.58C.  </div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:19.000Z",
        createdAt: "2022-08-20T05:03:27.000Z",
        metadata_updated_at: "2022-11-18T19:01:19.000Z",
        data_updated_at: "2022-08-20T05:03:27.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 6,
          page_views_total: 33,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.807354922057604,
          page_views_total_log: 5.08746284125034,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:27.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "gis",
          "land use",
          "mha",
          "planning",
          "sdcizoningmap",
          "zoning",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-09-20T21:57:03.856Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4489,47.4884,-122.2265,47.7429",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=cce94a62698640b59031ae35292acfe5&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::mandatory-housing-affordability-mha-zones",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-01-05T15:23:12.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::mandatory-housing-affordability-mha-zones",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Mandatory_Housing_Affordability_Zoning/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::mandatory-housing-affordability-mha-zones.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::mandatory-housing-affordability-mha-zones.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::mandatory-housing-affordability-mha-zones.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::mandatory-housing-affordability-mha-zones.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::mandatory-housing-affordability-mha-zones",
        },
      },
      permalink: "https://data.seattle.gov/d/iiu7-uxf2",
      link: "https://data.seattle.gov/dataset/Mandatory-Housing-Affordability-MHA-Zones/iiu7-uxf2",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Renter Households by Income Category",
        id: "rsaq-j538",
        parent_fxf: [],
        description:
          "Displacement risk indicator showing the distribution of renter households and renter units between different income brackets, covering the entire city from 2006 to the most recent year of data available.",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:16.000Z",
        createdAt: "2022-08-20T05:03:10.000Z",
        metadata_updated_at: "2022-11-18T19:01:16.000Z",
        data_updated_at: "2022-08-20T05:03:10.000Z",
        page_views: {
          page_views_last_week: 4,
          page_views_last_month: 4,
          page_views_total: 32,
          page_views_last_week_log: 2.321928094887362,
          page_views_last_month_log: 2.321928094887362,
          page_views_total_log: 5.044394119358453,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:10.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["gis", "hdri", "ipums", "planning"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2021-05-04T01:22:03.050Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=2dcc5fb5152b4e60a7a41be5ef0e4d54&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::renter-households-by-income-category",
          },
          {
            key: "Common-Core_Issued",
            value: "2020-05-11T17:13:54.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::renter-households-by-income-category",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Market_Demand/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::renter-households-by-income-category.geojson",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::renter-households-by-income-category.csv",
            },
            title: "CSV",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::renter-households-by-income-category",
        },
      },
      permalink: "https://data.seattle.gov/d/rsaq-j538",
      link: "https://data.seattle.gov/dataset/Renter-Households-by-Income-Category/rsaq-j538",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Snow Ice Routes",
        id: "jnqg-k4hy",
        parent_fxf: [],
        description:
          "SDOT Snow and Ice Level of Service Treatment and Routes, based on 2009 revised Winter Storm Response Plan. Level of Service is a hierarchy of snow and ice response in achieving bare and wet pavement road condition.  <br /><br />| Attribute Information: <a href='https://www.seattle.gov/Documents/Departments/SDOT/GIS/Snow_Ice_Routes_OD.pdf' target='_blank'>\nhttps://www.seattle.gov/Documents/Departments/SDOT/GIS/Snow_Ice_Routes_OD.pdf</a> <br /><br />| Update Cycle: As Needed (Last updated 11-27-2019)<br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' target='_blank'>DOT_IT_GIS@seattle.gov</a>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:56.000Z",
        createdAt: "2022-08-20T05:03:56.000Z",
        metadata_updated_at: "2022-08-20T05:03:56.000Z",
        data_updated_at: "2022-08-20T05:03:56.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 1,
          page_views_total: 31,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.0,
          page_views_total_log: 5.0,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:56.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "018",
          "anti-icing",
          "de-icing",
          "gis",
          "ice",
          "sdot",
          "seattle",
          "snow",
          "snow routes",
          "street",
          "transportation",
          "wa",
          "winter storm",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4110,47.4940,-122.2433,47.7357",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=9a2829cd9a464fefa2435309b827c89c&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::snow-ice-routes",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-06-26T23:53:05.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Transportation_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::snow-ice-routes",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Maintenance/MapServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::snow-ice-routes.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::snow-ice-routes.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::snow-ice-routes.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::snow-ice-routes.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::snow-ice-routes",
        },
      },
      permalink: "https://data.seattle.gov/d/jnqg-k4hy",
      link: "https://data.seattle.gov/dataset/Snow-Ice-Routes/jnqg-k4hy",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "2010 Census Block Seattle - Housing Statistics",
        id: "f3ig-usfb",
        parent_fxf: [],
        description:
          "<i>Data from:  </i><i><a href='http://www.seattle.gov/opcd/population-and-demographics/decennial-census#2010' target='_blank'>2010 Decennial Census</a></i><div><br /></div><div>Decennial housing data for Census Blocks in the City of Seattle.</div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-21T19:03:01.000Z",
        createdAt: "2022-08-20T05:03:59.000Z",
        metadata_updated_at: "2023-01-21T19:03:01.000Z",
        data_updated_at: "2022-08-20T05:03:59.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 4,
          page_views_total: 31,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 2.321928094887362,
          page_views_total_log: 5.0,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:59.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "blocks",
          "census",
          "dc2010",
          "demographics",
          "gis",
          "housing",
          "planning",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2023-01-20T23:47:17.000Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4318,47.4933,-122.2423,47.7357",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=15e8917f3fe243ce8dc1c895af2349d3&sublayer=14",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-block-seattle-housing-statistics",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2016-04-05T22:47:02.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-block-seattle-housing-statistics",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisrevprxy.seattle.gov/arcgis/rest/services/CENSUS_EXT/CENSUS_2010_BASICS/MapServer/14",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-block-seattle-housing-statistics.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-block-seattle-housing-statistics.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-block-seattle-housing-statistics.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-block-seattle-housing-statistics.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-block-seattle-housing-statistics",
        },
      },
      permalink: "https://data.seattle.gov/d/f3ig-usfb",
      link: "https://data.seattle.gov/dataset/2010-Census-Block-Seattle-Housing-Statistics/f3ig-usfb",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Intersections",
        id: "gszp-tgpz",
        parent_fxf: [],
        description:
          "Location of street intersections within the City of Seattle.<br /><br />| Attribute Information: <a href='https://www.seattle.gov/Documents/Departments/SDOT/GIS/Intersections_OD.pdf' target='_blank' rel='nofollow ugc noopener noreferrer'>https://www.seattle.gov/Documents/Departments/SDOT/GIS/Intersections_OD.pdf</a> <br /><br />| Data Update Cycle: Weekly <br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' target='_blank' rel='nofollow ugc noopener noreferrer'>DOT_IT_GIS@seattle.gov</a>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-18T19:02:29.000Z",
        createdAt: "2022-08-20T05:03:36.000Z",
        metadata_updated_at: "2023-01-18T19:02:29.000Z",
        data_updated_at: "2022-08-20T05:03:36.000Z",
        page_views: {
          page_views_last_week: 4,
          page_views_last_month: 6,
          page_views_total: 31,
          page_views_last_week_log: 2.321928094887362,
          page_views_last_month_log: 2.807354922057604,
          page_views_total_log: 5.0,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:36.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["gis", "intersection", "sdot", "seattle", "streets"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2023-01-17T21:21:55.545Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<div style='font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size:16px;'><div style='margin-bottom:3rem;'><div><div style='max-width:100%; display:inherit;'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</div><div><br /></div></div></div></div>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4253,47.4835,-122.2306,47.7358",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=a1036caba8ee4743b15d291e17220fb5&sublayer=11",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::intersections-3",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-07-14T22:44:09.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "City_Seattle_GIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::intersections-3",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Intersections/FeatureServer/11",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::intersections-3.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::intersections-3.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::intersections-3.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::intersections-3.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::intersections-3",
        },
      },
      permalink: "https://data.seattle.gov/d/gszp-tgpz",
      link: "https://data.seattle.gov/dataset/Intersections/gszp-tgpz",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "City Growth Stats",
        id: "xbjc-ipmn",
        parent_fxf: [],
        description:
          "<font size='3'>Tabular data that powers basic monitoring dashboards for the change in population, housing and jobs for the City of Seattle since 2000 through the most recently available data.</font><br /><div><font size='3'><br /></font></div><div><font size='3'>Sources include: </font></div><div><font size='3'><span style='box-sizing:border-box; font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box; color:rgb(0, 0, 0);'><span style='box-sizing:border-box; font-family:&quot;Avenir Light&quot;, Verdana, Geneva, sans-serif;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box; font-family:Arial;'><font style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box; color:rgb(34, 34, 34);'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><font style='box-sizing:border-box;'>For population and housing the April 1 official population estimates are produced by the <a href='https://www.ofm.wa.gov/washington-data-research/population-demographics/population-estimates/april-1-official-population-estimates' style='box-sizing:border-box; text-decoration-line:none; color:rgb(0, 121, 193);' rel='nofollow ugc'>Washington State Office of Financial Management</a> (OFM).  OFM population estimates</font></span></span></span></span></font></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span style='box-sizing:border-box; color:rgb(26, 26, 26);'><span style='box-sizing:border-box; font-family:&quot;Avenir Light&quot;, Verdana, Geneva, sans-serif;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box; font-family:Arial;'><font style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><span style='box-sizing:border-box;'><font style='box-sizing:border-box;'> </font></span></span></span></font></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span style='box-sizing:border-box; font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; color:rgb(26, 26, 26);'>are cited in numerous statutes using population as criteria for fund allocations, program eligibility, or program operations, and as criteria for determining county participation under the Growth Management Act.</span><br /></font></div><div><span style='box-sizing:border-box; font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; color:rgb(26, 26, 26);'><font size='3'><br /></font></span></div><div><div style='box-sizing:border-box; font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; margin:0px; padding:0px;'><span style=",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:06.000Z",
        createdAt: "2022-11-18T19:01:06.000Z",
        metadata_updated_at: "2022-11-18T19:01:06.000Z",
        data_updated_at: "2022-11-18T19:01:06.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 7,
          page_views_total: 30,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 3.0,
          page_views_total_log: 4.954196310386876,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-11-18T19:01:06.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "employment",
          "gis",
          "housing",
          "jobs",
          "monitoring",
          "planning",
          "population",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-07-07T18:52:15.364Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=f305a849ce4a4c3b98e98d3facb81c83&sublayer=2",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::city-growth-stats-1",
          },
          {
            key: "Common-Core_Issued",
            value: "2022-03-14T21:56:52.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::city-growth-stats-1",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/annual_totals/FeatureServer/2",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::city-growth-stats-1.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::city-growth-stats-1.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::city-growth-stats-1",
        },
      },
      permalink: "https://data.seattle.gov/d/xbjc-ipmn",
      link: "https://data.seattle.gov/dataset/City-Growth-Stats/xbjc-ipmn",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Seattle City Light Poles",
        id: "qjz9-t4he",
        parent_fxf: [],
        description:
          "<div style='text-align:Left;'><div><div><p><span>This layer file symbolizes the Seattle City Light pole location and indicates the presence of streetlights. The data is to be used for planning purposes only.</span></p></div></div></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:02:58.000Z",
        createdAt: "2022-08-20T05:02:58.000Z",
        metadata_updated_at: "2022-08-20T05:02:58.000Z",
        data_updated_at: "2022-08-20T05:02:58.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 10,
          page_views_total: 30,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 3.4594316186372978,
          page_views_total_log: 4.954196310386876,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:58.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "electricity",
          "light",
          "light poles",
          "poles",
          "scl",
          "seattle city light",
          "utility",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:02.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4175,47.4447,-122.2262,47.7800",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=4ab2dc0e500f43f6a9edca0d45ec97c1&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-city-light-poles-1",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-01-30T16:57:44.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-city-light-poles-1",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/SCL_Poles_Lines/MapServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-city-light-poles-1.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-city-light-poles-1.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-city-light-poles-1.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-city-light-poles-1.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-city-light-poles-1",
        },
      },
      permalink: "https://data.seattle.gov/d/qjz9-t4he",
      link: "https://data.seattle.gov/dataset/Seattle-City-Light-Poles/qjz9-t4he",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Seattle Public Schools Sites 2022-2023",
        id: "bd7c-x34g",
        parent_fxf: [],
        description:
          "Seattle Public School locations. Includes all levels of schooling for the 2022-2023 school year.<div><br /><div><a href='https://protect2.fireeye.com/v1/url?k=31323334-50bba2bf-31321b84-4544474f5631-d1a72587f77a54d6&amp;q=1&amp;e=0a30ecb3-4eb6-44e1-a3c7-a8853ddc5f5c&amp;u=https%3A%2F%2Fwww.seattleschools.org%2Fdepartments%2Fenrollment-planning%2F' rel='nofollow ugc'>https://www.seattleschools.org/departments/enrollment-planning/</a><br /></div><div><p>For questions, please contact <a href='mailto:enrollmentplanning@seattleschools.org' rel='nofollow ugc'>enrollmentplanning@seattleschools.org</a></p><br /></div></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:41.000Z",
        createdAt: "2022-08-20T05:03:41.000Z",
        metadata_updated_at: "2022-08-20T05:03:41.000Z",
        data_updated_at: "2022-08-20T05:03:41.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 5,
          page_views_total: 30,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.584962500721156,
          page_views_total_log: 4.954196310386876,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:41.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "2022-2023",
          "gis",
          "public school",
          "schools",
          "seattle",
          "seattle public schools",
          "sps",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-07-07T19:46:12.842Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size:16px;'>This data is edited and maintained by Seattle Public Schools. Any changes are at their discretion.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4054,47.4970,-122.2644,47.7266",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=303f19089e104190a05bb477c71bd972&sublayer=5",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-public-schools-sites-2022-2023",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-07-07T21:19:30.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "City_Seattle_GIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-public-schools-sites-2022-2023",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services2.arcgis.com/I7NQBinfvOmxQbXs/arcgis/rest/services/Seattle_Public_Schools_sites/FeatureServer/5",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-public-schools-sites-2022-2023.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-public-schools-sites-2022-2023.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-public-schools-sites-2022-2023.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-public-schools-sites-2022-2023.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-public-schools-sites-2022-2023",
        },
      },
      permalink: "https://data.seattle.gov/d/bd7c-x34g",
      link: "https://data.seattle.gov/dataset/Seattle-Public-Schools-Sites-2022-2023/bd7c-x34g",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Affordable and Available Rental Units per 100 Households",
        id: "5qw8-y7bi",
        parent_fxf: [],
        description:
          "Displacement risk indicator showing the number of rental units that are affordable and &quot;available&quot; (not occupied by a higher-income household) for every 100 renter households below a given income level.",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:22.000Z",
        createdAt: "2022-08-20T05:03:11.000Z",
        metadata_updated_at: "2022-11-18T19:01:22.000Z",
        data_updated_at: "2022-08-20T05:03:11.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 3,
          page_views_total: 29,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.0,
          page_views_total_log: 4.906890595608519,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:11.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["gis", "hdri", "ipums", "planning"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2021-05-04T01:20:37.426Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=1294596678cb496e8bb83405995898a6&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::affordable-and-available-rental-units-per-100-households",
          },
          {
            key: "Common-Core_Issued",
            value: "2020-04-18T00:15:47.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::affordable-and-available-rental-units-per-100-households",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Affordability/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::affordable-and-available-rental-units-per-100-households.geojson",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::affordable-and-available-rental-units-per-100-households.csv",
            },
            title: "CSV",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::affordable-and-available-rental-units-per-100-households",
        },
      },
      permalink: "https://data.seattle.gov/d/5qw8-y7bi",
      link: "https://data.seattle.gov/dataset/Affordable-and-Available-Rental-Units-per-100-Hous/5qw8-y7bi",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Flood Zones ECA",
        id: "ahhb-nhj6",
        parent_fxf: [],
        description:
          "<div><span><div>This layer is used by the City as an aid to evaluate construction sites for the presence of flood prone areas pertinent to Environmentally Critical Areas regulations. <br /></div><div><span>Areas that would likely be covered with or carry water as a result \nof a one hundred (100) year flood event, or that would have a one \npercent (1%) or greater chance of being covered with or of carrying \nwater in any givenyear based on current circumstances or maximum \ndevelopment permitted under existing zoning. See code section number \n25.09.020 of the Seattle Municipal Code for a more complete definition \nof environmentally critical areas: </span><span><span>https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT25ENPRHIPR_CH25.09REENCRAR</span></span></div></span></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:47.000Z",
        createdAt: "2022-08-20T05:03:47.000Z",
        metadata_updated_at: "2022-08-20T05:03:47.000Z",
        data_updated_at: "2022-08-20T05:03:47.000Z",
        page_views: {
          page_views_last_week: 4,
          page_views_last_month: 6,
          page_views_total: 29,
          page_views_last_week_log: 2.321928094887362,
          page_views_last_month_log: 2.807354922057604,
          page_views_total_log: 4.906890595608519,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:47.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "cosgis",
          "critical area",
          "department of planning and development",
          "eca",
          "environment",
          "firm",
          "flood",
          "seattle",
          "seattlecitygis",
          "wa",
          "wm_dpd_eca_flood",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4344,47.4927,-122.2729,47.7356",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=0bd37dc7337343cba3fbd34bcae58184&sublayer=6",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::flood-zones-eca",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2012-06-29T19:49:53.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::flood-zones-eca",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/ECA_Layers/MapServer/6",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::flood-zones-eca.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::flood-zones-eca.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::flood-zones-eca.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::flood-zones-eca.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::flood-zones-eca",
        },
      },
      permalink: "https://data.seattle.gov/d/ahhb-nhj6",
      link: "https://data.seattle.gov/dataset/Flood-Zones-ECA/ahhb-nhj6",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Wildlife Corridors ECA",
        id: "edk9-eayt",
        parent_fxf: [],
        description:
          "<div><span><div>A polygon feature class showing Wildlife Corridors in the City of Seattle. Used to implement and regulate the City of Seattle's Environmentally Critical Areas policies. <br /></div><div><p style='margin:0 0 0 0;'><span><span>Corridors that connect priority \nhabitats and species areas or habitat areas for wildlife species of \nlocal importance that meet criteria established by the Washington State \nDepartment of Fish and Wildlife.</span></span></p><p><span><span>See \ncode section number 25.09.020 of the Seattle Municipal Code for a more \ncomplete definition of environmentally critical areas: \nhttps://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT25ENPRHIPR_CH25.09REENCRAR</span></span></p></div></span></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:53.000Z",
        createdAt: "2022-08-20T05:03:53.000Z",
        metadata_updated_at: "2022-08-20T05:03:53.000Z",
        data_updated_at: "2022-08-20T05:03:53.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 2,
          page_views_total: 29,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.5849625007211563,
          page_views_total_log: 4.906890595608519,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:53.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "corridors",
          "cosgis",
          "department of planning and development",
          "eca",
          "environment",
          "environmental critical areas",
          "seattle",
          "seattlecitygis",
          "urban forestry",
          "wa",
          "wildlife",
          "wm_dpd_eca_wildlife",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4363,47.4988,-122.2503,47.7352",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=839576f4db9b43eb8702439751b3e8fc&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::wildlife-corridors-eca",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2012-06-29T23:20:43.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::wildlife-corridors-eca",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/ECA_Layers/MapServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::wildlife-corridors-eca.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::wildlife-corridors-eca.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::wildlife-corridors-eca.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::wildlife-corridors-eca.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::wildlife-corridors-eca",
        },
      },
      permalink: "https://data.seattle.gov/d/edk9-eayt",
      link: "https://data.seattle.gov/dataset/Wildlife-Corridors-ECA/edk9-eayt",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "PublicSpaceSeattle",
        id: "u63n-89qe",
        parent_fxf: [],
        description:
          "<p><font size='3'>The PublicSpaceSeattle sublayer is a comprehensive inventory of all outdoor, publicly-accessible spaces in Seattle. It is complemented by a separate entrance point sublayer, PublicSpaceSeattle_EntryPts, for network analysis purposes.  PrivateOpenSpace contains parks and open spaces that aren't publicly-accessible. Current as of Jan 1, 2022. <br /></font></p><p><font size='3'>Webmap of the data is available </font><a href='https://seattlecitygis.maps.arcgis.com/apps/mapviewer/index.html?webmap=25b07ac12bee4943ab034f846adf89cb' target='_blank' rel='nofollow ugc noopener noreferrer'>here</a><font size='3'>.</font></p><p><font size='3'>PublicSpaceSeattle is a comprehensive inventory of all outdoor public spaces in Seattle. It includes all types of publicly-accessible outdoor spaces (public parks, privately owned plazas, cemeteries, greenbelts, etc) across all forms of ownership (City of Seattle, the Port of Seattle, King County, universities, etc).</font></p><p><font size='3'>This dataset was developed for use in planning and analysis applications, and is oriented toward user experience. Therefore, areas under different forms of City ownership forming a connected open space have sometimes been merged, with all owners listed in the feature attributes (such as a greenbelt owned by both SPR and SDOT).</font></p><p><font size='3'>The dataset includes all outdoor publicly-accessible space (cemeteries, parks, schoolyards, etc). Buildings and parking lots are included in feature boundaries if the location is primarily dedicated toward environmental or outdoor recreational uses (such as a park). Buildings and parking lots are not included in locations primarily dedicated toward other uses (such as libraries and schoolyards). Waterbodies are included within feature boundaries only if they are surrounded by land-based public space.</font></p><p><font size='3'>PublicSpaceSeattle_EntryPts contains entrance points for the polygon features in PublicSpaceSeattle.  Identical feature data is attached to each polygon and corresponding entrance point.</font></p><p><span style='text-decoration-line:underline;'><font size='3'>Field definitions</font></span></p><p><font size='3'><span style='font-weight:bold;'>NAME: </span>name of public space</font></p><p><font size='3'><span style='font-weight:bold;'>TYPE: </span>public space type (i.e.. park, greenbelt, cemetery, golf course, plaza, etc)</font></p><p><font size='3'><span style='font-weight:bold;'>OWNER: </span>initials of owner (see OWNER NAME LONG for full name)</font></p><p><font size='3'><span style='font-weight:bold;'>GREENSPACE: </span>feature is or contains an occupiable lawn area</font></p><p><font size='3'><span style='font-weight:bold;'>PLAYGROUND: </span>feature is or contains a playground, play area, or play feature</font></p><p><font size='3'><span style='font-weight:bold;'>SPORTS: </span>feature is or contains a sports facility of any type, including a skatepark, basketball hoop, football field, etc</font></p><p><font size='3'><span style='font-weight:bold;'>NATURAL: </span>feature is or contains a natural area such as a forest or wetland</font></p><p><font size='3'><span style='font-weight:bold;'>TRAIL: </span>feature is or contains a trail network long enough to be used for walking, jogging, running, or biking (such as a loop trail within a large park, a segment of a larger trail network, etc)</font></p><p><font size='3'><span style='font-weight:bold;'>AGRICULTURE: </span>feature is used for or contains an area for agricultural activity, such as a community garden or p-patch</font></p><p><font size='3'><span style='font-weight:bold;'>RESTROOM: </span>feature contains a public restroom</font></p><p><font size='3'><span style='font-weight:bold;'>WATER: </span>feature contains or is in close proximity to a waterbody, stream, or human-made water feature. Does not indicate physical access.</font></p><p><font size='3'><span style='font-weight:bold;'>PUBLIC ACCESS: </span>y",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:17.000Z",
        createdAt: "2022-08-20T05:03:20.000Z",
        metadata_updated_at: "2022-11-18T19:01:17.000Z",
        data_updated_at: "2022-08-20T05:03:20.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 7,
          page_views_total: 28,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 3.0,
          page_views_total_log: 4.857980995127573,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:20.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "entrances",
          "gis",
          "green space",
          "open space",
          "parks",
          "public space",
          "seattle",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-08T16:59:17.896Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4309,47.4965,-122.2471,47.7356",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=4eb72c46b30c4bdbb101965ac137d7c3&sublayer=1",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::publicspaceseattle",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-02-13T13:26:08.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::publicspaceseattle",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Public_and_Open_Spaces_in_Seattle_WFL1/FeatureServer/1",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::publicspaceseattle.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::publicspaceseattle.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::publicspaceseattle.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::publicspaceseattle.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::publicspaceseattle",
        },
      },
      permalink: "https://data.seattle.gov/d/u63n-89qe",
      link: "https://data.seattle.gov/dataset/PublicSpaceSeattle/u63n-89qe",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "City of Seattle Council Districts (2013) - Redistricting Data 2010-2020",
        id: "htmf-u9ha",
        parent_fxf: [],
        description:
          "City of Seattle Council Districts with selected Census Bureau 2010 and 2020 P.L. 94-171 redistricting data.<div><br /></div><div>For more information about the P.L. 94-171 redistricting data, please visit the <a href='https://www.census.gov/programs-surveys/decennial-census/about/rdo/summary-files.html' rel='nofollow ugc' target='_blank'>U.S. Census Bureau</a>.  For a detailed description of the data included please see the <a href='https://www2.census.gov/programs-surveys/decennial/2020/technical-documentation/complete-tech-docs/summary-file/2020Census_PL94_171Redistricting_StatesTechDoc_English.pdf' rel='nofollow ugc' target='_blank'>2020 Census State Redistricting Data Summary File</a>. <br /></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-12-14T19:11:02.000Z",
        createdAt: "2022-08-20T05:02:26.000Z",
        metadata_updated_at: "2022-12-14T19:11:02.000Z",
        data_updated_at: "2022-08-20T05:02:26.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 3,
          page_views_total: 28,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 2.0,
          page_views_total_log: 4.857980995127573,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:26.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "census 2020",
          "council districts",
          "gis",
          "planning",
          "redistricting",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-02-01T19:27:57.950Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4360,47.4924,-122.2281,47.7359",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=3fc6669fc05f473894dda3e6c7c36943&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::city-of-seattle-council-districts-2013-redistricting-data-2010-2020",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2021-07-28T21:55:18.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::city-of-seattle-council-districts-2013-redistricting-data-2010-2020",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/council_districts_10_20_PL/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::city-of-seattle-council-districts-2013-redistricting-data-2010-2020.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::city-of-seattle-council-districts-2013-redistricting-data-2010-2020.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::city-of-seattle-council-districts-2013-redistricting-data-2010-2020.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::city-of-seattle-council-districts-2013-redistricting-data-2010-2020.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::city-of-seattle-council-districts-2013-redistricting-data-2010-2020",
        },
      },
      permalink: "https://data.seattle.gov/d/htmf-u9ha",
      link: "https://data.seattle.gov/dataset/City-of-Seattle-Council-Districts-2013-Redistricti/htmf-u9ha",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "2010 Census Block Seattle - Household Statistics",
        id: "5494-9ubt",
        parent_fxf: [],
        description:
          "<i>Data from:  </i><i><a href='http://www.seattle.gov/opcd/population-and-demographics/decennial-census#2010' target='_blank'>2010 Decennial Census</a></i><div><br /></div><div>Decennial household data for Census Blocks in the City of Seattle.</div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-21T19:03:00.000Z",
        createdAt: "2022-08-20T05:03:59.000Z",
        metadata_updated_at: "2023-01-21T19:03:00.000Z",
        data_updated_at: "2022-08-20T05:03:59.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 2,
          page_views_total: 27,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.5849625007211563,
          page_views_total_log: 4.807354922057604,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:59.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "dc2010",
          "gis",
          "planning",
          "blocks",
          "census",
          "demographics",
          "households",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2023-01-20T23:47:17.000Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4318,47.4933,-122.2423,47.7357",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=e0bfacb2b3e846f399d5612e72585c3d&sublayer=13",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-block-seattle-household-statistics",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2016-04-05T22:47:25.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-block-seattle-household-statistics",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisrevprxy.seattle.gov/arcgis/rest/services/CENSUS_EXT/CENSUS_2010_BASICS/MapServer/13",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-block-seattle-household-statistics.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-block-seattle-household-statistics.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-block-seattle-household-statistics.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-block-seattle-household-statistics.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-block-seattle-household-statistics",
        },
      },
      permalink: "https://data.seattle.gov/d/5494-9ubt",
      link: "https://data.seattle.gov/dataset/2010-Census-Block-Seattle-Household-Statistics/5494-9ubt",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Bike Racks",
        id: "v54d-dn5p",
        parent_fxf: [],
        description:
          "Displays the location of bike racks that are owned and maintained by SDOT.  <br /><br />| Attribute Information: <a href='https://www.seattle.gov/Documents/Departments/SDOT/GIS/Bike_Racks_OD.pdf' rel='nofollow ugc' target='_blank'>https://www.seattle.gov/Documents/Departments/SDOT/GIS/Bike_Racks_OD.pdf</a> <br /><br />| Data Confidence: High <br />| Data Confidence Source: <a href='https://www.seattle.gov/Documents/Departments/SDOT/About/SDOT2015SCReportFinal12-7-2015.pdf' rel='nofollow ugc' target='_blank'>2015 SDOT Asset Management, Status and Condition Report</a> <br /><br />| Update Cycle: Weekly <br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' rel='nofollow ugc' target='_blank'>DOT_IT_GIS@seattle.gov</a>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:02:42.000Z",
        createdAt: "2022-08-20T05:02:42.000Z",
        metadata_updated_at: "2022-08-20T05:02:42.000Z",
        data_updated_at: "2022-08-20T05:02:42.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 3,
          page_views_total: 26,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 2.0,
          page_views_total_log: 4.754887502163469,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:42.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "asset",
          "bicycle",
          "bike",
          "bike racks",
          "gis",
          "sdot",
          "seattle",
          "transportation",
          "wa",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4159,47.4967,-122.2543,47.7334",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=f86c29ce743e47819e588c3d643ceb63&sublayer=0",
          },
          { key: "Common-Core_Publisher", value: "Seattle IT" },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::bike-racks",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-03-30T19:40:29.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Transportation_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::bike-racks",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Bikes/MapServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::bike-racks.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::bike-racks.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::bike-racks.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::bike-racks.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
          {
            urls: {
              unknown:
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Bikes/MapServer/0",
            },
          },
          {
            urls: {
              PDF: "https://www.seattle.gov/Documents/Departments/SDOT/GIS/Bike_Racks_OD.pdf",
            },
            description:
              "PDF metadata with General Information, Contact information, and Attribute Information(name, data type and   length, description)",
            title: "Attribute Information\\Metadata",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::bike-racks",
        },
      },
      permalink: "https://data.seattle.gov/d/v54d-dn5p",
      link: "https://data.seattle.gov/dataset/Bike-Racks/v54d-dn5p",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Zoned Development Capacity by Development Site Current",
        id: "6qbu-53f8",
        parent_fxf: [],
        description:
          "<div><p>This layer is the output of the City of Seattle Zoned Development Capacity Model. To estimate potential development, the City of Seattle maintains a zoned development capacity model that compares existing development to an estimate of what could be built under current zoning. The difference between potential and existing development yields the capacity for new development measured as the number of housing units and the number of potential jobs that could be added.<br /></p><p>Knowledge about capacity enables the City to determine the effects of proposed zoning changes, policy revisions and development trends.  It also aids in setting and allocating the 20-year growth targets that must be accommodated by the City’s Comprehensive Plan.  </p><p><img src='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/87f1b8699f86404ab2bb0609142be722/data' style='height:200px; width:750px;' /><br /></p><p>The model is based on development sites and land use zoning maintained by the Department of Construction and Inspections.  Model results for any given development site are not a prediction that a certain amount of development will occur in some fixed time period. </p><p>The actual level of development activity that occurs is a function of a variety of future factors, many of which are beyond our ability to predict or influence.  These factors include such things as the future demand for a particular type of development (such as for townhouses, high-amenity multifamily or small-unit multifamily), whether the owner of any particular land is willing to sell or redevelop it, the financial feasibility of developing the land, and the intensity of development when it does occur.  Other factors, such as the relative attractiveness of certain areas for living and commerce, and the relative densities allowed by the existing zoning, can cause some areas to be developed earlier or later than others.  No one can predict with certainty the total effect of all these factors on the choices made by land developers.<br /></p><p><span style='font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size:16px;'>See the data in action in this </span><a href='https://seattlecitygis.maps.arcgis.com/apps/dashboards/3232628e387d467b904167b33fa38ad8' target='_blank' rel='nofollow ugc noopener noreferrer'>web app</a><span style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'>.</span><br /></p><b>Supporting resources</b>:</div><div><a href='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/6855611ef38d47219adf94edb9e20fc8/data' target='_blank' rel='nofollow ugc noopener noreferrer'>Model Methodology</a><br /></div><div><a href='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/0d3d0d928e4c41ff8f1a439ccb2d1b0c/data' target='_blank' rel='nofollow ugc noopener noreferrer'>Environmentally Critical Areas</a></div><div><a href='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/6d07f06e4a864d388c2a31b7a2a33997/data' target='_blank' rel='nofollow ugc noopener noreferrer'>Redevelopment Ratio</a></div><div><a href='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/e09abee766f04077ae48d8fccc8af09c/data' target='_blank' rel='nofollow ugc noopener noreferrer'>Site Status</a></div><div><a href='https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::land-use-zoning-development-assumptions/about' target='_blank' rel='nofollow ugc noopener noreferrer'>Land Use Assumptions</a></div><div><a href='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/13b74113d6fb4ebc9af805d339bdc836/data' target='_blank' rel='nofollow ugc noopener noreferrer'>Complete Data Dictionary</a><br /></div><div><br /></div><div><b>Disclaimer:</b> This map is the product of an analytical model.  The model",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:11.000Z",
        createdAt: "2022-08-20T05:02:54.000Z",
        metadata_updated_at: "2022-11-18T19:01:11.000Z",
        data_updated_at: "2022-08-20T05:02:54.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 1,
          page_views_total: 26,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.0,
          page_views_total_log: 4.754887502163469,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:54.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "buildable lands",
          "capacity model current",
          "development capacity",
          "gis",
          "planning",
          "zoned capacity",
          "zoning",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-09-23T21:34:13.381Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4348,47.4933,-122.2422,47.7359",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=b6630cd1e85144d8a9ec629fdd00d871&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::zoned-development-capacity-by-development-site-current",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-08-17T23:53:39.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::zoned-development-capacity-by-development-site-current",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Zoned_Development_Capacity_by_Development_Site_Current/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::zoned-development-capacity-by-development-site-current.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::zoned-development-capacity-by-development-site-current.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::zoned-development-capacity-by-development-site-current.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::zoned-development-capacity-by-development-site-current.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::zoned-development-capacity-by-development-site-current",
        },
      },
      permalink: "https://data.seattle.gov/d/6qbu-53f8",
      link: "https://data.seattle.gov/dataset/Zoned-Development-Capacity-by-Development-Site-Cur/6qbu-53f8",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "2010 Census Tract Seattle - Household Statistics",
        id: "7pcq-b9tv",
        parent_fxf: [],
        description:
          "<i>Data from:  </i><i><a href='http://www.seattle.gov/opcd/population-and-demographics/decennial-census#2010' target='_blank'>2010 Decennial Census</a></i><div><br /></div><div>Decennial household data for Census Tracts in the City of Seattle.</div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-21T19:03:02.000Z",
        createdAt: "2022-08-20T05:03:58.000Z",
        metadata_updated_at: "2023-01-21T19:03:02.000Z",
        data_updated_at: "2022-08-20T05:03:58.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 2,
          page_views_total: 26,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.5849625007211563,
          page_views_total_log: 4.754887502163469,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:58.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "dc2010",
          "gis",
          "planning",
          "census",
          "demographics",
          "households",
          "tracts",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2023-01-20T23:47:17.000Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4308,47.4933,-122.2420,47.7357",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=b524dcea2c7f47d8b976ed2bb17ff615&sublayer=16",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-tract-seattle-household-statistics",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2016-04-05T22:42:46.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-tract-seattle-household-statistics",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisrevprxy.seattle.gov/arcgis/rest/services/CENSUS_EXT/CENSUS_2010_BASICS/MapServer/16",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-tract-seattle-household-statistics.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-tract-seattle-household-statistics.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-tract-seattle-household-statistics.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2010-census-tract-seattle-household-statistics.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2010-census-tract-seattle-household-statistics",
        },
      },
      permalink: "https://data.seattle.gov/d/7pcq-b9tv",
      link: "https://data.seattle.gov/dataset/2010-Census-Tract-Seattle-Household-Statistics/7pcq-b9tv",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Blockface",
        id: "c3hu-cefg",
        parent_fxf: [],
        description:
          "<div>Displays blockfaces for all segments of the street network. Identifies the elements of the block, such as peak hour restrictions, length of the block, parking categories, and restricted parking zones.  </div><div><br /></div><div>Attribute Information: https://www.seattle.gov/Documents/Departments/SDOT/GIS/Blockface_Elements OD.pdf </div><div><br /></div><div>Update Cycle: Weekly </div><div>Contact Email: DOT_IT_GIS@seattle.gov</div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-18T19:02:29.000Z",
        createdAt: "2022-08-20T05:02:28.000Z",
        metadata_updated_at: "2023-01-18T19:02:29.000Z",
        data_updated_at: "2022-08-20T05:02:28.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 3,
          page_views_total: 26,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.0,
          page_views_total_log: 4.754887502163469,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:28.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "block",
          "blockface",
          "id",
          "parking",
          "rpz",
          "sdot",
          "seattle",
          "streets",
          "transportation",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2023-01-17T21:14:09.009Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size:16px;'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4253,47.4832,-122.2306,47.7359",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=b35fb25c8c93425980705474b5e82815&sublayer=4",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::blockface-3",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-07-06T20:14:51.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "City_Seattle_GIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::blockface-3",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Blockface/FeatureServer/4",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::blockface-3.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::blockface-3.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::blockface-3.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::blockface-3.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::blockface-3",
        },
      },
      permalink: "https://data.seattle.gov/d/c3hu-cefg",
      link: "https://data.seattle.gov/dataset/Blockface/c3hu-cefg",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Station Area Overlay (light rail)",
        id: "crmn-7wt5",
        parent_fxf: [],
        description:
          "<div style='font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size:16px;'><span style='font-family:inherit;'>Note:  This map is not an official zoning map.  For precise zoning information, please call or visit the Seattle Municipal Tower, </span><a href='https://www.seattle.gov/sdci/about-us' style='color:rgb(0, 121, 193); text-decoration-line:none; font-family:inherit; font-size:12pt;' target='_blank' rel='nofollow ugc noopener noreferrer'>Seattle Department of Construction and Inspections</a><br /></div><div style='font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size:16px;'><br /></div><span style='font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size:16px;'>City of Seattle's land use zoning overlay around Sound Transit light rail stations.</span>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-12T19:02:35.000Z",
        createdAt: "2022-08-20T05:03:26.000Z",
        metadata_updated_at: "2023-01-12T19:02:35.000Z",
        data_updated_at: "2022-08-20T05:03:26.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 3,
          page_views_total: 26,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 2.0,
          page_views_total_log: 4.754887502163469,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:26.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["gis", "land use", "planning", "sdcizoningmap", "zoning"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-06-15T06:31:51.310Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4489,47.4884,-122.2265,47.7429",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=dc119b86637d4967b50b14df106ebefe&sublayer=23",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::station-area-overlay-light-rail",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-06-11T21:00:26.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::station-area-overlay-light-rail",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Station_Area_Overlay_(light_rail)/FeatureServer/23",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::station-area-overlay-light-rail.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::station-area-overlay-light-rail.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::station-area-overlay-light-rail.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::station-area-overlay-light-rail.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::station-area-overlay-light-rail",
        },
      },
      permalink: "https://data.seattle.gov/d/crmn-7wt5",
      link: "https://data.seattle.gov/dataset/Station-Area-Overlay-light-rail-/crmn-7wt5",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Street Network Database (SND)",
        id: "h2wx-9deg",
        parent_fxf: [],
        description:
          "<p style='line-height: normal; margin: 0in 0in 0pt'><span style='font-family: '><font face='Verdana'><font size='2'><font color='#000000'>The Street Network Database (SND) is a representation of the physical, land based, improved, travel pathway infrastructure and associated theoretical address ranges. The pathway representation consists of Segments and Intersection elements. A Segment is a linear graphic element that represents a continuous physical travel path terminated by path end (dead end) or physical intersection with other travel paths. Segments have one street name, one address range and one set of segment characteristics. A Segment may have none or multiple alias street names. Segment types included are Freeways, Highways, Streets, Alleys (named only), Railroads, Walkways, and Bike lanes. SNDSEG is a linear feature class representing the SND Segment Feature, with attributes for Street name, Address Range, Alias Street name and segment Characteristics objects. Part of the Address Range and all of Street name objects are logically shared with the Discrete Address Point-Master Address File layer. </font></font></font></span></p>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-24T19:04:35.000Z",
        createdAt: "2022-11-24T19:04:35.000Z",
        metadata_updated_at: "2022-11-24T19:04:35.000Z",
        data_updated_at: "2022-11-24T19:04:35.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 2,
          page_views_total: 25,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.5849625007211563,
          page_views_total_log: 4.700439718141093,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-11-24T19:04:35.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "addresses",
          "alleys",
          "bicycles/bikes",
          "cosgis",
          "freeways",
          "highways",
          "intersections",
          "paths",
          "railroads",
          "seattle",
          "seattlecitygis",
          "snd",
          "street network database",
          "streets",
          "transpo",
          "transportation",
          "wa",
          "walkways",
          "wm_transpo_sndgeocode",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4269,47.4340,-122.2251,47.7801",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=0dd0ad79dc3845f3a296215d7c448a0d&sublayer=2",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::street-network-database-snd",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2012-07-12T17:54:26.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::street-network-database-snd",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/COS_Transpo/MapServer/2",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::street-network-database-snd.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::street-network-database-snd.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::street-network-database-snd.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::street-network-database-snd.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::street-network-database-snd",
        },
      },
      permalink: "https://data.seattle.gov/d/h2wx-9deg",
      link: "https://data.seattle.gov/dataset/Street-Network-Database-SND-/h2wx-9deg",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Detached Accessory Dwelling Units (DADUs)",
        id: "psix-5ku2",
        parent_fxf: [],
        description:
          "<p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'>Permit records from the City of Seattle permitting system for building permits that create or demolish detached accessory dwelling units (DADU). Records begin in 1990 and are through the current year quarter.</p><p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'></p><p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'>The permits in this layer are those that have either been completed or are currently issued. This data does not contain records for those permits that were issued but were not completed so are therefore not comparable to statistics that report permit issuance.</p><p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'></p><p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'>Each record represents the number of units added or demolished for each housing type in the project. Therefore a single building permit may appear multiple times if there are a mix of unit types in the project.</p><p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'></p><p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'>Housing unit types reflect the unit types regulated by the building codes and change through time. There has been no attempt to standardize these types and therefore reflect the unit types that existed at the time the permit was issued.  Unit types will be visible only for the time period they were in the code. For example, small efficiency dwelling units were not created in the code until 2016 and so will not appear as a type until that year.</p><p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'></p><p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'>There may be multiple permits at any given address.</p>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-12-21T19:04:16.000Z",
        createdAt: "2022-08-20T05:03:28.000Z",
        metadata_updated_at: "2022-12-21T19:04:16.000Z",
        data_updated_at: "2022-08-20T05:03:28.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 3,
          page_views_total: 25,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 2.0,
          page_views_total_log: 4.700439718141093,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:28.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "adu",
          "aduapp",
          "gis",
          "housing units",
          "permits",
          "planning",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-12-20T23:47:55.448Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4173,47.4938,-122.2427,47.7355",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=f59b69f4089448a68a0dedbd7dcf98a9&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::detached-accessory-dwelling-units-dadus",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-01-05T21:18:41.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::detached-accessory-dwelling-units-dadus",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Detached_Accessory_Dwelling_Units_(DADUs)/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::detached-accessory-dwelling-units-dadus.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::detached-accessory-dwelling-units-dadus.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::detached-accessory-dwelling-units-dadus.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::detached-accessory-dwelling-units-dadus.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::detached-accessory-dwelling-units-dadus",
        },
      },
      permalink: "https://data.seattle.gov/d/psix-5ku2",
      link: "https://data.seattle.gov/dataset/Detached-Accessory-Dwelling-Units-DADUs-/psix-5ku2",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Rental Units by Affordability Category",
        id: "fptw-mavp",
        parent_fxf: [],
        description:
          "Displacement risk indicator showing the distribution of renter households and renter units between different income brackets, covering the entire city from 2006 to the most recent year of data available.",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:21.000Z",
        createdAt: "2022-08-20T05:03:10.000Z",
        metadata_updated_at: "2022-11-18T19:01:21.000Z",
        data_updated_at: "2022-08-20T05:03:10.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 3,
          page_views_total: 25,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.0,
          page_views_total_log: 4.700439718141093,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:10.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["gis", "hdri", "ipums", "planning"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2021-05-04T01:21:02.843Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=b3695db5cd0c481da93ad6f8454bad15&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::rental-units-by-affordability-category",
          },
          {
            key: "Common-Core_Issued",
            value: "2020-05-11T17:04:17.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::rental-units-by-affordability-category",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Market_Supply/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::rental-units-by-affordability-category.geojson",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::rental-units-by-affordability-category.csv",
            },
            title: "CSV",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::rental-units-by-affordability-category",
        },
      },
      permalink: "https://data.seattle.gov/d/fptw-mavp",
      link: "https://data.seattle.gov/dataset/Rental-Units-by-Affordability-Category/fptw-mavp",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Hospitals",
        id: "b4jg-3hnd",
        parent_fxf: [],
        description: "Licensed acute care hospitals.",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:02:52.000Z",
        createdAt: "2022-08-20T05:02:52.000Z",
        metadata_updated_at: "2022-08-20T05:02:52.000Z",
        data_updated_at: "2022-08-20T05:02:52.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 3,
          page_views_total: 25,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.0,
          page_views_total_log: 4.700439718141093,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:52.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["health", "hospital", "medical", "public safety"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:02.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.3659,47.2047,-121.8896,47.7193",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=8e0d80152ccb404abc6ac85351e4aed6&sublayer=2",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::hospitals",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-12-04T22:09:13.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::hospitals",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/COS_Public_Facilities_and_Safety/MapServer/2",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::hospitals.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::hospitals.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::hospitals.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::hospitals.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::hospitals",
        },
      },
      permalink: "https://data.seattle.gov/d/b4jg-3hnd",
      link: "https://data.seattle.gov/dataset/Hospitals/b4jg-3hnd",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Traffic Lanes",
        id: "7zjr-xdjd",
        parent_fxf: [],
        description:
          "Display the location of traffic lanes for cartographic, analysis, and tracking purposes.<br /><br />| Attribute Information: <a href='https://drive.google.com/open?id=1TyNCYeUERz5-nUwt_lrV1Pz_yTbmZLP2' target='_blank' rel='nofollow ugc noopener noreferrer'>Traffic_Lanes_OD.pdf</a> <div><br /></div><div>2-27-2020: added these fields</div><div><div>DISTANCE ( type: esriFieldTypeInteger, alias: DISTANCE )</div><div>ENDDISTANCE ( type: esriFieldTypeDouble, alias: ENDDISTANCE )</div><div>WIDTH ( type: esriFieldTypeDouble, alias: WIDTH )</div><div><br /></div>| Data Update Cycle: Weekly<br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' target='_blank' rel='nofollow ugc noopener noreferrer'>DOT_IT_GIS@seattle.gov</a></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-18T19:02:29.000Z",
        createdAt: "2022-11-22T19:02:32.000Z",
        metadata_updated_at: "2023-01-18T19:02:29.000Z",
        data_updated_at: "2022-11-22T19:02:32.000Z",
        page_views: {
          page_views_last_week: 5,
          page_views_last_month: 9,
          page_views_total: 25,
          page_views_last_week_log: 2.584962500721156,
          page_views_last_month_log: 3.3219280948873626,
          page_views_total_log: 4.700439718141093,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-11-22T19:02:32.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["gis", "lanes", "sdot", "seattle", "streets", "traffic"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2023-01-17T22:15:14.871Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size:16px;'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4167,47.4939,-122.2347,47.7358",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=92a129a4703849df8a4c57fc7edae660&sublayer=7",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::traffic-lanes-2",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-07-14T22:35:45.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "City_Seattle_GIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::traffic-lanes-2",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Traffic_Lanes/FeatureServer/7",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::traffic-lanes-2.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::traffic-lanes-2.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::traffic-lanes-2.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::traffic-lanes-2.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::traffic-lanes-2",
        },
      },
      permalink: "https://data.seattle.gov/d/7zjr-xdjd",
      link: "https://data.seattle.gov/dataset/Traffic-Lanes/7zjr-xdjd",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Environmentally Critical Area Overlay for Zoned Development Capacity Model Current",
        id: "5dqd-ckat",
        parent_fxf: [],
        description:
          "Environmentally critical area layer used as an overlay for the City of Seattle Zone Development Capacity Model.  Areas represent the ECAs that would reduce the amount of development on a development site.  This layer is for analytical purposes only and does not represent actual regulatory areas or development regulation, rather an approximation of the potential impact on a development site.<div><br /></div><div>These areas include:</div><div><br /></div><div><u>Steep Slopes (40% or greater)</u></div><div><p style='margin-bottom:0in;'></p><ul><li>Remove all steep slope polygons less than 1,000 square feet in size </li></ul> For remaining steep slope polygons:</div><div><ul><li>Treat areas within steep slope ECAs as if only 30% is developable. For example, on a 10,000 square foot site where half is in a steep slope ECA, we would treat it like at 6,500 square foot site (5,000*100% + 5,000*30%)</li></ul><p></p><p style='margin-bottom:0in;'><u>Riparian Corridors</u></p><p style='margin-bottom:0in;'></p><ul><li>Ignore riparian corridors where the creek is in a culvert</li></ul><p></p><p style='margin-bottom:0in;'>For other riparian corridors:</p><p style='margin-bottom:0in;'></p><ul><li>Assume there will be no development in that riparian corridor and a buffer of 50 feet for streams without salmon and 75 feet for streams with salmon</li><li>Assume 30% of regular development potential in remainder of a 100 feet buffer from the riparian corridor (i.e. the next 50 feet for streams without salmon and the next 25 feet for streams with salmon).</li></ul><p style='margin-bottom:0in;'><u>Wetlands</u></p><p style='margin-bottom:0in;'></p><ul><li>Remove all wetlands polygons less than 1,000 square feet in size</li></ul><p></p><p style='margin-bottom:0in;'>For all other wetland polygons:</p><p style='margin-bottom:0in;'></p><ul><li>For all wetland polygons greater than or equal to an acre, put a 200 foot buffer around them and assume no development will occur in the wetland or the buffer</li><li>For all wetlands less than an acre, put an 80 foot buffer around them and assume no development in wetland or buffer.  Wetlands other than category I have a variety of buffers, but in general we see about half have 50 foot buffers and the other half have 110 foot buffers (with an average of 80 feet)</li></ul></div><div><a href='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/0d3d0d928e4c41ff8f1a439ccb2d1b0c/data' target='_blank' rel='nofollow ugc noopener noreferrer'>Supporting Documentation</a></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:15.000Z",
        createdAt: "2022-08-20T05:02:55.000Z",
        metadata_updated_at: "2022-11-18T19:01:15.000Z",
        data_updated_at: "2022-08-20T05:02:55.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 2,
          page_views_total: 25,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.5849625007211563,
          page_views_total_log: 4.700439718141093,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:55.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "buildable lands",
          "capacity model current",
          "development capacity",
          "eca",
          "gis",
          "plannng",
          "zoned capacity",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-08-19T19:57:56.222Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4265,47.4861,-122.2342,47.7557",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=8829fa05c48445948a9339b1f9442d98&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::environmentally-critical-area-overlay-for-zoned-development-capacity-model-current",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-08-16T23:10:41.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::environmentally-critical-area-overlay-for-zoned-development-capacity-model-current",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Environmentally_Critical_Area_Overlay_for_Zoned_Development_Capacity_Model_Current/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::environmentally-critical-area-overlay-for-zoned-development-capacity-model-current.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::environmentally-critical-area-overlay-for-zoned-development-capacity-model-current.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::environmentally-critical-area-overlay-for-zoned-development-capacity-model-current.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::environmentally-critical-area-overlay-for-zoned-development-capacity-model-current.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::environmentally-critical-area-overlay-for-zoned-development-capacity-model-current",
        },
      },
      permalink: "https://data.seattle.gov/d/5dqd-ckat",
      link: "https://data.seattle.gov/dataset/Environmentally-Critical-Area-Overlay-for-Zoned-De/5dqd-ckat",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Built Units Since 2010",
        id: "2zcd-33wb",
        parent_fxf: [],
        description:
          "<p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'>Permit records from the City of Seattle permitting system for building permits that create or demolish housing units. Records begin from the beginning of the previous decade from the current quarter year.</p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'></p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'>The permits in this layer are those that have been completed. This data does not contain records for those permits that were issued but were not completed so are therefore not comparable to statistics that report permit issuance.</p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'></p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'>Each record represents the number of units added or demolished for each housing type in the project. Therefore a single building permit may appear multiple times if there are a mix of unit types in the project.</p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'></p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'>Housing unit types reflect the unit types regulated by the building codes and change through time. There has been no attempt to standardize these types and therefore reflect the unit types that existed at the time the permit was issued.</p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'></p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'>There may be multiple permits at any given address.</p>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-12-21T19:04:17.000Z",
        createdAt: "2022-08-20T05:03:29.000Z",
        metadata_updated_at: "2022-12-21T19:04:17.000Z",
        data_updated_at: "2022-08-20T05:03:29.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 1,
          page_views_total: 24,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.0,
          page_views_total_log: 4.643856189774724,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:29.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["gis", "housing units", "permits", "planning"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-12-20T23:47:55.448Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4173,47.4938,-122.2427,47.7355",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=2e521b98e9a84934be2815b9e15f3ff5&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::built-units-since-2010",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-01-05T20:54:06.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::built-units-since-2010",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Built_Units_Past_Decade/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::built-units-since-2010.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::built-units-since-2010.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::built-units-since-2010.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::built-units-since-2010.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::built-units-since-2010",
        },
      },
      permalink: "https://data.seattle.gov/d/2zcd-33wb",
      link: "https://data.seattle.gov/dataset/Built-Units-Since-2010/2zcd-33wb",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Citywide Green Storm Infrastructure",
        id: "yf9b-guaw",
        parent_fxf: [],
        description:
          "<div style='font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px;'>Green Stormwater Infrastructure (GSI) project data from Seattle Public Utilities (SPU), Seattle Department of Transportation (SDOT), Seattle Parks and Recreation, Seattle Department of Construction and Inspection, and King County Department of Natural Resources and Parks are collected into one comprehensive summary overview data set. If BMP level data are available, each point represents one type of GSI feature with the count by project. There may be many points for one project, each plotted on top of one another. If BMP data are not available such as the SDCI data, there will be point for each project.</div><div style='font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px;'><br /></div><div style='font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px;'>This grouped layerfile displays City-wide Green Stormwater Infrastructure Best Management Practices(City-wide GSI BMP) and City-wide Green Stormwater Infrastructure projects(City-wide GSI Project).  GSI BMP is sourced from CARTO.GSI_BMP_PT_PV.  Labels are based on the attribute BMP.  City-wide GSI Project displays the data from CARTO.GSI_PT_PV.   The labels are based on the attribute PROJECT NAME.  This data will not display when zoomed out beyond 1:3,000.Seattle Executive Order 2013-01 and City Council Resolution 31459 direct City departments to coordinate to develop an implementation strategy for managing 700 million gallons of stormwater annually with green stormwater infrastructure approaches by 2025.  These data on the location, purpose, funder, install year, and best managed practices of GSI installations in Seattle are gathered and integrated for comprehensive City-wide tracking and reporting at the project level.</div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-14T19:07:53.000Z",
        createdAt: "2022-11-14T19:07:53.000Z",
        metadata_updated_at: "2022-11-14T19:07:53.000Z",
        data_updated_at: "2022-11-14T19:07:53.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 5,
          page_views_total: 24,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.584962500721156,
          page_views_total_log: 4.643856189774724,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-11-14T19:07:53.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "best management practice",
          "biofiltration",
          "bioretention",
          "bmp",
          "cistern",
          "citywide",
          "conveyance",
          "deciduous",
          "drainage",
          "evergreen",
          "gallons managed",
          "green roof",
          "green storm infrastructure",
          "green stormwater infrastructure",
          "gsi",
          "king county",
          "modular soil cell",
          "rain garden",
          "rainwise",
          "runoff",
          "sdci",
          "sdot",
          "sewer",
          "spr",
          "spu",
          "swale",
          "tree",
          "underdrain",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:02.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4161,47.4859,-122.2463,47.7348",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=866992982ffc4e458a4a8064076883ac",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::citywide-green-storm-infrastructure",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-06-29T21:12:06.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::citywide-green-storm-infrastructure",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/COS_CitywideGSI/MapServer",
            },
            title: "ArcGIS GeoService",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::citywide-green-storm-infrastructure",
        },
      },
      permalink: "https://data.seattle.gov/d/yf9b-guaw",
      link: "https://data.seattle.gov/dataset/Citywide-Green-Storm-Infrastructure/yf9b-guaw",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Peat Settlement-Prone Areas",
        id: "kvw3-n6w8",
        parent_fxf: [],
        description:
          "Peat settlement-prone areas. Peat settlement-prone areas consist of Category I and\n                  Category II peat settlement-prone areas that are delineated on Maps A1 through A26,\n                  Peat Settlement-prone Area Boundaries Maps, codified at the end of this<a href='https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT25ENPRHIPR_CH25.09REENCRAR'><span></span> Chapter 25.09</a>. This parcel-specific delineation is based on the location of the relevant bog or\n                  bogs identified in City of Seattle Identified Bogs (Troost 2007) plus a buffer of\n                  50 feet for Category I peat settlement-prone areas or a buffer of 25 feet for Category\n                  II peat settlement-prone areas. On parcels larger than 50,000 square feet, the Director\n                  may consider a parcel-specific delineation, provided by the applicant, of the peat\n                  settlement-prone area boundary on a parcel. Where a parcel-specific delineation conflicts\n                  with the Peat Settlement-prone Area Boundaries Maps, the parcel-specific delineation\n                  shall apply.\n                  \n               <div><br /></div><div>For more information on this code, please visit:<br /></div><div>https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT25ENPRHIPR_CH25.09REENCRAR</div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:55.000Z",
        createdAt: "2022-08-20T05:03:55.000Z",
        metadata_updated_at: "2022-08-20T05:03:55.000Z",
        data_updated_at: "2022-08-20T05:03:55.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 2,
          page_views_total: 22,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.5849625007211563,
          page_views_total_log: 4.523561956057013,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:55.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "critical areas",
          "dso",
          "eca",
          "environment",
          "gis",
          "peat",
          "peat settlement",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4067,47.5159,-122.2468,47.7248",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=c8674a1076f44307b191fbe3a123ae7e&sublayer=8",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::peat-settlement-prone-areas",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-11-05T23:32:44.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::peat-settlement-prone-areas",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/ECA_Layers/MapServer/8",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::peat-settlement-prone-areas.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::peat-settlement-prone-areas.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::peat-settlement-prone-areas.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::peat-settlement-prone-areas.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::peat-settlement-prone-areas",
        },
      },
      permalink: "https://data.seattle.gov/d/kvw3-n6w8",
      link: "https://data.seattle.gov/dataset/Peat-Settlement-Prone-Areas/kvw3-n6w8",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Attached Accessory Dwelling Units (AADUs)",
        id: "9yp6-pbce",
        parent_fxf: [],
        description:
          "<p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'>Permit records from the City of Seattle permitting system for building permits that create or demolish attached accessory dwelling units (AADU). Records begin in 1990 and are through the current year quarter.</p><p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'></p><p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'>The permits in this layer are those that have either been completed or are currently issued. This data does not contain records for those permits that were issued but were not completed so are therefore not comparable to statistics that report permit issuance.</p><p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'></p><p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'>Each record represents the number of units added or demolished for each housing type in the project. Therefore a single building permit may appear multiple times if there are a mix of unit types in the project.</p><p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'></p><p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'>Housing unit types reflect the unit types regulated by the building codes and change through time. There has been no attempt to standardize these types and therefore reflect the unit types that existed at the time the permit was issued.  Unit types will be visible only for the time period they were in the code. For example, small efficiency dwelling units were not created in the code until 2016 and so will not appear as a type until that year.</p><p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'></p><p style='font-family:&quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size:16px;'>There may be multiple permits at any given address.</p>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-12-21T19:04:16.000Z",
        createdAt: "2022-08-20T05:03:28.000Z",
        metadata_updated_at: "2022-12-21T19:04:16.000Z",
        data_updated_at: "2022-08-20T05:03:28.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 1,
          page_views_total: 22,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.0,
          page_views_total_log: 4.523561956057013,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:28.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "adu",
          "aduapp",
          "gis",
          "housing units",
          "permits",
          "planning",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-12-20T23:47:55.448Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4173,47.4938,-122.2427,47.7355",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=b64a1cf17e0a4223a408e411a15029ae&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::attached-accessory-dwelling-units-aadus",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-01-05T21:12:09.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::attached-accessory-dwelling-units-aadus",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Attached_Accessory_Dwelling_Units_(AADUs)/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::attached-accessory-dwelling-units-aadus.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::attached-accessory-dwelling-units-aadus.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::attached-accessory-dwelling-units-aadus.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::attached-accessory-dwelling-units-aadus.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::attached-accessory-dwelling-units-aadus",
        },
      },
      permalink: "https://data.seattle.gov/d/9yp6-pbce",
      link: "https://data.seattle.gov/dataset/Attached-Accessory-Dwelling-Units-AADUs-/9yp6-pbce",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Liquefaction Zones ECA",
        id: "r7vg-p2iz",
        parent_fxf: [],
        description:
          "<div><span><div>A polygon feature class that shows liquefaction zones. Used to implement and regulate the City of Seattle's Environmentally Critical Areas policies. This layer was created in 1995 using data obtained from the USGS. Some edits were made to the edges to better coincide with the City's two foot contour data.</div><div><p>\n                  Areas of the City subject to ground shaking from seismic hazards that are addressed\n                  by<a href='https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT22BUCOCO' rel='nofollow ugc'><span></span> Title 22</a>.\n                  \n               </p>\n               \t\t\n               \n               \t\t\n               <p>\n                  The Seattle Fault zone as delineated in Troost et al., 2005,\n                  <span>The geologic map of Seattle, a progress report, U.S. Geological Survey, Open-file\n                     report 2005-1252</span>\n                  , or as the Director determines is more accurately mapped by the U.S. Geological Survey,\n                  as set out in a Director's Rule. <br /></p>For more information on this code, please visit:<br />https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT25ENPRHIPR_CH25.09REENCRAR</div><div><br /></div><div>Item for the Seattle Hazard Explorer</div></span></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:41.000Z",
        createdAt: "2022-08-20T05:03:41.000Z",
        metadata_updated_at: "2022-08-20T05:03:41.000Z",
        data_updated_at: "2022-08-20T05:03:41.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 3,
          page_views_total: 22,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.0,
          page_views_total_log: 4.523561956057013,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:41.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "contours",
          "cosgis",
          "department of planning and development",
          "eca",
          "environment",
          "environmental critical areas",
          "liquefaction",
          "seattle",
          "seattlecitygis",
          "wa",
          "wm_dpd_eca_liqzones",
          "zones",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-06-09T23:13:33.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4308,47.4956,-122.2470,47.7349",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=3209a14a3b274f809e70b760f267c20a&sublayer=9",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::liquefaction-zones-eca",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2012-06-29T22:21:18.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::liquefaction-zones-eca",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/ECA_Layers/MapServer/9",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::liquefaction-zones-eca.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::liquefaction-zones-eca.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::liquefaction-zones-eca.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::liquefaction-zones-eca.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::liquefaction-zones-eca",
        },
      },
      permalink: "https://data.seattle.gov/d/r7vg-p2iz",
      link: "https://data.seattle.gov/dataset/Liquefaction-Zones-ECA/r7vg-p2iz",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Riparian Corridors ECA",
        id: "jbef-63sf",
        parent_fxf: [],
        description:
          "<div><div><font size='3'>A polygon feature class showing Riparian Corridors in Seattle. Used to implement and regulate the City of Seattle's Environmentally Critical Areas policies.  </font><font size='4'><span style='color: rgb(34, 34, 34); font-family: arial, sans-serif; line-height: 19.2px; background-color: rgb(255, 255, 255);'>A </span><span style='color: rgb(34, 34, 34); font-family: arial, sans-serif; line-height: 19.2px; background-color: rgb(255, 255, 255);'>r</span><span style='color: rgb(34, 34, 34); font-family: arial, sans-serif; line-height: 19.2px; background-color: rgb(255, 255, 255);'>iparian</span><span style='color: rgb(34, 34, 34); font-family: arial, sans-serif; line-height: 19.2px; background-color: rgb(255, 255, 255);'> zone or </span><span style='color: rgb(34, 34, 34); font-family: arial, sans-serif; line-height: 19.2px; background-color: rgb(255, 255, 255);'>riparian</span><span style='color: rgb(34, 34, 34); font-family: arial, sans-serif; line-height: 19.2px; background-color: rgb(255, 255, 255);'> area is the interface between land and a river or stream.</span></font></div><div><br /><font size='4'><span style='color: rgb(34, 34, 34); font-family: arial, sans-serif; line-height: 19.2px; background-color: rgb(255, 255, 255);'><span>Areas which are the riparian watercourse and the riparian \nmanagement area. The riparian watercourse is the watercourse of Type 2-5\n waters defined in WAC 222-16-031 that have fish or wildlife habitat. </span><span><span>See\n code section number 25.09.020 of the Seattle Municipal Code for a more \ncomplete definition of environmentally critical areas:</span></span><span><span><span> https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT25ENPRHIPR_CH25.09REENCRAR</span></span></span></span></font></div></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:51.000Z",
        createdAt: "2022-08-20T05:03:51.000Z",
        metadata_updated_at: "2022-08-20T05:03:51.000Z",
        data_updated_at: "2022-08-20T05:03:51.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 6,
          page_views_total: 21,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.807354922057604,
          page_views_total_log: 4.459431618637297,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:51.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "corridor",
          "cosgis",
          "department of planning and development",
          "eca",
          "environmental critical areas",
          "riparian",
          "seattle",
          "seattlecitygis",
          "terrain",
          "urban forestry",
          "wa",
          "wm_dpd_eca_ripcorr",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4213,47.4900,-122.2496,47.7556",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=97cd514d0c17426da24d4d2f4f7fedf5&sublayer=3",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::riparian-corridors-eca",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2012-06-29T22:28:02.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::riparian-corridors-eca",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/ECA_Layers/MapServer/3",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::riparian-corridors-eca.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::riparian-corridors-eca.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::riparian-corridors-eca.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::riparian-corridors-eca.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::riparian-corridors-eca",
        },
      },
      permalink: "https://data.seattle.gov/d/jbef-63sf",
      link: "https://data.seattle.gov/dataset/Riparian-Corridors-ECA/jbef-63sf",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Private Schools",
        id: "ftp7-mj2b",
        parent_fxf: [],
        description:
          "<div style='text-align:Left;'><div><div><p><span>To display private schools within the city limits.  These school are approved through the State of Washington Office of Superintendent of Public Instruction.  Please see the following link for more information:  http://www.k12.wa.us/privateed/PrivateSchools/default.aspx</span></p></div></div></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-09-03T05:05:38.000Z",
        createdAt: "2022-08-20T05:02:25.000Z",
        metadata_updated_at: "2022-09-03T05:05:38.000Z",
        data_updated_at: "2022-08-20T05:02:25.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 4,
          page_views_total: 21,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.321928094887362,
          page_views_total_log: 4.459431618637297,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:25.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["education", "private schools", "school", "schools"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:02.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.3962,47.5017,-122.2672,47.7706",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=f61d9ea57af34150b20e2bd5b2d6b681&sublayer=7",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::private-schools-1",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-12-04T22:28:48.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::private-schools-1",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/COS_Public_Facilities_and_Safety/MapServer/7",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::private-schools-1.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::private-schools-1.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::private-schools-1.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::private-schools-1.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::private-schools-1",
        },
      },
      permalink: "https://data.seattle.gov/d/ftp7-mj2b",
      link: "https://data.seattle.gov/dataset/Private-Schools/ftp7-mj2b",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "2020 Census Block King County - Redistricting  Data 2020",
        id: "npfj-43g5",
        parent_fxf: [],
        description:
          "Census 2020 blocks in King County with selected P.L. 94-171 redistricting data.<div><br /></div><div>For more information about the P.L. 94-171 redistricting data, please visit the <a href='https://www.census.gov/programs-surveys/decennial-census/about/rdo/summary-files.html' rel='nofollow ugc' target='_blank'>U.S. Census Bureau</a>.  For a detailed description of the data included please see the <a href='https://www2.census.gov/programs-surveys/decennial/2020/technical-documentation/complete-tech-docs/summary-file/2020Census_PL94_171Redistricting_StatesTechDoc_English.pdf' rel='nofollow ugc' target='_blank'>2020 Census State Redistricting Data Summary File</a>. <br /><div><br /></div><div><p style='margin:0in 0in 7.5pt; font-size:11pt; font-family:Calibri, sans-serif; color:rgb(32, 31, 30); background-image:initial; background-position:initial; background-size:initial; background-repeat:initial; background-attachment:initial; background-origin:initial; background-clip:initial;'><span style='margin:0px; padding:0px; border:0px; font:inherit; color:black;'>Important note:  The Census Bureau advises analysts to aggregate blocks together to form larger geographic units before using the 2020 Census data. </span></p><p style='margin:0in 0in 7.5pt; font-size:11pt; font-family:Calibri, sans-serif; color:rgb(32, 31, 30); background-image:initial; background-position:initial; background-size:initial; background-repeat:initial; background-attachment:initial; background-origin:initial; background-clip:initial;'><span style='margin:0px; padding:0px; border:0px; font:inherit; color:black;'>Background: The Bureau used a new tool, called Differential Privacy, to inject statistical noise into the 2020 Census data in order to protect privacy. The resulting noise can cause substantial inaccuracy at the block level; combining data for blocks and other small geographies reduces the inaccuracy. For more information see <a href='https://www.census.gov/newsroom/blogs/director/2021/07/redistricting-data.html' rel='nofollow ugc' style='margin:0px; padding:0px; border:0px; font:inherit; color:rgb(5, 99, 193);' target='_blank'>Redistricting Data: What to Expect and When (census.gov)</a>, <a href='https://www.census.gov/programs-surveys/decennial-census/decade/2020/planning-management/process/disclosure-avoidance.html' rel='nofollow ugc' style='margin:0px; padding:0px; border:0px; font:inherit; color:rgb(5, 99, 193);' target='_blank'>2020 Census Data Products: Disclosure Avoidance Modernization</a>.</span></p></div></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:16.000Z",
        createdAt: "2022-08-20T05:02:24.000Z",
        metadata_updated_at: "2022-11-18T19:01:16.000Z",
        data_updated_at: "2022-08-20T05:02:24.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 1,
          page_views_total: 21,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.0,
          page_views_total_log: 4.459431618637297,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:24.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "census 2020",
          "census blocks",
          "gis",
          "planning",
          "redistricting",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-07-26T00:51:36.898Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.5412,47.0716,-121.0660,47.7931",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=033d9a0ec26f49339540c0e41481735f&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2020-census-block-king-county-redistricting-data-2020",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2021-08-17T22:25:24.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2020-census-block-king-county-redistricting-data-2020",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/KC_BLOCK_2020_PL/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2020-census-block-king-county-redistricting-data-2020.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2020-census-block-king-county-redistricting-data-2020.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2020-census-block-king-county-redistricting-data-2020.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2020-census-block-king-county-redistricting-data-2020.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2020-census-block-king-county-redistricting-data-2020",
        },
      },
      permalink: "https://data.seattle.gov/d/npfj-43g5",
      link: "https://data.seattle.gov/dataset/2020-Census-Block-King-County-Redistricting-Data-2/npfj-43g5",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Greater Downtown Alleys",
        id: "xzjs-qw5h",
        parent_fxf: [],
        description:
          "2018 inventory of alleys in greater downtown Seattle, WA.  This was a data collection effort by the University of Washington for SDOT to inform the Final 50 Feet Program. <br /><br />\nThe Seattle neighborhoods of South Lake Union, Uptown, Belltown, Downtown, Capitol Hill, First Hill, and International District (West of I-5) are contained in the inventory.  <br /><br />| Attribute Information: <a href='https://drive.google.com/open?id=1UPmSqksOOZ-Vu_k8j0KZEqAxgwy5W7oT' target='_blank'>GreaterDowntownAlleys2018_OD.pdf</a> <br /><br />| Update Cycle: N/A, Data Collected January through March of 2018.  Future efforts to improve and maintain this data set are planned and will supersede this data set. <br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' target='_blank'>DOT_IT_GIS@seattle.gov</a>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:52.000Z",
        createdAt: "2022-08-20T05:03:52.000Z",
        metadata_updated_at: "2022-08-20T05:03:52.000Z",
        data_updated_at: "2022-08-20T05:03:52.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 2,
          page_views_total: 21,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.5849625007211563,
          page_views_total_log: 4.459431618637297,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:52.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "alley",
          "alley congestion",
          "alleys",
          "final 50",
          "freight",
          "gis",
          "greater downtown",
          "inventory",
          "open data",
          "sdot",
          "seattle",
          "streets",
          "supply chain transportation and logistics program",
          "transportation",
          "university of washington",
          "urban goods",
          "wa",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.3635,47.5943,-122.3084,47.6293",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=00840eaf6fbb4e1cadbb84b250ac9798&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::greater-downtown-alleys",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-10-02T16:41:56.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Transportation_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::greater-downtown-alleys",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Alley_Inventory_2018/MapServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::greater-downtown-alleys.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::greater-downtown-alleys.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::greater-downtown-alleys.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::greater-downtown-alleys.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::greater-downtown-alleys",
        },
      },
      permalink: "https://data.seattle.gov/d/xzjs-qw5h",
      link: "https://data.seattle.gov/dataset/Greater-Downtown-Alleys/xzjs-qw5h",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Census Blocks 2010",
        id: "cq4z-2zvu",
        parent_fxf: [],
        description:
          "The TIGER/Line Files are shapefiles and related database files (.dbf) \nthat are an extract of selected geographic and cartographic information \nfrom the U.S. Census Bureau's Master Address File / Topologically \nIntegrated Geographic Encoding and Referencing (MAF/TIGER) Database \n(MTDB). The MTDB represents a seamless national file with no overlaps or\n gaps between parts, however, each TIGER/Line File is designed to stand \nalone as an independent data set, or they can be combined to cover the \nentire nation. Census Blocks are statistical areas bounded on all sides \nby visible features, such as streets, roads, streams, and railroad \ntracks, and/or by nonvisible boundaries such as city, town, township, \nand county limits, and short line-of-sight extensions of streets and \nroads. Census blocks are relatively small in area; for example, a block \nin a city bounded by streets. However, census blocks in remote areas are\n often large and irregular and may even be many square miles in area. A \ncommon misunderstanding is that data users think census blocks are used \ngeographically to build all other census geographic areas, rather all \nother census geographic areas are updated and then used as the primary \nconstraints, along with roads and water features, to delineate the \ntabulation blocks. As a result, all 2010 Census blocks nest within every\n other 2010 Census geographic area, so that Census Bureau statistical \ndata can be tabulated at the block level and aggregated up to the \nappropriate geographic areas. Census blocks cover all territory in the \nUnited States, Puerto Rico, and the Island Areas (American Samoa, Guam, \nthe Commonwealth of the Northern Mariana Islands, and the U.S. Virgin \nIslands). Blocks are the smallest geographic areas for which the Census \nBureau publishes data from the decennial census. A block may consist of \none or more faces.",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:02:46.000Z",
        createdAt: "2022-08-20T05:02:46.000Z",
        metadata_updated_at: "2022-08-20T05:02:46.000Z",
        data_updated_at: "2022-08-20T05:02:46.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 2,
          page_views_total: 21,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.5849625007211563,
          page_views_total_log: 4.459431618637297,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:46.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "2010",
          "block",
          "boundaries",
          "census",
          "cosgis",
          "planning",
          "seattle",
          "seattlecitygis",
          "wa",
          "wm_census_block10",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4537,47.4811,-122.2281,47.7359",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=38105e262d9441b59b2dde020cb02b40&sublayer=13",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::census-blocks-2010",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2012-07-12T21:19:55.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::census-blocks-2010",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/Census_OpenData/MapServer/13",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::census-blocks-2010.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::census-blocks-2010.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::census-blocks-2010.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::census-blocks-2010.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::census-blocks-2010",
        },
      },
      permalink: "https://data.seattle.gov/d/cq4z-2zvu",
      link: "https://data.seattle.gov/dataset/Census-Blocks-2010/cq4z-2zvu",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Tree Canopy 2016",
        id: "t9ce-grie",
        parent_fxf: [],
        description:
          "Tree canopy for Seattle, WA, mapped to 2016 ground conditions. Tree canopy was mapped from leaf-off LiDAR collected in the spring of 2016 and leaf-on high-resolution imagery collected in the summer of 2015 to complete this tree canopy cover assessment. Tree canopy cover mapping was carried out using a semi-automated approach that coupled automated feature extraction with manual editing. Automated feature extraction was done using a rule-based expert system embedded within an object-based framework. Object-based image analysis techniques (OBIA) work by grouping pixels into meaningful objects based on their spectral and spatial properties, while taking into account boundaries imposed by existing vector datasets. Within the OBIA environment, a rule-based expert system was designed to effectively mimic the process of manual image analysis by incorporating the elements of image interpretation (color/tone, texture, pattern, location, size, and shape) into the classification process. A series of morphological procedures were employed to ensure that the end product is both accurate and cartographically pleasing. Manual corrections carried out on a scale of 1:2,500, followed by a final review for completeness and consistency at a scale of 1:10,000.",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-08T19:04:55.000Z",
        createdAt: "2023-01-08T19:04:55.000Z",
        metadata_updated_at: "2023-01-08T19:04:55.000Z",
        data_updated_at: "2023-01-08T19:04:55.000Z",
        page_views: {
          page_views_last_week: 6,
          page_views_last_month: 21,
          page_views_total: 21,
          page_views_last_week_log: 2.807354922057604,
          page_views_last_month_log: 4.459431618637297,
          page_views_total_log: 4.459431618637297,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2023-01-08T19:04:55.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "city of seattle",
          "environment",
          "gis",
          "tree",
          "tree canopy",
          "trees",
          "urban forest",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4297,47.4934,-122.2424,47.7359",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=b4d17c402fb844058ae3ab0c388b4849&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::tree-canopy-2016",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-05-10T18:57:13.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::tree-canopy-2016",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/Tree_Canopy/MapServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::tree-canopy-2016.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::tree-canopy-2016.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::tree-canopy-2016.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::tree-canopy-2016.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::tree-canopy-2016",
        },
      },
      permalink: "https://data.seattle.gov/d/t9ce-grie",
      link: "https://data.seattle.gov/dataset/Tree-Canopy-2016/t9ce-grie",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Seattle City Light Lines",
        id: "x5q7-9ssu",
        parent_fxf: [],
        description:
          "Each segment from pole to pole represents a generalized line which is the result of merging primary, secondary, and neutral wires. All locations are approximate.Only underground lines within the ROW (Rights of Way) are shown.This data is for planning purposes only.<div><br /></div><div>Seattle City Light's public view data for electrical lines.Displays data from SCL.PUB_Line, symbolized on the attribute &quot;Line&quot;, (OH-Overhead, UG-Underground).  Layer does not display when zoomed out beyond 1:20,000.<br /></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:02:30.000Z",
        createdAt: "2022-08-20T05:02:30.000Z",
        metadata_updated_at: "2022-08-20T05:02:30.000Z",
        data_updated_at: "2022-08-20T05:02:30.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 7,
          page_views_total: 20,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 3.0,
          page_views_total_log: 4.392317422778761,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:30.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "city light",
          "electrical",
          "electricity",
          "scl",
          "underground wiring",
          "utility",
          "wiring",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:02.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4231,47.4445,-122.2262,47.7801",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=2fe3b77319bd496d81745428a0536237&sublayer=1",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-city-light-lines",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-01-30T17:05:20.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-city-light-lines",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/SCL_Poles_Lines/MapServer/1",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-city-light-lines.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-city-light-lines.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-city-light-lines.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-city-light-lines.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-city-light-lines",
        },
      },
      permalink: "https://data.seattle.gov/d/x5q7-9ssu",
      link: "https://data.seattle.gov/dataset/Seattle-City-Light-Lines/x5q7-9ssu",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Adopt a Drain - Available Drains",
        id: "jdkd-7fkr",
        parent_fxf: [],
        description:
          "Adopt-a-Drain\nMaintaining Storm Drains:\n<div><p>Join volunteers across the city to maintain storm drains, a critical part of our utility infrastructure.</p>\n<p><a href='http://www.seattle.gov/util/EnvironmentConservation/GetInvolved/AdoptaDrain/Adopt-a-DrainSignup/index.htm' target=''>Sign up to adopt a storm drain</a> near your home or work. By registering, you commit to keeping the drain surface clear of leaves and other debris year round.</p>\n<p>If you have any questions, please contact us at <a href='mailto:adoptadrain@seattle.gov' target=''>adoptadrain@seattle.gov</a> or at (206) 233-7187.</p>\nWhy should I adopt a drain?\n<ul><li>Prevent flooding in your neighborhood by keeping drains free of debris.</li><li>Prevent pollutants from entering streams, creeks and Puget Sound, which protects fish and other wildlife.</li><li>Help the city maintain our infrastructure, especially during fall months when rain increases and falling leaves block drains.</li></ul>\n<p>If you adopt a drain, SPU may contact you to notify you of anticipated storms and flood events.</p>http://www.seattle.gov/util/environmentconservation/getinvolved/adoptadrain/</div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:54.000Z",
        createdAt: "2022-08-20T05:03:54.000Z",
        metadata_updated_at: "2022-08-20T05:03:54.000Z",
        data_updated_at: "2022-08-20T05:03:54.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 1,
          page_views_total: 20,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.0,
          page_views_total_log: 4.392317422778761,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:54.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["adopt a drain", "drainage", "dww", "spu", "storm"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4209,47.4791,-122.2378,47.7575",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=327e7a50709e4aae8159b40fefa936c7&sublayer=1",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::adopt-a-drain-available-drains",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2017-05-24T20:55:42.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "PublicUtilities_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::adopt-a-drain-available-drains",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisrevprxy.seattle.gov/arcgis/rest/services/SPU_EXT/AAD_Street_Drains/MapServer/1",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::adopt-a-drain-available-drains.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::adopt-a-drain-available-drains.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::adopt-a-drain-available-drains.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::adopt-a-drain-available-drains.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::adopt-a-drain-available-drains",
        },
      },
      permalink: "https://data.seattle.gov/d/jdkd-7fkr",
      link: "https://data.seattle.gov/dataset/Adopt-a-Drain-Available-Drains/jdkd-7fkr",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Street Signs",
        id: "ykhy-r77z",
        parent_fxf: [],
        description:
          "<div style='text-align:Left;'><p>Includes signs installed and maintained by the Seattle Department of Transportation within the public right of way.  <br /><br />| Attribute Information: <a href='https://www.seattle.gov/Documents/Departments/SDOT/GIS/Street_Signs_OD.pdf' target='_blank' rel='nofollow ugc noopener noreferrer'>https://www.seattle.gov/Documents/Departments/SDOT/GIS/Street_Signs_OD.pdf</a>  <br /><br />| Data Confidence: Medium <br />| Data Confidence Source: <a href='https://www.seattle.gov/Documents/Departments/SDOT/About/SDOT2015SCReportFinal12-7-2015.pdf' target='_blank' rel='nofollow ugc noopener noreferrer'>2015 SDOT Asset Management, Status and Condition Report</a> <br /><br />| Update Cycle: Weekly<br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' target='_blank' rel='nofollow ugc noopener noreferrer'>DOT_IT_GIS@seattle.gov </a><br /><br />---  <br /><b>Signs by Category</b> (Common SDOT queries of signs and data downloads)   <br />| <a href='https://data-seattlecitygis.opendata.arcgis.com/datasets/street-signs/data?where=%20(CATEGORY%20%3D%20%27REGBP%27%20OR%20CATEGORY%20%3D%20%27REGLUC%27%20OR%20CATEGORY%20%3D%20%27REGMIS%27%20OR%20CATEGORY%20%3D%20%27REGOW%27%20OR%20CATEGORY%20%3D%20%27REGPL%27%20OR%20CATEGORY%20%3D%20%27REGSL%27%20OR%20CATEGORY%20%3D%20%27REGTP%27%20OR%20CATEGORY%20%3D%20%27REGWL%27)%20' target='_blank' rel='nofollow ugc noopener noreferrer'>Regulatory Sign Data</a>: <b><br /></b>CATEGORY LIKE 'REG%'<br /><br />| <a href='https://data-seattlecitygis.opendata.arcgis.com/datasets/street-signs/data?where=%20(CATEGORY%20%3D%20%27PNP%27%20OR%20CATEGORY%20%3D%20%27PNS%27%20OR%20CATEGORY%20%3D%20%27PPEAK%27)%20' target='_blank' rel='nofollow ugc noopener noreferrer'>No Parking Sign Data</a>: <br />CATEGORY IN ('PNP', 'PNS','PPEAK')<br /><br />| <a href='https://data-seattlecitygis.opendata.arcgis.com/datasets/street-signs/data?where=%20(CATEGORY%20%3D%20%27P1530%27%20OR%20CATEGORY%20%3D%20%27P1H%27%20OR%20CATEGORY%20%3D%20%27PPP%27%20OR%20CATEGORY%20%3D%20%27PR%27%20OR%20CATEGORY%20%3D%20%27PRZ%27%20OR%20CATEGORY%20%3D%20%27PTIML%27%20OR%20CATEGORY%20%3D%20%27PINST%27%20OR%20CATEGORY%20%3D%20%27PCARPL%27)%20' target='_blank' rel='nofollow ugc noopener noreferrer'>Parking Regulatory Sign Data</a>: <br />CATEGORY IN ('P1530','P1H','PPP','PR','PRZ','PTIML','PINST','PCARPL')<br /><br />| <a href='https://data-seattlecitygis.opendata.arcgis.com/datasets/street-signs/data?where=%20(CATEGORY%20%3D%20%27PBLO%27%20OR%20CATEGORY%20%3D%20%27PBZ%27%20OR%20CATEGORY%20%3D%20%27PCVL%27%20OR%20CATEGORY%20%3D%20%27PDIS%27%20OR%20CATEGORY%20%3D%20%27PLU%27%20OR%20CATEGORY%20%3D%20%27PPL%27%20OR%20CATEGORY%20%3D%20%27PSCH%27%20OR%20CATEGORY%20%3D%20%27PTRKL%27%20OR%20CATEGORY%20%3D%20%27PZONE%27)%20' target='_blank' rel='nofollow ugc noopener noreferrer'>Parking Zones Sign Data</a>: <br />CATEGORY IN ('PBLO','PBZ','PCVL','PDIS','PLU','PPL','PSCH','PTRKL','PZONE')<br /><br />| <a href='https://data-seattlecitygis.opendata.arcgis.com/datasets/street-signs/data?where=CATEGORY%20%3D%20%27SNS%27' target='_blank' rel='nofollow ugc noopener noreferrer'>Street Name Sign Data</a>: <br />CATEGORY = 'SNS'<br /><br />| <a href='https://data-seattlecitygis.opendata.arcgis.com/datasets/street-signs/data?where=CATEGORY%20%3D%20%27PS%27' target='_blank' rel='nofollow ugc noopener noreferrer'>Pay Station Sign Data</a>:<br />CATEGORY = 'PS'<br /><br />| <a href='https://data-seattlecitygis.opendata.arcgis.com/datasets/street-signs/data?where=CATEGORY%20%3D%20%27GBP%27' target='_blank' rel='nofollow ugc noopener noreferrer'>Guide-Bike/Ped Sign Data</a>: <br />CATEGORY = 'GBP'<br /><br />| <a href='https://data-seattlecitygis.opendata.arcgis.com/datasets/street-signs/data?where=CATEGORY%20%3D%20%27GUIDE%27' target='_blank' rel='nofollow ugc noopener noreferrer'>Guide Sign Data</a>: <br />CATEGORY = 'GUIDE'<br /><br />| <a href='https://data-seattlecitygis.opendata.arcgis.com/datasets/street-signs/data?where=CATEGORY%20",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-18T19:02:31.000Z",
        createdAt: "2022-08-20T05:03:14.000Z",
        metadata_updated_at: "2023-01-18T19:02:31.000Z",
        data_updated_at: "2022-08-20T05:03:14.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 6,
          page_views_total: 20,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 2.807354922057604,
          page_views_total_log: 4.392317422778761,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:14.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "018",
          "bike",
          "gis",
          "guide",
          "mutcd",
          "no parking",
          "parking",
          "parking regulatory",
          "parking zones",
          "pay station",
          "regulation",
          "regulatory sign",
          "route",
          "sdot",
          "seattle",
          "signs",
          "speed limit",
          "stop",
          "street name",
          "streets",
          "traffic",
          "transportation",
          "wa",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2023-01-17T22:05:52.892Z",
          },
          { key: "Common-Core_License", value: "" },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4255,47.4935,-122.2433,47.7357",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=e3e05f03dcb3476d86cbbd1e4bda5cae&sublayer=12",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::street-signs",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-08-02T18:37:15.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "City_Seattle_GIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::street-signs",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Street_Signs/FeatureServer/12",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::street-signs.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::street-signs.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::street-signs.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::street-signs.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::street-signs",
        },
      },
      permalink: "https://data.seattle.gov/d/ykhy-r77z",
      link: "https://data.seattle.gov/dataset/Street-Signs/ykhy-r77z",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Adopt a Drain - Crowd Adopted",
        id: "thny-muyz",
        parent_fxf: [],
        description:
          "Adopt-a-Drain\nMaintaining Storm Drains:\n<p>Join volunteers across the city to maintain storm drains, a critical part of our utility infrastructure.</p>\n<p><a href='http://www.seattle.gov/util/EnvironmentConservation/GetInvolved/AdoptaDrain/Adopt-a-DrainSignup/index.htm' target=''>Sign up to adopt a storm drain</a> near your home or work. By registering, you commit to keeping the drain surface clear of leaves and other debris year round.</p>\n<p>If you have any questions, please contact us at <a href='mailto:adoptadrain@seattle.gov' target=''>adoptadrain@seattle.gov</a> or at (206) 233-7187.</p>\nWhy should I adopt a drain?\n<ul><li>Prevent flooding in your neighborhood by keeping drains free of debris.</li><li>Prevent pollutants from entering streams, creeks and Puget Sound, which protects fish and other wildlife.</li><li>Help the city maintain our infrastructure, especially during fall months when rain increases and falling leaves block drains.</li></ul>\n<p>If you adopt a drain, SPU may contact you to notify you of anticipated storms and flood events.</p>http://www.seattle.gov/util/environmentconservation/getinvolved/adoptadrain/",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:54.000Z",
        createdAt: "2022-08-20T05:03:54.000Z",
        metadata_updated_at: "2022-08-20T05:03:54.000Z",
        data_updated_at: "2022-08-20T05:03:54.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 1,
          page_views_total: 20,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.0,
          page_views_total_log: 4.392317422778761,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:54.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["adopt a drain", "drainage", "dww", "spu", "storm"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.3647,47.6001,-122.2915,47.6874",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=74555f20df694d88b325e870512cc1a7&sublayer=3",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::adopt-a-drain-crowd-adopted",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2017-05-24T21:01:28.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "PublicUtilities_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::adopt-a-drain-crowd-adopted",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisrevprxy.seattle.gov/arcgis/rest/services/SPU_EXT/AAD_Street_Drains/MapServer/3",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::adopt-a-drain-crowd-adopted.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::adopt-a-drain-crowd-adopted.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::adopt-a-drain-crowd-adopted.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::adopt-a-drain-crowd-adopted.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::adopt-a-drain-crowd-adopted",
        },
      },
      permalink: "https://data.seattle.gov/d/thny-muyz",
      link: "https://data.seattle.gov/dataset/Adopt-a-Drain-Crowd-Adopted/thny-muyz",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Land Use Zoning Development Assumptions",
        id: "9wvj-ju78",
        parent_fxf: [],
        description:
          "Table of development assumptions by land use zoning category to support the City of Seattle Zone Development Capacity Model.<div><br /></div><div>Assumptions include floor-area-ratio, residential density, split between residential and commercial floor area in mixed use zones, redevelopment ratio thresholds and conversions between floor area and housing units and jobs.</div><div><br /></div><div><b>Supporting Resources</b>:</div><div><a href='https://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/64461041c47a421586ef88c0193d43f3/data' target='_blank' rel='nofollow ugc noopener noreferrer'>Complete Data Dictionary</a><br /></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:14.000Z",
        createdAt: "2022-08-20T05:02:54.000Z",
        metadata_updated_at: "2022-11-18T19:01:14.000Z",
        data_updated_at: "2022-08-20T05:02:54.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 3,
          page_views_total: 20,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.0,
          page_views_total_log: 4.392317422778761,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:54.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "buildable lands",
          "capacity model current",
          "development capacity",
          "gis",
          "planning",
          "zoned capacity",
          "zoning",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-08-19T21:53:46.196Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=a6362e9c3a8d436cb1af3ba678258cce&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::land-use-zoning-development-assumptions",
          },
          {
            key: "Common-Core_Issued",
            value: "2021-03-11T02:45:07.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::land-use-zoning-development-assumptions",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/ZONE_EQV/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::land-use-zoning-development-assumptions.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::land-use-zoning-development-assumptions.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::land-use-zoning-development-assumptions",
        },
      },
      permalink: "https://data.seattle.gov/d/9wvj-ju78",
      link: "https://data.seattle.gov/dataset/Land-Use-Zoning-Development-Assumptions/9wvj-ju78",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Urban Watercourses",
        id: "x4xz-czct",
        parent_fxf: [],
        description:
          "<div style='text-align:Left;'><div><p><span><span>Perennial and intermittent natural surface water flow identified and recognized as a watercourse by the Seattle Public Utilities.</span></span></p><p><span><span>This layer displays the urban watercourses showing open stream channels and flow within culverts, drainage laterals, and drainage mainlines.  The Washington State Department of Natural Resources typing code for channel and fish use and the WRIA (Washington State Department of Ecology Water Resource Inventory Area) code are included.  <br /></span></span></p><p><span><span>Refreshed weekly.  Maintained by DWW Maintenance staff and USM.<br /></span></span></p></div></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-12-10T19:01:29.000Z",
        createdAt: "2022-12-10T19:01:29.000Z",
        metadata_updated_at: "2022-12-10T19:01:29.000Z",
        data_updated_at: "2022-12-10T19:01:29.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 5,
          page_views_total: 20,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.584962500721156,
          page_views_total_log: 4.392317422778761,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-12-10T19:01:29.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "drainage",
          "dww",
          "eca",
          "environment",
          "gis",
          "riparian",
          "river",
          "spu",
          "storm",
          "streams",
          "urban watercourses",
          "water",
          "wildlife",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:02.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4209,47.4903,-122.2500,47.7552",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=c7a60b04dc20449da8714cf026d2475d&sublayer=13",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::urban-watercourses",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-11-13T22:49:10.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "PublicUtilities_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::urban-watercourses",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/SPU/SPU_DWW/MapServer/13",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::urban-watercourses.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::urban-watercourses.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::urban-watercourses.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::urban-watercourses.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::urban-watercourses",
        },
      },
      permalink: "https://data.seattle.gov/d/x4xz-czct",
      link: "https://data.seattle.gov/dataset/Urban-Watercourses/x4xz-czct",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Building Outlines 2012",
        id: "bqs5-yzhd",
        parent_fxf: [],
        description:
          "<div style='text-align:Left;'><div><p><span>Building roof outlines derived from the 2012 orthophoto.</span></p></div></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-11T19:02:00.000Z",
        createdAt: "2022-11-11T19:02:00.000Z",
        metadata_updated_at: "2022-11-11T19:02:00.000Z",
        data_updated_at: "2022-11-11T19:02:00.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 3,
          page_views_total: 20,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.0,
          page_views_total_log: 4.392317422778761,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-11-11T19:02:00.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "2012",
          "boundaries",
          "building outlines",
          "buildings",
          "land",
          "planning",
          "seattle",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:02.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4291,47.4422,-122.2240,47.7360",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=c9e746d35b0d407c987db15373f6204d&sublayer=1",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::building-outlines-2012",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-11-09T16:43:53.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::building-outlines-2012",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/COS_Building_Outlines_2015/MapServer/1",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::building-outlines-2012.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::building-outlines-2012.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::building-outlines-2012.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::building-outlines-2012.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::building-outlines-2012",
        },
      },
      permalink: "https://data.seattle.gov/d/bqs5-yzhd",
      link: "https://data.seattle.gov/dataset/Building-Outlines-2012/bqs5-yzhd",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Single and Multi Family Residential",
        id: "4466-sk7z",
        parent_fxf: [],
        description:
          "<div style='text-align:left;'><p><span style='font-size:12pt;'>These layers are used as part of the City of Seattle Zoned Development Capacity Model </span><span style='font-size:16px;'>2016. Includes all input and output layers.</span><span style='font-size:12pt;'>.</span></p><p style='font-size:12pt;'><span></span></p><p style='font-size:12pt;'><span>To estimate potential development, the City of Seattle maintains a zoned development capacity model that compares existing development to an estimate of what could be built under current zoning. </span></p><p style='font-size:12pt;'><span></span></p><p style='font-size:12pt;'><span>The difference between existing and potential development yields the capacity for new residential and commercial development.</span></p><p style='font-size:12pt;'><span></span></p><p style='font-size:12pt;'><span>There is a </span><a href='https://www.seattle.gov/dpd/cs/groups/pan/@pan/documents/web_informational/p2182731.pdf' target='_blank' rel='nofollow ugc noopener noreferrer'>report</a><span> of summary findings available as part of Seattle 2035 as well as </span><a href='https://www.seattle.gov/opcd/population-and-demographics/zoned-development-capacity' target='_blank' rel='nofollow ugc noopener noreferrer'>resources</a><span> for reports, methodologies and data.</span></p><p style='font-size:12pt;'><span style='font-size:15px;'>When downloading the data, please select a layer and then &quot;GDB Download&quot; under &quot;Additional Resources&quot; to preserve long field names.  The associated file geodatabase contains all the feature classes for the 10 layers represented.<br /></span><span><br /></span></p></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:21.000Z",
        createdAt: "2022-08-20T05:03:05.000Z",
        metadata_updated_at: "2022-11-18T19:01:21.000Z",
        data_updated_at: "2022-08-20T05:03:05.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 1,
          page_views_total: 20,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.0,
          page_views_total_log: 4.392317422778761,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:05.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "buildable lands",
          "capacity",
          "capacity model 2016",
          "devcapapp",
          "development",
          "gis",
          "planning",
          "zoned capacity",
          "zoning",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2020-01-02T18:40:06.388Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4173,47.4936,-122.2439,47.7359",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=42863f1debdc47488a1c2b9edd38053e&sublayer=3",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::single-and-multi-family-residential",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-01-02T18:39:37.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::single-and-multi-family-residential",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Zoned_Development_Capacity_Layers_2016/FeatureServer/3",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::single-and-multi-family-residential.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::single-and-multi-family-residential.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::single-and-multi-family-residential.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::single-and-multi-family-residential.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::single-and-multi-family-residential",
        },
      },
      permalink: "https://data.seattle.gov/d/4466-sk7z",
      link: "https://data.seattle.gov/dataset/Single-and-Multi-Family-Residential/4466-sk7z",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Curb Ramps",
        id: "bvwr-d7yg",
        parent_fxf: [],
        description:
          "Curb Ramp features represent general location and attributes. Curb ramps provide access to the sidewalk system at street crossings and are usually located at intersections. Curb ramps may also be located mid-block. <br /><br />| Attribute Information: <a href='https://www.seattle.gov/Documents/Departments/SDOT/GIS/Curb_Ramps_OD.pdf' rel='nofollow ugc' target='_blank'>https://www.seattle.gov/Documents/Departments/SDOT/GIS/Curb_Ramps_OD.pdf</a> <br /><br />| Data Confidence: Medium <br />| Data Confidence Source: <a href='https://www.seattle.gov/Documents/Departments/SDOT/About/SDOT2015SCReportFinal12-7-2015.pdf' rel='nofollow ugc' target='_blank'>2015 SDOT Asset Management, Status and Condition Report</a> <br /><br />| Update Cycle: Weekly <br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' rel='nofollow ugc' target='_blank'>DOT_IT_GIS@seattle.gov</a>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:02:44.000Z",
        createdAt: "2022-08-20T05:02:44.000Z",
        metadata_updated_at: "2022-08-20T05:02:44.000Z",
        data_updated_at: "2022-08-20T05:02:44.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 2,
          page_views_total: 20,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.5849625007211563,
          page_views_total_log: 4.392317422778761,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:44.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "018",
          "ada",
          "crosswalk",
          "curb ramp",
          "gis",
          "pedestrian",
          "sdot",
          "seattle",
          "sidewalk",
          "street",
          "transportation",
          "wa",
          "wheelchair ramp",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4167,47.4942,-122.2477,47.7356",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=ca5f0460e33448a3a968fafbb03f0b3f&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::curb-ramps",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2017-09-19T15:44:16.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Transportation_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::curb-ramps",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Pedestrian/MapServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::curb-ramps.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::curb-ramps.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::curb-ramps.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::curb-ramps.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::curb-ramps",
        },
      },
      permalink: "https://data.seattle.gov/d/bvwr-d7yg",
      link: "https://data.seattle.gov/dataset/Curb-Ramps/bvwr-d7yg",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Adopt a Drain - Adopted Drains",
        id: "949h-x3pc",
        parent_fxf: [],
        description:
          "Adopt-a-Drain\nMaintaining Storm Drains:\n<p>Join volunteers across the city to maintain storm drains, a critical part of our utility infrastructure.</p>\n<p><a href='http://www.seattle.gov/util/EnvironmentConservation/GetInvolved/AdoptaDrain/Adopt-a-DrainSignup/index.htm' target=''>Sign up to adopt a storm drain</a> near your home or work. By registering, you commit to keeping the drain surface clear of leaves and other debris year round.</p>\n<p>If you have any questions, please contact us at <a href='mailto:adoptadrain@seattle.gov' target=''>adoptadrain@seattle.gov</a> or at (206) 233-7187.</p>\nWhy should I adopt a drain?\n<ul><li>Prevent flooding in your neighborhood by keeping drains free of debris.</li><li>Prevent pollutants from entering streams, creeks and Puget Sound, which protects fish and other wildlife.</li><li>Help the city maintain our infrastructure, especially during fall months when rain increases and falling leaves block drains.</li></ul>\n<p>If you adopt a drain, SPU may contact you to notify you of anticipated storms and flood events.</p>http://www.seattle.gov/util/environmentconservation/getinvolved/adoptadrain/",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:55.000Z",
        createdAt: "2022-08-20T05:03:55.000Z",
        metadata_updated_at: "2022-08-20T05:03:55.000Z",
        data_updated_at: "2022-08-20T05:03:55.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 1,
          page_views_total: 20,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.0,
          page_views_total_log: 4.392317422778761,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:55.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["adopt a drain", "drainage", "dww", "spu", "storm"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4209,47.4791,-122.2378,47.7575",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=2790f3d93aa44c8c9b43fc09956dd0b0&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::adopt-a-drain-adopted-drains",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2017-05-24T20:52:51.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "PublicUtilities_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::adopt-a-drain-adopted-drains",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisrevprxy.seattle.gov/arcgis/rest/services/SPU_EXT/AAD_Street_Drains/MapServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::adopt-a-drain-adopted-drains.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::adopt-a-drain-adopted-drains.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::adopt-a-drain-adopted-drains.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::adopt-a-drain-adopted-drains.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::adopt-a-drain-adopted-drains",
        },
      },
      permalink: "https://data.seattle.gov/d/949h-x3pc",
      link: "https://data.seattle.gov/dataset/Adopt-a-Drain-Adopted-Drains/949h-x3pc",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Shoreline Environments Overlay",
        id: "a5c7-xm94",
        parent_fxf: [],
        description:
          "<div style='font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size:16px;'><span style='font-family:inherit;'>Note:  This map is not an official zoning map.  For precise zoning information, please call or visit the Seattle Municipal Tower, </span><a href='https://www.seattle.gov/sdci/about-us' style='color:rgb(0, 121, 193); text-decoration-line:none; font-family:inherit; font-size:12pt;' target='_blank' rel='nofollow ugc noopener noreferrer'>Seattle Department of Construction and Inspections</a><br /></div><div style='font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size:16px;'><br /></div><span style='font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size:16px;'>City of Seattle's land use zoning overlay to implement the policy and provisions of the Shoreline Management Act.</span>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-06T19:05:11.000Z",
        createdAt: "2022-08-20T05:03:29.000Z",
        metadata_updated_at: "2023-01-06T19:05:11.000Z",
        data_updated_at: "2022-08-20T05:03:29.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 3,
          page_views_total: 20,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.0,
          page_views_total_log: 4.392317422778761,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:29.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["gis", "land use", "planning", "sdcizoningmap", "zoning"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-06-15T06:31:51.310Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4489,47.4884,-122.2265,47.7429",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=ee07551eae90422486a5db2d65515183&sublayer=23",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::shoreline-environments-overlay",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-06-11T23:15:35.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::shoreline-environments-overlay",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Shoreline_Environments/FeatureServer/23",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::shoreline-environments-overlay.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::shoreline-environments-overlay.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::shoreline-environments-overlay.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::shoreline-environments-overlay.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::shoreline-environments-overlay",
        },
      },
      permalink: "https://data.seattle.gov/d/a5c7-xm94",
      link: "https://data.seattle.gov/dataset/Shoreline-Environments-Overlay/a5c7-xm94",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Rent Burden Greater than 30%",
        id: "5r8b-yq7a",
        parent_fxf: [],
        description:
          "Displacement risk indicator showing how many households within the specified groups are facing housing cost burden (contributing more than 30% of monthly income toward housing costs) .",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:12.000Z",
        createdAt: "2022-08-20T05:03:11.000Z",
        metadata_updated_at: "2022-11-18T19:01:12.000Z",
        data_updated_at: "2022-08-20T05:03:11.000Z",
        page_views: {
          page_views_last_week: 3,
          page_views_last_month: 4,
          page_views_total: 19,
          page_views_last_week_log: 2.0,
          page_views_last_month_log: 2.321928094887362,
          page_views_total_log: 4.321928094887363,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:11.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["gis", "hdri", "ipums", "planning"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2021-05-04T01:19:48.289Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=c883ee52e7cb4f40b501eea460837515&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::rent-burden-greater-than-30",
          },
          {
            key: "Common-Core_Issued",
            value: "2020-04-17T17:27:22.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::rent-burden-greater-than-30",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Burden30/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::rent-burden-greater-than-30.geojson",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::rent-burden-greater-than-30.csv",
            },
            title: "CSV",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::rent-burden-greater-than-30",
        },
      },
      permalink: "https://data.seattle.gov/d/5r8b-yq7a",
      link: "https://data.seattle.gov/dataset/Rent-Burden-Greater-than-30-/5r8b-yq7a",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Traffic Cameras",
        id: "kiks-rep6",
        parent_fxf: [],
        description:
          "To display the location of Traffic Cameras maintained by SDOT and WSDOT for cartographic, analysis, and tracking purposes in the Seattle area.  Along with live images from those camera’s locations.  <br /><br />| Attribute Information: <a href='https://www.seattle.gov/Documents/Departments/SDOT/GIS/Traffic_Cameras_OD.pdf' rel='nofollow ugc' target='_blank'>\nhttps://www.seattle.gov/Documents/Departments/SDOT/GIS/Traffic_Cameras_OD.pdf</a> <br /><br />| Data Confidence: Medium   \n<br />| Data Confidence Source: <a href='https://www.seattle.gov/Documents/Departments/SDOT/About/SDOT2015SCReportFinal12-7-2015.pdf' rel='nofollow ugc' target='_blank'>2015 SDOT Asset Management, Status and Condition Report</a> <br /><br />| Update Cycle: Weekly <br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' rel='nofollow ugc' target='_blank'>DOT_IT_GIS@seattle.gov</a>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-08T19:04:56.000Z",
        createdAt: "2023-01-08T19:04:56.000Z",
        metadata_updated_at: "2023-01-08T19:04:56.000Z",
        data_updated_at: "2023-01-08T19:04:56.000Z",
        page_views: {
          page_views_last_week: 3,
          page_views_last_month: 19,
          page_views_total: 19,
          page_views_last_week_log: 2.0,
          page_views_last_month_log: 4.321928094887363,
          page_views_total_log: 4.321928094887363,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2023-01-08T19:04:56.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "018",
          "cameras",
          "gis",
          "sdot",
          "seattle",
          "traffic",
          "transportation",
          "wa",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.3854,47.2801,-122.0497,48.0515",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=b4e83ad5c089451bb99cce429c5b4659&sublayer=9",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::traffic-cameras",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2017-09-19T15:51:00.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Transportation_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::traffic-cameras",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Assets/MapServer/9",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::traffic-cameras.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::traffic-cameras.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::traffic-cameras.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::traffic-cameras.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::traffic-cameras",
        },
      },
      permalink: "https://data.seattle.gov/d/kiks-rep6",
      link: "https://data.seattle.gov/dataset/Traffic-Cameras/kiks-rep6",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Tree Canopy 2003",
        id: "9ahd-ymtg",
        parent_fxf: [],
        description:
          "Urban Forest Canopy was created from LIDAR data to determine the volume of Forest Canopy in the City of Seattle. The work was done in 2003 by a consultant under contract by Seattle Parks Horticulture (Urban Forestry).",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-08T19:04:59.000Z",
        createdAt: "2023-01-08T19:04:59.000Z",
        metadata_updated_at: "2023-01-08T19:04:59.000Z",
        data_updated_at: "2023-01-08T19:04:59.000Z",
        page_views: {
          page_views_last_week: 3,
          page_views_last_month: 19,
          page_views_total: 19,
          page_views_last_week_log: 2.0,
          page_views_last_month_log: 4.321928094887363,
          page_views_total_log: 4.321928094887363,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2023-01-08T19:04:59.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "city of seattle",
          "environment",
          "gis",
          "seattle",
          "tree",
          "tree canopy",
          "trees",
          "urban forest",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4291,47.4914,-122.2392,47.7377",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=b91644bc6c014f2ba8fa367f29925aa6&sublayer=1",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::tree-canopy-2003",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-05-10T19:00:04.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::tree-canopy-2003",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/Tree_Canopy/MapServer/1",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::tree-canopy-2003.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::tree-canopy-2003.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::tree-canopy-2003.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::tree-canopy-2003.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::tree-canopy-2003",
        },
      },
      permalink: "https://data.seattle.gov/d/9ahd-ymtg",
      link: "https://data.seattle.gov/dataset/Tree-Canopy-2003/9ahd-ymtg",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Planned Bike Facilities",
        id: "iv9j-pj35",
        parent_fxf: [],
        description:
          "Bicycle-related street and off-street (trail) improvements which consist of markings and hardscape that are intended to improve the movement of bicycles through the city. Planned facilities are taken from the current Seattle Bicycle Master Plan and are subject to change as projects within the city are evaluated for their feasibility.  <br /><br />| Attribute Information: <a href='https://www.seattle.gov/Documents/Departments/SDOT/GIS/Planned_Bike_Facilities_OD.pdf' target='_blank'>https://www.seattle.gov/Documents/Departments/SDOT/GIS/Planned_Bike_Facilities_OD.pdf</a> <br /><br />| Update Cycle: As Needed <br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' target='_blank'>DOT_IT_GIS@seattle.gov</a>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-01T19:04:50.000Z",
        createdAt: "2023-01-01T19:04:50.000Z",
        metadata_updated_at: "2023-01-01T19:04:50.000Z",
        data_updated_at: "2023-01-01T19:04:50.000Z",
        page_views: {
          page_views_last_week: 3,
          page_views_last_month: 19,
          page_views_total: 19,
          page_views_last_week_log: 2.0,
          page_views_last_month_log: 4.321928094887363,
          page_views_total_log: 4.321928094887363,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2023-01-01T19:04:50.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "018",
          "bicycles",
          "bike lanes",
          "bike master plan",
          "buffered bike lanes",
          "gis",
          "greenways",
          "in street separation",
          "neighborhood greenways",
          "policy and planning",
          "sdot",
          "seattle",
          "sharrows",
          "trails",
          "transportation",
          "wa",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2018-04-02T00:00:00.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4288,47.4959,-122.2433,47.7355",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=f5b80ce716bc437c9a231d8e99f069bb&sublayer=2",
          },
          { key: "Common-Core_Publisher", value: "Seattle IT" },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::planned-bike-facilities",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-03-30T19:28:09.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Transportation_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::planned-bike-facilities",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Bikes/MapServer/2",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::planned-bike-facilities.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::planned-bike-facilities.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::planned-bike-facilities.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::planned-bike-facilities.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
          {
            urls: {
              unknown:
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Bikes/MapServer/2",
            },
          },
          {
            urls: {
              PDF: "https://www.seattle.gov/Documents/Departments/SDOT/GIS/Planned_Bike_Facilities_OD.pdf",
            },
            description:
              "PDF metadata with General Information, Contact information, and Attribute Information(name, data type and   length, description)",
            title: "Attribute Information\\Metadata",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::planned-bike-facilities",
        },
      },
      permalink: "https://data.seattle.gov/d/iv9j-pj35",
      link: "https://data.seattle.gov/dataset/Planned-Bike-Facilities/iv9j-pj35",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Existing Bike Facilities",
        id: "2z9z-u7sn",
        parent_fxf: [],
        description:
          "Bicycle-related street and off-street (trail) improvements which consist of markings and hardscape that are intended to improve the movement of bicycles through the city.  Existing facilities include all infrastructure currently on the ground and vary from dedicated off-street trails to shared roadway markings (sharrows).  <br /><br />| Attribute Information: <a href='https://www.seattle.gov/Documents/Departments/SDOT/GIS/Existing_Bike_Facilities_OD.pdf' target='_blank'>https://www.seattle.gov/Documents/Departments/SDOT/GIS/Existing_Bike_Facilities_OD.pdf</a> <br /><br />| Update Cycle: As Needed <br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' target='_blank'>DOT_IT_GIS@seattle.gov</a>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-12-28T19:03:10.000Z",
        createdAt: "2022-12-28T19:03:10.000Z",
        metadata_updated_at: "2022-12-28T19:03:10.000Z",
        data_updated_at: "2022-12-28T19:03:10.000Z",
        page_views: {
          page_views_last_week: 4,
          page_views_last_month: 19,
          page_views_total: 19,
          page_views_last_week_log: 2.321928094887362,
          page_views_last_month_log: 4.321928094887363,
          page_views_total_log: 4.321928094887363,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-12-28T19:03:10.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "018",
          "bicycles",
          "bike lanes",
          "bike master plan",
          "buffered bike lanes",
          "gis",
          "greenways",
          "in street separation",
          "neighborhood greenways",
          "policy and planning",
          "sdot",
          "seattle",
          "sharrows",
          "trails",
          "transportation",
          "wa",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2018-04-02T00:00:00.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4288,47.4959,-122.2433,47.7355",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=f4f509fa13504fb7957cef168fad74f0&sublayer=1",
          },
          { key: "Common-Core_Publisher", value: "Seattle IT" },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::existing-bike-facilities",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-03-30T19:46:20.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Transportation_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::existing-bike-facilities",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Bikes/MapServer/1",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::existing-bike-facilities.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::existing-bike-facilities.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::existing-bike-facilities.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::existing-bike-facilities.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
          {
            urls: {
              unknown:
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Bikes/MapServer/1",
            },
          },
          {
            urls: {
              PDF: "https://www.seattle.gov/Documents/Departments/SDOT/GIS/Existing_Bike_Facilities_OD.pdf",
            },
            description:
              "PDF metadata with General Information, Contact information, and Attribute Information(name, data type and   length, description)",
            title: "Attribute Information\\Metadata",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::existing-bike-facilities",
        },
      },
      permalink: "https://data.seattle.gov/d/2z9z-u7sn",
      link: "https://data.seattle.gov/dataset/Existing-Bike-Facilities/2z9z-u7sn",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Fire Stations",
        id: "uxab-a9vu",
        parent_fxf: [],
        description:
          "Fire stations located throughout the city. Also includes the location of Harborview Medical Center.",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:02:52.000Z",
        createdAt: "2022-08-20T05:02:52.000Z",
        metadata_updated_at: "2022-08-20T05:02:52.000Z",
        data_updated_at: "2022-08-20T05:02:52.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 6,
          page_views_total: 18,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.807354922057604,
          page_views_total_log: 4.247927513443585,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:52.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "fire",
          "fire stations",
          "public safety",
          "seattle fire department",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:02.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.3967,47.5142,-122.2744,47.7241",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=0e854f6ec071451e9b720c3a9ca8e477&sublayer=4",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::fire-stations",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2018-12-04T22:15:36.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::fire-stations",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/COS_Public_Facilities_and_Safety/MapServer/4",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::fire-stations.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::fire-stations.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::fire-stations.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::fire-stations.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::fire-stations",
        },
      },
      permalink: "https://data.seattle.gov/d/uxab-a9vu",
      link: "https://data.seattle.gov/dataset/Fire-Stations/uxab-a9vu",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Radar Speed Signs",
        id: "2528-tz89",
        parent_fxf: [],
        description:
          "Display the location of radar speed signs owned by SDOT for cartographic, analysis, and tracking purposes.  <br /><br />| Attribute Information: <a href='https://www.seattle.gov/Documents/Departments/SDOT/GIS/Radar_Speed_Signs_OD.pdf' rel='nofollow ugc' target='_blank'>https://www.seattle.gov/Documents/Departments/SDOT/GIS/Radar_Speed_Signs_OD.pdf</a> <br /><br />| Data Confidence: Medium <br />| Data Confidence Source: <a href='https://www.seattle.gov/Documents/Departments/SDOT/About/SDOT2015SCReportFinal12-7-2015.pdf' rel='nofollow ugc' target='_blank'>2015 SDOT Asset Management, Status and Condition Report</a> <br /><br />| Update Cycle: Weekly <br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' rel='nofollow ugc' target='_blank'>DOT_IT_GIS@seattle.gov</a>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-08T19:05:01.000Z",
        createdAt: "2023-01-08T19:05:01.000Z",
        metadata_updated_at: "2023-01-08T19:05:01.000Z",
        data_updated_at: "2023-01-08T19:05:01.000Z",
        page_views: {
          page_views_last_week: 4,
          page_views_last_month: 18,
          page_views_total: 18,
          page_views_last_week_log: 2.321928094887362,
          page_views_last_month_log: 4.247927513443585,
          page_views_total_log: 4.247927513443585,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2023-01-08T19:05:01.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "018",
          "gis",
          "radar",
          "sdot",
          "seattle",
          "signs",
          "speed",
          "traffic",
          "transportation",
          "wa",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.3942,47.5055,-122.2510,47.7310",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=b12e311ff0ee47b99f81dbe9abe7ca19&sublayer=10",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::radar-speed-signs",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2017-09-19T15:52:05.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Transportation_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::radar-speed-signs",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Assets/MapServer/10",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::radar-speed-signs.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::radar-speed-signs.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::radar-speed-signs.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::radar-speed-signs.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::radar-speed-signs",
        },
      },
      permalink: "https://data.seattle.gov/d/2528-tz89",
      link: "https://data.seattle.gov/dataset/Radar-Speed-Signs/2528-tz89",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Residential Building Permits Issued not yet complete",
        id: "3h94-bm6n",
        parent_fxf: [],
        description:
          "<p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'>Permit records from the City of Seattle permitting system for building permits that create or demolish housing units. Records begin in 1990 and are through the current year quarter.</p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'></p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'>The permits in this layer are those that are currently issued. This data does not contain records for those permits that were issued but were not completed, cancelled or withdrawn.</p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'></p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'>Each record represents the number of units added or demolished for each housing type in the project. Therefore a single building permit may appear multiple times if there are a mix of unit types in the project.</p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'></p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'>Housing unit types reflect the unit types regulated by the building codes and change through time. There has been no attempt to standardize these types and therefore reflect the unit types that existed at the time the permit was issued.</p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'></p><p style='font-family: &quot;Avenir LT W01 35 Light&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;'>There may be multiple permits at any given address.</p>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-12-23T19:04:09.000Z",
        createdAt: "2022-08-20T05:03:28.000Z",
        metadata_updated_at: "2022-12-23T19:04:09.000Z",
        data_updated_at: "2022-08-20T05:03:28.000Z",
        page_views: {
          page_views_last_week: 3,
          page_views_last_month: 5,
          page_views_total: 18,
          page_views_last_week_log: 2.0,
          page_views_last_month_log: 2.584962500721156,
          page_views_total_log: 4.247927513443585,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:28.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["gis", "housing units", "permits", "planning"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-12-20T23:47:55.448Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4173,47.4938,-122.2427,47.7355",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=a2ad110c60b643a4ba8f3d1ff2b695bb&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::residential-building-permits-issued-not-yet-complete",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-01-05T21:29:09.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::residential-building-permits-issued-not-yet-complete",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Residential_Building_Permits_Issued_not_yet_complete/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::residential-building-permits-issued-not-yet-complete.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::residential-building-permits-issued-not-yet-complete.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::residential-building-permits-issued-not-yet-complete.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::residential-building-permits-issued-not-yet-complete.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::residential-building-permits-issued-not-yet-complete",
        },
      },
      permalink: "https://data.seattle.gov/d/3h94-bm6n",
      link: "https://data.seattle.gov/dataset/Residential-Building-Permits-Issued-not-yet-comple/3h94-bm6n",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Community Reporting Areas",
        id: "qz9k-mixr",
        parent_fxf: [],
        description:
          "<div><b>Please Note</b>:  Community Reporting Areas (CRA) have been updated to follow the 2020 census tract lines which resulted in minor changes to some boundary conditions.  They have also been extended into water areas to allow the assignment of CRAs to overwater housing and businesses.  To exclude the water polygons from a map choose the filter, water=0.</div><div><br /></div>Community reporting areas (CRAs) are designed to address a gap that existed in city geography. The task of reporting citywide information at a &quot;community-like level&quot; across all departments was either not undertaken or it was handled in inconsistent ways across departments. <div><br /></div><div>The CRA geography provides a &quot;common language&quot; for geographic description of the city for reporting purposes. Therefore, this geography may be used by departments for geographic reporting and tracking purposes, as appropriate.  The U.S. Census Bureau census tract geography was chosen as the basis of the CRA geography due to their stability through time and link to widely-used demographic data.</div><div><br /></div><div>The following criteria for a CRA geography were defined for this effort:</div><div><ul><li>no overlapping areas</li><li>complete coverage of the city</li><li>suitable scale to represent neighborhood areas/conditions</li><li>reasonably stable over time</li><li>consistent with census geography</li><li>relatively easy to use in a data context</li><li>familiar system of common place names</li><li>respects neighborhood district geography to the extent possible</li></ul></div><div>The following existing geographies were reviewed during this effort:</div><div><ul><li>neighborhood planning areas (DON)</li><li>neighborhood districts (DON/CNC/Neighborhood District Councils)</li><li>city sectors/neighborhood plan implementation areas (DON)</li><li>urban centers/urban villages (DPD)</li><li>population sub-areas (DPD)</li><li>Neighborhood Map Atlas (City Clerk)</li><li>Census tract geography</li><li>topography</li><li>various other geographic information sources related to neighborhood areas and common place names</li></ul></div><div>This is not an attempt to identify neighborhood boundaries as defined by neighborhoods themselves.<br /></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:19.000Z",
        createdAt: "2022-08-20T05:03:37.000Z",
        metadata_updated_at: "2022-11-18T19:01:19.000Z",
        data_updated_at: "2022-08-20T05:03:37.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 3,
          page_views_total: 18,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.0,
          page_views_total_log: 4.247927513443585,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:37.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "community reporting area",
          "cra",
          "gis",
          "neighborhoods",
          "planning",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-06-28T19:39:41.603Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4360,47.4924,-122.2259,47.7363",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=23e2cd44d0b248c5ba6115eaee6df9cf&sublayer=43",
          },
          {
            key: "Common-Core_Publisher",
            value:
              "DON (T.J. Moore) in conjunction with input from DON staff (particularly Sid Sidorowicz and Brent Crook) and DPD staff (Jennifer Pettyjohn and Diana Cornelius)",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::community-reporting-areas-3",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-04-21T17:09:23.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::community-reporting-areas-3",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/CITYPLAN_CRA/FeatureServer/43",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::community-reporting-areas-3.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::community-reporting-areas-3.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::community-reporting-areas-3.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::community-reporting-areas-3.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::community-reporting-areas-3",
        },
      },
      permalink: "https://data.seattle.gov/d/qz9k-mixr",
      link: "https://data.seattle.gov/dataset/Community-Reporting-Areas/qz9k-mixr",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Seattle Parks",
        id: "85ah-xde9",
        parent_fxf: [],
        description:
          "<p><span>Parks or properties maintained or managed by Seattle Parks that are within the city limits. Park properties include offices or other park maintained or managed buildings.</span><br /></p><div><span><div></div><div>Includes properties that are managed by Seattle Parks.  Also, includes parks that may not be a &quot;park&quot; but offices or buildings.</div></span><br /></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:17.000Z",
        createdAt: "2022-08-20T05:03:17.000Z",
        metadata_updated_at: "2022-08-20T05:03:17.000Z",
        data_updated_at: "2022-08-20T05:03:17.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 3,
          page_views_total: 18,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.0,
          page_views_total_log: 4.247927513443585,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:17.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "buildings",
          "city limits",
          "cityofseattle",
          "cosgis",
          "department of parks and recreation",
          "seattle",
          "seattlecitygis",
          "seattle parks",
          "seattlepublicuse",
          "wa",
          "wm_dpr_parksbnd",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4349,47.4965,-122.2469,47.7356",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=94adf91951234a80b124238533f9e042&sublayer=5",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-parks",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2012-04-24T21:56:42.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-parks",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/COS_OutdoorsMisc/MapServer/5",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-parks.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-parks.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-parks.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-parks.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::seattle-parks",
        },
      },
      permalink: "https://data.seattle.gov/d/85ah-xde9",
      link: "https://data.seattle.gov/dataset/Seattle-Parks/85ah-xde9",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Contour Lines 1993",
        id: "k6z6-pbug",
        parent_fxf: [],
        description:
          "<div><span><div>A line feature class showing 2 ft. and 10 ft. elevation contours. Derived from 1993 digital orthophotos - has not been updated.</div><div><br /></div><div>Because of the size of this dataset, we do not recommend trying to download it. Please use as a service. If you need a particular area extracted, please use this form to make a request:</div><div><a href='https://forms.office.com/Pages/ResponsePage.aspx?id=RR7meOtrCUCPmTWdi1T0G9zIhm_E9thFiIFY5ws9oKtUQUlNU0hTQ0pGQlhOUDNSOExZQlhXM01INi4u' rel='nofollow ugc' target='_blank'>City of Seattle GIS Data Request</a><br /></div></span><br /></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:50.000Z",
        createdAt: "2022-08-20T05:03:50.000Z",
        metadata_updated_at: "2022-08-20T05:03:50.000Z",
        data_updated_at: "2022-08-20T05:03:50.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 1,
          page_views_total: 18,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.0,
          page_views_total_log: 4.247927513443585,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:50.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "boundaries",
          "contours",
          "cosgis",
          "dso",
          "elevation",
          "gis",
          "orthophotos",
          "seattle",
          "seattlecitygis",
          "seattle contours",
          "seattlepublicuse",
          "terrain and environmental",
          "wa",
          "wm_cgdb_contour1993_ln",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4292,47.4423,-122.2248,47.7802",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=1545ab0b0fcc492886be92be25a9faa5&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::contour-lines-1993",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2012-04-24T19:46:17.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::contour-lines-1993",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/Contours_1993/MapServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::contour-lines-1993.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::contour-lines-1993.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::contour-lines-1993.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::contour-lines-1993.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
          {
            urls: {
              unknown:
                "https://gisdata.seattle.gov/server/rest/services/COS/Contours_1993/MapServer",
            },
          },
          {
            urls: {
              unknown:
                "http://seattlecitygis.maps.arcgis.com/sharing/rest/content/items/c662b9987b754e4e81fa3538a79aaab8/data",
            },
            title: "Contour Lines 1993 Metadata",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::contour-lines-1993",
        },
      },
      permalink: "https://data.seattle.gov/d/k6z6-pbug",
      link: "https://data.seattle.gov/dataset/Contour-Lines-1993/k6z6-pbug",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Single-Family Home Sale Prices by Census Tract",
        id: "t8uw-kjzm",
        parent_fxf: [],
        description:
          "Displacement risk indicator classifying census tracts according to \nsingle-family home sale prices. Each census tract where at least 100 \nsingle-family homes were sold in arms-length transactions are classified\n along two dimensions:<br /><ol><li>The average price of sales within the \ncensus tract for the specified year, balancing between nominal sale \nprice and sale price per square foot.</li><li>The change in average sale price (again balanced between nominal sale price and price per square foot) from the previous year.</li></ol>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-11-18T19:01:17.000Z",
        createdAt: "2022-08-20T05:02:54.000Z",
        metadata_updated_at: "2022-11-18T19:01:17.000Z",
        data_updated_at: "2022-08-20T05:02:54.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 2,
          page_views_total: 18,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 1.5849625007211563,
          page_views_total_log: 4.247927513443585,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:02:54.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: ["gis", "hdri", "king county assessor", "planning"],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2021-05-04T01:16:37.445Z",
          },
          {
            key: "Common-Core_License",
            value: "http://opendatacommons.org/licenses/pddl/summary",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4382,47.4933,-122.2356,47.7357",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=faf7208241dd48d09a17a49c49f74560&sublayer=0",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::single-family-home-sale-prices-by-census-tract",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2020-03-13T17:44:27.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Planning_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::single-family-home-sale-prices-by-census-tract",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/Typology/FeatureServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::single-family-home-sale-prices-by-census-tract.geojson?outSR=%7B%22latestWkid%22%3A4326%2C%22wkid%22%3A4326%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::single-family-home-sale-prices-by-census-tract.csv?outSR=%7B%22latestWkid%22%3A4326%2C%22wkid%22%3A4326%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::single-family-home-sale-prices-by-census-tract.kml?outSR=%7B%22latestWkid%22%3A4326%2C%22wkid%22%3A4326%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::single-family-home-sale-prices-by-census-tract.zip?outSR=%7B%22latestWkid%22%3A4326%2C%22wkid%22%3A4326%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::single-family-home-sale-prices-by-census-tract",
        },
      },
      permalink: "https://data.seattle.gov/d/t8uw-kjzm",
      link: "https://data.seattle.gov/dataset/Single-Family-Home-Sale-Prices-by-Census-Tract/t8uw-kjzm",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "2018 Traffic Flow Counts",
        id: "mbft-ptia",
        parent_fxf: [],
        description:
          "Vehicle traffic volumes for arterial streets in Seattle based on spot studies that have been adjusted for seasonal variation.  <br /><br />| Additional Information: <a href='https://www.seattle.gov/transportation/sdot-document-library/reports-and-studies' target='_blank'>2019 Traffic Report(will be published fall 2019)</a><br />| Attribute Information: <a href='https://drive.google.com/open?id=1H-ooaihoawm8zXjZz_-AhBmwyRiT1FWQ' target='_blank'>2018_Traffic_Flow_Counts_OD.pdf </a><br /><br />| Update Cycle: As Needed <br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' target='_blank'>DOT_IT_GIS@seattle.gov</a>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-08T19:05:01.000Z",
        createdAt: "2023-01-08T19:05:01.000Z",
        metadata_updated_at: "2023-01-08T19:05:01.000Z",
        data_updated_at: "2023-01-08T19:05:01.000Z",
        page_views: {
          page_views_last_week: 5,
          page_views_last_month: 18,
          page_views_total: 18,
          page_views_last_week_log: 2.584962500721156,
          page_views_last_month_log: 4.247927513443585,
          page_views_total_log: 4.247927513443585,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2023-01-08T19:05:01.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "018",
          "2018",
          "counts",
          "flow",
          "gis",
          "sdot",
          "seattle",
          "traffic",
          "transportation",
          "volume",
          "wa",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:02.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4113,47.4940,-122.2433,47.7357",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=a35aa9249110472ba2c69cc574eff984&sublayer=11",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2018-traffic-flow-counts",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2019-08-05T16:21:00.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Transportation_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2018-traffic-flow-counts",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Traffic_Volume/MapServer/11",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2018-traffic-flow-counts.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2018-traffic-flow-counts.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2018-traffic-flow-counts.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::2018-traffic-flow-counts.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::2018-traffic-flow-counts",
        },
      },
      permalink: "https://data.seattle.gov/d/mbft-ptia",
      link: "https://data.seattle.gov/dataset/2018-Traffic-Flow-Counts/mbft-ptia",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Public Schools",
        id: "wf3u-h4jq",
        parent_fxf: [],
        description:
          "A point feature class showing public schools. It also provides information on its exact location, phone number, and grades served. ",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2023-01-08T19:04:59.000Z",
        createdAt: "2023-01-08T19:04:59.000Z",
        metadata_updated_at: "2023-01-08T19:04:59.000Z",
        data_updated_at: "2023-01-08T19:04:59.000Z",
        page_views: {
          page_views_last_week: 2,
          page_views_last_month: 17,
          page_views_total: 17,
          page_views_last_week_log: 1.5849625007211563,
          page_views_last_month_log: 4.169925001442312,
          page_views_total_log: 4.169925001442312,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2023-01-08T19:04:59.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "cosgis",
          "public",
          "public facility",
          "schools",
          "seattle",
          "seattlecitygis",
          "wa",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4054,47.4970,-122.2644,47.7266",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=a2e1128bd7a041358ce455c628ec9834&sublayer=8",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::public-schools",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2012-12-13T17:58:29.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::public-schools",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/COS_Public_Facilities_and_Safety/MapServer/8",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::public-schools.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::public-schools.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::public-schools.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::public-schools.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::public-schools",
        },
      },
      permalink: "https://data.seattle.gov/d/wf3u-h4jq",
      link: "https://data.seattle.gov/dataset/Public-Schools/wf3u-h4jq",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Census Tracts 2010",
        id: "ftpc-qwmq",
        parent_fxf: [],
        description:
          "Census Tracts are small, relatively permanent statistical subdivisions \nof a county or equivalent entity that are updated by local participants \nprior to each decennial census as part of the Census Bureau's \nParticipant Statistical Areas Program. The Census Bureau delineates \ncensus tracts in situations where no local participant existed or where \nstate, local, or tribal governments declined to participate. The primary\n purpose of census tracts is to provide a stable set of geographic units\n for the presentation of statistical data.\nCensus tracts generally have a population size between 1,200 and 8,000 \npeople, with an optimum size of 4,000 people. A census tract usually \ncovers a contiguous area; however, the spatial size of census tracts \nvaries widely depending on the density of settlement. Census tract \nboundaries are delineated with the intention of being maintained over a \nlong time so that statistical comparisons can be made from census to \ncensus. Census tracts occasionally are split due to population growth or\n merged as a result of substantial population decline.",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-12-30T19:05:05.000Z",
        createdAt: "2022-12-30T19:05:05.000Z",
        metadata_updated_at: "2022-12-30T19:05:05.000Z",
        data_updated_at: "2022-12-30T19:05:05.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 17,
          page_views_total: 17,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 4.169925001442312,
          page_views_total_log: 4.169925001442312,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-12-30T19:05:05.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "2010",
          "boundaries",
          "census",
          "cosgis",
          "gis",
          "planning",
          "seattle",
          "seattlecitygis",
          "tract",
          "wa",
          "wm_census_tract10",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4537,47.4811,-122.2281,47.7359",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=de58dc3e1efc49b782ab357e044ea20c&sublayer=9",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::census-tracts-2010",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2012-07-13T16:35:51.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "site.admin_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::census-tracts-2010",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/COS/Census_OpenData/MapServer/9",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::census-tracts-2010.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::census-tracts-2010.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::census-tracts-2010.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::census-tracts-2010.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::census-tracts-2010",
        },
      },
      permalink: "https://data.seattle.gov/d/ftpc-qwmq",
      link: "https://data.seattle.gov/dataset/Census-Tracts-2010/ftpc-qwmq",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Streetcar Stations",
        id: "2w3f-6acx",
        parent_fxf: [],
        description:
          "Streetcar Stations in Seattle.  Contains stations/stops on the South Lake Union and First Hill Line.  <br /><br />| Attribute Information: <a href='https://www.seattle.gov/Documents/Departments/SDOT/GIS/Streetcar_Stations_OD.pdf' target='_blank'>https://www.seattle.gov/Documents/Departments/SDOT/GIS/Streetcar_Stations_OD.pdf</a> <br /><br />| Update Cycle: As Needed <br />| Contact Email: <a href='mailto:DOT_IT_GIS@seattle.gov' target='_blank'>DOT_IT_GIS@seattle.gov</a>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-08-20T05:03:03.000Z",
        createdAt: "2022-08-20T05:03:03.000Z",
        metadata_updated_at: "2022-08-20T05:03:03.000Z",
        data_updated_at: "2022-08-20T05:03:03.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 2,
          page_views_total: 17,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.5849625007211563,
          page_views_total_log: 4.169925001442312,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:03.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "018",
          "first hill",
          "gis",
          "sdot",
          "seattle",
          "south lake union",
          "stations",
          "streetcar",
          "transit",
          "transportation",
          "wa",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.3378,47.5954,-122.3149,47.6279",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=c720c7cd9ac740c49b953a4ffd3dad1b&sublayer=0",
          },
          { key: "Common-Core_Publisher", value: "Seattle IT" },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::streetcar-stations",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2017-09-19T18:47:30.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "Transportation_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::streetcar-stations",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/SDOT/SDOT_Transit/MapServer/0",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::streetcar-stations.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::streetcar-stations.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::streetcar-stations.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::streetcar-stations.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::streetcar-stations",
        },
      },
      permalink: "https://data.seattle.gov/d/2w3f-6acx",
      link: "https://data.seattle.gov/dataset/Streetcar-Stations/2w3f-6acx",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "High School Attendance Areas 2022-2023",
        id: "b4ma-znvq",
        parent_fxf: [],
        description:
          "<div style='text-align:Left; font-size:12pt;'><p><span>An attendance area school is one to which elementary, middle and high-school students are assigned based on where they live, as long as the school offers the services the student needs.</span></p><div style='font-size:15px;'><a href='https://protect2.fireeye.com/v1/url?k=31323334-50bba2bf-31321b84-4544474f5631-d1a72587f77a54d6&amp;q=1&amp;e=0a30ecb3-4eb6-44e1-a3c7-a8853ddc5f5c&amp;u=https%3A%2F%2Fwww.seattleschools.org%2Fdepartments%2Fenrollment-planning%2F' rel='nofollow ugc'>https://www.seattleschools.org/departments/enrollment-planning/</a><br /></div><div style='font-size:15px;'><p>For questions, please contact <a href='mailto:enrollmentplanning@seattleschools.org' rel='nofollow ugc'>enrollmentplanning@seattleschools.org</a></p></div></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-12-03T19:04:39.000Z",
        createdAt: "2022-08-20T05:03:40.000Z",
        metadata_updated_at: "2022-12-03T19:04:39.000Z",
        data_updated_at: "2022-08-20T05:03:40.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 1,
          page_views_total: 17,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 1.0,
          page_views_total_log: 4.169925001442312,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-08-20T05:03:40.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "attendance",
          "attendance areas",
          "gis",
          "high school",
          "public school",
          "schools",
          "seattle",
          "seattle public schools",
          "sps",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-12-02T17:20:29.933Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='font-family:&quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size:16px;'>This data is edited and maintained by Seattle Public Schools. Any changes are at their discretion.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4329,47.4933,-122.2401,47.7359",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=4323fbb73e0b475dab933817299d1531&sublayer=1",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::high-school-attendance-areas-2022-2023",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2022-07-07T21:12:13.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "City_Seattle_GIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::high-school-attendance-areas-2022-2023",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://services2.arcgis.com/I7NQBinfvOmxQbXs/arcgis/rest/services/High_School_Attendance_Areas/FeatureServer/1",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::high-school-attendance-areas-2022-2023.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::high-school-attendance-areas-2022-2023.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::high-school-attendance-areas-2022-2023.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::high-school-attendance-areas-2022-2023.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::high-school-attendance-areas-2022-2023",
        },
      },
      permalink: "https://data.seattle.gov/d/b4ma-znvq",
      link: "https://data.seattle.gov/dataset/High-School-Attendance-Areas-2022-2023/b4ma-znvq",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
    {
      resource: {
        name: "Drainage Basins",
        id: "3fkq-6k5p",
        parent_fxf: [],
        description:
          "<div>A polygon feature class showing drainage basins. It includes information about the basin's area in square feet and acres. It also shares information on nearby water bodies.</div><div>Areas that drain to a receiving water body via outfall(s) in the formal or piped infrastructure. <br /></div>",
        attribution: null,
        attribution_link: null,
        contact_email: "mailto:mapgis.mapgis@seattle.gov",
        type: "federated_href",
        updatedAt: "2022-12-10T19:01:33.000Z",
        createdAt: "2022-12-10T19:01:33.000Z",
        metadata_updated_at: "2022-12-10T19:01:33.000Z",
        data_updated_at: "2022-12-10T19:01:33.000Z",
        page_views: {
          page_views_last_week: 1,
          page_views_last_month: 3,
          page_views_total: 16,
          page_views_last_week_log: 1.0,
          page_views_last_month_log: 2.0,
          page_views_total_log: 4.08746284125034,
        },
        columns_name: [],
        columns_field_name: [],
        columns_datatype: [],
        columns_description: [],
        columns_format: [],
        download_count: 0,
        provenance: "official",
        lens_view_type: "href",
        lens_display_type: "federated",
        blob_mime_type: null,
        hide_from_data_json: false,
        publication_date: "2022-12-10T19:01:33.000Z",
      },
      classification: {
        categories: [],
        tags: [],
        domain_tags: [
          "basins",
          "cosgis",
          "drainage",
          "drainage basins",
          "drains",
          "dww",
          "environment",
          "environmental",
          "land use",
          "seattle",
          "seattlecitygis",
          "soil",
          "spu",
          "storm",
          "utilities",
          "wa",
          "water",
          "water body",
          "watershed",
        ],
        domain_metadata: [
          {
            key: "Common-Core_Contact-Email",
            value: "mailto:mapgis.mapgis@seattle.gov",
          },
          {
            key: "Common-Core_Last-Update",
            value: "2022-03-23T22:46:01.000Z",
          },
          {
            key: "Common-Core_License",
            value:
              "<span style='color: rgb(76, 76, 76); font-family: &quot;Avenir Next W01&quot;, &quot;Avenir Next W00&quot;, &quot;Avenir Next&quot;, Avenir, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);'>This service is for Open Data purposes only. Users are intended to download this data. This service is not intended for direct use in applications. City of Seattle cannot guarantee the stability of this map service.</span>",
          },
          {
            key: "Common-Core_Public-Access-Level",
            value: "public",
          },
          {
            key: "Common-Core_Geographic-Coverage",
            value: "-122.4166,47.4894,-122.2544,47.7355",
          },
          {
            key: "Common-Core_Unique-Identifier",
            value:
              "https://www.arcgis.com/home/item.html?id=c07cd23ddf17469682f77ce166316ba1&sublayer=3",
          },
          {
            key: "Common-Core_Publisher",
            value: "City of Seattle GIS Program",
          },
          {
            key: "Common-Core_Homepage",
            value:
              "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::drainage-basins",
          },
          { key: "Common-Core_Theme", value: "geospatial" },
          {
            key: "Common-Core_Issued",
            value: "2012-12-13T17:39:02.000Z",
          },
          {
            key: "Common-Core_Contact-Name",
            value: "PublicUtilities_SeattleCityGIS",
          },
        ],
      },
      metadata: {
        domain: "data.seattle.gov",
        additional_access_points: [
          {
            urls: {
              "text/html":
                "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::drainage-basins",
            },
            title: "ArcGIS Hub Dataset",
          },
          {
            urls: {
              "application/json":
                "https://gisdata.seattle.gov/server/rest/services/SPU/SPU_DWW/MapServer/3",
            },
            title: "ArcGIS GeoService",
          },
          {
            urls: {
              "application/vnd.geo+json":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::drainage-basins.geojson?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "GeoJSON",
          },
          {
            urls: {
              "text/csv":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::drainage-basins.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "CSV",
          },
          {
            urls: {
              "application/vnd.google-earth.kml+xml":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::drainage-basins.kml?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "KML",
          },
          {
            urls: {
              "application/zip":
                "https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::drainage-basins.zip?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D",
            },
            title: "Shapefile",
          },
        ],
        access_points: {
          "text/html":
            "https://data-seattlecitygis.opendata.arcgis.com/maps/SeattleCityGIS::drainage-basins",
        },
      },
      permalink: "https://data.seattle.gov/d/3fkq-6k5p",
      link: "https://data.seattle.gov/dataset/Drainage-Basins/3fkq-6k5p",
      owner: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
      creator: {
        id: "wt5u-xzdz",
        user_type: "interactive",
        display_name: "Palay, Claire",
      },
    },
  ],
  resultSetSize: 281,
  timings: { serviceMillis: 68, searchMillis: [6, 29] },
  warnings: [],
};
