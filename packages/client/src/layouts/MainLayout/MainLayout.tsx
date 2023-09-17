"use client";
import React, { useState } from "react";
import { footerCustomStyles, IMainLayout, styles } from "./index";
import { logo } from "@/constants";
import { Footer, Header } from "@/layouts/LayoutParts";
import { LayoutProvider } from "@/providers/";
import { Modal } from "@/atoms";
import { ThemeSwitcher } from "@/features";
import { AuthButtons } from "@/components";

/**
 *
 * The MainLayout component provides a Reusable layout structure for the application.
 * It includes a header with a logo and navigation elements. Content are Displayed in the main content.
 *
 * @component
 * @param {React.ReactNode} props.children - The content to be rendered within the main content area.
 * @param {Object} props.appData - Application data to be passed to the Header component.
 * @param {Array} props.navElements - Navigation elements to be passed to the Header component.
 * @returns {JSX.Element} The JSX representation of the MainLayout component.
 *
 * @example
 *  Using the MainLayout component
 * <MainLayout appData={appData} navElements={navElements}>
 * *   <div>Hello, world!</div>
 *  </MainLayout>
 *
 **/

const MainLayout: React.FC<IMainLayout> = ({ children, appData }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <LayoutProvider>
      <Header
        logo={logo}
        appData={appData}
        mobileMenuVisibility={isMenuVisible}
        mobileMenuVisibilityHandler={setIsMenuVisible}
      />
      <main className={styles.main}>{children}</main>
      <Footer />
      <Modal
        isVisible={isMenuVisible}
        visibilityHandler={setIsMenuVisible}
        footerElements={<ThemeSwitcher />}
        footerCustomStyles={footerCustomStyles}
      >
        <AuthButtons />
      </Modal>
    </LayoutProvider>
  );
};
export default MainLayout;
