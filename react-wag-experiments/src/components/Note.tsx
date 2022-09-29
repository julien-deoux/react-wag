import React, { FC } from 'react'

import { getFrequency, getNote } from '../domain/note'

interface NoteProps {
  note: string,
}

export const Note: FC<NoteProps> = ({ note }) =>
  <gain gain={0.01}>
    <oscillator frequency={getFrequency(getNote(note))} />
  </gain>
