import Head from 'next/head'
import Page from '../components/page'
import CourseStaff from '../components/coursestaff'
import CourseOverview from '../components/courseoverview'
import CourseDescription from '../components/coursedescription'
import ConvNetDemo from '../components/classifier_demo/demo'
import { Alert } from 'react-bootstrap'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSC2541 (Fall 2022)</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
        <Page>
          <h2>CSC2541 Topics in Machine Learning:
            Introduction to Causality </h2>

          {/*&#128075;&#65039;</h2>*/}
          <br></br>
          {/*<ConvNetDemo/>*/}
          {/*<br></br>*/}

          <h3>The Essentials</h3>
          <CourseOverview/>
          <br></br>

          {/*<h3>Announcements</h3>*/}
          {/* /!*Alert for checking out project resources.*!/*/}
          {/*<Alert variant="info">*/}
          {/*  We're moving classrooms! Starting on October 4, we'll be meeting in <a href="https://goo.gl/maps/S1q3m7v3T1e76r826" target="_blank">ES B142</a> instead of our usual UC 85.*/}
          {/*  <br></br>*/}
          {/*  <div align="right">*/}
          {/*    <small>October 1, 2021</small>*/}
          {/*  </div>*/}
          {/*</Alert>*/}
          {/*<Alert variant="warning">*/}
          {/*  We will continually post some suggested <Alert.Link href="/projectresources">project ideas</Alert.Link> that might be helpful as you start brainstorming for the course project. Make sure to check them out.*/}
          {/*  <br></br>*/}
          {/*  <div align="right">*/}
          {/*    <small>September 7, 2022</small>*/}
          {/*  </div>*/}
          {/*</Alert>*/}

          <h3>Course Description</h3>
          <CourseDescription/>
          <br></br>

          <h3>Teaching Staff</h3>
          <CourseStaff/>
          <br></br>

        </Page>
    </div>
  )
}
