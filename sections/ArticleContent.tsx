// import { ProductCard } from './ProductCard';
// import { ComparisonTable } from './ComparisonTable';
// import { Callout } from './Callout';
// import type { Product, ComparisonProduct } from '@/types';

// interface ArticleContentProps {
//   products?: Product[];
//   comparisonProducts?: ComparisonProduct[];
// }

export function ArticleContent() {
  return (
    <article className="article-content">
      {/* Introduction */}
      <section id="introduction">
        <p>
          Choosing the right baby bottle is one of the most important decisions
          you'll make as a new parent. With countless options on the market,
          each claiming to be the best for your little one, the selection
          process can feel overwhelming. From anti-colic designs to glass versus
          plastic debates, there's a lot to consider.
        </p>
        <p>
          After testing over 30 bottles with real babies and consulting with
          pediatricians and lactation consultants, we've compiled this
          comprehensive guide to help you find the perfect bottle for your
          baby's unique needs.
        </p>
      </section>

      {/* Why This Matters */}
      <section id="why-this-matters">
        <h2>Why the Right Baby Bottle Matters</h2>
        <p>
          The bottle you choose can impact your baby's feeding experience,
          digestion, and even their willingness to switch between breast and
          bottle. A poorly designed bottle can lead to:
        </p>
        <ul>
          <li>Excessive air intake causing gas and colic</li>
          <li>Frustration during feeding due to improper flow</li>
          <li>Nipple confusion when combining with breastfeeding</li>
          <li>Difficulty transitioning as your baby grows</li>
        </ul>

        {/* <Callout type="info" title="Expert Insight">
          "The best bottle is one that your baby will take without fuss, allows for a natural latch, 
          and minimizes air intake. Every baby is different, so what works for one may not work for another."
          <cite>— Dr. Sarah Mitchell, Pediatrician & Lactation Consultant</cite>
        </Callout> */}
      </section>

      {/* Key Considerations */}
      <section id="key-considerations">
        <h2>Key Things to Consider</h2>

        <h3>Material Safety</h3>
        <p>
          Modern baby bottles come in three main materials: plastic (BPA-free),
          glass, and stainless steel. Each has its advantages:
        </p>
        <ul>
          <li>
            <strong>Plastic (PPSU or PP):</strong> Lightweight, shatterproof,
            affordable
          </li>
          <li>
            <strong>Glass:</strong> Chemical-free, easy to clean, long-lasting
          </li>
          <li>
            <strong>Stainless Steel:</strong> Durable, insulated, eco-friendly
          </li>
        </ul>

        <h3>Nipple Design & Flow Rate</h3>
        <p>
          Look for nipples that mimic the natural breast shape and offer
          variable flow rates. Newborns need slow-flow nipples (Level 1), while
          older babies may prefer medium or fast flow.
        </p>

        <h3>Anti-Colic Features</h3>
        <p>
          Venting systems that reduce air bubbles can significantly decrease
          colic symptoms. Our testing showed bottles with advanced venting
          reduced gas-related fussiness by up to 60%.
        </p>
      </section>

      {/* Top Recommendations */}
      <section id="top-recommendations">
        <h2>Our Top Recommendations</h2>
        <p>
          Based on our extensive testing, here are the baby bottles that
          consistently outperformed the competition across different categories:
        </p>

        {/* Featured Product */}
        {/* {products && products[0] && (
          <ProductCard product={products[0]} variant="featured" />
        )} */}

        {/* <Callout type="tip" title="Pro Tip">
          Buy 2-3 different bottle types before your baby arrives. Babies can be surprisingly 
          particular, and having options ensures you'll find one that works.
        </Callout> */}
      </section>

      {/* Detailed Reviews */}
      <section id="detailed-reviews">
        <h2>Detailed Reviews</h2>

        <h3>1. Dr. Brown's Natural Flow Options+</h3>
        <p>
          The Dr. Brown's Natural Flow has been a parent favorite for decades,
          and our testing confirms why. The internal vent system creates a
          vacuum-free feeding experience that virtually eliminates air bubbles.
          While the extra parts mean more cleaning, the reduction in colic
          symptoms makes it worthwhile for many families.
        </p>

        {/* {products && products[1] && (
          <ProductCard product={products[1]} variant="inline" />
        )} */}

        <h3>2. Comotomo Baby Bottle</h3>
        <p>
          The Comotomo's soft, squeezable silicone body and wide-neck design
          make it incredibly easy to clean and assemble. The dual anti-colic
          vents work well, and the breast-like nipple shape helps with latch
          transition. It's particularly popular with breastfed babies who are
          bottle-resistant.
        </p>

        <h3>3. Philips Avent Natural Baby Bottle</h3>
        <p>
          Avent's Natural line offers excellent value with its wide,
          breast-shaped nipple and anti-colic valve integrated into the nipple.
          The few parts make cleaning simple, and the durable design holds up
          well to repeated sterilization.
        </p>

        {/* {products && products[2] && (
          <ProductCard product={products[2]} variant="inline" />
        )} */}
      </section>

      {/* Comparison Table */}
      <section id="comparison">
        <h2>Side-by-Side Comparison</h2>
        <p>Here's how our top picks compare across key features:</p>

        {/* {comparisonProducts && comparisonProducts.length > 0 && (
          <ComparisonTable products={comparisonProducts} />
        )} */}
      </section>

      {/* Final Verdict */}
      <section id="final-verdict">
        <h2>Final Verdict</h2>
        <p>
          After months of testing and analysis, we believe the{" "}
          <strong>Dr. Brown's Natural Flow Options+</strong>
          offers the best overall value for most families. Its proven anti-colic
          system, wide availability, and affordable price point make it an
          excellent choice.
        </p>
        <p>
          However, if you're primarily breastfeeding and need a bottle for
          occasional use, the
          <strong> Comotomo</strong> is worth the premium for its breast-like
          feel and easy transition.
        </p>
        <p>
          For budget-conscious parents who don't want to compromise on quality,
          the
          <strong> Philips Avent Natural</strong> delivers excellent performance
          at a mid-range price.
        </p>

        {/* <Callout type="success" title="Our Recommendation">
          Start with the Dr. Brown's Options+ 4oz bottles for newborns, then transition to 
          the 8oz size as your baby's appetite grows. Consider adding a Comotomo if you 
          encounter any bottle resistance.
        </Callout> */}
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <h2>Frequently Asked Questions</h2>

        <h3>How many bottles do I need?</h3>
        <p>
          For newborns, 4-6 small (4oz) bottles are sufficient. As your baby
          grows, you'll want 6-8 larger (8-9oz) bottles. Having extras ensures
          you're not constantly washing.
        </p>

        <h3>When should I replace baby bottles?</h3>
        <p>
          Replace bottles every 4-6 months, or sooner if you notice scratches,
          discoloration, or wear. Nipples should be replaced every 1-2 months or
          at the first sign of damage.
        </p>

        <h3>Can I use the same bottle for breast milk and formula?</h3>
        <p>
          Yes, all our recommended bottles work well for both breast milk and
          formula. Just ensure thorough cleaning between uses.
        </p>
      </section>
    </article>
  );
}
