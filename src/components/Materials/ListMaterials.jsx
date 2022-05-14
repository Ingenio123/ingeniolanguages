import {
  ListIcons,
  ContentIcons,
  BoxIcon,
  Text,
  BoxTextMaterials,
  ToolTip,
} from "./Styles";

import { Icon } from "./RetunIcon";
export const ListMaterials = ({ materials, materialsArray }) => {
  return (
    <>
      {materials ? (
        <ListIcons>
          {materialsArray.map((i) => (
            <ContentIcons>
              <BoxIcon
                to={{
                  pathname: `${i.link_material}`,
                }}
                target="_blank"
              >
                <Icon
                  font_size={"3rem"}
                  type_icon={i.type_Material.name_type}
                />
              </BoxIcon>
              <ToolTip>{i.type_Material.name_type}</ToolTip>
              <Text>{i.name_material}</Text>
            </ContentIcons>
          ))}
        </ListIcons>
      ) : (
        <BoxTextMaterials>
          <p>There aren't any materials yet.</p>
        </BoxTextMaterials>
      )}
    </>
  );
};
