import { Section } from 'astro-boilerplate-components';

// import betterStackLogo from '../../public/assets/images/better-stack-white.png';
// import clerkLogo from '../../public/assets/images/clerk.png';
// import crowdinLogo from '../../public/assets/images/crowdin-white.png';
// import nextlessLogo from '../../public/assets/images/nextlessjs.png';
// import sentryLogo from '../../public/assets/images/sentry-white.png';
// import tursoLogo from '../../public/assets/images/turso.png';

const Sponsors = () => (
  <Section title="合作品牌">
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              // href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
                href="https://www.donper.com/"
                target="_blank"
            >
              {/*<img src={sentryLogo.src} alt="东贝" width={260} height={224} />*/}
              <img src="/assets/images/donper-logo.png"
                   alt="东贝"
                   width={260}
                   height={180} />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              // href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
              href="http://www.qjzl.com/"
              target="_blank"
            >
              <img
                // src={betterStackLogo.src}
                src="public/assets/images/wansheng.png"
                alt="万胜"
                width={260}
                height={180}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://www.embraco.com/">
              <img
                  // src={nextlessLogo.src}
                  src="/assets/images/embraco-logo.png"
                  alt="Embraco"
                  width={260}
                  height={180} />
            </a>
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://www.secop.com/cn/"
              target="_blank"
            >
              <img
                // src={clerkLogo.src}
                // alt="Clerk – Authentication & User Management for Next.js"
                src="public/assets/images/secop-logo.png"
                alt="思科普"
                width={260}
                height={180}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="http://www.hznhzl.com/"
              target="_blank"
            >
              <img
                src="public/assets/images/nihong-logo.png"
                alt="霓虹"
                width={260}
                height={180}
              />
            </a>
          </td>


          <td className="border-2 border-gray-300 p-3">
            <a href=""
               target="_blank">
              <img
                src="public/assets/images/huayun-logo.png"
                alt="阿诺丹"
                width={260}
                height={180}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
