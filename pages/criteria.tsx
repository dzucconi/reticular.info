import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Page } from "../components/Page";

const Criteria: NextPage = () => {
  return (
    <>
      <Head>
        <title>Criteria</title>
      </Head>

      <Container>
        <ol>
          <li>Location</li>
          <li>Age</li>
          <li>Generation</li>
          <li>Gender</li>
          <li>Language</li>
          <li>Education level</li>
          <li>Field of study</li>
          <li>School</li>
          <li>Ethnic affinity</li>
          <li>Income and net worth</li>
          <li>Home ownership and type</li>
          <li>Home value</li>
          <li>Property size</li>
          <li>Square footage of home</li>
          <li>Year home was built</li>
          <li>Household composition</li>
          <li>Users who have an anniversary within 30 days</li>
          <li>Users who are away from family or hometown</li>
          <li>
            Users who are friends with someone who has an anniversary, is newly
            married or engaged, recently moved, or has an upcoming birthday
          </li>
          <li>Users in long-distance relationships</li>
          <li>Users in new relationships</li>
          <li>Users who have new jobs</li>
          <li>Users who are newly engaged</li>
          <li>Users who are newly married</li>
          <li>Users who have recently moved</li>
          <li>Users who have birthdays soon</li>
          <li>Parents</li>
          <li>Expectant parents</li>
          <li>Mothers, divided by “type” (soccer, trendy, etc.)</li>
          <li>Users who are likely to engage in politics</li>
          <li>Conservatives and liberals</li>
          <li>Relationship status</li>
          <li>Employer</li>
          <li>Industry</li>
          <li>Job title</li>
          <li>Office type</li>
          <li>Interests</li>
          <li>Users who own motorcycles</li>
          <li>
            Users who plan to buy a car (and what kind/brand of car, and how
            soon)
          </li>
          <li>Users who bought auto parts or accessories recently</li>
          <li>Users who are likely to need auto parts or services</li>
          <li>Style and brand of car you drive</li>
          <li>Year car was bought</li>
          <li>Age of car</li>
          <li>How much money user is likely to spend on next car</li>
          <li>Where user is likely to buy next car</li>
          <li>How many employees your company has</li>
          <li>Users who own small businesses</li>
          <li>Users who work in management or are executives</li>
          <li>Users who have donated to charity (divided by type)</li>
          <li>Operating system</li>
          <li>Users who play canvas games</li>
          <li>Users who own a gaming console</li>
          <li>Users who have created a Facebook event</li>
          <li>Users who have used Facebook Payments</li>
          <li>Users who have spent more than average on Facebook Payments</li>
          <li>Users who administer a Facebook page</li>
          <li>Users who have recently uploaded photos to Facebook</li>
          <li>Internet browser</li>
          <li>Email service</li>
          <li>Early/late adopters of technology</li>
          <li>Expats (divided by what country they are from originally)</li>
          <li>
            Users who belong to a credit union, national bank or regional bank
          </li>
          <li>Users who investor (divided by investment type)</li>
          <li>Number of credit lines</li>
          <li>Users who are active credit card users</li>
          <li>Credit card type</li>
          <li>Users who have a debit card</li>
          <li>Users who carry a balance on their credit card</li>
          <li>Users who listen to the radio</li>
          <li>Preference in TV shows</li>
          <li>
            Users who use a mobile device (divided by what brand they use)
          </li>
          <li>Internet connection type</li>
          <li>Users who recently acquired a smartphone or tablet</li>
          <li>Users who access the Internet through a smartphone or tablet</li>
          <li>Users who use coupons</li>
          <li>Types of clothing user’s household buys</li>
          <li>Time of year user’s household shops most</li>
          <li>Users who are “heavy” buyers of beer, wine or spirits</li>
          <li>Users who buy groceries (and what kinds)</li>
          <li>Users who buy beauty products</li>
          <li>
            Users who buy allergy medications, cough/cold medications, pain
            relief products, and over-the-counter meds
          </li>
          <li>Users who spend money on household products</li>
          <li>
            Users who spend money on products for kids or pets, and what kinds
            of pets
          </li>
          <li>Users whose household makes more purchases than is average</li>
          <li>Users who tend to shop online (or off)</li>
          <li>Types of restaurants user eats at</li>
          <li>Kinds of stores user shops at</li>
          <li>
            Users who are “receptive” to offers from companies offering online
            auto insurance, higher education or mortgages, and prepaid debit
            cards/satellite TV
          </li>
          <li>Length of time user has lived in house</li>
          <li>Users who are likely to move soon</li>
          <li>
            Users who are interested in the Olympics, fall football, cricket or
            Ramadan
          </li>
          <li>Users who travel frequently, for work or pleasure</li>
          <li>Users who commute to work</li>
          <li>Types of vacations user tends to go on</li>
          <li>Users who recently returned from a trip</li>
          <li>Users who recently used a travel app</li>
          <li>Users who participate in a timeshare</li>
        </ol>
      </Container>
    </>
  );
};

export default Criteria;

const Container = styled(Page)`
  ol {
    margin-left: 3ch;
    list-style-type: decimal;
  }
`;
