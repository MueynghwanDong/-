import React, {useState} from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import My from '../components/my/My';
import Footer from '../components/common/Footer';
import { Helmet } from 'react-helmet-async';
import DatePicker from 'react-datepicker';
const MyPage = () =>{
    const [startDate, setStartDate] = useState(new Date());
    return (
      <>
      <Helmet>
        <title>내 축사 - (우리회사)</title>
      </Helmet>
      <HeaderContainer />
      <My />
      <Footer />
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      </>
    );
};
export default MyPage;