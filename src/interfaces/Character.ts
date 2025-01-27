/**
 * Skills is a placeholder for possible skill enumerations or union strings.
 */
export enum Skills {
  Strength = "Strength",
  Agility = "Agility",
  Intelligence = "Intelligence",
}

/**
 * CharacterSkills is the skill-value pair for a character
 */
export interface CharacterSkills {
  Skill: Skills;
  Value: number;
}

/**
 * Character is the primary container for an in-game Character
 */
export interface Character {
  ChainID: number;
  TokenID: number;
  Name: string;
  MetadataURI: string | null;
  ImageURI: string;
  Skills: CharacterSkills[];
}