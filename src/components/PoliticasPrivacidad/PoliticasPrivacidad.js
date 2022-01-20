import styled from "styled-components";
import { useEffect } from "react";
export default function PoliticasPrivacidad() {
  // const ItroduccionRef = useRef();
  // const [IntroducionContent, setIntroducion] = useState(false);
  // useEffect(() => {
  // const handleScroll = () => {
  //   const introduccion = ItroduccionRef.current;
  //   const { y } = introduccion.getBoundingClientRect();
  //   const active = y <= 0 ? true : false;

  //   if (active) {
  //     setIntroducion(!IntroducionContent);
  //     console.log(IntroducionContent);
  //   }
  // };
  // window.addEventListener("scroll", handleScroll);

  // return () => {
  //   window.removeEventListener("scroll", handleScroll);
  // };
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
        {/* <Table>
          <BoxSubTable>
            <TitleTable>Content</TitleTable>
            <TableItem activado={true}>Valoramos tu privacidad</TableItem>
            <TableItem>Recopilación y uso de datos</TableItem>
            <TableItem>Derechos de autor de Ingenio Languages</TableItem>
            <TableItem>Uso de cookies</TableItem>
            <TableItem>Propiedad intelectual del contenido alojado</TableItem>
            <TableItem>Protección de la información alojada</TableItem>
            <TableItem>Contactos</TableItem>
          </BoxSubTable>
        </Table> */}
        <Title>Privacy Policy </Title>
        <Content_Subtitle>
          <SubTitle>We value your privacy</SubTitle>
          <ContentSubtitle>
            “Ingenio Languages” is part of the “Ingenio” family, as well as the
            Comprehensive Training Center “Ingenio Online”.
          </ContentSubtitle>
          <ContentSubtitle>
            At Ingenio Languages, we know that you care about the protection of
            your personal information and how it is used, and we comply with all
            applicable data protection legislation.
          </ContentSubtitle>
          <ContentSubtitle>
            This policy describes our online information practices and the
            choices you can make about how your information is collected and
            used.
          </ContentSubtitle>
          <ContentSubtitle>
            Please read this policy carefully because, by visiting or using our
            website, you consent to your data being processed in accordance with
            this Privacy Policy. The policy does not apply to other websites
            that can be accessed through links, for which Ingenio Languages is
            not responsible in any way.
          </ContentSubtitle>
        </Content_Subtitle>
        <Content>
          <BoxContent>
            <ItemsContent>
              Protection of personal data according to the LOPD (Organic Law of
              Protection of Personal Data of Ecuador)
            </ItemsContent>
            <ItemsSubContent>
              The purpose of this law is to guarantee the right to personal data
              protection, which includes access to and decision on information
              and data of this nature, as well as its corresponding protection.
            </ItemsSubContent>
            <ItemsSubContent>
              In accordance with our legal obligation, we, Ingenio Languages,
              want to inform you about the collection and use of your personal
              data. All personal information collected through forms on the
              ingeniolanguages.com website is automatically collected on a
              secure server.
            </ItemsSubContent>
            <ItemsSubContent>
              The collection and automated processing of personal data serves to
              maintain business relationships and to inform and advise on offers
              and news of Training. These data will not be passed on to third
              parties under any circumstances. Ingenio Languages takes the
              necessary measures to guarantee the security, integrity and
              confidentiality of your data in accordance with the provisions of
              the Official Registry Supplement No. 459 of May 26, 2021 where the
              Organic Law on Protection of Personal Data was published.
            </ItemsSubContent>
            <ItemsSubContent>
              In the following link you will find the full text of the law:
              Organic Law on Personal Data Protection
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Data Collection and Use</ItemsContent>
            <ItemsSubContent>
              When you make a reservation for a course on our site, we will need
              to collect certain information about you, such as your name,
              country, email address, gender, telephone number and age. We do
              not share your personal information with third parties.
            </ItemsSubContent>
            <ItemsSubContent>
              Ingenio Languages uses the information we collect from you to
              process your requests and to inform you of our new offerings and
              service features. As part of the service that Ingenio Languages
              provides you, we will communicate via e-mail or by phone call to
              inform you of our offers, services or other relevant information
              related to our school. But your personal information will not be
              provided to third party companies as we will only communicate with
              you directly.
            </ItemsSubContent>
            <ItemsSubContent>
              Ingenio Languages manages SAS servers, therefore, you will not run
              any risk of information leaking with third parties through shared
              servers.
            </ItemsSubContent>
            <ItemsSubContent>
              In the cases in which the user includes files with personal data
              in the shared hosting servers, Ingenio Languages is not
              responsible for the breach of the law by the user of the LOPD.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>
              Data retention in accordance with the LOPD
            </ItemsContent>
            <ItemsSubContent>
              In accordance with the LOPD, Ingenio Languages stores the
              essential data necessary to identify its origin and the start of
              the service provided. The storage of this data does not influence
              the secrecy of the communication and may only be used in the
              framework of a criminal investigation or to guarantee public
              safety by making itself available to the judges and/or courts or
              the competent ministry. The transmission of data to the state
              forces and bodies is carried out in accordance with the data
              protection regulation.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Copyright of Ingenio Languages</ItemsContent>
            <ItemsSubContent>
              Ingenio Languages is the owner of all copyrights, intellectual
              property and many other rights related to the contents of the
              www.ingeniolanguages.com website. These also refer to the services
              that are offered there and the programs that are necessary to
              implement them. The reproduction, publication and/or non-exclusive
              private use of the contents, in whole or in part, of the
              ingeniolanguages.com website is not permitted without prior
              written consent.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Software Intellectual Property</ItemsContent>
            <ItemsSubContent>
              The user must respect third-party programs made available by
              Ingenio Languages, even if they are free and/or publicly
              accessible. Ingenio Languages has the necessary exploitation and
              intellectual property rights for the software. The user does not
              acquire any right or license to the software necessary to provide
              the contractually agreed service. This also applies to technical
              information for service tracking with the exception of the rights
              and licenses required to perform the contractually agreed services
              and only for their duration. The user needs written authorization
              from Ingenio Languages, for any action that exceeds the execution
              of the contract. Therefore, the user is prohibited from accessing,
              modifying or viewing the configuration, structure and files of the
              Ingenio Languages servers, since any negligent or malicious act
              that occurs on the servers or security systems entails direct
              civil and criminal liability.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Use of cookies</ItemsContent>
            <ItemsSubContent>
              Ingenio Languages uses a technology called "cookies". Cookies are
              pieces of information that a website transfers to your computer's
              hard drive for record-keeping purposes. They tell us how and when
              pages on our site are viewed and by how many people.
            </ItemsSubContent>
            <ItemsSubContent>
              What do the cookie categories mean? Basics and functionality:
              These cookies are necessary for our website to function properly
              and to offer you the services we offer. Analytics: These cookies
              help us understand our users by monitoring how they behave on our
              site. We use these cookies to further enhance your experience on
              our site
            </ItemsSubContent>
            <ItemsSubContent>
              Cookies do not collect personal identifiable information, although
              they do identify a user's computer. We do not combine the
              information collected through cookies with other personally
              identifiable information to detect who you are or what your
              username or email address is.
            </ItemsSubContent>
            <ItemsSubContent>
              Las cookies no recopilan información de identificación personal,
              aunque sí identifican la computadora de un usuario. No combinamos
              la información recopilada a través de cookies con otra información
              de identificación personal para detectar quién es usted o cuál es
              su nombre de usuario o dirección de correo electrónico.
            </ItemsSubContent>
            <ItemsSubContent>
              On some of our pages, we may embed YouTube videos. The videos are
              embedded in YouTube's so-called "enhanced privacy mode". This
              means that YouTube will not store any information about visitors
              to our website unless they choose to play the video.
            </ItemsSubContent>
            <ItemsSubContent>
              You have the ability to accept or decline cookies by changing your
              browser settings. If you do, you may not be able to take full
              advantage of our website. For example, the full online booking
              process can only be accessed if you accept cookies.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Use of social media channels</ItemsContent>
            <ItemsSubContent>
              We use our social media channels to link news, articles or other
              relevant information to our customers and followers. Photographs
              of identifiable people who participate in our courses, activities,
              talks, conferences or other events may be included. However, in
              case the user wants to remove his image, he can contact the
              administrator of the page to proceed with its removal.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Intellectual Property of Hosted Content</ItemsContent>
            <ItemsSubContent>
              The use contrary to the legislation on intellectual property of
              the services provided by Ingenio Languages Training is prohibited,
              in particular:
            </ItemsSubContent>
            <ItemsCircle>
              <ItemCircle_subItem>
                Any use that violates Ecuadorian legislation or violates the
                rights of third parties.
              </ItemCircle_subItem>
              <ItemCircle_subItem>
                The publication or transmission of any content that, in the
                opinion of Ingenio Languages, is violent, obscene, abusive,
                illegal, racist, xenophobic or defamatory.
              </ItemCircle_subItem>
              <ItemCircle_subItem>
                Hack software serial numbers or other content that violates the
                intellectual property rights of others.
              </ItemCircle_subItem>{" "}
              <ItemCircle_subItem>
                The collection and / or use of personal data of other users
                without their express consent or in violation of the LOPD, on
                the protection of people with regard to the processing of
                personal data and on the free circulation of said data.
              </ItemCircle_subItem>
              <ItemCircle_subItem>
                Use of mail server and domain email addresses to send spam.
                Ingenio Languages is solely responsible for the content of its
                website, the information transmitted and stored, hypertext
                links, third party claims and legal actions related to
                intellectual property, third party rights and protection of
                minors. Ingenio Languages is responsible for the laws and
                regulations in force and the rules that regulate the operation
                of the online service, electronic commerce, copyright,
                maintenance of public order and the general principles of
                Internet use.
              </ItemCircle_subItem>
            </ItemsCircle>
            <ItemsSubContent>
              Ingenio Languages is solely responsible for the content of its
              website, the information transmitted and stored, hypertext links,
              third party claims and legal actions related to intellectual
              property, third party rights and protection of minors. Ingenio
              Languages is responsible for the laws and regulations in force and
              the rules that regulate the operation of the online service,
              electronic commerce, copyright, maintenance of public order and
              the general principles of Internet use.
            </ItemsSubContent>
            <ItemsSubContent>
              The user will indemnify Ingenio Languages for the expenses
              generated by the assignment of Ingenio Languages in any case whose
              responsibility was attributable to the user, including legal
              defense fees and expenses, even in the event of a non-final court
              decision.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Protection of hosted information</ItemsContent>
            <ItemsSubContent>
              Ingenio Languages we make backup copies of the content hosted on
              our servers. However, we are not responsible for accidental loss
              or deletion of data by the user. Similarly, we cannot guarantee
              complete replacement of data deleted by users, as the
              aforementioned data might have been deleted and/or changed during
              the period since the last backup.
            </ItemsSubContent>
            <ItemsSubContent>
              The services offered, except for the specific backup services, do
              not include the replacement of the contents preserved in the
              backup copies made by Ingenio Languages. If the loss of data is
              due to the user, a rate is established according to the complexity
              and extent of the recovery, always in accordance with the user's
              acceptance. Data recovery is only included in the price of the
              service if the loss of content is attributable to Ingenio
              Languages.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Commercial communications</ItemsContent>
            <ItemsSubContent>
              In application of the Electronic Commerce Law, signatures and data
              messages of Ecuador, Ingenio Languages will not send advertising
              by email or other means of electronic communication unless the
              recipient has previously requested or expressly authorized it in
              writing
            </ItemsSubContent>
            <ItemsSubContent>
              Ingenio Languages has the right to continue sending commercial
              communications about products or services to users with whom there
              is a prior contractual relationship, if these are similar to those
              that were originally the subject of the contract with the client.
              In any case, the user may request that no more commercial
              information be sent to them after proof of their identity.
            </ItemsSubContent>
            <ItemsSubContent>
              We use ActiveCampaign as our marketing automation platform. By
              subscribing to our newsletter, you acknowledge that the
              information you provide will be transferred to ActiveCampaign for
              processing in accordance with their Privacy Policy and Terms. You
              can change your mind at any time by clicking the unsubscribe link
              in the footer of any email you receive from us.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>How to contact us</ItemsContent>
            <ItemsSubContent>
              <b>Ingenio Languages</b>
              <br />
              <b>Ingenio Online</b>
              <br />
              <b>Comprehensive Training Center Ingenio </b>
              <br />
              <b>CEO Wilson Cisneros</b>
              <br />
              <b>Academic coordinator: Libary Manjarrés </b>
              <b>Address:</b> Urb. Ciudad Verde 106- 12 Santo Domingo de los
              Colorados – Ecuador
              <br /> <b>Phone number.</b> +593 998546897 +593 939418502
              <br />
              <b>Email:</b>
              admin@ingenioonline.com
              <br /> The ingeniolanguages.com website and this legal notice are
              subject to Ecuadorian law.
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
  margin-bottom: 1rem;
`;
const TableItem = styled.a`
  font-size: 16px;
  line-height: 16px;
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
  font-weight: 600;
  font-size: 24px;
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
