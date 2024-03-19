import React from 'react';
import CreatureHeading from './CustomBlocks/CreatureHeading';
import PropertyLine from './CustomBlocks/PropertyLine';
import AbilitiesBlock from './CustomBlocks/AbilitiesBlock';
import TaperedRule from './CustomBlocks/TaperedRule';
import SpecialAbility from './CustomBlocks/SpecialAbility';
import Action from './CustomBlocks/Action';
import Description from './CustomBlocks/Description';

const StatBlockComponent: React.FC<StatBlockProps> = () => {

  const monster ={
    "slug": "beli",
            "desc": "_These small, winter faeries are vicious and deadly. With their pale skin and translucent wings, they blend perfectly into their snowy environment; only their beady black eyes stand out against the snow and ice._  \nThese malevolent ice-sprites are a plague upon the people of snowy climates, ambushing unwary prey with icy arrows and freezing spell-like powers.  \n**Servants of the North Wind.** Known as “patzinaki” in some dialects of Dwarvish, the beli are the servants of winter gods and venerate the north wind as Boreas and other gods of darker aspects. They are frequent allies with the fraughashar.  \n**Feast Crashers.** Beli especially delight in disrupting feasts and making off with the holiday cakes—the least deadly of their malicious pranks.  \n**Fear of Druids.** They have an irrational fear of northern druids and their snow bear companions.",
            "name": "Beli",
            "size": "Small",
            "type": "Fey",
            "subtype": "",
            "group": null,
            "alignment": "neutral evil",
            "armor_class": 15,
            "armor_desc": "natural armor",
            "hit_points": 45,
            "hit_dice": "10d6+10",
            "speed": {
                "walk": 30,
                "fly": 30
            },
            "strength": 11,
            "dexterity": 16,
            "constitution": 12,
            "intelligence": 8,
            "wisdom": 11,
            "charisma": 14,
            "strength_save": null,
            "dexterity_save": 5,
            "constitution_save": null,
            "intelligence_save": null,
            "wisdom_save": null,
            "charisma_save": null,
            "perception": 4,
            "skills": {
                "perception": 4,
                "stealth": 5
            },
            "damage_vulnerabilities": "fire",
            "damage_resistances": "",
            "damage_immunities": "cold",
            "condition_immunities": "",
            "senses": "darkvision 60 ft., passive Perception 14",
            "languages": "Common, Dwarvish, Giant",
            "challenge_rating": "2",
            "cr": 2.0,
            "actions": [
                {
                    "name": "Ice Dagger",
                    "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 2 (1d4) cold damage.",
                    "attack_bonus": 5,
                    "damage_dice": "1d4"
                },
                {
                    "name": "Icy Shortbow",
                    "desc": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 2 (1d4) cold damage, and the target must make a successful DC 13 Constitution saving throw or gain 2 levels of exhaustion from the arrow's icy chill. If the save succeeds, the target also becomes immune to further exhaustion from beli arrows for 24 hours (but any levels of exhaustion already gained remain in effect). A character who gains a sixth level of exhaustion doesn't die automatically but drops to 0 hit points and must make death saving throws as normal. The exhaustion lasts until the target recovers fully from the cold damage.",
                    "attack_bonus": 5,
                    "damage_dice": "1d4"
                }
            ],
            "bonus_actions": null,
            "reactions": null,
            "legendary_desc": "",
            "legendary_actions": null,
            "special_abilities": [
                {
                    "name": "Arctic Hunter",
                    "desc": "Beli have advantage on Dexterity (Stealth) checks and Wisdom (Perception) checks made in icy, natural surroundings."
                },
                {
                    "name": "Cold Regeneration",
                    "desc": "As long as the temperature is below freezing, the beli regains 3 hit points at the start of its turn. If the beli takes fire damage, this trait doesn't function at the start of the beli's next turn. The beli dies only if it starts its turn with 0 hit points and it doesn't regenerate."
                },
                {
                    "name": "Flyby",
                    "desc": "The beli doesn't provoke an opportunity attack when it flies out of an enemy's reach."
                },
                {
                    "name": "Innate Spellcasting",
                    "desc": "the beli's innate spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). It can innately cast the following spells, requiring no material components:\n\nat will: invisibility\n\n3/day: chill touch"
                }
            ],
            "spell_list": [],
            "environments": [],
            "description": "Like most canids, wolves have a high body, long legs, broad skull tapering to a narrow muzzle. The tail is bushy and coat has a thick, dense underfur. Colors vary from light to dark gray with black and white interspersed, to some individuals being solid black and solid white.",
  };

  // const monster = {
  //   "slug": "winter-wolf",
  //   "desc": "The arctic-dwelling **winter wolf** is as large as a dire wolf but has snow-white fur and pale blue eyes. Frost giants use these evil creatures as guards and hunting companions, putting the wolves'deadly breath weapon to use against their foes. Winter wolves communicate with one another using growls and barks, but they speak Common and Giant well enough to follow simple conversations.",
  //   "name": "Winter Wolf",
  //   "size": "Large",
  //   "type": "Monstrosity",
  //   "subtype": "",
  //   "group": "Miscellaneous Creatures",
  //   "alignment": "neutral evil",
  //   "armor_class": 13,
  //   "armor_desc": "natural armor",
  //   "hit_points": 75,
  //   "hit_dice": "10d10+20",
  //   "speed": {
  //     "walk": 50
  //   },
  //   "strength": 18,
  //   "dexterity": 13,
  //   "constitution": 14,
  //   "intelligence": 7,
  //   "wisdom": 12,
  //   "charisma": 8,
  //   "strength_save": 4,
  //   "dexterity_save": null,
  //   "constitution_save": null,
  //   "intelligence_save": null,
  //   "wisdom_save": null,
  //   "charisma_save": null,
  //   "perception": 5,
  //   "skills": {
  //     "perception": 5,
  //     "stealth": 3
  //   },
  //   "damage_vulnerabilities": "",
  //   "damage_resistances": "acid, cold, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons",
  //   "damage_immunities": "necrotic, poison",
  //   "condition_immunities": "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained",
  //   "senses": "passive Perception 15",
  //   "languages": "Common, Giant, Winter Wolf",
  //   "challenge_rating": "3",
  //   "cr": 3.0,
  //   "actions": [
  //     {
  //       "name": "Bite",
  //       "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
  //       "attack_bonus": 6,
  //       "damage_dice": "2d6",
  //       "damage_bonus": 4
  //     },
  //     {
  //       "name": "Cold Breath (Recharge 5-6)",
  //       "desc": "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.",
  //       "attack_bonus": 0,
  //       "damage_dice": "4d8"
  //     }
  //   ],
  //   "bonus_actions": null,
  //   "reactions": null,
  //   "legendary_desc": "",
  //   "legendary_actions": null,
  //   "special_abilities": [
  //     {
  //       "name": "Keen Hearing and Smell",
  //       "desc": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
  //     },
  //     {
  //       "name": "Pack Tactics",
  //       "desc": "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated."
  //     },
  //     {
  //       "name": "Snow Camouflage",
  //       "desc": "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
  //     }
  //   ],
  //   "spell_list": [],
  //   "environments": [
  //     "Arctic"
  //   ],
  //   "description": "Like most canids, wolves have a high body, long legs, broad skull tapering to a narrow muzzle. The tail is bushy and coat has a thick, dense underfur. Colors vary from light to dark gray with black and white interspersed, to some individuals being solid black and solid white.",
  // };
  const speedText = Object.entries(monster.speed).map(([key, value]) => `${key} ${value}`).join(', ');

  const attributeAbbreviations = {
    strength_save: 'Str',
    dexterity_save: 'Dex',
    constitution_save: 'Con',
    intelligence_save: 'Int',
    wisdom_save: 'Wis',
    charisma_save: 'Cha',
  };

  const formatAttributes = (attributes: any, abbreviations: any) => {
    return Object.entries(attributes)
      .filter(([key, value]) => value !== null) // Filter out null values
      .map(([key, value]) => {
        const attributeAbbr = abbreviations[key] || key; // Use abbreviation if available
        return `${attributeAbbr} +${value}`;
      })
      .join(', ');
  };

  const calculateModifier = (score: number) => Math.floor((score - 10) / 2);

  const savingThrows = {
    strength_save: monster.strength_save !== null ? calculateModifier(monster.strength) + monster.strength_save : null,
    dexterity_save: monster.dexterity_save !== null ? calculateModifier(monster.dexterity) + monster.dexterity_save : null,
    constitution_save: monster.constitution_save !== null ? calculateModifier(monster.constitution) + monster.constitution_save : null,
    intelligence_save: monster.intelligence_save !== null ? calculateModifier(monster.intelligence) + monster.intelligence_save : null,
    wisdom_save: monster.wisdom_save !== null ? calculateModifier(monster.wisdom) + monster.wisdom_save : null,
    charisma_save: monster.charisma_save !== null ? calculateModifier(monster.charisma) + monster.charisma_save : null,
  };

  const formattedSavingThrows = formatAttributes(savingThrows, attributeAbbreviations);
  const formattedSkills = formatAttributes(monster.skills, {});

  return (
    <div className='w-[400px] lg:w-[800px] overflow-hidden'>
      <div className='h-[5px] border-b-[1px] border-black bg-statBlockOrange' />
      <div className='lg:columns-2 gap-5 p-6 bg-statBlockBG shadow-lg text-statBlockRed text-sm'>
        <CreatureHeading name={monster.name} type={`${monster.size} ${monster.type}, ${monster.alignment}`} />
        <TaperedRule />
        <PropertyLine label='Armor Class' value={`${monster.armor_class} (${monster.armor_desc})`} />
        <PropertyLine label='Hit Points' value={`${monster.hit_points} (${monster.hit_dice})`} />
        <PropertyLine label='Speed' value={speedText} />
        <TaperedRule />
        <AbilitiesBlock
          strength={monster.strength}
          dexterity={monster.dexterity}
          constitution={monster.constitution}
          intelligence={monster.intelligence}
          wisdom={monster.wisdom}
          charisma={monster.charisma}
        />
        <TaperedRule />
        {formattedSavingThrows && (
          <PropertyLine label='Saving Throws' value={formattedSavingThrows} />
        )}
        {formattedSkills && (
          <PropertyLine label='Skills' value={formattedSkills} />
        )}
        {monster.damage_vulnerabilities &&
          <PropertyLine label='Damage Vulnerabilities' value={monster.damage_vulnerabilities} />
        }
        {monster.damage_resistances &&
          <PropertyLine label='Damage Resistances' value={monster.damage_resistances} />
        }
        {monster.damage_immunities &&
          <PropertyLine label='Damage Immunities' value={monster.damage_immunities} />
        }
        {monster.condition_immunities &&
          <PropertyLine label='Condition Immunities' value={monster.condition_immunities} />
        }
        <PropertyLine label='Senses' value={monster.senses} />
        <PropertyLine label='Languages' value={monster.languages} />
        <PropertyLine label='Challenge' value={monster.challenge_rating} />
        <TaperedRule />
        {monster.special_abilities && (
          <SpecialAbility abilities={monster.special_abilities} />
        )}
        {monster.actions && (
          <Action actions={monster.actions} />
        )}
        {monster.bonus_actions && (
          <Action actions={monster.bonus_actions} />
        )}
        {monster.reactions && (
          <Action actions={monster.reactions} />
        )}
        {monster.legendary_actions && (
          <Action actions={monster.legendary_actions} />
        )}
        <Description description={monster.description} />
      </div>
      <div className='h-[5px] border-t-[1px] border-black bg-statBlockOrange' />
    </div>
  );
};

export default StatBlockComponent;