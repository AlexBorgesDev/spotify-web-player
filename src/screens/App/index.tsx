import { useCallback, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'

import AsideNavigation from '../../components/AsideNavigation'
import MainBGGradient from '../../components/MainBGGradient'
import NavigationBar from '../../components/NavigationBar'

// Screens
import Collection from '../Collection'
import Home from '../Home'
import LikedSongs from '../LikedSongs'
import Search from '../Search'

import { Content, GridContainer, Main } from './styles'

const App = () => {
  const navigationRef = useRef<HTMLElement>(null)

  const onMainScroll = useCallback((e: React.UIEvent<HTMLElement, UIEvent>) => {
    const navigation = navigationRef.current
    if (!navigation) return

    const y = e.currentTarget.scrollTop
    const opacity = y >= 100 ? 1 : y / 100

    navigation.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`
  }, [])

  return (
    <GridContainer>
      <AsideNavigation />

      <Main onScroll={onMainScroll}>
        <MainBGGradient />

        <Content>
          <NavigationBar ref={navigationRef} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/collection/tracks" element={<LikedSongs />} />
          </Routes>
        </Content>
      </Main>
    </GridContainer>
  )
}

export default App
