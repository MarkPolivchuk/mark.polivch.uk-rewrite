import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Row from '../components/row'
import Col from '../components/col'
import Section from '../components/cv/section'
import Skills from '../components/cv/skills'

const SecondPage = () => (
  <Layout>
    <SEO title="CV" />
    <Row>
      <Col>
        <Section
          title="Employment"
          titleColor="text-green-600"
          borderColor="border-green-500"
        >
          Todo
        </Section>
      </Col>
      <Col>
        <Skills />
        <Section
          title="Education"
          titleColor="text-red-600"
          borderColor="border-red-500"
        >
          Todo
        </Section>
      </Col>
    </Row>
  </Layout>
)

export default SecondPage
