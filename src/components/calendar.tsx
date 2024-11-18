/* eslint-disable prettier/prettier */
import "@bitnoi.se/react-scheduler/dist/style.css";
import { useState, useCallback } from "react";
import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler";
import enDayjsTranslations from "dayjs/locale/ru";
import "dayjs/plugin/isBetween";


const MyCalendar: React.FC = () => {
  const [filterButtonState, setFilterButtonState] = useState(0);

  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleRangeChange = useCallback((range: any) => {
    setRange(range);
  }, []);

  // Filtering events that are included in current date range
  // Example can be also found on video https://youtu.be/9oy4rTVEfBQ?t=118&si=52BGKSIYz6bTZ7fx
  // and in the react-scheduler repo App.tsx file //https://github.com/Bitnoise/react-scheduler/blob/master/src/App.tsx
  const filteredMockedSchedulerData = mockedSchedulerData.map((person) => ({
    ...person,
    data: person.data.filter(
      (project) => {
        const projectStart = new Date(project.startDate).getTime();
        const projectEnd = new Date(project.endDate).getTime();
        const rangeStart = new Date(range.startDate).getTime();
        const rangeEnd = new Date(range.endDate).getTime();

        return (
          (projectStart >= rangeStart && projectStart <= rangeEnd) ||
          (projectEnd >= rangeStart && projectEnd <= rangeEnd) ||
          (projectStart < rangeStart && projectEnd > rangeEnd)
        );
      }
    ),
  }));

  return (
    <section>
<script src="dayjs.min.js"></script>
<script src="isBetween.js"></script>
<script>dayjs.extend(window.dayjs_plugin_isBetween)</script>
      <Scheduler

        config={{
          zoom: 2,
          filterButtonState: 4,
          lang: "ru",
          showThemeToggle: true,
          defaultTheme: "dark",
        }}
        data={filteredMockedSchedulerData}
        isLoading={true}
        onClearFilterData={() => {
          // Some clearing filters logic...
          setFilterButtonState(0);
        }}
        onFilterData={() => {
          // Some filtering logic...
          setFilterButtonState(1);
        }}
        onItemClick={(item) => console.log(item)}
        onRangeChange={handleRangeChange}
        onTileClick={(clickedResource) => console.log(clickedResource)}
      />
    </section>
  );
};

