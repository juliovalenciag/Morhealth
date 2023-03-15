import React from 'react';
import styled from 'styled-components';

const Principal = () => {
  return (
    <DashboardContainer>
      

      <UsersWidget> HOLA </UsersWidget>
      <SalesWidget> HOLA 

        <div>
          <img src='https://images.unsplash.com/photo-1583339824000-5afecfd41835?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
        </div>
      </SalesWidget>
      <OrdersWidget> HOLA </OrdersWidget>
      <AnalyticsWidget> HOLA
        <div>
          <img src='https://images.unsplash.com/photo-1620812097331-ff636155488f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
        </div>
        
        
         </AnalyticsWidget>
    </DashboardContainer>
  ) 
}

const DashboardContainer = styled.div`
  display: grid;
  padding: 2.5rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "users sales orders analytics"
    "users sales orders analytics";
  grid-gap: 20px;
`;

const UsersWidget = styled.div`
  grid-area: users;
  background-color: #f5f5f5;
  padding: 20px;
`;

const SalesWidget = styled.div`
  grid-area: sales;
  background-color: #f5f5f5;
  padding: 20px;
`;

const OrdersWidget = styled.div`
  grid-area: orders;
  background-color: #f5f5f5;
  padding: 20px;
`;

const AnalyticsWidget = styled.div`
  grid-area: analytics;
  background-color: #FF5733;
  padding: 20px;
`;

export default Principal
