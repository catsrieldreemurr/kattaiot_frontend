import Bubble from "../bubble";
import Typography from "../typography";

// just displays all data in the db that I am aware of.
export default function TestBubble(){
    return ( 
        <Bubble style="sm:w-1/2">
            <Typography variant="h1" isCentered isBold>Test Bubble</Typography>
            <Typography variant="h3" isCentered>id: </Typography>
            <Typography variant="h3" isCentered>sensor_navn:</Typography>
            <Typography variant="h3" isCentered>verdi: </Typography>
            <Typography variant="h3" isCentered>suffiks:</Typography>
            <Typography variant="h3" isCentered>created_at:</Typography>
        </Bubble>
    )
}