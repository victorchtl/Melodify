import { Box } from "@mui/material"
import GrooveNotesSynth from "./GrooveNotesSynth"
import Title from "../shared/Title"
import Subtitle from "../shared/Subtitle"
import Text from "../shared/Text"


function GrooveNotes() {

    const title = 'Groove'
    const subtitle= 'The Notes'
    const firstParagraph = `In music, notes are like steps on a ladder that represent different pitches. We often use the letters A, B, C, D, E, F, and G to name these notes. These letters repeat throughout the scale, creating different octaves. However, sometimes we need to adjust the pitch of a note slightly, which is where sharps (#) and flats (b) come in.`

    return (
        <Box minHeight={"100vh"} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <Title title={title} />
            <Subtitle subtitle={subtitle} />
            <Text text={firstParagraph} />
            <Box mb={5} />
            <GrooveNotesSynth />
        </Box>

    )
}

export default GrooveNotes