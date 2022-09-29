import React, { FC } from 'react'
import { useAtom } from 'jotai'
import { Note } from './components/Note'
import extensionsAtom from './atoms/extensionsAtom'

const Graph: FC = () => {
  const [extensions] = useAtom(extensionsAtom)

  return (
    <>
      <Note note={'C3'} />
      <Note note={'G3'} />
      <Note note={'C4'} />
      <Note note={'E4'} />
      <Note note={'G4'} />
      {extensions && (
        <gain>
          <Note note={'B4'} />
          <Note note={'D5'} />
        </gain>
      )}
    </>
  )
}

export default Graph
