"use client";
import React, { useEffect, useState } from "react";
import AbilitiesBlock from "./CustomBlocks/AbilitiesBlock";
import TaperedRule from "./CustomBlocks/TaperedRule";
import SpecialAbility from "./CustomBlocks/SpecialAbility";
import Action from "./CustomBlocks/Action";
import Description from "./CustomBlocks/Description";
import PropertyLineString from "./CustomBlocks/PropertyLineString";
import PropertyLineNb from "./CustomBlocks/PropertyLineNb";

interface StatBlockComponentProps {
  monster: StatBlockProps;
  editMode: boolean;
}

const StatBlockComponent: React.FC<StatBlockComponentProps> = ({
  monster,
  editMode,
}) => {
  const [monsterBlock, setMonsterBlock] = useState<StatBlockProps>(monster);

  const attributeAbbreviations = {
    strength_save: "Str",
    dexterity_save: "Dex",
    constitution_save: "Con",
    intelligence_save: "Int",
    wisdom_save: "Wis",
    charisma_save: "Cha",
  };

  const formatAttributes = (attributes: number, abbreviations: string) => {
    return Object.entries(attributes)
      .filter(([key, value]) => value !== null)
      .map(([key, value]) => {
        const attributeAbbr = abbreviations[key] || key;
        return `${attributeAbbr} ${value >= 0 ? "+" : ""} ${value}`;
      })
      .join(", ");
  };

  const calculateModifier = (score: number) => Math.floor((score - 10) / 2);

  const savingThrows = {
    strength_save:
      monsterBlock.strength_save !== null && monsterBlock.strength !== undefined
        ? calculateModifier(monsterBlock.strength) +
        (monsterBlock.strength_save ?? 0)
        : null,
    dexterity_save:
      monsterBlock.dexterity_save !== null &&
        monsterBlock.dexterity !== undefined
        ? calculateModifier(monsterBlock.dexterity) +
        (monsterBlock.dexterity_save ?? 0)
        : null,
    constitution_save:
      monsterBlock.constitution_save !== null &&
        monsterBlock.constitution !== undefined
        ? calculateModifier(monsterBlock.constitution) +
        (monsterBlock.constitution_save ?? 0)
        : null,
    intelligence_save:
      monsterBlock.intelligence_save !== null &&
        monsterBlock.intelligence !== undefined
        ? calculateModifier(monsterBlock.intelligence) +
        (monsterBlock.intelligence_save ?? 0)
        : null,
    wisdom_save:
      monsterBlock.wisdom_save !== null && monsterBlock.wisdom !== undefined
        ? calculateModifier(monsterBlock.wisdom) +
        (monsterBlock.wisdom_save ?? 0)
        : null,
    charisma_save:
      monsterBlock.charisma_save !== null && monsterBlock.charisma !== undefined
        ? calculateModifier(monsterBlock.charisma) +
        (monsterBlock.charisma_save ?? 0)
        : null,
  };
  const formattedSpeedText = Object.entries(monsterBlock.speed ?? {})
    .map(([key, value]) => `${key} ${value}`)
    .join(", ");
  const formattedSavingThrows = formatAttributes(
    savingThrows,
    attributeAbbreviations
  );
  const formattedSkills = formatAttributes(monsterBlock.skills, {});
  const [savingThrowsText, setsavingThrowsText] = useState<string>(
    formattedSavingThrows
  );
  const [skillsText, setSkillsText] = useState<string>(formattedSkills);
  const [speedText, setSpeedText] = useState<string>(formattedSpeedText);
  const [typeText, setTypeText] = useState<string>(
    `${monsterBlock.size} ${monsterBlock.type}, ${monsterBlock.alignment}`
  );

  const handleTextChange = (field: string, value: string) => {
    if (field === "saving_throws") setsavingThrowsText(value);
    else if (field === "skills") setSkillsText(value);
    else if (field === "type") setTypeText(value);
    else if (field === "speed") setSpeedText(value);
    else return;
  };

  const handleChange = (field: string, value: any) => {
    setMonsterBlock((prevMonster) => ({
      ...prevMonster,
      [field]: value,
    }));
  };
  const handleActionChange = (actionType: string, index: number, field: string, value: string) => {
    setMonsterBlock((prevMonster) => ({
      ...prevMonster,
      [actionType]: prevMonster[actionType].map((action, i) =>
        i === index ? { ...action, [field]: value } : action
      ),
    }));
  };

  useEffect(() => { }, [editMode]);

  useEffect(() => {
    setMonsterBlock(monster);
    console.log(monsterBlock);
  }, [monster]);

  useEffect(() => {
    setsavingThrowsText(formatAttributes(savingThrows, attributeAbbreviations));
    setSkillsText(formatAttributes(monsterBlock.skills, {}));
    setTypeText(
      `${monsterBlock.size} ${monsterBlock.type}, ${monsterBlock.alignment}`
    );
    setSpeedText(formattedSpeedText);
  }, [monsterBlock]);

  return (
    <div
      className={`w-full md:w-[750px] lg:w-[950px] overflow-clip self-center ${editMode && ""
        }`}
    >
      <div
        className={`h-[5px] border-b-[1px] border-black bg-statBlockOrange ${editMode && "hidden"
          }`}
      />
      <div
        className={` ${editMode
            ? "md:flex flex-col gap 8 text-sm md:text-md text-dark"
            : "md:columns-2 gap-5 p-6 bg-statBlockBG shadow-lg text-statBlockRed text-sm"
          }`}
      >
        <PropertyLineString
          label={editMode ? "Monster Name" : ""}
          value={monsterBlock.name}
          onChange={(value) => handleChange("name", value)}
          classname={"text-2xl font-bold uppercase"}
          editMode={editMode}
        />
        <PropertyLineString
          label={editMode ? "Type, size and Alignment" : ""}
          value={typeText}
          onChange={(value) => handleTextChange("type", value)}
          classname={"italic"}
          editMode={editMode}
        />
        {!editMode && <TaperedRule />}
        <PropertyLineNb
          label="Armor Class"
          value={monsterBlock.armor_class}
          onChange={(value) => handleChange("armor_class", value)}
          editMode={editMode}
        />
        <PropertyLineNb
          label="Hit Points"
          value={monsterBlock.hit_points}
          onChange={(value) => handleChange("hit_points", value)}
          editMode={editMode}
        />
        <PropertyLineString
          label="Speed"
          value={speedText}
          onChange={(value) => handleTextChange("speed", value)}
          editMode={editMode}
        />
        {!editMode && <TaperedRule />}
        <AbilitiesBlock
          strength={monsterBlock.strength}
          dexterity={monsterBlock.dexterity}
          constitution={monsterBlock.constitution}
          intelligence={monsterBlock.intelligence}
          wisdom={monsterBlock.wisdom}
          charisma={monsterBlock.charisma}
          handleChange={handleChange}
          editMode={editMode}
        />
        {!editMode && <TaperedRule />}
        <PropertyLineString
          label="Saving Throws"
          value={savingThrowsText}
          onChange={(value) => handleTextChange("saving_throws", value)}
          editMode={editMode}
        />
        <PropertyLineString
          label="Skills"
          value={skillsText}
          onChange={(value) => handleTextChange("skills", value)}
          editMode={editMode}
        />
        <PropertyLineString
          label="Damage Vulnerabilities"
          value={monsterBlock.damage_vulnerabilities}
          onChange={(value) => handleChange("damage_vulnerabilities", value)}
          editMode={editMode}
        />
        <PropertyLineString
          label="Damage Resistances"
          value={monsterBlock.damage_resistances}
          onChange={(value) => handleChange("damage_resistances", value)}
          editMode={editMode}
        />
        <PropertyLineString
          label="Damage Immunities"
          value={monsterBlock.damage_immunities}
          onChange={(value) => handleChange("damage_immunities", value)}
          editMode={editMode}
        />
        <PropertyLineString
          label="Condition Immunities"
          value={monsterBlock.condition_immunities}
          onChange={(value) => handleChange("condition_immunities", value)}
          editMode={editMode}
        />
        <PropertyLineString
          label="Senses"
          value={monsterBlock.senses}
          onChange={(value) => handleChange("senses", value)}
          editMode={editMode}
        />
        <PropertyLineString
          label="Languages"
          value={monsterBlock.languages}
          onChange={(value) => handleChange("languages", value)}
          editMode={editMode}
        />
        <PropertyLineNb
          label="Challenge"
          value={monsterBlock.cr}
          onChange={(value) => handleChange("challenge_rating", value)}
          editMode={editMode}
        />
        <Action
          actions={monsterBlock.special_abilities}
          title={editMode ? "Special Abilities" : ""}
          editMode={editMode}
          onChange={(index, field, value) => handleActionChange("special_abilities", index, field, value)}
        />
        <Action
          actions={monsterBlock.actions}
          title="Actions"
          editMode={editMode}
          onChange={(index, field, value) => handleActionChange("special_abilities", index, field, value)}
        />
        <Action
          actions={monsterBlock.bonus_actions}
          title="Bonus Actions"
          editMode={editMode}
          onChange={(index, field, value) => handleActionChange("bonus_actions", index, field, value)}
        />
        <Action
          actions={monsterBlock.reactions}
          title="Reactions"
          editMode={editMode}
          onChange={(index, field, value) => handleActionChange("monsterBlock", index, field, value)}
        />
        <Action
          actions={monsterBlock.legendary_actions}
          desc={monsterBlock.legendary_desc}
          title="Legendary Actions"
          editMode={editMode}
          onChange={(index, field, value) => handleActionChange("legendary_actions", index, field, value)}
          handleDesc={(value) => handleChange("legendary_desc", value)}
        />
        <PropertyLineString
          label={editMode ? "Description" : ""}
          value={monsterBlock.desc}
          editMode={editMode}
          onChange={(value) => handleChange("desc", value)}
          type="textarea"
          classname="italic"
        />
      </div>
      <div
        className={`h-[5px] border-b-[1px] border-black bg-statBlockOrange ${editMode === true && "hidden"
          }`}
      />
    </div>
  );
};

export default StatBlockComponent;