const mockedSchedulerData: SchedulerData = [
  {
    id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
    label: {
      icon: "https://picsum.photos/24",
      title: "Журавлев Сергей Степанович",
      subtitle: "Английский язык",
    },
    data: [
      {
        id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
        startDate: new Date("2024-09-27T10:30:00"),
        endDate: new Date("2024-09-27T12:30:00"),
        occupancy: 3600,
        title: "Урок",
        subtitle: "5 урок",
        // description: "array indexing Salad West Account",
        bgColor: "rgb(254,165,177)",
      },
    ],
  },
  {
    id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
    label: {
      icon: "https://picsum.photos/25",
      title: "Джумабаев Богдан Бекполатович",
      subtitle: "Математика",
    },
    data: [
      {
        id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
        startDate: new Date("2024-09-27T13:00:00"),
        endDate: new Date("2024-09-27T14:00:00"),
        occupancy: 2600,
        title: "Урок",
        subtitle: "5 урок",
        // description: "array indexing Salad West Account",
        bgColor: "rgb(154,165,177)",
      },
    ],
  },
  {
    id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
    label: {
      icon: "https://picsum.photos/25",
      title: "Джумабаев Богдан Бекполатович",
      subtitle: "Математика",
    },
    data: [
      {
        id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
        startDate: new Date("2024-09-27T13:00:00"),
        endDate: new Date("2024-09-27T14:00:00"),
        occupancy: 2600,
        title: "Урок",
        subtitle: "5 урок",
        // description: "array indexing Salad West Account",
        bgColor: "rgb(154,165,177)",
      },
    ],
  },
    {
      "id": "ab31d71b-d49d-4da4-8d4a-c9a0f2f68f34",
      "label": {
        "icon": "https://picsum.photos/25",
        "title": "Иванов Иван Иванович",
        "subtitle": "Физика"
      },
      "data": [
        {
          "id": "d29b8a34-37d5-4fe6-a014-e354da28b2e7",
          "startDate": new Date("2024-09-28T09:00:00"),
          "endDate": new Date("2024-09-28T10:00:00"),
          "occupancy": 2800,
          "title": "Урок",
          "subtitle": "6 урок",
          "bgColor": "rgb(162,154,164)"
        }
      ]
    },
    {
      "id": "c87a2b8f-9f9b-4eb4-8a6c-b6f00d78d0bc",
      "label": {
        "icon": "https://picsum.photos/25",
        "title": "Петрова Анна Сергеевна",
        "subtitle": "История"
      },
      "data": [
        {
          "id": "e817b342-2fcd-46fa-bd59-8e1d4e6f6be1",
          "startDate": new Date("2024-09-29T11:00:00"),
          "endDate": new Date("2024-09-29T12:00:00"),
          "occupancy": 2700,
          "title": "Урок",
          "subtitle": "7 урок",
          "bgColor": "rgb(172,165,155)"
        }
      ]
    },
    {
      "id": "f0de8822-f72d-4222-b59f-5d7e94a9f7f5",
      "label": {
        "icon": "https://picsum.photos/25",
        "title": "Смирнов Олег Викторович",
        "subtitle": "Биология"
      },
      "data": [
        {
          "id": "3e46f5b1-8d3b-4c0e-a3c1-8b0d523d29bc",
          "startDate": new Date("2024-09-30T12:00:00"),
          "endDate": new Date("2024-09-30T13:00:00"),
          "occupancy": 2900,
          "title": "Урок",
          "subtitle": "8 урок",
          "bgColor": "rgb(144,175,187)"
        }
      ]
    },
    {
      "id": "ecac17b5-2f87-47e1-9d89-8b28c46c3739",
      "label": {
        "icon": "https://picsum.photos/25",
        "title": "Алексеева Мария Павловна",
        "subtitle": "География"
      },
      "data": [
        {
          "id": "7e3d4a5a-fc4d-46de-8a4e-5f26e4e6f32d",
          "startDate": new Date("2024-10-01T14:00:00"),
          "endDate": new Date("2024-10-01T15:00:00"),
          "occupancy": 2500,
          "title": "Урок",
          "subtitle": "9 урок",
          "bgColor": "rgb(154,155,177)"
        }
      ]
    },
    {
      "id": "2b8a6575-9232-4145-9e88-91fb51e7f6f6",
      "label": {
        "icon": "https://picsum.photos/25",
        "title": "Кузнецов Павел Дмитриевич",
        "subtitle": "Химия"
      },
      "data": [
        {
          "id": "48e2b5f3-3fd5-4234-a6d5-3a8f53e5ed1a",
          "startDate": new Date("2024-10-02T10:00:00"),
          "endDate": new Date("2024-10-02T11:00:00"),
          "occupancy": 3000,
          "title": "Урок",
          "subtitle": "10 урок",
          "bgColor": "rgb(164,175,187)"
        }
      ]
    },
    {
      "id": "47c7be85-31e4-4824-9378-6f314684bfc6",
      "label": {
        "icon": "https://picsum.photos/25",
        "title": "Федоров Михаил Андреевич",
        "subtitle": "Литература"
      },
      "data": [
        {
          "id": "63de8f55-0e1d-462e-a518-b167de29e4f3",
          "startDate": new Date("2024-10-03T09:00:00"),
          "endDate": new Date("2024-10-03T10:00:00"),
          "occupancy": 3200,
          "title": "Урок",
          "subtitle": "11 урок",
          "bgColor": "rgb(134,165,157)"
        }
      ]
    },
    {
      "id": "7e4c28be-3241-40eb-b1e0-b33957fc6b94",
      "label": {
        "icon": "https://picsum.photos/25",
        "title": "Васильева Светлана Борисовна",
        "subtitle": "Информатика"
      },
      "data": [
        {
          "id": "8c158b91-c439-4749-b4bb-499b8c2d1f32",
          "startDate": new Date("2024-10-04T12:00:00"),
          "endDate": new Date("2024-10-04T13:00:00"),
          "occupancy": 3100,
          "title": "Урок",
          "subtitle": "12 урок",
          "bgColor": "rgb(144,185,177)"
        }
      ]
    },
    {
      "id": "f0f2c285-6256-47d9-9ad8-032ed6d2e94b",
      "label": {
        "icon": "https://picsum.photos/25",
        "title": "Соколов Александр Сергеевич",
        "subtitle": "Экономика"
      },
      "data": [
        {
          "id": "7b18b3f9-4fc5-4768-98a4-0b123fb3e45d",
          "startDate": new Date("2024-10-05T13:00:00"),
          "endDate": new Date("2024-10-05T14:00:00"),
          "occupancy": 3300,
          "title": "Урок",
          "subtitle": "13 урок",
          "bgColor": "rgb(154,165,167)"
        }
      ]
    },
    {
        "id": "ab31d71b-d49d-4da4-8d4a-c9a0f2f68f34",
        "label": {
          "icon": "https://picsum.photos/25",
          "title": "Иванов Иван Иванович",
          "subtitle": "Физика"
        },
        "data": [
          {
            "id": "d29b8a34-37d5-4fe6-a014-e354da28b2e7",
            "startDate": new Date("2024-09-28T09:00:00"),
            "endDate": new Date("2024-09-28T10:00:00"),
            "occupancy": 2800,
            "title": "Урок",
            "subtitle": "6 урок",
            "bgColor": "rgb(162,154,164)"
          }
        ]
      },
      {
        "id": "c87a2b8f-9f9b-4eb4-8a6c-b6f00d78d0bc",
        "label": {
          "icon": "https://picsum.photos/25",
          "title": "Петрова Анна Сергеевна",
          "subtitle": "История"
        },
        "data": [
          {
            "id": "e817b342-2fcd-46fa-bd59-8e1d4e6f6be1",
            "startDate": new Date("2024-09-29T11:00:00"),
            "endDate": new Date("2024-09-29T12:00:00"),
            "occupancy": 2700,
            "title": "Урок",
            "subtitle": "7 урок",
            "bgColor": "rgb(172,165,155)"
          }
        ]
      },
      {
        "id": "f0de8822-f72d-4222-b59f-5d7e94a9f7f5",
        "label": {
          "icon": "https://picsum.photos/25",
          "title": "Смирнов Олег Викторович",
          "subtitle": "Биология"
        },
        "data": [
          {
            "id": "3e46f5b1-8d3b-4c0e-a3c1-8b0d523d29bc",
            "startDate": new Date("2024-09-30T12:00:00"),
            "endDate": new Date("2024-09-30T13:00:00"),
            "occupancy": 2900,
            "title": "Урок",
            "subtitle": "8 урок",
            "bgColor": "rgb(144,175,187)"
          }
        ]
      },
      {
        "id": "ecac17b5-2f87-47e1-9d89-8b28c46c3739",
        "label": {
          "icon": "https://picsum.photos/25",
          "title": "Алексеева Мария Павловна",
          "subtitle": "География"
        },
        "data": [
          {
            "id": "7e3d4a5a-fc4d-46de-8a4e-5f26e4e6f32d",
            "startDate": new Date("2024-10-01T14:00:00"),
            "endDate": new Date("2024-10-01T15:00:00"),
            "occupancy": 2500,
            "title": "Урок",
            "subtitle": "9 урок",
            "bgColor": "rgb(154,155,177)"
          }
        ]
      },
      {
        "id": "2b8a6575-9232-4145-9e88-91fb51e7f6f6",
        "label": {
          "icon": "https://picsum.photos/25",
          "title": "Кузнецов Павел Дмитриевич",
          "subtitle": "Химия"
        },
        "data": [
          {
            "id": "48e2b5f3-3fd5-4234-a6d5-3a8f53e5ed1a",
            "startDate": new Date("2024-10-02T10:00:00"),
            "endDate": new Date("2024-10-02T11:00:00"),
            "occupancy": 3000,
            "title": "Урок",
            "subtitle": "10 урок",
            "bgColor": "rgb(164,175,187)"
          }
        ]
      },
      {
        "id": "47c7be85-31e4-4824-9378-6f314684bfc6",
        "label": {
          "icon": "https://picsum.photos/25",
          "title": "Федоров Михаил Андреевич",
          "subtitle": "Литература"
        },
        "data": [
          {
            "id": "63de8f55-0e1d-462e-a518-b167de29e4f3",
            "startDate": new Date("2024-10-03T09:00:00"),
            "endDate": new Date("2024-10-03T10:00:00"),
            "occupancy": 3200,
            "title": "Урок",
            "subtitle": "11 урок",
            "bgColor": "rgb(134,165,157)"
          }
        ]
      },
      {
        "id": "7e4c28be-3241-40eb-b1e0-b33957fc6b94",
        "label": {
          "icon": "https://picsum.photos/25",
          "title": "Васильева Светлана Борисовна",
          "subtitle": "Информатика"
        },
        "data": [
          {
            "id": "8c158b91-c439-4749-b4bb-499b8c2d1f32",
            "startDate": new Date("2024-10-04T12:00:00"),
            "endDate": new Date("2024-10-04T13:00:00"),
            "occupancy": 3100,
            "title": "Урок",
            "subtitle": "12 урок",
            "bgColor": "rgb(144,185,177)"
          }
        ]
      },
      {
        "id": "f0f2c285-6256-47d9-9ad8-032ed6d2e94b",
        "label": {
          "icon": "https://picsum.photos/25",
          "title": "Соколов Александр Сергеевич",
          "subtitle": "Экономика"
        },
        "data": [
          {
            "id": "7b18b3f9-4fc5-4768-98a4-0b123fb3e45d",
            "startDate": new Date("2024-10-05T13:00:00"),
            "endDate": new Date("2024-10-05T14:00:00"),
            "occupancy": 3300,
            "title": "Урок",
            "subtitle": "13 урок",
            "bgColor": "rgb(154,165,167)"
          }
        ]
      },
      {
        "id": "f5fbb2d8-c8ed-4fba-b97b-144e77e70b68",
        "label": {
          "icon": "https://picsum.photos/25",
          "title": "Попова Елена Юрьевна",
          "subtitle": "Английский язык"
        },
        "data": [
          {
            "id": "9d86b4d5-4c1b-42eb-8a42-cb68e1e2e8f2",
            "startDate": new Date("2024-10-06T14:00:00"),
            "endDate": new Date("2024-10-06T15:00:00"),
            "occupancy": 3400,
            "title": "Урок",
            "subtitle": "14 урок",
            "bgColor": "rgb(124,165,187)"
          }
        ]
      },
      {
        "id": "ba1e3f5f-317b-4892-8b65-23d7e94e283f",
        "label": {
          "icon": "https://picsum.photos/25",
          "title": "Морозова Виктория Петровна",
          "subtitle": "Математика"
        },
        "data": [
          {
            "id": "f1e68dbb-df39-4e47-b743-46b13b157f9e",
            "startDate": new Date("2024-10-07T11:00:00"),
            "endDate": new Date("2024-09-30T12:00:00"),
            "occupancy": 3500,
            "title": "Урок",
            "subtitle": "14 урок",
            "bgColor": "rgb(124,165,187)"
          }
        ]
      }
];

// const langs: LocaleType[] = [
//   {
//     id: "ru",
//     lang: {
//       feelingEmpty: "I feel so empty...",
//       free: "Free",
//       loadNext: "Next",
//       loadPrevious: "Previous",
//       over: "over",
//       taken: "Taken",
//       topbar: {
//         filters: "Filters",
//         next: "next",
//         prev: "prev",
//         today: "Today",
//         view: "View"
//       },
//       search: "search",
//       week: "week"
//     },
//     translateCode: "en-EN",
//     dayjsTranslations: enDayjsTranslations
//   }
// ];

export default MyCalendar;
