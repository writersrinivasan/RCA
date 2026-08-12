export type Topic = {
  title: string;
  detail: string;
};

export type Activity = {
  title: string;
  format: "facilitator-demo";
  duration: string;
  engagement?: string;
  description: string;
  steps: string[];
  facilitatorPrompt: string;
  virtualNotes: string;
};

export type TimeSplit = {
  theoryMin: number;
  handsOnMin: number;
};

export type Misconception = {
  claim: string;
  reality: string;
};

export type ScenarioBox = {
  label: string;
  scenario: string;
  leaderMove: string;
};

export type CourseModule = {
  slug: string;
  day: 1 | 2 | 3;
  order: number;
  code: string;
  title: string;
  tagline: string;
  duration: string;
  originalDuration: string;
  format: string;
  objectives: string[];
  intro: string;
  timeSplit: TimeSplit;
  topics: Topic[];
  activity: Activity;
  misconceptions: Misconception[];
  scenario: ScenarioBox;
  keyTakeaway: string;
};

export type DayMeta = {
  day: 1 | 2 | 3;
  title: string;
  subtitle: string;
  narrative: string;
  timeBudget: string;
  opener?: {
    title: string;
    duration: string;
    description: string;
  };
  closer?: {
    title: string;
    duration: string;
    description: string;
  };
};
