import styled from "styled-components";

export const TextAbout = () => {
  return (
    <div>
      <TextTitle>Text Title</TextTitle>
      <TextParrafo>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        aperiam officia quibusdam esse perferendis, totam illo voluptatem eum
        enim iste sed, commodi porro maxime. Neque nihil architecto delectus
        asperiores fuga! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Itaque distinctio numquam odio adipisci fuga tenetur corrupti ex
        maiores? Repellat explicabo incidunt reiciendis, dolor voluptatem nemo
        omnis sunt quia blanditiis optio doloribus minus velit est, consectetur
        sint? Omnis, deserunt earum? In sapiente voluptas magnam expedita ipsam
        quod, harum, consequatur deleniti temporibus ratione sequi obcaecati
        facere? Odit quia aliquid vero illo fugiat, rem pariatur eligendi
        debitis blanditiis odio modi, ad sequi quos in laboriosam culpa.
        Architecto labore repellat sequi perferendis distinctio, minima
      </TextParrafo>
    </div>
  );
};

const TextTitle = styled.h6`
  font-size: 2rem;
  color: #18181b;
  margin: 0;
  letter-spacing: -2px;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const TextParrafo = styled.p`
  color: #18181b;
  line-height: 1.3;
  font-size: 1.2rem;
  margin-left: 1rem;
`;
