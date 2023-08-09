var config = {
    style: 'mapbox://styles/jorjone90/clkqo84ja00no01phfftx2td5',
    accessToken: 'pk.eyJ1Ijoiam9yam9uZTkwIiwiYSI6ImNrZ3R6M2FvdTBwbmwycXBibGRqM2w2enYifQ.BxjvFSGqefuC9yFCrXC-nQ',
    showMarkers: false,
    theme: 'light',
    title: '<p>ავტობუსების ზოლების ქსელი თბილისში</p>',
    subtitle: '',
    intro: '',
    byline: '',
    footer: 'წყარო: კონსულტანტების ანგარიშები, თბილისის მუნიციპალიტეტის მერიის <a href="https://maps.tbilisi.gov.ge/">ინტერაქტიული რუკა</a>, საჯარო გამოსვლები და მედია გაშუქება, <a href="https://zaxis.ge/blog-ka-visual/urban-mobility-tbilisi">Z.axis</a>',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            title: '',
            image: '',
            description: '<p class="intro">რუკა ასახავს თბილისის ქუჩებში ავტობუსის ზოლების ეტაპობრივად მოწყობის პროცესს მას შემდეგ, რაც დედაქალაქის მერიის ახალმა ადმინისტრაციამ 2018 წლის ივლისში ქალაქის სატრანსპორტო პოლიტიკის ცვლილება ოფიციალურად გამოაცხადა. რუკა გვიჩვენებს არათანმიმდევრული პროცესის ცვალებად ტემპს, დაგეგმილ ავტობუსის ზოლებს და იმ ათ სატრანსპორტო დერეფანს, რომელთა შეკვრაც აუცილებელია თბილისში საზოგადოებრივი ტრანსპორტის განვითარებისთვის.</p><p class="intro" style="font-size: 12px;"><b>შენიშვნა:</b></p><p class="intro" style="font-size: 11px;"><i><b>კონკრეტული ავტობუსის ზოლის ადგილმდებარეობის, მოწყობის თარიღის, მიმართულების და სიგრძის გასაგებად, მაუსი გადაატარეთ შესაბამის მონაკვეთზე. ანალიზის სრულყოფილად სანახავად, დასქროლეთ რუკა.</b></i></p><p><a href="#bus-lanes-2018"><img id="intro-arrow" src=https://raw.githubusercontent.com/axis-Z/greenalt-project/main/scrolly/img/chevron-down-arrow.svg width="25" height="25"></a></p>',
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
            title: 'დეკემბერი, 2018',
            image: '',
            description: '2018 წლის ბოლოსთვის, დაახლოებით <span style="color: #9a0000;"><strong>10 კმ</strong></span> სიგრძის ავტობუსების ზოლები უკვე არსებობდა. მათი ნაწილი 2018 წლამდე გაკეთდა.',
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
            title: 'დეკემბერი, 2019',
            image: '',
            description: '2019 წელს, ქსელს მხოლოდ <span style="color: #9a0000;"><strong>675 მ</strong></span> სიგრძის მონაკვეთი დაემატა <u>კანდელაკის ქუჩაზე, საბურთალოზე</u>.',
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
            title: 'დეკემბერი, 2020',
            image: '',
            description: 'ქუჩის გეგმარება სრულად შეიცვალა და/ან დაიხაზა განცალკევებული ზოლები საზოგადოებრივი ტრანსპორტისთვის შემდეგ ქუჩებზე:<ol><li>ილია ჭავჭავაძის გამზირი</li><li>ვეკუა და ხიზანიშვილის ქუჩები</li><li>სესილია თაყაიშვილის ქუჩა</li><li>ნიკოლოზ ბარათაშვილის ქუჩა</li><li>ზურაბ ანჯაფარიძის ქუჩა</li><li>მერაბ კოსტავას ქუჩა (გმირთა მოედნიდან 26 მაისის მოედნამდე)</li></ol>',
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
            title: 'დეკემბერი, 2020',
            image: '',
            description: 'საბოლოო ჯამში, ქსელს შეემატა <span style="color: #9a0000;"><strong>18 კმ-მდე</strong></span> ავტობუსების ზოლი 2020 წლის განმავლობაში.',
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
            title: 'დეკემბერი, 2021',
            image: '',
            description: '2021 წელს დამატებით <span style="color: #9a0000;"><strong>5 კმ</strong></span> სიგრძის ავტობუსების ზოლები დაიხაზა <u>შოთა რუსთაველის გამზირსა</u> და <u>ვახტანგ გორგასლის ქუჩის ნაწილზე ორთაჭალაში</u>.',
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
            title: 'დეკემბერი, 2022',
            image: '',
            description: '<span style="color: #9a0000;"><strong>14.5 კმ-ით</strong></span> გაიზარდა ავტობუსების ზოლების ქსელი 2022 წელს.',
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
            title: 'ივლისი, 2023',
            image: '',
            description: '2023 წლის ივლისის მდგომარეობით, თბილისს კიდევ <span style="color: #9a0000;"><strong>13.5 კმ</strong></span> სიგრძის ზოლები შეემატა და ქსელის საერთო სიგრძემ <span style="color: #9a0000;"><strong>60 კმ-ს</strong></span> გადააჭარბა.',
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
            title: 'ქსელის გაფართოება',
            image: '',
            description: 'ამჟამად, ქუჩის გეგმარების ცვლილებისა და სრული სარეაბილიტაციო სამუშაოები მიმდინარეობს <u>აკაკი წერეთლის გამზირზე</u>. სამუშაოების დასრულება 2024 წლის დასაწყისისთვის <a href="https://www.radiotavisupleba.ge/a/32371925.html">იგეგმება</a>.',
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
            title: 'ქსელის გაფართოება',
            image: '',
            description: 'სამომავლოდ, სატრანსპორტო დერეფნების მთლიანი ქსელი შეკრავს და დააკავშირებს იმ მონაკვეთებს, რომლებიც ჯერ კიდევ განცალკევებულია ერთმანეთისგან. საბოლოოდ, ერთიანი ქსელი <span style="color: #9a0000;"><strong>110 კმ-ზე</strong></span> მეტი სიგრძის იქნება.',
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
