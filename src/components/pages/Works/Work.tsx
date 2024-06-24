import { Card, Center, Flex, Image, Stack, Text, Title } from '@mantine/core';
import { WorkProps } from '../../../shared/types';
import '../../../styles/components/Skill.scss';
import Skill from '../../resusable/Skill';

function Work({
  description,
  ingredients,
  imgSrc,
  workUrl,
  url,
  name,
  style,
}: WorkProps): JSX.Element {
  return (
    <Card className={`${workUrl === url ? 'active-work' : 'work'}`} p={8} style={style}>
      <Stack gap={0} style={{ borderRadius: '4px' }}>
        <Center>
          <Image maw={40} src={imgSrc} />
        </Center>
        <Title fz={14} fw={500} mt={4} order={2} ta={'center'}>
          {name}
        </Title>
        <Flex gap={4} justify={'center'} rowGap={0} wrap={'wrap'}>
          {ingredients.map(
            ({ faIcon, id, otherIcon, siIcon, skill, stars, style }, index) => (
              <Skill
                key={`${name}-work-skill-${index}`}
                {...{
                  faIcon,
                  id,
                  otherIcon,
                  siIcon,
                  skill,
                  stars,
                  style,
                }}
              />
            )
          )}
        </Flex>
        <Text fw={300} fz={10} mt={4}>
          {description}
        </Text>
      </Stack>
    </Card>
  );
}
export default Work;
