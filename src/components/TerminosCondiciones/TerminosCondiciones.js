import styled from "styled-components";
import { useEffect } from "react";
export default function PoliticasPrivacidad() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const introduccion = ItroduccionRef.current;
  //     const { y } = introduccion.getBoundingClientRect();
  //     const active = y <= 0 ? true : false;

  //     if (active) {
  //       setIntroducion(!IntroducionContent);
  //       console.log(IntroducionContent);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  useEffect(() => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <div className="container mt-5 ">
      <Wrapper>
        <Title>Terms and Conditions</Title>
        <Content_Subtitle>
          <SubTitle>Online Classes - Provider</SubTitle>
          <ContentSubtitle>
            Ingenio Languages is a platform provided by Ingenio Online. Online
            classes are taught by Ingenio Languages Located in Ecuador in Santo
            Domingo de los Colorados, Urb. Ciudad Verde 106- 12. Websites: www.
            Ingeniolanguages.com and www. Ingenioonline.com Phone number: +593
            998546897
          </ContentSubtitle>
        </Content_Subtitle>
        <Content>
          <BoxContent>
            <ItemsContent>Services Eligibility</ItemsContent>
            <ItemsSubContent>
              Ingenio Languages services are available to and may only be used
              by persons over the age of 18 who can enter into legally binding
              contracts under applicable law. Persons under the age of 18 may
              use our services only together with and under the supervision of
              their legal representative. In this case, the legal representative
              is responsible for each and every one of the student's activities.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent Bold>RIGHTS AND LIMITS</ItemsContent>
            <ItemsContent>Your license to Ingenio Languages</ItemsContent>
            <ItemsSubContent>
              Ingenio Languages grants you a limited, non-transferable,
              non-sublicensable, non-exclusive right to access and use the
              services and software solely for your personal, non-commercial
              use, and subject to the policies and restrictions posted on our
              website.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Representations and Warranties</ItemsContent>
            <ItemsSubContent>
              If you use the Website as a student or parent, (i) you agree to
              honor any commitments you make to a tutor through the Website;
              (ii) agree that you will not circumvent or manipulate our fee
              structure, billing process, or fees owed to Ingenio Languages or
              the tutor; failing to deliver payment for items purchased by you
              to guardians; and (iii) you agree to make good faith efforts to
              interact with the online tutor during the Tutor Session.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Limits</ItemsContent>
            <ItemsSubContent>
              While using the Services, you agree to:
            </ItemsSubContent>
            <ItemsSubContent>
              A. comply with all applicable laws, including, but not limited to,
              privacy laws, copyright laws, anti-spam laws, tax laws, etc.
            </ItemsSubContent>
            <ItemsSubContent>
              B. provide us with accurate information and keep it up to date;
            </ItemsSubContent>
            <ItemsSubContent>
              C. use the services and the website in a legal, relevant and
              adequate manner to the applicable laws.
            </ItemsSubContent>
            <ItemsSubContent>
              Any use of the website that Ingenio Languages, in its sole
              discretion, deems inappropriate and/or offensive may result in the
              suspension and/or termination of a user with or without notice.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>The reservation process</ItemsContent>
            <ItemsSubContent>
              Clients are entitled to a free demo class. For which, they must
              fill out a complete online registration form, requesting the free
              trial class on our website: www.ingeniolanguages.coms
            </ItemsSubContent>
            <ItemsSubContent>
              After filling out the form, an assistant will contact you to
              choose the day and time of your trial class. After the trial class
              you will be able to purchase one of the various class packages
              offered by Ingenio Languages by adding them to the shopping cart.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent Bold>Cancellation fees</ItemsContent>
            <ItemsContent>Private lessons from online tutors </ItemsContent>
            <ItemsSubContent>
              We offer a 100% money back guarantee on the first lesson. If you
              are not satisfied with your lessons, you can contact us within the
              first week for a full refund (or choose another teacher). Every
              time a lesson is cancelled, you can reschedule the class for
              another day and time.
            </ItemsSubContent>
            <ItemsSubContent>
              If you or we cancel a lesson for any reason, we will refund that
              lesson if you do not wish to reschedule.
            </ItemsSubContent>

            <ItemsSubContent>
              Cancellations must be made at least 24 hours before the class.
              Otherwise, the class fee will not be rescheduled or refunded. It
              is possible to cancel or refund discounted lessons; however, the
              refund will be based on the non-promotional value.
            </ItemsSubContent>
            <ItemsSubContent>
              LBefore you start your classes or when you have completed less
              than 3 lessons, you can cancel the purchased package and receive a
              100% refund, otherwise, from the third lesson on, 20% of the value
              to be reimbursed will be deducted for administrative expenses.
            </ItemsSubContent>
            <ItemsSubContent>
              Tuition is non-refundable if a participant logs in late or wants
              to finish the class before the allotted time. Ingenio Languages
              will not refund any fees due to absence, illness or technological
              circumstances. It is your responsibility to provide a working
              Internet connection; we cannot be responsible for this.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Monthly package class count. </ItemsContent>
            <ItemsSubContent>
              The number of monthly lessons you buy must be used during the
              month, otherwise, the lessons are not cumulative for the following
              month.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Progress report and course resources</ItemsContent>
            <ItemsSubContent>
              The progress report shows the student their progress in the
              language. We have organized our students' progress based on the
              Common European Framework of Reference for Languages. The
              resources that will be provided for your lessons have the
              intellectual property of Ingenio Languages or external publishers.
              By purchasing any of these resources, Ingenio Languages grants you
              certain rights to use the resources for limited purposes. This
              section describes the agreement and tells you what you can do with
              the resources.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>
              Internal links to Ingenio Languages resources
            </ItemsContent>
            <ItemsSubContent>
              Ingenio Languages resource sheets are for personal and
              non-commercial use. You may not modify, copy, distribute,
              transmit, display, perform, reproduce, publish, license, create
              derivative works from, transfer, or sell any information,
              software, products, or services obtained from these resources.
            </ItemsSubContent>
            <ItemsSubContent>
              We check the functionality of our internal links on our resources
              and our own content on a regular basis. If you find a broken link
              or errors in our content, please contact us; We will resolve it
              immediately and provide you with the updated version of the
              resource.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>
              External links to resources on other websites
            </ItemsContent>
            <ItemsSubContent>
              We provide links to external resources from third party websites.
              We check the functionality of these links on a regular basis. If
              you find a broken link, please contact us; We will try to fix it
              and provide you with the updated version of the resource.
            </ItemsSubContent>
            <ItemsSubContent>
              We are not responsible for the content of external resources and
              we do not own or grant any rights to these resources. By using
              these external resources, you agree to the respective Terms and
              Conditions of these third parties.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>
              PDF not working/opening/downloading properly
            </ItemsContent>
            <ItemsSubContent>
              In order to download and view the resource sheets, you will need a
              compatible device, working Internet access, and compatible PDF
              reader software. Your ability to use resource sheets and their
              performance may be affected by these factors. Such system
              requirements are your responsibility.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Text book </ItemsContent>
            <ItemsSubContent>
              It is highly recommended that the student purchase the physical
              textbook to accelerate their learning process, however, it will be
              optional whether or not the student wishes to purchase the
              textbook for their language classes.
            </ItemsSubContent>
            <ItemsSubContent>
              The book purchase process will be done directly with the
              respective publisher. The process of buying, sending and receiving
              it will be between the student and the publisher.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>General notes</ItemsContent>
            <ItemsSubContent>
              All coupons are valid for up to one year after purchase. If you
              have come to us through an agent, their Terms and Conditions may
              apply to you; Ingenio Languages reserves the right to apply its
              own terms.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Prohibited crimes</ItemsContent>
            <ItemsSubContent>
              The following actions are not allowed at Ingenio Languages and may
              result in account deactivation and a ban from taking further
              classes with Ingenio Languages.
            </ItemsSubContent>
            <ItemsCircle>
              <ItemCircle_subItem>
                Contact Ingenio Languages teachers or offer payments outside the
                Ingenio Languages system.
              </ItemCircle_subItem>
              <ItemCircle_subItem>
                Circumvent or manipulate our fee structure, billing process, or
                fees owed to Ingenio Languages.
              </ItemCircle_subItem>
              <ItemCircle_subItem>
                Failure to deliver payment for services purchased by you.
              </ItemCircle_subItem>{" "}
              <ItemCircle_subItem>
                Sharing the learning material with a third party. This includes
                copying, reproducing, uploading, publishing or distributing the
                materials in any way without the prior written permission of
                Ingenio Languages.
              </ItemCircle_subItem>
              <ItemCircle_subItem>
                Transfer your account and login credentials to another party
                without our prior written consent.
              </ItemCircle_subItem>
              <ItemCircle_subItem>
                Provide or post false, misleading or inaccurate information.
              </ItemCircle_subItem>
            </ItemsCircle>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Cómo contactarnos</ItemsContent>
            <ItemsSubContent>
              <b>Ingenio Languages</b>
              <br />
              <b>Ingenio Online Centro de Formación Integral Ingenio </b>
              <br />
              <b>Director: Wilson Cisneros.</b>
              <br />
              <b>Coordinadora Académica: Libary Manjarrés</b>
            </ItemsSubContent>
          </BoxContent>
        </Content>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 328px 624px;
  grid-template-areas:
    "Table Title"
    "Table SubTitle"
    "Table Content";
  row-gap: 30px;
  column-gap: 91px;
