import styled from "styled-components";

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

  return (
    <div className="container mt-5 ">
      <Wrapper>
        <Table>
          <BoxSubTable>
            <TitleTable>Content</TitleTable>
            <TableItem>Clases en línea</TableItem>
            <TableItem>Derechos y limites</TableItem>
            <TableItem>Gastos de cancelación</TableItem>
            <TableItem>Delitos prohibibles</TableItem>
          </BoxSubTable>
        </Table>
        <Title>Términos y condiciones</Title>
        <Content_Subtitle>
          <SubTitle>Clases en línea - Proveedor</SubTitle>
          <ContentSubtitle>
            Ingenio Languages es una plataforma proporcionada por Ingenio
            Online. Las clases online son impartidas por Ingenio Languages
            Ubicada en Ecuador en Santo Domingo de los Colorados, Urb. Ciudad
            Verde 106-12. Sitios web: www. Ingeniolanguages.com y www.
            Ingenioonline.com Número de teléfono: +593 998546897
          </ContentSubtitle>
        </Content_Subtitle>
        <Content>
          <BoxContent>
            <ItemsContent>Elegibilidad de servicios</ItemsContent>
            <ItemsSubContent>
              Los servicios de Ingenio Languages están disponibles y solo pueden
              ser utilizados por personas mayores de 18 años que puedan celebrar
              contratos legalmente vinculantes según la ley aplicable. Las
              personas menores de 18 años pueden usar nuestros servicios solo
              junto con y bajo la supervisión de su representante legal. En este
              caso, el representante legal es responsable de todas y cada una de
              las actividades del estudiante
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent Bold>DERECHOS Y LIMITES</ItemsContent>
            <ItemsContent>Su licencia para hablar español</ItemsContent>
            <ItemsSubContent>
              Ingenio Languages le otorga un derecho limitado, no transferible,
              no sublicenciable, no exclusivo y para acceder y utilizar los
              servicios y el software únicamente para su uso personal y no
              comercial, y sujeto a las políticas y restricciones publicadas en
              nuestro sitio web.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Representaciones y garantías</ItemsContent>
            <ItemsSubContent>
              Si utiliza el sitio web como estudiante o padre, (i) acepta
              cumplir con los compromisos que hace con un tutor a través del
              sitio web; (ii) acepta que no eludirá ni manipulará nuestra
              estructura de tarifas, el proceso de facturación o las tarifas
              adeudadas a Ingenio Languages o al tutor; no entregar el pago de
              los artículos comprados por usted a los tutores; y (iii) acepta
              hacer esfuerzos de buena fe para interactuar con el tutor en línea
              durante la Sesión de Tutor.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Limites</ItemsContent>
            <ItemsSubContent>
              Mientras utiliza los servicios, acepta:
            </ItemsSubContent>
            <ItemsSubContent>
              cumplir con todas las leyes aplicables, incluidas, entre otras,
              las leyes de privacidad, las leyes de propiedad intelectual, las
              leyes contra el correo no deseado, las leyes fiscales, etc.
            </ItemsSubContent>
            <ItemsSubContent>
              proporcionarnos información precisa y mantenerla actualizada.
            </ItemsSubContent>
            <ItemsSubContent>
              utilizar los servicios y el sitio web de una manera legal,
              relevante y adecuada a las leyes aplicables.
            </ItemsSubContent>
            <ItemsSubContent>
              Cualquier uso del sitio web que Ingenio Languages, a su entera
              discreción, considere inapropiado y / u ofensivo puede resultar en
              la suspensión y / o terminación de un usuario con o sin previo
              aviso.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Métodos de pago</ItemsContent>
            <ItemsSubContent>
              Puede pagar mediante tarjeta de crédito o PayPal pulsando el botón
              de pago en la parte inferior del carrito de compras.
            </ItemsSubContent>
            <ItemsSubContent>
              Todos nuestros precios ya incluyen IVA (Impuesto al Valor
              Agregado). El desglose del IVA se reflejará al momento de realizar
              el pago, y es del 12% del valor de la compra según la Ley de
              Régimen Tributario Interno del Ecuador
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent Bold>Gastos de cancelación</ItemsContent>
            <ItemsContent>Clases particulares de tutores en línea</ItemsContent>
            <ItemsSubContent>
              Ofrecemos una garantía de devolución del dinero del 100% en la
              primera lección. Si no está satisfecho con sus lecciones, puede
              comunicarse con nosotros dentro de la primera semana para recibir
              un reembolso completo (o elegir otro maestro).
            </ItemsSubContent>
            <ItemsSubContent>
              Cada vez que se cancela una lección, puede reprogramar la clase
              para otro día y hora.
            </ItemsSubContent>
            <ItemsSubContent>
              Si usted o nosotros cancelamos una lección por cualquier motivo,
              le reembolsaremos esa lección si no desea reprogramarla.
            </ItemsSubContent>
            <ItemsSubContent>
              Las cancelaciones deben realizarse al menos 24 horas antes de la
              clase. De lo contrario, la tarifa de la clase no se reprogramará
              ni se reembolsará. Es posible cancelar o reembolsar lecciones con
              descuento; sin embargo, el reembolso será en función del valor sin
              promoción.
            </ItemsSubContent>
            <ItemsSubContent>
              La matrícula no es reembolsable si un participante se conecta
              tarde o desea terminar la clase antes del tiempo asignado. Ingenio
              Languages no reembolsará ninguna tarifa debido a ausencia,
              enfermedad o circunstancias tecnológicas. Es su responsabilidad
              proporcionar una conexión a Internet que funcione; no podemos ser
              responsables de esto.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Conteo de clases de paquetes mensuales.</ItemsContent>
            <ItemsSubContent>
              El número de lecciones mensuales que compra, deberán ser
              utilizadas durante el mes, caso contrario, las lecciones no son
              acumulables para el siguiente mes
            </ItemsSubContent>

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
            <ItemsContent>
              Informe de progreso y recursos del curso
            </ItemsContent>
            <ItemsSubContent>
              El informe de progreso le muestra al estudiante su avance en el
              idioma. Hemos organizado el progreso de nuestros estudiantes
              basándonos en el Marco Común Europeo de Referencia para las
              lenguas. Los recursos que se le facilitarán para sus lecciones,
              poseen propiedad intelectual de Ingenio Languages o de editoriales
              externas. Al comprar alguno de estos recursos, Ingenio Languages
              le otorga ciertos derechos para usar los recursos con fines
              limitados. Esta sección describe el acuerdo y le informa qué puede
              hacer con los recursos.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>
              Enlaces internos a recursos de Ingenio Languages
            </ItemsContent>
            <ItemsSubContent>
              Las hojas de recursos de Ingenio Languages son para uso personal y
              no comercial. No puede modificar, copiar, distribuir, transmitir,
              mostrar, ejecutar, reproducir, publicar, licenciar, crear trabajos
              derivados, transferir o vender información, software, productos o
              servicios obtenidos de estos recursos.
            </ItemsSubContent>
            <ItemsSubContent>
              Verificamos la funcionalidad de nuestros enlaces internos en
              nuestros recursos y nuestro propio contenido de forma regular. Si
              encuentra un enlace roto o errores en nuestro contenido,
              comuníquese con nosotros; Lo resolveremos de inmediato y le
              proporcionaremos la versión actualizada del recurso.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>
              Enlaces externos a recursos de otros sitios web
            </ItemsContent>
            <ItemsSubContent>
              Para poder descargar y ver las hojas de recursos, necesitará un
              dispositivo compatible, acceso a Internet que funcione y un
              software lector de PDF compatible. Su capacidad para utilizar las
              hojas de recursos y su rendimiento pueden verse afectados por
              estos factores. Dichos requisitos del sistema son su
              responsabilidad.
            </ItemsSubContent>
            <ItemsSubContent>
              No somos responsables del contenido de los recursos externos y no
              poseemos ni otorgamos ningún derecho sobre estos recursos. Al
              utilizar estos recursos externos, acepta los respectivos Términos
              y condiciones de estos terceros.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>
              PDF no funciona / no se abre / descarga correctamente
            </ItemsContent>
            <ItemsSubContent>
              Para poder descargar y ver las hojas de recursos, necesitará un
              dispositivo compatible, acceso a Internet que funcione y un
              software lector de PDF compatible. Su capacidad para utilizar las
              hojas de recursos y su rendimiento pueden verse afectados por
              estos factores. Dichos requisitos del sistema son su
              responsabilidad.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Libro de texto</ItemsContent>
            <ItemsSubContent>
              Es muy recomendable que le estudiante adquiera el libro de texto
              en físico para acelerar su proceso de aprendizaje, sin embargo,
              será opcional si el estudiante desea o no comprar el libro de
              texto para sus clases de idiomas.
            </ItemsSubContent>
            <ItemsSubContent>
              El proceso de compra del libro lo hará directamente con la
              editorial respectiva. El proceso de compra, envío y recepción del
              mismo será entre el estudiante y la editorial.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Notas generales</ItemsContent>
            <ItemsSubContent>
              Todos los cupones son válidos hasta un año después de la compra.
              Si ha acudido a nosotros a través de un agente, es posible que se
              le apliquen sus Términos y condiciones; Ingenio Languages se
              reserva el derecho de aplicar sus propios términos.
            </ItemsSubContent>
          </BoxContent>
          <BoxContent>
            <ItemsContent>Delitos prohibibles</ItemsContent>
            <ItemsSubContent>
              Las siguientes acciones no están permitidas en Ingenio Languages y
              pueden dar lugar a la desactivación de la cuenta y la prohibición
              de tomar más clases con Ingenio Languages.
            </ItemsSubContent>
            <ItemsCircle>
              <ItemCircle_subItem>
                Ponerse en contacto con los maestros de Ingenio Languages u
                ofrecer pagos fuera del sistema Ingenio Languages.
              </ItemCircle_subItem>
              <ItemCircle_subItem>
                Eludir o manipular nuestra estructura de tarifas, el proceso de
                facturación o las tarifas adeudadas a Ingenio Languages.
              </ItemCircle_subItem>
              <ItemCircle_subItem>
                No entregar el pago por los servicios adquiridos por usted.
              </ItemCircle_subItem>{" "}
              <ItemCircle_subItem>
                Compartir el material de aprendizaje con un tercero. Esto
                incluye copiar, reproducir, cargar, publicar o distribuir los
                materiales en cualquier forma sin el permiso previo por escrito
                de Ingenio Languages.
              </ItemCircle_subItem>
              <ItemCircle_subItem>
                Transferir su cuenta y sus credenciales de inicio de sesión a
                otra parte sin nuestro consentimiento previo por escrito.
              </ItemCircle_subItem>
              <ItemCircle_subItem>
                Proporcionar o publicar información falsa, engañosa o inexacta.
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
