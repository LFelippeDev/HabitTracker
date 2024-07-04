export enum Status {
  COMPLETED = 'COMPLETED',
  IN_PROGRESS = 'IN_PROGRESS',
  SKKIPED = 'SKKIPED',
}

const createAleatorizedMonthlyActivity = () => {
  const aleatorizedMonthlyActivity = [];
  for (let i = 0; i < 18; i++)
    aleatorizedMonthlyActivity.push(Math.random() > 0.5);

  return aleatorizedMonthlyActivity;
};

export enum Days {
  MONDAY = 'Mon',
  TUESDAY = 'Tue',
  WEDNESDAY = 'Wed',
  THURSDAY = 'Thu',
  FRIDAY = 'Fri',
  SATURDAY = 'Sat',
  SUNDAY = 'Sun',
}

enum Period {
  MORNING = 'Morning',
  AFTERNOON = 'Afternoon',
  EVENING = 'Evening',
}

interface MonthlyActivity {
  day: Days;
  acitvity: boolean[];
}

export interface ToDo {
  id: string;
  title: string;
  emoji: string;
  color: string;
  period: Period;
  days: Days[];
  status: Status;
  monthlyActivity: MonthlyActivity[];
}

export const toDoMockedData: ToDo[] = [
  {
    id: '1',
    title: 'Set Small Goals',
    emoji: '🎯',
    color: '#ff9899',
    period: Period.MORNING,
    days: [
      Days.MONDAY,
      Days.TUESDAY,
      Days.WEDNESDAY,
      Days.THURSDAY,
      Days.FRIDAY,
      Days.SATURDAY,
    ],
    status: Status.IN_PROGRESS,
    monthlyActivity: [
      {
        day: Days.MONDAY,
        acitvity: createAleatorizedMonthlyActivity(),
      },
      {day: Days.TUESDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.WEDNESDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.THURSDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.FRIDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.SATURDAY, acitvity: createAleatorizedMonthlyActivity()},
    ],
  },
  {
    id: '2',
    title: 'Work',
    emoji: '🏆',
    color: '#ccccff',
    period: Period.MORNING,
    days: [
      Days.MONDAY,
      Days.TUESDAY,
      Days.WEDNESDAY,
      Days.THURSDAY,
      Days.FRIDAY,
    ],
    status: Status.IN_PROGRESS,
    monthlyActivity: [
      {
        day: Days.MONDAY,
        acitvity: createAleatorizedMonthlyActivity(),
      },
      {day: Days.TUESDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.WEDNESDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.THURSDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.FRIDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.SATURDAY, acitvity: createAleatorizedMonthlyActivity()},
    ],
  },
  {
    id: '3',
    title: 'Meditation',
    emoji: '😇',
    color: '#cdffcb',
    period: Period.AFTERNOON,
    days: [Days.MONDAY, Days.TUESDAY, Days.WEDNESDAY, Days.FRIDAY],
    status: Status.SKKIPED,
    monthlyActivity: [
      {
        day: Days.MONDAY,
        acitvity: createAleatorizedMonthlyActivity(),
      },
      {day: Days.TUESDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.WEDNESDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.THURSDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.FRIDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.SATURDAY, acitvity: createAleatorizedMonthlyActivity()},
    ],
  },
  {
    id: '4',
    title: 'Basketball',
    emoji: '🏀',
    color: '#ffcc99',
    period: Period.AFTERNOON,
    days: [Days.MONDAY, Days.WEDNESDAY, Days.FRIDAY],
    status: Status.IN_PROGRESS,
    monthlyActivity: [
      {
        day: Days.MONDAY,
        acitvity: createAleatorizedMonthlyActivity(),
      },
      {day: Days.TUESDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.WEDNESDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.THURSDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.FRIDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.SATURDAY, acitvity: createAleatorizedMonthlyActivity()},
    ],
  },
  {
    id: '5',
    title: 'Sleep Over 8h',
    emoji: '😴',
    color: '#99ccff',
    period: Period.EVENING,
    days: [
      Days.MONDAY,
      Days.TUESDAY,
      Days.WEDNESDAY,
      Days.THURSDAY,
      Days.FRIDAY,
      Days.SATURDAY,
      Days.SUNDAY,
    ],
    status: Status.COMPLETED,
    monthlyActivity: [
      {
        day: Days.MONDAY,
        acitvity: createAleatorizedMonthlyActivity(),
      },
      {day: Days.TUESDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.WEDNESDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.THURSDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.FRIDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.SATURDAY, acitvity: createAleatorizedMonthlyActivity()},
    ],
  },
  {
    id: '6',
    title: 'Exercise or Workout',
    emoji: '🥊',
    color: '#99c5c4',
    period: Period.EVENING,
    days: [
      Days.MONDAY,
      Days.TUESDAY,
      Days.WEDNESDAY,
      Days.THURSDAY,
      Days.FRIDAY,
      Days.SATURDAY,
      Days.SUNDAY,
    ],
    status: Status.COMPLETED,
    monthlyActivity: [
      {
        day: Days.MONDAY,
        acitvity: createAleatorizedMonthlyActivity(),
      },
      {day: Days.TUESDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.WEDNESDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.THURSDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.FRIDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.SATURDAY, acitvity: createAleatorizedMonthlyActivity()},
    ],
  },
  {
    id: '7',
    title: 'Playing Games',
    emoji: '🕹️',
    color: '#ff99cc',
    period: Period.EVENING,
    days: [Days.MONDAY, Days.WEDNESDAY, Days.FRIDAY],
    status: Status.COMPLETED,
    monthlyActivity: [
      {
        day: Days.MONDAY,
        acitvity: createAleatorizedMonthlyActivity(),
      },
      {day: Days.TUESDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.WEDNESDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.THURSDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.FRIDAY, acitvity: createAleatorizedMonthlyActivity()},
      {day: Days.SATURDAY, acitvity: createAleatorizedMonthlyActivity()},
    ],
  },
];