`;
const Table = styled.div`
  grid-row: 2 / 4;
  grid-column: 1 / 2;
  width: 325px;
  position: fixed;
  top: 32px;
  margin-top: 187px;
`;
const BoxSubTable = styled.div`
  padding: 24px 16px;
  position: sticky;
  z-index: auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
  position: sticky;
  margin: 0;
`;
const TitleTable = styled.h4`
  font-size: 21px;
  color: #212429;
  font-weight: 600;
  margin-bottom: 1rem;
`;
const TableItem = styled.a`
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  padding: 16px;
  border-left: 2px solid rgb(232, 234, 239);
  cursor: pointer;
  user-select: none;
  transition: all 300ms ease 0s;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: ${(props) => (props.activado ? "#0803d2" : "#212429")};
  opacity: ${(props) => (props.activado ? "1" : "0.5")}; ;
`;

const Title = styled.h2`
  grid-area: Title;
  font-size: 64px;
  color: black;
  line-height: 78px;
  margin: 0;
  font-weight: 700;
  margin-top: 10px;
`;

const Content = styled.div`
  grid-area: Content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  row-gap: 30px;
  & > p {
    margin: 0;
  }
`;
const BoxContent = styled.article``;
const ItemsContent = styled.h4`
  font-weight: ${(props) => (props.Bold ? "700" : "600")};
  font-size: ${(props) => (props.Bold ? "32px" : "24px")};
  color: #212429;
  margin: 0px 0px 16px;
