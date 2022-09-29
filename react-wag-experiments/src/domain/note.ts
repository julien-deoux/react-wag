type BaseNote = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
type Octave = 0 | 1 | 2 | 3 | 4 | 5
type Alteration = '#' | 'b' | ''

export interface Note {
  base: BaseNote,
  octave: Octave,
  alteration: Alteration,
}

const noteFrequencies: Record<BaseNote, number> = {
  'A': 27.5,
  'B': 30.87,
  'C': 16.35,
  'D': 18.35,
  'E': 20.60,
  'F': 21.83,
  'G': 24.50,
}

const semiToneFactor = 2 ** (1 / 12)

export const getFrequency = ({ base, octave, alteration }: Note): number => {
  const baseFrequency = noteFrequencies[base]
  const octaveFrequency = baseFrequency * (2 ** octave)
  switch (alteration) {
    case '':
      return octaveFrequency
    case '#':
      return octaveFrequency * semiToneFactor
    case 'b':
      return octaveFrequency / semiToneFactor
  }
}

export const getNote = (noteDescription: string): Note => {
  const firstChar = noteDescription.charAt(0)
  const secondChar = noteDescription.charAt(1)
  const thirdChar = noteDescription.charAt(2)
  return ('#' !== secondChar && 'b' !== secondChar) ? {
    base: firstChar as BaseNote,
    octave: +secondChar as Octave,
    alteration: '' as Alteration,
  } : {
    base: firstChar as BaseNote,
    octave: +thirdChar as Octave,
    alteration: secondChar as Alteration
  }
}
