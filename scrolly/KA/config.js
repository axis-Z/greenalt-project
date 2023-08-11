var config = {
    style: "mapbox://styles/jorjone90/cll4rxw0t00i501qp3b5tc4gs",
    accessToken:
      "pk.eyJ1Ijoiam9yam9uZTkwIiwiYSI6ImNrZ3R6M2FvdTBwbmwycXBibGRqM2w2enYifQ.BxjvFSGqefuC9yFCrXC-nQ",
    showMarkers: false,
    theme: "light",
    title: "",
    subtitle: "",
    intro: "",
    byline: "",
    footer:
      'წყარო: კონსულტანტების ანგარიშები, თბილისის მუნიციპალიტეტის მერიის <a href="https://maps.tbilisi.gov.ge/">ინტერაქტიული რუკა</a>, საჯარო გამოსვლები და მედია გაშუქება, <a href="https://zaxis.ge/blog-ka-visual/urban-mobility-tbilisi">Z.axis</a>',
    chapters: [
      {
        id: "intro",
        alignment: "right",
        title: "",
        image: "",
        description:
          '<p class="intro">რუკა ასახავს თბილისის ქუჩებში ავტობუსის ზოლების ეტაპობრივად მოწყობის პროცესს მას შემდეგ, რაც დედაქალაქის მერიის ახალმა ადმინისტრაციამ 2018 წლის ივლისში ქალაქის სატრანსპორტო პოლიტიკის ცვლილება ოფიციალურად გამოაცხადა. რუკა გვიჩვენებს არათანმიმდევრული პროცესის ცვალებად ტემპს, დაგეგმილ ავტობუსის ზოლებს და იმ ათ სატრანსპორტო დერეფანს, რომელთა შეკვრაც აუცილებელია თბილისში საზოგადოებრივი ტრანსპორტის განვითარებისთვის.</p><p class="intro" style="font-size: 12px;"><b>შენიშვნა:</b></p><p class="intro" style="font-size: 11px;"><i><b>კონკრეტული ავტობუსის ზოლის ადგილმდებარეობის, მოწყობის თარიღის, მიმართულების და მიახლოებითი სიგრძის გასაგებად, მაუსი გადაატარეთ შესაბამის მონაკვეთზე. ანალიზის სრულყოფილად სანახავად, დასქროლეთ რუკა ან დაზუმეთ სასურველ მასშტაბში მეტი დეტალის სანახავად.</b></i></p>',
        location: {
          center: [44.850, 41.733],
          zoom: 10,
          pitch: 0.0,
          bearing: 0.0,
        },
        onChapterEnter: [
          {
            layer: "",
            opacity: 0,
          },
        ],
        onChapterExit: [
          {
            layer: "",
            opacity: 0,
          },
        ],
      },
      {
        id: "bus-lanes-2018",
        alignment: "right",
        title: "დეკემბერი, 2018",
        image: "",
        description:
          '2018 წლის ბოლოსთვის, დაახლოებით <span style="color: #9a0000;"><strong>10 კმ</strong></span> სიგრძის ავტობუსების ზოლები უკვე არსებობდა. მათი თითქმის ნახევარი 2018 წლამდე გაკეთდა.',
        location: {
          center: [44.809, 41.733],
          zoom: 11.15,
          pitch: 0.0,
          bearing: 0.0,
        },
        onChapterEnter: [
          {
            layer: "tbs-bus-lanes-2018",
            opacity: 1,
          },
        ],
        onChapterExit: [
          {
            layer: "tbs-bus-lanes-2018",
            opacity: 0,
          },
        ],
      },
      {
        id: "bus-lanes-2019",
        alignment: "right",
        title: "დეკემბერი, 2019",
        image: "",
        description:
          'მხოლოდ <span style="color: #9a0000;"><strong>675 მეტრი</strong></span> სიგრძის მონაკვეთი დაემატა <b>კანდელაკის ქუჩაზე, საბურთალოზე</b>.',
        location: {
          center: [44.809, 41.733],
          zoom: 11.15,
          pitch: 0.0,
          bearing: 0.0,
        },
        onChapterEnter: [
          {
            layer: "tbs-bus-lanes-2019",
            opacity: 1,
          },
          {
            layer: "tbs-bus-lanes-2019a",
            opacity: 1,
          },
        ],
        onChapterExit: [
          {
            layer: "tbs-bus-lanes-2019",
            opacity: 0,
          },
          {
            layer: "tbs-bus-lanes-2019a",
            opacity: 0,
          },
        ],
      },
      {
        id: "bus-lanes-2020a",
        alignment: "right",
        title: "დეკემბერი, 2020",
        image: "",
        description:
          '2020 წელს, თბილისის მერიამ <span style="color: #9a0000;"><strong>18 კილომეტრის</strong></span> სიგრძის ავტობუსების განცალკევებული ზოლი დაამატა ქსელს. მიუხედავად ამისა, ეს პერიოდი გამოირჩეოდა წინააღმდეგობრიობითაც. საერთაშორისო კონსულტანტებმა <a href="https://cdia.asia/wp-content/uploads/2023/03/GEO_TbilisiTransportDepartmentAdvisoryProject_Dec2020.pdf">აღნიშნეს</a>, რომ ტრანსპორტის სამსახურმა 2020 წლის არჩევნების წინა პერიოდში გადაუხვია თავდაპირველ გეგმას, შეეკრათ ერთი სასიცოცხლოდ მნიშვნელოვანი სატრანსპორტო კორიდორი. სანაცვლოდ, მათ გადაწყვიტეს შეექმნათ ავტობუსების ზოლები გაფანტულად, მხოლოდ განიერ ქუჩებზე, სადაც ნაკლებია პარკირებასთან კონფლიქტის ალბათობა. ასეთი მიდგომა მიუთითებს დაგეგმვის მოკლევადიან ხასიათზე, რაც საბოლოოდ აფერხებს რეფორმის განხორციელებას.',
        location: {
          center: [44.809, 41.733],
          zoom: 11.15,
          pitch: 0.0,
          bearing: 0.0,
        },
        onChapterEnter: [
          {
            layer: "tbs-bus-lanes-2020",
            opacity: 1,
          },
          {
            layer: "tbs-bus-lanes-2020a",
            opacity: 1,
          },
        ],
        onChapterExit: [
          {
            layer: "tbs-bus-lanes-2020",
            opacity: 0,
          },
          {
            layer: "tbs-bus-lanes-2020a",
            opacity: 0,
          },
        ],
      },
      //კოდის ეს ნაწილი გათიშულია. ამ chapter გასააქტიურებლად უბრალოდ წაშალეთ მის წინ არსებული დროფებით//
      //       {
      //           id: 'bus-lanes-2020b',
      //           alignment: 'right',
      //           title: 'დეკემბერი, 2020',
      //           image: '',
      //           description: 'საბოლოო ჯამში, ქსელს შეემატა <span style="color: #9a0000;"><strong>18 კმ-მდე</strong></span> ავტობუსების ზოლი 2020 წლის განმავლობაში.',
      //           location: {
      //               center: [44.809, 41.733],
      //               zoom: 11.15,
      //               pitch: 0.00,
      //               bearing: 0.00
      //           },
      //           onChapterEnter: [
      //               {
      //                   layer: 'tbs-bus-lanes-2020',
      //                   opacity: 1
      //               }
      //           ],
      //           onChapterExit: [
      //               {
      //                   layer: 'tbs-bus-lanes-2020',
      //                   opacity: 0
      //               }
      //           ]
      //       },
      {
        id: "bus-lanes-2021",
        alignment: "right",
        title: "დეკემბერი, 2021",
        image: "",
        description:
          '2021 წლის განმავლობაში, მხოლოდ <span style="color: #9a0000;"><strong>5 კმ</strong></span> სიგრძის ავტობუსების ზოლები დაიხაზა. მიუხედავად იმისა, რომ ქალაქის ხელმძღვანელობა დაბალი ტემპის მიზეზად კოვიდ-19 პანდემიას და მასთან დაკავშირებულ სირთულეებს ასახელებდა, ექსპერტები <a href="https://netgazeti.ge/opinion/638653/">მიიჩნევენ</a>, რომ პანდემიის პერიოდი ხელიდან გაშვებული შანსია საზოგადოებრივი ტრანსპორტის განვითარების კუთხით, რაც კიდევ ერთხელ ადასტურებს დაგეგმვის მოკლევადიან ხასიათს და რეფორმის ხელის შემშლელ ფაქტორად გვევლინება.',
        location: {
          center: [44.809, 41.733],
          zoom: 11.15,
          pitch: 0.0,
          bearing: 0.0,
        },
        onChapterEnter: [
          {
            layer: "tbs-bus-lanes-2021",
            opacity: 1,
          },
          {
            layer: "tbs-bus-lanes-2021a",
            opacity: 1,
          },
        ],
        onChapterExit: [
          {
            layer: "tbs-bus-lanes-2021",
            opacity: 0,
          },
          {
            layer: "tbs-bus-lanes-2021a",
            opacity: 0,
          },
        ],
      },
      {
        id: "bus-lanes-2022a",
        alignment: "right",
        title: "დეკემბერი, 2022",
        image: "",
        description:
          '<span style="color: #9a0000;"><strong>14.5 კმ-ით</strong></span> გაიზარდა ავტობუსების ზოლების ქსელი 2022 წელს.',
        location: {
          center: [44.809, 41.733],
          zoom: 11.15,
          pitch: 0.0,
          bearing: 0.0,
        },
        onChapterEnter: [
          {
            layer: "tbs-bus-lanes-2022",
            opacity: 1,
          },
          {
            layer: "tbs-bus-lanes-2022a",
            opacity: 1,
          },
        ],
        onChapterExit: [
          {
            layer: "tbs-bus-lanes-2022",
            opacity: 0,
          },
          {
            layer: "tbs-bus-lanes-2022a",
            opacity: 0,
          },
        ],
      },
      {
        id: "bus-lanes-2023",
        alignment: "right",
        title: "ივლისი, 2023",
        image: "",
        description:
          'მიმდინარე წელს, თბილისს კიდევ <span style="color: #9a0000;"><strong>13.5 კმ</strong></span> სიგრძის ავტობუსების ზოლი შეემატა. რეფორმის გამოცხადებიდან ხუთი წლის შემდეგ, რომლის მიხედვით პრიორიტეტი უნდა მინიჭებოდა საზოგადოებრივი ტრანსპორტის განვითარებას, გეგმის <b>55%-ზე ოდნავ მეტი შესრულდა</b> და ქსელის საერთო სიგრძე მხოლოდ <b>61 კმ-ს</b> შეადგენს. დაპირებული ათი სატრანსპორტო დერეფნიდან, ჯერ არცერთი არ არის სრულად შეკრული და ქსელი კვლავაც ფრაგმენტული განვითარებით ხასიათდება.',
        location: {
          center: [44.809, 41.733],
          zoom: 11.15,
          pitch: 0.0,
          bearing: 0.0,
        },
        onChapterEnter: [
          {
            layer: "tbs-bus-lanes-2023",
            opacity: 1,
          },
          {
            layer: "tbs-bus-lanes-2023a",
            opacity: 1,
          },
        ],
        onChapterExit: [
          {
            layer: "tbs-bus-lanes-2023",
            opacity: 0,
          },
          {
            layer: "tbs-bus-lanes-2023a",
            opacity: 0,
          },
        ],
      },
      //კოდის ეს ნაწილი გათიშულია. ამ chapter გასააქტიურებლად უბრალოდ წაშალეთ მის წინ არსებული დროფებით//
  //    {
  //      id: "bus-lanes-future-a",
  //      alignment: "right",
  //      title: "ქსელის გაფართოება",
  //      image: "",
  //      description:
  //        'ამჟამად, ქუჩის გეგმარების ცვლილებისა და სრული სარეაბილიტაციო სამუშაოები მიმდინარეობს <u>აკაკი წერეთლის გამზირზე</u>. სამუშაოების დასრულება 2024 წლის დასაწყისისთვის <a href="https://www.radiotavisupleba.ge/a/32371925.html">იგეგმება</a>.',
  //        location: {
  //        center: [44.785592, 41.735011],
  //        zoom: 13.9,
  //        pitch: 0.0,
  //        bearing: 68.0,
  //      },
  //      onChapterEnter: [
  //        {
  //          layer: "annotation-tsereteli",
  //          opacity: 1,
  //        },
  //        {
  //          layer: "bus-lanes-future-tsereteli",
  //          opacity: 1,
  //        },
  //        {
  //          layer: "mapbox-satellite",
  //          opacity: 1,
  //        },
  //      ],
  //      onChapterExit: [
  //        {
  //          layer: "annotation-tsereteli",
  //          opacity: 0,
  //        },
  //        {
  //          layer: "bus-lanes-future-tsereteli",
  //          opacity: 0,
  //        },
  //        {
  //          layer: "mapbox-satellite",
  //          opacity: 0,
  //        },
  //      ],
  //    },
      {
        id: "bus-lanes-future-b",
        alignment: "right",
        title: "ქსელის გაფართოება",
        image: "",
        description:
          'სამომავლოდ, სატრანსპორტო დერეფნების მთლიანი ქსელი შეკრავს და დააკავშირებს იმ მონაკვეთებს, რომლებიც ჯერ კიდევ განცალკევებულია ერთმანეთისგან. საბოლოოდ, ერთიანი ქსელი <span style="color: #9a0000;"><strong>110 კმ-ზე</strong></span> მეტი სიგრძის იქნება.<p><div class="legend-scale"><ul class="legend-labels"><li><span style="background:#cd3333;"></span>არსებული მარშრუტები</li><li><span style="background:#0e5c5d;"></span>დაგეგმილი მარშრუტები</li></ul></div><p>',
        location: {
          center: [44.809, 41.733],
          zoom: 11.15,
          pitch: 0.0,
          bearing: 0.0,
        },
        onChapterEnter: [
          {
            layer: "tbs-bus-lanes-2023-full",
            opacity: 1,
          },
          {
            layer: "bus-lanes-future-all",
            opacity: 1,
          },
        ],
        onChapterExit: [
          {
            layer: "tbs-bus-lanes-2023-full",
            opacity: 0,
          },
          {
            layer: "bus-lanes-future-all",
            opacity: 0,
          },
        ],
      },
    ],
  };
  