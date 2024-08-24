import { Anchor, Button, Flex, Image, Stack, Text, Title } from '@mantine/core';
import { works } from '../../../shared/index.fixtures';
import Work from './Work';
import { useState } from 'react';
import { IconArrowUp } from '@tabler/icons-react';

function Showcase() {
  const [url] = useState(works[0].workUrl);
  const handleWorkOnClick = (hash: string) => {
    location.hash = `#${hash}`;
  };

  return (
    <Stack align='center'>
      <Flex
        gap={16}
        justify='center'
        wrap={'wrap'}
        mb={64}
      >
        {works.map(
          (
            { name, ingredients, description, imgSrc, workUrl, githubUrl },
            index
          ) => (
            <div
              key={`work-${index}`}
              onClick={() => {
                handleWorkOnClick(name.toLowerCase());
              }}
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
                    height: 'fit-content',
                    width: 'calc(33dvw - 24px)',
                    maxWidth: 'calc(240px - 12px)',
                  },
                }}
              />
            </div>
          )
        )}
      </Flex>
      {works.map(({ name, fullDescription, previewImgSrc, githubUrl }) => (
        <div
          key={name}
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            paddingTop: 24,
            marginBottom: 200,
          }}
          id={name.toLowerCase()}
        >
          <Title order={2}>{name}</Title>
          <Text>{fullDescription}</Text>
          <br />
          <Image
            src={previewImgSrc}
            style={{ maxWidth: 720 }}
          />
          <br />
          <Text>Access the GitHub repo for this project here:</Text>
          <Text>
            <Anchor
              href={githubUrl}
              className='anchor-text'
            >
              {githubUrl}
            </Anchor>
          </Text>
          <br />
          <Button
            className='scroll-to-top'
            style={{ backgroundColor: 'transparent' }}
            onClick={() => {
              handleWorkOnClick('my-projects');
            }}
          >
            <IconArrowUp />
            <Text>Scroll to Top</Text>
          </Button>
        </div>
      ))}
    </Stack>
  );
}
export default Showcase;
