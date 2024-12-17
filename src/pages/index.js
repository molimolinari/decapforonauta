// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
    <Layout pageTitle="Home Page">
      <p>El Perrito</p>
      <StaticImage
        alt="El perrito"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      <p>Y el mate</p>
      <StaticImage
        alt="Lenguaje del mate"
        src="../images/mate.png"
      />
    </Layout>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage