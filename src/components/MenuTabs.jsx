import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Filter from './Filter';
const levels = [1,2,3,4,5,6,7,8,9,10,11,12]
const atributes=["DARK","DIVINE","EARTH","FIRE","LIGHT","WATER","WIND"]

const MenuTabs = ({setLevel, setAtribute}) => {
  console.log(setLevel)
  return (
    <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Spell card</Tab>
    </TabList>

    <TabPanel>
      <h2 >Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <Filter options={levels} setFilter={setLevel} className='level'></Filter>
      <Filter options={atributes} setFilter={setAtribute}></Filter>
    </TabPanel>
  </Tabs>
  );
};

export default MenuTabs;
