---
to: pages/parcerias/<%= name %>/index.js
---

import LandingTemplate from '../../../layouts/LandingTemplate';

import MainSection from './MainSection';

function  <%= h.capitalize(name) %>() {
  return (
    <LandingTemplate>
      <MainSection />
    </LandingTemplate>
  );
}

export default <%= h.capitalize(name) %>;
