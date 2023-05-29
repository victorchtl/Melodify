import BeatSectionSamples from '../components/beat/BeatSectionSamples';
import BeatSectionDrumsMachine from '../components/beat/BeatSectionDrumsMachine';
import NextPage from '../components/shared/NextPage';

function Beat() {

    return (
        <>
            <BeatSectionSamples />
            <BeatSectionDrumsMachine />
            <NextPage pageName={'The Groove'} pageUrl={'groove'} />
        </>
    )
}

export default Beat