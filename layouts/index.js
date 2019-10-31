import Page from './main';
import HowOurProtectionWorks from '../components/sections/HowOurProtectionWorks';
import SeeOurBlog from '../components/sections/SeeOurBlog';
import Refund from '../components/sections/Refund';
import MembersTestimonials from '../components/sections/MemberTestimonials';
import FrequentlyAskedQuestions from '../components/sections/FrequentlyAskedQuestions';
import Media from '../components/sections/Media';

function LandingTemplate({ children }) {
  return (
    <Page>
      {children}
      <HowOurProtectionWorks />
      <SeeOurBlog />
      <Refund />
      <MembersTestimonials />
      <FrequentlyAskedQuestions />
      <Media />
    </Page>
  );
}

export default LandingTemplate;
