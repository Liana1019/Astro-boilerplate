import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => {
  // 处理鼠标悬停显示图片
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = document.createElement('img');
    img.src = '/assets/images/WeChat.png'; // 图片地址
    img.alt = 'WeChat QR Code';
    img.style.position = 'absolute';
    img.style.left = '50%';
    img.style.top = '100%';
    img.style.transform = 'translateX(-50%)';
    img.style.marginTop = '8px';
    img.style.border = '1px solid #ccc';
    img.style.borderRadius = '5px';
    img.style.width = '160px';
    img.style.height = '160px';
    img.style.zIndex = '1000';
    img.id = 'wechat-img'; // 为图片添加一个 ID，以便移除时使用
    const parent = e.target as HTMLElement;
    parent.style.position = 'relative'; // 确保父元素是相对定位
    parent.appendChild(img);
  };

  // 处理鼠标离开时移除图片
  const handleMouseLeave = () => {
    const img = document.getElementById('wechat-img');
    if (img) img.remove();
  };

  return (
    <Section>
      <NavbarTwoColumns>
        <a href="https://juhezhileng.gys.cn/">
          <Logo
            icon={
              <svg
                className="mr-1 h-10 w-10 stroke-cyan-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                <rect x="15" y="4" width="6" height="16" rx="1"></rect>
                <path d="M4 20h14"></path>
              </svg>
            }
            name="杭州jhzl设备有限公司"
          />
        </a>

        <NavMenu>
          {/* 微信联系 */}
          <div
            onMouseEnter={handleMouseEnter} // 触发悬停事件
            onMouseLeave={handleMouseLeave} // 触发离开事件
          >
            <NavMenuItem href="#">微信联系</NavMenuItem>
          </div>

          {/* 联系方式 */}
          <NavMenuItem href="/posts/my-contact-information/">
            联系方式
          </NavMenuItem>
        </NavMenu>
      </NavbarTwoColumns>
    </Section>
  );
};

export { Navbar };
