import { Flex, Stack } from "@mantine/core";
import { works } from "../../../shared/index.fixtures";
import Work from "./Work";
import { useState } from "react";

function Showcase() {
  const [url, setUrl] = useState(works[0].workUrl);
  const handleWorkOnClick = (url: string) => {
    setUrl(url);
  };
  return (
    <Stack align="center">
      <Flex gap={16} justify="center" wrap={"wrap"}>
        {works.map(
          (
            { name, ingredients, description, imgSrc, workUrl, githubUrl },
            index
          ) => (
            <div 
              key={`work-${index}`}
              onClick={() => handleWorkOnClick(workUrl)}
            >
              <Work
                {...{
                  name,
                  ingredients,
                  description,
                  imgSrc,
                  workUrl,
                  url,
                  githubUrl,
                  style: {
                    height: "fit-content",
                    width: "calc(33dvw - 24px)",
                    maxWidth: "calc(240px - 12px)"
                  },
                }}
              />
            </div>
          )
        )}
      </Flex>
      <iframe
        id="showcase"
        loading="lazy"
        title="Work Showcase"
        src={url}
        style={{
          borderRadius: "8px",
          height: "60vh",
          width: "100%",
          maxWidth: "768px",
        }}
      ></iframe>
    </Stack>
  );
}
export default Showcase;
