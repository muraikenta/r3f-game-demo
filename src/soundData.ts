import { SoundProps } from './@core/Sound';

const soundData: { [index: string]: SoundProps } = {
    eating: {
        // "Chewing" by InspectorJ - freesound.org
        src: './assets/sfx/eating.wav',
        volume: 0.5,
    },
    drinking: {
        // "Drinking" by dersuperanton - freesound.org"
        src: './assets/sfx/drinking.wav',
        volume: 0.5,
    },
    footstep: {
        src: './assets/sfx/footstep.wav',
        volume: 0.1,
    },
};

export default soundData;
