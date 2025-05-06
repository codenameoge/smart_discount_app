import React from 'react';
import Hero from "./Hero";
import TodaysDeals from './TodaysDeals';
import BestDeals from './BestDeals';
import BlackFridaySale from './BlackFridaySale';
import RecentlyViewed from './RecentlyViewed';


function HomeDashboard() {
   return (
    <div>
      <Hero />
      <TodaysDeals />
      <BestDeals />
      <BlackFridaySale />
      <RecentlyViewed />
    </div>
  );
}
export default HomeDashboard;