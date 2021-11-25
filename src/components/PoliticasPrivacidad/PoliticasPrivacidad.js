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
        <Title>Política de privacidad</Title>
        <Content_Subtitle>
          <SubTitle>Valoramos tu privacidad</SubTitle>
          <ContentSubtitle>
            “Ingenio Languages” forma parte de la familia “Ingenio”, así como el
            Centro de Formación Integral “Ingenio Online”.
          </ContentSubtitle>
          <ContentSubtitle>
            En Ingenio Languages, sabemos que a usted le importa la protección
            de su información personal y cómo se utiliza, y cumplimos con toda
            la legislación vigente en materia de protección de datos. Esta
            política describe nuestras prácticas de información en línea y las
            elecciones que puede tomar sobre la forma en que se recopila y
            utiliza su información. Lea esta política detenidamente porque, al
            visitar o utilizar nuestro sitio web, da su consentimiento para que
            sus datos puedan ser procesados de acuerdo con esta Política de
            privacidad. La política no se aplica a otros sitios web a los que se
            pueda acceder a través de enlaces, de los que Ingenio Languages no
            se hace responsable en modo alguno.
          </ContentSubtitle>
        </Content_Subtitle>
        <Content>
          <BoxContent>
            <ItemsContent>
              Protección de datos personales según la LOPD (Ley Orgánica de
              Protección de Datos Personales de Ecuador)
            </ItemsContent>
            <ItemsSubContent>
              Esta ley tiene por objeto garantizar el derecho a la protección de
              datos personales, que incluye el acceso y decisión sobre la
              información y datos de este carácter, así como su correspondiente
              protección.
            </ItemsSubContent>
            <ItemsSubContent>
              De acuerdo con nuestra obligación legal nosotros, Ingenio
              Languages queremos informarle sobre la recogida y uso de sus datos
              personales. Toda la información personal recopilada a través de
              formularios en el sitio web ingeniolanguages.com se recopila
              automáticamente en un servidor seguro. La recogida y tratamiento
              automatizado de los datos personales sirve para mantener las
              relaciones comerciales y para informar y asesorar sobre ofertas y
              novedades de Formación. Estos datos no serán transmitidos a
              terceros bajo ninguna circunstancia.
            </ItemsSubContent>
            <ItemsSubContent>
              Ingenio Languages toma las medidas necesarias para garantizar la
              seguridad, integridad y confidencialidad de sus datos de acuerdo
              con lo dispuesto en el Registro Oficial Suplemento No. 459 de 26
              de mayo de 2021 en donde se publicó la Ley Orgánica de Protección
              de Datos Personales. El usuario podrá ejercitar los derechos de
              acceso, oposición, rectificación y cancelación a que se refiere el
              Reglamento en cualquier momento mediante correo electrónico a
              admin@ingenioonline.com o contactando con nosotros en la siguiente
              dirección: Urb. Ciudad Verde 106-12 Santo Domingo de los Colorados
              – Ecuador. Telf. +593 998546897 El usuario declara que toda la
              información facilitada por él es veraz y correcta, y se compromete
              a mantenerla actualizada, informando a Ingenio Languages de
              cualquier cambio.
            </ItemsSubContent>
            <ItemsSubContent>
              En el siguiente enlace encontrará el texto íntegro de la ley: Ley
              Orgánica de Protección de Datos Personales
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Recopilación y uso de datos</ItemsContent>
            <ItemsSubContent>
              Cuando realiza una reserva para un curso en nuestro sitio,
              necesitaremos recopilar cierta información sobre usted, como su
              nombre, país, dirección de correo electrónico, género, número de
              teléfono y edad. No compartimos su información personal con
              terceros.
            </ItemsSubContent>
            <ItemsSubContent>
              recopilamos de usted para procesar sus solicitudes y para
              informarle de nuestras nuevas ofertas y funcionalidades de
              servicios. Como parte del servicio que te presta Ingenio
              Languages, nos comunicaremos vía e-mail o por llamada telefónica
              para informarte de nuestras ofertas, servicios u otra información
              relevante relacionada con nuestra escuela. Pero su información
              personal no se proporcionará a empresas de terceros, ya que solo
              nos comunicaremos con usted directamente Ingenio Languages utiliza
              la información que
            </ItemsSubContent>
            <ItemsSubContent>
              Ingenio Languages maneja servidores SAS, por tanto, no correrá
              ningún riesgo de filtración de información con terceros por
              servidores compartidos.
            </ItemsSubContent>
            <ItemsSubContent>
              En los casos en que el usuario incluya ficheros con datos
              personales en los servidores de alojamiento compartido, Ingenio
              Languages no se hace responsable del incumplimiento de la ley por
              parte del usuario de la LOPD.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>
              Retención de datos de acuerdo con la LOPD
            </ItemsContent>
            <ItemsSubContent>
              De acuerdo con la LOPD Ingenio Languages almacena los datos
              imprescindibles necesarios para identificar su origen y el inicio
              del servicio prestado. El almacenamiento de estos datos no influye
              en el secreto de la comunicación y solo podrá ser utilizado en el
              marco de una investigación penal o para garantizar la seguridad
              pública poniéndose a disposición de los jueces y / o tribunales o
              del ministerio competente. La transmisión de datos a las fuerzas y
              cuerpos del estado se lleva a cabo de acuerdo con el reglamento de
              protección de datos.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Derechos de autor de Ingenio Languages</ItemsContent>
            <ItemsSubContent>
              Ingenio Languages es titular de todos los derechos de autor,
              propiedad intelectual y muchos otros derechos relacionados con los
              contenidos del sitio web www.ingeniolanguages.com . Estos también
              se refieren a los servicios que allí se ofrecen y los programas
              que son necesarios para implementarlos. No se permite la
              reproducción, publicación y / o uso privado no exclusivo de los
              contenidos, total o parcial, del sitio web ingeniolanguages.com
              sin el consentimiento previo por escrito.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Propiedad intelectual del software</ItemsContent>
            <ItemsSubContent>
              El usuario debe respetar los programas de terceros puestos a
              disposición por Ingenio Languages, aunque sean gratuitos y / o de
              acceso público. Ingenio Languages dispone de los derechos de
              explotación y propiedad intelectual necesarios del software. El
              usuario no adquiere ningún derecho o licencia sobre el software
              necesario para proporcionar el servicio acordado contractualmente.
              Esto también se aplica a la información técnica para el
              seguimiento del servicio con la excepción de los derechos y
              licencias requeridos para realizar los servicios acordados
              contractualmente y solo por su duración. <br /> El usuario
              necesita autorización por escrito de Ingenio Languages, para
              cualquier actuación que exceda la ejecución del contrato. Por
              tanto, se prohíbe al usuario acceder, modificar o visualizar la
              configuración, estructura y ficheros de los servidores de Ingenio
              Languages, ya que cualquier acto negligente o doloso que se
              produzca en los servidores o sistemas de seguridad conlleva
              responsabilidad civil y penal directa.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Uso de cookies</ItemsContent>
            <ItemsSubContent>
              Ingenio Languages utiliza una tecnología llamada "cookies". Las
              cookies son piezas de información que un sitio web transfiere al
              disco duro de su computadora con el fin de mantener registros. Nos
              dicen cómo y cuándo se ven las páginas de nuestro sitio y por
              cuántas personas.
            </ItemsSubContent>
            <ItemsSubContent>
              ¿Qué significan las categorías de cookies? Fundamentos y
              funcionalidad: estas cookies son necesarias para que nuestro sitio
              web funcione correctamente y le ofrezca los servicios que
              ofrecemos.
            </ItemsSubContent>
            <ItemsSubContent>
              Análisis: estas cookies nos ayudan a comprender a nuestros
              usuarios al monitorear cómo se comportan en nuestro sitio. Usamos
              estas cookies para mejorar aún más su experiencia en nuestro
              sitio.
            </ItemsSubContent>
            <ItemsSubContent>
              Las cookies no recopilan información de identificación personal,
              aunque sí identifican la computadora de un usuario. No combinamos
              la información recopilada a través de cookies con otra información
              de identificación personal para detectar quién es usted o cuál es
              su nombre de usuario o dirección de correo electrónico.
            </ItemsSubContent>
            <ItemsSubContent>
              Usamos Google Analytics, un servicio que transmite datos de
              tráfico del sitio web a los servidores de Google. Google Analytics
              no identifica a los usuarios individuales y su dirección IP es
              anónima. Usamos informes proporcionados por Google Analytics para
              ayudarnos a comprender el tráfico y el uso de la página web. Si
              desea excluirse de la cookie de Google Analytics, puede utilizar
              el complemento de exclusión voluntaria de Google Analytics .
            </ItemsSubContent>
            <ItemsSubContent>
              En algunas de nuestras páginas, podríamos incrustar videos de
              YouTube. Los videos están integrados en el llamado "modo de
              privacidad mejorada" de YouTube. Esto significa que YouTube no
              almacenará información sobre los visitantes de nuestro sitio web a
              menos que decidan reproducir el video.
            </ItemsSubContent>
            <ItemsSubContent>
              Tiene la capacidad de aceptar o rechazar cookies modificando la
              configuración de su navegador. Si lo hace, es posible que no pueda
              aprovechar al máximo nuestro sitio web. Por ejemplo, solo se puede
              acceder al proceso completo de reserva en línea si acepta las
              cookies
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Uso de canales de redes sociales</ItemsContent>
            <ItemsSubContent>
              Usamos nuestros canales de redes sociales para vincular noticias,
              artículos u otra información relevante a nuestros clientes y
              seguidores. Se pueden incluir fotografías de personas
              identificables que participen en nuestros cursos, actividades,
              charlas, conferencias u otros eventos. Sin embargo, en caso de que
              el usuario quiera eliminar su imagen, puede contactar al
              administrador de la página para proceder con su eliminación.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>
              Propiedad intelectual del contenido alojado
            </ItemsContent>
            <ItemsSubContent>
              Queda prohibido el uso contrario a la legislación en materia de
              propiedad intelectual de los servicios prestados por Formación
              Ingenio Languages, en particular:
            </ItemsSubContent>
            <ItemsCircle>
              <ItemCircle_subItem>
                Cualquier uso que viole la legislación ecuatoriana o vulnere los
                derechos de terceros.
              </ItemCircle_subItem>
              <ItemCircle_subItem>
                La publicación o transmisión de cualquier contenido que, a
                juicio de Ingenio Languages, resulte violento, obsceno, abusivo,
                ilegal, racista, xenófobo o difamatorio.
              </ItemCircle_subItem>
              <ItemCircle_subItem>
                Hackear números de serie de programas u otrocontenido que viole
                los derechos de propiedad intelectual de terceros.
              </ItemCircle_subItem>{" "}
              <ItemCircle_subItem>
                La recopilación y / o uso de datos personales de otros usuarios
                sin su consentimiento expreso o en violación de la LOPD, sobre
                la protección de las personas en lo que respecta al tratamiento
                de datos personales y sobre la libre circulación de dichos
                datos.
              </ItemCircle_subItem>
              <ItemCircle_subItem>
                Uso del servidor de correo y las direcciones de correo
                electrónico del dominio para enviar spam
              </ItemCircle_subItem>
            </ItemsCircle>
            <ItemsSubContent>
              Ingenio Languages es el único responsable del contenido de su
              sitio web, la información transmitida y almacenada, los enlaces de
              hipertexto, las reclamaciones de terceros y las acciones legales
              relativas a la propiedad intelectual, derechos de terceros y
              protección de menores. Ingenio Languages es responsable de las
              leyes y normativas vigentes y de las normas que regulan el
              funcionamiento del servicio online, el comercio electrónico, los
              derechos de autor, el mantenimiento del orden público y los
              principios generales de uso de Internet.
            </ItemsSubContent>
            <ItemsSubContent>
              El usuario indemnizará a Ingenio Languages de los gastos generados
              por la asignación de Ingenio Languages en todo caso cuya
              responsabilidad fuera imputable al usuario, incluidos los
              honorarios y gastos de defensa legal, incluso en el caso de
              decisión judicial no firme.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Protección de la información alojada</ItemsContent>
            <ItemsSubContent>
              Ingenio Languages realizamos copias de seguridad del contenido
              alojado en nuestros servidores. Sin embargo, no somos responsables
              de la pérdida o eliminación accidental de datos por parte del
              usuario. Del mismo modo, no podemos garantizar el reemplazo
              completo de los datos eliminados por los usuarios, ya que los
              datos antes mencionados podrían haber sido eliminados y / o
              cambiados durante el período desde la última copia de seguridad.
            </ItemsSubContent>
            <ItemsSubContent>
              Los servicios ofrecidos, salvo los servicios específicos de copia
              de seguridad, no incluyen la reposición de los contenidos
              conservados en las copias de seguridad realizadas por Ingenio
              Languages. Si la pérdida de datos se debe al usuario, se establece
              una tasa de acuerdo a la complejidad y extensión de la
              recuperación, siempre de acuerdo con la aceptación del usuario. La
              recuperación de datos solo está incluida en el precio del servicio
              si la pérdida de contenido es imputable a Ingenio Languages.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Comunicaciones comerciales</ItemsContent>
            <ItemsSubContent>
              En aplicación de la Ley de Comercio Electrónico, firmas y mensajes
              de datos del Ecuador, Ingenio Languages no enviará publicidad por
              correo electrónico u otro medio de comunicación electrónica salvo
              que el destinatario lo haya solicitado o autorizado expresamente
              previamente y por escrito.
            </ItemsSubContent>
            <ItemsSubContent>
              Ingenio Languages tiene derecho a continuar enviando
              comunicaciones comerciales sobre productos o servicios a los
              usuarios con los que exista una relación contractual previa, si
              estos son similares a los que originalmente fueron objeto del
              contrato con el cliente. En cualquier caso, el usuario podrá
              solicitar que no se le envíe más información comercial previa
              acreditación de su identidad.
            </ItemsSubContent>
            <ItemsSubContent>
              Usamos ActiveCampaign como nuestra plataforma de automatización de
              marketing. Al suscribirse a nuestro boletín, usted reconoce que la
              información que proporcione será transferida a ActiveCampaign para
              su procesamiento de acuerdo con su Política de privacidad y sus
              Términos . Puede cambiar de opinión en cualquier momento haciendo
              clic en el enlace para darse de baja en el pie de página de
              cualquier correo electrónico que reciba de nosotros.
            </ItemsSubContent>
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
