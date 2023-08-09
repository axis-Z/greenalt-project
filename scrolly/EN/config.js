var config = {
    style: 'mapbox://styles/jorjone90/clkgpfa8o006t01pbct1ye32p',
    accessToken: 'pk.eyJ1Ijoiam9yam9uZTkwIiwiYSI6ImNrZ3R6M2FvdTBwbmwycXBibGRqM2w2enYifQ.BxjvFSGqefuC9yFCrXC-nQ',
    showMarkers: false,
    theme: 'light',
    title: '<p>Tbilisi Bus Lane Network</p>',
    subtitle: '',
    intro: '',
    byline: '',
    footer: 'Source: Consultancy reports, <a href="https://maps.tbilisi.gov.ge/">interactive map</a> by Tbilisi Municipality City Hall, media reports and public appearances, <a href="https://zaxis.ge/blog-ka-visual/urban-mobility-tbilisi">Z.axis</a>',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            title: '',
            image: '',
            description: '<p class="intro">The map depicts the gradual installation of bus lanes on Tbilisi&#8217;s streets since City Hall&#8217;s new administration announced a definitive turn in transport planning approach in July 2018. It shows the ebbs and flows of the inconsistent process and the remainder of the road before the ten transit corridors traversing some 110 kilometres are all finally there.</p><p class="intro" style="font-size: 12px;"><b>NOTE:</b></p><p class="intro" style="font-size: 11px;"><i><b>Please, hover over a specific lane to learn more about when and where it was installed. Scroll up and down the map to progress through the story.</b></i></p><p><a href="#bus-lanes-2018"><img id="intro-arrow" src=https://raw.githubusercontent.com/axis-Z/greenalt-project/main/scrolly/img/chevron-down-arrow.svg width="25" height="25"></a></p>',
            location: {
                center: [44.809, 41.733],
                zoom: 10.75,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {
                    layer: 'cover',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'cover',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bus-lanes-2018',
            alignment: 'right',
            title: 'December, 2018',
            image: '',
            description: 'Up to <span style="color: #9a0000;"><strong>10 km</strong></span> of bus lanes had been built by the end of 2018. A portion of them well before 2018.',
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
            title: 'December, 2019',
            image: '',
            description: 'In 2019, only a stretch of <span style="color: #9a0000;"><strong>675 m</strong></span> was added to the network on <u>Kandelaki street, Saburtalo</u>.',
            location: {
                center: [44.809, 41.733],
                zoom: 11.15,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'tbs-bus-lanes-2018',
                    opacity: 1
                },
                {
                    layer: 'tbs-bus-lanes-2019a',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'tbs-bus-lanes-2018',
                    opacity: 0
                },
                {
                    layer: 'tbs-bus-lanes-2019a',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bus-lanes-2020a',
            alignment: 'right',
            title: 'December, 2020',
            image: '',
            description: 'A complete street redesign project was completed and/or a separated public transit lanes were installed on the following streets:<ol><li>Ilia Chavchavadze avenue</li><li>Vekua & Khizanishvili streets</li><li>Sesilia Takaishvili street</li><li>Nikoloz Baratashvili street</li><li>Zurab Anjaparidze street</li><li>Merab Kostava street (from Heroes&#8217; Square to May 26 Square)</li></ol>',
            location: {
                center: [44.809, 41.733],
                zoom: 11.15,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'annotation-2020',
                    opacity: 1
                },
                {
                    layer: 'tbs-bus-lanes-2019',
                    opacity: 1
                },
                {
                    layer: 'tbs-bus-lanes-2020a',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'annotation-2020',
                    opacity: 0
                },
                {
                    layer: 'tbs-bus-lanes-2019',
                    opacity: 0
                },
                {
                    layer: 'tbs-bus-lanes-2020a',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bus-lanes-2020b',
            alignment: 'right',
            title: 'December, 2020',
            image: '',
            description: 'In total, the network grew by approximately <span style="color: #9a0000;"><strong>18 km</strong></span> throughout 2020.',
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
            title: 'December, 2021',
            image: '',
            description: 'An additional <span style="color: #9a0000;"><strong>5 km</strong></span> of bus lanes was added throughout 2021, including on <u>Shota Rustaveli avenue</u>, and a portion of <u>Vakhtang Gorgasali street</u> in Ortachala.',
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
            id: 'bus-lanes-2022a',
            alignment: 'right',
            title: 'December, 2022',
            image: '',
            description: 'In 2022, a total of <span style="color: #9a0000;"><strong>14.5 km</strong></span> of bus lanes was added to the network.',
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
            title: 'July, 2023',
            image: '',
            description: 'By July 2023, the bus lane network in Tbilisi has increased with an additional span of <span style="color: #9a0000;"><strong>13.5 km</strong></span>, reaching the total operating network length of over  <span style="color: #9a0000;"><strong>60 km</strong></span>.',
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
        },
        {
            id: 'bus-lanes-future-a',
            alignment: 'right',
            title: 'Future Expansion',
            image: '',
            description: 'Currently, a street redesign project is underway at <u>Akaki Tsereteli avenue</u>. It is expected to be <a href="https://www.radiotavisupleba.ge/a/32371925.html">finished</a> in early 2024.',
            location: {
                center: [44.785592, 41.735011],
                zoom: 13.90,
                pitch: 0.00,
                bearing: 68.00
            },
            onChapterEnter: [
                {
                    layer: 'annotation-tsereteli',
                    opacity: 1
                },
                {
                    layer: 'bus-lanes-future-tsereteli',
                    opacity: 1
                },
                {
                    layer: 'mapbox-satellite',
                    opacity: 1
                }

            ],
            onChapterExit: [
                {
                    layer: 'annotation-tsereteli',
                    opacity: 0
                },
                {
                    layer: 'bus-lanes-future-tsereteli',
                    opacity: 0
                },
                {
                    layer: 'mapbox-satellite',
                    opacity: 0
                },
            ]
        },
        {
            id: 'bus-lanes-future-b',
            alignment: 'right',
            title: 'Future Expansion',
            image: '',
            description: 'The complete bus lane network is set to connect all the missing links to cover a system of some <span style="color: #9a0000;"><strong>110 km</strong></span> long.',
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
                },
                {
                    layer: 'bus-lanes-future-all',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'tbs-bus-lanes-2023',
                    opacity: 0
                },
                {
                    layer: 'bus-lanes-future-all',
                    opacity: 0
                }
            ]
        }
    ]
};
