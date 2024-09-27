// import type * as GenshinDb from 'https://esm.sh/v135/genshin-db@5.1.8/types/index.d.ts';
import gdb from 'npm:genshin-db/src/min/data.min.json' with {type: 'json'};

console.log(Object.keys(gdb.data));

// console.log(gdb.characters('names', { matchCategories: true, verboseCategories: true }));

// const DATA_BASE_URL = 'https://raw.githubusercontent.com/theBowja/genshin-db/refs/heads/main/src/data';

// type EnumToObject<T extends string | number, E extends string | number = never> = {
//     [K in T as `${K}`]: `${K}`;
// } & {
//     [K in E as `${K}`]: `${K}`;
// };

// export const Folders = Object.freeze({
//     characters: 'characters',
//     talents: 'talents',
//     constellations: 'constellations',
//     weapons: 'weapons',
//     foods: 'foods',
//     materials: 'materials',
//     crafts: 'crafts',
//     artifacts: 'artifacts',
//     domains: 'domains',
//     enemies: 'enemies',
//     rarity: 'rarity',
//     elements: 'elements',
//     achievements: 'achievements',
//     achievementgroups: 'achievementgroups',
//     windgliders: 'windgliders',
//     outfits: 'outfits',
//     animals: 'animals',
//     namecards: 'namecards',
//     geographies: 'geographies',
//     adventureranks: 'adventureranks',
//     emojis: 'emojis',
//     voiceovers: 'voiceovers',
//     tcgactioncards: 'tcgactioncards',
//     tcgcardbacks: 'tcgcardbacks',
//     tcgcardboxes: 'tcgcardboxes',
//     tcgcharactercards: 'tcgcharactercards',
//     tcgdetailedrules: 'tcgdetailedrules',
//     tcgenemycards: 'tcgenemycards',
//     tcgkeywords: 'tcgkeywords',
//     tcglevelrewards: 'tcglevelrewards',
//     tcgstatuseffects: 'tcgstatuseffects',
//     tcgsummons: 'tcgsummons',
// } as const satisfies EnumToObject<GenshinDb.Folder, 'tcgenemycards'>);

// export type Folder = keyof typeof Folders;

// export const Languages = Object.freeze({
//     ChineseSimplified: 'ChineseSimplified',
//     ChineseTraditional: 'ChineseTraditional',
//     English: 'English',
//     French: 'French',
//     German: 'German',
//     Indonesian: 'Indonesian',
//     Italian: 'Italian',
//     Japanese: 'Japanese',
//     Korean: 'Korean',
//     Portuguese: 'Portuguese',
//     Russian: 'Russian',
//     Spanish: 'Spanish',
//     Thai: 'Thai',
//     Turkish: 'Turkish',
//     Vietnamese: 'Vietnamese',
// } as const satisfies EnumToObject<GenshinDb.Language>);

// export type Language = keyof typeof Languages;

// type QueryFunctionReturn<T extends Folder> = T extends keyof typeof GenshinDb
//     ? (typeof GenshinDb)[T] extends GenshinDb.QueryFunction<infer R>
//         ? R
//         : never
//     : never;

// interface ManualTypes {
//     tcgenemycards: GenshinDb.TcgEnemyCards;
// }

// export type DataTypes = {
//     [K in Folder]: K extends keyof ManualTypes ? ManualTypes[K] : QueryFunctionReturn<K>;
// };

// export class GenshinData {
//     #cache = new Map<Language, Map<keyof DataTypes, DataTypes[keyof DataTypes]>>();

//     // getData<T extends Folder>(folder: T, language: Language = 'English'): Promise<DataTypes[T]> {
//     // }
// }

// declare const getData: <T extends Folder>(folder: T) => DataTypes[T];

// const characters = getData('characters');
// const talents = getData('talents');
// const constellations = getData('constellations');
// const weapons = getData('weapons');
// const foods = getData('foods');
// const materials = getData('materials');
// const crafts = getData('crafts');
// const artifacts = getData('artifacts');
// const domains = getData('domains');
// const enemies = getData('enemies');
// const rarity = getData('rarity');
// const elements = getData('elements');
// const achievements = getData('achievements');
// const achievementgroups = getData('achievementgroups');
// const windgliders = getData('windgliders');
// const outfits = getData('outfits');
// const animals = getData('animals');
// const namecards = getData('namecards');
// const geographies = getData('geographies');
// const adventureranks = getData('adventureranks');
// const emojis = getData('emojis');
// const voiceovers = getData('voiceovers');
// const tcgactioncards = getData('tcgactioncards');
// const tcgcardbacks = getData('tcgcardbacks');
// const tcgcardboxes = getData('tcgcardboxes');
// const tcgcharactercards = getData('tcgcharactercards');
// const tcgdetailedrules = getData('tcgdetailedrules');
// const tcgenemycards = getData('tcgenemycards');
// const tcgkeywords = getData('tcgkeywords');
// const tcglevelrewards = getData('tcglevelrewards');
// const tcgstatuseffects = getData('tcgstatuseffects');
// const tcgsummons = getData('tcgsummons');
