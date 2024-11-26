// @ts-ignore
import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

// @ts-ignore
const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          您好，欢迎光临 <GradientText>杭州jhzl设备有限公司</GradientText> 👋
        </>
      }
      description={
        <>
          <p>
            公司经营范围包括：{' '}
            <a className="text-cyan-400 hover:underline" href="/">
              制冷、空调设备销售
            </a>{' '}
            ；
            <a className="text-cyan-400 hover:underline" href="/">
              货物进出口
            </a>{' '}
            ；
            <a className="text-cyan-400 hover:underline" href="/">
              家用电器零配件销售
            </a>{' '}
            ； 机械零件、零部件销售；五金产品零售。
          </p>

          <br />
          <br />

          <p style={{ marginLeft: '1em' }}>
            联系方式：
            <br />
            王先生：18072745457
            <br />
            黄先生：18356097015
          </p>
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      // socialButtons={
      //   <>
      //     <a href="/">
      //       <HeroSocial
      //         src="/assets/images/twitter-icon.png"
      //         alt="Twitter icon"
      //       />
      //     </a>
      //     <a href="/">
      //       <HeroSocial
      //         src="/assets/images/facebook-icon.png"
      //         alt="Facebook icon"
      //       />
      //     </a>
      //     <a href="/">
      //       <HeroSocial
      //         src="/assets/images/linkedin-icon.png"
      //         alt="Linkedin icon"
      //       />
      //     </a>
      //     <a href="/">
      //       <HeroSocial
      //         src="/assets/images/youtube-icon.png"
      //         alt="Youtube icon"
      //       />
      //     </a>
      //   </>
      // }
    />
  </Section>
);

export { Hero };
