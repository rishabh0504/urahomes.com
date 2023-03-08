import { Grid, GridItem } from "@chakra-ui/react";
import CardItem from "../carditem";

export default function ProductLists() {
    return (
        <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(4, 1fr)' gap={2}>
            <GridItem rowSpan={1} colSpan={1} ></GridItem>
            <GridItem colSpan={4}>
                <CardItem />
            </GridItem>
        </Grid>
    )
}