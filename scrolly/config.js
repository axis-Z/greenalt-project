var config = {
    style: 'mapbox://styles/jorjone90/clkgpfa8o006t01pbct1ye32p',
    accessToken: 'pk.eyJ1Ijoiam9yam9uZTkwIiwiYSI6ImNrZ3R6M2FvdTBwbmwycXBibGRqM2w2enYifQ.BxjvFSGqefuC9yFCrXC-nQ',
    showMarkers: false,
    theme: 'light',
    title: 'Tbilisi Bus Lanes',
    subtitle: '',
    intro: '<p class="intro">The map depicts the gradual installation of bus lanes on Tbilisi&#8217;s streets since City Hall&#8217;s new administration announced a definitive turn in transport planning approach in July 2018. It shows the ebbs and flows of the inconsistent process and the remainder of the road before the ten transit corridors traversing some 110 kilometres are all finally there.</p><p class="intro" style="font-size: 12px;"><b>NOTE:</b></p><p class="intro" style="font-size: 12px;"><i><b>Please, hover over a specific lane to learn more about when and where it was installed. Scroll up and down the map from the right hand side to progress through the story. Use map scale controller to zoom in and out to specific areas.</b></i></p><br>',
    byline: '',
    footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'bus-lanes-2018',
            alignment: 'right',
            title: 'December, 2018',
            image: '',
            description: 'Ground zero of the new urban mobility paradigm. Up to <span style="color: #9a0000;"><strong>9 km</strong></span> of bus lanes had been built by the end of 2018. A portion of them by the previous administration.',
            location: {
                center: [44.809, 41.733],
                zoom: 11.15,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {
                    layer: 'tbs-bus-lanes-2018',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'tbs-bus-lanes-2018',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bus-lanes-2019',
            alignment: 'right',
            title: 'Bike Lanes',
            image: '',
            description: '',
            location: {
                center: [44.809, 41.733],
                zoom: 11.15,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'tbs-bus-lanes-2019',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'tbs-bus-lanes-2019',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bus-lanes-2020',
            alignment: 'right',
            title: 'Indego Bike Share',
            image: '',
            description: 'Indego has been operating in Philadelphia since 20XX. The system initally was focused on Center City, but has expanded service to neighboring areas to support equitable mobility options to the city\'s residents.',
            location: {
                center: [44.809, 41.733],
                zoom: 11.15,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'tbs-bus-lanes-2020',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'tbs-bus-lanes-2020',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bus-lanes-2021',
            alignment: 'right',
            title: 'Belmont Plateau Trails',
            image: '',
            description: 'A short ride along the Schuylkill River Trail from the Art Museum, Belmont is a twisty, log-ridden rollercoaster of a trail network. It is easy to get turned around, the underbrush is at times impenetrable, and short steep sections come out of nowhere. In other words, it\'s really fun',
            location: {
                center: [44.809, 41.733],
                zoom: 11.15,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'tbs-bus-lanes-2021',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'tbs-bus-lanes-2021',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bus-lanes-2022',
            alignment: 'right',
            title: 'Wissahickon Park Trails',
            image: '',
            description: 'This steep, rocky gorge can be surprisingly technical. Follow the orange and yellow trails to repeatedly climb and descend through the schist hillsides (careful of the cliffs), or stick to the gravel Forbidden Drive for a relaxing ride along the creek. You\'ll forget you\'re in a city.',
            location: {
                center: [44.809, 41.733],
                zoom: 11.15,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'tbs-bus-lanes-2022',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'tbs-bus-lanes-2022',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bus-lanes-2023',
            alignment: 'right',
            title: 'Pennypack Park Trails',
            image: '',
            description: 'Pennypack is a great introduction trail system. Not too steep and not too technical, the beautiful wooded park also provides a great escape from urban life. The south side trails are originally bridle trails, so be nice to equestrians and dismount when you approach them.',
            location: {
                center: [44.809, 41.733],
                zoom: 11.15,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'tbs-bus-lanes-2023',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'tbs-bus-lanes-2023',
                    opacity: 0
                }
            ]
        }
    ]
};
