import { create } from 'zustand'
import * as Tone from 'tone'

export const useStore = create((set) => ({
    // Transport 
    transportBpm: Tone.Transport.bpm.value,
    setTransportBpm: (newTransportBpm) => {
        set((state) => {
            state.transportBpm.bpm.value = newTransportBpm;
            Tone.Transport.bpm.value = newTransportBpm;
            return { transportBpm: state.transportBpm };
        });
    },

    // Volume Node
    volumeNode: new Tone.Volume(-5).toDestination(),
    setVolume: (newVolume) => {
        set((state) => {
            state.volumeNode.volume.value = newVolume;
            return { volumeNode: state.volumeNode };
        });
    },
    toggleMute: () => {
        set((state) => {
            state.volumeNode.mute = !state.volumeNode.mute;
            return { volumeNode: state.volumeNode };
        });
    },
}))