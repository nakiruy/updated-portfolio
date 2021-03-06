import React from 'react';
import { Media, Col, Row, Jumbotron, Container, Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
import AOS from 'aos';
import ImageZoom from 'react-medium-image-zoom';

class TapcastBillingContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }

  render() {
    return (
      <Container>
        <Jumbotron className="tapcast-billing-projpic" fluid></Jumbotron>
        <CardGroup className="proj-brief" id="tapcast-brief">
          <Card className="text-left">
            <CardBody data-aos="fade-up">
              <CardTitle className="tapcast-billing-color">Role</CardTitle>
              <CardText>UI/UX, PM</CardText>
            </CardBody>
          </Card>
          <Card className="text-left">
            <CardBody data-aos="fade-up">
              <CardTitle className="tapcast-billing-color">Duration</CardTitle>
              <CardText>Nov - Dec 2018</CardText>
            </CardBody>
          </Card>
          <Card className="text-left">
            <CardBody data-aos="fade-up">
              <CardTitle className="tapcast-billing-color">Tools</CardTitle>
              <CardText>Sketch, Asana, Paper & Pen</CardText>
            </CardBody>
          </Card>
        </CardGroup>
        <hr></hr>
        <Col className="tapcast-process">
          <Row>
            <Col lg="4" data-aos="fade-up">
              <h6 className="secondary-header process-heading"><div className="numbers tapcast-billing-color">01.</div>The Beginning</h6>
            </Col>
            <Col lg="8" data-aos="fade-up">
              <Media body>
                <a href="https://www.tapcast.io"><span className="tapcast-billing-links">Tapcast</span></a> is a data-driven, marketing intelligence platform aimed to help marketers to understand and scale their Facebook audiences. <br></br><br></br>
                Before Q4 2018, we frequently changed billing plans (in fact, we audited internally and found that we changed our billing model six times since the beginning of the year) and desperately needed a more permanent pricing model for our SaaS platform. <br></br><br></br>
                The changes eventually caught up with us and <span className="chunky-underline" id="tapcast-billing-underline-color">we were forced to face the challenge of coming up with a well-architected payment model that required less maintenance and increased customer acquisition.</span> As a designer and a PM at Tapcast, I established the user flow, designed mockups, and managed this project from inception to deployment. <br></br>             
              </Media>
            </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-billing-color">02.</div> The Problem</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  <span className="chunky-underline" id="tapcast-billing-underline-color">One of our biggest problems was born out of our own doing.</span> As briefly mentioned above, we had implemented <span className="chunky-underline" id="tapcast-billing-underline-color">six different pricing models</span> within the year. These changes ranged from the number of ad accounts to subscription pricing and from plan names to whether or not we should charge clients based on Facebook ad spend. As changes accumulated, it was becoming increasingly difficult to keep up with them. We were spending a lot of time keeping track of legacy billing models which led to a massive workload debt in operations and development sides of the business.  <br></br><br></br>
                  Moreover, despite the efforts and pivots, we discovered via funnel analysis that our total conversion rate of purchases was less than ideal.<br></br><br></br>
                  <ImageZoom
                        image={{
                          src: 'https://assets.yurika.design/tapcastbilling/before.png',
                          alt: 'Dashboard',
                          className: 'proj-img',
                          style: { width: '100%' }
                        }}
                        zoomImage={{
                          src: 'https://assets.yurika.design/tapcastbilling/before.png',
                          alt: 'Dashboard',
                          className: 'proj-img'
                        }}
                    /><br></br>
                    <span className="img-caption">Initial purchase conversion rate</span> <br></br><br></br>
                    <span className="chunky-underline" id="tapcast-billing-underline-color">Needless to say, we felt strongly that we could do better.</span>
                </Media>
              </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-billing-color">03.</div> The Process</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                To kickstart this process, we first consolidated the most common customer feedback to grasp where we had fallen short in our current pricing model.
                <br></br><br></br>
                <ul className="tapcast-painpoints" id="tapcast-solution">
                  <li>"Why am I being charged $299? What are the factors that are driving up the cost?"</li>
                  <li>"How can I add more ad accounts and how would that impact my current billing plan?"</li>
                  <li>"Is there a cheaper pricing option? I’m a small-business owner/startup and can’t afford the suggested pricing plans currently."</li>
                  <li>"How do I upgrade?"</li>
                </ul>
                <br></br>
                We then laid out our current pricing plans and payment flow:
                <br></br><br></br>
                <ul className="tapcast-painpoints" id="tapcast-solution">
                  <li>Three plans for software: Essentials, Premium, and Enterprise with pricing starting at $299, $499, and $2500 respectively</li>
                  <li>Essentials plan included one user and one ad account with access to most features</li>
                  <li>Premium plan included ten users and one ad account with access to all features</li>
                  <li>Enterprise plan included unlimited users and ad accounts</li>
                  <li>Users can upgrade accounts by clicking on Subscription under user profile dropdown and then clicking Buy/Upgrade to be rerouted to the Billing page</li>
                  <li>Then the user would have to select a plan, enter a billing address, and enter a credit card number to complete process</li>
                </ul>
                <br></br>
                <span className="chunky-underline" id="tapcast-billing-underline-color">Comparing and contrasting what we had versus customer complaints, we gained a high-level sense of where we went south.</span> However, we wanted a clearer picture of the problem. We all agreed to diverge and conduct an analysis of our own. As a part of this process, I conducted quick surveys both internally and externally and observed customer behaviors using <a href="https://www.fullstory.com/"><span className="tapcast-billing-links">FullStory</span></a>.
                <br></br><br></br>
                After numerous planned and ad-hoc meetings in regards to this problem, I combined our findings and broke down what changes we needed to implement for a new billing process on <a href="https://asana.com/"><span className="tapcast-billing-links">Asana</span></a>: 
                <br></br><br></br>
                <ul className="tapcast-painpoints" id="tapcast-solution">
                  <li>Create a dynamic pricing model based on the client’s trailing 30-day ad spend on Facebook and the number of ad accounts</li>
                  <li>Provide pricing breakdown for potential and existing clients to clarify our billing model</li>
                  <li>Integrate billing to onboarding flow for transparency upfront and avoid obscurity on where and how one can upgrade</li>
                  <li>Limit free trial days to 7 days and one ad account but allow free trial users to have access to all features (previously, we allowed 14 days free trial but we noticed many potential users tended to drop off after the second week)</li>
                </ul>
                </Media>
              </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-billing-color">04.</div> The Solution</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  <ImageZoom
                        image={{
                          src: 'https://assets.yurika.design/tapcastbilling/initial.jpg',
                          alt: 'Dashboard',
                          className: 'proj-img',
                          style: { width: '100%' }
                        }}
                        zoomImage={{
                          src: 'https://assets.yurika.design/tapcastbilling/initial.jpg',
                          alt: 'Dashboard',
                          className: 'proj-img'
                        }}
                    /><br></br>
                    <span className="img-caption">Before selection</span> <br></br><br></br>
                    <ImageZoom
                        image={{
                          src: 'https://assets.yurika.design/tapcastbilling/freetrial.jpg',
                          alt: 'Dashboard',
                          className: 'proj-img',
                          style: { width: '100%' }
                        }}
                        zoomImage={{
                          src: 'https://assets.yurika.design/tapcastbilling/freetrial.jpg',
                          alt: 'Dashboard',
                          className: 'proj-img'
                        }}
                    /><br></br>
                    <span className="img-caption">Free trial</span> <br></br><br></br>
                    <ImageZoom
                        image={{
                          src: 'https://assets.yurika.design/tapcastbilling/selectadaccount199.jpg',
                          alt: 'Dashboard',
                          className: 'proj-img',
                          style: { width: '100%' }
                        }}
                        zoomImage={{
                          src: 'https://assets.yurika.design/tapcastbilling/selectadaccount199.jpg',
                          alt: 'Dashboard',
                          className: 'proj-img'
                        }}
                    /><br></br>
                    <span className="img-caption">Initial selection</span> <br></br><br></br>
                    <ImageZoom
                        image={{
                          src: 'https://assets.yurika.design/tapcastbilling/selectadaccount299.jpg',
                          alt: 'Dashboard',
                          className: 'proj-img',
                          style: { width: '100%' }
                        }}
                        zoomImage={{
                          src: 'https://assets.yurika.design/tapcastbilling/selectadaccount299.jpg',
                          alt: 'Dashboard',
                          className: 'proj-img'
                        }}
                    /><br></br>
                    <span className="img-caption">Modify selection</span> <br></br><br></br>
                    <ImageZoom
                        image={{
                          src: 'https://assets.yurika.design/tapcastbilling/select2adaccounts.jpg',
                          alt: 'Dashboard',
                          className: 'proj-img',
                          style: { width: '100%' }
                        }}
                        zoomImage={{
                          src: 'https://assets.yurika.design/tapcastbilling/select2adaccounts.jpg',
                          alt: 'Dashboard',
                          className: 'proj-img'
                        }}
                    /><br></br>
                    <span className="img-caption">Add selection</span> <br></br><br></br>
                    <ImageZoom
                        image={{
                          src: 'https://assets.yurika.design/tapcastbilling/enterprise.jpg',
                          alt: 'Dashboard',
                          className: 'proj-img',
                          style: { width: '100%' }
                        }}
                        zoomImage={{
                          src: 'https://assets.yurika.design/tapcastbilling/enterprise.jpg',
                          alt: 'Dashboard',
                          className: 'proj-img'
                        }}
                    /><br></br>
                    <span className="img-caption">Enterprise plan</span> <br></br><br></br>
                    Key changes to note -
                    <br></br>
                    <ul className="tapcast-painpoints" id="tapcast-solution">
                      <li><span className="chunky-underline" id="tapcast-billing-underline-color">Increased pricing visibility</span> to users by combining the selection of ad accounts with the payment/upgrade functionality (part of onboarding)</li>
                      <li>Previously, a user could upgrade their plan from /subscription/upgrade path and select their desired monthly plan</li>
                      <li>Now, <span className="chunky-underline" id="tapcast-billing-underline-color">users can pay upfront</span> if they’d like as payment modal is part of the onboarding and even if they choose not to, they’ll know exactly where to go at a later time</li>
                      <li>Added a high-level overview of the number of ad accounts, 30 days associated ad spend, and monthly price</li>
                      <li>Added a breakdown tooltip if a user would like to see the granular calculation of given price</li>
                      <li>Incorporated a summary for each payment scenario so the customer can see the terms of billing in full transparency</li>
                      <li><span className="chunky-underline" id="tapcast-billing-underline-color">Decreased friction</span> by minimizing the steps in the payment process (previously, we had four steps and now two)</li>
                    </ul>
                </Media>
              </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header process-heading"><div className="numbers tapcast-billing-color">05.</div> The End</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                We successfully released this particular pricing iteration back in early December 2018 as part of our v2.5.0 release. Since then, <span className="chunky-underline" id="tapcast-billing-underline-color">we have doubled the conversion rate</span> from user registration to purchase (from 3.8% to 8.2%) and the volume of related support tickets <span className="chunky-underline" id="tapcast-billing-underline-color">decreased significantly</span> (previously, most of our support tickets related to pricing was in regards to how to upgrade and why pricing was the way it was - we have now tackled that). Internally, we were able to decrease our workload debt not only in customer service but in operations, development, and sales since we no longer needed to keep track of six different legacy pricing plans. We were then able to contribute our time in more high-value tasks. As we are a small team, <span className="chunky-underline" id="tapcast-billing-underline-color">this was a huge win for us.</span> 
                <br></br><br></br>
                As I am writing this (August 2019), we have had minor changes to the original spec such as integrating credit card/billing information from a link to a next step in the upgrade process for a more seamless experience. But overall, we have mostly kept the original flow and pricing model. 
                </Media>
              </Col>
            </Row>
            <Row>
              <Col lg="4" data-aos="fade-up">
                <h6 className="secondary-header" id="tapcast-billing-secondary">key takeaways</h6>
              </Col>
              <Col lg="8" data-aos="fade-up">
                <Media body>
                  <ol className="takeaways">
                    <li>Let customer feedback be the guiding light for solving problems.</li>
                    <li>Work within technical constraints but don't forget to champion for UX.</li>
                    <li>Know when to work cross-functionally and when to work individually.</li>
                  </ol>
                </Media>
              </Col>
            </Row>
        </Col>
      </Container>
    );
  }
}

export default TapcastBillingContent