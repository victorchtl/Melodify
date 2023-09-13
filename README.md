# Melodify

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#architecture">Architecture</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Images

![alt text](https://github.com/victorchtl/melodify/blob/main/src/assets/screeshot/melodify_screenshot_01.png?raw=true)

![alt text](https://github.com/victorchtl/melodify/blob/main/src/assets/screeshot/melodify_screenshot_02.png?raw=true)

![alt text](https://github.com/victorchtl/melodify/blob/main/src/assets/screeshot/melodify_screenshot_03.png?raw=true)

<!-- ABOUT THE PROJECT -->
## About The Project

<!-- DEMO : [https://netflix-clone-6f7dc.web.app/](https://netflix-clone-6f7dc.web.app/) -->

A Immersive musical experience built around React and ToneJs.

Dependencies :

* [React](https://react.dev/)
* [Tone.js](https://tonejs.github.io/)
* [Material UI](https://mui.com/)
* [Framer Motion](https://www.framer.com/motion/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- APP ARCHITECTURE -->
## Architecture

  ```bash
├── src
│   ├── assets
│   │   ├── drums
│   │   │   ├── clap.wav
│   │   │   ├── cymbal.wav
│   │   │   ├── hithat_closed.wav
│   │   │   ├── hithat_open.wav
│   │   │   ├── kick.wav
│   │   │   ├── snare.wav
│   ├── components
│   │   ├── beat
│   │   │   ├── BeatLiveSample.jsx
│   │   │   ├── BeatSectionDrumsMachine.jsx
│   │   │   ├── BeatSectionSamples.jsx
│   │   │   ├── BeatStepSequencer.jsx
│   │   ├── groove
│   │   │   ├── GrooveNoteItem.jsx
│   │   │   ├── GrooveNotes.jsx
│   │   │   ├── GrooveNotesSynth.jsx
│   │   │   ├── GrooveTheBass.jsx
│   │   ├── shared
│   │   │   ├── Appbar.jsx
│   │   │   ├── NextPage.jsx
│   │   │   ├── PageDescription.jsx
│   │   │   ├── PlayerPad.jsx
│   │   │   ├── Subtitle.jsx
│   │   │   ├── SynthPad.jsx
│   │   │   ├── Text.jsx
│   │   │   ├── Title.jsx
│   │   │   ├── TransportBpmControl.jsx
│   ├── pages
│   │   ├── Beat
│   │   ├── Groove
│   │   ├── Home
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATURES -->
## Features

- [x] Exploration of Tone.js library
- [x] Musical interactive experience
- [x] Drum Machine !
- [x] Beat Sequencer !

### Beat Live Samples (Drum Machine)

```js
function BeatLiveSamples() {

    const samples = [
        {
            name: 'kick',
            url: 'kick'
        },
        {
            name: 'snare',
            url: 'snare'
        },
        {
            name: 'clap',
            url: 'clap'
        },
        {
            name: 'hit hat closed',
            url: 'hithat_closed'
        },
        {
            name: 'hit hat open',
            url: 'hithat_open'
        },
        {
            name: 'cymbal',
            url: 'cymbal'
        }
    ]

    const playersRef = useRef(new Tone.Players({
        urls: {
            kick: kick,
            snare: snare,
            clap: clap,
            hithat_closed: hithat_closed,
            hithat_open: hithat_open,
            cymbal: cymbal,
        }
    }).toDestination())

    const startPlayer = async (name) => {
        await Tone.start()
        playersRef.current.player(name).start(0)
    }

    return (
        <Box mb={5}>
            <Grid container spacing={1}>
                {samples.map((sample, index) => (
                    <Grid item key={sample.name} xs>
                        <motion.div
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:1, delay:index/10}}
                        >
                            <PlayerPad onClick={() => startPlayer(sample.url)} />
                            <Typography fontSize={'.6rem'} textAlign={'center'}>{sample.name}</Typography>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default BeatLiveSamples
```

### Beat Step Sequencer

```js
function BeatStepSequencer() {

    const [rows, setRows] = useState(new Array(6).fill(new Array(16).fill(0)))

    const rowsRef = useRef(new Array(6).fill(new Array(16).fill(0)))

    const [currentCol, setCurrentCol] = useState(null)

    const playerNames = ["kick", "snare", "clap", "hithat_closed", "hithat_open", "cymbal"].reverse();

    const playerNamesDisplay = ["kick", "snare", "clap", "hit hat closed", "hi that open", "cymbal"].reverse();

    const sequenceRef = useRef(new Tone.Sequence((time, index) => {

        setCurrentCol(index)
        for (let i = 0; i < playerNames.length; i++) {
            if (rowsRef.current[i][index] === 1) {
                players.player(playerNames[i]).start(time)
            }
        }
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))

    const players = new Tone.Players({
        urls: {
            kick: kick,
            snare: snare,
            clap: clap,
            hithat_closed: hithat_closed,
            hithat_open: hithat_open,
            cymbal: cymbal,
        }
    }).toDestination()


    const playSequence = async () => {
        await Tone.start()
        sequenceRef.current.start(0)
        Tone.Transport.start()
    }

    const stopSequence = () => {
        sequenceRef.current.cancel()
        Tone.Transport.stop()
        setCurrentCol(null)
    }

    const clearSequence = () => {
        const clearedRows = new Array(6).fill(new Array(16).fill(0))
        setRows(clearedRows)
        setPreset('')
        rowsRef.current = clearedRows
    }

    const toggleSequencePlayer = (indexRow, indexCol) => {
        const updatedSeq = [...rows];
        const updatedSeqRow = [...updatedSeq[indexRow]]
        if (updatedSeqRow[indexCol] === 0) updatedSeqRow[indexCol] = 1
        else updatedSeqRow[indexCol] = 0
        updatedSeq[indexRow] = updatedSeqRow
        setRows(updatedSeq)
        setPreset('')
        rowsRef.current = updatedSeq
    }

    const [preset, setPreset] = useState('')

    const presets = [
        {
            name: 'basic',
            preset: basic
        }
    ]

    const setPresetToSequence = (preset) => {
        setRows(preset)
        setPreset(preset)
        rowsRef.current = preset
    }

    return (
        <Container maxWidth='md'>
            <Stack direction={'row'} spacing={1} mb={1}>
                <Button variant='outlined' size='small' onClick={playSequence}><PlayArrowRoundedIcon /></Button>
                <Button variant='outlined' size='small' onClick={stopSequence}><StopRoundedIcon /></Button>
                <Button variant='outlined' size='small' onClick={clearSequence}><RestartAltRoundedIcon /></Button>
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel id="select-label">Presets</InputLabel>
                    <Select
                        labelId="select-label"
                        id="select"
                        value={preset}
                        label="Presets"
                        onChange={(e) => setPresetToSequence(e.target.value)}
                    >
                        {presets.map((preset, index) => (
                            <MenuItem key={index} value={preset.preset}>{preset.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TransportBpmControl />
            </Stack>
            <Box bgcolor={'secondary.dark'} p={2} borderRadius={'.5rem'}>
                <Grid container spacing={1}>
                    {rows.map((sequence, indexRow) => (
                        <Grid item key={indexRow} xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={1} textAlign={'center'} justifyContent={'center'} alignItems={'center'} sx={{ display: { xs: 'none', md: 'flex' } }}>
                                    <Typography fontSize={'.7rem'} lineHeight={1.4} color={'text.secondary'}>
                                        {playerNamesDisplay[indexRow]}
                                    </Typography>
                                </Grid>
                                {sequence.map((kick, indexCol) => (
                                    <Grid item key={indexCol} xs>
                                        <Box
                                            onClick={() => toggleSequencePlayer(indexRow, indexCol)}
                                            width={'100%'}
                                            bgcolor={kick !== 0 ? 'primary.main' : 'secondary.light'}
                                            sx={{
                                                aspectRatio: '1',
                                                filter: currentCol === indexCol ? 'brightness(120%)' : 'none'
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}

export default BeatStepSequencer
```

### Note & Octaves Pad

```js
function GrooveNotesSynth() {

    const notes = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B']

    const [octave, setOctave] = useState(3)

    const synthRef = useRef(new Tone.Synth().toDestination())

    const playNote = async (note) => {
        await Tone.start()
        if (note.length < 2) synthRef.current.triggerAttackRelease(`${note}${octave}`, "8n");
        else synthRef.current.triggerAttackRelease(`${note.substring(0, 2)}${octave}`, "8n");
    }

    const updateOctave = (dir) => {
        const currentOctave = octave
        if (dir === 'next' & currentOctave < 9) setOctave(currentOctave + 1)
        else if (dir === 'prev' & currentOctave > 1) setOctave(currentOctave - 1)
    }

    return (
        <>
            <Typography variant='body1' textAlign={'center'} mb={2}>Octave : {octave}</Typography>
            <Box display={'flex'}>
                <Box onClick={() => updateOctave('prev')} display={'flex'} alignItems={'center'} mr={3} sx={{ cursor: 'pointer' }}>
                    <NavigateBeforeRoundedIcon />
                </Box>
                <Box
                    width={'100%'}
                    display={'grid'}
                    gridTemplateRows={`repeat(2), 1fr`}
                    gridTemplateColumns={`repeat(${notes.filter((str) => str.length < 2).length * 2}, 1fr)`}
                    gap={'.1rem'}
                >
                    {notes.map((note) => {
                        let newIndex
                        if (note.length > 1) newIndex = (notes.filter((str) => str.length < 2).indexOf(note.substring(0, 1))) + 1
                        else newIndex = notes.filter((str) => str.length < 2).indexOf(note)
                        return (
                            <Box
                                key={note}
                                gridRow={note.length > 1 ? '1 / 2' : '2 / 3'}
                                gridColumn={
                                    note.length > 1 ?
                                        `${(newIndex * 2)} / ${(newIndex * 2) + 2}`
                                        :
                                        `${(newIndex * 2) + 1} / ${(newIndex * 2) + 3}`
                                }
                            >
                                <SynthPad onClick={() => playNote(note)} text={note + octave} />
                            </Box>

                        )
                    })}
                </Box>
                <Box onClick={() => updateOctave('next')} display={'flex'} alignItems={'center'} ml={3} sx={{ cursor: 'pointer' }}>
                    <NavigateNextRoundedIcon />
                </Box>
            </Box>
        </>
    )
}

export default GrooveNotesSynth
```

### Animated Title

```js
<motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <Typography variant='h1' color={'secondary.light'}>
                {title}
            </Typography>
        </motion.div>
```



<p align="right">(<a href="#readme-top">back to top</a>)</p>




## Built With

This project was bootstrapped with [Vite](https://vitejs.dev/).


With NPM:
```sh
  npm create vite@latest
```

With YARN:
```sh
  yarn create vite
```

With PNPM:
```sh
  pnpm create vite
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/victorchtl/melodify.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Victor Chatel - victor.chatel@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>