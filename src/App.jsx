import styles from './style';

import { Navbar, Billing, Hero, Business, CardDeal, Clients, CTA, Footer, Stats, Testimonials } from './components'



const App = () => (
 
  <div className='bg-pnkL-gradient w-full overflow-hidden'>
<div className={`${styles.paddingX} ${styles.flexCenter}`}>
<div className={`${styles.boxWidth}`}>
  <Navbar />
</div>
</div>

<div className={`bg-pnkL-gradient rounded-b-3xl  ${styles.flexStart}`}>
  <div className={`${styles.boxWidth}`}>
  <Hero />
  </div>
</div>

<div className={`bg-spez-gradient ${styles.paddingX} ${styles.flexStart}`}>
  <div className={`${styles.boxWidth}`}>
  <Stats />
  <Business />
  <Billing />
  <CardDeal />
  <Testimonials />
  <Clients />
  <CTA />
  <Footer />
  </div>
</div>

  </div>
)

export default App;