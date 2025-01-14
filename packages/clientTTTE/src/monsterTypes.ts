export enum MonsterType {
  Eagle = 1,
  Rat,
  Caterpillar,
  None,
}

type MonsterConfig = {
  name: string;
  emoji: string;
};

export const monsterTypes: Record<MonsterType, MonsterConfig> = {
  [MonsterType.Eagle]: {
    name: "Eagle",
    emoji: "🦅",
  },
  [MonsterType.Rat]: {
    name: "Rat",
    emoji: "🐀",
  },
  [MonsterType.Caterpillar]: {
    name: "Caterpillar",
    emoji: "🐛",
  },
  [MonsterType.None]: {
    name: "None",
    emoji: "",
  },
};
