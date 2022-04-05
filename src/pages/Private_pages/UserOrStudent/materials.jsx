import { MaterialsLayout } from "../../../components/Materials/LayoutMaterial";
import { ListMaterials } from "../../../components/Materials/ListMaterials";
import { DropDowns } from "../../../components/Materials/DropDowns";
import { Divider, Title } from "../../../components/Materials/Styles";
import { useState } from "react";

const Items = [
  {
    _id: 1,
    level: "A1",
    materials: true,
  },
  {
    _id: 2,
    level: "A2",
    materials: false,
  },
  {
    _id: 3,
    level: "B1",
    materials: false,
  },
  {
    _id: 4,
    level: "B2",
    materials: false,
  },
  {
    _id: 5,
    level: "C1",
    materials: false,
  },
  {
    _id: 6,
    level: "C2",
    materials: false,
  },
];

export const MaterialsPage = () => {
  const [Active, setActive] = useState(false);

  const handleClick = (key) => {
    if (Active === key) {
      return setActive(false);
    }
    setActive(key);
  };

  return (
    <MaterialsLayout>
      <Title>Materials</Title>
      {Items.map((i) => (
        <>
          <DropDowns
            click={handleClick}
            level={i.level}
            active={i._id === Active ? true : false}
            id={i._id}
          />
          {i._id === Active && (
            <ListMaterials materials={i.materials ? true : false} />
          )}
          <Divider />
        </>
      ))}
    </MaterialsLayout>
  );
};
