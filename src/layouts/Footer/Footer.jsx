import Icon from "@/components/Icon/Icon"
import "./Footer.scss"
import Socials from "@/components/Socials"

const Footer = () => {
  const menuItem = [
    {
      title: "Home",
      linkForTitle: "/",
      links: [
        { linkLabel: "Categories", linkHref: "/categories" },
        { linkLabel: "Devices", linkHref: "/devices" },
        { linkLabel: "Pricing", linkHref: "/pricing" },
        { linkLabel: "FAQ", linkHref: "/faq" },
      ],
    },
    {
      title: "Movies",
      linkForTitle: "/movies",
      links: [
        { linkLabel: "Gernes", linkHref: "/gernes" },
        { linkLabel: "Trending", linkHref: "/trending" },
        { linkLabel: "New Release", linkHref: "/new-release" },
        { linkLabel: "Popular", linkHref: "/popular" },
      ],
    },
    {
      title: "Shows",
      links: [
        { linkLabel: "Gernes", linkHref: "/gernes" },
        { linkLabel: "Trending", linkHref: "/trending" },
        { linkLabel: "New Release", linkHref: "/new-release" },
        { linkLabel: "Popular", linkHref: "/popular" },
      ],
    },
    {
      title: "Support",
      links: [{ linkLabel: "Contact Us", linkHref: "/contacts" }],
    },
    {
      title: "Subscription",
      links: [
        { linkLabel: "Plans", linkHref: "/plans" },
        { linkLabel: "Features", linkHref: "/features" },
      ],
    },
    {
      title: "Connect With Us",

      socialLinks: [
        {
          label: "FaceBook",
          iconName: "facebook",
          href: "https://www.facebook.com/",
        },
        {
          label: "Twitter",
          iconName: "twitter",
          href: "https://www.x.com/",
        },
        {
          label: "LinkedIn",
          iconName: "linked-in",
          href: "https://www.linkedin.com/",
        },
      ],
    },
  ]

  const extraLinks = ["Terms of Use", "Privacy Policy", "Cookie Policy"]
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          {menuItem.map(
            ({ title, linkForTitle, links, socialLinks }, index) => {
              return (
                <div className="footer__menu-column" key={index}>
                  <a href={linkForTitle} className="footer__menu-title h6">
                    {title}
                  </a>
                  {links?.length > 0 && (
                    <ul className="footer__menu-list">
                      {links.map(({ linkLabel, linkHref }, index) => {
                        return (
                          <li className="footer__menu-item" key={index}>
                            <a
                              title={linkLabel}
                              aria-label={linkLabel}
                              className="footer__menu-link"
                              href={linkHref ? linkHref : ""}
                            >
                              {linkLabel}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                  {socialLinks?.length > 0 && (
                    <Socials
                      className="footer__soc1als"
                      socialLinks={socialLinks}
                    />
                  )}
                </div>
              )
            }
          )}
        </nav>
        <div className="footer__extra">
          <div className="footer__copyright">
            @<time datetime="2025">2025</time> streamvibe, All Rights Reserved
          </div>

          <ul className="footer__extra-list">
            {extraLinks.map((link, index) => {
              return (
                <li className="footer__extra-item" key={index}>
                  <a
                    className="footer__extra-link"
                    href="/"
                    title={link}
                    aria-label={link}
                  >
                    {link}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