`;
const ItemsSubContent = styled.p`
  color: #212429;
`;
const Content_Subtitle = styled.div`
  grid-area: SubTitle;
  align-self: center;
`;
const SubTitle = styled.h4`
  font-size: 3rem;
  font-weight: 700;
  color: black;
`;
const ContentSubtitle = styled.p`
  color: #27272a;
`;

const ItemsCircle = styled.ul`
  margin-left: 2.5rem;
`;
const ItemCircle_subItem = styled.li`
  font-size: 1.1rem;
  letter-spacing: 0.025rem;
  color: #212429;
`;

{
  /* <ItemsCircle>
  <ItemCircle_subItem>
    Cualquier uso que viole la legislación ecuatoriana o vulnere los derechos de
    terceros.
  </ItemCircle_subItem>
  <ItemCircle_subItem>
    La publicación o transmisión de cualquier contenido que, a juicio de Ingenio
    Languages, resulte violento, obsceno, abusivo, ilegal, racista, xenófobo o
    difamatorio.
  </ItemCircle_subItem>
  <ItemCircle_subItem>
    Hackear números de serie de programas u otrocontenido que viole los derechos
    de propiedad intelectual de terceros.
  </ItemCircle_subItem>{" "}
  <ItemCircle_subItem>
    La recopilación y / o uso de datos personales de otros usuarios sin su
    consentimiento expreso o en violación de la LOPD, sobre la protección de las
    personas en lo que respecta al tratamiento de datos personales y sobre la
    libre circulación de dichos datos.
  </ItemCircle_subItem>
  <ItemCircle_subItem>
    Uso del servidor de correo y las direcciones de correo electrónico del
    dominio para enviar spam
  </ItemCircle_subItem>
</ItemsCircle>; */
}
