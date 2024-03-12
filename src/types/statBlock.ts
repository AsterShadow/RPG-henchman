interface Speed {
  walk?: number;
  swim?: number;
}

interface Action {
  name: string;
  desc: string;
  attack_bonus?: number;
  damage_dice?: string;
  damage_bonus?: number;
}

interface SpecialAbility {
  name: string;
  desc: string;
}

interface StatBlockProps {
  slug: string;
  desc: string;
  name: string;
  size: string;
  type: string;
  subtype: string;
  group?: string;
  alignment: string;
  armor_class: number;
  armor_desc: string;
  hit_points: number;
  hit_dice: string;
  speed: Speed;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  strength_save?: number | null;
  dexterity_save?: number | null;
  constitution_save?: number | null;
  intelligence_save?: number | null;
  wisdom_save?: number | null;
  charisma_save?: number | null;
  perception?: number;
  skills: { [key: string]: number };
  damage_vulnerabilities: string;
  damage_resistances: string;
  damage_immunities: string;
  condition_immunities: string;
  senses: string;
  languages: string;
  challenge_rating: string;
  cr: number;
  actions: Action[];
  bonus_actions?: Action[] | null;
  reactions?: Action[] | null;
  legendary_desc?: string;
  legendary_actions?: Action[];
  special_abilities: SpecialAbility[];
  spell_list?: any[];
  environments: string[];
  description: string;
}
