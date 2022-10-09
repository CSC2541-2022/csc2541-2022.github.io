import Head from 'next/head'
import Page from '../components/page'
import CourseStaff from '../components/coursestaff'
import CourseOverview from '../components/courseoverview'
import CourseDescription from '../components/coursedescription'
import { Alert } from 'react-bootstrap'
import {useTheme} from "next-themes";
import Image from 'next/image'

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="container">
      <Head>
        <title>CSC2541 (Fall 2022)</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
        <Page>
          <h2>CSC2541 Topics in Machine Learning:
            Introduction to Causality </h2>
          <br/>

          <CourseOverview/>
          <br></br>

          <h3>Announcements</h3>
           {/*Alert for checking out project resources.*/}
            <Alert variant="info">
            <h5>Assignment</h5>
<p>The <a href={"assignments/assignment.zip"}> problem set</a> is released. It is due on October 31, 11:59 pm ET.</p>
            <div align="right">
              <small>October 9, 2022</small>
            </div>
          </Alert>
          <Alert variant="info">
            <h5>COVID-19</h5>
<p>Although the pandemic has diminished somewhat, all indications are that we are not yet out of the woods. The university no longer requires the use of masks on its premises but encourages it where it is impossible to maintain physical distancing, such as in classrooms and offices.</p>
<p>We strongly recommend that you continue to wear masks during lectures, tutorials, and office hours out of consideration for the health of others. We also strongly encourage you to get vaccine booster shots whenever possible. The instructors plan to wear masks when in close proximity with students, such as when answering questions after lectures or during office hours. However, we may take off our masks when lecturing if we are at a safe distance from students.</p>
            <br></br>
            <div align="right">
              <small>September 12, 2022</small>
            </div>
          </Alert>
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
