import React from 'react';
import styled from 'styled-components';
import { RiLineChartLine, RiHashtag } from "react-icons/ri";

const Principal = () => {
  return (
    
    <Main>
    {/* Section 1 */}
    <Section1>
      {/* Card 1 */}
      <Card1>
        <RiLineChartLine className="text-3xl" />
        <h4 className="text-2xl">Earnings</h4>
        <span className="text-5xl text-white">€ 8,350</span>
        <span className="py-1 px-3 bg-primary-300/80 rounded-full">
          + 10% since last month
        </span>
      </Card1>
      {/* Card 2 */}
      <Card2>{/* Add the rest of the JSX structure here */}</Card2>
      {/* Card 3 */}
      {/* Add the rest of the JSX structure here */}
    </Section1>
    {/* Section 2 */}
    <Section2>
      <div>
        <h1 className="text-2xl font-bold mb-8">Recent invoices</h1>
        <InvoiceContainer>
          {/* Card 1 */}
          <InvoiceGrid>
            <div className="col-span-2 flex items-center gap-4">
              <ClientImage src="https://img.freepik.com/foto-gratis/hombre-joven-hermoso-contento-camiseta-azul-que-senala-lado_1262-17845.jpg" />
              <ClientInfo>
                <ClientName>Alexander Williams</ClientName>
                <ClientCompany>JQ Holdings</ClientCompany>
              </ClientInfo>
            </div>
            <div>
              <PaidStatus>Paid</PaidStatus>
            </div>
            <div>
              <InvoiceAmount>&euro; 1,200.87</InvoiceAmount>
            </div>
          </InvoiceGrid>
          {/* Card 2 */}
          <InvoiceGrid>
            <div className="col-span-2 flex items-center gap-4">
              <ClientImage src="https://img.freepik.com/foto-gratis/alegre-joven-deportista-posando-mostrando-pulgares-arriba-gesto_171337-8194.jpg" />
              <ClientInfo>
                <ClientName>Jhon Philips</ClientName>
                <ClientCompany>Inchor Techs</ClientCompany>
              </ClientInfo>
            </div>
            <div>
              <LateStatus>Late</LateStatus>
            </div>
            <div>
              <InvoiceAmount>&euro; 12,998.88</InvoiceAmount>
            </div>
          </InvoiceGrid>
        </InvoiceContainer>
      <PromoContainer>
      <div>
        <PromoIcon />
      </div>
      <div>
        <PromoTitle>Engage with clients</PromoTitle>
        <PromoSubtitle>Join slack channel</PromoSubtitle>
      </div>
      <PromoButtonContainer>
        <PromoButton>Join now</PromoButton>
      </PromoButtonContainer>
    </PromoContainer>
      </div>
      <ProjectContainer>
        <h1 className="text-2xl font-bold mb-8">Recommended project</h1>
        <ProjectCard>
          <TopProjectSection>
            <div className="flex items-center gap-4">
              <ProjectImage src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca  _23-2149207185.jpg" />
              <ProjectInfo>
                <ClientName>Thomas Martin</ClientName>
                <ProjectUpdate>Updated 10m ago</ProjectUpdate>
              </ProjectInfo>
            </div>
            <div>
              <DesignTag>Design</DesignTag>
            </div>
          </TopProjectSection>
          <ProjectDescription>
            <ProjectTitle>
              Need a designer to form branding essentials for my business.
            </ProjectTitle>
            <ProjectText>
              Looking for a talented brand designer to create all the branding
              materials my new startup.
            </ProjectText>
          </ProjectDescription>
          <ProjectDetails>
            <ProjectPrice>
              <ProjectPriceSmall>&euro;</ProjectPriceSmall>
              <span>8,700</span>
              <ProjectPriceText>/ month</ProjectPriceText>
            </ProjectPrice>
            <ProjectType>Full time</ProjectType>
          </ProjectDetails>
        </ProjectCard>
      </ProjectContainer>
    </Section2>
    {/* Add the rest of the JSX structure here */}
  </Main>
    
  ) 
}

const Main = styled.main`
  grid-column: span 3;
  background-color: #F3F4F6;
  padding: 2rem;
  height: 100vh;
  overflow-y: scroll;

  @media (min-width: 1024px) {
    grid-column: span 5;
  }
`;

const Section1 = styled.section`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const Card1 = styled.div`
  background-color: #1E3A8A;
  padding: 1.5rem;
  border-radius: 0.75rem;
  color: #94A3B8;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Card2 = styled.div`
  padding: 0.5rem;
  background-color: #FFFFFF;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const Section2 = styled.section`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const InvoiceContainer = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const InvoiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  align-items: center;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const ClientImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  object-fit: cover;
  border-radius: 9999px;
`;

const ClientInfo = styled.div``;

const ClientName = styled.h3`
  font-weight: 700;
`;

const ClientCompany = styled.p`
  color: #6b7280;
`;

const PaidStatus = styled.span`
  background-color: #dcffe4;
  color: #059669;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-weight: 500;
`;

const LateStatus = styled.span`
  background-color: #fee2e2;
  color: #b91c1c;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-weight: 500;
`;

const InvoiceAmount = styled.span`
  font-weight: 700;
`;

const ProjectContainer = styled.div``;

const ProjectCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const TopProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

const ProjectImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  object-fit: cover;
  border-radius: 9999px;
`;

const ProjectInfo = styled.div``;

const ProjectUpdate = styled.p`
  color: #6b7280;
`;

const DesignTag = styled.span`
  background-color: #60a5fa;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  color: #ffffff;
`;

const ProjectDescription = styled.div``;

const ProjectTitle = styled.h5`
font-weight: 700;
font-size: 1.25rem;
`;

const ProjectText = styled.p`
color: #6b7280;
`;

const ProjectDetails = styled.div`
background-color: rgba(96, 165, 250, 0.1);
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 1rem;
padding: 2rem;
border-radius: 0.5rem;

@media (min-width: 768px) {
  flex-direction: row;
}
`;

const ProjectPrice = styled.div`
font-weight: 700;
font-size: 1.5rem;
color: #3b82f6;
display: flex;
align-items: baseline;
`;

const ProjectPriceSmall = styled.sup`
font-size: 0.75rem;
color: #6b7280;
`;

const ProjectPriceText = styled.span`
font-size: 0.75rem;
color: #6b7280;
`;

const ProjectType = styled.span`
border: 1px solid #60a5fa;
color: #60a5fa;
padding: 0.5rem 1rem;
border-radius: 9999px;
`;


const PromoContainer = styled.div`
  background-color: #1f2937;
  color: #cbd5e1;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  @media (min-width: 1280px) {
    flex-wrap: nowrap;
  }
`;

const PromoIcon = styled(RiHashtag)`
  font-size: 2.5rem;
  transform: rotate(-12deg);
`;

const PromoTitle = styled.h5`
  font-weight: bold;
  color: #ffffff;
`;

const PromoSubtitle = styled.h5``;

const PromoButtonContainer = styled.div`
  width: 100%;

  @media (min-width: 1280px) {
    width: auto;
  }
`;

const PromoButton = styled.button`
  background-color: #60a5fa;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  color: #ffffff;
  width: 100%;
`;


export default Principal
