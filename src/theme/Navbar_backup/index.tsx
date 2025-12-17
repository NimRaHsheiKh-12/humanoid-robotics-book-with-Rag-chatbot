// my-humanoid-book/src/theme/Navbar/index.tsx
import React from 'react';
import { useThemeConfig, ErrorCauseBoundary } from '@docusaurus/theme-common';
import { splitNavbarItems, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import LanguageToggle from '@site/src/components/LanguageToggle'; // Import LanguageToggle

function NavbarItems({ items }: { items?: any[] }) {
  // Provide a default empty array if items is undefined
  const safeItems = items ?? [];
  return (
    <>
      {safeItems.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.\nFull item: ${JSON.stringify(item, null, 2)}`,
              { cause: error },
            )
          }
        >
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

function NavbarContentLayout({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">
        {right}
        {/* Integrate LanguageToggle here */}
        <LanguageToggle />
      </div>
    </div>
  );
}

export default function Navbar(): JSX.Element {
  const themeConfig = useThemeConfig();
  const items = themeConfig?.navbar?.items ?? []; // Safe default

  const hideOnScroll = themeConfig?.navbar?.hideOnScroll ?? false;
  const style = themeConfig?.navbar?.style ?? '';

  const mobileSidebar = useNavbarMobileSidebar();
  const { leftItems, rightItems } = splitNavbarItems(items);

  const show = hideOnScroll ? mobileSidebar.shouldAddHideVersion : true;

  // Safe search item
  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <nav className={`navbar navbar--fixed-top ${hideOnScroll ? 'navbar--hideable' : ''} ${style}`}>
      <NavbarContentLayout
        left={
          <>
            <NavbarMobileSidebarToggle />
            <NavbarLogo />
            <NavbarItems items={leftItems} />
          </>
        }
        right={
          <>
            <NavbarItems items={rightItems} />
            <NavbarColorModeToggle className="margin-right--md" />
            {searchBarItem && (
              <ErrorCauseBoundary
                onError={(error) =>
                  new Error(
                    `A theme navbar item failed to render.\nFull item: ${JSON.stringify(searchBarItem, null, 2)}`,
                    { cause: error },
                  )
                }
              >
                <NavbarItem {...searchBarItem} />
              </ErrorCauseBoundary>
            )}
          </>
        }
      />
    </nav>
  );
}
