import React from "react";
import { SectionWrapper, SectionTypographyContainer, SectionPrivacyContainer } from "../../components/Section";

import { StyledPrivayContainer } from "./Privacy.styled";
import SEO from "../../seo";
import CountdownTimer from "../../components/CountdownTimer";
import { H2 } from "../../components/Typography";
import { Container } from "@material-ui/core";
import AppBar from "../../components/AppBar";
import { Space } from "../../components/Divider";
const Privacy = () => {
  return (
    <>
      <SectionWrapper>
        <SEO title="Privacy &amp; Policy" />
        <StyledPrivayContainer>
          <Container>
            <SectionTypographyContainer>
              <H2 size="50px">Privacy &amp; Policy</H2>
            </SectionTypographyContainer>
          </Container>
        </StyledPrivayContainer>
        <div className="countdownContainer">
          <CountdownTimer />
        </div>
        <SectionPrivacyContainer>
          <Container maxWidth="md" className="container">
            <AppBar label="Products Policy" className="appBar" />
            <p>
              VeFi is committed to protecting the privacy of its visitors. This Privacy Policy provides our visitors
              with an overview of the measures we have taken to show our commitment to this policy. It describes how
              VeFi collects, uses, stores, shares, and protects your information whenever you use VeFi System (the “VeFi
              site”).
            </p>
            <AppBar label="User Information" className="appBar" />
            <p>
              When you use Vefi Services, we collect information sent to us through your computer, mobile phone, or
              other access devices. This includes personal data that you volunteer on forms that you submit to us and in
              emails that you send to us. In addition, we automatically gather details of browser types and IP addresses
              of the users who visit our site. We do not release this information to any outside party, except in
              suspected fraud cases.If you create an account or use VeFi Services, we may collect the following types of
              information:
            </p>
            <p>
              <strong>Contact Information</strong> - your name, phone number, email address, date of birth, and other
              similar information;
            </p>
            <p>
              <strong>Financial Information</strong> - your full bank account and/or debit card details that you input
              when you use VeFi Services. If you do not use VeFi Services, you may opt-out of providing this
              information. When you use VeFi Services, we collect information about your transactions and/or your other
              activities on our website and we may continuously collect information about your computer, mobile device,
              or other access devices for fraud prevention purposes, to monitor for possible breaches of your VeFi
              Account, and to identify any malicious software or other activity that may harm VeFi or its users.
            </p>
            <p>
              You may choose to provide us with access to certain personal information stored by third parties such as
              social media sites (such as Facebook and Twitter). The information we have access to varies by site and is
              controlled by your privacy settings on that site and your authorization. By associating an account managed
              by a third party with your VeFi account and authorizing VeFi to have access to this information, you agree
              that VeFi may collect, store, and use this information in accordance with this Privacy Policy.Finally, we
              may collect additional information you may disclose to our customer support team
            </p>
            <AppBar label="Cookie Policy" className="appBar" />
            <p>
              What Are Cookies As is common practice with almost all professional websites this site uses cookies, which
              are tiny files that are downloaded to your computer, to improve your experience. This section describes
              what information they gather, how we use it, and why we sometimes need to store these cookies.How We Use
              Cookies We intend to use cookies for a variety of reasons detailed below:
            </p>
            <p>
              Recognize you as a VeFi user. If you create an account with us then we may use cookies for the management
              of the sign-up process and general administration. These cookies will usually be deleted when you log out,
              however in some cases, they may remain afterward to remember your site preferences when logged out. We may
              use both session and persistent cookies when you access our website or content. Session cookies expire and
              no longer have any effect when you log out of your account or close your browser. Persistent cookies
              remain on your browser until you erase them or they expire.
            </p>
            <p>
              We may use cookies when you are logged in so that we can remember this fact. This prevents you from having
              to log in every single time you visit a new page. These cookies are typically removed or cleared when you
              log out to ensure that you can only access restricted features and areas when logged in.
            </p>
            <p>
              When you submit data through a form, cookies may be set to remember your user details for future
              correspondence. In order to provide you with a great experience on this site, we provide the functionality
              to set your preferences for how this site runs when you use it. In order to remember your preferences, we
              may need to set cookies so that this information can be called whenever you interact with a page is
              affected by your preferences.
            </p>
            <p>
              We may also use Local Shared Objects, commonly referred to as "Flash cookies," to help ensure that your
              account security is not compromised, to spot irregularities in behavior to help prevent fraud and to
              support our sites and services.
            </p>
            <p>
              We may use cookies to collect information about your computer or other access devices to mitigate risk,
              help prevent fraud, and promote trust and safety.
            </p>
            <p>
              We shall encode our cookies so that only we can interpret the information stored in them. You are free to
              decline our cookies if your browser or browser add-on permits, but doing so may interfere with your use of
              VeFi Services. Disabling cookies will usually result in also disabling certain functionality and features
              of this site. The help section of most browsers or browser add-on provides instructions on blocking,
              deleting, or disabling cookies
            </p>
            <p>
              Third-Party Cookies In some special cases we also use cookies provided by trusted third parties. This
              section details which third-party cookies you might encounter through this site. We use Google Analytic,
              which is one of the most widespread and trusted analytic solutions on the web, to help us understand how
              you use the site and ways that we can improve your experience. These cookies may track things such as how
              long you spend on the site and the pages that you visit so we can continue to produce engaging content.
              For more information on Google Analytic cookies, see the official Google Analytic page.
            </p>
            <p>
              As we may eventually sell products it's important for us to understand statistics about how many of the
              visitors to our site actually make a purchase and as such this is the kind of data that certain cookies
              will track. This is important to you as it means that we can accurately make business predictions that
              allow us to monitor our advertising and product costs to ensure the best possible price. We intend to use
              several partners to advertise on our behalf and affiliate tracking cookies will simply allow us to see if
              our customers have come to the site through one of our partner sites so that we can credit them
              appropriately and where applicable allow our affiliate partners to provide any bonus that they may provide
              you for making a purchase.
            </p>
            <p>
              More Information If there is something you aren't sure you need or not, it's usually safer to leave
              cookies enabled in case it does interact with one of the features you use on our site. However, if you
              still need more information, please contact us.
            </p>

            <AppBar label="Personal Information" className="appBar" />
            <p>
              Throughout this policy, we use the term "personal information" to describe information that can be
              associated with a specific person and can be used to identify that person. This Privacy Policy does not
              apply to personal information that has been anonymized so that it does not and cannot be used to identify
              a specific user. Vefi takes reasonable precautions, as described herein, to protect your personal
              information from loss, misuse, unauthorized access, disclosure, alteration, and destruction.
            </p>
            <p>
              Our primary purpose in collecting personal information is to provide you with a secure, smooth, efficient,
              and customized experience. We may use your personal information to:
            </p>
            <div>
              <ul>
                <li>Provide VeFi Services and customer support you request;</li>
                <li>Process transactions and send notices about your transactions;</li>
                <li>Resolve disputes, collect fees, and troubleshoot problems;</li>
                <li>
                  Prevent and investigate potentially prohibited or illegal activities, and/or violations of our posted
                  user terms;
                </li>
                <li>
                  Customize, measure, and improve VeFi Services and the content and layout of our website and
                  applications;
                </li>
                <li>
                  Deliver targeted marketing, service update notices, and promotional offers based on your communication
                  preferences; and
                </li>
                <li>Verify your identity by comparing your personal information against third-party databases.</li>
              </ul>
            </div>
            <p>
              We will not use your personal information for purposes other than those purposes we have disclosed to you,
              without your permission. From time to time, we may request your permission to allow us to share your
              personal information with third parties.
            </p>
            <p>
              You may opt-out of having your personal information shared with third parties, or from allowing us to use
              your personal information for any purpose that is incompatible with the purposes for which we originally
              collected it or subsequently obtained your authorization. If you choose to so limit the use of your
              personal information, certain features or VeFi Services may not be available to you.
            </p>
            <p>
              We collect personal data that you volunteer on forms that you submit to us and in emails that you send to
              us. In addition, we automatically gather details of browser types and IP addresses of the users who visit
              our site. We do not release this information to any outside party, except in suspected fraud cases.
            </p>
            <p>
              We store and process your personal and transaction information, including certain payment information,
              where VeFi facilities or our service providers are located, and we protect it by maintaining physical,
              electronic, and procedural safeguards in compliance with applicable laws. We use computer safeguards such
              as firewalls and data encryption, we enforce physical access controls to our buildings and files, and we
              authorize access to personal information only for those employees who require it to fulfill their job
              responsibilities.
            </p>
            <p>
              Full credit card data is securely transferred and hosted off-site by a payment vendor in compliance with
              Payment Card Industry Data Security Standards (PCI DSS). This information is not accessible to VeFi staff.
            </p>
            <p>
              We store our customers' personal information securely throughout the life of the customer's VeFi Account.
              VeFi will retain your personal information for a minimum of five years or as necessary to comply with our
              legal obligations or to resolve disputes.
            </p>
            <AppBar label="Other Policies" className="appBar" />
            <div>
              <strong>Correct/Update:</strong>
              <blockquote>
                {" "}
                You may request that we amend any personal data that we are holding about you which is factually
                inaccurate. You can contact customer support stating your wishes.
              </blockquote>
            </div>
            <div>
              <strong>Links This website may contain links to other sites:</strong>
              <blockquote>
                VeFi is not responsible for the privacy practices of such other sites. This privacy statement applies
                solely to information collected by this website.
              </blockquote>
            </div>
            <div>
              <strong>Online Payment methods:</strong>
              <blockquote>
                VeFi is not associated with any of the trademarks which might appear visible in the Online Payment
                method lists or payment gateways – in this case, Paystack. VeFi does not itself support these payment
                methods or claim to be in partnership with them. Also, services provided by VeFi are not authorized,
                approved, endorsed, or sponsored by any of the payment methods we use or their respective trademark
                owners. Payment method listings are visible on the VeFi website for informative purposes only.
                Trademarks that might appear visible on the VeFi website, belong to the respective trademark owners
                alone.
              </blockquote>
            </div>
            <div>
              <strong>Data retention policy</strong>
              <blockquote>
                We retain your personal information as long as it is necessary and relevant for our operations. In
                addition, we may retain personal information from closed accounts to comply with national laws, prevent
                fraud, collect any fees owed, resolve disputes, troubleshoot problems, assist with any investigation,
                enforce our Terms of Service and take other actions permitted or required by applicable national laws.
              </blockquote>
            </div>
            <p>
              Contacting The Web Site If you have any questions about this Privacy Statement, the practices, or your
              dealing with this website, please contact us and your inquiry will be dealt with as soon as possible.
            </p>
            <Space />
          </Container>
        </SectionPrivacyContainer>
      </SectionWrapper>
    </>
  );
};

export default Privacy;
