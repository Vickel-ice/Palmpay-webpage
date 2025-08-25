import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BalanceSection from './components/BalanceSection';
import MoneyTransfer from './components/MoneyTransfer';
import ServicesGrid from './components/ServicesGrid';
import BottomNav from './components/BottomNav';

import AddMoneyPage from './pages/AddMoneyPage.jsx';
import TransactionHistoryPage from './pages/TransactionHistoryPage.jsx'
import ToBankPage from './pages/ToBankPage.jsx'; 
import ToPalmPayPage from './pages/ToPalmPayPage.jsx';
import WithdrawPage from './pages/WithdrawPage.jsx';
import AirtimePage from './pages/AirtimePage.jsx';
import DataPage from './pages/DataPage.jsx';
import BettingPage from './pages/BettingPage.jsx';
import ElectricityPage from './pages/ElectricityPage.jsx';
import InsurancePage from './pages/InsurancePage.jsx';
import LoanPage from './pages/LoanPage.jsx';
import TVPage from './pages/TVPage.jsx';
import ReferEarnPage from './pages/ReferEarnPage.jsx';
import ATMCardPage from './pages/ATMCardPage.jsx';
import CashBoxPage from './pages/CashBoxPage.jsx';
import SmartEarnPage from './pages/SmartEarnPage.jsx';
import MyBusinessHubPage from './pages/MyBusinessHubPage.jsx';
import WealthPage from './pages/WealthPage.jsx';
import RewardPage from './pages/RewardPage.jsx';
import MePage from './pages/MePage.jsx';


function App() {
  const userBalance = 7545.72;

const servicesData = [
  { id:1, name: 'Airtime', icon: '📞'},
  { id:2, name: 'Data', icon:  '📶'},
  { id:3, name: 'Betting', icon: '⚽'},
  { id:4, name: 'Electricity', icon: '⚡', tag: '10% OFF' },
  { id:5, name: 'Insurance', icon: '🛡️'},
  { id:6, name: 'Loan', icon: '💰'},
  { id:7, name: 'TV', icon: '📺'},
  { id:8, name: 'Refer & Earn', icon: '🤝'},
  { id:9, name: 'ATM Card', icon:  '💳'},
  { id:10, name: 'CashBox', icon: '📦' },
  { id:11, name: 'SmartEarn', icon: '💡'},
  { id:12, name: 'My Business Hub', icon: '🏢'},
];

return (
  <div className="app-container">
    <Header />
    <main className="main-content">
      <Routes> {/* Use Routes to define your routes */}
          {/* Main home page route */}
          <Route path="/" element={
            <>
              <BalanceSection balance={userBalance} />
              <MoneyTransfer />
              <ServicesGrid services={servicesData} />
            </>
          } />
          
          {/* Routes for other pages */}
          <Route path="/add-money" element={<AddMoneyPage />} />
          <Route path="/transaction-history" element={<TransactionHistoryPage />} />
          <Route path="/to-bank" element={<ToBankPage />} />
          <Route path="/to-palmpay" element={<ToPalmPayPage />} />
          <Route path="/withdraw" element={<WithdrawPage />} />
          <Route path="/airtime" element={<AirtimePage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/betting" element={<BettingPage />} />
          <Route path="/electricity" element={<ElectricityPage />} />
          <Route path="/insurance" element={<InsurancePage />} />
          <Route path="/refer-earn" element={<ReferEarnPage />} />
          <Route path="/loan" element={<LoanPage />} />
          <Route path="/cashbox" element={<CashBoxPage />} />
          <Route path="/smartearn" element={<SmartEarnPage />} />
          <Route path="/atm-card" element={<ATMCardPage />} />
          <Route path="/wealth" element={<WealthPage />} />
          <Route path="/tv" element={<TVPage />} />
          <Route path="/my-business-hub" element={<MyBusinessHubPage />} />
          <Route path="/me" element={<MePage />} />
          <Route path="/reward" element={<RewardPage />} />
        
        </Routes>
      </main>
    <BottomNav />
  </div>
 );
};

export default App;