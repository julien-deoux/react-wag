import React, { FC } from 'react'
import { useAtom } from 'jotai'

import extensionsAtom from './atoms/extensionsAtom'

const App: FC = () => {
  const [extensions, setExtensions] = useAtom(extensionsAtom)

  return <button onClick={() => setExtensions(!extensions)}>Toggle extensions</button>
}

export default App
