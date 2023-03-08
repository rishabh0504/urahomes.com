import { PropertyList, PropertyListItem } from '@/data-source/product/properties';
import { Card, Text, CardBody, Image, Box, SimpleGrid } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { BiBath, BiBed, BiArea, BiLocationPlus } from 'react-icons/bi';
import Carousel from '../carousel';

export default function CardItem() {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} spacing={2}>
        {PropertyList.map((eachProperty: PropertyListItem) => (
          <Box width={'100%'}>
            <Card p={0} m={0}>
              <CardBody width={'100%'} p={0}>
                {/* <Image
                objectFit='cover'
                src='images/image.jpeg'
                alt='Chakra UI'
                width='100%'
                height='100%'
              /> */}
                <Carousel />
                <SimpleGrid columns={1} spacing={2} m={3}>
                  <Box>
                    <Text fontSize={'md'} mr={1} ml={1} fontWeight={'bold'}>
                      {eachProperty.propertyName}
                    </Text>
                  </Box>
                  <Box display={'flex'}>
                    <BiLocationPlus color={'red'} />{' '}
                    <Text fontSize={'xs'} mr={1} ml={1}>
                      {eachProperty.location}
                    </Text>
                  </Box>
                  <Divider width={'100%'} borderBottomWidth={2} display={'flex'} />
                </SimpleGrid>
                <SimpleGrid columns={2} spacing={2} m={3}>
                  <Box display={'flex'} width={'100%'}>
                    <BiArea />{' '}
                    <Text fontSize={'xs'} mr={1} ml={1}>

                      {eachProperty.area}
                    </Text>
                  </Box>
                  <Box display={'flex'} width={'100%'}>
                    <BiBath />
                    <Text fontSize={'xs'} mr={1} ml={1}>

                      {eachProperty.bathrooms}
                    </Text>
                  </Box>
                  <Box display={'flex'} width={'100%'}>
                    <BiBed />
                    <Text fontSize={'xs'} mr={1} ml={1}>

                      {eachProperty.bedrooms}
                    </Text>
                  </Box>
                </SimpleGrid>
              </CardBody>
            </Card>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
